# A Skeptic's Guide to Quantum Computing

[![MkDocs](https://img.shields.io/badge/Made%20with-MkDocs-526CFE?logo=materialformkdocs)](https://www.mkdocs.org/)
[![Material for MkDocs](https://img.shields.io/badge/Material%20for%20MkDocs-526CFE?logo=materialformkdocs)](https://squidfunk.github.io/mkdocs-material/)
[![GitHub Pages](https://img.shields.io/badge/View%20on-GitHub%20Pages-blue?logo=github)](https://dmccreary.github.io/quantum-computing/)
[![GitHub](https://img.shields.io/badge/GitHub-dmccreary%2Fquantum--computing-blue?logo=github)](https://github.com/dmccreary/quantum-computing)
[![Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-DA7857?logo=anthropic)](https://claude.ai/code)
[![Claude Skills](https://img.shields.io/badge/Uses-Claude%20Skills-DA7857?logo=anthropic)](https://github.com/dmccreary/claude-skills)
[![p5.js](https://img.shields.io/badge/p5.js-ED225D?logo=p5.js&logoColor=white)](https://p5js.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## View the Live Site

Visit the interactive textbook at: [https://dmccreary.github.io/quantum-computing/](https://dmccreary.github.io/quantum-computing/)

## Overview

This is an interactive intelligent textbook offering **a skeptic's evidence-based guide to why quantum computing may never be economically viable**. It examines quantum computing through the lens of physics constraints, hardware realities, investment risk, cognitive bias, and the sociology of technology hype. The course spans 17 chapters covering everything from the fundamentals of quantum algorithms and hardware platforms to systems thinking, historical parallels, and frameworks for critical technology assessment.

Built using MkDocs Material with 52 interactive MicroSims (p5.js, vis-network, Chart.js, Plotly), a 241-concept learning graph with validated dependency structure, MathJax equations, and a custom AI learning mascot — **Fermi the Ferret** — who guides students through skeptical, evidence-based analysis at every step.

The textbook is designed for upper-division undergraduates, graduate students, technology investors, and policymakers who need structured, rigorous frameworks for evaluating emergent technology claims. It is not anti-quantum — it is pro-evidence.

## Site Status and Metrics

| Metric | Count |
|--------|-------|
| Concepts in Learning Graph | 241 |
| Chapters | 17 |
| Markdown Files | 127 |
| Total Words | ~195,000 |
| Interactive MicroSims | 52 |
| Glossary Terms | 241 |
| FAQ Questions | 99 |
| Quiz Questions | 680 |
| Mascot Admonition Poses | 7 |

**Learning Graph Quality**: Valid DAG structure, 0 cycles detected, 0 orphaned nodes, 232 concepts with dependencies.

## Getting Started

### Prerequisites

```bash
pip install mkdocs mkdocs-material
```

### Clone the Repository

```bash
git clone https://github.com/dmccreary/quantum-computing.git
cd quantum-computing
git checkout main
```

### Build and Serve Locally

```bash
# Validate configuration and build
mkdocs build

# Serve with live reload (run in a separate terminal)
mkdocs serve
```

Open your browser to `http://localhost:8000/quantum-computing/`

### Deploy to GitHub Pages

```bash
mkdocs gh-deploy
```

This builds the site and pushes the output to the `gh-pages` branch.

## Repository Structure

```
quantum-computing/
├── docs/                          # MkDocs source content
│   ├── chapters/                  # 17 chapter directories
│   │   └── NN-chapter-name/
│   │       ├── index.md          # Chapter content
│   │       ├── quiz.md           # Multiple-choice quiz
│   │       └── references.md     # Curated references
│   ├── sims/                      # 52 interactive MicroSims
│   │   └── sim-name/
│   │       ├── main.html         # Standalone simulation (p5.js, vis-network, etc.)
│   │       └── index.md          # MkDocs page with iframe embed
│   ├── learning-graph/            # 241-concept learning graph
│   │   ├── learning-graph.json   # vis-network format (nodes + edges)
│   │   ├── concept-list.md       # Full concept listing
│   │   └── quality-metrics.md    # Graph validation report
│   ├── img/mascot/                # 7 Fermi the Ferret PNG poses
│   ├── css/
│   │   ├── extra.css             # Layout and iframe styles
│   │   └── mascot.css            # Mascot admonition color styles
│   ├── js/
│   │   └── mathjax.js            # MathJax configuration
│   ├── glossary.md                # 241 ISO 11179-compliant definitions
│   ├── faq.md                     # 99 frequently asked questions
│   ├── appendices/               # Supplementary claim catalogs
│   └── course-description.md     # Authoritative source document
└── mkdocs.yml                     # Site configuration
```

## Reporting Issues

Found a bug, typo, or have a suggestion? Please report it on GitHub:

[https://github.com/dmccreary/quantum-computing/issues](https://github.com/dmccreary/quantum-computing/issues)

When reporting, include: description of the problem, steps to reproduce, and browser details for MicroSim issues.

## License

This work is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

**You are free to:** share and adapt the material.
**Under these terms:** Attribution · NonCommercial · ShareAlike

See [license.md](docs/license.md) for full details.

## Acknowledgements

- **[MkDocs](https://www.mkdocs.org/)** — Static site generator for project documentation
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)** — Responsive theme
- **[p5.js](https://p5js.org/)** — Creative coding library (NYU ITP)
- **[vis-network](https://visjs.org/)** — Network graph visualization
- **[Chart.js](https://www.chartjs.org/)** — Canvas-based charting
- **[Plotly.js](https://plotly.com/javascript/)** — Interactive scientific charts
- **[MathJax](https://www.mathjax.org/)** — LaTeX equation rendering
- **[Claude AI](https://claude.ai)** by Anthropic — AI-assisted content and MicroSim generation
- **[GitHub Pages](https://pages.github.com/)** — Free open source hosting

## Contact

**Dan McCreary**

- LinkedIn: [linkedin.com/in/danmccreary](https://www.linkedin.com/in/danmccreary/)
- GitHub: [@dmccreary](https://github.com/dmccreary)

Questions or collaboration opportunities? Connect on LinkedIn or open an issue on GitHub.
