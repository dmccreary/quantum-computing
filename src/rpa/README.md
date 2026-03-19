# Graphic Novel Image Generation RPA

Robotic process automation (RPA) tools for batch-generating panel images for
the graphic novel stories in this textbook.

---

## `gen-graphic-novel-images.py`

Reads a story's `index.md`, extracts the image generation prompts hidden inside
`<details>` elements, and pastes them one by one into whatever AI image tool you
have open — automatically, with a paced delay between panels so you don't exceed
rate limits.

### Why this exists

Each story has 12–16 panels. Each panel has a detailed image generation prompt
stored in a collapsed `<details>` block so it doesn't clutter the rendered page:

```markdown
## Panel 1: The Nobel Prize

![](./panel-01.png)

<details><summary>Dr. Chen receiving her Nobel Prize on stage</summary>
Generate a wide-landscape graphic novel drawing with a width:height ratio
of 16:9. Use rich colors in the style of a thoughtful, cinematic graphic
novel...
</details>
```

Manually copying and pasting 13+ prompts, then waiting 5 minutes between each
one, is tedious and error-prone. This script handles the waiting and the pasting
so you can do other work.

---

## Installation

You need Python 3.10+ and two small libraries:

```bash
pip install pynput pyperclip
```

On macOS you **must** grant **Accessibility** permission to your terminal app
so that pynput can send keystrokes to other windows:

> System Settings → Privacy & Security → Accessibility → add Terminal or iTerm2

Without this permission the clipboard will be set correctly but nothing will be
pasted — the script will appear to work but the text won't appear in the target window.

---

## Usage

Run from the project root directory:

```bash
python src/rpa/gen-graphic-novel-images.py STORY_NAME [OPTIONS]
```

### Positional argument

| Argument | Description |
|---|---|
| `STORY_NAME` | Folder name under `docs/stories/` — e.g. `halo-effect-lab` |

### Options

| Flag | Default | Description |
|---|---|---|
| `--start N` | `1` | Resume from panel N (skip panels 1 through N−1) |
| `--wait MINUTES` | `5.0` | Minutes to wait between prompts |
| `--jitter SECONDS` | `30` | Random ± variation added to each wait (prevents detection as a bot) |

### Examples

```bash
# Generate all panels for "halo-effect-lab" from the beginning
python src/rpa/gen-graphic-novel-images.py halo-effect-lab

# Resume from panel 7 (e.g. if you were interrupted after panel 6)
python src/rpa/gen-graphic-novel-images.py halo-effect-lab --start 7

# Use a shorter wait for a tool with no rate limit
python src/rpa/gen-graphic-novel-images.py halo-effect-lab --wait 1 --jitter 10

# Use a longer wait if you're hitting rate limits
python src/rpa/gen-graphic-novel-images.py halo-effect-lab --wait 8 --jitter 45
```

---

## Step-by-step workflow

### 1. Open your AI image generation tool

Open ChatGPT, Midjourney, Adobe Firefly, or whichever tool you use. Navigate to
the text prompt input and make sure it is visible on screen.

### 2. Run the script

In your terminal:

```bash
python src/rpa/gen-graphic-novel-images.py halo-effect-lab
```

The script prints all panels it found and confirms which ones it will process:

```
Story : halo-effect-lab
File  : /path/to/docs/stories/halo-effect-lab/index.md
──────────────────────────────────────────────────────────────────────
Found 13 panel(s):

  Panel  1: Dr. Chen receiving her Nobel Prize on stage
  Panel  2: The company CEO approaches Dr. Chen backstage with a folder
  ...
  Panel 13: Watson presenting a critique — Dr. Chen in the front row

Processing 13 prompt(s) starting from panel 1.
──────────────────────────────────────────────────────────────────────

Wait between prompts : 5m 0s ± 30s
Failsafe             : move mouse to TOP-LEFT corner of screen to abort

INSTRUCTIONS:
  1. Click inside the AI image generation text input field.
  2. You have 10 seconds after pressing Enter to do this.
  3. The script pastes each prompt, then waits before the next.
  4. Press Ctrl+C (or move mouse to top-left) to stop.

Press Enter when ready...
```

### 3. Press Enter, then click the text input field

After pressing Enter you have **10 seconds** to click on the image tool's text
input field. The terminal will count down:

```
Switch to target window — pasting in  10s
Switch to target window — pasting in   9s
...
```

### 4. The script pastes and waits

Once the countdown reaches zero the first prompt is pasted via **Cmd+V** (macOS)
or **Ctrl+V** (Windows/Linux). You then submit the generation in your image tool
as normal (press Enter or click Generate).

The terminal then shows a live countdown to the next panel:

```
──────────────────────────────────────────────────────────────────────
Panel 1/13: Dr. Chen receiving her Nobel Prize on stage
  Prompt length : 912 characters
  Pasting now...
  ✓ Pasted. Submit the generation in your image tool now.
  Waiting 4m 47s before next prompt...
  Next prompt in: 04:46
```

When the wait ends, the script gives you a **5-second warning** to click back
into the text field, then pastes the next prompt automatically.

### 5. Save each generated image

After each generation completes, download the image and save it as:

```
docs/stories/STORY_NAME/panel-NN.png
```

For example:

```
docs/stories/halo-effect-lab/panel-01.png
docs/stories/halo-effect-lab/panel-02.png
...
```

The `index.md` files reference images with `![](./panel-NN.png)`, so this naming
convention is required for images to display on the site.

---

## Stopping and resuming

**To stop:** press `Ctrl+C` in the terminal, or move your mouse to the **top-left
corner** of your screen (PyAutoGUI failsafe).

**To resume:** note the last panel number that was successfully pasted, then
rerun with `--start`:

```bash
# If panels 1–5 are done and you want to continue from panel 6:
python src/rpa/gen-graphic-novel-images.py halo-effect-lab --start 6
```

---

## How the prompt is extracted

The script uses a regex to find every `<details>` block in the markdown:

```
<details><summary>SHORT DESCRIPTION</summary>
FULL IMAGE GENERATION PROMPT
</details>
```

- The **summary** (inside `<summary>`) is used only for display in the terminal.
- The **full prompt** (between `</summary>` and `</details>`) is what gets pasted.

Only `<details>` blocks are extracted — all other markdown content is ignored.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| `Error: pyperclip not installed` | Run `pip install pyperclip` |
| `Error: pyautogui not installed` | Run `pip install pyautogui` |
| Nothing gets pasted into the image tool | Grant Accessibility permission to your terminal in System Settings |
| Script pastes into the wrong window | Make sure you click the image tool's text field during the 10-second countdown |
| Rate limit errors in the image tool | Increase `--wait` (e.g. `--wait 8`) |
| Script pastes but text appears garbled | Some web apps intercept paste; try clicking directly into the input, not a surrounding div |
| `Error: story file not found` | Check that the folder name matches exactly: `docs/stories/STORY_NAME/index.md` must exist |

---

## Available stories

Run this to list all story folders:

```bash
ls docs/stories/
```

Current stories (as of this writing):

| Folder | Panels | Topic |
|---|---|---|
| `benchmark-slide` | — | Misleading benchmark presentations |
| `best-wrong-turn` | — | Productive research dead ends |
| `career-incentive-loop` | — | Incentive structures in research careers |
| `ciso-budget` | — | Security budget allocation decisions |
| `decoherence-clock` | — | Qubit decoherence timescales |
| `feynman-lecture` | — | Feynman's original quantum computing lecture |
| `five-year-forecast` | — | Unreliable technology forecasting |
| `grad-students-question` | — | Graduate student skepticism in seminars |
| `halo-effect-lab` | 13 | Nobel halo silencing junior researchers |
| `investor-fomo` | — | Fear-of-missing-out in quantum investment |
| `journalists-deadline` | — | Science journalism under deadline pressure |
| `professors-popular-book` | — | Academic popularization trade-offs |
| `quantum-inspired-rebrand` | — | Classical algorithms rebranded as quantum |
| `quantum-speedup-wasnt` | — | Claimed speedups that didn't hold up |
| `quantum-winter` | — | Historical AI winter parallels |
| `road-not-funded` | — | Opportunity costs of quantum investment |
| `seen-this-movie` | — | Pattern recognition across technology hypes |
| `sunk-cost-superconductor` | — | Sunk cost fallacy in hardware programs |
