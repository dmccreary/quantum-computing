---
title: The Shrinking 'Supremacy' Gap
description: In October 2019, Google announced that its 53-qubit Sycamore processor had achieved "quantum supremacy" by completing a random circuit sampling task in 200 seconds that would allegedly take the
image: /sims/supremacy-gap-timeline/supremacy-gap-timeline.png
og:image: /sims/supremacy-gap-timeline/supremacy-gap-timeline.png
---
# The Shrinking 'Supremacy' Gap

In October 2019, Google announced that its 53-qubit Sycamore processor
had achieved "quantum supremacy" by completing a random circuit sampling
task in 200 seconds that would allegedly take the world's fastest
supercomputer 10,000 years. This chart tracks what happened next, as
classical algorithm researchers systematically closed that gap.

<iframe src="./main.html" height="500" width="100%" scrolling="no"></iframe>

[View Supremacy Gap Timeline MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

Hover over each data point to see the source paper, hardware used, and
the specific algorithmic improvement that reduced the estimated classical
computation time. The orange dashed line marks Sycamore's 200-second
quantum execution time. Notice that by 2023, GPU-based classical
simulations completed the same task in roughly 15 seconds, meaning
classical computers were actually faster than the quantum processor.

This timeline illustrates a recurring pattern: quantum advantage claims
are measured against unoptimized classical baselines, and once classical
researchers focus on the same problem, the gap shrinks or disappears
entirely.

## What Is Random Circuit Sampling?

Random Circuit Sampling (RCS) is the specific computational task at the
center of Google's 2019 supremacy claim. The procedure is straightforward
to describe: apply a sequence of randomly chosen quantum gates to a set of
qubits, then measure the output bit string. Repeat this many times and
collect the output distribution. The claim is that verifying this
distribution — checking that the quantum device is producing the correct
statistical pattern — is classically intractable for sufficiently deep
circuits on sufficiently many qubits.

The hardness argument rests on complexity theory. Exactly simulating a
random quantum circuit requires computing $2^n$ amplitudes, where $n$ is
the number of qubits. For Sycamore's 53 qubits, that is roughly $9 \times
10^{15}$ complex numbers — far beyond the RAM of any classical machine.
Google's team estimated that storing the full state vector would require
approximately 10 petabytes of memory, making exact simulation practically
impossible.

However, RCS does not require *exact* simulation. It requires producing
samples from approximately the right distribution, which is a much weaker
condition. Tensor network contraction methods exploit the fact that
Sycamore's circuit has limited depth (20 cycles) and limited connectivity
(a 2D grid of 53 qubits). These algorithms decompose the circuit into
smaller pieces, contract them efficiently, and produce approximate samples
— achieving the same verification criterion without ever representing the
full $2^{53}$ state vector. This is exactly the approach that erased
Google's claimed advantage between 2021 and 2023.

## Why RCS Is a Poor Measure of Economic Value

The more important question is not whether quantum hardware can outperform
classical hardware at RCS, but whether RCS *matters*. On this criterion,
the answer is straightforwardly no.

**RCS is a self-referential benchmark.** The task is specifically
constructed to be hard for classical computers and easy for quantum
hardware. It has no known application outside of benchmarking quantum
hardware. No industry, government agency, financial institution, or
scientific laboratory has a workflow that requires sampling from the output
distribution of random quantum circuits. Demonstrating speed on RCS is
analogous to demonstrating that a Formula 1 car is faster than a bus on a
closed oval track — true, but irrelevant to whether the car solves any
transportation problem.

**The classical baseline was not optimized.** Google's team compared
Sycamore against an unoptimized simulation on Summit. This is a common
pattern in quantum supremacy claims: quantum hardware is benchmarked
against naive classical implementations rather than against the state of
the art. When IBM pointed out in 2019 that Summit could complete the task
in 2.5 days with sufficient disk storage — a factor of 1.5 million faster
than Google claimed — it was using an algorithm that Google's team had
not considered. The subsequent trajectory confirms this: classical
algorithms improved by roughly ten orders of magnitude in four years.

**Verification requires classical computation.** To confirm that a quantum
device correctly solved RCS, you must classically verify the output
distribution on a subset of circuit instances. For large circuits, even
this partial verification becomes classically hard — meaning the supremacy
claim is, in principle, unverifiable for the circuits where it matters
most. Google's 2019 experiment required classical cross-entropy benchmarking
on smaller circuits to extrapolate performance on larger ones.

**The task is noise-sensitive in ways that matter.** Sycamore's 53-qubit
circuit operates near the threshold of what noisy intermediate-scale
quantum (NISQ) devices can sustain coherently. Small increases in gate
error rates collapse the output distribution toward a uniform random
distribution, which is trivially simulable classically. The quantum
advantage exists only in a narrow operating regime, not as a robust
property of the hardware.

## The Benchmark Selection Problem

RCS exemplifies a broader methodological issue in quantum computing research:
benchmarks are often selected because quantum hardware performs well on them,
not because they represent economically valuable computation. A rigorous
evaluation of quantum advantage claims should ask:

1. Does the benchmark task appear in any real-world application workflow?
2. Was the classical baseline the best available algorithm, or a naive one?
3. Is the advantage robust to small increases in quantum error rates?
4. Can the advantage be independently verified without classical computation
   that is itself intractable?

The RCS benchmark fails all four tests. This does not mean quantum computers
are useless — it means that RCS supremacy is not evidence that they are
useful. The gap between "faster at a synthetic benchmark" and "economically
valuable" remains as wide as it was before October 2019.

## References

1. Arute, F., et al. (2019). "Quantum supremacy using a programmable
   superconducting processor." *Nature*, 574, 505–510.
   [https://doi.org/10.1038/s41586-019-1666-5](https://doi.org/10.1038/s41586-019-1666-5)

2. Pednault, E., et al. (2019). "Leveraging Secondary Storage to Simulate
   Deep 54-qubit Sycamore Circuits." *arXiv preprint arXiv:1910.09534*.
   [https://arxiv.org/abs/1910.09534](https://arxiv.org/abs/1910.09534)

3. Pan, F., & Zhang, P. (2022). "Simulation of Quantum Circuits Using the
   Big-Batch Tensor Network Method." *Physical Review Letters*, 128, 030501.
   [https://doi.org/10.1103/PhysRevLett.128.030501](https://doi.org/10.1103/PhysRevLett.128.030501)

4. Liu, Y., et al. (2021). "Closing the 'Quantum Supremacy' Gap: Achieving
   Real-Time Simulation of a Random Quantum Circuit Using a New Sunway
   Supercomputer." *Proceedings of SC '21*.
   [https://doi.org/10.1145/3458817.3487399](https://doi.org/10.1145/3458817.3487399)

5. Gao, X., et al. (2024). "Limitations of Linear Cross-Entropy as a
   Measure for Quantum Advantage." *PRX Quantum*, 5, 010334.
   [https://doi.org/10.1103/PRXQuantum.5.010334](https://doi.org/10.1103/PRXQuantum.5.010334)

6. Aaronson, S., & Gunn, S. (2019). "On the Classical Hardness of Spoofing
   Linear Cross-Entropy Benchmarking." *arXiv preprint arXiv:1910.12085*.
   [https://arxiv.org/abs/1910.12085](https://arxiv.org/abs/1910.12085)

7. Bravyi, S., et al. (2022). "Classical simulations of noisy variational
   quantum circuits via linear combinations of clifford circuits."
   *arXiv preprint arXiv:2306.05400*.
   [https://arxiv.org/abs/2306.05400](https://arxiv.org/abs/2306.05400)

8. Preskill, J. (2018). "Quantum Computing in the NISQ Era and Beyond."
   *Quantum*, 2, 79.
   [https://doi.org/10.22331/q-2018-08-06-79](https://doi.org/10.22331/q-2018-08-06-79)
