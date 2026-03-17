# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

**A Skeptic's Guide to Quantum Computing: Why It May Never Be Economically Viable** — an MkDocs Material intelligent textbook examining quantum computing through the lens of economic viability, investment risk, cognitive bias, and the sociology of technology hype. The course has 17 chapters covering physics barriers, hardware platforms, investment analysis, cognitive biases, systems thinking, and critical thinking frameworks.

- **Site URL**: https://dmccreary.github.io/quantum-computing/
- **Repo**: https://github.com/dmccreary/quantum-computing
- **Target audience**: Upper-division undergraduates, graduate students, technology investors, policymakers
- **Tone**: Evidence-based, skeptical, analytical, direct. Not anti-quantum — pro-evidence.
- **Theme colors**: Indigo primary (#3F51B5), Orange accent (#FF7043)

## Content Generation Style Guide

### Writing Voice

- **Analytical and evidence-based** — every claim must be supported with data, citations, or logical reasoning
- **Skeptical but fair** — present proponents' arguments accurately before analyzing their weaknesses
- **Direct and concise** — avoid hedging language, filler, or unnecessary qualifiers
- **Use American English** spelling (color, center, analyze)
- **Accessible to interdisciplinary audience** — define physics/CS jargon on first use; don't assume all readers are physicists

### Chapter Structure

Every chapter should follow this structure:

1. **Fermi welcome admonition** at the top (mascot-welcome) introducing the chapter theme
2. **Learning objectives** listed after the welcome
3. **Body sections** with concepts, evidence, analysis
4. **2-3 mascot-thinking admonitions** at key analytical insights
5. **mascot-tip and mascot-warning admonitions** as needed for study tips and common mistakes
6. **Chapter summary** with a mascot-celebration admonition at the end

### Non-Text Elements

When generating chapter content, include placeholders and suggestions for:

- **Diagrams**: Timelines, causal loop diagrams, comparison tables, architecture diagrams
- **MicroSims**: Interactive simulations (p5.js preferred) for concepts like error correction overhead, decoherence timescales, investment expected value calculations
- **Equations**: Use MathJax notation (`$$...$$` for display, `$...$` for inline)
- **Tables**: For comparing hardware platforms, listing cognitive biases, tracking claims vs. outcomes
- **Mermaid diagrams**: For flowcharts, causal loops, and decision trees

### Admonition Usage (Non-Mascot)

Use standard MkDocs admonitions for content that doesn't need Fermi:

- `!!! note` — supplementary information
- `!!! example` — worked examples or case studies
- `!!! quote` — direct quotes from researchers, press releases, or reports
- `!!! abstract` — chapter summaries or key takeaways
- `!!! info` — background context or definitions

Reserve mascot admonitions for Fermi's voice (see below).

Do not place two admonitions back to back.  Always put in at least one paragraph of text between admonitions.

### iframe Elements

When adding an iframe element, never use a style attribute and always add `scrolling="no"`.

---

## Learning Mascot: Fermi the Ferret

### Character Overview

- **Name**: Fermi (after Enrico Fermi — back-of-envelope estimation, critical analysis)
- **Species**: Ferret (sniffs out invalid claims, relentless investigator)
- **Personality**: Curious but relentless, sharp-witted, demands evidence, dry humor
- **Catchphrase**: "But does the math check out?"
- **Visual**: Sleek chocolate-brown and cream ferret with small round silver-framed glasses, indigo vest with orange pocket square. No held objects.

### Voice Characteristics

- Uses direct, analytical language with occasional dry wit
- Uses investigation/detective metaphors ("Let's sniff this out", "Something doesn't add up here")
- Refers to students as "fellow investigators"
- Never credulous — always asks for evidence, even when presenting positive content
- Matches the book's tone: pro-evidence, not anti-quantum
- **Signature phrases**:
    - "But does the math check out?"
    - "Show me the numbers."
    - "Let's sniff this out."
    - "Interesting claim — where's the evidence?"
    - "That doesn't add up."
    - "Let's check the assumptions."

### Admonition Syntax and Placement

Each mascot admonition uses a custom CSS type and includes an inline image in the body. Always follow this exact pattern:

```markdown
!!! mascot-welcome "Fermi Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Fermi welcomes you">
    Welcome, fellow investigators! In this chapter we'll examine [topic].
    But does the math check out? Let's find out!
```

**Image path note**: The `src` path is relative to the HTML output, not the markdown file. For chapters at `chapters/NN-name/index.md`, use `../../img/mascot/POSE.png`. For pages at `docs/page.md`, use `img/mascot/POSE.png`. For pages in subdirectories like `learning-graph/page.md`, use `../img/mascot/POSE.png`.

### Placement Rules

| Context | Admonition Type | Image File | Frequency | Fermi's Tone |
|---------|----------------|------------|-----------|--------------|
| Chapter opening | `mascot-welcome` | welcome.png | Every chapter | Enthusiastic but skeptical — sets up what we'll investigate |
| Key analytical insight | `mascot-thinking` | thinking.png | 2-3 per chapter | Analytical — highlights a critical realization or pattern |
| Study technique or analytical tool | `mascot-tip` | tip.png | As needed | Helpful — shares a technique for evaluating claims |
| Common mistake or cognitive bias | `mascot-warning` | warning.png | As needed | Alert — flags where people get fooled or confused |
| Section/chapter completion | `mascot-celebration` | celebration.png | End of major sections | Proud — celebrates mastery of a critical thinking skill |
| Difficult content | `mascot-encourage` | encouraging.png | Where students may struggle | Supportive — normalizes difficulty, encourages persistence |
| General sidebar | `mascot-neutral` | neutral.png | As needed | Calm — provides context or a general observation |

### Example Admonitions for This Course

**Chapter opening:**
```markdown
!!! mascot-welcome "Fermi Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Fermi welcomes you">
    Welcome, fellow investigators! In this chapter we'll examine the
    staggering overhead of quantum error correction. Proponents say it's
    "just engineering." Let's sniff out whether the physics agrees.
    But does the math check out? Let's find out!
```

**Key insight:**
```markdown
!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    Notice the circular dependency: you need more qubits to correct errors,
    but more qubits introduce more errors. This isn't a problem you can
    simply engineer your way out of — it's a fundamental constraint.
```

**Analytical tip:**
```markdown
!!! mascot-tip "Fermi's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Fermi shares a tip">
    When a company claims "quantum advantage," always ask three questions:
    What problem was solved? What was the classical baseline? Does anyone
    actually need this problem solved commercially? That filters out most
    hype instantly.
```

**Cognitive bias warning:**
```markdown
!!! mascot-warning "Bias Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Fermi warns you">
    Watch for the sunk cost fallacy here. "We've invested $10 billion, so
    we can't stop now" is not a physics argument. Past spending tells you
    nothing about whether the remaining breakthroughs are achievable.
```

**Encouragement on hard material:**
```markdown
!!! mascot-encourage "You've Got This!"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Fermi encourages you">
    Quantum error correction math can feel overwhelming. But once you see
    that the overhead ratio means 1,000-10,000 physical qubits per logical
    qubit, the economics become startlingly clear. Stick with the numbers.
```

**Chapter completion:**
```markdown
!!! mascot-celebration "Excellent Investigative Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Fermi celebrates">
    You can now identify the five major cognitive biases that sustain
    quantum computing investment despite absent returns. That's a
    critical thinking superpower. Outstanding work, fellow investigator!
```

### Do's and Don'ts

**Do:**

- Use Fermi to introduce every chapter with healthy skepticism
- Include the catchphrase ("But does the math check out?") in welcome admonitions
- Keep Fermi's dialogue brief (1-3 sentences)
- Match the pose/image to the content type
- Have Fermi reference specific evidence, numbers, or logical frameworks
- Use Fermi for warnings about cognitive biases — this is his strongest use case
- Ensure at least one `mascot-thinking` and one `mascot-warning` per chapter

**Don't:**

- Use Fermi more than 5-6 times per chapter
- Put mascot admonitions back-to-back (at least one section of regular content between them)
- Use the mascot for purely decorative purposes — every appearance should add analytical value
- Change Fermi's personality or speech patterns
- Make Fermi credulous or uncritically enthusiastic about quantum computing claims
- Have Fermi hold objects in image prompts (images are too small to render detail)
- Use mascot admonitions where a standard admonition (`note`, `example`, `quote`) would be more appropriate

---

## Build Process

Use `mkdocs build` to check the `mkdocs.yml` file is valid.

Use `mkdocs gh-deploy` to publish the website to GitHub pages.

Assume the user is running `mkdocs serve` in a separate shell.

## Configuration (`mkdocs.yml`)

Key settings:
- Theme: MkDocs Material, primary color `indigo`, accent `orange`
- No `navigation.tabs` — this book uses side navigation only (never add `navigation.tabs`)
- Math: MathJax via external CDN + `docs/js/mathjax.js`
- `watch: [docs, mkdocs.yml]` for live reload

## Learning Graph Data (`docs/learning-graph/`)

Supporting data files:
- `learning-graph.csv` — edges as `from,to` concept pairs
- `learning-graph.json` — vis-network format with `nodes`, `edges`, and `metadata` elements

## Content Generation Architecture

### Content Layer (`docs/`)

- `docs/index.md` — Home page with cover image, Open Graph metadata in frontmatter
- `docs/course-description.md` — The authoritative source document; all learning graph concepts derive from it
- `docs/learning-graph/` — Learning graph data and analysis pages
- `docs/img/mascot/` — 7 Fermi PNG files (transparent background, ≤100 KB each)
- `docs/css/extra.css` — Layout and iframe styles
- `docs/css/mascot.css` — All 7 mascot admonition color styles + `.mascot-admonition-img` float rule
- `docs/js/extra.js` — Extra JavaScript
- `docs/js/mathjax.js` — MathJax configuration

### CSS Architecture

Two CSS files are loaded in order:
1. `extra.css` — structural styles (iframes, layout)
2. `mascot.css` — all 7 mascot admonition variants + shared image float rules

**Mascot CSS pattern:**
- Each admonition type gets its own `border-color` + `background-color` block
- CSS variables: `--mascot-primary` (indigo), `--mascot-secondary` (orange), `--mascot-bg`, `--mascot-size`
- `.mascot-admonition-img` uses `float: left; margin: 0 .5em 0 0` to place the image left of text
- `--mascot-size: 90px` controls image size in admonitions

### Mascot Images

7 PNG files at `docs/img/mascot/`:
`neutral.png`, `welcome.png`, `thinking.png`, `tip.png`, `warning.png`, `celebration.png`, `encouraging.png`

- Format: PNG with transparent background
- Target: 512x512 px generated, displayed at 90x90 px via CSS variable
- Generation prompts: `docs/img/mascot/image-prompts.md`

---

## Equations

### Critical Rule: Never Use Backslash Delimiters in Markdown

**NEVER write `\(...\)` or `\[...\]` directly in any `.md` file.** Python-Markdown can corrupt backslash sequences before MathJax ever sees them, silently breaking equations.

**Always use `$` and `$$` in markdown content files. No exceptions.**

### How the Pipeline Works

```
Markdown source     pymdownx.arithmatex      MathJax renders
──────────────      ───────────────────      ───────────────
$...$          →    \(...\)              →    inline equation
$$...$$        →    \[...\]             →    block equation
```

The arithmatex extension (configured with `generic: true` in `mkdocs.yml`) intercepts dollar-sign delimiters and converts them to backslash form *internally* before handing off to MathJax.

### Inline Equations

Wrap in single `$`:

```markdown
The expected value is $E[V] = P(\text{success}) \times \text{payoff} - \text{cost}$.

Error rate threshold: $p < p_{\text{th}}$ where $p_{\text{th}} \approx 10^{-3}$.
```

### Block (Display) Equations

Wrap in `$$` on its own lines:

```markdown
$$
E[ROI] = \sum_{i=1}^{n} P_i \cdot R_i - C_{\text{total}}
$$

$$
N_{\text{physical}} = N_{\text{logical}} \times \frac{1}{(p_{\text{th}} / p_{\text{phys}})^2}
$$
```

### What NOT to Write

```markdown
<!-- WRONG — backslash delimiters in markdown -->
\(p^2 + 2pq + q^2 = 1\)
\[E = mc^2\]

<!-- CORRECT -->
$p^2 + 2pq + q^2 = 1$
$$E = mc^2$$
```

---

## Chapter Content Guidelines

### MicroSim Embedding

Interactive simulations are built as self-contained iframes (HTML + JS). MicroSim files live at `docs/sims/<sim-name>/`.

**MicroSim file naming convention:** The interactive HTML file in every MicroSim folder must be named `main.html` — never `index.html`. The MkDocs page file remains `index.md`.

#### MicroSim background color

All interactive MicroSims must use `background: aliceblue` on the `<body>` element. This provides a consistent visual cue so students can immediately recognize an embedded MicroSim as an interactive element.

### Embedding a MicroSim in a Chapter

```markdown
## Error Correction Overhead Calculator

<iframe src="../../sims/error-correction-overhead/main.html" height="730" width="100%" scrolling="no"></iframe>

*[View Error Correction Overhead MicroSim Fullscreen](../../sims/error-correction-overhead/main.html)*

The simulation above lets you explore how physical error rates affect
the total qubit count needed for fault-tolerant computation.
```

Rules for iframe embeds in chapters:
- Never add a `style` attribute to the `<iframe>` element
- Always include `scrolling="no"`
- Add a `[View {NAME} MicroSim Fullscreen](...)` link immediately after the iframe
- Write 2-4 sentences of prose around the iframe — do not just drop the iframe with no context

### Updating the Site Navigation Menu

When finished creating a new MicroSim, add the new sim to `mkdocs.yml` nav under the MicroSims section.

---

## Token Efficiency: Serial Processing Only

These skills target teachers on the **Claude Pro plan**, which has a limited token budget. Teachers are **not sensitive to run times** — a task that takes 3 minutes instead of 1 minute is fine, but a task that burns excess tokens means they can do fewer tasks.

**NEVER use parallel agents unless the user explicitly requests it.** Always use a single serial agent for all generation tasks (quizzes, glossaries, FAQs, chapter content, MicroSims, etc.). Each parallel Task agent costs ~12K tokens in startup overhead, and spawning 4 agents wastes ~36K tokens that could be used for actual content generation. Do not offer parallel execution as an option — just use serial.
