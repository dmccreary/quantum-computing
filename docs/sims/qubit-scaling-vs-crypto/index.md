---
title: Qubit Scaling vs. Cryptographic Requirements
description: This interactive chart shows the race between qubit scaling trajectories and the physical qubit counts required to break modern encryption standards. Use the sliders to explore how doubling time and
image: /sims/qubit-scaling-vs-crypto/qubit-scaling-vs-crypto.png
og:image: /sims/qubit-scaling-vs-crypto/qubit-scaling-vs-crypto.png
---
# Qubit Scaling vs. Cryptographic Requirements

This interactive chart shows the race between qubit scaling trajectories
and the physical qubit counts required to break modern encryption standards.
Use the sliders to explore how doubling time and error rate improvements
affect whether quantum computers can threaten cryptography before
post-quantum migration is complete.

<iframe src="./main.html" height="500" width="100%" scrolling="no"></iframe>

*[View Qubit Scaling vs. Cryptographic Requirements MicroSim Fullscreen](./main.html)*

The **horizontal dashed lines** mark the estimated physical qubit counts
needed to run Shor's algorithm against RSA-2048 and ECC-256 at various
error rates. The **projection line** extrapolates from the latest physical
qubit count using the doubling time you select. Toggle the PQC migration
timeline to see whether post-quantum cryptography standards are likely to
be deployed before the threat materializes.

At the default 1x error improvement setting, roughly 20 million physical
qubits are needed to break RSA-2048 -- a figure that remains far beyond
any plausible near-term trajectory.
