---
title: The Physics Barriers and Hardware Platforms
description: An examination of the fundamental physics obstacles to large-scale quantum computing — decoherence, error correction overhead, cryogenics, infrastructure costs — and why each of the five major hardware platforms has fatal flaws.
generated_by: claude skill chapter-content-generator
date: 2026-03-16 23:39:54
version: 0.05
---

# The Physics Barriers and Hardware Platforms

## Summary

This chapter examines the fundamental physics obstacles that make large-scale quantum computing extraordinarily difficult — not merely challenging engineering problems but deep physical constraints. We cover decoherence, error rates, the staggering overhead of quantum error correction, cryogenic requirements, wiring and control challenges, energy consumption, infrastructure costs, and connectivity limitations. We then examine all five major hardware platforms (superconducting, trapped ion, photonic, topological, and neutral atom) and show why each has fundamental flaws that no amount of engineering can overcome. Students will understand the distinction between engineering challenges and physics barriers.

## Concepts Covered

This chapter covers the following 23 concepts from the learning graph:

1. Decoherence Problem
2. Qubits Are Extremely Fragile
3. Error Rate Problem
4. Error Correction Overhead
5. 1000 Physical per 1 Logical
6. Million Qubit Requirement
7. Engineering vs Physics Barrier
8. No Platform Has Solved It
9. Cryogenic Cooling Requirement
10. Near Absolute Zero Temps
11. Cryogenic Cost and Scale
12. Wiring and Control Problem
13. Energy Consumption Problem
14. Infrastructure Cost
15. Hardware Scaling Wall
16. Connectivity Limitations
17. Superconducting Approach
18. Trapped Ion Approach
19. Photonic Approach
20. Topological Approach
21. Neutral Atom Approach
22. Platform Comparison
23. Each Platform Has Fatal Flaws

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: What Is Quantum Computing?](../01-what-is-quantum-computing/index.md)

---

!!! mascot-welcome "Fermi Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Fermi welcomes you">
    Welcome, fellow investigators! This is the most technically demanding
    chapter in the course — and the most important. We are going to examine
    the actual physics that makes quantum computing so extraordinarily
    difficult. Not the marketing. Not the roadmaps. The physics. By the end,
    you will understand why "it's just engineering" is the most dangerous
    phrase in quantum computing. But does the math check out? Let's find out!

## Learning Objectives

After completing this chapter, you will be able to:

- **Explain** why decoherence is a fundamental physics constraint, not merely an engineering challenge
- **Calculate** the approximate physical qubit overhead required for error-corrected quantum computation
- **Distinguish** between engineering barriers (solvable with money and effort) and physics barriers (may be fundamentally insurmountable)
- **Describe** the cryogenic, wiring, and energy requirements of superconducting quantum computers and explain why they resist simple scaling
- **Compare** all five major hardware platforms across key performance dimensions
- **Identify** the fatal flaw in each platform that has prevented any from achieving fault-tolerant quantum computing
- **Evaluate** claims that a particular platform will "solve" the quantum computing problem

---

## Part I: The Physics Barriers

### Decoherence: The Fundamental Enemy

**Decoherence** is the process by which a quantum system loses its quantum properties — superposition and entanglement — through unwanted interaction with the environment. It is the single most important obstacle to building a useful quantum computer, and understanding it is essential to evaluating every claim made about quantum computing.

A qubit in superposition exists in a state $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$, where the amplitudes $\alpha$ and $\beta$ carry phase information that enables quantum interference. Decoherence destroys this phase information. The qubit does not "decide" to become 0 or 1 — rather, the environment effectively "measures" the qubit by interacting with it, collapsing the superposition into a classical mixture.

The timescale over which this happens is called the **coherence time** ($T_2$). For a quantum computation to succeed, all necessary gate operations must be completed within the coherence time. If the computation takes longer than $T_2$, the quantum information is destroyed before the answer can be extracted.

| Platform | Typical $T_2$ (coherence time) | Typical gate time | Operations before decoherence |
|----------|-------------------------------|-------------------|------------------------------|
| Superconducting | 50-100 μs | 10-100 ns | ~500-10,000 |
| Trapped ion | 1-10 seconds | 1-100 μs | ~10,000-1,000,000 |
| Photonic | Limited by loss, not $T_2$ | ~1 ns | N/A (loss-dominated) |
| Neutral atom | 1-10 seconds | 1-10 μs | ~100,000-1,000,000 |
| Topological | Theoretically long | Theoretical | Undemonstrated |

For comparison, running Shor's algorithm to factor RSA-2048 requires approximately $10^{10}$ to $10^{12}$ gate operations. Even the best current platforms can execute only $10^{3}$ to $10^{6}$ operations before decoherence destroys the computation. This gap — **six to nine orders of magnitude** — is the core hardware challenge of quantum computing.

### Qubits Are Extremely Fragile

The fragility of qubits is not an engineering limitation — it is a consequence of the physics that makes quantum computing theoretically powerful in the first place. The very property that enables quantum speedups (superposition across an exponentially large state space) also makes the system exquisitely sensitive to any perturbation.

Sources of decoherence include:

- **Thermal noise.** Any temperature above absolute zero means thermal photons that can interact with qubits. This is why superconducting qubits must operate at 10-15 millikelvin.
- **Electromagnetic interference.** Stray electric and magnetic fields from nearby electronics, wiring, or even cosmic rays can flip qubit states.
- **Vibration.** Mechanical vibrations — from building HVAC systems, footsteps, or even seismic activity — can disturb ion traps and optical systems.
- **Crosstalk.** Control signals intended for one qubit can leak to neighboring qubits, introducing correlated errors that are particularly difficult to correct.
- **Material defects.** Microscopic impurities in the substrate materials (silicon, sapphire, aluminum) of superconducting chips create two-level systems (TLS) that absorb and re-emit energy, randomly disturbing nearby qubits.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    Here is the fundamental paradox: to compute with quantum mechanics, you
    need qubits that interact strongly with each other (for gate operations)
    but interact with nothing else in the universe (to avoid decoherence).
    Perfect isolation and perfect control are contradictory requirements.
    Every physical qubit is a compromise between these two demands, and that
    compromise sets a floor on error rates that no amount of engineering has
    been able to push below approximately $10^{-4}$.

---

### The Error Rate Problem

Current quantum gates have error rates of approximately $10^{-3}$ (one error per thousand operations) for the best superconducting and trapped-ion systems. The best reported two-qubit gate fidelities are approximately 99.5-99.9%, meaning 0.1-0.5% of operations produce incorrect results.

This may sound acceptable — 99.9% accuracy seems impressive. But consider the scale of the computation required:

- Shor's algorithm on RSA-2048 requires approximately $10^{10}$ gate operations
- At a gate error rate of $10^{-3}$, the expected number of errors is $10^{10} \times 10^{-3} = 10^{7}$ — **ten million errors** in a single computation
- The computation's output would be pure noise

For comparison, classical transistors operate with error rates of approximately $10^{-18}$. A classical processor executing $10^{10}$ operations would expect essentially zero errors. The gap between classical and quantum error rates — **fifteen orders of magnitude** — is not gradually closing. Quantum error rates have improved by roughly one order of magnitude per decade, meaning parity with classical error rates would require approximately 150 years at the current pace.

#### Diagram: Error Rate Gap Visualization

<iframe src="../../sims/error-rate-gap/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Error Rate Gap: Classical vs. Quantum</summary>
Type: microsim
**sim-id:** error-rate-gap<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom Level:** Understand (L2)
**Bloom Verb:** Explain, Compare

**Learning Objective:** Students will be able to explain the magnitude of the error rate gap between classical and quantum computing operations and why this gap makes uncorrected quantum computation useless for large-scale problems.

**Instructional Rationale:** A step-through visualization with concrete worked examples is appropriate because the Understand/explain objective requires students to see real numbers at each stage of the calculation. Abstract statements about "fifteen orders of magnitude" become concrete when students trace a specific computation and see the error accumulation.

**Data Visibility Requirements:**

- Stage 1: Show a target computation: "Factor RSA-2048 using Shor's algorithm"
- Stage 2: Show required gate operations: ~$10^{10}$
- Stage 3: Show classical error rate ($10^{-18}$) → expected classical errors: ~$10^{-8}$ (essentially zero)
- Stage 4: Show quantum error rate ($10^{-3}$) → expected quantum errors: ~$10^{7}$ (ten million)
- Stage 5: Show what the output looks like with ten million errors (random noise)
- Stage 6: Show the error rate needed for raw (uncorrected) computation: ~$10^{-12}$ — and the gap from current $10^{-3}$

**Canvas layout:**

- Main area (70%): Visual comparison showing two parallel computation pipelines (classical and quantum)
- Side panel (30%): Controls and numerical displays

**Interactive controls:**

- Button: "Next Stage" / "Previous Stage" — step through the calculation
- Slider: Quantum error rate ($10^{-1}$ to $10^{-6}$, logarithmic) — explore what happens at different error rates
- Display: Expected errors, signal-to-noise ratio, output quality
- Button: "Reset"

**Behavior:**

- At each stage, the numerical values update and the visual representation shows the accumulation of errors
- The classical pipeline remains clean and green throughout
- The quantum pipeline progressively fills with red "error" markers
- Adjusting the error rate slider shows that even $10^{-5}$ still produces 100,000 errors for this computation

**Implementation:** p5.js. Background: aliceblue. Responsive to window resize.
</details>

---

### Error Correction Overhead

Since raw quantum error rates are too high for useful computation, the field relies on **quantum error correction** (QEC) — using many physical qubits to encode a single "logical" qubit that is protected against errors. The theory of quantum error correction is one of the genuine intellectual triumphs of the field, originating with Shor's and Steane's codes in 1995-1996.

The principle is conceptually similar to classical error correction: add redundancy so that errors can be detected and fixed. But quantum error correction faces unique challenges that make it far more expensive than its classical counterpart:

1. **No cloning.** The no-cloning theorem (Chapter 1) prevents copying quantum states, so you cannot simply make backup copies as in classical error correction.

2. **Measurement destroys information.** You cannot directly check whether a qubit is in the right state without collapsing it. Instead, QEC uses **syndrome measurements** on ancilla (helper) qubits that detect errors indirectly, without revealing the encoded information.

3. **Continuous errors.** Classical bits fail discretely (a 0 becomes a 1). Quantum errors are continuous — a qubit can drift by any small amount in any direction on the Bloch sphere. QEC must discretize these continuous errors into correctable categories.

4. **Correlated errors.** If nearby qubits share a common noise source (temperature fluctuation, crosstalk), their errors are correlated — precisely the situation that standard error correction codes handle poorly.

### 1,000 Physical Qubits per 1 Logical Qubit

The overhead of quantum error correction is staggering. The most studied error correction scheme — the **surface code** — requires a ratio of physical qubits to logical qubits that depends on the physical error rate:

$$
\frac{N_{\text{physical}}}{N_{\text{logical}}} \approx \left(\frac{p_{\text{threshold}}}{p_{\text{physical}}}\right)^{-2}
$$

where $p_{\text{physical}}$ is the actual gate error rate and $p_{\text{threshold}} \approx 10^{-2}$ is the surface code threshold.

At current error rates ($p_{\text{physical}} \approx 10^{-3}$), the overhead is roughly **1,000 physical qubits per logical qubit**. At slightly worse error rates, the overhead rises to 10,000:1 or higher. This means:

| Physical error rate | Physical qubits per logical qubit | Comment |
|--------------------|----------------------------------|---------|
| $10^{-2}$ | Infinite (above threshold) | Error correction impossible |
| $5 \times 10^{-3}$ | ~10,000 | Near threshold; impractical overhead |
| $10^{-3}$ | ~1,000 | Current best-case scenario |
| $10^{-4}$ | ~100 | Requires 10x error rate improvement |
| $10^{-5}$ | ~10 | Requires 100x improvement; approaching useful range |

### The Million Qubit Requirement

Combining the error correction overhead with the algorithm requirements gives us the total physical qubit count needed for commercially relevant quantum computing:

- Shor's algorithm on RSA-2048 requires approximately **4,000 logical qubits**
- At 1,000:1 overhead (current error rates): **4 million physical qubits**
- At more conservative estimates with additional ancilla overhead: **20 million physical qubits**
- Current state of the art: approximately **1,000 noisy physical qubits**

The gap from 1,000 to 20,000,000 is a factor of **20,000**. Even at the most aggressive qubit-count scaling rates observed historically (roughly doubling every 1-2 years), reaching 20 million qubits would take approximately 14-28 years — and that assumes error rates simultaneously improve by at least an order of magnitude, which is a separate and potentially harder challenge.

!!! mascot-encourage "You've Got This!"
    <img src="../../img/mascot/encouraging.png" class="mascot-admonition-img" alt="Fermi encourages you">
    The math in this section can feel overwhelming. But the core message is
    simple: quantum error correction works in theory, but the overhead is
    enormous — roughly 1,000 physical qubits for every logical qubit at
    current error rates. That single number, 1,000:1, is the reason
    commercially useful quantum computing requires millions of physical
    qubits. Hold onto that ratio — it is the key to understanding why
    every roadmap to practical quantum computing is so far from reality.

---

### Engineering vs. Physics Barriers

This distinction is the most important analytical tool in this chapter. Understanding it separates informed skepticism from uninformed dismissal.

**Engineering barriers** are problems that can be solved with sufficient money, effort, and time. The underlying physics permits a solution; the challenge is building it. Examples:

- Fabricating more qubits on a chip (lithographic techniques exist; scaling requires manufacturing optimization)
- Building larger dilution refrigerators (thermodynamic principles are well understood; larger units can be designed)
- Writing better quantum compilers (software optimization is an engineering task)

**Physics barriers** are constraints imposed by fundamental physical laws. No amount of money or engineering can overcome them — only a new physical insight or discovery can change the situation. Examples:

- Decoherence from the interaction of quantum systems with their environment (a consequence of quantum mechanics itself)
- The no-cloning theorem preventing copies of quantum states (a proven mathematical theorem)
- The error correction overhead scaling with the ratio of physical to threshold error rates (a consequence of information theory)
- The speed of light limiting classical control signal propagation to qubits in large systems

| Type | Example | Can money solve it? | Can a new material solve it? | Requires physics breakthrough? |
|------|---------|--------------------|-----------------------------|------------------------------|
| Engineering | More qubits per chip | Yes | Possibly | No |
| Engineering | Cheaper cryogenics | Yes | Possibly | No |
| Physics | Decoherence floor from TLS defects | Partially | Partially | Possibly |
| Physics | Error correction overhead | No | No | Yes (lower error rates) |
| Physics | No-cloning theorem | No | No | No (proven theorem) |
| Physics | Measurement backaction | No | No | No (fundamental law) |

!!! mascot-warning "Bias Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Fermi warns you">
    When quantum computing proponents say "it's just engineering," they are
    implicitly claiming that all remaining barriers are of the engineering
    type — solvable with money and effort. This claim is false. Several
    barriers are physics barriers that may not have solutions regardless of
    investment. The phrase "it's just engineering" should be a red flag in
    any quantum computing presentation. Ask: which specific barriers are
    engineering, and which are physics? If the presenter cannot make the
    distinction, they either don't understand the problem or are being
    deliberately vague.

---

### Cryogenic Cooling Requirements

Superconducting qubits — the platform used by IBM, Google, and many others — must operate at temperatures of approximately **10-15 millikelvin**. For context:

- Room temperature: ~300 K (300,000 millikelvin)
- Liquid nitrogen: 77 K
- Liquid helium: 4.2 K
- Outer space (cosmic microwave background): 2.7 K
- Superconducting qubit operating temperature: **0.010-0.015 K**

These temperatures are achieved using **dilution refrigerators** — complex cryogenic systems that exploit the mixing properties of helium-3 and helium-4 isotopes. A modern dilution refrigerator costs $1-5 million and consumes 15-25 kilowatts of electrical power to maintain millikelvin temperatures for a small number of qubits.

### Cryogenic Cost and Scale

The cost and energy scaling of cryogenic systems is deeply unfavorable:

- **Cooling power is tiny.** A dilution refrigerator provides roughly 10-100 microwatts of cooling at its base temperature. Every qubit, every control line, and every measurement circuit adds heat load.
- **Scaling is nonlinear.** Doubling the number of qubits more than doubles the heat load, because control wiring increases and crosstalk management requires additional shielding.
- **Helium-3 is scarce and expensive.** Helium-3, essential for dilution refrigerators, is a byproduct of nuclear weapons programs. Global supply is limited and geopolitically sensitive. The price has increased from ~$100/liter to ~$2,000/liter over two decades.

### Wiring and Control Problem

Each superconducting qubit requires multiple **control lines** — coaxial cables running from room-temperature electronics (~300 K) down through the cryogenic stages to the millikelvin chip. Current systems use approximately 2-4 cables per qubit for control, readout, and flux bias.

For a 1,000-qubit system, this means 2,000-4,000 cables threading through the dilution refrigerator's thermal stages. For a million-qubit system: 2-4 million cables. This is physically impossible with current cryostat designs — there is simply not enough space, and the heat load from the cables themselves would overwhelm the cooling capacity.

Proposed solutions include:

- **Cryogenic control electronics** — placing some control circuitry inside the cryostat to reduce the number of cables. However, these electronics generate heat, reducing the available cooling margin.
- **Multiplexed control** — using fewer cables to address multiple qubits. However, this introduces crosstalk and limits the speed of parallel operations.
- **Optical interconnects** — using photons instead of electrical signals. However, converting between microwave (qubit frequency) and optical (fiber frequency) domains adds complexity and loss.

None of these approaches has been demonstrated at the million-qubit scale. Each involves significant tradeoffs, and the wiring problem is widely regarded as one of the hardest engineering challenges in quantum computing.

### Energy Consumption Problem

The energy requirements of quantum computing systems are often overlooked in assessments of their commercial viability:

| Component | Power consumption | Notes |
|-----------|------------------|-------|
| Dilution refrigerator | 15-25 kW per unit | Continuous operation required |
| Room-temperature control electronics | 50-200 kW for ~1,000 qubits | Scales roughly linearly with qubit count |
| Classical processing (error correction) | 100+ kW | Real-time error decoding at microsecond timescales |
| Facility infrastructure (cooling, power conditioning) | 50-200 kW | HVAC, UPS, power distribution |
| **Total for ~1,000 qubits** | **~200-600 kW** | |
| **Estimated for ~1,000,000 qubits** | **~10-100 MW** | Comparable to a small power plant |

For comparison, a classical data center rack consumes approximately 10-20 kW and performs $10^{18}$ or more floating-point operations per second. A million-qubit quantum computer consuming 10-100 MW would perform useful computations (after error correction) at a rate that may not exceed what the same power budget could achieve classically.

### Infrastructure Cost

Combining cryogenics, wiring, control electronics, and energy, the infrastructure cost for a commercially relevant quantum computer is daunting:

- **Current systems (~1,000 qubits):** $10-50 million per system
- **Near-term targets (~10,000 qubits):** $50-500 million (estimated)
- **Commercially relevant (~1,000,000 qubits):** $1-10 billion (estimated)
- **Plus annual operating costs** of $10-100 million for energy, helium, maintenance, and personnel

These estimates assume that the engineering problems (larger cryostats, more efficient wiring) are solved. The physics problems (error rates, decoherence) remain separate obstacles that infrastructure investment alone cannot address.

### Hardware Scaling Wall

The combination of all these barriers — decoherence, error rates, error correction overhead, cryogenics, wiring, energy, and cost — creates a **scaling wall**: a point beyond which adding more qubits does not produce more useful computation because the overhead of managing errors, heat, and control grows faster than the computational benefit.

Current systems operate well below this wall, at ~1,000 noisy qubits. But projections suggest the wall may be reached at tens of thousands of physical qubits unless error rates improve substantially. The wall is not a fixed location — it moves based on error rates and the efficiency of error correction — but its existence is a fundamental constraint on scaling.

### Connectivity Limitations

A final hardware barrier is **qubit connectivity** — the pattern of which qubits can directly interact with which others. Most quantum algorithms assume **all-to-all connectivity** (any qubit can interact with any other qubit directly). Real hardware provides far less:

| Platform | Connectivity | Consequence |
|----------|-------------|-------------|
| Superconducting | Nearest-neighbor on 2D grid | SWAP operations needed to route information; adds 3x-10x overhead |
| Trapped ion | All-to-all within small chains (~30 ions) | Good for small systems; chains become unwieldy at scale |
| Photonic | Configurable but lossy | Photon loss compounds with each additional connection |
| Neutral atom | Configurable via optical tweezers | Promising but early-stage; rearrangement takes time |

Limited connectivity means algorithms must be **compiled** onto the hardware topology, inserting additional SWAP gates to move quantum information between non-adjacent qubits. This compilation overhead can increase circuit depth by factors of 3-10x, which means 3-10x more opportunities for decoherence to destroy the computation.

#### Diagram: The Barrier Stack

<iframe src="../../sims/barrier-stack/main.html" width="100%" height="600px" scrolling="no"></iframe>

<details markdown="1">
<summary>The Quantum Computing Barrier Stack</summary>
Type: infographic
**sim-id:** barrier-stack<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom Level:** Analyze (L4)
**Bloom Verb:** Differentiate, Organize

**Learning Objective:** Students will be able to differentiate between engineering barriers and physics barriers in quantum computing and organize them by their severity and interdependence.

**Instructional Rationale:** A layered "barrier stack" visualization enables students to see how multiple barriers compound on top of each other, with color-coding distinguishing engineering from physics barriers. This organizational structure helps students understand that solving one barrier does not resolve the others — all must be addressed simultaneously.

**Canvas layout:**

- Full width: Vertical stack of barrier layers, building from bottom (most fundamental) to top (most practical)

**Visual elements:**

- 8 horizontal layers stacked vertically, each representing a barrier
- Physics barriers in red/orange tones; engineering barriers in blue/green tones
- Layer thickness proportional to severity (thicker = harder to overcome)
- Arrows between layers showing interdependencies
- Left margin labels: "Physics Barrier" or "Engineering Barrier" for each layer

**Layers (bottom to top):**

1. Decoherence (Physics — red) — Fundamental interaction with environment
2. Error Rates (Physics — orange) — Floor set by decoherence and control precision
3. Error Correction Overhead (Physics — orange) — Determined by error rates and information theory
4. Connectivity Limitations (Mixed — yellow) — Partly physics, partly engineering
5. Cryogenic Requirements (Engineering — light blue) — Thermodynamic; can improve with investment
6. Wiring and Control (Engineering — blue) — Physical space and heat load constraints
7. Energy Consumption (Engineering — green) — Scales with system size
8. Infrastructure Cost (Engineering — green) — Aggregation of all above

**Interactive features:**

- Hover over each layer to see: description, current state of the art, what improvement is needed, whether it is physics or engineering, and estimated timeline for improvement
- Click a layer to highlight all dependent layers above it
- Toggle: "Show scaling trajectory" — for each layer, show how the barrier grows as qubit count increases from 1,000 to 1,000,000
- Toggle: "Remove engineering barriers" — grays out engineering layers to show that physics barriers remain even with unlimited engineering budget

**Implementation:** p5.js. Background: aliceblue. Responsive to window resize.
</details>

---

## Part II: The Hardware Platforms

Five major hardware platforms are competing to build quantum computers. Each has genuine strengths — and each has fundamental limitations that have prevented any from achieving fault-tolerant quantum computing.

### Superconducting Approach

**Key players:** IBM, Google, Rigetti, Alice & Bob

Superconducting qubits are tiny electrical circuits made from superconducting materials (typically aluminum on silicon or sapphire substrates) that behave as quantum systems when cooled to millikelvin temperatures. They are the most mature platform and the basis for the highest-qubit-count processors.

**Strengths:**

- Fastest gate speeds (~10-100 ns), enabling more operations within coherence time
- Fabricated using semiconductor manufacturing techniques — closest to industrial scaling
- Largest qubit counts achieved (IBM Condor: 1,121 qubits)
- Extensive software ecosystem (Qiskit, Cirq)

**Fatal flaws:**

- **Cryogenic requirement.** Every qubit must operate at 10-15 mK. This creates all the cryogenic, wiring, and energy problems described in Part I.
- **Short coherence times.** Typical $T_2$ of 50-100 μs limits circuit depth to hundreds of gates even under ideal conditions.
- **Two-level system (TLS) defects.** Microscopic material impurities create random noise sources that are intrinsic to the fabrication process. Despite decades of materials research, TLS defects remain the dominant source of decoherence.
- **Nearest-neighbor connectivity.** Qubits can only interact with their immediate neighbors on the chip, requiring SWAP operations that inflate circuit depth.

### Trapped Ion Approach

**Key players:** IonQ, Quantinuum (Honeywell)

Trapped ion qubits use individual ions (typically ytterbium $\text{Yb}^{+}$ or calcium $\text{Ca}^{+}$) held in electromagnetic traps and manipulated with laser beams. Each ion's quantum state is encoded in its electronic energy levels.

**Strengths:**

- Highest gate fidelities (~99.9% for two-qubit gates)
- Longest coherence times (seconds to minutes)
- All-to-all connectivity within a single ion chain (any ion can interact with any other)
- Identical qubits (every ytterbium ion is identical by nature — no manufacturing variation)

**Fatal flaws:**

- **Slow gate speeds.** Two-qubit gates take 1-100 μs — roughly 1,000x slower than superconducting gates. This partially negates the advantage of longer coherence times.
- **Scaling beyond ~30 ions per chain is extremely difficult.** As ion chains grow longer, the motional modes used for gate operations become crowded and unstable. The vibrational spectrum becomes a thicket of closely spaced frequencies.
- **Modular architectures require ion shuttling.** To scale beyond single chains, ions must be physically moved between trap zones. Shuttling introduces noise, takes time, and adds complexity.
- **Laser systems are bulky and expensive.** Each ion requires precisely tuned laser beams for initialization, manipulation, and readout. Scaling to thousands of ions requires thousands of individually addressed laser beams — a formidable optical engineering challenge.

### Photonic Approach

**Key players:** PsiQuantum, Xanadu

Photonic quantum computing uses individual photons (particles of light) as qubits, encoding quantum information in properties such as polarization, path, or time-bin.

**Strengths:**

- **Room-temperature operation.** Photons do not require cryogenic cooling, eliminating the cryostat, wiring, and energy overhead of superconducting systems.
- **Natural for communication.** Photons travel at the speed of light and can be transmitted over optical fibers, enabling distributed quantum computing architectures.
- **Fast operations.** Photonic gates operate at nanosecond timescales.
- **No decoherence in the traditional sense.** Photons do not couple strongly to the environment, so they don't decohere the way matter-based qubits do.

**Fatal flaws:**

- **Photon loss.** Every optical component (beam splitter, detector, fiber coupler) loses a fraction of photons. Loss rates of 1-10% per component compound multiplicatively. After 100 components, the probability of all photons surviving is negligible.
- **Probabilistic gates.** Two-photon gates (entangling operations) are inherently probabilistic — they succeed only a fraction of the time. This means circuits must be repeated many times, and resource overhead scales unfavorably.
- **Detection inefficiency.** Single-photon detectors have imperfect efficiency (~90-95%). For computations requiring many photons measured simultaneously, the probability that all are detected correctly drops exponentially.
- **PsiQuantum's bet on manufacturing.** PsiQuantum has raised over $700 million betting that photonic quantum computing can be manufactured at scale using existing semiconductor fabs. As of 2025, they have not publicly demonstrated a working prototype at any scale.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    The photonic approach trades one set of problems (cryogenics, decoherence)
    for another (photon loss, probabilistic gates). Proponents sometimes
    present room-temperature operation as though it eliminates the fundamental
    barriers. It doesn't — it replaces them with different barriers that are
    equally severe. The physics does not offer a free lunch. Every platform
    pays for quantum computation with a different currency, but the total
    cost is comparable.

### Topological Approach

**Key player:** Microsoft

Topological quantum computing is based on a theoretically elegant idea: encode quantum information in **topological properties** of exotic quasiparticles called **non-Abelian anyons**. Because topological properties are inherently robust against local perturbations, topological qubits would theoretically have built-in error protection — dramatically reducing the need for error correction.

**Strengths (theoretical):**

- **Built-in error protection.** Topological qubits would be inherently resistant to local noise, potentially reducing error correction overhead by orders of magnitude.
- **Long coherence times.** Topological protection means quantum information persists longer without active error correction.
- **Potentially transformative.** If realized, topological qubits could leapfrog all other platforms by solving the error correction problem at the hardware level.

**Fatal flaw:**

- **Non-Abelian anyons have never been confirmed to exist.** After more than 20 years of searching, no experiment has conclusively demonstrated the existence of the non-Abelian anyons required for topological quantum computing. Microsoft has repeatedly announced breakthroughs that were subsequently retracted or significantly qualified:
    - A 2018 paper in *Nature* claiming evidence of Majorana fermions (a type of non-Abelian anyon) was **retracted in 2021** due to data processing errors.
    - A 2023 paper claimed "topological signatures" but acknowledged that a definitive demonstration of non-Abelian statistics had not been achieved.

The topological approach represents an extraordinary bet: if non-Abelian anyons can be reliably created and manipulated, topological quantum computing would have a fundamental advantage. But betting billions on the existence of particles that have never been confirmed is, at minimum, extremely high-risk.

### Neutral Atom Approach

**Key players:** QuEra, Pasqal, Atom Computing

Neutral atom quantum computing uses individual atoms (typically rubidium or cesium) held in arrays of **optical tweezers** — tightly focused laser beams that trap atoms at specific positions. Entanglement is achieved by exciting atoms to high-energy **Rydberg states** where they interact strongly over relatively long distances.

**Strengths:**

- **Scalable arrays.** Optical tweezer technology can create regular arrays of hundreds to thousands of atoms with configurable geometry.
- **Configurable connectivity.** Atoms can be rearranged by moving the tweezer beams, enabling flexible qubit connectivity.
- **Long coherence times.** Neutral atoms in their ground states have coherence times of seconds.
- **Identical qubits.** Like trapped ions, every atom of the same isotope is physically identical.

**Fatal flaws:**

- **Rydberg gate errors.** Entangling operations via Rydberg excitation currently have error rates of $10^{-2}$ to $10^{-3}$ — not yet at the threshold for surface code error correction.
- **Atom loss.** Atoms occasionally escape their traps, creating "holes" in the array that must be detected and corrected. The loss rate increases with array size and operation count.
- **Slow rearrangement.** Moving atoms between positions takes microseconds to milliseconds, adding latency to computations that require dynamic reconfiguration.
- **Early-stage development.** Neutral atom systems are the youngest of the five platforms, with the smallest body of research and the most uncertainty about scaling behavior.

---

## Platform Comparison

The following table provides a comprehensive comparison of all five platforms across the dimensions that matter most for practical quantum computing:

| Dimension | Superconducting | Trapped Ion | Photonic | Topological | Neutral Atom |
|-----------|----------------|-------------|----------|-------------|-------------|
| **Max qubits (2025)** | ~1,100 | ~50 | ~200 (modes) | 0 (undemonstrated) | ~1,000 |
| **Best 2-qubit gate fidelity** | 99.5% | 99.9% | ~95% (probabilistic) | N/A | 99.5% |
| **Coherence time** | 50-100 μs | 1-10 s | Loss-limited | Theoretical | 1-10 s |
| **Gate speed** | 10-100 ns | 1-100 μs | ~1 ns | N/A | 1-10 μs |
| **Connectivity** | Nearest-neighbor | All-to-all (small chains) | Configurable | N/A | Configurable |
| **Operating temp** | 10-15 mK | Room temp (trap) | Room temp | 10-15 mK | ~10 μK |
| **Cryogenics needed?** | Yes (dilution fridge) | Partial (laser cooling) | No | Yes (dilution fridge) | Yes (laser cooling) |
| **Maturity** | High | Medium-High | Medium | Low | Low-Medium |
| **Fatal flaw** | Decoherence + cryogenics | Scaling beyond ~30 ions | Photon loss | Anyons don't exist yet | Gate errors + atom loss |

#### Diagram: Hardware Platform Radar Chart

<iframe src="../../sims/platform-comparison-radar/main.html" width="100%" height="600px" scrolling="no"></iframe>

<details markdown="1">
<summary>Hardware Platform Radar Chart Comparison</summary>
Type: chart
**sim-id:** platform-comparison-radar<br/>
**Library:** Chart.js<br/>
**Status:** Specified

**Bloom Level:** Evaluate (L5)
**Bloom Verb:** Compare, Assess

**Learning Objective:** Students will be able to compare the five major quantum computing hardware platforms across multiple performance dimensions and assess which platforms are closest to (or furthest from) the requirements for commercially relevant quantum computing.

**Instructional Rationale:** A radar (spider) chart allows simultaneous comparison of multiple platforms across multiple dimensions, enabling students to see that no platform dominates on all axes. Toggling platforms on and off supports focused pairwise comparisons alongside the full multi-platform view.

**Chart type:** Radar (spider) chart with 8 axes

**Axes (0-10 scale, 10 = best):**

1. Qubit count (current)
2. Gate fidelity (best demonstrated)
3. Coherence time
4. Gate speed
5. Connectivity
6. Scalability prospect
7. Operating cost (inverse; 10 = cheapest)
8. Maturity / ecosystem

**Data series (one per platform):**

- Superconducting (blue): [9, 7, 3, 9, 2, 6, 3, 9]
- Trapped Ion (green): [3, 9, 9, 3, 8, 4, 5, 7]
- Photonic (orange): [4, 3, 5, 8, 6, 5, 8, 5]
- Topological (red): [0, 0, 0, 0, 0, 7, 3, 2]
- Neutral Atom (purple): [7, 7, 8, 5, 7, 6, 6, 4]
- "Required for Advantage" reference (dashed gray): [9, 9, 8, 7, 8, 9, 5, 8]

**Interactive features:**

- Toggle each platform on/off to focus comparisons
- Hover over vertices to see: specific values, current best result, source, and distance from the "required for advantage" threshold
- Toggle: "Show 2020 data" to overlay historical positions and see improvement trajectories

**Implementation:** Chart.js radar chart. Background: aliceblue. Responsive to window resize.
</details>

---

## Each Platform Has Fatal Flaws

No existing hardware platform is on a clear path to fault-tolerant quantum computing at commercially relevant scale. Every platform faces at least one barrier that is not merely an engineering challenge but a physics constraint:

| Platform | Fatal Flaw | Type | Why It May Be Insurmountable |
|----------|-----------|------|------------------------------|
| Superconducting | TLS decoherence floor + cryogenic scaling | Physics + Engineering | TLS defects are intrinsic to materials; cryogenic wiring does not scale |
| Trapped Ion | Ion chain instability above ~30 qubits | Physics | Motional mode crowding is inherent to Coulomb crystals |
| Photonic | Multiplicative photon loss | Physics | Optical component losses compound exponentially with circuit depth |
| Topological | Non-Abelian anyons unconfirmed | Physics | The fundamental building block may not exist in usable form |
| Neutral Atom | Rydberg gate error floor + atom loss | Physics | Rydberg interaction precision limits and trap lifetime limits are physical |

The phrase "No Platform Has Solved It" is not a statement about current engineering limitations — it is a statement about the physics. Each platform has made genuine progress on engineering challenges (more qubits, better control, bigger cryostats). But none has overcome the physics barrier that defines its fundamental limitation.

!!! mascot-tip "Fermi's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Fermi shares a tip">
    When evaluating a quantum computing company, identify their platform
    and ask one question: "What is your plan to overcome [the fatal flaw
    for your platform]?" If the answer is "better engineering," ask
    whether the flaw is an engineering problem or a physics problem. If
    they cannot make the distinction clearly, or if they acknowledge it
    is a physics problem but claim engineering will solve it anyway — you
    have learned everything you need to know about the reliability of
    their roadmap.

---

## Key Takeaways

This chapter examined the physics barriers and hardware platforms that define the practical limits of quantum computing:

1. **Decoherence** is a fundamental physics constraint: quantum states lose their properties through interaction with the environment. Current coherence times permit only hundreds to thousands of gate operations — six to nine orders of magnitude short of what commercially relevant algorithms require.

2. **Error rates** of $\sim 10^{-3}$ per gate are fifteen orders of magnitude worse than classical transistors. A large quantum computation at current error rates would produce pure noise.

3. **Error correction overhead** of ~1,000 physical qubits per logical qubit means commercially useful quantum computing requires millions of physical qubits — 20,000x more than currently available.

4. **The engineering-physics distinction** is critical: engineering barriers can be solved with investment; physics barriers may be fundamentally insurmountable. Many barriers are physics barriers, not engineering.

5. **Cryogenic requirements** (10-15 mK) create cascading challenges in wiring, energy consumption, and infrastructure cost that grow nonlinearly with system size.

6. **Connectivity limitations** force compilation overhead that further erodes theoretical quantum speedups.

7. All five hardware platforms — **superconducting, trapped ion, photonic, topological, and neutral atom** — have genuine strengths and fundamental fatal flaws.

8. **No platform has solved the fundamental physics barriers.** Progress has been real but limited to engineering improvements (more qubits, better control). The physics constraints remain.

!!! mascot-celebration "Excellent Investigative Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Fermi celebrates">
    You have now examined the physics at the heart of the quantum computing
    challenge. You understand decoherence, error correction overhead, the
    cryogenic bottleneck, and why each hardware platform has a fundamental
    flaw. When someone claims quantum computing is "just engineering," you
    can explain precisely why that claim is wrong. That is analytical rigor
    grounded in physics. Outstanding work, fellow investigator!

---

## Review Questions

??? question "1. Explain why decoherence is a physics barrier rather than an engineering barrier."
    Decoherence arises from the fundamental interaction between quantum systems
    and their environment, governed by the laws of quantum mechanics. Any
    physical system above absolute zero — and even at absolute zero, via
    quantum vacuum fluctuations — experiences environmental coupling that
    degrades superposition. While engineering can reduce some noise sources
    (better shielding, purer materials), the underlying mechanism is a
    consequence of quantum mechanics itself. The qubit must interact with
    control systems to compute but must not interact with the environment to
    maintain coherence — a fundamental contradiction that engineering can
    mitigate but not eliminate.

??? question "2. If a quantum processor has a gate error rate of $10^{-3}$ and a computation requires $10^{10}$ gates, how many errors are expected? Why does this make the computation useless?"
    Expected errors: $10^{10} \times 10^{-3} = 10^{7}$ (ten million errors).
    With ten million errors distributed across the computation, the final
    quantum state bears no meaningful relationship to the correct answer —
    the output is effectively random noise. For the computation to succeed
    without error correction, the error rate would need to be approximately
    $10^{-12}$ or better, which is nine orders of magnitude below current
    capabilities.

??? question "3. Why does the surface code require approximately 1,000 physical qubits per logical qubit at current error rates?"
    The surface code's overhead scales as $(p_{\text{threshold}} / p_{\text{physical}})^{-2}$.
    With a threshold of ~$10^{-2}$ and current physical error rates of ~$10^{-3}$,
    the ratio is $(10^{-2} / 10^{-3})^{-2} = 10^{-2}$, requiring roughly
    $1/10^{-2} = 100$ physical qubits per logical qubit under ideal conditions.
    However, practical surface code implementations require additional ancilla
    qubits, syndrome measurement qubits, and margin for correlated errors,
    bringing the total overhead to approximately 1,000:1.

??? question "4. Why can't you 'just build a bigger refrigerator' to scale superconducting quantum computers?"
    Three interconnected problems prevent simple scaling. First, the wiring
    problem: each qubit requires 2-4 coaxial cables from room temperature to
    the millikelvin stage. A million-qubit system would need millions of cables,
    exceeding the physical space and heat budget of any conceivable cryostat.
    Second, the cooling power at the base stage (~10-100 microwatts) is tiny;
    every additional cable and component adds heat load. Third, helium-3 (essential
    for dilution refrigerators) is scarce and expensive, with geopolitically
    constrained supply. The problem is not building a bigger box — it is that
    the physics of cryogenic cooling does not scale favorably.

??? question "5. For each of the five hardware platforms, name the fatal flaw and classify it as engineering or physics."
    Superconducting: TLS decoherence floor (physics — intrinsic material defects)
    plus cryogenic scaling (engineering, but constrained by physics of heat
    transfer). Trapped ion: Ion chain instability above ~30 qubits (physics —
    motional mode crowding in Coulomb crystals). Photonic: Multiplicative
    photon loss (physics — optical component losses compound exponentially).
    Topological: Non-Abelian anyons have never been confirmed to exist (physics
    — the fundamental qubit doesn't demonstrably exist). Neutral atom: Rydberg
    gate error floor and atom loss (physics — Rydberg interaction precision and
    trap lifetime are physical limits).
