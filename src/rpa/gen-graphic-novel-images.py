#!/usr/bin/env python3
"""
RPA script to automate pasting graphic novel image prompts into an AI image generation page.

Reads docs/stories/<story-name>/index.md, extracts image generation prompts from
<details> elements, and pastes each one into the focused window with a configurable
delay between prompts.

Usage:
    python gen-graphic-novel-images.py <story-name>
    python gen-graphic-novel-images.py <story-name> --start <panel-number>

Examples:
    python gen-graphic-novel-images.py halo-effect-lab
    python gen-graphic-novel-images.py halo-effect-lab --start 5

Requirements:
    pip install pynput pyperclip

On macOS you must grant Accessibility permission to your terminal app:
    System Settings → Privacy & Security → Accessibility → add Terminal / iTerm2

The script will give you a countdown to click the target text input field, then
paste each prompt and wait before the next one. Press Ctrl+C to stop at any time.
"""

import sys
import re
import time
import random
import argparse
import platform
import subprocess
from pathlib import Path

IS_MAC = platform.system() == "Darwin"

try:
    from pynput.keyboard import Key, Controller as KeyboardController
except ImportError:
    print("Error: pynput not installed. Run: pip install pynput")
    sys.exit(1)

try:
    import pyperclip
except ImportError:
    print("Error: pyperclip not installed. Run: pip install pyperclip")
    sys.exit(1)

# ── Configuration ─────────────────────────────────────────────────────────────

BASE_DIR = Path(__file__).resolve().parents[2]  # project root (src/rpa -> src -> root)
WAIT_MINUTES = 5
WAIT_SECONDS = WAIT_MINUTES * 60
JITTER_SECONDS = 30           # random ± variation on wait time
INITIAL_COUNTDOWN = 10        # seconds to switch focus to target window
BETWEEN_COUNTDOWN = 5         # seconds between "ready" warning and next paste

# ── Markdown parsing ──────────────────────────────────────────────────────────

def parse_image_prompts(md_path: Path) -> list[dict]:
    """Extract image prompts from <details> elements in a markdown file.

    Each <details> is expected to have the form:
        <details><summary>Short description</summary>
        Full image generation prompt text...
        </details>

    Returns a list of dicts with keys 'panel', 'summary', 'prompt'.
    """
    content = md_path.read_text(encoding="utf-8")

    pattern = re.compile(
        r"<details><summary>(.*?)</summary>(.*?)</details>",
        re.DOTALL,
    )

    prompts = []
    for i, match in enumerate(pattern.finditer(content), start=1):
        summary = match.group(1).strip()
        prompt = match.group(2).strip()
        # Derive the expected image filename: panel-01.png, panel-02.png, etc.
        image_file = md_path.parent / f"panel-{i:02d}.png"
        prompts.append({
            "panel": i,
            "summary": summary,
            "prompt": prompt,
            "image_file": image_file,
            "done": image_file.exists(),
        })

    return prompts

# ── UI helpers ────────────────────────────────────────────────────────────────

def countdown(seconds: int, message: str) -> None:
    """Print a live countdown to stdout, then print a newline."""
    for i in range(seconds, 0, -1):
        print(f"\r{message} {i:3d}s ", end="", flush=True)
        time.sleep(1)
    print()


def wait_with_display(total_seconds: int) -> None:
    """Block for total_seconds while printing a mm:ss countdown."""
    end_time = time.time() + total_seconds
    while True:
        remaining = int(end_time - time.time())
        if remaining <= 0:
            break
        mins, secs = divmod(remaining, 60)
        print(f"\r  Next prompt in: {mins:02d}:{secs:02d}  ", end="", flush=True)
        time.sleep(1)
    print()


def separator(width: int = 70) -> None:
    print("─" * width)

# ── Clipboard ─────────────────────────────────────────────────────────────────

def copy_to_clipboard(text: str) -> None:
    """Copy text to the system clipboard.

    On macOS, uses pbcopy directly (most reliable).
    Falls back to pyperclip on other platforms.
    """
    if IS_MAC:
        process = subprocess.Popen(
            ["pbcopy"],
            stdin=subprocess.PIPE,
            close_fds=True,
        )
        process.communicate(text.encode("utf-8"))
    else:
        pyperclip.copy(text)

# ── Paste keystroke ───────────────────────────────────────────────────────────

def send_paste() -> None:
    """Send the OS paste keystroke (Cmd+V on macOS, Ctrl+V elsewhere) via pynput."""
    kb = KeyboardController()
    modifier = Key.cmd if IS_MAC else Key.ctrl
    with kb.pressed(modifier):
        kb.press("v")
        kb.release("v")

# ── Core action ───────────────────────────────────────────────────────────────

def paste_prompt(prompt: str) -> None:
    """Copy prompt to clipboard, paste it, then press Return to submit."""
    copy_to_clipboard(prompt)
    time.sleep(0.8)   # give the clipboard write time to settle
    send_paste()
    time.sleep(0.5)   # brief pause so the paste lands before Return is sent
    kb = KeyboardController()
    kb.press(Key.enter)
    kb.release(Key.enter)

# ── Main ──────────────────────────────────────────────────────────────────────

def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        description="Paste graphic novel image prompts into an AI image generation page."
    )
    p.add_argument(
        "story",
        metavar="STORY_NAME",
        help='Name of the story folder under docs/stories/ (e.g. "halo-effect-lab")',
    )
    p.add_argument(
        "--start",
        metavar="N",
        type=int,
        default=1,
        help="Panel number to start from (default: 1)",
    )
    p.add_argument(
        "--wait",
        metavar="MINUTES",
        type=float,
        default=2.5,
        help="Minutes to wait between prompts (default: 2.5)",
    )
    p.add_argument(
        "--jitter",
        metavar="SECONDS",
        type=int,
        default=30,
        help="Random ± jitter in seconds on each wait (default: 30)",
    )
    return p


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()

    wait_seconds = int(args.wait * 60)
    jitter_seconds = args.jitter
    story_name = args.story

    md_path = BASE_DIR / "docs" / "stories" / story_name / "index.md"

    if not md_path.exists():
        print(f"Error: story file not found:\n  {md_path}")
        sys.exit(1)

    print(f"\nStory : {story_name}")
    print(f"File  : {md_path}")
    separator()

    prompts = parse_image_prompts(md_path)

    if not prompts:
        print("No image prompts found in <details> elements.")
        sys.exit(1)

    print(f"Found {len(prompts)} panel(s):\n")
    for p in prompts:
        status = "done" if p["done"] else "TODO"
        print(f"  Panel {p['panel']:2d}: [{status:4s}]  {p['summary']}")
    print()

    already_done = [p for p in prompts if p["done"]]
    if already_done:
        print(f"  Skipping {len(already_done)} panel(s) with existing images.")

    # Validate --start, then further filter out panels that already have images
    start_from = args.start
    if not (1 <= start_from <= len(prompts)):
        print(f"Warning: --start {start_from} is out of range. Starting from panel 1.")
        start_from = 1

    queue = [p for p in prompts if p["panel"] >= start_from and not p["done"]]

    if not queue:
        print("\nAll panels already have images. Nothing to do.")
        sys.exit(0)

    first_panel = queue[0]["panel"]
    print(f"Processing {len(queue)} panel(s) — first is panel {first_panel}.")
    if len(already_done) > 0:
        print(f"(panels with existing panel-NN.png files are automatically skipped)")
    separator()

    wait_mins = wait_seconds // 60
    wait_secs_rem = wait_seconds % 60
    print(f"\nWait between prompts : {wait_mins}m {wait_secs_rem}s ± {jitter_seconds}s")
    print(f"Failsafe             : press Ctrl+C in this terminal to stop")
    print()
    print("BEFORE YOU START — macOS permission check:")
    print("  If nothing gets pasted, go to:")
    print("  System Settings → Privacy & Security → Accessibility")
    print("  and add your terminal app (Terminal or iTerm2).")
    print()
    print("INSTRUCTIONS:")
    print(f"  1. Click inside the AI image generation text input field.")
    print(f"  2. You have {INITIAL_COUNTDOWN} seconds after pressing Enter to do this.")
    print(f"  3. The script pastes each prompt, then waits before the next.")
    print(f"  4. Press Ctrl+C to stop at any time.")
    print()

    # Quick self-test: verify clipboard works before the timed sequence starts
    copy_to_clipboard("clipboard-test-ok")
    time.sleep(0.3)
    try:
        import pyperclip as _pc
        result = _pc.paste()
        if "clipboard-test-ok" in result:
            print("  Clipboard: OK")
        else:
            print("  Clipboard: WARNING — could not verify (check pbcopy/pyperclip)")
    except Exception:
        print("  Clipboard: could not self-test (continuing anyway)")
    print()

    input("Press Enter when ready...")
    print()

    try:
        countdown(INITIAL_COUNTDOWN, "Switch to target window — pasting in")

        for i, panel in enumerate(queue):
            separator()
            print(f"Panel {panel['panel']}/{len(prompts)}: {panel['summary']}")
            print(f"  Save image as : {panel['image_file'].name}")
            print()
            print("  PROMPT:")
            print("  " + "\n  ".join(panel["prompt"].splitlines()))
            print()
            print(f"  Pasting now...")

            paste_prompt(panel["prompt"])

            print(f"  Pasted. Submit the generation in your image tool now.")
            print(f"  When done, save the image as: {panel['image_file']}")

            is_last = i == len(queue) - 1
            if is_last:
                break

            jitter = random.randint(-jitter_seconds, jitter_seconds)
            actual_wait = wait_seconds + jitter
            actual_mins, actual_secs = divmod(actual_wait, 60)
            print(f"  Waiting {actual_mins}m {actual_secs}s before next prompt...")
            wait_with_display(actual_wait)

            print(f"\n  Click the text input field now!")
            countdown(BETWEEN_COUNTDOWN, "  Pasting next prompt in")

        separator()
        print("\nAll prompts processed. Done!")

    except KeyboardInterrupt:
        print("\n\nStopped by user (Ctrl+C).")
        sys.exit(0)


if __name__ == "__main__":
    main()
