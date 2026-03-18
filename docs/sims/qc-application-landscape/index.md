---
title: QC Application Landscape
description: This MicroSim presents a 2D bubble chart mapping proposed quantum computing applications by their likelihood of achieving genuine quantum advantage (x-axis) against their estimated market size
image: /sims/qc-application-landscape/qc-application-landscape.png
og:image: /sims/qc-application-landscape/qc-application-landscape.png
---
# QC Application Landscape

This MicroSim presents a 2D bubble chart mapping proposed quantum computing
applications by their likelihood of achieving genuine quantum advantage
(x-axis) against their estimated market size (y-axis). Bubble size indicates
the current level of investment in each domain. The chart is divided into
four quadrants to help students quickly classify applications.

The quadrants reveal a troubling pattern: the largest markets (machine
learning, optimization, financial modeling) cluster in the "Overhyped"
quadrant with low quantum advantage likelihood, while applications with
stronger theoretical foundations (cryptography, materials science) face
decades-long timelines before practical realization.

## QC Application Landscape MicroSim

<iframe src="./main.html" height="552" width="100%" scrolling="no"></iframe>

*[View QC Application Landscape MicroSim Fullscreen](./main.html)*

Hover over any bubble to see the key quantum algorithm, estimated qubit
requirements, current experimental status, and the classical alternative
that already serves this market. Notice that in every domain, a mature
classical solution is already deployed at commercial scale.

## Quadrant Interpretation

- **Overhyped** (low advantage, high market): Large markets attract investment despite weak evidence for quantum speedup. Machine learning and optimization fall here.
- **Sweet Spot** (high advantage, high market): The ideal target for quantum computing, but no application convincingly occupies this quadrant yet.
- **Niche** (high advantage, low market): Theoretically sound applications with limited commercial payoff, such as certain cryptanalysis scenarios.
- **Questionable** (low advantage, low market): Neither strong theory nor large markets justify significant investment.

## Key Takeaways

- The applications receiving the most investment (ML, optimization) have the weakest theoretical justification for quantum advantage.
- Cryptography has the strongest theoretical basis (Shor's algorithm) but requires millions of physical qubits — decades away.
- Every proposed quantum application already has a classical competitor deployed at commercial scale.
- Market size alone does not justify quantum computing investment — advantage likelihood matters more.
