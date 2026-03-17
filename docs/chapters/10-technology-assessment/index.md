---
title: Technology Assessment Frameworks
description: Systematic frameworks for evaluating technology maturity including TRL, adoption curves, Gartner Hype Cycle, forecasting methods, and technology bubble dynamics applied to quantum computing
generated_by: claude skill chapter-content-generator
date: 2026-03-17 00:16:25
version: 0.05
---

# Technology Assessment Frameworks

## Summary

This chapter introduces systematic frameworks for evaluating technology maturity and predicting commercial viability. We cover Technology Readiness Levels (TRLs) and show that quantum computing remains stuck at TRL 2-3. We examine technology adoption curves, the "crossing the chasm" concept, the Gartner Hype Cycle (including the peak of inflated expectations and trough of disillusionment), technology forecasting methods, base rates of technology failure, the gap between science and engineering, and the dynamics of technology bubbles. Students will be equipped with rigorous tools for assessing any emerging technology's readiness for market.

## Concepts Covered

This chapter covers the following 14 concepts from the learning graph:

1. Technology Readiness Levels
2. TRL Scale Explained
3. QC Stuck at TRL 2-3
4. Technology Adoption Curves
5. Crossing the Chasm
6. Gartner Hype Cycle
7. Peak of Inflated Expectations
8. Trough of Disillusionment
9. Technology Forecasting
10. Base Rate of Tech Failure
11. Prediction Track Records
12. Science vs Engineering Gap
13. Dot-Com Bubble Parallel
14. Technology Bubble Dynamics

## Prerequisites

This chapter builds on concepts from:

- [Chapter 2: Quantum Algorithms and Their Real-World Limits](../02-quantum-algorithms-and-limits/index.md)
- [Chapter 5: The Physics Barriers and Hardware Platforms](../05-physics-barriers-and-hardware/index.md)

---

!!! mascot-welcome "Fermi Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Fermi welcomes you">
    Welcome, fellow investigators! So far we've examined what quantum computing promises, what it actually delivers, and how the investment numbers look. But how do we *systematically* assess whether a technology is ready for market — or whether it's still a laboratory curiosity dressed up in a business plan? This chapter arms you with the professional frameworks that technology analysts, defense procurement officers, and venture capitalists use to separate hype from readiness. But does the math check out? Let's find out!

## Learning Objectives

After completing this chapter, you will be able to:

- Explain the Technology Readiness Level (TRL) scale and assess where quantum computing falls on it
- Apply technology adoption curve models and the "crossing the chasm" framework to quantum computing
- Map quantum computing onto the Gartner Hype Cycle and identify its current phase
- Evaluate technology forecasts using base rate reasoning and historical prediction track records
- Distinguish between science barriers and engineering barriers and explain why this distinction matters for investment timelines
- Analyze the structural parallels between quantum computing hype and historical technology bubbles

## Part I: Technology Readiness Levels

### The TRL Scale

Technology Readiness Levels were developed by NASA in the 1970s to provide a standardized vocabulary for assessing how close a technology is to operational deployment. The scale runs from TRL 1 (basic principles observed) to TRL 9 (proven through successful mission operations). The framework has since been adopted by the Department of Defense, the European Space Agency, and increasingly by venture capital firms evaluating deep-tech investments.

The nine levels divide neatly into three phases:

| Phase | TRL Range | Description | Key Question |
|---|---|---|---|
| Research | TRL 1-3 | Basic principles through proof of concept | "Does the physics work?" |
| Development | TRL 4-6 | Lab validation through prototype demonstration | "Can we build it?" |
| Deployment | TRL 7-9 | System prototype through operational deployment | "Does it work in the real world?" |

### The Full TRL Scale

Each level has specific criteria that must be met before advancing:

| TRL | Name | Criteria | Example (Classical Computing) |
|---|---|---|---|
| 1 | Basic principles observed | Scientific literature describes the phenomenon | Shannon's information theory (1948) |
| 2 | Technology concept formulated | Practical application is proposed based on principles | Turing's universal machine concept |
| 3 | Experimental proof of concept | Lab experiments validate key functions | First transistor at Bell Labs (1947) |
| 4 | Technology validated in lab | Component integration demonstrated in lab | First integrated circuit (1958) |
| 5 | Technology validated in relevant environment | Component tested under realistic conditions | Early microprocessors tested in systems |
| 6 | Technology demonstrated in relevant environment | Prototype system demonstrated | Intel 4004 in calculator (1971) |
| 7 | System prototype demonstrated in operational environment | Near-final system tested in real use | IBM PC prototype tested by users (1981) |
| 8 | System complete and qualified | Final system passes all testing | IBM PC launched commercially (1981) |
| 9 | Actual system proven in operational environment | System deployed and performing in real conditions | PCs in widespread business use (1985+) |

The progression from TRL 1 to TRL 9 is not a smooth ramp. The most dangerous transitions are between phases — from research to development (TRL 3→4) and from development to deployment (TRL 6→7). These transitions are where most technologies fail, because they require fundamentally different capabilities: moving from "it works in the lab" to "it works at scale" and from "the prototype functions" to "it's reliable enough for customers."

### Quantum Computing at TRL 2-3

Where does quantum computing sit on the TRL scale? The honest assessment places it at TRL 2-3, straddling the boundary between "technology concept formulated" and "experimental proof of concept." This assessment surprises many people, given the billions invested and the media coverage, but it is supported by the evidence:

**Evidence for TRL 2 (Technology concept formulated):**

- The theoretical basis for quantum computation is well-established (Shor's algorithm, Grover's algorithm, the circuit model)
- Practical applications have been proposed (cryptography, molecular simulation, optimization)
- The concept of fault-tolerant quantum computing has been formulated mathematically

**Evidence for TRL 3 (Experimental proof of concept):**

- Small-scale quantum processors (50-1,000+ qubits) have been built and operated
- Individual quantum gates have been demonstrated with improving fidelity
- Quantum error correction has been demonstrated in principle on small systems

**Evidence AGAINST TRL 4 (Technology validated in lab):**

- No quantum computer has demonstrated commercial advantage on any real-world problem
- Error rates remain too high for fault-tolerant computation on useful problem sizes
- The 1,000:1 physical-to-logical qubit overhead has not been reduced to practical levels
- No integrated system combining sufficient qubits, connectivity, coherence, and error correction has been demonstrated

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    The gap between TRL 3 and TRL 4 is where quantum computing has been stuck for over a decade. Building individual components that work in isolation (individual high-fidelity gates, small error-corrected systems) is TRL 3. Integrating those components into a system that works together as intended — that's TRL 4. And quantum computing hasn't crossed that threshold, despite what the marketing departments suggest. When a company announces a 1,000-qubit processor, ask: "What TRL is the *system*?"

The TRL assessment has direct investment implications. Technologies at TRL 2-3 are appropriate for government research funding and patient academic exploration. They are generally *not* appropriate for venture capital investment with a 7-10 year return expectation, because the historical median time from TRL 3 to TRL 9 for complex physics-based technologies is 15-30 years — with no guarantee of arriving at all.

| TRL Assessment | Appropriate Funding | Typical Timeline to Market | Risk Level |
|---|---|---|---|
| TRL 1-3 (Research) | Government grants, university R&D | 15-30+ years | Extreme |
| TRL 4-6 (Development) | Strategic corporate R&D, patient VC | 5-15 years | Very High |
| TRL 7-9 (Deployment) | Growth equity, traditional VC, commercial lending | 1-5 years | Moderate-High |

#### Diagram: TRL Assessment Tool

<iframe src="../../sims/trl-assessment-tool/main.html" width="100%" height="600" scrolling="no"></iframe>

<details markdown="1">
<summary>Technology Readiness Level Assessment Tool</summary>
Type: microsim
**sim-id:** trl-assessment-tool<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning Objective:** Apply the TRL framework to assess quantum computing's readiness by evaluating evidence against each level's criteria and comparing with historical technology trajectories (Bloom's Level 3: Apply — use, execute, demonstrate).

**Instructional Rationale:** An interactive checklist with visual thermometer is appropriate because the Apply/use objective requires learners to actively evaluate evidence against criteria rather than passively reading an assessment. Checking boxes forces deliberate engagement with each criterion.

**Canvas Layout:**
- Left panel (60%): Scrollable checklist of TRL criteria (9 levels, 3-4 checkboxes each)
- Right panel (40%): Vertical thermometer showing assessed TRL level, plus comparison markers for other technologies

**Interactive Controls:**
- Checkboxes for each TRL criterion (pre-populated for quantum computing, editable)
- Dropdown: Select technology to assess (Quantum Computing, Classical AI, Quantum Sensors, Fusion Energy — each with pre-filled data)
- "Reset" button to clear all checkboxes
- Toggle: "Show historical comparison" — adds markers for classical computing (1950-1985 progression)

**Visual Elements:**
- Vertical thermometer/gauge colored in gradient: red (TRL 1-3), yellow (TRL 4-6), green (TRL 7-9)
- Current TRL marker: large arrow pointing to assessed level
- Comparison markers: smaller arrows for selected comparison technologies
- Phase labels along thermometer: "Research," "Development," "Deployment"
- Background: aliceblue

**Behavior:**
- TRL level auto-calculates as the highest level where ALL criteria are checked
- Thermometer animates smoothly when level changes
- Hovering over a criterion shows a tooltip with the evidence for/against
- For quantum computing preset: TRL 1-3 criteria checked, TRL 4+ unchecked
- For classical AI preset: TRL 1-8 checked, demonstrating contrast

**Data Visibility Requirements:**
- Each criterion shows a brief evidence summary when hovered
- Summary panel below thermometer: "Assessed TRL: X — [Phase Name]"
- "Time to market estimate: Y years (based on historical median for this TRL)"

**Responsive Design:** Panels stack vertically on narrow screens; thermometer switches to horizontal.

Implementation: p5.js with DOM checkboxes and canvas thermometer rendering
</details>

## Part II: Technology Adoption and Hype

### Technology Adoption Curves

The technology adoption curve, originally described by Everett Rogers in his 1962 book *Diffusion of Innovations*, models how new technologies spread through a population. The curve follows a bell-shaped distribution of adopter types:

1. **Innovators** (2.5%): Technology enthusiasts who adopt for the sake of novelty
2. **Early Adopters** (13.5%): Visionaries who see strategic advantage in new technology
3. **Early Majority** (34%): Pragmatists who adopt once the technology is proven
4. **Late Majority** (34%): Conservatives who adopt only when the technology becomes standard
5. **Laggards** (16%): Skeptics who adopt only when forced by circumstance

The distribution is not merely descriptive — it reflects fundamentally different motivations. Innovators and early adopters are driven by potential; the early and late majority are driven by evidence of results. This distinction is critical for understanding where quantum computing sits on the adoption curve.

### Crossing the Chasm

Geoffrey Moore's 1991 book *Crossing the Chasm* identified the most dangerous gap in the adoption curve: the transition from early adopters to the early majority. Moore argued that many technologies succeed with visionaries (who are willing to tolerate incomplete products) but fail to achieve mainstream adoption (where pragmatic buyers demand proven, complete solutions).

The "chasm" exists because early adopters and the early majority have fundamentally incompatible requirements:

| Characteristic | Early Adopters (Visionaries) | Early Majority (Pragmatists) |
|---|---|---|
| Motivation | Strategic advantage | Operational efficiency |
| Risk tolerance | High — willing to be guinea pigs | Low — want proven solutions |
| Reference customers | Don't need them | Require them |
| Product completeness | Tolerate gaps | Demand complete solution |
| Support expectations | Will work around problems | Expect professional support |
| Purchase decision | Individual champion | Committee/consensus |

Quantum computing is currently serving innovators and early adopters — research labs, government agencies, and corporate R&D teams that experiment with the technology as an exploration investment, not as a production tool. To cross the chasm, quantum computing would need to demonstrate a "whole product" that a pragmatic buyer could deploy to solve a real business problem better and cheaper than existing solutions. No such product exists.

!!! mascot-warning "Bias Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Fermi warns you">
    Quantum computing companies often conflate "customer count" with "market adoption." Having 100 organizations running experiments on your cloud platform is not the same as having 100 organizations deploying quantum computing in production. The difference is the chasm — and quantum computing hasn't even reached its edge yet, let alone begun to cross it.

### The Gartner Hype Cycle

The Gartner Hype Cycle, introduced in 1995, provides a complementary framework to the adoption curve by modeling the *expectations* surrounding a technology rather than its actual adoption. The cycle describes five phases:

1. **Innovation Trigger:** A breakthrough or announcement generates early interest
2. **Peak of Inflated Expectations:** Media coverage and vendor enthusiasm create unrealistic expectations; investments pour in
3. **Trough of Disillusionment:** Reality fails to meet expectations; negative press appears; weak players fail
4. **Slope of Enlightenment:** Realistic understanding emerges; second-generation products improve
5. **Plateau of Productivity:** The technology reaches mainstream adoption at a level consistent with its actual capabilities

| Phase | Characteristics | QC Evidence |
|---|---|---|
| Innovation Trigger | Breakthrough announcement | Feynman (1981), Shor (1994), Google Sycamore (2019) |
| Peak of Inflated Expectations | Massive investment, bold claims | 2019-2022: $B+ funding rounds, "quantum advantage by 2025" claims |
| Trough of Disillusionment | Reality sets in, failures emerge | 2023-2025: Stock declines, missed roadmaps, "utility-scale" pivot |
| Slope of Enlightenment | Realistic applications emerge | Not yet reached |
| Plateau of Productivity | Mainstream deployment | Not yet reached |

### Peak of Inflated Expectations

Quantum computing reached its peak of inflated expectations between 2019 and 2022. The peak was characterized by:

- Google's 2019 "quantum supremacy" claim, which generated global media coverage despite solving no commercially relevant problem
- Venture capital investment exceeding $3 billion per year
- McKinsey, BCG, and other consulting firms publishing reports projecting $450 billion to $1.3 trillion in quantum computing market value by 2035
- Multiple SPAC mergers taking pre-revenue quantum companies public at billion-dollar valuations
- National governments launching multi-billion-dollar quantum initiatives framed as existential competitive necessities

The peak was sustained by the reinforcing feedback loops we will examine in Chapter 11: media amplification, government funding pressure, and career incentive structures that rewarded optimism over accuracy.

### Trough of Disillusionment

By 2023-2025, quantum computing entered the trough of disillusionment. The indicators are clear:

- **Stock price declines:** IonQ, Rigetti, and D-Wave all lost 60-80% of their peak valuations
- **Narrative pivots:** IBM shifted from "quantum advantage" to "utility-scale quantum" — a goalpost move that lowered the bar from "better than classical" to "useful for something"
- **Roadmap revisions:** Multiple companies quietly extended their timelines for fault-tolerant computing
- **Consolidation signals:** Smaller startups began running out of cash; acqui-hire discussions increased
- **Media tone shift:** Major outlets published skeptical analyses that would have been unthinkable during the peak

The trough is an uncomfortable but necessary phase. It represents the market correcting its expectations toward reality. The question is whether quantum computing will eventually reach the slope of enlightenment — where realistic applications emerge — or whether it will remain in the trough indefinitely because the physics barriers prevent commercially viable applications from materializing at all.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    The Gartner Hype Cycle assumes every technology eventually reaches the plateau of productivity — just at a lower level than the peak promised. But this assumption is not guaranteed. Some technologies never leave the trough: cold fusion, flying cars, nanotechnology self-replicators. The question for quantum computing is not "when will it reach the plateau?" but "will it reach the plateau at all?" That depends on whether the physics barriers are engineering problems (solvable with time and money) or fundamental constraints (permanent).

## Part III: Forecasting and Base Rates

### Technology Forecasting

Technology forecasting attempts to predict when a technology will reach specific capability milestones or market adoption levels. The methods range from expert surveys (Delphi method) to trend extrapolation to scenario analysis. All methods share a common weakness: they are systematically overoptimistic about technologies in the research phase (TRL 1-3) and systematically underestimate the difficulty of the transition from laboratory to market.

The major forecasting approaches and their track records:

| Method | Description | Strengths | Weaknesses |
|---|---|---|---|
| Expert survey (Delphi) | Iterative expert consensus | Captures domain knowledge | Experts share same biases; anchoring effects |
| Trend extrapolation | Project current improvement rates forward | Works for incremental progress | Fails at phase transitions; assumes no barriers |
| Analogy-based | Compare to similar historical technologies | Provides grounding | Difficult to select correct analogy |
| Scenario analysis | Define multiple plausible futures | Avoids single-point predictions | Scenarios can be chosen to confirm biases |
| Market-based | Prediction markets, option pricing | Aggregates diverse information | Thin markets for niche technologies |

### Base Rate of Technology Failure

The single most important — and most neglected — tool in technology forecasting is base rate reasoning. The base rate is the historical frequency at which a given type of event occurs. For technology investments, the relevant base rate is: *of all technologies at a comparable stage (TRL 2-3, requiring fundamental physics breakthroughs), what fraction eventually achieved commercial viability?*

The answer is sobering. Of technologies that require multiple simultaneous physics breakthroughs to become commercially viable:

- **Fusion energy:** Proposed in the 1950s. 70+ years of research and $50B+ invested. Commercial fusion power remains at least a decade away. TRL ~4-5.
- **Room-temperature superconductors:** Periodically announced, never replicated. TRL 1-2.
- **Quantum gravity sensors (large-scale):** Theoretical proposals exist. TRL 2.
- **Nanotechnology self-replicators:** Proposed by Drexler in 1986. Never demonstrated. TRL 1.
- **Cold fusion:** Announced in 1989, never replicated. TRL 0-1.
- **Flying cars:** Repeatedly proposed since the 1950s. Prototypes exist but no commercial deployment at scale. TRL 4-5 (for the vehicle), TRL 2 (for the air traffic infrastructure).

The base rate for technologies requiring fundamental physics breakthroughs achieving commercial viability within 30 years of initial concept is approximately **5-15%**. For technologies requiring *multiple simultaneous* breakthroughs (like quantum computing), the rate drops below 5%.

This base rate should be the starting point for any quantum computing forecast. Any prediction that quantum computing will achieve commercial viability with high probability should explain why this case is different from the base rate — and the explanation should be rooted in physics, not analogy or optimism.

### Prediction Track Records

The track record of predictions about quantum computing specifically is dismal. A systematic review of public predictions reveals a consistent pattern:

| Year Made | Prediction | Outcome |
|---|---|---|
| 2000 | "Practical quantum computers within 10 years" | No practical quantum computer by 2010 |
| 2007 | D-Wave: "Commercial quantum computer available now" | Quantum annealer with no demonstrated speedup |
| 2012 | "Quantum advantage demonstrated within 5 years" | No commercially relevant advantage by 2017 |
| 2017 | "Quantum supremacy within 2 years" | Achieved on contrived benchmark (2019), no commercial relevance |
| 2019 | Google: "Quantum computers useful in 5-10 years" | No useful commercial application by 2025 |
| 2020 | IBM: "Quantum advantage by 2025" | Redefined to "utility-scale" (lower bar); still not achieved |
| 2021 | McKinsey: "$450-850B value by 2035" | On track to miss by orders of magnitude |
| 2023 | "Fault-tolerant QC within 10 years" | No demonstrated path; requires multiple breakthroughs |

Every prediction shares the same structure: an optimistic timeline based on extrapolating current progress rates, with no accounting for the phase transitions (TRL 3→4, TRL 6→7) where technologies typically stall or fail. The prediction track record itself constitutes strong evidence that base rates, not expert optimism, should anchor forecasts.

#### Diagram: Prediction Track Record Timeline

<iframe src="../../sims/qc-prediction-tracker/main.html" width="100%" height="600" scrolling="no"></iframe>

<details markdown="1">
<summary>Quantum Computing Prediction Track Record Timeline</summary>
Type: timeline
**sim-id:** qc-prediction-tracker<br/>
**Library:** vis-timeline<br/>
**Status:** Specified

**Learning Objective:** Evaluate the reliability of quantum computing predictions by comparing stated timelines against actual outcomes, identifying the systematic pattern of overoptimism (Bloom's Level 5: Evaluate — assess, judge, critique).

**Instructional Rationale:** An interactive timeline with prediction-outcome pairs is appropriate because the Evaluate/assess objective requires learners to visually compare predictions against results across multiple instances. The dual-track layout (prediction on top, outcome on bottom) makes the systematic overoptimism immediately visible.

**Timeline Layout:**
- Horizontal timeline spanning 1995-2035
- Upper track (blue): Predictions (when made and what was predicted)
- Lower track (red/green): Outcomes (what actually happened by the predicted date)
- Connecting lines between prediction and outcome for the same claim

**Data Points:**

Predictions (upper track, blue items):
- 2000: "Practical QC in 10 years" → Arrow to 2010
- 2007: "Commercial QC available" → Arrow to 2007
- 2012: "Quantum advantage in 5 years" → Arrow to 2017
- 2017: "Quantum supremacy in 2 years" → Arrow to 2019
- 2019: "Useful QC in 5-10 years" → Arrow to 2024-2029
- 2020: "Quantum advantage by 2025" → Arrow to 2025
- 2021: "$450-850B market by 2035" → Arrow to 2035
- 2023: "Fault-tolerant QC in 10 years" → Arrow to 2033

Outcomes (lower track):
- 2010: "No practical QC" (red)
- 2007: "Quantum annealer, no speedup" (red)
- 2017: "No advantage on real problems" (red)
- 2019: "Supremacy on contrived benchmark only" (yellow)
- 2025: "No useful commercial application" (red)
- Future dates: "Pending" (gray)

**Interactive Features:**
- Hover over any item to see full details (who predicted, exact quote, what happened)
- Zoom and pan along the timeline
- Toggle: "Show only missed predictions" / "Show all"
- Click a prediction to highlight its connected outcome
- Filter by source: Academia, Company, Consulting firm, Government

**Visual Style:**
- Blue items for predictions, red for missed outcomes, yellow for partially met, green for met
- Dashed lines connecting prediction to outcome
- Zoom controls in corner
- Background: aliceblue

**Responsive Design:** Timeline scrolls horizontally; items stack vertically on narrow screens.

Implementation: vis-timeline with custom items and groups
</details>

## Part IV: The Science-Engineering Gap and Bubble Dynamics

### The Science vs. Engineering Gap

One of the most consequential distinctions in technology assessment is between a *science barrier* and an *engineering barrier*. This distinction determines whether money and time can solve a problem — or whether fundamental limits prevent a solution.

**Engineering barriers** are problems where the underlying science is well-understood and the challenge is building reliable systems at scale. Examples include:

- Manufacturing transistors at ever-smaller feature sizes (Moore's Law)
- Building larger and more efficient solar panels
- Developing better batteries with higher energy density (within known chemistry)

Engineering barriers yield to investment: more money, more engineers, more time. Progress is typically steady and predictable.

**Science barriers** are problems where the underlying physics or mathematics may prevent a solution, regardless of the resources applied. Examples include:

- Faster-than-light travel (prohibited by special relativity)
- Perpetual motion machines (prohibited by thermodynamics)
- Perfect cloning of an unknown quantum state (prohibited by the no-cloning theorem)

Science barriers do not yield to investment. No amount of money makes the impossible possible.

Quantum computing's challenges fall into a gray zone that makes honest assessment difficult:

| Challenge | Science or Engineering? | Why It Matters |
|---|---|---|
| Reducing gate error rates | Mostly engineering (with physics floor) | Steady improvement possible, but a fundamental error floor exists |
| Scaling to millions of qubits | Engineering, if error rates drop | Depends on solving the error rate problem first |
| Maintaining coherence at scale | Science barrier | Decoherence is a fundamental physics phenomenon, not a manufacturing defect |
| Achieving fault tolerance | Science-dependent | Requires error rates below a threshold that may be physics-limited |
| Room-temperature operation | Science barrier (for superconducting) | Superconducting qubits require near-absolute-zero temperatures by physics, not by design |
| All-to-all connectivity | Engineering, with physics constraints | Physical layout imposes connectivity limits |

The critical question is whether the error rate threshold for fault tolerance lies above or below the physics floor for qubit error rates. If the threshold is achievable — if it's an engineering problem — then quantum computing may eventually work, given enough time and investment. If the threshold is below the physics floor — if decoherence fundamentally limits error rates above the threshold — then fault-tolerant quantum computing is impossible regardless of investment.

This is the question that honest proponents acknowledge and that marketing materials never mention.

!!! mascot-tip "Fermi's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Fermi shares a tip">
    When evaluating any deep-tech investment, always ask: "Is the remaining barrier a science problem or an engineering problem?" If the answer is "engineering," then timeline and cost estimates are meaningful. If the answer is "science," then *no one can give you a reliable timeline* — because you can't schedule a breakthrough. And if the person pitching the investment can't clearly articulate which type of barrier remains, that itself is a red flag.

### Technology Bubble Dynamics

Technology bubbles follow a recognizable pattern that has repeated across multiple sectors. Understanding this pattern helps us assess whether quantum computing investment exhibits bubble characteristics.

The canonical stages of a technology bubble:

1. **Displacement:** A genuinely new technology or discovery creates legitimate excitement (QC: Shor's algorithm, quantum supremacy demonstrations)
2. **Boom:** Investment flows in, driven by early believers and FOMO; prices rise rapidly (QC: 2019-2022 VC frenzy, SPAC mergers)
3. **Euphoria:** Valuations detach from fundamentals; skeptics are dismissed as "not understanding the potential" (QC: Billion-dollar valuations for pre-revenue companies; consulting reports projecting trillion-dollar markets)
4. **Profit-taking:** Sophisticated investors begin to exit; insiders sell (QC: Executive stock sales at QC companies; some VCs marking down positions)
5. **Panic:** Reality reasserts; prices crash; weak companies fail (QC: Stock declines of 60-80%; narrative pivots; early signs of consolidation)

### The Dot-Com Bubble Parallel

The dot-com bubble of 1995-2001 provides the closest structural parallel to quantum computing hype. The similarities are instructive:

| Feature | Dot-Com Bubble (1995-2001) | QC Bubble (2018-2025) |
|---|---|---|
| Genuine innovation | The internet was real and transformative | Quantum mechanics is real; small quantum devices work |
| Timeline confusion | "The internet will change everything" → true, but over 20 years, not 2 | "QC will change everything" → possibly, but over 30+ years, not 5 |
| Valuation metric | "Eyeballs" replaced revenue | "Qubits" replaced revenue |
| Dismissal of skeptics | "You just don't understand the internet" | "You just don't understand quantum mechanics" |
| IPO/SPAC mechanism | Rush to go public pre-revenue | SPAC mergers for pre-revenue QC companies |
| Retail investor exposure | Day traders bought dot-com stocks | Retail investors bought QC SPACs |
| Consulting firm projections | IDC, Forrester projected $3-7T internet economy | McKinsey, BCG project $450B-$1.3T QC market |
| Eventual outcome | Internet succeeded — but 90%+ of companies failed | QC may find niche applications — but 90%+ of companies will likely fail |

The dot-com parallel carries an important lesson: the underlying technology was genuine and eventually transformative, but the vast majority of companies that tried to capitalize on it failed. Amazon survived; Pets.com did not. The internet succeeded; most internet companies did not.

The analogous question for quantum computing is whether the technology itself is more like the internet (genuinely transformative, eventually) or more like cold fusion (never commercially viable). If it's the former, a few companies may survive — but investors must identify them, and the odds of picking the "Amazon of quantum computing" from a field of "Pets.coms" are slim. If it's the latter, there are no survivors.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    The dot-com parallel is the quantum computing industry's favorite analogy: "Sure, there's a bubble, but the underlying technology is real — just like the internet." This analogy is comforting but misleading. The internet at its equivalent stage (mid-1990s) already had millions of paying users, demonstrated product-market fit (email, web browsing, e-commerce), and worked reliably. Quantum computing in 2025 has zero paying commercial customers, no demonstrated product-market fit, and doesn't work reliably enough for production use. The better analogy might be fusion energy — also real physics, also decades of investment, also "just 10 years away" for 70 years.

### Anatomy of a Technology Bubble

Technology bubbles share structural dynamics that can be modeled systematically. The key variables are:

- **Narrative strength:** How compelling is the story? (QC: "Quantum computers will solve unsolvable problems" — extremely compelling)
- **Information asymmetry:** How well do investors understand the technology? (QC: Very poorly — quantum mechanics is genuinely difficult)
- **Verification difficulty:** How hard is it to confirm or deny claims? (QC: Extremely hard — requires PhD-level physics knowledge)
- **Herd behavior strength:** How strong is the FOMO? (QC: Very strong — geopolitical framing creates urgency)
- **Exit liquidity:** How easily can investors sell? (QC: Poor for private investments; improving via SPACs but declining as prices drop)

These factors combine to create a self-reinforcing cycle: a compelling narrative attracts investors who don't understand the technology, whose investment validates the narrative, which attracts more investors. The cycle breaks only when reality becomes impossible to ignore — typically when companies run out of cash and close, or when a critical mass of credible voices publicly articulates the problems.

#### Diagram: Technology Bubble Dynamics Model

<iframe src="../../sims/tech-bubble-dynamics/main.html" width="100%" height="650" scrolling="no"></iframe>

<details markdown="1">
<summary>Technology Bubble Dynamics Causal Model</summary>
Type: diagram
**sim-id:** tech-bubble-dynamics<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Learning Objective:** Analyze the causal relationships driving technology bubble formation and collapse, identifying reinforcing loops, balancing loops, and leverage points (Bloom's Level 4: Analyze — examine, deconstruct, attribute).

**Instructional Rationale:** A causal loop diagram as an interactive network graph is appropriate because the Analyze/examine objective requires learners to trace chains of causation through a complex system. Interactive node highlighting reveals which factors amplify the bubble and which could slow it.

**Graph Structure:**

Nodes (variables):
1. "Compelling Narrative" (blue circle)
2. "Media Coverage" (blue circle)
3. "Investor Interest" (green circle)
4. "Capital Inflow" (green circle)
5. "Company Valuations" (green circle)
6. "FOMO Pressure" (orange circle)
7. "Information Asymmetry" (red circle)
8. "Verification Difficulty" (red circle)
9. "Skeptic Voices" (purple circle)
10. "Actual Technical Progress" (gray circle)
11. "Cash Burn" (red circle)
12. "Company Failures" (red circle)
13. "Reality Gap" (red circle)
14. "Market Correction" (orange circle)

Edges (causal links, with polarity + or -):
- Compelling Narrative → (+) Media Coverage
- Media Coverage → (+) Investor Interest
- Investor Interest → (+) Capital Inflow
- Capital Inflow → (+) Company Valuations
- Company Valuations → (+) FOMO Pressure
- FOMO Pressure → (+) Investor Interest (reinforcing loop R1)
- Information Asymmetry → (+) Investor Interest (investors don't understand risk)
- Verification Difficulty → (+) Information Asymmetry
- Skeptic Voices → (-) Investor Interest (balancing loop B1)
- Information Asymmetry → (-) Skeptic Voices influence (skeptics are dismissed)
- Capital Inflow → (+) Cash Burn
- Cash Burn → (+) Company Failures (delayed)
- Company Failures → (+) Market Correction
- Market Correction → (-) Company Valuations (balancing loop B2)
- Actual Technical Progress → (+/-) Reality Gap (widens if progress is slow)
- Reality Gap → (+) Skeptic Voices
- Reality Gap → (+) Market Correction

**Interactive Features:**
- Click any node to highlight all connected nodes and edges
- Hover over an edge to see the causal relationship explained in a tooltip
- Toggle: "Show reinforcing loops only" / "Show balancing loops only" / "Show all"
- Reinforcing loops in red, balancing loops in blue
- Node size proportional to number of connections
- Force-directed layout with drag to reposition

**Visual Style:**
- Nodes colored by category (narrative=blue, financial=green, risk=red, correction=orange)
- Edge arrows show direction; "+" or "-" labels show polarity
- Loop labels (R1: FOMO Loop, R2: Narrative Loop, B1: Skeptic Loop, B2: Failure Loop) appear as floating labels
- Background: aliceblue

**Responsive Design:** Graph scales with container; force-directed layout adapts to available space.

Implementation: vis-network with custom edges showing polarity labels
</details>

## Bringing It All Together

The frameworks in this chapter — TRL, adoption curves, hype cycles, base rates, and bubble dynamics — converge on a consistent assessment of quantum computing:

| Framework | Assessment | Implication |
|---|---|---|
| TRL | Level 2-3 (research phase) | Appropriate for research funding, not commercial investment |
| Adoption curve | Pre-chasm (serving innovators only) | No pragmatic buyers; no production deployments |
| Gartner Hype Cycle | Entering trough of disillusionment | Expectations correcting; weak players failing |
| Base rate | 5-15% success rate for multi-breakthrough technologies | Default assumption should be failure, not success |
| Prediction track record | 0% of quantum computing timeline predictions met | Optimistic forecasts have zero credibility |
| Science vs. engineering | Key barriers may be science, not engineering | Timeline is fundamentally unpredictable |
| Bubble dynamics | Exhibits all classic bubble characteristics | Correction underway; most companies will fail |

None of these frameworks proves that quantum computing will never work. What they prove, collectively, is that the current level of investment and expectation is not supported by the technology's actual readiness. The frameworks don't tell us the future — but they tell us that anyone claiming to know the future with confidence is either uninformed or misleading.

## Key Takeaways

- Technology Readiness Levels provide an objective scale for assessing maturity; quantum computing sits at TRL 2-3, firmly in the research phase
- The "crossing the chasm" framework reveals that quantum computing has not yet reached the chasm — it serves only innovators and experimenters, not pragmatic buyers
- The Gartner Hype Cycle places quantum computing in the trough of disillusionment, with no guarantee of reaching the plateau of productivity
- Base rate reasoning suggests a 5-15% probability of multi-breakthrough technologies achieving commercial viability — and the default assumption for forecasting should be failure, not success
- The prediction track record for quantum computing is 0% accurate on timelines, which should dramatically reduce confidence in current predictions
- The science vs. engineering distinction is the most important question for investment timelines: science barriers cannot be solved by spending more money
- Quantum computing exhibits all classic characteristics of a technology bubble, with structural parallels to the dot-com era

!!! mascot-celebration "Excellent Investigative Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Fermi celebrates">
    You now have a professional toolkit for evaluating any emerging technology — not just quantum computing. TRL assessment, adoption curve analysis, hype cycle mapping, base rate reasoning, and bubble dynamics: these frameworks apply to fusion energy, autonomous vehicles, brain-computer interfaces, and every other bold technology claim you'll encounter in your career. That's a superpower. Outstanding work, fellow investigator!

## Review Questions

??? question "Question 1: Why is the TRL 3-to-4 transition particularly difficult for quantum computing?"
    TRL 3 requires experimental proof of concept — demonstrating that individual components work in a lab. TRL 4 requires technology validated in lab — demonstrating that components work together as an integrated system. Quantum computing has achieved TRL 3: individual high-fidelity gates, small error-corrected systems, and quantum processors with increasing qubit counts. But TRL 4 requires integrating sufficient qubits, connectivity, coherence, and error correction into a system that solves a problem a classical computer cannot. No such integrated system has been demonstrated. The challenge is that quantum system components interact in ways that degrade performance when combined — more qubits introduce more error sources, requiring more error correction, which requires more qubits.

??? question "Question 2: What is 'crossing the chasm' and why hasn't quantum computing reached it?"
    Crossing the chasm refers to the transition from early adopters (visionaries who tolerate incomplete products) to the early majority (pragmatists who demand proven, complete solutions). Quantum computing hasn't reached the chasm because it hasn't completed the early adopter phase meaningfully — current "adoption" consists almost entirely of experimentation and exploration, not production deployment. To reach the chasm, quantum computing would need at least one "whole product" that solves a specific problem for a specific customer better and cheaper than classical alternatives. No such product exists, so the transition to pragmatic buyers is not even on the horizon.

??? question "Question 3: How should base rate reasoning affect your assessment of quantum computing predictions?"
    Base rate reasoning means starting with the historical frequency of similar events and adjusting from there. For technologies requiring multiple simultaneous physics breakthroughs, the base rate of achieving commercial viability within 30 years is approximately 5-15%. This should be your starting probability for quantum computing — not 50%, not 80%, but 5-15%. Any prediction claiming higher probability must provide specific evidence for why quantum computing is an exception to the base rate, and that evidence must address the physics barriers, not just cite progress or analogies. The 0% accuracy rate of past quantum computing timeline predictions should further reduce confidence below the base rate.

??? question "Question 4: Why is the distinction between science barriers and engineering barriers so important for investors?"
    Engineering barriers are problems where the science is understood and the challenge is building at scale — these can be solved with time, money, and engineering talent, and timelines can be estimated with reasonable accuracy. Science barriers are problems where fundamental physics may prevent a solution regardless of resources. For investors, this distinction determines whether a timeline is meaningful: if the remaining barriers are engineering, you can estimate when the technology will be ready. If the remaining barriers are science, *no one can give you a reliable timeline*, and any specific timeline estimate is speculation. Several of quantum computing's key barriers — decoherence, the error rate floor, the fault-tolerance threshold — may be science barriers, which means the confident timelines in investor presentations may be meaningless.

??? question "Question 5: How does the dot-com parallel both support and undermine the quantum computing investment thesis?"
    The parallel supports the thesis in one way: the dot-com bubble involved a genuine, eventually transformative technology (the internet), and some companies (Amazon, Google) created enormous value despite the bubble. If quantum computing is analogous, a few well-positioned companies might succeed enormously. However, the parallel undermines the thesis in several important ways: (1) the internet at an equivalent stage already had millions of paying users and proven product-market fit — quantum computing has neither; (2) over 90% of dot-com companies failed completely, meaning most investors lost everything; (3) picking the survivors required identifying companies with sustainable business models, which is impossible for quantum computing when no sustainable business model has been demonstrated. The parallel's most important lesson is not "some companies will win" but "most investors will lose."
