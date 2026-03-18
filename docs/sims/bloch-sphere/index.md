---
title: Qubit State on the Bloch Sphere
description: The Bloch sphere is a geometric representation of the state of a single qubit. Every point on the surface of the unit sphere corresponds to a pure qubit state. The north pole represents , the south
image: /sims/bloch-sphere/bloch-sphere.png
og:image: /sims/bloch-sphere/bloch-sphere.png
---
# Qubit State on the Bloch Sphere

The Bloch sphere is a geometric representation of the state of a single
qubit. Every point on the surface of the unit sphere corresponds to a
pure qubit state. The north pole represents $|0\rangle$, the south pole
represents $|1\rangle$, and points along the equator represent equal
superpositions with different relative phases.

## Bloch Sphere MicroSim

<iframe src="./main.html" height="552" width="100%" scrolling="no"></iframe>

[View Bloch Sphere MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

Use the theta slider to control the polar angle (how far the state
vector tilts from $|0\rangle$ toward $|1\rangle$) and the phi slider to
control the azimuthal angle (the relative phase between the basis states).
Click **Measure** to simulate a projective measurement that collapses
the qubit to $|0\rangle$ or $|1\rangle$ with the displayed probabilities.
The measurement statistics accumulate so you can verify that repeated
measurements match the predicted probabilities. You can also click and
drag on the sphere to rotate your viewing angle.

## Key Concepts

- **Polar angle** $\theta$: Controls the probability amplitudes. At $\theta = 0$ the qubit is in state $|0\rangle$; at $\theta = \pi$ it is in state $|1\rangle$.
- **Azimuthal angle** $\phi$: Controls the relative phase between $|0\rangle$ and $|1\rangle$. This phase is not observable in a single measurement but affects interference in quantum circuits.
- **Measurement probabilities**: $P(|0\rangle) = \cos^2(\theta/2)$ and $P(|1\rangle) = \sin^2(\theta/2)$. The phase $\phi$ does not affect these probabilities.
- **State vector**: The general single-qubit state is $|\psi\rangle = \cos(\theta/2)|0\rangle + e^{i\phi}\sin(\theta/2)|1\rangle$.
