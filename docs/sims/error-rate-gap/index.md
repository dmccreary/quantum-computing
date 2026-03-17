# Error Rate Gap: Quantum vs. Classical

This MicroSim visualizes the enormous gap between current quantum computing
error rates and the error rates achieved by classical hardware. A vertical
logarithmic scale spanning twenty orders of magnitude reveals why uncorrected
quantum computation cannot produce reliable results for large-scale problems.

Key levels are marked on the scale: the current best quantum gate error rate
(around 10^-3), the quantum error correction threshold (10^-4), the range
needed for useful uncorrected computation (10^-6 to 10^-10), and the error
rates that classical silicon achieves routinely (10^-15 to 10^-18).

## Error Rate Gap MicroSim

<iframe src="./main.html" height="532" width="100%" scrolling="no"></iframe>

*[View Error Rate Gap MicroSim Fullscreen](./main.html)*

Use the improvement rate slider to explore how quickly the gap might close
under different assumptions about annual progress. Even at optimistic
improvement rates, reaching classical-level reliability takes decades to
centuries, illustrating why the error rate gap is not merely an engineering
problem but a fundamental barrier.

## Key Takeaways

- **Current quantum error rates (~10^-3)** are roughly a trillion times worse than classical hardware (~10^-15 to 10^-18).
- **The QEC threshold (~10^-4)** is necessary before error correction can even begin to help, and current hardware barely approaches it.
- **Useful uncorrected computation** requires error rates of 10^-6 or better, still a thousand-fold improvement over today's best.
- **Projected timelines** show that even steady logarithmic improvement takes decades to close the gap, assuming improvement rates do not plateau.
