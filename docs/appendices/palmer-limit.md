# Analysis: Tim Palmer's Rational Quantum Mechanics

**Paper:** "Rational Quantum Mechanics: Testing Quantum Theory with Quantum Computers"
**Author:** Tim Palmer, University of Oxford, Department of Physics
**Journal:** *Proceedings of the National Academy of Sciences (PNAS)*, March 2026
**arXiv:** [2510.02877v3](https://arxiv.org/abs/2510.02877v3)
**PNAS DOI:** [10.1073/pnas.2523350123](https://www.pnas.org/doi/abs/10.1073/pnas.2523350123)

---

## What the Paper Claims

Tim Palmer, an Emeritus Royal Society Research Professor at Oxford — best known for pioneering ensemble weather forecasting at the European Centre for Medium-Range Weather Forecasts (ECMWF) — proposes a modification to quantum mechanics called **Rational Quantum Mechanics (RaQM)**. The central claim: quantum computers face a **fundamental ceiling** around 200–1,000 qubits, beyond which algorithms requiring maximal entanglement lose their exponential advantage over classical computation. If correct, this means quantum computers will **never** break realistic RSA encryption — not because of engineering difficulties, but because of physics.

RaQM does not modify the Schrödinger equation. Instead, it restricts the bases in which the quantum state can be defined: squared amplitudes and complex phases must be **rational numbers**, not arbitrary real or complex numbers drawn from the continuum. This discretization of complex Hilbert space is motivated by John Wheeler's "it from bit" principle — the idea that the continuum nature of Hilbert space conceals an underlying information-theoretic structure.

---

## The Core Argument

### The Information Capacity Limit

In standard quantum mechanics, the number of dimensions in Hilbert space grows **exponentially** with the number of qubits: an $N$-qubit system requires $2^{N+1} - 2$ real parameters to fully specify its state. A 300-qubit system needs more parameters than there are atoms in the observable universe.

Palmer argues that the information actually available to describe an $N$-qubit system grows only **linearly** with $N$. This creates a crossover point — a finite **qubit information capacity** $N_{\text{max}}$ — beyond which there is insufficient information to allocate even one bit to each of the exponentially many continuum degrees of freedom.

Palmer estimates this limit at:

$$
200 \leq N_{\text{max}} \leq 1{,}000
$$

For any $N > N_{\text{max}}$, quantum algorithms that require bases with maximal $N$-qubit superposition and entanglement — including Shor's algorithm for integer factoring — lose their exponential speedup.

### Why Rational Numbers?

Palmer's discretization is not arbitrary. It connects to his earlier work on **Invariant Set Theory** (IST), which models the universe as a deterministically evolving system whose state space has a fractal geometry. The mathematical machinery draws on **$p$-adic number theory** — an alternative metric for measuring distances in state space.

In standard quantum mechanics, Bell's theorem is typically interpreted as ruling out local hidden variable theories. Palmer argues that this interpretation rests on an implicit assumption: that the Euclidean metric is the appropriate distance measure in state space. If one uses $p$-adic distances instead, Bell's argument is "largely negated," and one can construct a **superdeterministic but non-conspiratorial** model that preserves local causality while reproducing the observed violations of Bell inequalities.

### Implications for Quantum Computing

If RaQM is correct:

| Standard QM Prediction | RaQM Prediction |
|---|---|
| Shor's algorithm breaks RSA-2048 with ~4,000 logical qubits | Shor's algorithm fails before reaching the qubit count needed for RSA-2048 |
| Quantum advantage scales exponentially with qubit count | Quantum advantage saturates at $N_{\text{max}} \approx 200\text{–}1{,}000$ qubits |
| Quantum error correction enables fault-tolerant computation at any scale | Error correction cannot overcome the fundamental information capacity limit |
| Hilbert space is a continuum | Hilbert space is discretized; continuum behavior is an approximation |

---

## Why This Paper Matters for This Course

Palmer's argument is significant because it provides a **physics-based** ceiling on quantum computational advantage — not merely an engineering obstacle. Most skeptical arguments about quantum computing focus on the practical difficulty of error correction, decoherence, or manufacturing precision. Palmer goes further: even with perfect qubits and perfect error correction, RaQM predicts that exponential quantum speedups cannot scale beyond a few hundred to a thousand qubits.

This aligns with — but goes beyond — the skeptical position articulated throughout this course. If Palmer is right, the quantum computing industry is not merely facing hard engineering; it is facing a **law of physics**.

---

## Credibility Assessment

**Overall rating: 6 / 10 — Intellectually serious but highly speculative, with testable predictions.**

### Genuine Strengths

- **Published in PNAS with peer review.** This is not a fringe outlet. PNAS is one of the world's most cited scientific journals, and Palmer is an elected Fellow of the Royal Society (FRS) and Commander of the Order of the British Empire (CBE).
- **Falsifiable predictions.** Palmer explicitly states that his predicted breakdown of standard QM could be tested within 5 years using quantum computers that are either already built or under active development. A theory that tells you exactly how to prove it wrong deserves respect.
- **Addresses a real gap.** The question of whether Hilbert space is truly a continuum or an approximation is a legitimate foundational question in physics. Palmer is not the first to ask it — Wheeler, 't Hooft, and others have explored similar territory.
- **Coherent intellectual lineage.** RaQM is not a one-off paper. It builds on Palmer's decades of work on Invariant Set Theory, $p$-adic quantum mechanics, and superdeterminism, published across multiple peer-reviewed venues.
- **Independent of engineering arguments.** This is not a claim that quantum computers are hard to build. It is a claim about what quantum mechanics itself permits. Whether one agrees or not, the argument operates at a different level than typical skepticism.

### Legitimate Weaknesses

- **No experimental evidence yet.** As of early 2026, no experiment has confirmed RaQM's predictions. The theory's value depends entirely on its predictions being tested and confirmed. Palmer himself acknowledges this.
- **Superdeterminism is widely rejected.** The mainstream physics community is deeply skeptical of superdeterministic theories because they appear to undermine the very possibility of scientific experimentation — if measurement settings are correlated with hidden variables, how can any experiment be trusted? Palmer argues his version avoids this "conspiracy" objection, but most physicists remain unconvinced.
- **The 200–1,000 qubit range is suspiciously convenient.** It falls just above what current quantum computers can do (making it hard to falsify today) and just below what would be needed for the most dramatic applications (making it maximally impactful if true). This may be an honest estimate, but it invites scrutiny.
- **Climate physicist, not quantum physicist.** Palmer's distinguished career is in atmospheric science and weather prediction, not quantum foundations. He brings valuable mathematical skills — particularly in nonlinear dynamics, chaos theory, and ensemble methods — but his work on quantum mechanics has not been developed within the mainstream quantum foundations community. This does not make him wrong, but it means the theory has not been subjected to the same intensity of critical scrutiny as proposals from within the field.
- **The $p$-adic argument is hard to evaluate.** The claim that $p$-adic distances negate Bell's theorem is technically intricate and has not been widely accepted or even widely engaged with by the Bell inequality community. Absence of rebuttal is not the same as acceptance.
- **Continuum Hilbert space works extraordinarily well.** Standard quantum mechanics, with its continuum Hilbert space, has been confirmed to extraordinary precision in every experiment ever conducted. Proposing that it breaks down at a specific qubit count, when no deviation has ever been observed, is a strong claim that requires strong evidence.

---

## What to Watch For

Palmer's theory generates specific, testable predictions that should be resolved within the next few years:

1. **Shor's algorithm performance.** As quantum computers scale toward 200+ logical qubits, RaQM predicts measurable degradation in algorithms requiring maximal entanglement. If Google, IBM, or other groups successfully run Shor's algorithm on 300+ qubits with the expected exponential speedup, RaQM is falsified.

2. **Entanglement fidelity at scale.** RaQM predicts that maintaining maximal entanglement across hundreds of qubits becomes impossible for fundamental rather than engineering reasons. Experiments that demonstrate high-fidelity entanglement well beyond 200 qubits would be strong evidence against the theory.

3. **Bell inequality experiments.** Palmer's reinterpretation of Bell's theorem makes specific predictions about the structure of correlations in entangled systems. New loophole-free Bell tests designed to probe $p$-adic structure could provide evidence for or against RaQM.

4. **Community engagement.** Watch whether quantum foundations physicists begin engaging seriously with the $p$-adic framework. A theory can only be properly evaluated when experts in the relevant subfield scrutinize it.

---

## Relationship to Other Skeptical Arguments

Palmer's argument is **complementary to but independent from** the skeptical analysis in this course:

| This Course's Arguments | Palmer's Argument |
|---|---|
| Error correction overhead makes fault tolerance impractical | Error correction cannot overcome a fundamental information limit |
| Decoherence timescales are too short for useful computation | The continuum Hilbert space itself is an approximation |
| No commercially relevant quantum advantage has been demonstrated | Commercially relevant quantum advantage may be **impossible** |
| Investment is driven by hype and cognitive bias | The physics itself may set a hard ceiling |

Palmer's work, if validated, would transform the quantum computing debate from "can we build it?" to "does physics allow it?" — a far more fundamental question.

---

## Bottom Line

Tim Palmer has proposed an intellectually serious, falsifiable theory that predicts a hard ceiling on quantum computational advantage. The theory is speculative and unproven, but it is published in a top-tier journal by a Fellow of the Royal Society, and it makes predictions that current quantum computing hardware can test within a few years.

For the skeptically minded reader: this is exactly the kind of theory to watch — not to endorse prematurely, but to track carefully. If RaQM's predictions hold up as quantum computers scale, it would vindicate the most ambitious version of the skeptical thesis. If they fail, it eliminates one potential line of argument while leaving the engineering and economic critiques fully intact.

As Fermi would say: the math is on the table. Now we wait for the experiments.

---

## References and Further Reading

- Palmer, T.N. "Rational Quantum Mechanics: Testing Quantum Theory with Quantum Computers." *PNAS*, March 2026. [DOI: 10.1073/pnas.2523350123](https://www.pnas.org/doi/abs/10.1073/pnas.2523350123)
- Palmer, T.N. "Rational Quantum Mechanics." arXiv preprint, October 2025. [arXiv:2510.02877v3](https://arxiv.org/abs/2510.02877v3)
- Palmer, T.N. "Superdeterminism Without Conspiracy." *Universe* 10, no. 1 (2024): 47. [arXiv:2308.11262](https://arxiv.org/abs/2308.11262)
- Palmer, T.N. "Discretised Hilbert Space and Superdeterminism." 2022. [arXiv:2204.05763](https://arxiv.org/abs/2204.05763)
- Palmer, T.N. "$p$-adic Distance, Finite Precision and Emergent Superdeterminism." 2016. [arXiv:1609.08148](https://arxiv.org/abs/1609.08148)
- [Oxford Physics: Rational Quantum Mechanics announcement](https://www.physics.ox.ac.uk/news/rational-quantum-mechanics-new-theory-quantum-physics)
- [The Quantum Insider: Is RSA Safe?](https://thequantuminsider.com/2026/03/19/is-rsa-safe-new-study-argues-quantum-computers-face-a-hard-ceiling/)
- [Tim Palmer — Wikipedia](https://en.wikipedia.org/wiki/Tim_Palmer_(physicist))
