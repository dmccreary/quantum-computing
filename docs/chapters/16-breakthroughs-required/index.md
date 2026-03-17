---
title: The Breakthroughs Required for Viability
description: Cataloging the 10+ simultaneous physics and engineering breakthroughs required for quantum computing to become economically viable, with joint probability analysis showing the vanishingly small likelihood of collective success.
generated_by: claude skill chapter-content-generator
date: 2026-03-17 00:51:59
version: 0.05
---

# The Breakthroughs Required for Viability

## Summary

This chapter catalogs the 10+ simultaneous physics breakthroughs required before quantum computing could become economically viable. Error rates must drop 100x, qubit counts must increase 1000x, coherence times must improve 100x, connectivity must improve dramatically, cryogenics must scale, new algorithms must be discovered, and costs must drop dramatically. We show that all of these must happen together — not sequentially but concurrently — and apply joint probability analysis to demonstrate that even generous estimates of each individual breakthrough's likelihood produce a vanishingly small probability of collective success. Students will understand independent versus coupled risks and why each breakthrough remaining uncertain makes the overall venture extremely risky.

## Concepts Covered

This chapter covers the following 12 concepts from the learning graph:

1. The 10 Required Breakthroughs
2. Error Rates Must Drop 100x
3. Need 1000x More Qubits
4. Coherence Must Improve 100x
5. Connectivity Must Improve
6. Cryogenics Must Scale
7. New Algorithms Needed
8. Cost Must Drop Dramatically
9. All Must Happen Together
10. Joint Probability Problem
11. Independent vs Coupled Risks
12. Each Breakthrough Is Uncertain

## Prerequisites

This chapter builds on concepts from:

- [Chapter 2: Quantum Algorithms and Their Real-World Limits](../02-quantum-algorithms-and-limits/index.md)
- [Chapter 5: The Physics Barriers and Hardware Platforms](../05-physics-barriers-and-hardware/index.md)
- [Chapter 8: Investment Risk Analysis](../08-investment-risk-analysis/index.md)

---

!!! mascot-welcome "Fermi Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Fermi welcomes you">
    Welcome, fellow investigators! Throughout this book we have examined individual barriers — error rates, qubit counts, decoherence, economics. In this chapter we bring them all together and ask a deceptively simple question: what, specifically, would need to happen for quantum computing to become commercially viable? The answer is not one breakthrough, but at least ten — and they must all happen concurrently. Show me the numbers, and the numbers will tell us the story. But does the math check out? Let's find out!

## Learning Objectives

After completing this chapter, you will be able to:

- Enumerate the 10 specific breakthroughs required for commercially viable quantum computing
- Explain why each breakthrough represents a distinct technical challenge with its own probability of success
- Apply joint probability analysis to estimate the likelihood that all required breakthroughs will occur
- Distinguish between independent and coupled risks and explain how coupling affects probability estimates
- Calculate how individual breakthrough uncertainties compound to produce extremely low collective probability
- Evaluate quantum computing investment claims by asking which specific breakthroughs have been achieved

## The 10 Required Breakthroughs

Quantum computing proponents frequently describe the path to commercial viability as though it were a single engineering challenge — "just" scaling up current systems. In reality, reaching commercially useful quantum computation requires simultaneous success across at least ten distinct technical dimensions, each of which represents a major unsolved challenge.

| # | Breakthrough Required | Current State | Target State | Improvement Factor |
|---|----------------------|---------------|--------------|-------------------|
| 1 | Physical error rates | $10^{-3}$ to $10^{-2}$ | $< 10^{-6}$ | 100-10,000x |
| 2 | Qubit count | ~1,000 physical | ~1,000,000+ physical | 1,000x |
| 3 | Coherence times | Microseconds to milliseconds | Seconds to minutes | 100-1,000x |
| 4 | Qubit connectivity | Nearest-neighbor (sparse) | All-to-all or high degree | 10-100x |
| 5 | Cryogenic scaling | Single dilution refrigerator | Warehouse-scale cooling | 100x |
| 6 | New quantum algorithms | ~5 known useful algorithms | Dozens for real applications | Discovery needed |
| 7 | Cost per operation | ~$1-$10 per gate | ~$10^{-9}$ per gate | $10^9$x |
| 8 | Quantum error correction | Demonstrated at toy scale | Full fault-tolerance at scale | Entire paradigm shift |
| 9 | Classical control electronics | Room-temperature controllers | Scalable cryo-compatible control | New architecture needed |
| 10 | Software and compilation | Primitive, manual optimization | Automated, efficient compilers | New field maturation |

The word "just" appears frequently in quantum computing marketing: "We just need better error rates." "We just need more qubits." "We just need longer coherence." But each "just" represents an independent research frontier where success is uncertain, and the collective requirement — all ten simultaneously — transforms the problem from difficult to potentially impossible.

## Breakthrough 1: Error Rates Must Drop 100x

Current quantum gate error rates range from approximately $10^{-3}$ (0.1%) for the best superconducting qubits to $10^{-2}$ (1%) for typical operations. For fault-tolerant quantum computing to work, physical error rates must fall below the **error correction threshold**, typically estimated at around $10^{-4}$ to $10^{-6}$ depending on the error correction code used.

The surface code, the most studied error correction scheme, requires physical error rates below approximately $10^{-2}$ to function at all — a threshold that current hardware barely meets. But "barely meets the threshold" is not sufficient for practical computation. The overhead (ratio of physical qubits to logical qubits) depends steeply on how far below threshold the physical error rate falls:

$$
N_{\text{physical}} \approx N_{\text{logical}} \times d^2 \quad \text{where} \quad d \propto \frac{\log(1/\epsilon_{\text{logical}})}{\log(p_{\text{threshold}}/p_{\text{physical}})}
$$

Here $d$ is the code distance, $\epsilon_{\text{logical}}$ is the target logical error rate, and $p_{\text{physical}}$ is the physical error rate. The critical insight is the denominator: when $p_{\text{physical}}$ is close to $p_{\text{threshold}}$, the code distance — and therefore the qubit overhead — becomes enormous.

| Physical Error Rate | Ratio to Threshold ($10^{-2}$) | Approximate Overhead (qubits per logical qubit) |
|--------------------|-----------------------------|------------------------------------------------|
| $10^{-2}$ | 1x (at threshold) | Infinite (does not work) |
| $5 \times 10^{-3}$ | 2x below | ~10,000 |
| $10^{-3}$ | 10x below | ~1,000 |
| $10^{-4}$ | 100x below | ~100 |
| $10^{-6}$ | 10,000x below | ~10 |

Current hardware sits at the top of this table. Commercially viable quantum computing requires performance at or near the bottom. The gap is not an incremental engineering challenge — it is a 100-10,000x improvement in a quantity that has plateaued in recent years after decades of effort.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    Notice the nonlinear relationship between error rates and overhead. Reducing error rates from $10^{-2}$ to $10^{-3}$ (a 10x improvement) reduces the overhead from effectively infinite to ~1,000 qubits per logical qubit. But you still need a further 10-100x reduction to make the overhead manageable. The first factor of 10 was achieved over two decades of research. The next factor of 100-1,000 has no clear path.

## Breakthrough 2: Need 1,000x More Qubits

As of 2025, the largest quantum processors contain approximately 1,000-1,200 physical qubits (IBM's Condor at 1,121 qubits, Atom Computing's 1,180-qubit neutral atom system). A commercially useful quantum computer running Shor's algorithm to factor cryptographically relevant numbers would require approximately 20 million physical qubits (with current error rates) or 4,000-10,000 logical qubits (each requiring hundreds to thousands of physical qubits).

The scaling challenge is not merely additive — adding more qubits does not simply create a larger computer. Each additional qubit must maintain coherence, connectivity, and calibration with all other qubits in the system. The engineering difficulty grows superlinearly with qubit count:

- **Wiring density:** Each superconducting qubit requires multiple microwave control lines routed through the dilution refrigerator. At 1,000 qubits, the wiring is already at the limit of current cryostat designs
- **Cross-talk:** As qubits are packed more densely, electromagnetic interference between control signals increases, degrading gate fidelity
- **Calibration time:** Calibrating a 1,000-qubit processor takes hours; calibrating a 1,000,000-qubit processor would take years with current techniques
- **Yield:** Semiconductor-style fabrication yields for superconducting qubits are far below the 99.9%+ needed for million-qubit chips

## Breakthrough 3: Coherence Must Improve 100x

Coherence time — how long a qubit maintains its quantum state before decoherence destroys the information — determines the window available for computation. Current coherence times for superconducting qubits range from 100 microseconds to approximately 1 millisecond. Trapped-ion qubits achieve longer coherence (seconds to minutes) but have slower gate operations.

The fundamental challenge is that useful quantum algorithms require circuits with thousands to millions of sequential gate operations. Each gate takes time, and the total circuit depth must fit within the coherence window:

$$
T_{\text{circuit}} = n_{\text{gates}} \times t_{\text{gate}} \leq T_{\text{coherence}}
$$

For a modestly useful computation requiring 10,000 sequential gates at 100 nanoseconds per gate, the minimum coherence time is 1 millisecond — right at the edge of current capability, with zero margin for error correction overhead. For the computations that would actually provide commercial value (millions of gates), coherence times of seconds to minutes are required.

| Platform | Current Coherence | Gate Time | Max Circuit Depth | Required Depth |
|----------|------------------|-----------|-------------------|----------------|
| Superconducting | ~100 μs - 1 ms | ~20-100 ns | ~5,000-50,000 | ~$10^6$+ |
| Trapped ion | ~1-60 s | ~10-100 μs | ~10,000-600,000 | ~$10^6$+ |
| Neutral atom | ~1-10 s | ~1-10 μs | ~100,000-1,000,000 | ~$10^6$+ |
| Photonic | N/A (feed-forward) | ~1 ns | Limited by loss | ~$10^6$+ |

No current platform achieves the circuit depth required for commercially valuable computation, even before accounting for the additional gates required by error correction (which multiply circuit depth by a factor of 10-100x).

## Breakthrough 4: Connectivity Must Improve

Most current quantum processors use **nearest-neighbor connectivity**, meaning each qubit can directly interact only with its immediate physical neighbors. Quantum algorithms, however, require operations between arbitrary pairs of qubits. Bridging this gap requires SWAP operations that move quantum information across the chip — each SWAP consuming three two-qubit gates and introducing additional errors.

For a processor with nearest-neighbor connectivity on a 2D grid, the average number of SWAP operations needed to connect two random qubits scales as $O(\sqrt{n})$, where $n$ is the total number of qubits. On a 1,000,000-qubit grid, this means approximately 1,000 SWAP operations (3,000 additional gates) per long-range interaction.

- **Superconducting qubits:** Fixed 2D layouts with nearest-neighbor coupling; long-range connectivity requires SWAP chains
- **Trapped ions:** All-to-all connectivity within a single trap (~30-50 ions), but multi-trap architectures require ion shuttling with significant overhead
- **Neutral atoms:** Dynamic rearrangement enables moderate connectivity, but still limited by physical constraints

The connectivity bottleneck compounds the error rate problem: each SWAP operation introduces errors, and the long SWAP chains needed on large processors can dominate the total error budget.

!!! mascot-warning "Bias Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Fermi warns you">
    When companies announce qubit count milestones, they almost never discuss connectivity. A 1,000-qubit processor with nearest-neighbor connectivity is not equivalent to a 1,000-qubit processor with all-to-all connectivity. The former requires hundreds of SWAP operations for typical algorithms; the latter does not. Qubit count without connectivity information is a misleading metric — like advertising a computer's transistor count without mentioning that most of them cannot communicate with each other.

## Breakthrough 5: Cryogenics Must Scale

Superconducting quantum processors — the dominant platform for quantum computing — operate at temperatures of approximately 15 millikelvin, colder than outer space. This extreme cooling is achieved using dilution refrigerators that cost $1-5 million each and consume 15-25 kilowatts of electrical power.

Current dilution refrigerators can cool a volume roughly the size of a coffee can to operating temperature. A million-qubit processor would require either a dramatically larger cryogenic volume or a modular architecture connecting multiple refrigerators:

| Scaling Approach | Challenge | Status |
|-----------------|-----------|--------|
| Larger single cryostat | Thermodynamic limits on cooling power at millikelvin; vibration control | No known path beyond ~10x current volume |
| Modular multi-cryostat | Quantum interconnects between refrigerators with < 0.1% error | Speculative; no demonstration at required fidelity |
| Room-temperature qubits | Different qubit technology entirely | No candidate technology at required performance |

The cryogenic challenge is frequently dismissed as "just engineering," but it involves fundamental thermodynamic constraints. The cooling power available at 15 mK is measured in microwatts to milliwatts. Control electronics dissipate milliwatts to watts per qubit. Scaling to millions of qubits while maintaining millikelvin temperatures requires either a fundamental advance in cryogenic technology or moving control electronics out of the cryostat — each of which is itself a major unsolved problem.

## Breakthrough 6: New Algorithms Needed

The quantum algorithm landscape is remarkably sparse. After three decades of research, the number of quantum algorithms with proven exponential speedup over the best classical algorithms can be counted on one hand:

- **Shor's algorithm** (1994): Integer factoring and discrete logarithm — relevant for breaking RSA/ECC cryptography
- **Grover's algorithm** (1996): Unstructured search — provides only quadratic speedup ($\sqrt{n}$ vs. $n$), which is insufficient for most practical applications
- **Quantum simulation** (various): Simulating quantum systems — genuinely useful for chemistry and materials science, but classical approximation methods (DFT, DMRG, tensor networks) continue to improve
- **HHL algorithm** (2009): Linear systems — exponential speedup only under highly restrictive conditions rarely met in practice
- **Quantum machine learning** (various): No proven advantage over classical methods on any practical dataset

The algorithm gap matters because quantum hardware without algorithms is like a factory without products. Even if all hardware breakthroughs were achieved tomorrow, the number of problems where quantum computers would outperform classical machines is unknown — and may be very small.

!!! example "The Algorithm Discovery Rate"
    In 30 years of quantum algorithm research (1994-2024), approximately 2-3 algorithms with commercially relevant speedups have been discovered: Shor's algorithm and quantum simulation (Grover's quadratic speedup is generally insufficient to justify quantum hardware costs). This is a discovery rate of roughly one commercially relevant algorithm per decade. For quantum computing to justify its investment, this rate would need to increase by at least 10x — and there is no theoretical reason to expect it will.

## Breakthrough 7: Cost Must Drop Dramatically

The cost per quantum operation is currently estimated at $1-$10 per two-qubit gate when amortizing hardware, cryogenics, maintenance, and calibration costs. For comparison, a classical floating-point operation on a modern GPU costs approximately $10^{-15}$ (one femtodollar). The gap is approximately 15 orders of magnitude.

$$
\frac{C_{\text{quantum gate}}}{C_{\text{classical FLOP}}} \approx \frac{\$1}{\$10^{-15}} = 10^{15}
$$

Even with the theoretical speedup of quantum algorithms, this cost ratio must be overcome. Shor's algorithm provides an exponential speedup for factoring, but the constant factors and error correction overhead mean that breaking a 2048-bit RSA key would require approximately $10^{10}$ logical operations — costing $10^{10}$ to $10^{11}$ dollars at current rates. Classical approaches to the same problem are impractical too, but the quantum approach must become *cheaper* than alternatives (such as simply using larger key sizes) to have commercial value.

| Cost Component | Current | Required for Viability | Reduction Factor |
|---------------|---------|----------------------|-----------------|
| Hardware (processor + cryogenics) | $10-50M per system | $100K-1M per system | 50-500x |
| Energy (cooling + control) | 25-100 kW per system | 1-10 kW per system | 10-25x |
| Calibration labor | Hours to days per run | Automated, minutes | 100x+ |
| Error correction overhead | 1,000-10,000 physical per logical | 10-100 physical per logical | 100x |
| Cost per useful operation | $1-10 per gate | $10^{-6}$ per gate | $10^{6}$-$10^{7}$x |

The total cost reduction required — from current per-gate costs to commercially competitive per-gate costs — is approximately one million to ten million fold. For reference, classical computing achieved a comparable cost reduction over 50 years (1970s to 2020s) by riding Moore's Law. Quantum computing has no equivalent scaling law, and the physics of quantum error correction suggests that costs may actually *increase* with qubit count rather than decrease.

## Breakthrough 8: All Must Happen Together

The most critical — and most frequently overlooked — aspect of the breakthrough challenge is that these improvements cannot happen sequentially. They must occur concurrently, because the breakthroughs are interdependent.

Consider what happens if only some breakthroughs are achieved:

- **Better error rates without more qubits:** Fewer physical qubits per logical qubit, but still not enough total logical qubits for useful computation
- **More qubits without better error rates:** More noise, worse results; current scaling trends show that adding qubits *increases* total system error
- **Longer coherence without better connectivity:** Can run longer circuits on a few qubits, but cannot scale algorithms to useful problem sizes
- **Cheaper cryogenics without better algorithms:** Cool a bigger useless computer more cheaply
- **Better algorithms without better hardware:** Know what you *could* compute, but cannot actually compute it

This interdependence means that progress in one dimension without progress in all others does not bring quantum computing closer to commercial viability. It is analogous to building a bridge across a river: completing 90% of the bridge provides zero transportation value. The value is discontinuous — it appears only when the bridge is complete.

| Partial Achievement Scenario | Commercial Value |
|-----------------------------|-----------------|
| 9 of 10 breakthroughs achieved, error rates still too high | Zero |
| 9 of 10 breakthroughs achieved, not enough qubits | Zero |
| 9 of 10 breakthroughs achieved, no useful algorithms | Zero |
| 9 of 10 breakthroughs achieved, costs still prohibitive | Zero |
| All 10 breakthroughs achieved | Potentially significant |

This "all or nothing" character is what makes quantum computing fundamentally different from technologies with continuous improvement pathways. Transistors were useful (commercially, not just scientifically) from day one. Each improvement made them more useful. Quantum computers provide zero commercial value until all barriers are simultaneously overcome.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    The "all must happen together" requirement is the single most important fact about quantum computing viability that proponents consistently downplay. Progress reports always highlight individual metrics: "We improved coherence by 2x!" or "We added 500 more qubits!" But individual improvements have zero commercial value until *all* requirements are simultaneously met. It is precisely like celebrating that you have built 60% of a bridge — technically true, economically meaningless.

#### Diagram: Breakthrough Dependencies Map

<iframe src="../../sims/breakthrough-dependencies/main.html" width="100%" height="550px" scrolling="no"></iframe>

<details markdown="1">
<summary>Breakthrough Dependencies Map</summary>
Type: graph-model
**sim-id:** breakthrough-dependencies<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Verb: organize, examine, attribute
Learning Objective: Students will organize the ten required breakthroughs into a dependency network, examine the interconnections between them, and attribute why partial progress does not translate to partial commercial value.

Instructional Rationale: A network diagram is essential for the Analyze objective because students must see the dense interconnections between breakthroughs that make isolated progress commercially meaningless. A linear list obscures the coupling structure.

Node types:
1. Breakthrough nodes (rounded rectangles, 10 total):
   - "Error Rates ↓100x" (color: red #E53935, status indicator: 5% progress)
   - "Qubit Count ↑1000x" (color: red #E53935, status: 10%)
   - "Coherence ↑100x" (color: orange #FF7043, status: 15%)
   - "Connectivity ↑10x" (color: red #E53935, status: 5%)
   - "Cryogenics Scale" (color: orange #FF7043, status: 10%)
   - "New Algorithms" (color: red #E53935, status: 5%)
   - "Cost ↓10⁶x" (color: red #E53935, status: 1%)
   - "Error Correction" (color: red #E53935, status: 3%)
   - "Control Electronics" (color: orange #FF7043, status: 10%)
   - "Software/Compilers" (color: yellow #FFC107, status: 20%)

2. Central outcome node:
   - "Commercial Viability" (large circle, gray #9E9E9E, changes to green only when all breakthroughs reach 100%)

Layout: Circular arrangement of breakthrough nodes around central "Commercial Viability" node

Edge types:
- Dependency edges (gray dashed lines): connect each breakthrough to "Commercial Viability" (all 10 are required)
- Coupling edges (blue solid lines): connect breakthroughs that directly affect each other:
  - Error Rates ↔ Error Correction (bidirectional)
  - Qubit Count ↔ Cryogenics (more qubits need more cooling)
  - Qubit Count ↔ Connectivity (more qubits compound connectivity challenge)
  - Qubit Count ↔ Control Electronics (more qubits need more control lines)
  - Coherence ↔ Error Rates (decoherence is a source of errors)
  - Cost ↔ Cryogenics (cooling dominates cost)
  - Cost ↔ Qubit Count (more qubits increase cost)
  - Error Correction ↔ Qubit Count (EC requires many more physical qubits)
  - Algorithms ↔ Error Correction (algorithm complexity sets EC requirements)

Interactive features:
- Each breakthrough node has a slider (0-100%) representing estimated progress
- As sliders move, node color transitions from red through orange and yellow to green
- "Commercial Viability" node only turns green when ALL nodes reach 100% — at any value below 100% for any single node, it remains gray
- Hover over coupling edges: tooltip explains the dependency
- "Set to Current State" button: applies realistic 2025 progress estimates
- "Set to Optimistic 2035" button: applies best-case projections
- "Set All to 100%" button: demonstrates what full success looks like
- Progress summary panel showing: "Breakthroughs achieved: X/10, Commercial viability: No/Yes"

Visual feedback:
- When any slider is below 100%, a red "BLOCKED" label appears on the Commercial Viability node
- The coupling edges pulse when both connected nodes have low progress, highlighting bottlenecks

Background: aliceblue
Canvas: Responsive width, 550px height

Implementation: vis-network with HTML overlay sliders, custom node rendering with progress bars
</details>

## The Joint Probability Problem

We now arrive at the mathematical core of the skeptic's case. If each of the 10 breakthroughs has an independent probability of success, the joint probability — the probability that *all* succeed — is the product of the individual probabilities.

For independent events:

$$
P(\text{all 10 succeed}) = \prod_{i=1}^{10} P_i = P_1 \times P_2 \times P_3 \times \cdots \times P_{10}
$$

Let us assign generous individual probabilities. These are not pessimistic estimates — they represent an optimistic scenario where each breakthrough has a better-than-even chance of success:

| Breakthrough | Generous P(success) | Rationale |
|-------------|-------------------|-----------|
| Error rates ↓100x | 30% | Improvement has plateaued; no clear path to $10^{-6}$ |
| Qubit count ↑1000x | 40% | Engineering challenge; some paths exist but unproven at scale |
| Coherence ↑100x | 35% | Steady improvement but physical limits unclear |
| Connectivity ↑10x | 40% | Multiple approaches under investigation |
| Cryogenics scale | 30% | Thermodynamic constraints are fundamental |
| New algorithms | 20% | Discovery rate has been very slow; theoretical barriers may exist |
| Cost ↓$10^6$x | 15% | No scaling law equivalent to Moore's Law |
| Error correction at scale | 25% | Demonstrated at toy scale only; scaling is theoretically possible but unproven |
| Control electronics | 40% | Active area with some commercial progress |
| Software/compilers | 50% | Most tractable problem; can develop in parallel with hardware |

Assuming independence:

$$
P(\text{all succeed}) = 0.30 \times 0.40 \times 0.35 \times 0.40 \times 0.30 \times 0.20 \times 0.15 \times 0.25 \times 0.40 \times 0.50
$$

$$
P(\text{all succeed}) \approx 0.0000076 = 0.00076\%
$$

Even with these generous individual estimates — several of which are arguably too high — the joint probability is less than one in one hundred thousand.

!!! mascot-warning "Bias Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Fermi warns you">
    Proponents will object that these breakthroughs are not independent — solving one may help solve others. This is true, and we address it in the next section on coupled risks. But coupling can go in both directions: some breakthroughs are positively correlated (solving error rates helps error correction), while others are negatively correlated (adding more qubits makes error rates worse). The net effect of coupling on the joint probability is ambiguous and may actually make the situation worse, not better.

## Independent vs. Coupled Risks

The independence assumption in the joint probability calculation above is a simplification. In reality, the ten breakthroughs are coupled — progress in one area affects the likelihood of progress in others. The critical question is whether this coupling makes the joint probability higher or lower.

**Positive correlations (coupling that helps):**

- Better error rates → easier error correction (fewer physical qubits per logical qubit)
- Better control electronics → better calibration → somewhat better error rates
- Better software/compilers → more efficient use of available qubits and coherence

**Negative correlations (coupling that hurts):**

- More qubits → more cross-talk → worse error rates (scaling makes errors worse)
- More qubits → more control lines → harder cryogenics (scaling makes cooling harder)
- Better error correction → more physical qubits required → harder to manufacture and cool
- Lower error rates → stricter fabrication tolerances → higher manufacturing cost

The negative correlations are particularly insidious because they create a **scaling trap**: the improvements needed for one breakthrough directly undermine another. Adding more qubits (Breakthrough 2) increases cross-talk that worsens error rates (Breakthrough 1), which demands more aggressive error correction (Breakthrough 8), which in turn requires even more qubits — a vicious cycle.

| Coupling Pair | Direction | Effect on Joint Probability |
|--------------|-----------|---------------------------|
| Error rates ↔ Error correction | Positive | Helps (better rates → less overhead) |
| Qubit count ↔ Error rates | Negative | Hurts (more qubits → more errors) |
| Qubit count ↔ Cryogenics | Negative | Hurts (more qubits → harder to cool) |
| Qubit count ↔ Control electronics | Negative | Hurts (more qubits → more wiring) |
| Error correction ↔ Qubit count | Negative | Hurts (EC demands vastly more qubits) |
| Coherence ↔ Error rates | Positive | Helps (longer coherence → fewer decoherence errors) |
| Cost ↔ All hardware breakthroughs | Negative | Hurts (better hardware is more expensive) |

Counting the positive and negative correlations, we find approximately 3 positive couplings and 5-6 negative couplings. The net effect of coupling is more likely to *decrease* the joint probability than to increase it.

#### Diagram: Joint Probability Calculator

<iframe src="../../sims/joint-probability-calculator/main.html" width="100%" height="600px" scrolling="no"></iframe>

<details markdown="1">
<summary>Breakthrough Joint Probability Calculator MicroSim</summary>
Type: microsim
**sim-id:** joint-probability-calculator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Verb: calculate, demonstrate, solve
Learning Objective: Students will calculate the joint probability of all ten breakthroughs succeeding by adjusting individual probability estimates and observing how the collective probability changes, demonstrating how individual uncertainties compound.

Instructional Rationale: An interactive calculator is appropriate for the Apply objective because students must manipulate individual probabilities and observe — with surprise — how quickly the joint probability collapses even when individual probabilities seem reasonable. This visceral experience of probability compounding is more impactful than reading the calculation.

Canvas layout:
- Left panel (55% width): Ten horizontal slider bars, one per breakthrough
- Right panel (45% width): Results display with joint probability and visualization

Interactive controls:
- Ten sliders, each 0-100%:
  1. "Error Rates ↓100x" (default: 30%)
  2. "Qubit Count ↑1000x" (default: 40%)
  3. "Coherence ↑100x" (default: 35%)
  4. "Connectivity ↑10x" (default: 40%)
  5. "Cryogenics Scale" (default: 30%)
  6. "New Algorithms" (default: 20%)
  7. "Cost ↓10⁶x" (default: 15%)
  8. "Error Correction" (default: 25%)
  9. "Control Electronics" (default: 40%)
  10. "Software/Compilers" (default: 50%)
- Each slider shows its current value as a percentage label
- Preset buttons:
  - "Pessimistic" (all at 10-20%)
  - "Generous" (defaults above)
  - "Very Optimistic" (all at 50-70%)
  - "Proponent Claims" (all at 70-90%)
  - "Reset"
- Toggle: "Include Coupling Effects" (applies correlation adjustments to joint probability)

Right panel display:
- Large joint probability display: "P(all succeed) = X.XXXX%" with dynamic color (red if < 1%, yellow if 1-10%, green if > 10%)
- "That's 1 in [N]" translation (e.g., "1 in 131,579")
- Running product visualization: ten colored bars stacking multiplicatively, each one shrinking the total
  - First bar: full width representing P₁
  - Second bar: width = P₁ × P₂
  - ...continuing until tenth bar shows final joint probability
  - This visual makes the compounding effect viscerally clear
- Comparison callouts (static):
  - "Probability of being struck by lightning in your lifetime: 1 in 15,300"
  - "Probability of winning a state lottery jackpot: 1 in 13,000,000"
- If coupling toggle is ON: display adjusted probability with note showing whether coupling helped or hurt

Data Visibility Requirements:
- Each slider adjustment immediately updates the joint probability
- The multiplicative cascade visualization updates in real time
- When hovering over any bar in the cascade, tooltip shows: "After [breakthrough name]: P = X.XX%"

Background: aliceblue
Canvas: Responsive width, 600px height

Implementation: p5.js with slider array, real-time probability calculation, cascading bar visualization
</details>

## Each Breakthrough Is Uncertain

It is worth emphasizing that none of the ten breakthroughs is guaranteed even in isolation. For each one, there are known physics arguments that may prevent achievement regardless of engineering effort:

- **Error rates:** Fundamental sources of decoherence (cosmic rays, thermal phonons, material defects) may impose floors that cannot be engineered away
- **Qubit count:** Fabrication yield and wiring density may impose practical limits well below one million
- **Coherence:** Fundamental decoherence mechanisms may set upper bounds on coherence times for solid-state qubits
- **Connectivity:** Long-range coupling introduces new error sources that may partially offset its benefits
- **Cryogenics:** Thermodynamic limits on cooling power at millikelvin temperatures are absolute
- **Algorithms:** BQP (the class of problems solvable by quantum computers) may not contain many commercially relevant problems
- **Cost:** Without a Moore's Law equivalent, cost reduction may follow slow linear improvement rather than exponential decrease
- **Error correction:** The overhead may be fundamentally too large for any practical computation
- **Control electronics:** Cryo-CMOS may never achieve the performance of room-temperature electronics
- **Software:** Quantum compilation may be inherently harder than classical compilation (QMA-hard in some cases)

For each breakthrough, there exist plausible physics arguments that it may never be achieved. This is what distinguishes quantum computing from technologies like the transistor, where the physics barriers to scaling were understood and surmountable from the beginning.

!!! mascot-tip "Fermi's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Fermi shares a tip">
    When a quantum computing company presents a breakthrough in one dimension, always ask: "What happened to the other nine?" If coherence improved 2x, did error rates also improve? Did qubit count increase? Did cost decrease? Progress on one metric is not progress toward viability unless the other nine metrics are also advancing. Track all ten simultaneously — that is the only honest way to assess progress.

## The Bayesian Update Framework

A rigorous approach to updating our probability estimates uses Bayesian reasoning. Each year, we observe quantum computing progress (or lack thereof) and update our prior estimates accordingly.

The key Bayesian question is: **given that 40+ years of intensive research have not achieved any of the required breakthroughs at scale, what should we infer about the probability of achieving them in the next 10-20 years?**

Under Bayesian updating:

$$
P(\text{viable} \mid \text{40 years of failure}) = \frac{P(\text{40 years of failure} \mid \text{viable}) \times P(\text{viable})}{P(\text{40 years of failure})}
$$

If quantum computing were truly on a path to viability, we would expect to see intermediate milestones being met — commercial prototypes, scaling improvements, cost reductions. The absence of these milestones over four decades is strong Bayesian evidence against viability.

| Observation | Bayesian Update Direction |
|-------------|--------------------------|
| Error rates plateauing after 2020 | Negative (reduces P of Breakthrough 1) |
| Qubit count growing slowly, quality not improving | Weak negative |
| No commercial quantum computation in 40+ years | Strong negative |
| Classical computers continuing to improve faster | Negative (raises bar for quantum advantage) |
| Post-quantum cryptography standardized (2024) | Negative (reduces value of Shor's algorithm) |
| Google retracting "quantum supremacy" language | Negative (indicates overstated progress) |

Each of these observations should cause a rational Bayesian agent to lower their probability estimate for quantum computing viability. The cumulative effect of 40 years of negative observations is substantial.

#### Diagram: Probability Sensitivity Waterfall

<iframe src="../../sims/probability-waterfall/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Probability Sensitivity Waterfall Chart</summary>
Type: chart
**sim-id:** probability-waterfall<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Verb: assess, critique, justify
Learning Objective: Students will assess how sensitive the joint probability is to changes in individual breakthrough estimates, critique the claim that optimism about any single breakthrough significantly changes the overall picture, and justify why the joint probability remains low even under generous assumptions.

Instructional Rationale: A waterfall chart is appropriate for the Evaluate objective because it visually demonstrates how each breakthrough's probability multiplicatively reduces the total, making it clear that no single generous estimate can rescue the joint probability.

Chart type: Waterfall (cascading bar chart)

X-axis: Ten breakthroughs (categorical, abbreviated names)
Y-axis: Cumulative probability (logarithmic scale, 100% to 0.0001%)

Bars:
- Starting value: 100% (before any breakthrough is required)
- Each bar drops from the previous cumulative value by the factor (1 - P_i)
- Bar color gradient: starts green (#388E3C) at high cumulative probability, transitions through yellow (#FFC107) to red (#E53935) as probability drops

Data (using "generous" estimates):
1. Start: 100%
2. After Error Rates (30%): 30%
3. After Qubit Count (40%): 12%
4. After Coherence (35%): 4.2%
5. After Connectivity (40%): 1.68%
6. After Cryogenics (30%): 0.504%
7. After Algorithms (20%): 0.101%
8. After Cost (15%): 0.015%
9. After Error Correction (25%): 0.0038%
10. After Control Electronics (40%): 0.0015%
11. After Software (50%): 0.00076%

Final bar: highlighted in bold red with annotation "Final: ~1 in 131,000"

Interactive features:
- Hover over each bar: tooltip showing breakthrough name, individual probability, cumulative probability, and "equivalent to [everyday comparison]"
- Dropdown to switch between "Pessimistic", "Generous", "Very Optimistic", and "Proponent Claims" presets
- Each preset recalculates the waterfall
- Annotation line at 1%: "Below this line, rational investors allocate minimal capital"
- Annotation line at 0.01%: "Below this line, only speculative 'lottery ticket' allocation is justified"

Title: "How Joint Probability Collapses: The Waterfall of Required Breakthroughs"
Canvas: Responsive width, 500px height
Background: aliceblue

Implementation: Chart.js waterfall chart (stacked bar hack), custom tooltip, preset buttons
</details>

## Chapter Summary

!!! mascot-celebration "Excellent Investigative Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Fermi celebrates">
    You've now seen the complete picture: quantum computing requires not one breakthrough but ten, all occurring concurrently. Even with generous probability estimates for each, the joint probability of collective success is less than one in a hundred thousand. Coupling between breakthroughs is more likely to reduce than increase this probability. And 40 years of observation provide strong Bayesian evidence against viability. The numbers don't check out — and now you can show exactly why. Outstanding investigative work, fellow investigator!

## Review Questions

??? question "Question 1: Why must the ten breakthroughs occur concurrently rather than sequentially?"
    The breakthroughs must be concurrent because they are interdependent — each one is necessary but not sufficient for commercial viability, and partial achievement provides zero commercial value. For example, achieving 1,000x more qubits without improving error rates would produce a larger but noisier system that cannot compute anything useful. Achieving perfect error rates on 1,000 qubits would produce a flawless but tiny system that cannot solve commercially relevant problems. The value function is discontinuous: it remains at zero until all ten requirements are simultaneously met, then jumps to significant value. This "all or nothing" character is what makes quantum computing fundamentally different from technologies with continuous improvement pathways.

??? question "Question 2: Calculate the joint probability of success if you believe each of the ten breakthroughs has a 50% chance of being achieved independently."
    If each of the ten breakthroughs has an independent probability of 50%, the joint probability is: $P = 0.5^{10} = 0.5 \times 0.5 \times 0.5 \times \cdots = \frac{1}{1024} \approx 0.098\%$. Even in this extremely optimistic scenario — where every single breakthrough is more likely to succeed than fail — the joint probability is less than one in a thousand. This demonstrates the power of probability compounding: individually reasonable odds produce collectively improbable outcomes when many independent conditions must all be satisfied.

??? question "Question 3: Explain how the coupling between qubit count and error rates creates a 'scaling trap' for quantum computing."
    The scaling trap arises from a negative correlation between Breakthrough 1 (error rates) and Breakthrough 2 (qubit count). As more qubits are added to a processor, electromagnetic cross-talk between control signals increases, degrading gate fidelity and effectively worsening error rates. This means that progress toward more qubits actively undermines progress toward better error rates. The situation is compounded by error correction: to compensate for worse error rates, more physical qubits are needed per logical qubit (Breakthrough 8), which in turn requires even more total physical qubits, further worsening the cross-talk problem. This circular dependency — more qubits → worse errors → more correction needed → more qubits needed — creates a trap where scaling the system makes the fundamental problem harder rather than easier.

??? question "Question 4: Why does the cost reduction required ($10^6$x to $10^7$x) lack a 'Moore's Law equivalent' for quantum computing?"
    Moore's Law worked for classical computing because transistor scaling followed a continuous improvement pathway: making transistors smaller simultaneously made them faster, cheaper, and more energy-efficient. The physics cooperated with economics. Quantum computing has no equivalent because the physics works against economic scaling. Making qubits better (lower error rates) typically requires more expensive fabrication, tighter tolerances, and more complex control. Making systems bigger (more qubits) requires proportionally more cooling, more control electronics, and more calibration — costs that scale linearly or superlinearly with qubit count. There is no known physical mechanism that would cause quantum computing costs to decrease exponentially with time the way classical computing costs did.

??? question "Question 5: A quantum computing CEO claims their company has achieved breakthroughs in three of the ten areas. Using the framework from this chapter, explain why this claim, even if true, does not significantly improve the investment case."
    Achieving three of ten breakthroughs leaves seven remaining, each with uncertain probability. Even if we assign the three achieved breakthroughs P = 1.0 (certain) and maintain the generous estimates for the remaining seven, the joint probability becomes: $P = 1.0^3 \times 0.40 \times 0.30 \times 0.20 \times 0.15 \times 0.25 \times 0.40 \times 0.50 = 0.000090 \approx 0.009\%$, or about 1 in 11,000. This is 12x better than the original estimate but still less than one hundredth of one percent. The commercial value remains zero until all ten are achieved, so completing three provides no intermediate revenue and only marginally improves the probability of eventual success. Additionally, the three "achieved" breakthroughs may have been the easier ones, leaving the hardest challenges (cost reduction, error correction at scale, algorithm discovery) still ahead.
