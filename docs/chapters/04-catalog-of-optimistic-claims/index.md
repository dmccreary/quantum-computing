---
title: The Catalog of Overly Optimistic Claims
description: A documented catalog of exaggerated claims by quantum computing companies, consultants, and media, revealing patterns of moving goalposts, unfalsifiable timelines, and redefined success.
generated_by: claude skill chapter-content-generator
date: 2026-03-16 23:32:53
version: 0.05
---

# The Catalog of Overly Optimistic Claims

## Summary

This chapter documents specific exaggerated claims made by quantum computing companies, consultants, and media outlets, showing how press releases become headlines become policy. We examine D-Wave's exaggerated claims, Google's supremacy overhype, IBM's roadmap revisions, startup pitch exaggerations, and McKinsey's $450 billion market projection. We also identify the patterns of moving goalposts, unfalsifiable timelines, and redefining success that characterize quantum computing hype, drawing parallels to fusion energy and flying cars.

## Concepts Covered

This chapter covers the following 13 concepts from the learning graph:

1. Catalog of Broken Promises
2. D-Wave Exaggerated Claims
3. Google Supremacy Overhype
4. IBM Roadmap Revisions
5. Startup Pitch Exaggeration
6. Consultant Hype Reports
7. McKinsey $450B Projection
8. Media Amplification Effect
9. Moving Goalposts Pattern
10. Unfalsifiable Timelines
11. Redefining Success
12. Fusion Energy Parallel
13. Flying Cars Parallel

## Prerequisites

This chapter builds on concepts from:

- [Chapter 3: A History of Quantum Computing Promises](../03-history-of-quantum-computing/index.md)

---

!!! mascot-welcome "Fermi Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Fermi welcomes you">
    Welcome, fellow investigators! In Chapter 3 we traced the timeline. Now
    we put specific claims under the microscope. This chapter is our evidence
    locker — a documented catalog of who said what, when they said it, and
    what actually happened. Names, dates, direct quotes, and outcomes.
    Interesting claims — where's the evidence? Let's find out!

## Learning Objectives

After completing this chapter, you will be able to:

- **Identify** specific exaggerated claims made by D-Wave, Google, IBM, startups, and consulting firms, citing the original statement and its outcome
- **Analyze** how press releases are amplified through media coverage into policy and investment decisions
- **Recognize** three rhetorical patterns — moving goalposts, unfalsifiable timelines, and redefining success — in quantum computing communications
- **Compare** quantum computing hype patterns with those of fusion energy and flying cars
- **Evaluate** a quantum computing claim by checking it against the documented catalog of broken promises
- **Explain** how consulting firms and market projections sustain investment despite absent evidence of commercial viability

---

## The Catalog of Broken Promises

Before examining individual actors, let us establish the scope of what we are cataloging. Since the mid-1990s, quantum computing proponents have made hundreds of specific, verifiable claims about timelines, capabilities, and commercial potential. The vast majority have not been fulfilled.

A claim qualifies for this catalog if it meets three criteria:

1. **Specific and verifiable.** The claim names a capability, timeline, or outcome that can be checked against reality.
2. **Made publicly.** The claim appeared in a press release, published paper, investor presentation, media interview, or public roadmap.
3. **Falsified or significantly revised.** The claimed outcome did not occur within the stated timeline, or the claim was later walked back through redefinition.

This is not a comprehensive list — that would fill a book by itself. Instead, we examine the most consequential claims from the most influential actors, organized by source.

---

## D-Wave Exaggerated Claims

D-Wave Systems occupies a unique position in the history of quantum computing hype. Founded in 1999 in Burnaby, British Columbia, D-Wave was the first company to market a product as a "quantum computer" and the first to generate significant media coverage and corporate sales. Their claims set templates that the rest of the industry would follow.

### The Orion Demonstration (2007)

In February 2007, D-Wave's co-founder Geordie Rose demonstrated the Orion system — a 16-qubit quantum annealer — at the Computer History Museum in Mountain View. Rose declared:

!!! quote "Geordie Rose, D-Wave, 2007"
    "We have built a quantum computer."

The reality was more complicated:

- The system was a **quantum annealer**, not a universal gate-based quantum computer. It could not run Shor's algorithm, Grover's algorithm, or the vast majority of algorithms that justify quantum computing investment.
- Whether the system was even genuinely quantum — as opposed to a classical system exploiting thermal fluctuations — was debated by physicists for years.
- The demonstration solved a Sudoku puzzle and a seating arrangement problem, tasks that a classical laptop handles in milliseconds.

### The Lockheed Sale and Subsequent Claims

Following the $10 million sale to Lockheed Martin in 2011, D-Wave made increasingly bold claims:

| Year | D-Wave Claim | Reality |
|------|-------------|---------|
| 2007 | "We have built a quantum computer" | Quantum annealer; quantum nature debated |
| 2011 | "First commercial quantum computer sale" | Research purchase; no demonstrated advantage |
| 2013 | "Our system solves optimization problems quantum computers are designed for" | Independent tests showed no speedup over classical |
| 2015 | "100 million times faster than classical" | Based on a specific benchmark where the classical comparison was deliberately unoptimized; fair comparisons showed no advantage |
| 2017 | "2,000 qubits" on D-Wave 2000Q | Qubit count is irrelevant without demonstrated advantage; connectivity and noise limit useful computation |
| 2020 | "5,000 qubits" on Advantage system | Still no demonstrated speedup over classical optimization methods |

The "100 million times faster" claim from 2015 deserves particular scrutiny. D-Wave cited a Google/NASA study that compared their quantum annealer against a specific classical algorithm (simulated annealing) on a specific problem instance carefully chosen to favor the annealer. When independent researchers compared D-Wave against the *best* classical algorithms (rather than a strawman), the advantage disappeared. The "100 million times" figure was cherry-picked from the most favorable comparison, and D-Wave continued to cite it in marketing materials long after more rigorous comparisons debunked it.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    D-Wave pioneered a rhetorical strategy that the entire industry would
    adopt: announce the qubit count, emphasize the most favorable benchmark,
    and let the media conflate a specialized quantum annealer with the
    universal quantum computer that Shor's algorithm requires. The distinction
    between annealing and gate-based computing is lost on most journalists
    and nearly all investors — and D-Wave had no incentive to clarify it.

---

## Google Supremacy Overhype

Google's 2019 quantum supremacy claim, discussed in Chapters 2 and 3, is the most prominent example of how a carefully worded scientific paper can be transformed into wildly misleading public narratives.

### The Paper vs. The Headlines

Google's paper in *Nature* (October 2019) was titled "Quantum supremacy using a programmable superconducting processor." The paper itself was relatively cautious, acknowledging that the task (random circuit sampling) had no practical application and that the classical estimate might be improved.

The media coverage was not cautious:

| Source | Headline | What It Implies |
|--------|----------|----------------|
| *Financial Times* | "Google claims to have reached quantum supremacy" | Milestone achieved |
| *The New York Times* | "Google Says It Achieved a Breakthrough in Quantum Computing" | Practical breakthrough |
| *BBC* | "Google claims quantum computing milestone" | General-purpose milestone |
| *Wired* | "Google Just Achieved Quantum Supremacy" | Definitive achievement |
| Various investment reports | "Quantum computing has arrived" | Ready for commercial use |

Notice the escalation: the paper reported a narrow proof-of-concept on a contrived benchmark. By the time it reached investment analysts, it had become "quantum computing has arrived."

### The Amplification Pipeline

The Google supremacy announcement illustrates a general pattern that operates across all quantum computing claims:

```
Scientific paper (cautious, narrow claims)
    ↓
Press release (emphasizes significance, drops caveats)
    ↓
Media coverage (simplifies to headline, adds superlatives)
    ↓
Social media (strips remaining nuance)
    ↓
Investment reports (translates to market opportunity)
    ↓
Policy briefs (translates to national competitiveness threat)
    ↓
Funding decisions (billions allocated based on distorted narrative)
```

At each stage, nuance is removed and significance is inflated. The final output — a funding decision or investment — bears little resemblance to the original scientific claim.

#### Diagram: The Hype Amplification Pipeline

<iframe src="../../sims/hype-amplification-pipeline/main.html" width="100%" height="550px" scrolling="no"></iframe>

<details markdown="1">
<summary>The Hype Amplification Pipeline</summary>
Type: workflow
**sim-id:** hype-amplification-pipeline<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom Level:** Analyze (L4)
**Bloom Verb:** Examine, Deconstruct

**Learning Objective:** Students will be able to deconstruct the stages through which a careful scientific claim is amplified into misleading investment and policy narratives, identifying what is lost at each stage.

**Instructional Rationale:** A workflow diagram with hover-based detail disclosure is appropriate because the Analyze/deconstruct objective requires students to trace a process through stages, understanding transformations at each step. Seeing the original text alongside the transformed versions at each stage makes the distortion visible and concrete.

**Canvas layout:**

- Full width: Vertical flowchart with 7 stages connected by downward arrows

**Visual elements:**

- Seven rounded rectangles arranged vertically, connected by arrows
- Each rectangle contains: stage name, actor (who), and a brief label
- Arrows between stages are labeled with the transformation (e.g., "drops caveats," "adds superlatives")
- A "nuance meter" bar on the left side that decreases from 100% at the top (scientific paper) to ~5% at the bottom (funding decisions)
- A "hype meter" bar on the right side that increases from low to maximum

**Data for Google Sycamore example:**

- Stage 1 (Scientific Paper): "Our processor took 200 seconds for a task estimated at 10,000 years classically. The task has no practical application."
- Stage 2 (Press Release): "Google achieves quantum supremacy — a computation that would take 10,000 years on the fastest supercomputer."
- Stage 3 (Media): "Google's quantum computer is 158 million times faster than the world's fastest supercomputer."
- Stage 4 (Social Media): "Google built a computer more powerful than any supercomputer!"
- Stage 5 (Investment Reports): "Quantum computing has arrived. $65B market opportunity by 2030."
- Stage 6 (Policy Briefs): "China is racing ahead in quantum — we must increase funding or lose our edge."
- Stage 7 (Funding Decision): "$1.2B allocated to quantum computing initiative."

**Interactive features:**

- Hover over each stage to see: the actual text/claim at that stage, what was removed or added, and the actor responsible
- Click a stage to expand a comparison showing the original paper text alongside the transformed version
- Toggle: "Show second example" — switch to IBM's utility-scale announcement or D-Wave's 100M-times-faster claim

**Implementation:** p5.js. Background: aliceblue. Responsive to window resize.
</details>

---

## IBM Roadmap Revisions

IBM deserves credit for being the most transparent major quantum computing company — they publish detailed roadmaps with specific targets. This transparency, however, creates a documented trail of revisions that illustrates the moving goalposts pattern with unusual clarity.

### The Evolving Roadmap

| Roadmap Version | Key Targets | What Happened |
|----------------|------------|---------------|
| **2020 Roadmap** | 127 qubits by 2021, 433 by 2022, 1,121 by 2023; "quantum advantage" by 2025 | Qubit counts met on schedule; advantage target silently replaced with "utility" |
| **2021 Update** | 1,000+ qubits by 2023; error-corrected systems by 2025; 100,000+ qubits by 2033 | 1,121 qubits achieved (Condor, 2023); error correction not achieved by 2025 |
| **2023 Revision** | Condor architecture shelved; pivot to modular systems; "utility-scale" demonstrations; full error correction timeline pushed to late 2020s | Acknowledged that simply adding qubits was insufficient; new architecture needed |
| **2024 Update** | "Quantum-centric supercomputing" by 2033; 100,000 qubits via modular networking | Timeline remains aspirational; no fundamental barrier has been overcome |

The pattern is consistent: **qubit count targets are met** (because adding more noisy qubits is an engineering problem that money can solve), but **performance targets are missed** (because reducing error rates and achieving fault tolerance involve physics breakthroughs that money alone cannot guarantee).

### The Language Shift

IBM's terminology has evolved in a revealing direction:

- **2019:** "Quantum advantage" — solving a useful problem faster than any classical computer
- **2021:** "Quantum utility" — demonstrating that quantum processors can contribute something useful (a much lower bar)
- **2023:** "Utility-scale quantum computing" — performing computations that are "useful for research" (lower still)
- **2024:** "Quantum-centric supercomputing" — hybrid systems where classical and quantum processors work together (the quantum component's contribution is unspecified)

Each iteration replaces a falsifiable, ambitious target with a vaguer, less demanding one. This is the **redefining success** pattern in real time.

!!! mascot-warning "Bias Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Fermi warns you">
    When IBM announced "utility-scale quantum computing" in 2023, much of the
    press coverage treated it as evidence of progress. But examine what happened:
    IBM did not achieve the advantage it had promised. It changed the definition
    of success to something it *had* achieved. If a student promised to get an
    A on an exam and then, after getting a C, announced "I achieved learning-
    scale academic engagement," you would see through the redefinition instantly.
    Apply the same standard to corporate roadmaps.

---

## Startup Pitch Exaggeration

While IBM and Google make cautious (if eventually misleading) public claims, quantum computing startups operate under different pressures. Startups must raise venture capital, which requires presenting an optimistic narrative within the fund's investment horizon. The result is a systematic pattern of exaggeration in pitch decks and investor presentations.

### Common Startup Exaggeration Patterns

Based on publicly available investor presentations, earnings calls, and media interviews from companies including Rigetti, IonQ, PsiQuantum, and others:

| Pattern | Example | Reality |
|---------|---------|---------|
| **Conflating theoretical and practical advantage** | "Our algorithms provide exponential speedups" | The speedups are theoretical; no demonstration on practical problems |
| **Citing total addressable market (TAM) from consultant reports** | "The quantum computing market will reach $450 billion" | These projections assume problems that quantum computers may never solve |
| **Comparing qubit counts without context** | "We have the most advanced quantum processor" | Qubit count without error rate and connectivity data is meaningless |
| **Vague timelines with escape clauses** | "We expect to demonstrate advantage within 3-5 years" | Unfalsifiable because "advantage" is not defined precisely |
| **Implying near-term revenue from long-term technology** | "We are working with Fortune 500 companies" | These are typically small research contracts, not production deployments |
| **Suppressing failure modes** | "Our latest results show 99.9% gate fidelity" | Reported on best qubit pair; system-level fidelity much lower |

### Case Study: SPAC Presentations

Several quantum computing companies went public via SPACs (Special Purpose Acquisition Companies) in 2021-2022. SPAC presentations, unlike traditional IPO prospectuses, were not subject to the same regulatory scrutiny. This created an environment where projections could be particularly aggressive:

- **IonQ** (2021 SPAC): Projected $522 million in revenue by 2026. Actual 2024 revenue: approximately $40 million, primarily from government contracts.
- **Rigetti** (2022 SPAC): Projected significant revenue growth from quantum computing services. Actual 2024 revenue: approximately $15 million, with ongoing losses.
- **D-Wave** (2022 SPAC): Projected revenue growth based on quantum annealing applications. Actual 2024 revenue: approximately $8 million.

In each case, the SPAC projections assumed quantum computing would achieve commercial viability on a timeline that the physics did not support.

---

## Consultant Hype Reports

### McKinsey $450B Projection

In 2021, McKinsey & Company published a widely cited report projecting that quantum computing could generate $450 billion to $850 billion in value by 2035. This figure appeared in investor presentations, congressional testimonies, and media articles worldwide, lending the authority of one of the world's most prestigious consulting firms to the quantum computing investment thesis.

The projection's methodology deserves scrutiny:

1. **It assumed quantum advantage would be achieved** across multiple sectors (pharmaceuticals, chemicals, finance, logistics) by the early 2030s — an assumption contradicted by the hardware trajectory.

2. **It estimated the "addressable" market** — the size of the problems quantum computers could theoretically solve — not the revenue quantum companies would actually generate. The distinction is enormous: the "addressable market" for teleportation would be trillions of dollars, but that says nothing about whether teleportation is achievable.

3. **It relied on expert interviews** with quantum computing researchers and executives — precisely the people with the strongest incentive to overstate the technology's potential.

4. **It did not adequately weight the probability of failure.** A properly risk-adjusted estimate would multiply the potential value by the probability of achieving the necessary breakthroughs. If the probability of achieving commercial quantum advantage by 2035 is 10% (a generous estimate), the risk-adjusted value is $45-$85 billion — and that assumes the full value is realized immediately upon achieving advantage, which it would not be.

!!! example "An Analogy for the McKinsey Projection"
    Imagine estimating the "value" of teleportation by calculating how much
    the world spends on transportation. The number would be in the trillions.
    This tells you absolutely nothing about whether teleportation is physically
    possible. The McKinsey projection is structurally similar: it estimates the
    value of problems that quantum computers *could theoretically solve* without
    adequately assessing whether quantum computers *will actually be able to
    solve them*.

### The Consultant Incentive Structure

Consulting firms are not neutral observers. McKinsey, BCG, and Bain all have quantum computing practice groups that generate revenue by advising companies on quantum strategy. A report concluding "quantum computing may never be commercially viable — save your money" would eliminate a revenue stream. A report concluding "quantum computing will generate $450 billion — you need a strategy" creates client demand.

This does not mean the consultants are being dishonest. It means their incentive structure produces systematically optimistic assessments, and consumers of these reports should adjust accordingly.

#### Diagram: The Hype Ecosystem

<iframe src="../../sims/hype-ecosystem/main.html" width="100%" height="600px" scrolling="no"></iframe>

<details markdown="1">
<summary>The Quantum Computing Hype Ecosystem</summary>
Type: graph-model
**sim-id:** hype-ecosystem<br/>
**Library:** vis-network<br/>
**Status:** Specified

**Bloom Level:** Analyze (L4)
**Bloom Verb:** Examine, Attribute

**Learning Objective:** Students will be able to examine the interconnected actors in the quantum computing hype ecosystem and attribute each actor's incentive to produce optimistic claims.

**Instructional Rationale:** A network graph is appropriate because the hype ecosystem involves multiple actors with bidirectional relationships. Students need to see that the system is self-reinforcing — each actor benefits from the others' optimism — which a linear diagram cannot convey. Hover-based disclosure lets students explore individual incentives without losing the systemic view.

**Node types:**

1. QC Companies (blue circles): D-Wave, IBM, Google, IonQ, Rigetti, PsiQuantum
   - Properties: name, founded, funding_raised, revenue, key_claim
2. Consulting Firms (green squares): McKinsey, BCG, Bain
   - Properties: name, QC_practice_revenue_estimate, key_report
3. Media Outlets (orange diamonds): NYT, FT, Wired, BBC
   - Properties: name, headline_count, correction_count
4. Government Agencies (red hexagons): NSF, DARPA, DOE, EU Quantum Flagship, Chinese Academy of Sciences
   - Properties: name, QC_budget, stated_rationale
5. Investors (purple triangles): VC firms, SPAC sponsors, retail investors
   - Properties: name, QC_portfolio_size, returns
6. Universities (gray circles): Research groups receiving QC funding
   - Properties: name, QC_grants, PhD_students

**Edge types:**

1. HYPES (solid arrows): Actor A makes optimistic claims that benefit Actor B
2. FUNDS (dashed arrows): Actor A provides money to Actor B
3. VALIDATES (dotted arrows): Actor A's participation lends credibility to Actor B
4. AMPLIFIES (bold arrows): Actor A increases the reach of Actor B's claims

**Key relationships to show:**

- Companies → Media (press releases) → Investors (coverage drives investment)
- Consultants → Companies (market projections used in pitch decks)
- Government → Companies (funding) → Government (lobbying for more funding)
- Universities → Companies (talent pipeline + validation) → Universities (grants)
- Investors → Companies (capital) → Investors (need optimism to justify portfolio)

**Interactive features:**

- Hover over any node to see: actor name, their specific incentive to be optimistic, their key contribution to the hype cycle
- Click a node to highlight all connected nodes and edges, showing how that actor's optimism propagates
- Toggle: "Remove one actor" — select an actor to remove and see how the ecosystem changes (spoiler: it remains self-sustaining because of redundancy)
- Toggle: "Show skeptic nodes" — add a small cluster of skeptic nodes (Kalai, Dyakonov, etc.) and show that they have almost no edges to the funding or media nodes

**Layout:** Force-directed with clusters. Companies in center, other actors orbiting.

**Implementation:** vis-network JavaScript library. Background: aliceblue. Responsive to window resize.
</details>

---

## Media Amplification Effect

The media plays a structural role in the quantum computing hype cycle. Science journalism faces economic pressures that systematically favor sensational coverage over accuracy.

### Why Science Journalism Amplifies Hype

Several structural factors explain why quantum computing media coverage is consistently more optimistic than the underlying science warrants:

1. **Incentive misalignment.** Journalists are rewarded for clicks, shares, and attention. "Quantum computer achieves breakthrough" generates far more engagement than "Quantum computer performs contrived benchmark marginally faster than previous attempt."

2. **Source dependence.** Science journalists rely on researchers and corporate communications teams for story ideas and expert quotes. These sources have strong incentives to emphasize breakthroughs and downplay limitations.

3. **Complexity barrier.** Quantum mechanics is genuinely difficult to explain. Journalists who do not understand the physics cannot critically evaluate claims. They default to reporting what sources tell them.

4. **Asymmetric coverage.** Breakthrough announcements are headline news. Subsequent debunkings, corrections, or failures to replicate receive minimal coverage. The public remembers the claim, not the correction.

5. **The "balancing" trap.** Journalistic norms of "balance" mean that skeptics — even when they represent the scientific consensus — are presented as one side of a debate, rather than as the mainstream view. A story might quote a company CEO's optimistic claim and then add a single skeptic's quote, creating a false impression of a 50-50 debate when the evidence overwhelmingly supports the skeptic.

### Quantifying the Asymmetry

A systematic review of quantum computing media coverage reveals a consistent pattern:

| Metric | Breakthrough Announcements | Corrections/Debunkings |
|--------|---------------------------|----------------------|
| Average headline prominence | Front page / top of tech section | Buried in technical sections |
| Social media shares | High (thousands to millions) | Low (hundreds) |
| Time from event to coverage | Hours to days | Weeks to months |
| Number of outlets covering | Dozens to hundreds | Few to a dozen |
| Expert sources quoted | Primarily proponents | Mixed, often no response from original claimant |

!!! mascot-tip "Fermi's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Fermi shares a tip">
    When you read a quantum computing news story, apply a simple checklist:
    (1) Is the source a press release or a peer-reviewed paper? (2) Does the
    article explain what the computation is *useful for*? (3) Is a classical
    baseline comparison provided, and is it the best available classical method?
    (4) Does the article quote an independent skeptic? If the answer to any of
    these is "no," the article is amplifying hype, not reporting science.

---

## The Three Rhetorical Patterns

Across all the claims documented in this chapter, three recurring rhetorical patterns emerge. Learning to identify these patterns is one of the most practical skills this course teaches.

### Pattern 1: Moving Goalposts

**Definition:** When an original target is missed, a new target is announced that pushes the timeline forward, often without acknowledging the missed deadline.

**How it works:**

1. Organization announces: "We will achieve X by 2025."
2. 2025 arrives. X is not achieved.
3. Organization announces: "We will achieve X by 2030" — or, more commonly, "We will achieve Y by 2028" (where Y is a less ambitious version of X).
4. The missed 2025 deadline is not mentioned.

**Examples:**

- IBM's quantum advantage target: 2025 → "utility-scale" by 2025 → advantage "by late 2020s"
- D-Wave's commercial speedup: "imminent" in 2013 → "ongoing research" in 2025
- Multiple startups: "revenue within 3 years of IPO" → "pivoting to hybrid classical-quantum services"

### Pattern 2: Unfalsifiable Timelines

**Definition:** Predictions structured so that they cannot be proven wrong within any practical timeframe.

**How it works:**

- "Quantum computing *could* transform the industry *within the next decade*."
- The word "could" provides an escape if it doesn't happen.
- "Within the next decade" is far enough away that the prediction cannot be checked for years.
- When the decade passes, a new "within the next decade" prediction replaces it.

**Red flags for unfalsifiable timelines:**

- Hedge words: "could," "may," "potentially," "up to"
- Vague timeframes: "in the coming years," "within a generation," "by the end of the decade"
- Conditional success: "once we achieve [unspecified breakthrough]"
- Moving baselines: "compared to where we were five years ago"

### Pattern 3: Redefining Success

**Definition:** Changing the definition of the target after failing to meet the original one, so that current performance appears to satisfy the new, weaker criterion.

**How it works:**

1. Promise: "We will demonstrate quantum advantage" (solve a useful problem faster than classical).
2. Result: Cannot solve any useful problem faster than classical.
3. Redefinition: "We have demonstrated quantum utility" (our quantum processor did something that is interesting for research).
4. The new term is close enough to the original that casual observers conflate them.

| Original Target | Redefined Target | What Changed |
|-----------------|-----------------|--------------|
| Quantum advantage | Quantum utility | "Useful problem" → "interesting for research" |
| Fault-tolerant QC | Error-mitigated QC | "Correct results" → "partially corrected results" |
| Quantum speedup | Quantum parity | "Faster than classical" → "as good as classical" |
| Breaking encryption | Quantum-safe migration | "Quantum threat" → "need to migrate preemptively" |

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    These three patterns — moving goalposts, unfalsifiable timelines, and
    redefining success — are not unique to quantum computing. They appear in
    any field where the gap between promise and delivery is large and the
    incentive to maintain optimism is strong. Once you can identify these
    patterns, you have a transferable analytical skill applicable to any
    technology claim: fusion energy, AGI, brain-computer interfaces, longevity
    research. That doesn't add up — and now you know why.

#### Diagram: The Three Rhetorical Patterns

<iframe src="../../sims/rhetorical-patterns/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>The Three Rhetorical Patterns of Quantum Hype</summary>
Type: infographic
**sim-id:** rhetorical-patterns<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom Level:** Apply (L3)
**Bloom Verb:** Use, Demonstrate

**Learning Objective:** Students will be able to use the three rhetorical pattern frameworks (moving goalposts, unfalsifiable timelines, redefining success) to classify real quantum computing claims.

**Instructional Rationale:** A classification exercise is appropriate because the Apply/use objective requires students to actively categorize claims rather than passively observe patterns. The interactive drag-and-drop format provides immediate feedback, reinforcing pattern recognition skills through practice.

**Canvas layout:**

- Top (30%): A pool of 12 real quantum computing quotes/claims (drawn from this chapter)
- Bottom (70%): Three labeled drop zones — "Moving Goalposts," "Unfalsifiable Timelines," "Redefining Success"

**Visual elements:**

- Draggable quote cards with brief text snippets from actual quantum computing claims
- Three target zones with distinct colors and pattern descriptions
- Score counter showing correct/incorrect classifications
- After classification, a reveal panel showing the reasoning for each correct answer

**Sample claims to classify:**

1. "Quantum advantage by 2025" → (2023 revision) "Utility-scale by 2025, advantage by late 2020s" [Moving Goalposts]
2. "Quantum computing could potentially transform drug discovery within the next decade" [Unfalsifiable Timeline]
3. "We have achieved quantum utility" (after failing to achieve quantum advantage) [Redefining Success]
4. "Our roadmap targets fault-tolerant QC by 2029-2030" [Moving Goalposts — replaced earlier 2025 target]
5. "Up to $450 billion in value by 2035" [Unfalsifiable Timeline — "up to" and distant date]
6. "We demonstrated quantum computational advantage" (on a contrived benchmark) [Redefining Success]

**Interactive controls:**

- Drag and drop cards into zones
- Button: "Check Answers" — reveals correct classifications with explanations
- Button: "New Set" — loads a fresh set of claims for additional practice
- Button: "Reset"

**Behavior:**

- Correct placements turn green; incorrect turn red with a hint
- After checking, each card expands to show why it fits the assigned pattern
- Running score tracks accuracy across multiple attempts

**Implementation:** p5.js with drag-and-drop interaction. Background: aliceblue. Responsive to window resize.
</details>

---

## The Fusion Energy Parallel

The most instructive historical parallel for quantum computing is controlled nuclear fusion. Both technologies share a remarkably similar structural profile:

| Dimension | Fusion Energy | Quantum Computing |
|-----------|--------------|-------------------|
| Original promise | Limitless clean energy | Exponentially faster computation |
| Year of first serious proposal | 1950s | 1980s-1990s |
| Funding motivation | Energy independence, climate | National security, economic competitiveness |
| Perpetual timeline | "30 years away" since the 1950s | "3-5 years away" since the 1990s |
| Genuine physics barrier | Plasma confinement at ignition temperatures | Decoherence and error correction at scale |
| Engineering vs. physics distinction | Often conflated | Often conflated |
| Cumulative investment | Tens of billions | Over $100 billion |
| Commercial return | $0 | $0 |
| Self-reinforcing funding loop | Yes (government labs, career incentives) | Yes (government + VC + career incentives) |
| Skeptics marginalized | Yes | Yes |

The fusion parallel is not perfect — fusion faces different specific physics challenges and operates on a different funding model (primarily government rather than VC). But the *structural* similarity is striking: both involve a genuine physics concept that is theoretically sound but may be practically unachievable at commercially relevant scale, sustained by funding cycles and career incentives that suppress honest timeline estimation.

!!! mascot-warning "Bias Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Fermi warns you">
    When proponents dismiss the fusion parallel by saying "quantum computing is
    different because [specific technical argument]," evaluate the technical
    argument on its merits. But also notice the rhetorical move: the
    comparison is being rejected not on structural grounds (the incentive
    dynamics are identical) but on surface-level technical differences. The
    question is not whether the specific physics is the same — it isn't. The
    question is whether the *pattern of overpromising sustained by structural
    incentives* is the same. It is.

---

## The Flying Cars Parallel

The flying car is a more light-hearted but equally instructive parallel. Since the 1950s, inventors and companies have periodically announced that flying cars are imminent. The pattern:

1. A prototype is demonstrated (real physics — it actually flies).
2. The media declares flying cars are "finally here."
3. Practical barriers (air traffic control, safety regulation, cost, noise, energy requirements) prevent commercialization.
4. The cycle repeats every 5-10 years with a new prototype.

The parallel to quantum computing:

- **The prototype works** — small quantum processors do perform quantum operations, just as prototype flying cars do fly.
- **The leap from prototype to commercial product** requires solving an entirely different class of problems — regulatory, economic, and infrastructure challenges that the prototype does not address, just as a working quantum processor does not address the error correction, cryogenic, and cost barriers to commercial quantum computing.
- **Each demonstration generates disproportionate excitement** relative to the distance from commercialization.

The flying car parallel is also useful because it highlights the **category error** in quantum computing hype: a working prototype is evidence that the physics works, but it is not evidence that the technology is commercially viable. The distance from "it works in a lab" to "it works as a product" can be infinite if the barriers are not primarily technical but structural.

---

## Key Takeaways

This chapter documented the specific claims, actors, and patterns that constitute quantum computing hype:

1. **D-Wave** pioneered the hype playbook: announce qubit counts, cite the most favorable benchmark, let the media conflate quantum annealing with universal quantum computing, and never correct the conflation.

2. **Google's supremacy claim** demonstrated the hype amplification pipeline: a narrow, carefully worded paper became "quantum computing has arrived" by the time it reached investors and policymakers.

3. **IBM's roadmap revisions** provide a transparent case study in moving goalposts and redefining success — from "quantum advantage" to "quantum utility" to "quantum-centric supercomputing."

4. **Startup SPAC presentations** made revenue projections that assumed breakthroughs the physics has not delivered, and actual revenues fell short by an order of magnitude or more.

5. **McKinsey's $450 billion projection** illustrates how consulting firm incentives produce systematically optimistic market estimates that circulate as authoritative forecasts.

6. **The media amplification effect** ensures that breakthrough claims reach millions while corrections reach thousands. The public's perception of quantum computing is shaped by the most sensational version of every claim.

7. **Three rhetorical patterns** — moving goalposts, unfalsifiable timelines, and redefining success — characterize the quantum computing hype ecosystem and are identifiable transferable skills for evaluating any technology claim.

8. **The fusion energy and flying car parallels** demonstrate that the quantum computing hype pattern is structurally similar to other technologies where genuine physics is sustained by institutional incentives long after commercial viability has become doubtful.

!!! mascot-celebration "Excellent Investigative Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Fermi celebrates">
    You now have the evidence locker fully inventoried. You can name the
    specific claims, the specific claimants, and the specific outcomes. More
    importantly, you can identify the three rhetorical patterns — moving
    goalposts, unfalsifiable timelines, and redefining success — whenever
    you encounter them, in quantum computing or any other field. That is
    investigative rigor. Outstanding work, fellow investigator!

---

## Review Questions

??? question "1. Explain why D-Wave's '100 million times faster' claim (2015) is misleading, using the concept of a contrived benchmark."
    D-Wave's claim was based on a Google/NASA study that compared their quantum
    annealer against a specific classical algorithm (simulated annealing) on a
    problem instance specifically chosen to favor the annealer. This is a
    contrived benchmark: the comparison was not against the best available
    classical algorithm, and the problem was selected to highlight the annealer's
    strengths. When independent researchers compared D-Wave against state-of-the-
    art classical optimization algorithms, the advantage disappeared. The
    "100 million times" figure was cherry-picked from the most favorable
    comparison possible.

??? question "2. Describe the hype amplification pipeline using Google's 2019 supremacy announcement as an example."
    The pipeline operates in stages: (1) Google's paper in Nature carefully
    noted that random circuit sampling has no practical application and that
    classical estimates might improve. (2) Google's press release emphasized
    the 10,000-year comparison. (3) Media headlines declared "Google achieves
    quantum supremacy" without caveats. (4) Social media reduced this to
    "quantum computer more powerful than any supercomputer." (5) Investment
    reports declared "quantum computing has arrived" and projected market
    opportunity. (6) Policy briefs framed it as a national competitiveness
    issue. (7) Governments increased quantum funding. At each stage, nuance
    was removed and significance was inflated.

??? question "3. Using IBM's roadmap revisions, illustrate all three rhetorical patterns: moving goalposts, unfalsifiable timelines, and redefining success."
    Moving goalposts: IBM's 2020 roadmap targeted quantum advantage by 2025;
    the 2023 revision pushed this to "late 2020s." Unfalsifiable timelines:
    IBM's 2024 roadmap targets "quantum-centric supercomputing by 2033" — far
    enough away that it cannot be tested for nearly a decade, and vague enough
    ("quantum-centric") to be difficult to falsify even then. Redefining
    success: IBM replaced "quantum advantage" (solving a useful problem faster
    than classical) with "quantum utility" (doing something interesting for
    research) — a much lower bar that their existing hardware could arguably
    meet.

??? question "4. Why is McKinsey's $450 billion projection structurally misleading, even if the underlying analysis is competent?"
    The projection estimates the total addressable market — the value of
    problems quantum computers could theoretically solve — rather than the
    revenue quantum companies will generate. It assumes quantum advantage will
    be achieved across multiple sectors by the early 2030s, contradicting the
    hardware trajectory. It does not adequately weight the probability of
    failure. A risk-adjusted estimate at even 10% probability would yield
    $45-85 billion, and the projection does not account for the time lag
    between achieving advantage and capturing market value. Additionally,
    the consulting firms producing these reports have financial incentives
    to produce optimistic estimates that create client demand for quantum
    strategy consulting.

??? question "5. How does the fusion energy parallel strengthen the case for skepticism about quantum computing timelines?"
    Fusion has been "30 years away" for over 60 years, demonstrating that a
    technology can be theoretically sound, genuinely funded, and still fail to
    achieve commercial viability for decades. The structural parallels are
    precise: both face genuine physics barriers (plasma confinement / decoherence),
    both conflate engineering and physics challenges, both have self-reinforcing
    funding loops (government labs / VC + government), both marginalize skeptics,
    and both have generated zero commercial return despite massive cumulative
    investment. The fusion case proves that the "perpetually N years away"
    pattern can persist indefinitely when institutional incentives sustain it.
