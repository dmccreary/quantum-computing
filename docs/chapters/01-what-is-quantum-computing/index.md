---
title: What Is Quantum Computing?
description: A minimal technical primer on qubits, superposition, entanglement, measurement, and the theoretical promise and limits of quantum computation.
generated_by: claude skill chapter-content-generator
date: 2026-03-16 21:55:28
version: 0.05
---

# What Is Quantum Computing?

## Summary

This chapter provides a minimal technical primer on quantum computing — just enough to understand why the barriers discussed later in the course are so formidable. We cover the basic building blocks (qubits, superposition, entanglement, and measurement), explain what quantum computers could theoretically do and what they cannot do, and contrast them with classical computers. After completing this chapter, students will have the foundational vocabulary needed to evaluate quantum computing claims critically.

## Concepts Covered

This chapter covers the following 9 concepts from the learning graph:

1. Classical Computing
2. What Is a Qubit
3. Superposition Explained
4. Entanglement Explained
5. Quantum Measurement Problem
6. Theoretical Promise of QC
7. What QC Could Supposedly Do
8. What QC Cannot Do
9. QC vs Classical Computing

## Prerequisites

This chapter assumes only the prerequisites listed in the [course description](../../course-description.md).

---

!!! mascot-welcome "Fermi Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Fermi welcomes you">
    Welcome, fellow investigators! Before we can evaluate whether quantum computing
    will ever be economically viable, we need to understand what it actually is — and
    what it isn't. This chapter gives you just enough physics to follow the arguments
    in the rest of the course. But does the math check out? Let's find out!

## Learning Objectives

After completing this chapter, you will be able to:

- **Describe** the fundamental unit of classical computation (the bit) and explain why it limits certain types of calculations
- **Define** a qubit and explain how it differs from a classical bit using the mathematical formalism of state vectors
- **Explain** superposition and entanglement in precise language, distinguishing what these terms actually mean from common popular misconceptions
- **Identify** the measurement problem and explain why it places fundamental constraints on extracting information from quantum systems
- **Summarize** the theoretical computational promise of quantum computing, including complexity classes like BQP
- **Distinguish** between problems quantum computers could theoretically accelerate and problems they cannot help with
- **Compare** quantum and classical computing across multiple dimensions: speed, applicability, maturity, and cost

---

## Classical Computing: The Foundation

To understand what quantum computing promises, we first need to understand what classical computing does — and where it encounters fundamental limits.

A classical computer operates on **bits** — binary digits that take the value 0 or 1. Every computation a classical computer performs, from rendering a video game to training a neural network, reduces to manipulating sequences of bits through logical operations (AND, OR, NOT, and their combinations). The power of classical computing comes from the ability to perform billions of these operations per second and from clever algorithms that organize the operations efficiently.

| Property | Classical Bit | Description |
|----------|--------------|-------------|
| States | 0 or 1 | Exactly two possible values |
| Physical realization | Voltage levels, magnetic domains, transistor states | Many well-understood implementations |
| Operations | Logic gates (AND, OR, NOT, XOR) | Boolean algebra |
| Copying | Freely copyable | Can duplicate bit values without restriction |
| Reading | Non-destructive | Can read a bit without changing it |

Classical computers are astonishingly powerful. Modern GPUs perform over $10^{14}$ floating-point operations per second. For most computational tasks — web serving, database queries, machine learning, scientific simulation — classical hardware is not merely adequate but is improving rapidly through advances in chip architecture, parallelism, and specialized accelerators (GPUs, TPUs, FPGAs).

The limitations of classical computing emerge for a specific, narrow class of problems where the number of possibilities grows exponentially with the input size. Consider factoring a large integer into its prime components. For a number with $n$ digits, the best known classical algorithm (the general number field sieve) runs in sub-exponential but super-polynomial time:

$$
L_n = e^{O(n^{1/3} (\ln n)^{2/3})}
$$

For a 2048-bit RSA key, this means classical factoring is computationally infeasible with current hardware. Quantum computing proponents argue that this specific type of problem — where the solution space grows exponentially but has exploitable mathematical structure — is where quantum computers could provide an advantage.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    Classical computing is not "stuck." It continues to improve dramatically through
    better architectures, algorithms, and specialized hardware. The argument for quantum
    computing rests on a narrow class of problems with specific mathematical structure —
    not on any general inadequacy of classical machines.

---

## What Is a Qubit?

A **qubit** (quantum bit) is the fundamental unit of quantum information. Unlike a classical bit, which is definitively 0 or 1, a qubit can exist in a **superposition** of both states simultaneously. Mathematically, the state of a qubit is described as a vector in a two-dimensional complex Hilbert space:

$$
|\psi\rangle = \alpha|0\rangle + \beta|1\rangle
$$

where $\alpha$ and $\beta$ are complex numbers called **probability amplitudes**, and the constraint $|\alpha|^2 + |\beta|^2 = 1$ ensures the probabilities sum to one. The notation $|\cdot\rangle$ is Dirac's "ket" notation, standard in quantum mechanics.

The key distinction from a classical bit is not that a qubit is "both 0 and 1 at the same time" — this common simplification is misleading. Rather, a qubit is described by a continuous state that, upon measurement, **collapses** to either $|0\rangle$ or $|1\rangle$ with probabilities $|\alpha|^2$ and $|\beta|^2$ respectively.

### Physical Realizations of Qubits

A qubit is an abstract mathematical object. To build a quantum computer, engineers must find physical systems that behave as qubits. Each approach has its own advantages and severe limitations:

| Platform | Physical Qubit | Operating Temperature | Gate Speed | Current Error Rate |
|----------|---------------|----------------------|------------|-------------------|
| Superconducting | Josephson junction circuit | ~15 millikelvin | ~10-100 ns | ~$10^{-3}$ |
| Trapped ion | Individual ion (e.g., $\text{Ca}^{+}$) | Room temp (trap), laser-cooled ions | ~1-100 μs | ~$10^{-4}$ |
| Photonic | Single photon polarization | Room temperature | ~1 ns | ~$10^{-2}$ (loss) |
| Topological | Non-Abelian anyons | ~15 millikelvin | Theoretical | Undemonstrated |
| Neutral atom | Individual atoms in optical tweezers | ~10 μK | ~1-10 μs | ~$10^{-3}$ |

!!! note "A Preview of the Hardware Problem"
    Every physical qubit implementation listed above faces fundamental physics
    challenges — not merely engineering challenges — that limit scaling. We
    explore these barriers in detail in Chapter 5.

#### Diagram: Qubit State Visualization — The Bloch Sphere

<iframe src="../../sims/bloch-sphere/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Bloch Sphere Interactive MicroSim</summary>
Type: microsim
**sim-id:** bloch-sphere<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom Level:** Understand (L2)
**Bloom Verb:** Explain, Interpret

**Learning Objective:** Students will be able to explain how the angles $\theta$ and $\phi$ on the Bloch sphere correspond to different qubit states, and interpret how measurement collapses a state to the poles.

**Instructional Rationale:** An interactive 3D visualization allows students to manipulate qubit state parameters and see the corresponding position on the Bloch sphere, building intuition for the continuous nature of qubit states versus the discrete nature of measurement outcomes.

**Canvas layout:**

- Left (65%): 3D rendering of a unit sphere with axes labeled $|0\rangle$ (north pole), $|1\rangle$ (south pole), $|+\rangle$, $|-\rangle$, $|i\rangle$, $|-i\rangle$
- Right (35%): Controls and state display

**Visual elements:**

- Wireframe unit sphere with equator and prime meridian
- State vector arrow from origin to surface point
- Projection shadows on XY, XZ planes
- North pole labeled $|0\rangle$, south pole labeled $|1\rangle$
- Current state displayed as $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$ with numeric values

**Interactive controls:**

- Slider: $\theta$ (polar angle, 0 to $\pi$) — default $\pi/4$
- Slider: $\phi$ (azimuthal angle, 0 to $2\pi$) — default 0
- Button: "Measure" — animates collapse to $|0\rangle$ or $|1\rangle$ with probability shown
- Button: "Reset"
- Display: Measurement probabilities $P(0) = \cos^2(\theta/2)$, $P(1) = \sin^2(\theta/2)$

**Behavior:**

- Moving sliders updates the state vector arrow in real time
- Display updates $\alpha$, $\beta$, and measurement probabilities
- "Measure" button triggers random collapse weighted by probabilities, with animation showing the vector snapping to a pole
- After measurement, show the result and accumulated statistics (e.g., "Measured $|0\rangle$. Total: 7 out of 12 measurements were $|0\rangle$")

**Implementation:** p5.js with WEBGL renderer for 3D sphere. Background: aliceblue. Responsive to window resize.
</details>

---

## Superposition Explained

**Superposition** is the principle that a quantum system can exist in a linear combination of its basis states. For a single qubit, this means the state $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$ is not "either 0 or 1 with some probability" — it is genuinely in both states simultaneously, with the amplitudes $\alpha$ and $\beta$ carrying phase information that can produce interference effects.

The critical distinction is between a **superposition** and a **classical probability distribution**:

- A coin under a cup is either heads or tails — you just don't know which. This is classical uncertainty.
- A qubit in superposition is not in a definite state at all. The amplitudes $\alpha$ and $\beta$ are not merely our ignorance about the qubit's "real" state — they are the complete description of the physical system.

This distinction matters because superposition enables **quantum interference**, where probability amplitudes can add constructively (reinforcing desired outcomes) or destructively (canceling undesired outcomes). Quantum algorithms exploit interference to amplify the probability of correct answers and suppress incorrect ones.

### Superposition of Multiple Qubits

For a system of $n$ qubits, the state is described by $2^n$ probability amplitudes. Two qubits require four amplitudes:

$$
|\psi\rangle = \alpha_{00}|00\rangle + \alpha_{01}|01\rangle + \alpha_{10}|10\rangle + \alpha_{11}|11\rangle
$$

Three qubits require eight amplitudes. Ten qubits require 1,024. Fifty qubits require over $10^{15}$ amplitudes — more than the number of bytes in a petabyte of storage.

This exponential growth is the source of quantum computing's theoretical promise — and the source of its practical nightmares. Each of those $2^n$ amplitudes must be maintained with high precision, and any interaction with the environment (heat, electromagnetic noise, vibration) degrades them. This degradation is called **decoherence**, and it is the central obstacle to building useful quantum computers.

!!! mascot-warning "Common Mistake"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Fermi warns you">
    Many popular explanations claim that a quantum computer with $n$ qubits can "try all
    $2^n$ possibilities simultaneously." This is dangerously misleading. You cannot simply
    read out all $2^n$ amplitudes — measurement collapses the system to a single outcome.
    Quantum speedups require carefully designed algorithms that use interference to make the
    right answer more probable. Most problems have no known quantum algorithm that achieves this.

---

## Entanglement Explained

**Entanglement** is a quantum mechanical correlation between two or more qubits that has no classical analog. When qubits are entangled, the state of the composite system cannot be described as a product of individual qubit states — the qubits are fundamentally linked.

Consider two qubits in the **Bell state**:

$$
|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)
$$

In this state, neither qubit has a definite individual state. However, if you measure the first qubit and obtain $|0\rangle$, the second qubit is instantaneously determined to be $|0\rangle$ as well — regardless of the distance between them. Similarly, measuring $|1\rangle$ on the first guarantees $|1\rangle$ on the second.

This correlation is stronger than any classical correlation can be, a fact formalized by **Bell's theorem** (1964) and confirmed experimentally in numerous tests. However, entanglement does not transmit information faster than light — you cannot choose which outcome to get, so you cannot use it to send a signal. The correlations are only apparent when the measurement results from both qubits are compared.

### Why Entanglement Matters for Computing

Entanglement is essential for quantum computing because it allows quantum algorithms to create correlations between qubits that would be impossible classically. In algorithms like Shor's factoring algorithm or quantum error correction codes, entanglement is the mechanism that distributes information across multiple qubits in ways that enable interference patterns over the full $2^n$-dimensional state space.

Without entanglement, a quantum computer would be equivalent to $n$ independent probabilistic classical bits — offering no speedup over classical computation.

| Property | Classical Correlation | Quantum Entanglement |
|----------|---------------------|---------------------|
| Example | Two coins glued together (both heads or both tails) | Bell state $\frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$ |
| Describable as individual states? | Yes — each coin has a definite state | No — individual qubits have no definite state |
| Violates Bell inequalities? | No | Yes |
| Can transmit information? | Only at speed of light or slower | No — cannot choose measurement outcome |
| Destroyed by measurement? | No | Yes — measurement collapses the state |

---

## The Quantum Measurement Problem

Measurement in quantum mechanics is fundamentally different from measurement in classical physics. When you measure a qubit in superposition:

$$
|\psi\rangle = \alpha|0\rangle + \beta|1\rangle
$$

the state **collapses** to either $|0\rangle$ (with probability $|\alpha|^2$) or $|1\rangle$ (with probability $|\beta|^2$). The superposition is destroyed, and the information encoded in the relative amplitudes and phases is lost.

This has profound consequences for quantum computing:

1. **You cannot read the full quantum state.** A system of 50 qubits has over $10^{15}$ amplitudes, but a single measurement yields only 50 classical bits of information.

2. **Measurement is irreversible.** Once you measure, the quantum state is gone. You cannot "undo" a measurement and recover the superposition.

3. **Repeated measurements give statistical results.** To estimate the probability distribution of outcomes, you must prepare the same quantum state many times and measure each copy. This is called **sampling** and introduces statistical uncertainty.

4. **The no-cloning theorem** (Wootters and Zurek, 1982) proves that it is impossible to create an exact copy of an arbitrary unknown quantum state. This means you cannot simply make backup copies of your quantum data for repeated measurements.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    The measurement problem is not a limitation of our instruments — it is a
    fundamental law of physics. No amount of engineering can change the fact that
    measuring a quantum state destroys it. This is why quantum error correction is so
    extraordinarily difficult: you need to detect and correct errors without directly
    measuring the quantum information you're trying to protect.

Together, the measurement problem and the no-cloning theorem create a double bind for quantum computing engineers. You cannot copy a qubit's state to create a backup, and you cannot measure it without destroying the information you need. Classical error correction relies on both of these capabilities — read the data, compare it to a copy, fix any discrepancies. Quantum error correction must work around these constraints using indirect measurements on *ancilla* (helper) qubits, a technique that adds enormous overhead. We will examine this overhead in detail in Chapter 5.

!!! mascot-encourage "You've Got This!"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Fermi encourages you">
    The measurement problem and no-cloning theorem can feel philosophically
    disorienting. That's normal — even physicists debate the interpretation of
    quantum measurement. For this course, you just need the practical consequence:
    extracting information from a quantum computer is fundamentally constrained
    in ways that classical computers are not.

---

## The Theoretical Promise of Quantum Computing

The theoretical case for quantum computing rests on the idea that certain mathematical problems have structure that can be exploited by quantum interference and entanglement to find answers faster than any known classical algorithm.

The relevant computational complexity class is **BQP** (Bounded-Error Quantum Polynomial Time) — the set of decision problems that a quantum computer can solve in polynomial time with bounded error probability. The central question of quantum computing theory is how BQP relates to other complexity classes:

$$
P \subseteq BQP \subseteq PSPACE
$$

This tells us:

- Everything a classical computer can solve efficiently (P), a quantum computer can also solve efficiently.
- Quantum computers are believed to be more powerful than classical computers for some problems, but this has not been proven.
- Quantum computers cannot solve problems outside PSPACE — they are not magic.

!!! info "What Does 'Exponential Speedup' Actually Mean?"
    The phrase "exponential speedup" in quantum computing refers to specific algorithms
    where the quantum runtime scales polynomially while the best known classical algorithm
    scales exponentially. The most famous example is Shor's algorithm for integer factoring.
    However, the speedup is relative to the *best known* classical algorithm — it is possible
    (though considered unlikely by most theorists) that faster classical algorithms exist
    that haven't been discovered yet.

### The Short List of Known Quantum Speedups

The number of problems with proven quantum speedups is remarkably small:

| Algorithm | Problem | Quantum Speedup | Year |
|-----------|---------|----------------|------|
| Shor's algorithm | Integer factoring | Exponential | 1994 |
| Grover's algorithm | Unstructured search | Quadratic ($\sqrt{N}$ vs $N$) | 1996 |
| HHL algorithm | Linear systems of equations | Exponential (with caveats) | 2009 |
| Quantum simulation | Simulating quantum systems | Exponential (for quantum systems) | 1996+ |
| Quantum walks | Graph problems (certain) | Polynomial | 2000s |

!!! mascot-tip "Fermi's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Fermi shares a tip">
    When you encounter a claim that quantum computers will "revolutionize" some
    industry, check whether any known quantum algorithm actually provides a speedup
    for that industry's core computational problems. In most cases, the answer is
    no. The list of problems with proven quantum advantage is remarkably short.

---

## What Quantum Computers Could Supposedly Do

Proponents of quantum computing typically cite these application areas where quantum computers might eventually provide an advantage:

### 1. Cryptography (Breaking RSA and ECC)

Shor's algorithm can factor large integers and compute discrete logarithms in polynomial time, which would break RSA and elliptic curve cryptography. This is the most mathematically rigorous quantum speedup claim. However, actually running Shor's algorithm on a cryptographically relevant key size (RSA-2048) would require an estimated **20 million physical qubits** with current error rates — roughly 10,000 times more qubits than exist on the largest quantum processors today.

### 2. Quantum Chemistry and Materials Science

Simulating quantum mechanical systems (molecules, materials) on a classical computer requires resources that grow exponentially with the number of electrons. A quantum computer could, in principle, simulate these systems natively. Potential applications include drug discovery, catalyst design, and materials engineering.

### 3. Optimization

Many optimization problems (logistics, finance, scheduling) involve searching over vast solution spaces. Quantum approaches such as the Quantum Approximate Optimization Algorithm (QAOA) and quantum annealing have been proposed. However, the evidence for quantum speedups in practical optimization is weak — classical heuristics often perform comparably or better on real-world problem instances.

### 4. Machine Learning

Some researchers have proposed quantum machine learning algorithms that could process certain types of data faster. This remains highly speculative, and no practical quantum advantage for machine learning has been demonstrated.

#### Diagram: Quantum Computing Application Landscape

<iframe src="../../sims/qc-application-landscape/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Quantum Computing Application Landscape</summary>
Type: infographic
**sim-id:** qc-application-landscape<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom Level:** Analyze (L4)
**Bloom Verb:** Compare, Distinguish

**Learning Objective:** Students will be able to compare proposed quantum computing applications by their strength of theoretical justification and estimated timeline to practical realization.

**Instructional Rationale:** A 2D scatter plot with "Theoretical Evidence Strength" on the x-axis and "Estimated Years to Practical Realization" on the y-axis allows students to visually distinguish between well-justified near-term applications and speculative long-term ones, building analytical skills for evaluating technology claims.

**Canvas layout:**

- Full width: 2D scatter plot with labeled quadrants

**Visual elements:**

- X-axis: "Strength of Theoretical Evidence" (Weak → Strong)
- Y-axis: "Estimated Years to Practical Realization" (Near-term → Far-future)
- Quadrant labels: "Strong theory, near-term" (best case), "Strong theory, far-future" (hard physics), "Weak theory, near-term" (hype risk), "Weak theory, far-future" (speculative)
- Application bubbles placed in the appropriate quadrant:
  - Cryptanalysis (Shor's): Strong theory, far-future (needs millions of qubits)
  - Quantum simulation: Strong theory, far-future
  - Optimization (QAOA): Weak-moderate theory, medium-term claim
  - Quantum ML: Weak theory, far-future
  - Quantum sensing: Strong theory, already realized (shown for contrast)

**Interactive controls:**

- Hover over each bubble to see: application name, key algorithm, estimated qubit requirement, status of experimental validation
- Toggle: "Show classical alternatives" — displays competing classical approaches alongside each quantum application

**Behavior:**

- Hovering highlights the bubble and displays an info panel
- Toggling classical alternatives adds paired bubbles showing where classical solutions currently stand

**Implementation:** p5.js. Background: aliceblue. Responsive to window resize.
</details>

---

## What Quantum Computers Cannot Do

Understanding the limits of quantum computing is just as important as understanding the promises. Quantum computers are **not** general-purpose replacements for classical computers. They have fundamental limitations:

### 1. Most Computational Tasks

Quantum computers provide no advantage for the vast majority of everyday computing: web serving, word processing, video rendering, database management, operating system execution. These tasks are inherently sequential or have efficient classical algorithms. A quantum computer running a web server would be slower, more expensive, and far less reliable than a commodity classical server.

### 2. NP-Complete Problems (Probably)

Despite popular misconceptions, quantum computers are **not** believed to solve NP-complete problems efficiently. The complexity class BQP is thought to be strictly contained within NP:

$$
P \subseteq BQP \subseteq NP \subseteq PSPACE
$$

This means that problems like the traveling salesman problem, satisfiability (SAT), and graph coloring are almost certainly not solvable in polynomial time by quantum computers. Grover's algorithm provides only a quadratic speedup for brute-force search — turning $O(2^n)$ into $O(2^{n/2})$ — which is significant but not the exponential advantage often claimed in the press.

### 3. Problems Without Mathematical Structure

Quantum speedups require problems with exploitable mathematical structure — periodicity (for Shor's), symmetry, or algebraic properties that quantum interference can leverage. Arbitrary computational tasks without such structure receive no quantum benefit.

### 4. Tasks Requiring Massive I/O

Quantum computers process quantum data. Loading classical data into a quantum computer (state preparation) and extracting results (measurement) are bottlenecks. For many data-intensive applications, the I/O overhead alone eliminates any potential quantum speedup.

!!! mascot-warning "Bias Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Fermi warns you">
    When a company claims their quantum computer will "solve optimization problems
    exponentially faster," check whether they cite a specific algorithm with a proven
    speedup. For most real-world optimization problems, no such algorithm exists. The
    claim often relies on conflating "quantum" with "exponentially faster," which is
    not how the physics works.

---

## Quantum Computing vs. Classical Computing

With the fundamentals established, we can now make a rigorous comparison between quantum and classical computing across multiple dimensions:

| Dimension | Classical Computing | Quantum Computing |
|-----------|-------------------|-------------------|
| **Basic unit** | Bit (0 or 1) | Qubit ($\alpha\|0\rangle + \beta\|1\rangle$) |
| **State space** | $n$ bits → $n$ values | $n$ qubits → $2^n$ amplitudes |
| **Operations** | Logic gates (deterministic) | Unitary transformations (reversible) |
| **Error rates** | ~$10^{-18}$ per operation | ~$10^{-3}$ per operation |
| **Operating temperature** | Room temperature | Millikelvins to room temp (platform-dependent) |
| **Copying data** | Trivial | Impossible (no-cloning theorem) |
| **Reading output** | Non-destructive | Destructive (measurement collapses state) |
| **Error correction overhead** | Minimal | 1,000-10,000x (physical qubits per logical qubit) |
| **Maturity** | ~75 years of commercial use | ~0 years of commercial advantage |
| **Cost per operation** | Fractions of a cent | Dollars to thousands of dollars |
| **Applicable problem space** | Nearly universal | Narrow (specific algorithmic speedups) |

The error rate comparison is particularly striking. Classical transistors have error rates of approximately $10^{-18}$ — meaning roughly one error per billion billion operations. Current quantum gates have error rates of approximately $10^{-3}$ — meaning roughly one error per thousand operations. This represents a gap of **fifteen orders of magnitude**.

#### Diagram: Classical vs. Quantum Error Rate Comparison

<iframe src="../../sims/error-rate-comparison/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Error Rate Comparison: Classical vs. Quantum</summary>
Type: chart
**sim-id:** error-rate-comparison<br/>
**Library:** Chart.js<br/>
**Status:** Specified

**Bloom Level:** Analyze (L4)
**Bloom Verb:** Compare, Contrast

**Learning Objective:** Students will be able to compare the error rates of classical and quantum computing operations on a logarithmic scale and explain why the gap matters for practical computation.

**Chart type:** Horizontal bar chart with logarithmic x-axis

**X-axis:** Error rate per operation (logarithmic, from $10^{-20}$ to $10^{0}$)
**Y-axis:** Categories

**Data:**

- Classical transistor (2024): ~$10^{-18}$
- Classical DRAM: ~$10^{-15}$
- Classical hard drive: ~$10^{-14}$
- Quantum gate — trapped ion (best): ~$10^{-4}$
- Quantum gate — superconducting (best): ~$10^{-3}$
- Quantum gate — photonic (best): ~$10^{-2}$
- Error correction threshold needed: ~$10^{-4}$ (shown as vertical reference line)

**Color coding:**

- Green: Classical systems
- Orange: Quantum systems
- Red dashed line: Error correction threshold

**Annotations:**

- Arrow spanning the gap between classical and quantum: "15 orders of magnitude gap"
- Label on threshold line: "Below this line, error correction becomes theoretically possible"

**Interactive features:**

- Hover over bars to see: technology name, exact error rate, source citation year
- Toggle: "Show improvement over time" — adds historical data points showing quantum error rate improvement trajectory

**Implementation:** Chart.js with logarithmic axis. Background: aliceblue. Responsive.
</details>

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    The fifteen-orders-of-magnitude gap in error rates between classical and quantum
    operations is not a detail — it is the central fact of quantum computing's practical
    challenges. Classical computers achieved their current reliability through decades
    of materials science and manufacturing improvements. Quantum systems face
    fundamentally different physics constraints that may not yield to similar improvements.

---

## Key Takeaways

This chapter established the vocabulary and conceptual framework you will use throughout the rest of the course:

1. **Classical computing** operates on bits with near-perfect reliability and applies to virtually all computational tasks. It is not "stuck" — it continues to improve rapidly.

2. **Qubits** are described by probability amplitudes in a two-dimensional complex vector space. They are not "both 0 and 1 simultaneously" in any simple sense.

3. **Superposition** enables quantum interference, but the exponential state space cannot be directly accessed — measurement yields only a single classical outcome.

4. **Entanglement** creates correlations between qubits that are stronger than any classical correlation, but it does not transmit information faster than light.

5. **Measurement** destroys quantum states, and the no-cloning theorem prevents copying them. These are physics constraints, not engineering limitations.

6. **Quantum speedups** exist only for a small number of problems with specific mathematical structure. Most computational tasks receive no quantum benefit.

7. **The error rate gap** between classical and quantum operations spans fifteen orders of magnitude — a fact that makes practical quantum computing extraordinarily challenging.

!!! mascot-celebration "Excellent Investigative Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Fermi celebrates">
    You now have the foundational vocabulary to critically evaluate quantum computing
    claims. You know what a qubit is, what superposition and entanglement actually mean
    (and don't mean), and why the measurement problem makes quantum computing
    fundamentally harder than it first appears. Outstanding preparation, fellow
    investigator — the real investigation begins in the next chapter!

---

## Review Questions

??? question "1. Why is a qubit in superposition NOT the same as a coin that is 'either heads or tails but you don't know which'?"
    A coin under a cup is in a definite classical state — your uncertainty is about your
    knowledge, not about the physical system. A qubit in superposition has no definite
    state. The amplitudes $\alpha$ and $\beta$ carry phase information that enables
    quantum interference, which has no classical analog. This distinction is experimentally
    verifiable through Bell inequality violations.

??? question "2. If $n$ qubits have $2^n$ amplitudes, why can't we use this to solve NP-complete problems?"
    Because measurement collapses the $2^n$-dimensional state to a single $n$-bit
    outcome. You cannot read all $2^n$ amplitudes. Extracting useful information requires
    a quantum algorithm that uses interference to amplify the correct answer's probability.
    For NP-complete problems, no such algorithm is known, and BQP is believed to be a
    strict subset of NP.

??? question "3. Name three types of problems where quantum computers provide NO advantage over classical computers."
    (1) General-purpose computing tasks (web serving, databases, operating systems).
    (2) NP-complete problems like the traveling salesman problem.
    (3) Data-intensive tasks where I/O bottlenecks dominate computation time.
    Quantum speedups require specific mathematical structure — the vast majority of
    real-world computational tasks lack this structure.
