# Learning Graph Iteration Log: Centering the Non-Technical Investor

**Date:** 2026-03-16
**Session Focus:** Iterating on the concept list to serve an audience of investors, policymakers, and economists — not quantum physicists.

## The Problem

The first draft of the concept list was generated the way most quantum computing courses are structured: heavy on physics fundamentals, algorithm internals, and hardware details. It contained 315 concepts, with roughly 100 of them devoted to topics like Hilbert Space, Density Matrix, Bra-Ket Notation, CNOT Gates, Hadamard Gates, Surface Codes, Magic State Distillation, Transmon Qubits, Josephson Junctions, and BQP Complexity Class.

This is exactly the wrong emphasis for a book titled "A Skeptic's Guide." The audience is not learning how to build a quantum computer. They are learning how to evaluate whether quantum computing will ever make money — and whether they should invest in it.

## Iteration 1: Cut the Physics Formalism

The first revision reduced the list from 315 to 230 concepts by removing:

- **Quantum mechanics formalism** (Hilbert Space, Density Matrix, Bra-Ket Notation, Tensor Product, T1/T2 relaxation times, Thermal Noise)
- **Individual gate types** (CNOT, Hadamard, Toffoli, SWAP, Bloch Sphere, single/two-qubit gates)
- **Algorithm internals** (VQE, QAOA, Quantum Fourier Transform, Boson Sampling, Random Circuit Sampling)
- **Complexity theory details** (BQP, NP-Hard, Polynomial Time, Exponential Time)
- **Error correction internals** (Surface Code, Stabilizer Codes, Magic State Distillation, Transversal Gates, Code Distance)
- **Hardware implementation details** (Transmon, Josephson Junction, Ion Trap Technology, Optical Tweezers, Rydberg Atoms, Silicon Spin Qubits, Majorana Fermions, Non-Abelian Anyons)
- **Detailed cryptography** (Elliptic Curve Crypto, Lattice-Based Cryptography, Cryptographic Key Length)

Added synthesis and application concepts (Executive Brief Writing, Red Team Analysis, National QC Strategy, Claims Tracker).

## Iteration 2: The VC Investor Test

We then asked: "Put yourself in the position of a venture capital investor without a technical background. Is this list realistic?"

The honest answer was no. A non-technical VC reading concepts like "Threshold Theorem," "Quantum Circuit," "Grover's Search Algorithm," or "NISQ Era" would glaze over. They don't care about the mechanism — they care about the consequence.

Key insights from this review:

1. **VCs don't need algorithm names.** They need to know: "What can it supposedly do? Why can't it actually do it yet?"
2. **VCs don't need error correction math.** They need to know: "It takes 1,000 physical qubits to make 1 usable qubit, and we need a million usable ones. Do the math."
3. **VCs DO need business concepts** that were completely missing: revenue models, customer demand, exit strategies, burn rates, comparable company analysis, fiduciary duty.

## Iteration 3: Reframe Everything Through "Should I Invest?"

The final revision restructured every section through an investment lens:

### What was removed or simplified

| Original Concept | Why It Was Cut |
|---|---|
| Quantum Gate, Quantum Circuit | Mechanism, not consequence |
| Threshold Theorem | Replaced with "1000 Physical per 1 Logical" |
| NISQ Era | Replaced with "No Real-World Advantage Yet" |
| Quantum Parallelism | Folded into "Theoretical Promise of QC" |
| Surface Code, Stabilizer Codes | Too deep for the audience |
| Transmon Qubit, Josephson Junction | Hardware internals irrelevant to investment decision |

### What was added

| New Concept | Why It Matters to a VC |
|---|---|
| Revenue Model Problem | No one has figured out how to charge for QC |
| Who Pays for QC? | There are no paying customers |
| Customer Demand Evidence | Demand is speculative, not demonstrated |
| No Paying Customers | The bottom line |
| Classical Alternatives Cheaper | The competition is getting better faster |
| Cost Per Computation | QC is orders of magnitude more expensive |
| Total Cost of Ownership | The full economic picture |
| Exit Strategy Problem | How do you get your money back? |
| Acqui-Hire as Only Exit | The realistic endgame for most QC startups |
| When to Cut Losses | The question every QC investor avoids |
| IonQ IPO and Stock Decline | Concrete case study |
| Rigetti Financial Struggles | Another concrete case study |
| D-Wave Revenue Reality | 17 years in, minimal revenue |
| McKinsey $450B Projection | Consultant hype driving investment |
| Fiduciary Responsibility | Legal obligation to evaluate honestly |
| Board-Level QC Questions | What a board member should ask |
| Evaluating a Pitch Deck | Practical skill for the audience |
| FOMO Drives Bad QC Decisions | Added at user request — the emotional driver |

### Section reframing

- "Quantum Computing Fundamentals" became **"What Is Quantum Computing? (Plain Language)"** — 9 concepts instead of 27
- "Quantum Error Correction" became **"Error Correction Overhead"** — focused on the consequence (1000:1 ratio, million qubit requirement) not the mechanism
- "Hardware Platforms" became **"Competing Hardware Approaches"** — 7 concepts emphasizing "each platform has fatal flaws"
- "Quantum Algorithms" became **"The Algorithms That Justify It"** — framed as claims to evaluate, not techniques to learn

## Final Distribution

The final 241 concepts break down as:

| Category | Count | % | Notes |
|---|---|---|---|
| Economics and Investment | 29 | 12.0% | Largest category — appropriate for this book |
| Physics Barriers | 16 | 6.6% | Just enough to understand why it doesn't work |
| Cognitive Biases | 16 | 6.6% | Core analytical framework |
| History and Timeline | 14 | 5.8% | Pattern of broken promises |
| Technology Assessment | 14 | 5.8% | TRL, hype cycles, base rates |
| Ethics and Careers | 14 | 5.8% | Including FOMO addition |
| Critical Thinking | 14 | 5.8% | Practical evaluation tools |
| Hype and Claims | 13 | 5.4% | Documented evidence |
| General Purpose Technology | 13 | 5.4% | Why QC fails the GPT test |
| Systems Thinking | 12 | 5.0% | Causal loops explaining continued investment |
| Breakthroughs Required | 12 | 5.0% | The joint probability argument |
| Historical Parallels | 12 | 5.0% | Successes and failures to compare against |
| Better Alternatives | 11 | 4.6% | Quantum sensing, classical AI |
| Practical Application | 10 | 4.1% | Executive briefs, red team analysis |
| Foundations | 9 | 3.7% | Minimal QC primer |
| Expert Skeptics | 9 | 3.7% | Named experts and their arguments |
| Algorithms and Claims | 8 | 3.3% | What's claimed, not how it works |
| Cryptography Threat | 8 | 3.3% | Overstated threat analysis |
| Hardware Platforms | 7 | 2.9% | Brief comparison only |

## Key Lesson

The natural instinct when building a course about a technology is to teach the technology first and then evaluate it. For a skeptic's guide aimed at non-technical decision-makers, the right approach is the opposite: **teach evaluation frameworks first, then provide just enough technical context to apply them.** The physics exists to serve the argument, not the other way around.

The concept list went from being a quantum computing course with some economics bolted on, to being an investment risk analysis course with quantum computing as the case study. That reframing is the entire point of the book.

## Outcome

The user was very happy with the final result. The iterative process of challenging the concept list from the perspective of the target audience — rather than the subject matter — produced a significantly stronger learning graph that serves the book's actual thesis.
