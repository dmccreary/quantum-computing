---
title: The Barrier Stack
description: This MicroSim presents a stacked barrier visualization showing the key obstacles standing between today's quantum hardware and a commercially viable quantum computer. Barriers are stacked from bottom
image: /sims/barrier-stack/barrier-stack.png
og:image: /sims/barrier-stack/barrier-stack.png
---
# The Barrier Stack

This MicroSim presents a stacked barrier visualization showing the key
obstacles standing between today's quantum hardware and a commercially
viable quantum computer. Barriers are stacked from bottom (most fundamental)
to top (most practical), making it clear that higher-level barriers
cannot be resolved until the lower ones are addressed.

Physics barriers (decoherence, error rates, error correction overhead)
form the foundation in red and orange tones. Engineering barriers
(cryogenics, wiring, energy, infrastructure cost) sit above in blue
and green tones. A mixed barrier (connectivity limitations) bridges
the two categories.

Each barrier includes a difficulty score from 1 to 10, reflecting how
hard it is to overcome based on current evidence.

## The Barrier Stack MicroSim

<iframe src="./main.html" height="620" width="100%" scrolling="no"></iframe>

[View The Barrier Stack MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

[Edit on p5.js](https://editor.p5js.org/dmccreary/sketches/pxYrv40wq)

Hover over any barrier layer to see its current state of the art, what
improvement is needed, and the estimated timeline for progress. Click a
barrier to highlight the dependency chain — every barrier above depends
on the ones below. Notice that the physics barriers at the bottom carry
the highest difficulty scores and have no clear timeline for resolution,
yet every engineering barrier above them assumes these will be solved.

## Key Takeaways

- **Decoherence** (difficulty 10/10) is the most fundamental barrier — it is a consequence of thermodynamics, not an engineering shortfall.
- **Error correction overhead** creates a circular dependency: more qubits to correct errors, but more qubits introduce more errors.
- **Engineering barriers** (cryogenics, wiring, energy) are solvable in principle but only matter if the physics barriers below them are resolved first.
- **Infrastructure cost** at the top aggregates every barrier below — estimated at $5-50 billion for a single fault-tolerant machine.
- The stack structure shows that solving any one barrier in isolation does not bring quantum computing closer to viability; all must be addressed simultaneously.
