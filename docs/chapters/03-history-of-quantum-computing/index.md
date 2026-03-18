---
title: A History of Quantum Computing Promises
description: A comprehensive timeline of quantum computing from Feynman's 1981 conjecture to the present, documenting the persistent pattern of optimistic predictions, missed deadlines, and goalpost-moving.
generated_by: claude skill chapter-content-generator
date: 2026-03-16 23:23:41
version: 0.05
---

# A History of Quantum Computing Promises

## Summary

This chapter traces the full history of quantum computing from Feynman's 1981 conjecture through the present day, documenting every major milestone, claimed achievement, and missed deadline. We analyze the persistent pattern of optimistic predictions followed by goalpost-moving, revealing that proponents have claimed commercial viability was "3-5 years away" at every stage for over four decades. Students will be able to identify this pattern and use it to evaluate current predictions.

## Concepts Covered

This chapter covers the following 14 concepts from the learning graph:

1. Feynman's 1981 Idea
2. Shor's Algorithm 1994
3. First Lab Demos 1998-2001
4. D-Wave "Commercial" QC 2007
5. D-Wave Sale to Lockheed 2011
6. Google Buys D-Wave 2013
7. IBM Cloud Access 2016
8. Google Sycamore Claim 2019
9. IBM 127-Qubit Chip 2021
10. IBM 1121-Qubit Chip 2023
11. Zero Commercial ROI by 2025
12. Timeline Pattern Analysis
13. 3-5 Years Away Pattern
14. 40 Years of Promises

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: What Is Quantum Computing?](../01-what-is-quantum-computing/index.md)
- [Chapter 2: Quantum Algorithms and Their Real-World Limits](../02-quantum-algorithms-and-limits/index.md)

---

!!! mascot-welcome "Fermi Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Fermi welcomes you">
    Welcome, fellow investigators! This chapter is the evidentiary backbone of
    the course. We are going to trace every major milestone in quantum computing
    history and catalog what was promised at each stage versus what was delivered.
    The pattern that emerges is striking — and once you see it, you will never
    read a quantum computing press release the same way again. But does the math
    check out? Let's find out!

## Learning Objectives

After completing this chapter, you will be able to:

- **Recall** the major milestones in quantum computing history from 1981 to 2025
- **Trace** the evolution from theoretical concept to laboratory demonstrations to commercial claims
- **Identify** the "3-5 years away" pattern that has persisted for over four decades
- **Analyze** what was promised at each milestone versus what was actually achieved
- **Evaluate** current quantum computing predictions by comparing them to the historical record of missed deadlines
- **Explain** why zero commercial return on investment has been generated despite over $100 billion in cumulative spending

---

## The Theoretical Era (1981-1993)

### Feynman's 1981 Idea

The story of quantum computing begins with a talk at the First Conference on the Physics of Computation at MIT in May 1981. Richard Feynman, one of the twentieth century's greatest physicists and a Nobel laureate, posed a deceptively simple question: Can classical computers efficiently simulate quantum mechanical systems?

His answer was no. Feynman argued that simulating a quantum system of $n$ particles on a classical computer requires tracking $2^n$ probability amplitudes — an exponentially growing resource requirement. He proposed that instead of simulating quantum mechanics on classical hardware, it might be possible to build a computer that *operates* according to quantum mechanical principles, using quantum systems to simulate other quantum systems.

!!! quote "Feynman, 1981"
    "Nature isn't classical, dammit, and if you want to make a simulation of
    nature, you'd better make it quantum mechanical, and by golly it's a
    wonderful problem, because it doesn't look so easy."

Feynman's insight was profound but narrow. He was proposing quantum *simulation* — using quantum systems to model other quantum systems. He was not proposing a general-purpose quantum computer that would replace classical machines for everyday tasks. This distinction, often lost in popular retellings, matters enormously. The original vision was about physics simulation, not about building a universal computing platform.

### The Theoretical Foundations (1985-1993)

Feynman's conjecture inspired a wave of theoretical work:

| Year | Researcher | Contribution |
|------|-----------|--------------|
| 1985 | David Deutsch | Described the universal quantum Turing machine — proving that a quantum computer could simulate any physical system |
| 1992 | Deutsch and Jozsa | First quantum algorithm with provable (though artificial) speedup over classical |
| 1993 | Bernstein and Vazirani | Demonstrated a quantum algorithm with superpolynomial speedup for a specific problem |

During this period, quantum computing was a theoretical curiosity pursued by a handful of physicists and computer scientists. Funding was minimal, and no one was predicting commercial viability within any specific timeframe. The field was honest about its speculative nature — a characteristic that would change dramatically after 1994.

---

## The Algorithm Breakthrough (1994-1997)

### Shor's Algorithm 1994

In 1994, mathematician Peter Shor at AT&T Bell Labs published an algorithm that transformed quantum computing from a theoretical curiosity into a potential national security concern. Shor's algorithm can factor large integers in polynomial time — a task that is believed to be intractable for classical computers and that underpins the RSA encryption system protecting virtually all digital commerce and classified communications.

The impact was immediate and seismic:

- **Intelligence agencies** recognized that a working quantum computer could break the encryption protecting military communications, financial systems, and diplomatic cables
- **Government funding** for quantum computing research increased dramatically, particularly from the NSA, DARPA, and their equivalents in the UK, China, and other nations
- **The first optimistic predictions appeared.** Researchers began speculating that working quantum computers capable of breaking encryption might be possible within 10-20 years — a prediction made in the mid-1990s, targeting roughly 2005-2015

Grover's search algorithm followed in 1996, and the first quantum error correction codes (by Shor and Steane, independently) appeared in 1995-1996. The theoretical toolkit was assembling rapidly.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    Notice what happened here. Shor's algorithm solved a problem nobody had
    asked quantum computing to solve — but it happened to threaten the
    foundation of global information security. This accident of mathematics
    redirected the entire field from Feynman's original vision of physics
    simulation toward cryptanalysis. The funding followed the security threat,
    not the science. This is the first instance of a recurring pattern:
    quantum computing's direction is shaped more by what attracts funding
    than by what the physics can deliver.

---

## The Laboratory Era (1998-2006)

### First Lab Demos 1998-2001

The late 1990s saw the first physical demonstrations of quantum computation, using nuclear magnetic resonance (NMR) systems:

| Year | Milestone | Details | Significance |
|------|-----------|---------|-------------|
| 1998 | First 2-qubit NMR demonstration | Isaac Chuang and Neil Gershenfeld | Proved basic quantum gate operations were physically possible |
| 1998 | First quantum algorithm executed | Deutsch-Jozsa on 2 qubits | First physical demonstration of a quantum speedup (on a trivial problem) |
| 2001 | Shor's algorithm factors 15 | IBM/Stanford, 7-qubit NMR | Factored $15 = 3 \times 5$ — the largest "useful" application of Shor's algorithm on quantum hardware *to this day* |

The 2001 demonstration — factoring the number 15 into 3 and 5 — deserves special attention. It was celebrated as a landmark achievement, and it was. But it also revealed the enormous gap between theory and practice. A 7-qubit NMR system factored a number that any first-grader can factor mentally. Twenty-four years later, quantum computers have not significantly advanced beyond this in practical factoring capability.

**Optimistic predictions at this stage:**

- "Practical quantum computers within 10-15 years" (various researchers, ~2001)
- Target: ~2011-2016
- Reality: By 2016, no practical quantum computer existed

The NMR approach itself proved to be a dead end — it does not scale beyond a handful of qubits. But the demonstrations generated excitement and funding that carried the field forward to new hardware platforms.

---

## The D-Wave Era (2007-2016)

### D-Wave "Commercial" QC 2007

In 2007, the Canadian company D-Wave Systems made a dramatic announcement: they had built a "commercial quantum computer" — the D-Wave Orion, a 16-qubit quantum annealer. The announcement was accompanied by a public demonstration at the Computer History Museum in Mountain View, California.

The claim was immediately controversial. D-Wave's system was a **quantum annealer**, not a universal gate-based quantum computer. Quantum annealing is a specialized technique for finding approximate solutions to optimization problems, and whether it provides any advantage over classical simulated annealing remains debated to this day. Many physicists questioned whether D-Wave's machines were even genuinely quantum at all — a debate that persisted for years.

!!! info "Quantum Annealing vs. Gate-Based Computing"
    Quantum annealing is a fundamentally different approach from the gate-based
    quantum computing discussed in previous chapters. An annealer attempts to
    find the lowest-energy state of a system (analogous to an optimization
    problem's solution) by exploiting quantum tunneling. It cannot run Shor's
    algorithm, Grover's algorithm, or most of the algorithms that justify
    quantum computing investment. When D-Wave claimed a "commercial quantum
    computer," the distinction between annealing and universal computation was
    often lost in the press coverage.

### D-Wave Sale to Lockheed 2011

In 2011, Lockheed Martin purchased a D-Wave One system for approximately $10 million. This was celebrated as the first commercial sale of a quantum computer. The sale generated enormous press coverage and lent credibility to the quantum computing industry.

What the headlines did not emphasize:

- Lockheed purchased the system primarily for **research and evaluation**, not for production use
- No quantum speedup was demonstrated on any Lockheed problem
- The $10 million price bought a system that independent benchmarks showed was **not faster** than classical optimization software running on a commodity laptop for the test problems used
- The purchase was driven partly by the strategic desire not to be left behind in a potentially transformative technology — a manifestation of FOMO (fear of missing out) that we will examine in Chapter 11

### Google Buys D-Wave 2013

In 2013, Google and NASA jointly purchased a D-Wave Two system for their Quantum Artificial Intelligence Laboratory (QuAIL). The partnership was announced with great fanfare and generated a wave of media coverage suggesting that quantum computing had arrived at the doorstep of practical use.

The reality was more nuanced. Google's own researchers subsequently published results showing that the D-Wave system provided **no measurable speedup** over classical algorithms for the optimization problems tested. A 2014 study by a team including Google researchers found that a classical algorithm called simulated quantum annealing — running on a conventional computer — matched or outperformed the D-Wave hardware.

| D-Wave Milestone | Claim | Reality |
|-----------------|-------|---------|
| Orion demo (2007) | "Commercial quantum computer" | 16-qubit annealer; not universal QC; quantum nature disputed |
| D-Wave One sale (2011) | First commercial QC sale | Research purchase; no demonstrated speedup |
| D-Wave Two at Google (2013) | Google validates quantum computing | Google's own tests showed no speedup over classical |
| D-Wave 2000Q (2017) | 2,000 qubits | No demonstrated advantage over classical optimization |

**Optimistic predictions at this stage:**

- "Quantum advantage within 5 years" (D-Wave CEO Vern Brownell, ~2013)
- Target: ~2018
- Reality: By 2018, no quantum advantage had been demonstrated

#### Diagram: Quantum Computing History Timeline

<iframe src="../../sims/qc-history-timeline/main.html" width="100%" height="700" scrolling="no"></iframe>

[Quantum Computing History Timeline Fullscreen (recommended)](../../sims/qc-history-timeline/main.html)

<details markdown="1">
<summary>Quantum Computing History Timeline</summary>
Type: timeline
**sim-id:** qc-history-timeline<br/>
**Library:** vis-timeline<br/>
**Status:** Specified

**Bloom Level:** Remember (L1)
**Bloom Verb:** Recall, Identify

**Learning Objective:** Students will be able to recall the major milestones in quantum computing history and identify the pattern of escalating claims alongside persistent lack of commercial results.

**Instructional Rationale:** A visual timeline enables students to see the full sweep of quantum computing history at once, recognizing the temporal pattern of promises and missed deadlines. Hover-based detail disclosure lets students explore each milestone without overwhelming them with all the information simultaneously.

**Time period:** 1981-2025

**Orientation:** Horizontal, scrollable

**Events (grouped by era):**

Theoretical Era (blue):
- 1981: Feynman proposes quantum simulation
- 1985: Deutsch describes universal quantum Turing machine
- 1994: Shor's factoring algorithm published
- 1995-96: First quantum error correction codes
- 1996: Grover's search algorithm

Laboratory Era (green):
- 1998: First 2-qubit NMR demonstrations
- 2001: IBM/Stanford factor 15 on 7-qubit NMR

D-Wave Era (orange):
- 2007: D-Wave announces "commercial" quantum computer
- 2011: D-Wave One sold to Lockheed Martin ($10M)
- 2013: Google/NASA purchase D-Wave Two

Cloud/NISQ Era (purple):
- 2016: IBM puts 5-qubit system on the cloud
- 2019: Google claims quantum supremacy with 53-qubit Sycamore
- 2020: China's Jiuzhang photonic supremacy claim
- 2021: IBM unveils 127-qubit Eagle
- 2022: IBM unveils 433-qubit Osprey
- 2023: IBM unveils 1,121-qubit Condor
- 2024: Multiple "logical qubit" demonstrations
- 2025: Still zero commercial quantum advantage

Prediction Track (red, displayed above main timeline):
- Each major prediction shown as a bar from "prediction date" to "predicted target date"
- All bars end before actual delivery, illustrating the perpetual "3-5 years away" pattern

**Interactive features:**

- Hover over each event to see: full description, what was claimed at the time, what actually happened, and the prediction made about future timelines
- Click to expand a detail panel with source citations
- Zoom: mouse wheel or pinch to zoom in/out on time periods
- Pan: click and drag to scroll through the timeline
- Toggle: "Show predictions" — overlay bars showing each era's prediction of when commercial viability would be achieved

**Visual styling:**

- Era-based color coding as listed above
- Prediction bars in translucent red to show the pattern of missed targets
- Milestone icons: circles for events, diamonds for major claims, X marks for debunked claims
- A horizontal line at the bottom labeled "Commercial Revenue Generated" that remains flat at $0 throughout

**Implementation:** vis-timeline JavaScript library. Background: aliceblue. Responsive to window resize.
</details>

---

## The Cloud and NISQ Era (2016-Present)

### IBM Cloud Access 2016

In 2016, IBM made a strategic decision that changed the public face of quantum computing. They placed a 5-qubit quantum processor on the cloud, allowing anyone with an internet connection to run quantum circuits. The IBM Quantum Experience was a brilliant marketing move: it made quantum computing tangible and generated enormous media interest.

The system was real — users could genuinely run quantum circuits on physical quantum hardware. But the 5-qubit system was far too small and noisy to solve any problem of practical value. Its significance was primarily educational and promotional. IBM followed this with increasingly large processors and the development of Qiskit, an open-source quantum programming framework.

### Google Sycamore Claim 2019

In October 2019, Google's team published a paper in *Nature* claiming "quantum supremacy" — the demonstration that their 53-qubit Sycamore processor could perform a computation (random circuit sampling) in 200 seconds that would take the world's fastest classical supercomputer an estimated 10,000 years.

As we examined in Chapter 2, this claim was immediately disputed by IBM and subsequently undermined by classical algorithm improvements. But the media impact was enormous. Headlines around the world proclaimed that quantum computing had achieved a fundamental milestone.

**What was promised in 2019:**

- Google's Hartmut Neven predicted "practical quantum advantage within a few years"
- Multiple analysts projected commercial quantum applications by 2023-2025
- Venture capital investment in quantum startups surged, reaching billions of dollars annually

**What happened by 2025:**

- The random circuit sampling benchmark was matched by classical computers
- No commercial quantum advantage was demonstrated on any problem
- Quantum hardware error rates remained too high for fault-tolerant computation

!!! mascot-warning "Bias Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Fermi warns you">
    The Google supremacy announcement is a case study in **media amplification**.
    The paper itself was carefully worded, acknowledging limitations. But the
    press coverage stripped away the nuance. "Google achieves quantum supremacy"
    became "Google builds computer that outperforms all classical computers" in
    public perception. Once the simplified headline anchors in memory, the
    subsequent debunking — IBM's 2.5-day estimate, the 2023 GPU simulation in
    15 seconds — receives a fraction of the attention.

### IBM 127-Qubit Chip 2021

In November 2021, IBM unveiled its 127-qubit Eagle processor, making it the first quantum chip to break the 100-qubit barrier. IBM presented this as a critical milestone on its roadmap toward useful quantum computing.

The qubit count was impressive as a headline number, but the qubits were noisy — with two-qubit gate error rates around $10^{-2}$ to $10^{-3}$. A 127-qubit processor with these error rates cannot perform computations of any greater practical value than a 53-qubit processor, because errors accumulate faster than the additional qubits can contribute useful computation. The challenge is not merely adding more qubits — it is adding more *good* qubits.

### IBM 1121-Qubit Chip 2023

In December 2023, IBM released its 1,121-qubit Condor processor. The qubit count generated headlines, but IBM itself pivoted its messaging in a revealing way. Rather than emphasizing qubit count, IBM began talking about "utility-scale" quantum computing — a term that conveniently redefined success away from the fault-tolerant quantum computing that the field had been promising for decades.

IBM's pivot is significant because it represents a pattern we will see repeatedly: **redefining success** when original targets are missed.

| IBM Quantum Roadmap | Original Claim | Revised Reality |
|--------------------|----------------|-----------------|
| 2020 Roadmap | "Quantum advantage by 2025" | Revised to "utility-scale demonstrations" |
| 2021 Roadmap | 1,000+ qubits by 2023, error-corrected systems by 2025 | 1,121 noisy qubits in 2023; error correction still distant |
| 2023 Roadmap | 100,000+ qubits by 2033 | Condor shelved in favor of modular approach; timeline uncertain |

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    Watch the language shift carefully. "Quantum advantage" became "quantum
    utility." "Fault-tolerant quantum computing" became "error-mitigated quantum
    computing." "Breaking RSA encryption" became "quantum-resistant algorithm
    migration." Each redefinition moves the goalposts to something less ambitious
    and harder to falsify. When a company changes the definition of success, ask
    yourself: did the science improve, or did the marketing adjust?

---

## Zero Commercial ROI by 2025

As of 2025, the cumulative investment in quantum computing exceeds $100 billion worldwide — spanning government research funding, corporate R&D budgets, venture capital, and public market investments (IPOs and SPACs). Against this massive outlay, the commercial return is:

**$0 in net positive ROI from quantum computing products or services.**

No company has built a quantum computer that solves a commercial problem better, faster, or cheaper than a classical alternative. No quantum computing startup has achieved profitability from quantum computing products (as opposed to government grants and research contracts). No enterprise customer has documented a positive return on their quantum computing investment.

This is not a controversial claim — it is an empirical fact acknowledged by the industry itself:

- **D-Wave** generates revenue primarily from government contracts and research partnerships, not from customers using quantum annealing to solve commercial problems
- **IonQ** went public via SPAC in 2021 with virtually no product revenue; its stock declined over 70% from IPO highs
- **Rigetti** went public via SPAC in 2022 and has faced persistent financial difficulties
- **IBM** offers quantum computing as a cloud service but has not documented any customer achieving commercial advantage from using it

| Company | Public Market Entry | Peak Valuation | Revenue from QC Products (2024) | Profitable? |
|---------|-------------------|---------------|-------------------------------|-------------|
| IonQ | SPAC, 2021 | ~$6B | ~$40M (mostly contracts) | No |
| Rigetti | SPAC, 2022 | ~$1.5B | ~$15M (mostly contracts) | No |
| D-Wave | SPAC, 2022 | ~$1.6B | ~$8M (mostly government) | No |
| IBM Quantum | Division of IBM | N/A | Not separately disclosed | Not demonstrated |

#### Diagram: Quantum Computing Investment vs. Revenue

<iframe src="../../sims/qc-investment-vs-revenue/main.html" width="100%" height="550px" scrolling="no"></iframe>

<details markdown="1">
<summary>Quantum Computing Investment vs. Revenue</summary>
Type: chart
**sim-id:** qc-investment-vs-revenue<br/>
**Library:** Chart.js<br/>
**Status:** Specified

**Bloom Level:** Analyze (L4)
**Bloom Verb:** Compare, Contrast

**Learning Objective:** Students will be able to compare the cumulative investment in quantum computing against cumulative commercial revenue, and explain the significance of the widening gap.

**Instructional Rationale:** A dual-series chart with cumulative investment and cumulative revenue on the same axes makes the gap viscerally obvious. The logarithmic scale is necessary to show both quantities, but a toggle to linear scale lets students see the gap in absolute terms — where revenue is invisible next to investment.

**Chart type:** Area chart with two series

**X-axis:** Year (2000 to 2025)

**Y-axis:** Cumulative dollars (USD), toggle between logarithmic and linear scale

**Data series:**

1. Cumulative Global Investment (blue area):
   - 2000: ~$500M
   - 2005: ~$2B
   - 2010: ~$5B
   - 2015: ~$12B
   - 2018: ~$25B
   - 2020: ~$40B
   - 2022: ~$70B
   - 2025: ~$110B

2. Cumulative Commercial Revenue from QC Products (orange line, near zero):
   - 2000-2015: ~$0
   - 2016: ~$5M (first cloud access fees)
   - 2018: ~$20M
   - 2020: ~$50M
   - 2022: ~$120M
   - 2025: ~$250M (mostly government contracts and research partnerships, not commercial advantage)

**Annotations:**

- Shaded gap between the two series labeled "The $100B+ Gap"
- Note on revenue line: "Revenue is primarily government grants and research contracts, not commercial QC advantage"
- Markers on investment line for major funding surges: post-Sycamore (2020), SPAC era (2021-2022)

**Color coding:**

- Blue gradient: Investment (darker = faster growth)
- Orange thin line: Revenue
- Red annotation text for the gap

**Interactive features:**

- Hover over data points to see: breakdown by source (government, corporate R&D, VC, public markets)
- Toggle between logarithmic and linear y-axis scale
- Toggle: "Show comparison" — overlay the investment-to-revenue trajectory of successful technologies (transistors, lasers, GPS) to show what a healthy investment curve looks like

**Implementation:** Chart.js with toggleable axis scale. Background: aliceblue. Responsive to window resize.
</details>

---

## Timeline Pattern Analysis

When we lay out the complete history of quantum computing predictions alongside outcomes, a striking pattern emerges. At every major milestone — from the first theoretical algorithms through the latest hardware demonstrations — prominent voices in the field predicted that commercially useful quantum computing was "3-5 years away." And at every stage, that prediction has been wrong.

### The "3-5 Years Away" Pattern

The following table documents specific predictions alongside their outcomes:

| Year | Prediction | Who | Predicted Target | Actual Outcome |
|------|-----------|-----|-----------------|----------------|
| ~1995 | Quantum computers will break encryption within 20 years | Various | ~2015 | No encryption broken |
| ~2001 | Practical QC within 10-15 years | Various researchers | ~2011-2016 | No practical QC |
| 2007 | D-Wave will deliver commercial advantage soon | Geordie Rose, D-Wave | ~2010-2012 | No advantage demonstrated |
| 2013 | Quantum advantage within 5 years | Vern Brownell, D-Wave | ~2018 | No advantage demonstrated |
| 2017 | Quantum advantage by 2020 | Multiple companies | 2020 | No advantage demonstrated |
| 2019 | Practical advantage within a few years | Hartmut Neven, Google | ~2022-2024 | No advantage demonstrated |
| 2020 | Quantum advantage by 2025 | IBM Roadmap | 2025 | No advantage demonstrated |
| 2021 | Error-corrected systems by 2025 | IBM Roadmap | 2025 | Not achieved |
| 2023 | "Utility-scale" by 2025, advantage by 2028 | Revised IBM Roadmap | 2025/2028 | Utility-scale redefined; 2028 pending |
| 2024 | Fault-tolerant QC by 2029-2030 | Multiple companies | ~2030 | Pending |

The pattern is self-similar across decades: the target date moves forward by approximately 3-5 years every time the previous target is missed.

!!! mascot-tip "Fermi's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Fermi shares a tip">
    Here is a simple analytical tool. When you encounter a quantum computing
    prediction, look up what the same organization predicted 5 years earlier.
    If the previous prediction was missed and the new one simply pushes the
    target forward by 3-5 years, you are observing the pattern — not evidence
    of progress. Real progress would mean the target date moving *closer*,
    not perpetually forward.

#### Diagram: The Perpetual 3-5 Years Away Pattern

<iframe src="../../sims/prediction-pattern/main.html" width="100%" height="550px" scrolling="no"></iframe>

<details markdown="1">
<summary>The Perpetual 3-5 Years Away Pattern</summary>
Type: microsim
**sim-id:** prediction-pattern<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom Level:** Analyze (L4)
**Bloom Verb:** Examine, Distinguish

**Learning Objective:** Students will be able to examine the historical pattern of quantum computing predictions and distinguish between genuine progress and perpetual goalpost-moving.

**Instructional Rationale:** An interactive visualization of prediction-vs-reality enables students to see the repeating pattern across decades. Step-through interaction lets students process each prediction individually before seeing the aggregate pattern, building analytical skills through progressive disclosure rather than overwhelming them with all data at once.

**Canvas layout:**

- Main area (80%): Diagonal chart with "Year Prediction Made" on x-axis and "Predicted Year of Achievement" on y-axis
- Side panel (20%): Controls and summary statistics

**Visual elements:**

- A 45-degree diagonal line labeled "Prediction = Now" (represents predicting achievement in the current year)
- A second 45-degree line offset by 5 years labeled "Always 5 Years Away"
- Data points for each prediction (from the table above), plotted as (year_made, year_predicted)
- Color coding: Red dots for predictions that have been falsified, Yellow for pending
- Arrow from each falsified prediction to the revised prediction that replaced it
- A horizontal line at the top labeled "Actual Achievement of Quantum Advantage" that extends rightward with a question mark (never reached)

**Interactive controls:**

- Button: "Step Through Predictions" — adds one prediction at a time, chronologically, with annotation
- Button: "Show All" — displays all predictions simultaneously
- Button: "Reset"
- Toggle: "Show comparison" — overlay prediction patterns from other technologies (fusion energy, flying cars) for comparison
- Hover: over each data point to see the full prediction text, who made it, and the outcome

**Behavior:**

- Step-through mode: each click adds one prediction dot with a brief text annotation showing what was promised
- After all predictions are shown, the pattern becomes visually obvious — the dots cluster near the "always 5 years away" line
- Summary statistics update: "Average prediction horizon: X years. Predictions fulfilled: 0 out of N"

**Implementation:** p5.js. Background: aliceblue. Responsive to window resize.
</details>

### The Structural Reasons Behind the Pattern

The 3-5 years away pattern is not random — it reflects structural incentives in the quantum computing ecosystem:

1. **Funding cycles.** Government grants and corporate R&D budgets typically operate on 3-5 year planning horizons. Predicting that breakthroughs are imminent aligns with the timescale that funders want to hear. A researcher who says "this will take 30 years" does not get funded; a researcher who says "we're close" does.

2. **Career incentives.** Graduate students complete PhDs in 4-6 years. Postdocs last 2-3 years. Faculty tenure decisions occur at 6 years. At every stage, researchers need to demonstrate that their work is leading somewhere meaningful within the planning horizon of their career stage.

3. **Investor expectations.** Venture capital operates on 7-10 year fund cycles. Startups need to show a plausible path to commercialization within the fund's lifetime. "Quantum advantage by 2030" fits a fund raised in 2022; "quantum advantage by 2055" does not.

4. **Anchoring to incremental progress.** Each genuine advance — an additional qubit, a slightly lower error rate, a new algorithm — creates the *feeling* of acceleration, even when the remaining distance is enormous. Going from 50 qubits to 1,000 qubits feels like 95% of the way to a million-qubit machine, but the engineering challenges are nonlinear — the last 999,000 qubits are far harder than the first 1,000.

---

## 40 Years of Promises

Stepping back to view the full arc from 1981 to 2025, we can summarize quantum computing's trajectory as follows:

**1981-1993 (Theoretical Era):** Honest speculation. Researchers proposed ideas and acknowledged uncertainty. No commercial promises were made.

**1994-2001 (Algorithm and First Demos):** Excitement driven by Shor's algorithm. First physical demonstrations on 2-7 qubits. The first predictions of practical quantum computing within 10-20 years appeared.

**2007-2016 (D-Wave and Hype Emergence):** D-Wave's "commercial" quantum computer generated enormous press coverage. Major corporate purchases (Lockheed, Google) lent credibility. Independent tests showed no quantum speedup, but the narrative had taken hold. Predictions shortened to "5-10 years."

**2016-2020 (Cloud Access and Supremacy):** IBM put quantum systems on the cloud. Google claimed supremacy. Venture capital flooded the sector. Predictions compressed to "3-5 years."

**2021-2025 (SPAC Era and Reckoning):** Multiple quantum startups went public via SPACs at multi-billion-dollar valuations with near-zero revenue. Stock prices collapsed. IBM began redefining success from "quantum advantage" to "quantum utility." Zero commercial ROI was generated.

| Era | Duration | Qubit Count | Prediction Horizon | Commercial Revenue |
|-----|----------|-------------|--------------------|--------------------|
| Theoretical | 13 years | 0 | None | $0 |
| Algorithm/First Demos | 7 years | 2-7 | 10-20 years | $0 |
| D-Wave/Hype | 9 years | 16-2,000 (annealing) | 5-10 years | ~$0 |
| Cloud/Supremacy | 4 years | 5-53 (gate) | 3-5 years | ~$0 |
| SPAC/Reckoning | 5 years | 127-1,121 (gate) | 3-5 years | ~$0 |
| **Total** | **44 years** | **0 → 1,121** | **Perpetually receding** | **~$0 net advantage** |

!!! mascot-warning "Bias Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Fermi warns you">
    The most dangerous pattern in this history is the **normalization of
    missed predictions**. When every target is missed and replaced with a
    new one, the misses stop being newsworthy. Journalists report the new
    prediction without noting that the previous one failed. Investors
    evaluate the new roadmap without accounting for the track record of the
    old one. Each failed prediction should *lower* your credence in the
    next prediction from the same source — but cognitive biases (which we
    examine in Chapter 11) prevent most people from making this adjustment.

### Historical Parallels

The "perpetually N years away" pattern is not unique to quantum computing. Other technologies have exhibited remarkably similar trajectories:

| Technology | "N Years Away" Since | Current Status |
|-----------|---------------------|----------------|
| Controlled fusion energy | 1950s | Still "30 years away" after 70+ years |
| Flying cars | 1950s | Prototypes exist; no commercial adoption |
| General artificial intelligence (AGI) | 1950s | Debated; narrow AI succeeded, general remains elusive |
| Self-driving cars (Level 5) | 2010s | Geofenced robotaxis; full autonomy not achieved |
| Quantum computing (commercial advantage) | 1990s | Zero commercial advantage demonstrated |

The parallel with fusion energy is particularly instructive. Fusion has been "30 years away" for over 60 years. Like quantum computing, fusion faces genuine physics challenges (plasma confinement, materials degradation under neutron bombardment) that may not yield to incremental engineering. Like quantum computing, fusion research is sustained by government funding, career incentives, and the difficulty of admitting that sunk costs may not be recoverable.

#### Diagram: Hype Parallels Comparison

<iframe src="../../sims/hype-parallels/main.html" width="100%" height="550px" scrolling="no"></iframe>

<details markdown="1">
<summary>Technology Hype Parallels Comparison</summary>
Type: infographic
**sim-id:** hype-parallels<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom Level:** Analyze (L4)
**Bloom Verb:** Compare, Examine

**Learning Objective:** Students will be able to compare the prediction patterns of quantum computing with other technologies that have exhibited the "perpetually N years away" phenomenon, and identify the structural similarities that sustain these patterns.

**Instructional Rationale:** A multi-technology comparison infographic with parallel timelines enables students to see that the quantum computing pattern is not unique — it is a recognizable pattern in technology hype. This comparative framing builds critical thinking skills by showing that the pattern has identifiable structural causes, not just individual failures of prediction.

**Canvas layout:**

- Full width: Stacked horizontal timelines, one per technology

**Visual elements:**

- Five parallel horizontal timelines (Fusion, Flying Cars, AGI, Self-Driving Cars, Quantum Computing)
- Each timeline spans from the technology's inception to 2025
- On each timeline: markers for major predictions (diamonds) connected by arrows to their target dates
- Color coding: Red for failed predictions, Yellow for pending, Green for achieved (few if any)
- A "pattern similarity score" calculated for each pair of technologies

**Data:**

- Fusion: Predictions from 1955, 1970, 1985, 2000, 2015, 2025 — each targeting ~30 years ahead
- Flying Cars: Predictions from 1955, 1985, 2000, 2017 — each targeting ~10-20 years ahead
- AGI: Predictions from 1956, 1967, 1985, 2005, 2015, 2023 — each targeting ~10-20 years ahead
- Self-Driving (L5): Predictions from 2012, 2015, 2018, 2021, 2024 — each targeting ~3-5 years ahead
- Quantum Computing: Predictions from 1995, 2001, 2007, 2013, 2019, 2023 — each targeting ~3-10 years ahead

**Interactive features:**

- Hover over any prediction marker to see: who made the prediction, exact wording, target date, actual outcome
- Click a technology name to highlight it and dim others
- Toggle: "Show structural factors" — overlay icons showing which structural factors (funding cycles, career incentives, investor expectations, media amplification) are present for each technology

**Implementation:** p5.js. Background: aliceblue. Responsive to window resize.
</details>

---

## Key Takeaways

This chapter traced the complete history of quantum computing from theoretical conjecture to multi-billion-dollar industry, documenting the persistent gap between promises and results:

1. **Feynman's 1981 idea** was a narrow proposal about simulating quantum systems — not a prediction that quantum computers would replace classical machines for general computation.

2. **Shor's 1994 algorithm** redirected the field from physics simulation toward cryptanalysis, driven by security funding rather than scientific logic. This set the template for funding-driven narrative shifts.

3. **The first lab demonstrations (1998-2001)** proved basic quantum operations were possible on 2-7 qubits. The largest practical factoring achievement — the number 15 — has not been significantly surpassed in 24 years.

4. **The D-Wave era (2007-2016)** introduced "commercial" quantum computing through quantum annealing, but independent benchmarks consistently showed no speedup over classical methods. High-profile purchases (Lockheed, Google) validated the narrative without validating the technology.

5. **Cloud access and supremacy claims (2016-2019)** made quantum computing visible to the public but demonstrated capability only on contrived benchmarks with no commercial value.

6. **The SPAC era (2021-2023)** saw quantum companies go public at multi-billion-dollar valuations with near-zero revenue. IBM's roadmap revisions and language shifts ("advantage" to "utility") signal that original targets were missed.

7. **Zero commercial ROI by 2025** — over $100 billion invested, no positive return from quantum computing products or services. This is not a matter of debate; it is an empirical fact.

8. **The "3-5 years away" pattern** has persisted for over 40 years. At every milestone, proponents predicted commercial viability was imminent. Every prediction was wrong. The structural incentives (funding cycles, careers, investor expectations) that produce this pattern remain firmly in place.

9. **Historical parallels** with fusion energy, flying cars, AGI, and self-driving cars show that the "perpetually N years away" pattern is a recognized phenomenon in technology forecasting, not unique to quantum computing.

!!! mascot-celebration "Excellent Investigative Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Fermi celebrates">
    You now have the complete historical record in front of you — 44 years of
    promises, predictions, and missed deadlines. This timeline is your most
    powerful analytical tool. The next time someone tells you quantum computing
    is "just around the corner," you can ask: What did they predict five years
    ago? Was that prediction met? If not, why should we believe the current one?
    That is the skeptical inquiry method in action. Outstanding work, fellow
    investigator!

---

## Review Questions

??? question "1. What was Feynman's original 1981 proposal, and how does it differ from the way quantum computing is marketed today?"
    Feynman proposed using quantum mechanical systems to simulate other quantum
    systems — a specific, narrow application motivated by the difficulty of
    simulating quantum mechanics on classical computers. Today, quantum computing
    is marketed as a transformative technology that will revolutionize drug
    discovery, optimization, AI, finance, and cryptanalysis. The gap between
    Feynman's modest proposal and the current marketing narrative illustrates
    how funding incentives and hype dynamics can inflate a research direction
    into an investment bubble.

??? question "2. Why is the D-Wave sale to Lockheed Martin (2011) significant in the history of quantum computing hype?"
    The $10 million sale was celebrated as the first commercial sale of a
    quantum computer, lending enormous credibility to the quantum computing
    industry. However, Lockheed purchased it for research, not production
    use. Independent benchmarks showed D-Wave provided no speedup over
    classical software running on a laptop. The purchase was driven partly
    by FOMO — the fear of being left behind in a potentially transformative
    technology. This established a pattern where corporate purchases
    validated the narrative without validating the technology.

??? question "3. Explain the 'moving goalposts' pattern using IBM's quantum roadmap as an example."
    IBM's 2020 roadmap promised quantum advantage by 2025 and error-corrected
    systems by 2025. When these targets proved unreachable, IBM pivoted to
    "utility-scale quantum computing" — a vaguer term that redefines success.
    The 1,121-qubit Condor chip (2023) was quietly shelved in favor of a
    modular approach. Each revision pushes targets forward by 3-5 years while
    changing the vocabulary to obscure the fact that original promises were
    not met. This pattern — miss the target, redefine success, set a new
    target — is the operational mechanism of the "perpetually 3-5 years away"
    phenomenon.

??? question "4. How do funding cycles and career incentives structurally produce overly optimistic predictions?"
    Government grants operate on 3-5 year cycles; VC funds on 7-10 year
    cycles; faculty tenure on 6-year clocks; PhD programs on 4-6 year
    timelines. At every stage, researchers and companies must demonstrate
    plausible progress within their planning horizon. Saying "this will take
    30 years" does not get funded. Saying "we're close, 3-5 years away"
    aligns with every stakeholder's planning cycle. The structural incentives
    systematically compress predictions into the 3-5 year range regardless
    of the actual physics timeline.

??? question "5. Name two historical parallels to quantum computing's 'perpetually N years away' pattern and explain the structural similarity."
    Fusion energy has been "30 years away" for over 60 years. Like quantum
    computing, it faces genuine physics barriers (plasma confinement) that
    may not yield to incremental engineering, and it is sustained by
    government funding and career incentives. Self-driving cars (Level 5)
    have been "3-5 years away" since ~2012. Like quantum computing, each
    genuine incremental advance (better sensors, more training data) creates
    the feeling of imminent success while the hardest remaining problems
    (edge cases, generalization) may be fundamentally different from the
    solved problems. Both technologies exhibit the same structural pattern:
    funding-driven optimism, incremental progress mistaken for exponential
    progress, and career incentives that suppress honest timeline estimates.
