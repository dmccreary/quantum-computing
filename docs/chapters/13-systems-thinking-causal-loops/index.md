---
title: Systems Thinking and Causal Loop Diagrams
description: Applying systems dynamics to model why quantum computing investment perpetuates itself despite absent returns through reinforcing and balancing feedback loops.
generated_by: claude skill chapter-content-generator
date: 2026-03-17 00:35:46
version: 0.05
---

# Systems Thinking and Causal Loop Diagrams

## Summary

This chapter applies systems dynamics to model why quantum computing investment perpetuates itself despite absent returns. We introduce systems thinking, causal loop diagrams, and the distinction between reinforcing and balancing feedback loops. We then construct four specific reinforcing loops driving quantum computing investment: the hype reinforcement loop (funding to papers to media to excitement to more funding), the sunk cost escalation loop, the career incentive loop, and the geopolitical arms race loop. We identify the missing balancing loop (honest physics assessment) that is suppressed by institutional incentives, and find leverage points where honest assessment could break the cycle.

## Concepts Covered

This chapter covers the following 12 concepts from the learning graph:

1. Systems Thinking
2. Causal Loop Diagrams
3. Reinforcing Feedback Loop
4. Balancing Feedback Loop
5. Hype Reinforcement Loop
6. Sunk Cost Escalation Loop
7. Career Incentive Loop
8. Geopolitical Arms Race Loop
9. Missing Balancing Loop
10. Leverage Points
11. Self-Sustaining Hype Cycle
12. Breaking the Hype Loop

## Prerequisites

This chapter builds on concepts from:

- [Chapter 4: The Catalog of Overly Optimistic Claims](../04-catalog-of-optimistic-claims/index.md)
- [Chapter 8: Investment Risk Analysis](../08-investment-risk-analysis/index.md)
- [Chapter 11: Cognitive Biases in Quantum Computing Investment](../11-cognitive-biases/index.md)
- [Chapter 12: Expert Skeptics, Ethics, and Careers](../12-expert-skeptics-ethics-careers/index.md)

---

!!! mascot-welcome "Fermi Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Fermi welcomes you">
    Welcome, fellow investigators! In the previous chapters, we examined cognitive biases, expert skepticism, and career incentives that sustain quantum computing investment. Now we step back and ask a systems-level question: why does the entire quantum computing investment ecosystem perpetuate itself even when the physics suggests it may never deliver commercial returns? Systems thinking gives us the analytical framework to trace these self-reinforcing dynamics. But does the math check out? Let's find out!

## Learning Objectives

After completing this chapter, you will be able to:

- Define systems thinking and explain how it differs from linear causal reasoning
- Construct and interpret causal loop diagrams with correct polarity notation
- Distinguish between reinforcing (positive) and balancing (negative) feedback loops
- Identify four specific reinforcing loops driving quantum computing investment
- Explain why the critical balancing loop (honest physics assessment) is suppressed
- Locate leverage points where interventions could most effectively break self-sustaining hype cycles
- Apply systems thinking to evaluate technology investment claims in any domain

## What Is Systems Thinking?

Systems thinking is an analytical framework that examines how components of a complex system interact, influence each other, and produce emergent behavior that cannot be predicted by studying individual components in isolation. Unlike linear causal reasoning — where A causes B causes C in a straightforward chain — systems thinking recognizes that effects feed back into their causes, creating loops that can amplify or dampen initial conditions over time.

The roots of systems thinking trace to Jay Forrester's work at MIT in the 1950s and 1960s, where he developed system dynamics to model industrial and urban systems. Donella Meadows later popularized the framework in her influential work *Thinking in Systems* (2008), identifying twelve leverage points where interventions in complex systems are most effective.

For quantum computing analysis, systems thinking reveals something that reductionist approaches miss: the quantum computing investment ecosystem behaves as a self-reinforcing system where individual rational actors — researchers, investors, journalists, policymakers — collectively produce irrational outcomes. No single actor is "to blame," yet the system as a whole perpetuates investment despite absent commercial returns.

| Analytical Approach | Focus | Limitation for QC Analysis |
|---------------------|-------|---------------------------|
| Linear causal | A → B → C chains | Misses feedback loops that amplify hype |
| Reductionist | Individual actors/decisions | Misses emergent system behavior |
| Statistical | Historical patterns/correlations | Cannot model structural dynamics |
| Systems thinking | Feedback loops, stocks, flows | Requires identifying complete loop structures |

The key insight of systems thinking is that **structure drives behavior**. The quantum computing investment ecosystem produces persistent hype not because individual actors are dishonest, but because the system's feedback structure rewards optimism and penalizes skepticism. Change the structure, and you change the behavior.

## Causal Loop Diagrams: The Core Tool

A causal loop diagram (CLD) is a visual representation of how variables in a system influence one another. CLDs use arrows to show causal connections and polarity labels to indicate the direction of influence. They are the primary analytical tool of system dynamics and enable us to trace how initial perturbations propagate through a system.

The syntax of causal loop diagrams follows two rules:

- **Same-direction influence (+):** When variable A increases, variable B increases (or when A decreases, B decreases). The arrow from A to B is labeled with a "+".
- **Opposite-direction influence (−):** When variable A increases, variable B decreases (or when A decreases, B increases). The arrow from A to B is labeled with a "−".

!!! example "Reading a Causal Arrow"
    If we draw `Government Funding → (+) → Number of QC Papers`, this means that when government funding increases, the number of QC papers also increases. This is a same-direction relationship. Conversely, `Honest Failure Reports → (−) → Media Excitement` means that more honest failure reports decrease media excitement — an opposite-direction relationship.

The polarity labels describe the direction of influence, not whether the effect is "good" or "bad." A positive arrow does not mean a beneficial effect; it simply means the variables move in the same direction.

### Loop Types

When causal arrows form a closed cycle, they create a feedback loop. The behavior of the loop depends on the count of negative arrows it contains:

- **Reinforcing loop (R):** Contains an even number of negative arrows (including zero). These loops amplify change — small perturbations grow exponentially. They produce runaway growth or collapse.
- **Balancing loop (B):** Contains an odd number of negative arrows. These loops resist change and push the system toward equilibrium. They produce goal-seeking or oscillating behavior.

| Loop Type | Negative Arrow Count | Behavior | Analogy |
|-----------|---------------------|----------|---------|
| Reinforcing (R) | Even (0, 2, 4...) | Exponential growth or collapse | Snowball rolling downhill |
| Balancing (B) | Odd (1, 3, 5...) | Goal-seeking, equilibrium | Thermostat regulating temperature |

In healthy systems, reinforcing and balancing loops exist in tension — growth is checked by constraints, and enthusiasm is tempered by reality. The quantum computing investment ecosystem is pathological precisely because its reinforcing loops dominate while its balancing loops are suppressed.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    Here's the critical realization: a system with strong reinforcing loops and weak balancing loops doesn't just grow — it grows until catastrophic collapse. Every financial bubble in history exhibits this same structural pattern. The reinforcing loops of quantum computing investment are no different in kind from those of the dot-com bubble or the subprime mortgage crisis.

## Reinforcing Loop 1: The Hype Reinforcement Loop

The most prominent reinforcing loop in the quantum computing ecosystem is what we call the **Hype Reinforcement Loop**. It connects funding, publications, media coverage, public excitement, and political pressure in a self-amplifying cycle.

The loop operates as follows:

1. **Government and corporate funding** flows into quantum computing research
2. Funded researchers produce **publications and press releases** (positive results are preferentially published)
3. Media outlets amplify the most exciting claims, generating **news coverage**
4. Coverage creates **public excitement and political pressure** for quantum supremacy
5. Politicians and executives respond by allocating **more funding**
6. The cycle repeats, each iteration amplifying the previous one

Each arrow in this loop carries a positive (+) polarity, making it a reinforcing loop. Notice that the loop contains a critical asymmetry: positive results accelerate the cycle, but negative results barely slow it down. A paper demonstrating a new qubit record generates headlines; a paper showing fundamental error rate limits is ignored by mainstream media.

| Variable | Direction of Effect | Mechanism |
|----------|-------------------|-----------|
| Funding → Publications | + | More money enables more research, more papers |
| Publications → Media Coverage | + | Exciting claims attract journalists |
| Media Coverage → Public Excitement | + | Headlines create perception of imminent breakthroughs |
| Public Excitement → Political Pressure | + | Voters and constituents demand competitiveness |
| Political Pressure → Funding | + | Policymakers allocate budgets to appear forward-looking |

The hype reinforcement loop explains why quantum computing funding has grown exponentially despite the absence of any commercial application. Between 2015 and 2025, global quantum computing investment grew from roughly $500 million to over $35 billion annually — a 70-fold increase — while the number of commercially useful quantum computations remained at zero.

#### Diagram: Hype Reinforcement Loop

<iframe src="../../sims/hype-reinforcement-loop/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Hype Reinforcement Loop Causal Diagram</summary>
Type: graph-model
**sim-id:** hype-reinforcement-loop<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Verb: examine, distinguish
Learning Objective: Students will examine the causal structure of the hype reinforcement loop and distinguish same-direction influences that create self-amplifying investment cycles.

Instructional Rationale: An interactive network diagram is appropriate because the Analyze objective requires students to trace causal connections and identify loop structure. Static text cannot convey the circular, self-reinforcing nature of the system.

Node types:
1. System Variables (rounded rectangles, indigo background #3F51B5, white text):
   - "Government & Corporate Funding"
   - "Publications & Press Releases"
   - "Media Coverage"
   - "Public Excitement"
   - "Political Pressure"

Layout: Circular arrangement (clockwise) to emphasize the loop structure

Edge types:
- Directed arrows (orange #FF7043, width 3) connecting each variable to the next in sequence
- Each arrow labeled with "+" to indicate same-direction polarity
- Final arrow from "Political Pressure" back to "Government & Corporate Funding" closes the loop

Interactive features:
- Hover over any node: tooltip shows a 2-sentence explanation of that variable's role
- Hover over any edge: tooltip explains the causal mechanism
- Click any node: highlight that node and all connected edges in bright orange
- Center label: "R" (Reinforcing) in large text with subtitle "Hype Reinforcement Loop"

Color scheme: Indigo nodes (#3F51B5), orange arrows (#FF7043), white canvas background
Canvas: Responsive width, 500px height

Additional visual elements:
- A circular arrow icon in the center indicating the reinforcing nature
- Small "R" badge at center of loop
- Animation: subtle pulsing of arrows in clockwise sequence (1-second interval) to visually convey the cycle direction

Implementation: vis-network with circular layout, custom tooltips, edge labels
</details>

## Reinforcing Loop 2: The Sunk Cost Escalation Loop

The second reinforcing loop exploits the sunk cost fallacy we examined in Chapter 11. Once significant investment has been made, the psychological and institutional pressure to continue increases — regardless of whether the investment is producing returns.

The sunk cost escalation loop operates as follows:

1. **Large initial investment** is committed to quantum computing
2. Lack of commercial results creates **cognitive dissonance** among investors and decision-makers
3. Cognitive dissonance produces **escalation of commitment** — "we've come too far to stop"
4. Escalation leads to **additional investment** to justify the prior spending
5. The larger total investment intensifies the cognitive dissonance when results remain absent
6. The cycle repeats with ever-larger sums at stake

This loop is particularly dangerous because it converts failure into a reason for more investment. In a rational system, absent returns would trigger withdrawal. In a sunk cost escalation loop, absent returns trigger the opposite response.

- **IBM** invested over $20 billion in quantum computing through 2025; when commercial milestones were missed, the response was to announce *larger* investment commitments
- **Google** followed the same pattern: each year without practical applications was met with expanded hiring and facility construction
- **National governments** that committed billions cannot politically afford to admit the investment may have been premature

!!! mascot-warning "Bias Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Fermi warns you">
    The sunk cost escalation loop is self-reinforcing precisely because the exit cost is perceived as higher than the continuation cost. But this perception is an illusion — sunk costs are gone regardless. The rational calculation compares only *future* costs against *future* expected returns. When you hear "we can't stop now after investing $X billion," you are hearing the sunk cost escalation loop in real time.

## Reinforcing Loop 3: The Career Incentive Loop

The third reinforcing loop operates through the career incentives of researchers, professors, and industry professionals. This loop was explored in detail in Chapter 12, but we now see it as a structural feature of the system rather than individual behavior.

The career incentive loop works as follows:

1. **Quantum computing is funded** at high levels
2. Universities create **faculty positions and graduate programs** to capture funding
3. Graduate students and postdocs become **career-committed** to quantum computing
4. Career-committed researchers produce **optimistic publications** (pessimistic results threaten funding)
5. Optimistic publications reinforce the perception that **QC is progressing**, attracting more funding
6. More funding creates more positions, and the cycle repeats

| Career Stage | Incentive to Be Optimistic | Cost of Skepticism |
|-------------|---------------------------|-------------------|
| Graduate student | Thesis funding depends on advisor's grants | Alienation from advisor, no funding |
| Postdoctoral researcher | Next position requires publication record | Being labeled "negative," fewer job offers |
| Assistant professor | Tenure requires grants and publications | Denied tenure for insufficient funding |
| Full professor | Lab funding, student recruitment | Reduced prestige, loss of research group |
| Industry researcher | Stock options, career advancement | Termination, career pivot required |

The career incentive loop creates a structural selection effect: researchers who are skeptical of quantum computing's viability either leave the field or stay silent, while those who are optimistic (or willing to appear optimistic) rise to prominence. Over time, the field's visible leadership becomes systematically biased toward optimism — not through conspiracy, but through structural selection.

## Reinforcing Loop 4: The Geopolitical Arms Race Loop

The fourth reinforcing loop operates at the level of nation-states and treats quantum computing as a strategic technology competition similar to the space race or nuclear arms race.

The geopolitical arms race loop proceeds as follows:

1. **Nation A announces** a major quantum computing investment
2. Media and policy advisors frame this as a **competitive threat** to Nation B
3. Nation B responds with its own **increased investment** to avoid falling behind
4. Nation B's investment is framed as a competitive threat to Nations A and C
5. **All nations escalate** their investments in response to each other's announcements
6. The cycle continues regardless of whether any nation is achieving practical results

This loop operates independently of the underlying physics because the "threat" is defined not by actual quantum computing capability (which remains near zero for practical applications) but by **investment levels** and **announcement rhetoric**. The United States, China, the European Union, Japan, South Korea, and Australia have all cited each other's quantum programs as justification for their own spending increases.

| Country/Region | Major QC Investment Announcement | Cited Justification |
|---------------|--------------------------------|-------------------|
| China | $15 billion National Laboratory of Quantum Information Sciences | "Quantum supremacy race" with US |
| United States | $1.2 billion National Quantum Initiative Act (2018) | Concern over Chinese quantum advances |
| European Union | €1 billion Quantum Flagship (2018) | Maintaining competitiveness with US and China |
| Japan | ¥100 billion quantum strategy (2020) | Response to US and China programs |
| Australia | AUD $111 million quantum strategy (2023) | "Not being left behind" in global race |

The geopolitical arms race loop is structurally identical to actual arms races: each participant's investment is simultaneously the cause and effect of other participants' investments. Unlike a real arms race, however, there is no underlying weapon being produced — the entire competition is driven by announcements about future capability, not demonstrated results.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    Notice the structural similarity across all four reinforcing loops: each one converts the *absence* of results into a reason for *more* investment. Hype promises future results. Sunk costs make quitting feel wasteful. Career incentives reward optimism. Geopolitics frames spending as competitive necessity. The system is structurally designed to resist correction.

## The Missing Balancing Loop: Honest Physics Assessment

In a healthy technology development ecosystem, a **balancing loop** would counteract the reinforcing loops. This balancing loop would operate through honest assessment of the physics:

1. **Research is conducted** on quantum computing
2. Results reveal **fundamental physical limitations** (decoherence, error rates, scaling barriers)
3. Honest reporting of limitations produces **reduced expectations**
4. Reduced expectations lead to **appropriate funding levels** (decreased from current levels)
5. Appropriate funding enables **focused research** on genuinely promising directions
6. The cycle stabilizes at a sustainable, evidence-based investment level

This balancing loop exists in principle but is **suppressed** in practice by the four reinforcing loops identified above. Each reinforcing loop creates incentives that weaken the balancing loop:

| Reinforcing Loop | How It Suppresses Honest Assessment |
|-----------------|-------------------------------------|
| Hype reinforcement | Media ignores negative results; journals preferentially publish positive findings |
| Sunk cost escalation | Decision-makers dismiss negative evidence as "temporary setbacks" |
| Career incentive | Researchers self-censor skeptical findings to protect careers |
| Geopolitical arms race | Governments frame honest assessment as "defeatism" or "aiding rivals" |

The suppression of the balancing loop is the most dangerous feature of the system. Without it, the reinforcing loops operate without a corrective mechanism, driving investment to levels that are increasingly disconnected from physical reality.

#### Diagram: Complete Feedback Loop System

<iframe src="../../sims/qc-feedback-loop-system/main.html" width="100%" height="600px" scrolling="no"></iframe>

<details markdown="1">
<summary>Complete QC Investment Feedback Loop System</summary>
Type: graph-model
**sim-id:** qc-feedback-loop-system<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Verb: organize, attribute, distinguish
Learning Objective: Students will organize the complete system of reinforcing and balancing feedback loops driving quantum computing investment, attribute suppression mechanisms to each reinforcing loop, and distinguish why the system lacks self-correction.

Instructional Rationale: A comprehensive network diagram is essential for the Analyze objective because students must see all four reinforcing loops and the suppressed balancing loop as an interconnected system. Viewing loops in isolation (as in text) prevents students from grasping the emergent behavior.

Layout: Central hub-and-spoke with five loop regions

Node types:
1. Shared variable nodes (large circles, indigo #3F51B5):
   - "QC Investment Level" (central hub, largest node)
   - "Research Output"
   - "Media Coverage"

2. Hype loop variables (rounded rectangles, orange #FF7043):
   - "Public Excitement"
   - "Political Pressure"

3. Sunk cost loop variables (rounded rectangles, red #E53935):
   - "Cognitive Dissonance"
   - "Escalation of Commitment"

4. Career loop variables (rounded rectangles, purple #7B1FA2):
   - "Faculty Positions"
   - "Career Commitment"
   - "Publication Optimism"

5. Geopolitical loop variables (rounded rectangles, dark blue #1565C0):
   - "National Announcements"
   - "Perceived Threat"
   - "Rival Investment"

6. Balancing loop variables (rounded rectangles, green #388E3C, dashed border):
   - "Physical Limitations Discovered"
   - "Honest Assessment"
   - "Reduced Expectations"

Edge types:
- Reinforcing arrows: solid lines, color-matched to loop, labeled "+"
- Balancing arrows: green dashed lines, labeled "−" where appropriate
- Suppression arrows: red dotted lines from reinforcing loops to balancing loop nodes, labeled "suppresses"

Interactive features:
- Click any loop label (R1, R2, R3, R4, B1): highlight only that loop's nodes and edges, dim others
- Hover over "suppresses" arrows: tooltip explains the suppression mechanism
- Toggle button: "Show/Hide Balancing Loop" to demonstrate what happens when the balancing loop is present vs. absent
- Hover over any node: tooltip with 2-sentence explanation

Center labels: "R1: Hype", "R2: Sunk Cost", "R3: Career", "R4: Geopolitical", "B1: Physics (Suppressed)"

Color scheme: Indigo primary, orange/red/purple/dark-blue for loop differentiation, green for balancing
Canvas: Responsive width, 600px height

Implementation: vis-network with groups, custom click handlers, toggle button overlay
</details>

## The Self-Sustaining Hype Cycle

When the four reinforcing loops operate simultaneously without an effective balancing loop, they produce what we call a **self-sustaining hype cycle**. This is not the same as Gartner's Hype Cycle (discussed in Chapter 10), which describes a predictable pattern of expectations over time. A self-sustaining hype cycle is a structural phenomenon in which the system generates its own evidence of progress.

The self-sustaining hype cycle has several distinctive characteristics:

- **Metric substitution:** When practical milestones are not achieved, the system creates alternative metrics that *can* show progress (qubit counts, quantum volume, gate fidelity improvements) and treats them as meaningful indicators of commercial viability
- **Goalpost migration:** When specific predictions fail, new predictions replace them without accountability for the old ones ("We said 2020, now we say 2030, but we're definitely on track")
- **Selection bias in evidence:** Only positive developments are amplified; negative results are framed as "challenges" rather than potential show-stoppers
- **Circular validation:** Researchers cite each other's optimistic assessments, creating a self-referential evidence base

The result is a system that appears, from the inside, to be making steady progress — even when the fundamental physics barriers described in Chapter 5 remain unresolved.

!!! mascot-tip "Fermi's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Fermi shares a tip">
    When evaluating any technology hype cycle, look for these four structural warning signs: (1) Metrics that track *inputs* rather than *outputs* (papers published rather than problems solved). (2) Timelines that consistently shift forward. (3) Escalating investment without escalating demonstrated capability. (4) Criticism met with "you just don't understand" rather than data. If all four are present, you're likely inside a self-sustaining hype cycle.

## Leverage Points: Where Can the System Be Changed?

Donella Meadows identified twelve leverage points in complex systems, ranked from least to most effective. For the quantum computing investment system, the most relevant leverage points are:

| Leverage Point (Meadows Ranking) | Application to QC | Difficulty | Potential Impact |
|--------------------------------|-------------------|------------|-----------------|
| 12. Constants/parameters (weakest) | Adjusting individual grant amounts | Low | Low — system absorbs small changes |
| 9. Delays | Requiring longer time horizons for ROI assessment | Medium | Medium — slows but doesn't stop loops |
| 8. Balancing feedback loops | Strengthening honest physics assessment | High | High — directly counteracts reinforcing loops |
| 6. Information flows | Making failure data as visible as success data | Medium | High — changes what actors see |
| 4. Rules of the system | Changing publication incentives, funding criteria | High | Very high — restructures actor behavior |
| 2. Goals of the system | Shifting from "quantum supremacy" to "commercial viability" | Very high | Transformative — redefines success |

The most effective interventions target **information flows** and **system rules** because they can be implemented without requiring the entire system to change at once.

### Information Flow Interventions

Information flow interventions make currently invisible data visible to decision-makers:

- **Mandatory failure reporting:** Require funded researchers to publish negative results with the same rigor as positive results
- **Prediction tracking:** Maintain public databases of past quantum computing predictions alongside actual outcomes (as discussed in Chapter 10)
- **Commercial milestone auditing:** Independent verification of claims about "quantum advantage" or "quantum utility"
- **Investment return transparency:** Public reporting of actual commercial revenue from quantum computing vs. total investment

### System Rule Interventions

System rule interventions change the incentive structure that drives actor behavior:

- **Funding tied to milestones:** Require demonstrated commercial viability benchmarks before releasing additional funding tranches
- **Tenure criteria reform:** Value accurate prediction and honest assessment alongside publication volume
- **Investor disclosure requirements:** Require quantum computing companies to report metrics comparable to classical computing alternatives
- **Government audit cycles:** Regular independent assessment of whether national quantum programs are achieving stated objectives

## Applying Systems Thinking Beyond Quantum Computing

The four reinforcing loops and one suppressed balancing loop we identified in quantum computing are not unique to this field. The same structural pattern appears in other technology hype cycles:

| Technology | Hype Loop | Sunk Cost Loop | Career Loop | Geopolitical Loop | Balancing Loop Status |
|-----------|-----------|---------------|-------------|-------------------|----------------------|
| Quantum computing | Strong | Strong | Strong | Strong | Suppressed |
| Blockchain/crypto (2017-2022) | Strong | Strong | Moderate | Weak | Partially active |
| Self-driving cars (2015-2025) | Moderate | Strong | Moderate | Weak | Partially active |
| Theranos (2013-2018) | Strong | Strong | Weak | None | Completely suppressed |
| AGI/superintelligence (2023-) | Strong | Moderate | Strong | Moderate | Weakly active |

The framework allows us to predict that technologies with all four reinforcing loops active and a suppressed balancing loop will experience the longest and most expensive hype cycles. Quantum computing scores the maximum on this scale, suggesting its correction may be particularly dramatic when it eventually occurs.

#### Diagram: Leverage Point Explorer

<iframe src="../../sims/leverage-point-explorer/main.html" width="100%" height="550px" scrolling="no"></iframe>

<details markdown="1">
<summary>Leverage Point Explorer MicroSim</summary>
Type: microsim
**sim-id:** leverage-point-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Verb: assess, prioritize, recommend
Learning Objective: Students will assess the relative effectiveness of different interventions at various leverage points in the quantum computing investment system and prioritize which interventions would most effectively break the self-sustaining hype cycle.

Instructional Rationale: An interactive simulation is appropriate for the Evaluate objective because students must weigh trade-offs between intervention difficulty and impact, then make justified recommendations. A static table cannot convey how system behavior changes when different leverage points are activated.

Canvas layout:
- Left panel (65% width): System diagram showing the four reinforcing loops and one balancing loop as simplified icons connected to a central "QC Investment" node
- Right panel (35% width): Control panel with intervention sliders and outcome display

Interactive controls:
- Six sliders (one per leverage point from the table above), range 0-100%:
  - "Adjust Grant Amounts" (Parameter change)
  - "Extend ROI Timelines" (Delay)
  - "Strengthen Physics Assessment" (Balancing loop)
  - "Increase Failure Visibility" (Information flow)
  - "Reform Funding Criteria" (System rules)
  - "Redefine Success Metric" (System goals)
- Each slider labeled with Meadows ranking number
- "Reset All" button

Visual behavior:
- As sliders are adjusted, the reinforcing loop arrows in the left panel change thickness (thinner = weaker) and the balancing loop arrow changes from dashed to solid and grows thicker
- A "System Health Score" meter (0-100) at bottom of left panel shows overall system balance
- Color gradient: red (all reinforcing, no balancing) through yellow to green (balanced system)
- When System Health Score exceeds 60, the "QC Investment" node transitions from red to amber to green

Output display (right panel):
- Bar chart showing "Projected Hype Duration (years)" that decreases as effective interventions are applied
- Text readout: "Strongest intervention: [name]" updates dynamically
- Difficulty vs. Impact scatter plot for all six interventions

Default parameters:
- All sliders at 0% (current state)
- System Health Score: 15/100
- Projected Hype Duration: 15+ years

Data Visibility Requirements:
- Each slider adjustment shows immediate numeric change in affected loop strength
- Tooltip on each slider shows the mechanism: "How this intervention works: [explanation]"
- Running log at bottom: "Intervention applied: [name] at [X]% → [loop name] reduced by [Y]%"

Background: aliceblue
Canvas: Responsive width, 550px height

Implementation: p5.js with slider controls, dynamic arrow rendering, bar chart overlay
</details>

## How Biases and Loops Interact

Systems thinking and cognitive biases (Chapter 11) are not separate phenomena — they are deeply interconnected. Cognitive biases operate at the individual level, while feedback loops operate at the system level, but each reinforces the other.

Consider how confirmation bias interacts with the hype reinforcement loop:

1. The hype loop produces a steady stream of optimistic media coverage
2. Individuals with confirmation bias preferentially absorb this optimistic coverage
3. Their confirmed beliefs lead them to make optimistic statements and investment decisions
4. These decisions feed back into the hype loop, amplifying it further

This interaction means that interventions targeting only individual biases (e.g., debiasing training) will be ineffective if the system structure remains unchanged. Similarly, interventions targeting only system structure will be undermined if individual biases cause actors to misinterpret the new information. Effective intervention requires addressing both levels simultaneously.

| Cognitive Bias | Interacting Loop | Combined Effect |
|---------------|-----------------|-----------------|
| Confirmation bias | Hype reinforcement | Individuals filter for optimistic signals, amplifying the loop |
| Sunk cost fallacy | Sunk cost escalation | Individual loss aversion mirrors institutional escalation |
| Authority bias | Career incentive | Optimistic leaders influence juniors, reinforcing career selection |
| Bandwagon effect | Geopolitical arms race | Nations follow leaders, intensifying competitive dynamics |
| Groupthink | All loops | Suppresses internal dissent that could activate the balancing loop |

## Breaking the Hype Loop: A Systems Approach

Given the analysis above, what would it take to break the self-sustaining quantum computing hype cycle? A systems approach suggests that effective intervention requires weakening at least two reinforcing loops simultaneously while strengthening the balancing loop. Single-point interventions are absorbed by the system's remaining loops.

A practical program for breaking the hype loop would include three simultaneous interventions:

**Intervention 1: Restore the Balancing Loop**

Create an independent, publicly funded assessment body (analogous to the Congressional Budget Office for fiscal policy) with the mandate and resources to evaluate quantum computing progress against commercial viability benchmarks. Staff it with physicists, engineers, and economists who have no financial stake in quantum computing's success.

**Intervention 2: Weaken the Hype Reinforcement Loop**

Implement mandatory prediction tracking for all publicly funded quantum computing research. Require grant applicants to state specific, falsifiable predictions with timelines, and publish annual reconciliation of past predictions against actual results.

**Intervention 3: Weaken the Career Incentive Loop**

Reform academic incentive structures to reward accurate forecasting alongside publication volume. Create career paths for honest assessment within quantum computing research programs, so that researchers who identify genuine limitations are rewarded rather than penalized.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    Notice that none of these interventions requires anyone to "give up" on quantum computing. They simply introduce accountability mechanisms that distinguish genuine progress from self-reinforcing hype. If quantum computing truly is making progress toward commercial viability, these interventions will confirm it. If it isn't, they will reveal it. The resistance to implementing such measures is itself evidence that the system's beneficiaries fear what honest assessment would reveal.

## Systems Thinking as a Transferable Analytical Skill

The systems thinking framework we applied to quantum computing is transferable to any complex technology investment scenario. The analytical steps are:

1. **Identify the reinforcing loops:** What self-amplifying dynamics drive investment or enthusiasm?
2. **Identify the balancing loops:** What mechanisms should provide correction or constraint?
3. **Assess loop strength:** Which loops are dominant? Which are suppressed?
4. **Find leverage points:** Where could interventions most effectively change system behavior?
5. **Design multi-point interventions:** Target multiple loops simultaneously to prevent the system from compensating

This five-step framework equips you to analyze not just quantum computing, but any technology investment that may be driven more by systemic dynamics than by underlying technical merit.

## Chapter Summary

!!! mascot-celebration "Excellent Investigative Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Fermi celebrates">
    You've now mastered systems thinking applied to technology hype analysis. You can construct causal loop diagrams, identify reinforcing and balancing feedback loops, and locate leverage points for effective intervention. Most importantly, you understand that the quantum computing investment ecosystem perpetuates itself not through any single actor's dishonesty, but through structural dynamics that reward optimism and suppress correction. That's a powerful analytical framework that extends far beyond quantum computing. Outstanding work, fellow investigator!

## Review Questions

??? question "Question 1: What distinguishes a reinforcing loop from a balancing loop in a causal loop diagram?"
    A reinforcing loop contains an even number of negative (opposite-direction) arrows, including zero. It amplifies change — when a variable increases, the loop drives it to increase further. A balancing loop contains an odd number of negative arrows. It resists change and drives the system toward equilibrium. In the quantum computing context, the four investment loops are all reinforcing (amplifying hype), while the honest physics assessment loop is balancing (correcting toward reality) but suppressed.

??? question "Question 2: Explain how the sunk cost escalation loop converts failure into a reason for more investment."
    The sunk cost escalation loop operates through cognitive dissonance: when large investments fail to produce commercial results, decision-makers experience psychological discomfort from acknowledging the loss. Rather than accepting that sunk costs are irrecoverable, they escalate commitment by investing more — reasoning that additional investment will eventually vindicate the original decision. This creates a reinforcing loop where larger cumulative investments produce greater pressure to continue, regardless of whether the underlying physics supports the possibility of success.

??? question "Question 3: Why is the geopolitical arms race loop particularly resistant to correction?"
    The geopolitical arms race loop is resistant to correction because each nation's investment is justified by other nations' investments, creating a self-referential system with no external anchor to physical reality. No individual nation can unilaterally reduce investment without appearing to "fall behind" in the perceived race. Additionally, the loop operates on the basis of announced investment levels and rhetoric rather than demonstrated capability, so it continues even when no participant is achieving practical results. Breaking this loop requires multilateral coordination — analogous to arms control agreements — which is difficult to achieve in a competitive international environment.

??? question "Question 4: Identify two leverage points from Meadows' framework that would most effectively break the quantum computing hype cycle, and explain why they are more effective than simply reducing funding amounts."
    The two most effective leverage points are information flows (Meadows rank 6) and rules of the system (Meadows rank 4). Making failure data as visible as success data (information flow) changes what all actors in the system see, weakening the hype reinforcement loop by removing the asymmetry between positive and negative reporting. Changing publication incentives and funding criteria (system rules) restructures actor behavior by making honest assessment rewarding rather than penalizing. These are more effective than simply reducing funding amounts (Meadows rank 12, constants/parameters) because parameter changes are easily absorbed by the system — reduce one funding source and another fills the gap. Structural changes to information and rules alter the dynamics that produce the behavior, rather than merely adjusting the behavior's magnitude.

??? question "Question 5: Apply the five-step systems thinking framework to a different technology (e.g., self-driving cars or blockchain). Identify at least two reinforcing loops and one balancing loop."
    For self-driving cars: **Reinforcing Loop 1 (Hype):** Investment → demo videos → media coverage → public expectation → more investment. **Reinforcing Loop 2 (Sunk Cost):** Billions invested → pressure to continue → pivot to "robotaxis" narrative → more investment. **Balancing Loop:** Real-world testing → accident data and edge case discovery → reduced expectations → more cautious timelines. Unlike quantum computing, the balancing loop for self-driving cars is partially active because accidents are publicly visible and generate regulatory attention. This is why self-driving car timelines have been more openly revised (from "2020" predictions to "limited geofenced operations"), whereas quantum computing timelines continue to be aggressively optimistic despite less empirical feedback.
