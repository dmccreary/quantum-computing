---
title: Quantum Algorithms and Their Real-World Limits
description: An examination of key quantum algorithms, the distinction between quantum supremacy and advantage, and why classical computers continue to match quantum performance on practical problems.
generated_by: claude skill chapter-content-generator
date: 2026-03-16 23:12:44
version: 0.05
---

# Quantum Algorithms and Their Real-World Limits

## Summary

This chapter examines the key quantum algorithms cited to justify quantum computing investment and the gap between their theoretical promise and demonstrated reality. We cover Shor's factoring algorithm and Grover's search algorithm, distinguish between quantum supremacy and quantum advantage, and show why contrived benchmarks do not translate into commercial value. Students will understand why classical computers continue to match or exceed quantum performance on practical problems.

## Concepts Covered

This chapter covers the following 8 concepts from the learning graph:

1. Shor's Factoring Algorithm
2. Grover's Search Algorithm
3. Quantum Supremacy Defined
4. Quantum Advantage Defined
5. Contrived Benchmarks
6. No Real-World Advantage Yet
7. Narrow Problem Applicability
8. Classical Computers Keep Up

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: What Is Quantum Computing?](../01-what-is-quantum-computing/index.md)

---

!!! mascot-welcome "Fermi Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Fermi welcomes you">
    Welcome back, fellow investigators! In Chapter 1, we learned what qubits
    are and why measuring them destroys their state. Now let's examine the
    algorithms that supposedly make quantum computers worth building. Proponents
    point to Shor's algorithm and Grover's algorithm as proof of quantum
    computing's transformative potential. But does the math check out? Let's
    find out!

## Learning Objectives

After completing this chapter, you will be able to:

- **Explain** how Shor's algorithm achieves an exponential speedup for integer factoring by exploiting the quantum Fourier transform and period-finding
- **Describe** Grover's algorithm and explain why its quadratic speedup, while real, is far less dramatic than often portrayed
- **Define** quantum supremacy and quantum advantage as distinct concepts with different evidentiary standards
- **Identify** the characteristics that make a benchmark "contrived" versus commercially relevant
- **Assess** why no real-world quantum advantage has been demonstrated as of 2025
- **Analyze** the narrow set of problems where quantum algorithms provide any speedup at all
- **Evaluate** evidence that classical computing improvements continue to close the gap with quantum performance claims

---

## Shor's Factoring Algorithm

Peter Shor's 1994 algorithm for integer factoring is the single most important result in quantum computing theory. It is the primary reason governments and corporations invest billions in quantum hardware, because factoring large numbers is the mathematical basis of RSA encryption — the system that secures most internet commerce, banking, and classified communications.

### What Shor's Algorithm Does

Classical computers cannot efficiently factor large composite numbers into their prime components. The best known classical algorithm, the general number field sieve, runs in sub-exponential time:

$$
L_n = e^{O(n^{1/3} (\ln n)^{2/3})}
$$

For a 2048-bit RSA key, this means factoring would take classical supercomputers longer than the age of the universe. Shor's algorithm, by contrast, factors an $n$-bit integer in polynomial time:

$$
O(n^2 \log n \log \log n)
$$

This is an exponential speedup — not merely "faster," but a fundamentally different scaling relationship between problem size and computation time.

### How It Works (Conceptual Overview)

Shor's algorithm does not try all possible factors simultaneously — a common misconception. Instead, it reduces factoring to a **period-finding** problem and then uses the **quantum Fourier transform** (QFT) to find that period efficiently. The key steps are:

1. **Reduction to period-finding:** For a composite number $N$, choose a random integer $a < N$. The function $f(x) = a^x \mod N$ is periodic — it repeats with some period $r$. If you can find $r$, you can compute the factors of $N$ using classical arithmetic (specifically, $\gcd(a^{r/2} \pm 1, N)$ often yields a non-trivial factor).

2. **Quantum period-finding:** Create a superposition of all values of $x$, compute $f(x)$ in a quantum register, then apply the quantum Fourier transform to extract the period $r$ from the frequency spectrum of the superposition.

3. **Classical post-processing:** Use the period $r$ to compute the factors with a few classical GCD calculations.

The quantum advantage comes entirely from step 2: the QFT can extract periodicity from an exponentially large superposition in polynomial time, whereas classical algorithms have no comparably efficient method for finding the period of modular exponentiation.

| Component | Classical Approach | Quantum Approach (Shor's) |
|-----------|-------------------|--------------------------|
| Core technique | Number field sieve | Period-finding via QFT |
| Time complexity | Sub-exponential | Polynomial $O(n^2 \log n \log \log n)$ |
| Space (qubits/bits) | Polynomial | $\sim 2n$ logical qubits for $n$-bit number |
| Largest number factored | Hundreds of digits (classical) | 21 (quantum, with shortcuts) |
| RSA-2048 estimated cost | $>10^{20}$ years | ~20 million physical qubits, hours to days |

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    Notice the gap in that table. The largest number factored by a quantum
    computer is 21 — a number you can factor in your head. Meanwhile, RSA-2048
    would require roughly 20 million physical qubits. The current largest quantum
    processors have around 1,000 qubits. That is a gap of four orders of
    magnitude, and every one of those qubits must operate with far lower error
    rates than anything demonstrated today.

### The Gap Between Theory and Reality

Shor's algorithm is mathematically elegant and provably correct. The problem is not the algorithm — it is the hardware required to run it at a meaningful scale. To factor an RSA-2048 key, a quantum computer would need:

- Approximately **4,000 logical qubits** to hold the quantum registers
- An error correction overhead of **1,000-10,000 physical qubits per logical qubit** (depending on physical error rates)
- A total of approximately **20 million physical qubits** operating simultaneously with error rates below $10^{-4}$
- Gate operations running for **hours to days** without the system losing coherence

As of 2025, the state of the art is approximately 1,000 noisy physical qubits with error rates around $10^{-3}$. Even by the most optimistic projections, the hardware required for Shor's algorithm on RSA-2048 is decades away — if it is achievable at all.

#### Diagram: Shor's Algorithm Resource Requirements

<iframe src="../../sims/shors-algorithm-resources/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Shor's Algorithm Resource Requirements Calculator</summary>
Type: microsim
**sim-id:** shors-algorithm-resources<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom Level:** Apply (L3)
**Bloom Verb:** Calculate, Demonstrate

**Learning Objective:** Students will be able to calculate the physical qubit requirements for running Shor's algorithm at different key sizes, given varying assumptions about physical error rates and error correction overhead.

**Instructional Rationale:** A parameter-exploration MicroSim is appropriate because the Apply/calculate objective requires students to manipulate variables and observe the resulting resource requirements. This builds intuition for how error rates and key sizes interact to determine hardware feasibility.

**Canvas layout:**

- Left (60%): Visual representation showing logical qubits as a small cluster and physical qubits as a much larger surrounding cluster, with the ratio visually apparent
- Right (40%): Controls and calculated outputs

**Visual elements:**

- Small cluster of colored dots representing logical qubits (labeled)
- Large surrounding field of dots representing physical qubits (labeled with count)
- Scale indicator showing the ratio
- Current hardware line showing where today's quantum computers fall

**Interactive controls:**

- Slider: RSA key size (512, 1024, 2048, 4096 bits) — default 2048
- Slider: Physical error rate ($10^{-2}$ to $10^{-5}$, logarithmic) — default $10^{-3}$
- Slider: Error correction overhead ratio (100:1 to 10,000:1) — default 1,000:1
- Display: Total logical qubits needed
- Display: Total physical qubits needed
- Display: "Years at current improvement rate to reach this" (estimated)
- Reference line: Current state of the art (~1,000 qubits)

**Behavior:**

- Adjusting sliders updates the qubit calculations and visual representation in real time
- When total physical qubits exceeds current hardware by more than 10x, a red warning indicator appears
- A timeline bar shows estimated years to reach the required qubit count based on historical doubling rates

**Implementation:** p5.js. Background: aliceblue. Responsive to window resize.
</details>

---

## Grover's Search Algorithm

Lov Grover's 1996 algorithm is the second most frequently cited quantum algorithm. It addresses **unstructured search** — finding a marked item in an unsorted database of $N$ entries.

### What Grover's Algorithm Does

A classical computer searching an unsorted list must check items one by one, requiring on average $N/2$ checks and at worst $N$ checks. Grover's algorithm finds the marked item in approximately $\sqrt{N}$ queries — a **quadratic speedup**.

$$
\text{Classical:} \quad O(N) \qquad \text{Grover's:} \quad O(\sqrt{N})
$$

For a database of one million items, a classical search needs up to 1,000,000 checks while Grover's needs about 1,000. For a billion items, classical needs 1,000,000,000 while Grover's needs about 31,623.

### Why the Quadratic Speedup Is Less Impressive Than It Sounds

The quadratic speedup is mathematically proven and Grover's result is optimal — no quantum algorithm can search an unstructured database faster than $O(\sqrt{N})$ (the BBBV theorem). However, several practical realities diminish its significance:

1. **Quadratic is not exponential.** Shor's algorithm offers an exponential speedup; Grover's offers a square root improvement. The difference matters enormously at scale. A problem that takes a classical computer $2^{128}$ operations is reduced to $2^{64}$ by Grover's — significant, but achievable by classical means with sufficient parallelism.

2. **Classical algorithms rarely use brute-force search.** Real-world search problems almost always have structure that classical algorithms exploit — sorting, indexing, hashing, tree-based search. Grover's speedup applies only to genuinely unstructured problems, which are rare in practice.

3. **The I/O bottleneck.** Grover's algorithm assumes the database is already loaded into the quantum computer's memory (as a quantum oracle). Loading a classical database into a quantum state — the state preparation problem — can itself take $O(N)$ time, eliminating the speedup entirely.

4. **Hardware overhead erodes the advantage.** When you factor in error correction overhead and the slower clock speeds of quantum gates compared to classical processors, the practical crossover point — where Grover's actually outperforms classical hardware — requires databases so large that they may not exist in real applications.

| Factor | Impact on Grover's Advantage |
|--------|------------------------------|
| Quadratic (not exponential) speedup | Modest improvement; parallelism can compensate |
| Structured data eliminates need | Real-world data is rarely unstructured |
| State preparation cost $O(N)$ | Can erase the quantum advantage entirely |
| Error correction overhead | Quantum operations cost 1,000-10,000x more in physical resources |
| Slower quantum clock speeds | Classical processors run billions of operations per second |

!!! mascot-warning "Common Mistake"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Fermi warns you">
    Popular press routinely describes Grover's algorithm as "searching a database
    exponentially faster." This is flatly wrong. The speedup is quadratic — the
    square root of $N$, not the logarithm. When you see "exponential quantum
    speedup" in a news article, check whether the author is conflating Shor's
    algorithm (genuinely exponential for factoring) with Grover's algorithm
    (quadratic for search). This conflation inflates the perceived value of
    quantum computing enormously.

---

## Quantum Supremacy Defined

In 2012, theoretical physicist John Preskill coined the term **quantum supremacy** to describe a specific milestone: the demonstration that a quantum computer can perform *any* computation — even a useless one — that no classical computer can perform in a reasonable time.

### What Supremacy Means (and Does Not Mean)

Quantum supremacy is a **proof-of-concept milestone**, not a commercial achievement. A supremacy demonstration requires:

1. A quantum computer that performs a specific computation
2. Evidence that no existing classical computer can perform the same computation in a comparable time
3. Verification that the quantum computer produced a correct (or statistically correct) result

Crucially, supremacy says nothing about whether the computation is useful. The task can be — and in all supremacy demonstrations to date, has been — entirely contrived with no practical application.

!!! info "The Name Matters"
    Some researchers have moved away from the term "quantum supremacy" in favor of
    "quantum computational advantage" for social and political reasons. In this course,
    we use both terms with their precise technical definitions. "Supremacy" refers to
    the narrow proof-of-concept milestone; "advantage" refers to the higher bar of
    solving a commercially relevant problem faster or cheaper.

### Google's 2019 Supremacy Claim

In October 2019, Google's quantum computing team published a paper in *Nature* claiming quantum supremacy with their 53-qubit Sycamore processor. The task was **random circuit sampling** — generating samples from the output distribution of a random quantum circuit.

Google claimed that Sycamore completed the task in 200 seconds, while the world's most powerful classical supercomputer (Summit, at Oak Ridge National Laboratory) would require approximately 10,000 years.

The claim was immediately challenged:

- **IBM** responded within days, arguing that with sufficient disk storage and an optimized algorithm, Summit could complete the task in approximately 2.5 days — not 10,000 years
- By 2022, classical algorithms had improved further, and a team using tensor network methods simulated the same task on classical hardware in a matter of hours
- A Chinese team demonstrated classical simulation of the same circuit in approximately 15 seconds using a cluster of GPUs

The pattern is important: Google's supremacy claim was based on comparing quantum hardware against the *best known classical algorithm at that time*. As classical algorithms improved, the claimed advantage shrank dramatically and may have disappeared entirely.

#### Diagram: Shrinking Supremacy Gap Timeline

<iframe src="../../sims/supremacy-gap-timeline/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Shrinking Supremacy Gap Timeline</summary>
Type: chart
**sim-id:** supremacy-gap-timeline<br/>
**Library:** Chart.js<br/>
**Status:** Specified

**Bloom Level:** Analyze (L4)
**Bloom Verb:** Compare, Examine

**Learning Objective:** Students will be able to analyze how classical algorithm improvements eroded Google's quantum supremacy claim over time, and explain why supremacy claims are fragile.

**Chart type:** Combined line and bar chart with logarithmic y-axis

**X-axis:** Timeline (2019 Q4, 2020 Q1, 2021, 2022, 2023, 2024)

**Y-axis:** Estimated classical computation time for equivalent task (seconds, logarithmic scale from $10^0$ to $10^{11}$)

**Data points:**

- Oct 2019 — Google's claim: $3.15 \times 10^{11}$ seconds (10,000 years)
- Nov 2019 — IBM's estimate: $2.16 \times 10^{5}$ seconds (2.5 days)
- 2021 — Tensor network methods: $\sim 10^{4}$ seconds (hours)
- 2022 — Improved tensor networks: $\sim 10^{3}$ seconds (~20 minutes)
- 2023 — GPU cluster simulation: $\sim 15$ seconds

**Reference line:** Sycamore quantum execution time = 200 seconds (horizontal dashed line)

**Annotations:**

- Arrow where classical time drops below quantum time: "Classical matches quantum"
- Label on Google's initial claim: "10,000 years (Google, 2019)"
- Label on final classical result: "15 seconds (GPU cluster, 2023)"

**Color coding:**

- Blue line: Classical computation time estimates
- Orange dashed line: Quantum execution time (200 seconds)
- Red region: Where classical exceeds quantum (supremacy claimed)
- Green region: Where classical matches or beats quantum

**Interactive features:**

- Hover over each data point to see: source paper, hardware used, algorithm improvement, estimated classical time
- Toggle: "Show quantum hardware improvements" to overlay quantum processor improvements during the same period

**Implementation:** Chart.js with logarithmic y-axis. Background: aliceblue. Responsive to window resize.
</details>

---

## Quantum Advantage Defined

**Quantum advantage** (sometimes called **practical quantum advantage** or **useful quantum advantage**) is a much higher bar than quantum supremacy. Advantage requires demonstrating that a quantum computer can solve a **commercially relevant problem** faster, cheaper, or more accurately than the best available classical approach.

### The Three-Part Test for Quantum Advantage

A genuine demonstration of quantum advantage must satisfy three criteria:

1. **The problem must be commercially relevant.** Someone must actually need this problem solved and be willing to pay for the solution. Random circuit sampling — the basis of Google's supremacy claim — fails this test entirely.

2. **The classical baseline must be the best known classical algorithm**, not a strawman comparison. Many "quantum advantage" claims compare quantum performance against a deliberately slow or unoptimized classical algorithm. A fair comparison requires the best available classical hardware running the best available classical algorithm.

3. **The quantum advantage must account for all overhead costs**, including error correction, state preparation, measurement, and classical pre- and post-processing. A quantum algorithm that runs in fewer theoretical gate operations but requires 10,000 physical qubits per logical qubit may be far more expensive in total resources than the classical alternative.

| Criterion | Quantum Supremacy | Quantum Advantage |
|-----------|-------------------|-------------------|
| Problem must be useful | No | Yes |
| Classical baseline | Best known at time of publication | Best known, continuously updated |
| Overhead included | Usually not | Must include all costs |
| Commercial value | None required | Required |
| Status as of 2025 | Claimed (disputed) | **Not demonstrated** |

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    The distinction between supremacy and advantage is the most important
    conceptual tool in this chapter. When a company announces a "quantum
    breakthrough," ask immediately: Is this supremacy (a contrived benchmark)
    or advantage (a real-world problem solved better than classical)? As of
    2025, every claimed breakthrough has been supremacy at best — and even
    those claims have not held up under scrutiny. Show me the numbers.

---

## Contrived Benchmarks

A **contrived benchmark** is a computational task specifically designed to be hard for classical computers but easy for quantum computers, without regard to whether the task has any practical value. Understanding contrived benchmarks is essential for evaluating quantum computing claims, because nearly all reported "quantum speedups" use them.

### Characteristics of Contrived Benchmarks

Contrived benchmarks share several common features:

- **The problem is chosen because quantum computers can solve it**, not because anyone needs it solved. Random circuit sampling, boson sampling, and random quantum state certification are examples — they are computationally interesting but commercially worthless.

- **The classical comparison is often unfair.** The benchmark is designed to exploit quantum properties (superposition, entanglement, interference) while deliberately avoiding problem structures that classical algorithms exploit well (sorting, caching, parallelism).

- **The results cannot be independently verified at scale.** If the whole point is that classical computers cannot perform the computation, then how do you verify the quantum computer produced the right answer? Supremacy demonstrations rely on statistical tests applied to smaller, classically verifiable instances, then extrapolating to larger sizes — an inference, not a proof.

- **No customer wants the output.** Nobody is willing to pay for samples from a random quantum circuit distribution. The benchmark exists solely to demonstrate a capability gap, not to produce commercial value.

### Case Study: Random Circuit Sampling

Google's 2019 supremacy experiment asked the Sycamore processor to sample from the output distribution of a random quantum circuit. This is equivalent to asking: "Given a randomly wired quantum processor, what distribution of measurement outcomes does it produce?"

This task is computationally hard for classical computers because simulating a random quantum circuit requires tracking $2^n$ probability amplitudes. But the output — a set of random-looking bitstrings — has no known application. No industry, no science, no engineering discipline needs samples from random quantum circuits.

The benchmark was chosen precisely *because* it is hard to simulate classically, not because the answer is useful. This is the defining characteristic of a contrived benchmark.

!!! example "A Simple Analogy"
    Imagine someone builds an expensive machine that can generate truly random
    numbers faster than any existing random number generator. They announce this
    as a breakthrough. But if your application only needs pseudo-random numbers
    (which classical computers generate essentially for free), the machine — no
    matter how impressive its physics — has no commercial value. The benchmark
    ("generate random numbers faster") is contrived because it measures a
    capability nobody is willing to pay for.

### Other Contrived Benchmarks

| Benchmark | What It Demonstrates | Commercial Value |
|-----------|---------------------|-----------------|
| Random circuit sampling (Google, 2019) | Quantum processor produces hard-to-simulate distributions | None |
| Boson sampling (China, 2020) | Photonic system samples from complex distribution | None |
| Random quantum state certification | Quantum system verifies quantum states | None |
| Quantum volume (IBM metric) | Combined measure of qubit count, connectivity, error rates | Internal metric only — not a problem solved |
| CLOPS (IBM metric) | Circuit layer operations per second (throughput) | Internal metric only |

---

## No Real-World Advantage Yet

As of 2025, after more than four decades of research and over $100 billion in cumulative investment, **no quantum computer has demonstrated a practical advantage over classical computers on any commercially relevant problem.** This is the single most important empirical fact in quantum computing, and it deserves careful examination.

### The Evidence Gap

The absence of quantum advantage is not for lack of trying. Major corporations and research labs have invested enormous resources in searching for practical quantum applications:

- **Drug discovery and molecular simulation:** Quantum chemistry simulations remain limited to molecules small enough to simulate classically. The largest quantum chemistry calculations on quantum hardware have simulated molecules like hydrogen ($H_2$), lithium hydride ($LiH$), and beryllium dihydride ($BeH_2$) — all of which are trivially solvable on a classical laptop.

- **Optimization:** Quantum annealing (D-Wave) and variational quantum algorithms (QAOA) have been applied to portfolio optimization, logistics, and scheduling. In rigorous head-to-head comparisons, classical solvers consistently match or outperform quantum approaches.

- **Machine learning:** Quantum machine learning algorithms have been tested on small benchmark datasets. No study has demonstrated a quantum speedup on a machine learning task that matters commercially.

- **Cryptanalysis:** The largest number factored by a quantum computer using Shor's algorithm is 21 (3 × 7). Some claims of factoring larger numbers (e.g., 35, 143) used hybrid classical-quantum shortcuts that do not scale.

!!! quote "National Academies of Sciences, 2019"
    "Given the current state of quantum computing and recent rates of progress,
    it is highly unexpected that a quantum computer that can compromise RSA 2048
    or comparable discrete logarithm-based public key cryptosystems will be built
    within the next decade." — *Quantum Computing: Progress and Prospects*, p. 198

### Why the Advantage Gap Persists

Several structural factors explain why quantum advantage remains elusive:

1. **Error rates are too high.** Current quantum gate error rates ($\sim 10^{-3}$) are far above the threshold needed for fault-tolerant computation ($\sim 10^{-4}$ or better). Without error correction, quantum computations accumulate errors rapidly, limiting circuit depth and problem complexity.

2. **Too few qubits.** Even with perfect error correction, current qubit counts (hundreds to ~1,000) are insufficient for problems where quantum algorithms offer theoretical speedups. Most useful applications require thousands to millions of logical qubits.

3. **Classical algorithms keep improving.** Every time a quantum approach is proposed, classical algorithm researchers respond with improved classical methods. This is an ongoing competition, and classical computing has a 75-year head start.

4. **The problem landscape is narrow.** As we will see in the next section, the set of problems where quantum algorithms offer any theoretical speedup is remarkably small.

#### Diagram: The Advantage Gap

<iframe src="../../sims/advantage-gap/main.html" width="100%" height="550px" scrolling="no"></iframe>

<details markdown="1">
<summary>The Advantage Gap: Quantum vs. Classical on Real Problems</summary>
Type: infographic
**sim-id:** advantage-gap<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom Level:** Evaluate (L5)
**Bloom Verb:** Assess, Compare

**Learning Objective:** Students will be able to assess the gap between quantum and classical performance across multiple application domains, and explain why no domain has yet demonstrated quantum advantage.

**Instructional Rationale:** An interactive comparison infographic is appropriate because the Evaluate/assess objective requires students to weigh evidence across multiple domains simultaneously. Hover-based detail disclosure lets students drill into specific claims without overwhelming them with all the data at once.

**Canvas layout:**

- Full width: A horizontal bar chart showing application domains on the y-axis

**Visual elements:**

- For each domain (Cryptanalysis, Chemistry, Optimization, Machine Learning, Search):
  - A paired horizontal bar showing "Classical best performance" (green) and "Quantum best performance" (orange)
  - A gap indicator showing the distance between them
  - A label indicating whether quantum or classical leads
- A vertical reference line labeled "Commercially Useful Threshold"
- Color-coded status indicators: Red = quantum far behind, Yellow = competitive, Green = quantum leads (none expected to be green)

**Data for each domain:**

- Cryptanalysis: Largest classical factoring (hundreds of digits) vs. quantum (21)
- Chemistry: Classical simulation capacity (dozens of electrons) vs. quantum (a few electrons)
- Optimization: Classical solver quality (near-optimal for thousands of variables) vs. quantum (tens of variables)
- Machine Learning: Classical accuracy on benchmark datasets vs. quantum (no improvement shown)
- Search: Classical indexed search (billions of records in milliseconds) vs. quantum Grover's (not demonstrated at useful scale)

**Interactive features:**

- Hover over each domain bar to see: specific benchmarks, source papers, dates of comparison
- Toggle: "Show trend over time" — animates bars to show whether the gap is closing or widening (answer: it is not clearly closing in any domain)

**Implementation:** p5.js. Background: aliceblue. Responsive to window resize.
</details>

---

## Narrow Problem Applicability

One of the most persistent misconceptions about quantum computing is that it will accelerate all types of computation. In reality, the set of problems with known quantum speedups is extraordinarily narrow, and even within that narrow set, the speedups often come with severe practical caveats.

### The Quantum Algorithm Landscape

The quantum algorithms with proven speedups can be counted on two hands:

| Algorithm | Problem | Speedup Type | Practical Caveats |
|-----------|---------|-------------|-------------------|
| Shor's (1994) | Integer factoring, discrete log | Exponential | Requires millions of physical qubits |
| Grover's (1996) | Unstructured search | Quadratic ($\sqrt{N}$) | I/O bottleneck, classical indexing often superior |
| HHL (2009) | Linear systems of equations | Exponential (conditional) | Requires exponentially precise state preparation; output is quantum state, not classical data |
| Quantum simulation (various) | Simulating quantum systems | Exponential (for quantum systems) | Only for simulating other quantum systems — circular for most applications |
| Quantum walks (2000s) | Certain graph problems | Polynomial | Limited to specific graph structures |
| VQE/QAOA (2010s) | Variational optimization | Claimed but unproven | No proven speedup over classical |

Note that the last entry — variational quantum algorithms like VQE and QAOA — are frequently cited by companies as their near-term path to quantum advantage. However, **no proven speedup exists** for these algorithms. They are heuristic methods with no theoretical guarantee of outperforming classical optimization.

### Why Most Problems Cannot Benefit from Quantum Computing

Quantum speedups require specific mathematical structure that the quantum computer can exploit through interference. Without that structure, quantum and classical computers are equivalent. Most real-world computational tasks lack this structure:

- **Data processing, databases, web serving, file management:** These are I/O-bound tasks where computation is not the bottleneck. A quantum computer would be slower, not faster.

- **Machine learning and neural networks:** Modern AI runs on massively parallel classical hardware (GPUs, TPUs) optimized for matrix multiplication. Quantum approaches to machine learning have not demonstrated any advantage on real datasets.

- **Scientific simulation (non-quantum):** Fluid dynamics, climate modeling, structural engineering — these involve classical physics and are well-served by classical supercomputers. Quantum computers offer no advantage for simulating classical systems.

- **Combinatorial optimization:** Despite marketing claims, quantum annealing and QAOA have not demonstrated advantages over classical metaheuristic algorithms (simulated annealing, genetic algorithms, gradient descent) on real-world optimization problems.

!!! mascot-tip "Fermi's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Fermi shares a tip">
    When a company claims "quantum-powered" optimization for logistics,
    finance, or scheduling, apply a simple test: Does the underlying problem
    have the specific mathematical structure (periodicity, symmetry, algebraic
    properties) that quantum algorithms exploit? If the company cannot name the
    specific quantum algorithm providing the speedup and cite a peer-reviewed
    proof of advantage — it is marketing, not science.

### The BQP Boundary

The theoretical limit of quantum computing's power is defined by the complexity class **BQP** (Bounded-Error Quantum Polynomial Time). The current understanding of BQP's relationship to other complexity classes is:

$$
P \subseteq BQP \subseteq PSPACE
$$

This means:

- Quantum computers can solve everything classical computers can solve efficiently (P ⊆ BQP)
- Quantum computers probably cannot solve NP-complete problems efficiently (BQP is believed to not contain NP-complete problems)
- Quantum computers do not exceed the power of classical computers with unlimited memory (BQP ⊆ PSPACE)

The problems inside BQP but outside P — the "quantum advantage zone" — appear to be a remarkably thin sliver of all computational problems. Integer factoring and discrete logarithms sit in this zone. Most real-world problems do not.

#### Diagram: Computational Complexity Landscape

<iframe src="../../sims/complexity-landscape/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Computational Complexity Landscape</summary>
Type: infographic
**sim-id:** complexity-landscape<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom Level:** Understand (L2)
**Bloom Verb:** Explain, Classify

**Learning Objective:** Students will be able to explain the relationship between major computational complexity classes and classify specific problems by their complexity class, understanding where quantum speedups are theoretically possible.

**Instructional Rationale:** A nested set diagram (Euler diagram) with hover-based examples is appropriate because the Understand/classify objective requires students to see the containment relationships between complexity classes. Interactive hover reveals examples without cluttering the visual layout.

**Canvas layout:**

- Full width: Nested ellipses representing complexity classes

**Visual elements:**

- Innermost ellipse: P (polynomial time) — green
- Next ellipse: BQP (quantum polynomial time) — blue, partially overlapping with NP
- Next ellipse: NP (nondeterministic polynomial time) — orange
- Outermost ellipse: PSPACE — gray
- "Quantum Advantage Zone" highlighted as the region inside BQP but outside P — bright blue stripe
- Problem examples placed in their appropriate regions as labeled dots

**Problem examples:**

- Inside P: Sorting, shortest path, linear programming
- Inside BQP (outside P): Integer factoring, discrete logarithm, quantum simulation
- Inside NP (outside BQP): Traveling salesman, SAT, graph coloring
- Inside PSPACE (outside NP): Quantified Boolean formulas, games (chess, Go with generalized boards)

**Interactive features:**

- Hover over any problem dot to see: problem name, best known classical algorithm, best known quantum algorithm, speedup (if any)
- Hover over complexity class labels to see: definition, examples, relationship to other classes
- Toggle: "Show where commercial problems live" — highlights that most commercial computing tasks are in P

**Implementation:** p5.js. Background: aliceblue. Responsive to window resize.
</details>

---

## Classical Computers Keep Up

Perhaps the most underappreciated factor in the quantum computing debate is the relentless improvement of classical computing. While quantum researchers struggle to add qubits and reduce error rates, classical hardware and algorithms continue to advance at a remarkable pace.

### Classical Hardware Improvements

Classical computing has not stood still during the decades of quantum research:

- **GPU computing:** NVIDIA's GPU architectures have increased throughput by roughly 1,000x over the past decade for parallelizable workloads. Tasks that once required supercomputers now run on desktop workstations.

- **Specialized accelerators:** TPUs (Google), NPUs (Apple, Qualcomm), and custom ASICs are optimized for specific workloads like matrix multiplication, providing orders-of-magnitude improvements for machine learning and scientific simulation.

- **Algorithmic improvements:** Classical algorithms for many of the problems targeted by quantum computing have improved dramatically. Classical simulation of quantum circuits — the very task used to demonstrate quantum supremacy — has improved by factors of millions since 2019 through better tensor network methods.

### The Moving Target Problem

Every quantum computing milestone is compared against a classical baseline that was current at the time of the announcement. But classical computing does not freeze while quantum computers improve. This creates a **moving target problem**:

1. A quantum research team announces a result that outperforms the best *current* classical approach.
2. Classical algorithm researchers, motivated by the announcement, develop improved classical methods.
3. Within months to years, the classical approach matches or exceeds the quantum result.
4. The quantum team must now beat a *better* classical baseline.

This pattern has played out repeatedly:

| Year | Quantum Claim | Classical Response | Outcome |
|------|--------------|-------------------|---------|
| 2019 | Google Sycamore: 200 sec vs. "10,000 years" | IBM: 2.5 days with optimization | Gap reduced from 10,000 years to 2.5 days |
| 2020 | Jiuzhang photonic: boson sampling supremacy | Classical tensor network methods | Classical simulation achieved within 2 years |
| 2022 | Various "quantum utility" claims | Improved classical heuristics | Classical methods matched or exceeded |
| 2023 | IBM "utility-scale" quantum computing | GPU-based classical simulation | Classical simulation in seconds |

!!! mascot-warning "Bias Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Fermi warns you">
    Watch for **anchoring bias** in quantum computing announcements. The
    initial headline — "10,000 years on a classical computer!" — anchors in
    your memory even after the classical estimate is revised downward to days,
    hours, or seconds. Press releases rarely issue corrections when classical
    algorithms catch up. The dramatic initial claim persists in public
    consciousness long after it has been debunked.

### Why Classical Advantages Compound

Classical computing benefits from several compounding advantages that quantum computing cannot match:

1. **Manufacturing maturity.** Semiconductor fabrication has had 75 years of optimization. Transistor counts follow Moore's Law (albeit slowing), and process nodes continue to shrink. Quantum hardware fabrication is in its infancy.

2. **Software ecosystem.** Classical computing has millions of optimized libraries, compilers, operating systems, and development tools built over decades. Quantum software tools are rudimentary.

3. **Error rates.** Classical transistors operate with error rates of $\sim 10^{-18}$. Quantum gates operate at $\sim 10^{-3}$. This fifteen-order-of-magnitude gap means classical computers can execute extraordinarily long computations reliably, while quantum computers are limited to short circuit depths.

4. **Energy efficiency.** A classical processor performs billions of operations per watt. A quantum processor (superconducting) requires a dilution refrigerator consuming kilowatts to maintain millikelvin temperatures for a few hundred qubits.

5. **Parallelism.** You can build a cluster of thousands of classical processors for the cost of a single quantum computer. Embarrassingly parallel problems — which include many real-world workloads — scale linearly with classical hardware investment.

#### Diagram: Classical vs. Quantum Improvement Trajectories

<iframe src="../../sims/improvement-trajectories/main.html" width="100%" height="550px" scrolling="no"></iframe>

<details markdown="1">
<summary>Classical vs. Quantum Improvement Trajectories</summary>
Type: chart
**sim-id:** improvement-trajectories<br/>
**Library:** Chart.js<br/>
**Status:** Specified

**Bloom Level:** Analyze (L4)
**Bloom Verb:** Compare, Examine

**Learning Objective:** Students will be able to compare the historical improvement rates of classical and quantum computing along key metrics and analyze why classical improvements continue to outpace quantum improvements in practical capability.

**Chart type:** Dual-axis line chart with logarithmic y-axes

**X-axis:** Year (2015 to 2025)

**Y-axis (left, logarithmic):** Classical performance metric (FLOPS per dollar)
**Y-axis (right, logarithmic):** Quantum performance metric (qubit count × gate fidelity)

**Data series:**

1. Classical GPU performance (FLOPS per dollar):
   - 2015: ~$10^{10}$
   - 2017: ~$10^{11}$
   - 2019: ~$5 \times 10^{11}$
   - 2021: ~$10^{12}$
   - 2023: ~$5 \times 10^{12}$
   - 2025: ~$10^{13}$

2. Quantum "useful operations" (qubit count × (1 - error rate)):
   - 2015: ~5 × 0.99 = ~5
   - 2017: ~20 × 0.995 = ~20
   - 2019: ~53 × 0.997 = ~53
   - 2021: ~127 × 0.998 = ~127
   - 2023: ~1,121 × 0.999 = ~1,120
   - 2025: ~1,200 × 0.999 = ~1,199

**Annotations:**

- Label on classical line: "~100x improvement per decade"
- Label on quantum line: "~200x improvement per decade (qubit count), but quality improvement is marginal"
- Shaded region showing the gap between "useful quantum operations" and "minimum needed for advantage" (~$10^6$ logical operations)

**Color coding:**

- Green: Classical trajectory
- Orange: Quantum trajectory
- Red dashed line: Minimum threshold for commercially relevant quantum computation

**Interactive features:**

- Hover over data points to see: specific hardware, benchmark, source
- Toggle between metrics: raw qubit count, error-corrected logical qubits, gate operations per second
- Slider to extrapolate trajectories forward (2025-2040) with confidence intervals

**Implementation:** Chart.js with dual logarithmic axes. Background: aliceblue. Responsive to window resize.
</details>

---

## Key Takeaways

This chapter examined the quantum algorithms that form the theoretical basis for quantum computing investment and measured them against the reality of what quantum hardware has actually achieved:

1. **Shor's algorithm** provides a genuine exponential speedup for integer factoring, but running it on cryptographically relevant key sizes requires approximately 20 million physical qubits — roughly 10,000 times more than exist today, and every qubit must be far more reliable than current technology allows.

2. **Grover's algorithm** provides a quadratic (not exponential) speedup for unstructured search. Practical factors — I/O bottlenecks, classical data structures, error correction overhead — make it unlikely to deliver real-world advantages for most search problems.

3. **Quantum supremacy** is a proof-of-concept milestone demonstrating quantum computation on a contrived problem. It does not imply commercial usefulness, and even claimed supremacy demonstrations have been challenged or matched by improved classical algorithms.

4. **Quantum advantage** — solving a commercially relevant problem faster or cheaper than classical methods — has never been demonstrated on any real-world problem as of 2025, despite decades of research and over $100 billion in investment.

5. **Contrived benchmarks** are specifically designed to favor quantum computers and have no practical applications. Nearly all reported "quantum speedups" use them.

6. **The problem landscape for quantum speedups is extraordinarily narrow**, limited to problems with specific mathematical structure (periodicity, certain algebraic properties). Most real-world computational tasks receive no quantum benefit.

7. **Classical computers continue to improve** in hardware, algorithms, and software — creating a moving target that quantum computing must surpass. The classical computing ecosystem has 75 years of compounding advantages that quantum systems cannot replicate.

!!! mascot-celebration "Excellent Investigative Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Fermi celebrates">
    You can now distinguish between quantum supremacy and quantum advantage,
    identify a contrived benchmark, and explain why classical computers keep
    closing the gap. These are essential tools for evaluating any quantum
    computing claim you encounter. When someone tells you quantum computers
    will "revolutionize" their industry, you now know the right questions to
    ask. Outstanding analytical work, fellow investigator!

---

## Review Questions

??? question "1. Why does Shor's algorithm not prove that quantum computers will break RSA encryption any time soon?"
    Shor's algorithm is mathematically correct and provides an exponential speedup
    for factoring. However, running it on RSA-2048 requires approximately 4,000
    logical qubits, which translates to roughly 20 million physical qubits with
    current error correction overhead. The largest quantum processors today have
    ~1,000 noisy physical qubits with error rates of ~$10^{-3}$. Closing this
    gap of four orders of magnitude in qubit count while simultaneously improving
    error rates by at least an order of magnitude represents multiple simultaneous
    breakthroughs that may take decades — if they are achievable at all.

??? question "2. Explain why Grover's quadratic speedup is less commercially significant than it initially appears."
    Three factors diminish Grover's practical significance. First, the speedup
    is quadratic ($\sqrt{N}$), not exponential — a problem requiring $2^{128}$
    classical operations requires $2^{64}$ quantum operations, which is within
    reach of classical parallelism. Second, real-world search uses indexed data
    structures (hash tables, B-trees) that are far faster than brute-force
    search, making the unstructured search scenario unrealistic. Third, loading
    classical data into a quantum oracle takes $O(N)$ time, potentially
    eliminating the quantum advantage entirely.

??? question "3. What is the difference between quantum supremacy and quantum advantage, and why does the distinction matter for investors?"
    Quantum supremacy means performing any computation — even a useless one —
    faster than any classical computer. Quantum advantage means solving a
    commercially valuable problem faster or cheaper than classical alternatives.
    The distinction matters because supremacy has been claimed (though disputed)
    while advantage has never been demonstrated. An investor should care only
    about advantage: supremacy proves an interesting physics capability but
    generates zero revenue. Companies that conflate the two are misleading
    investors about the commercial readiness of their technology.

??? question "4. Describe the 'moving target problem' and give a specific example."
    The moving target problem occurs because classical algorithms and hardware
    continue to improve while quantum systems develop. A quantum result that
    outperforms the best classical approach at time of announcement may be
    matched or exceeded by improved classical methods within months. The clearest
    example is Google's 2019 supremacy claim: the initial comparison said
    classical simulation would take 10,000 years. IBM reduced this to 2.5 days
    within weeks. By 2023, a GPU cluster performed the same task in 15 seconds
    — faster than the quantum computer itself.

??? question "5. Name three types of real-world computational problems where quantum computers offer no known advantage, and explain why."
    (1) Web serving and databases — these are I/O-bound tasks where computation
    is not the bottleneck; a quantum computer would be slower and more expensive.
    (2) Machine learning — modern ML runs on GPUs/TPUs optimized for matrix
    operations; no quantum ML algorithm has demonstrated advantage on real
    datasets. (3) Classical scientific simulation (fluid dynamics, climate
    modeling) — these simulate classical physics and are well-served by
    classical supercomputers; quantum computers offer speedups only for
    simulating quantum systems, not classical ones.
