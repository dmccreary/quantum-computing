---
title: Shor's Algorithm: Resource Requirements
description: This MicroSim visualizes the staggering hardware resources required to run Shor's algorithm for breaking RSA encryption at various key sizes. By adjusting the RSA key size slider, you can see how the
image: /sims/shors-algorithm-resources/shors-algorithm-resources.png
og:image: /sims/shors-algorithm-resources/shors-algorithm-resources.png
---
# Shor's Algorithm: Resource Requirements

This MicroSim visualizes the staggering hardware resources required to run
Shor's algorithm for breaking RSA encryption at various key sizes. By adjusting
the RSA key size slider, you can see how the number of logical qubits, physical
qubits (with error correction overhead), gate operations, and required coherence
times scale with the problem size.

The bar chart compares today's best quantum computer (roughly 1,000 physical
qubits) against the millions of qubits needed for cryptographically relevant
factoring, making the gap between current hardware and practical threat levels
immediately visible.

## Shor's Algorithm Resource Requirements MicroSim

<iframe src="./main.html" height="532" width="100%" scrolling="no"></iframe>

[View Shor's Algorithm Resource Requirements MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

Use the slider to explore different RSA key sizes from 16 bits up to 4,096 bits.
Notice how the physical qubit requirement grows linearly with key size but
remains thousands of times beyond current hardware capabilities for any
cryptographically relevant key length.

## Key Takeaways

- **Logical qubits** scale as roughly 2n for an n-bit RSA key, meaning RSA-2048 needs about 4,096 logical qubits.
- **Physical qubits** multiply the logical count by 1,000 to 10,000 for error correction, pushing the requirement into the millions.
- **Gate operations** scale as n cubed, requiring trillions of operations for RSA-2048.
- **The largest number ever factored** by Shor's algorithm on a quantum computer is 21 (in 2012), highlighting the enormous gap between demonstration and practical use.
- **Current quantum hardware** falls short by a factor of 4,000 to 20,000 in qubit count alone, before considering gate speed and coherence requirements.
