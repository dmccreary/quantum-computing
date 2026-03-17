---
title: Investment Risk Analysis
description: Economic frameworks for evaluating quantum computing as an investment, including ROI, NPV, expected value, and opportunity cost applied to the QC industry
generated_by: claude skill chapter-content-generator
date: 2026-03-16 23:58:03
version: 0.05
---

# Investment Risk Analysis

## Summary

This chapter provides the economic framework for evaluating quantum computing as an investment. We cover return on investment, net present value, risk-adjusted returns, expected value calculations, and opportunity cost analysis. We then apply these frameworks to the quantum computing industry: over $100 billion invested with zero revenue generated, venture capital funding frenzies, corporate R&D burn rates, government funding pressure, revenue model problems, absent customer demand, and the harsh reality that classical alternatives remain cheaper. Students will be able to calculate expected value for quantum computing ventures and compare them against alternative investments.

## Concepts Covered

This chapter covers the following 19 concepts from the learning graph:

1. Return on Investment
2. Net Present Value
3. Risk-Adjusted Returns
4. Expected Value Framework
5. Probability of Success
6. Opportunity Cost
7. Sunk Cost Trap
8. Total $100B+ Invested
9. Zero Revenue Generated
10. VC Funding Frenzy
11. Corporate R&D Burn Rate
12. Government Funding Pressure
13. Revenue Model Problem
14. Who Pays for QC?
15. Customer Demand Evidence
16. No Paying Customers
17. Classical Alternatives Cheaper
18. Cost Per Computation
19. Total Cost of Ownership

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: What Is Quantum Computing?](../01-what-is-quantum-computing/index.md)
- [Chapter 4: The Catalog of Overly Optimistic Claims](../04-catalog-of-optimistic-claims/index.md)
- [Chapter 5: The Physics Barriers and Hardware Platforms](../05-physics-barriers-and-hardware/index.md)

---

!!! mascot-welcome "Fermi Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Fermi welcomes you">
    Welcome, fellow investigators! We've spent several chapters examining whether quantum computing *works*. Now we ask the question that should have come first: does the investment *make sense*? Over $100 billion has poured into this field with zero commercial revenue to show for it. Let's apply the tools of financial analysis to find out whether the numbers add up. But does the math check out? Let's find out!

## Learning Objectives

After completing this chapter, you will be able to:

- Define and calculate return on investment (ROI), net present value (NPV), and risk-adjusted returns for technology investments
- Apply the expected value framework to estimate the economic viability of quantum computing ventures
- Identify the sunk cost trap and explain how it sustains investment in technologies with uncertain payoffs
- Analyze the quantum computing industry's financial performance: $100B+ invested against zero revenue
- Evaluate the revenue model problem and the absence of paying customers for quantum computing
- Compare the cost per computation and total cost of ownership between quantum and classical systems

## Part I: The Financial Toolkit

Before we can evaluate quantum computing as an investment, we need a shared vocabulary of financial analysis. These are not exotic tools — they are the same frameworks that any competent venture capitalist, corporate CFO, or government program officer should apply before committing capital.

### Return on Investment

Return on investment (ROI) is the most fundamental measure of whether an investment has been worthwhile. The formula is straightforward:

$$
ROI = \frac{\text{Net Profit}}{\text{Total Investment}} \times 100\%
$$

A positive ROI means you made money; a negative ROI means you lost it. For the quantum computing industry as a whole, this calculation is simple: over $100 billion invested, zero dollars of commercial revenue generated. The industry-wide ROI is $-100\%$. Every dollar invested is a dollar lost.

This statement requires careful qualification. Proponents will argue that the investment is "early stage" and that returns will materialize eventually. That may be true — but ROI is measured on actual outcomes, not projections. And the quantum computing industry has been "early stage" for over four decades.

| Investment Category | Approximate Investment | Revenue Generated | ROI |
|---|---|---|---|
| Government grants (US, EU, China) | ~$40B | $0 | -100% |
| Corporate R&D (IBM, Google, Microsoft) | ~$30B | $0 | -100% |
| Venture capital (IonQ, Rigetti, PsiQuantum, etc.) | ~$15B | $0 | -100% |
| SPAC and public market capital | ~$10B | $0 | -100% |
| Other (academic, defense, misc.) | ~$10B | $0 | -100% |
| **Total** | **~$105B** | **$0** | **-100%** |

To be precise, some quantum computing companies report nominal revenue — D-Wave reports approximately $8-10 million per year, and a few cloud access providers charge small fees. But this revenue is negligible relative to the investment, does not cover operating costs, and largely consists of research grants repackaged as commercial revenue. No company has demonstrated a profitable quantum computing product or service.

### Net Present Value

Net present value (NPV) extends simple ROI by accounting for the time value of money. A dollar received ten years from now is worth less than a dollar today, because that dollar could have been earning returns elsewhere in the meantime.

$$
NPV = \sum_{t=0}^{T} \frac{C_t}{(1 + r)^t}
$$

Here $C_t$ represents the cash flow in year $t$ (negative for investments, positive for returns), $r$ is the discount rate, and $T$ is the time horizon. For technology investments, discount rates typically range from 10% to 30%, reflecting the risk premium investors demand for uncertain outcomes.

The NPV calculation is devastating for quantum computing. Consider a hypothetical $1 billion investment today with an optimistic assumption that it generates $5 billion in revenue starting in year 15:

| Year | Cash Flow | PV at 15% Discount | PV at 25% Discount |
|---|---|---|---|
| 0 | -$1,000M | -$1,000M | -$1,000M |
| 1-14 | $0 | $0 | $0 |
| 15 | +$5,000M | +$730M | +$171M |
| **NPV** | | **-$270M** | **-$829M** |

Even with a fivefold return after 15 years, the investment has a negative NPV at typical venture capital discount rates. The time value of money is a silent killer for long-horizon technology bets.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    Notice what NPV reveals: even if quantum computing eventually "works," the returns may arrive too late to justify the investment. A technology that takes 20 years to commercialize must generate *extraordinary* returns to overcome discounting. The longer the timeline, the more spectacular the payoff must be — and the more unlikely it becomes.

### Risk-Adjusted Returns

Raw returns tell only part of the story. Sophisticated investors care about risk-adjusted returns — how much return you receive per unit of risk taken. The standard framework for this is the Sharpe ratio, but for technology investments, a more intuitive approach is to compare the expected return against what the same capital could earn in lower-risk alternatives.

Risk-adjusted return analysis requires estimating three quantities:

- **Probability of success** — what is the likelihood this investment pays off?
- **Magnitude of payoff** — if it succeeds, how large is the return?
- **Magnitude of loss** — if it fails, how much do you lose?

For most technology investments, the loss scenario is straightforward: you lose your entire investment. The question is whether the probability-weighted upside exceeds the probability-weighted downside.

### The Expected Value Framework

Expected value (EV) combines probability and magnitude into a single decision metric:

$$
EV = P(\text{success}) \times \text{Payoff} + P(\text{failure}) \times \text{Loss}
$$

Since $P(\text{failure}) = 1 - P(\text{success})$ and Loss is typically $-\text{Investment}$, this simplifies to:

$$
EV = P(s) \times R - (1 - P(s)) \times C
$$

where $R$ is the return if successful and $C$ is the total cost. An investment is rational only if $EV > 0$.

Let's apply this to a hypothetical quantum computing investment. Consider a $100 million investment with a potential $2 billion payoff:

| Scenario | P(success) | Payoff | Loss | Expected Value |
|---|---|---|---|---|
| Optimistic | 20% | $2B | -$100M | +$320M |
| Moderate | 5% | $2B | -$100M | +$5M |
| Realistic | 1% | $2B | -$100M | -$79M |
| Pessimistic | 0.1% | $2B | -$100M | -$97.8M |

The expected value is exquisitely sensitive to the probability of success. At 20% — the kind of number you might hear in an optimistic pitch deck — the investment looks compelling. At 1% — which, as we will argue, is closer to the actual probability of commercially viable fault-tolerant quantum computing within the next decade — the expected value is deeply negative.

#### Diagram: Expected Value Calculator

<iframe src="../../sims/qc-expected-value-calculator/main.html" width="100%" height="600" scrolling="no"></iframe>

<details markdown="1">
<summary>Quantum Computing Investment Expected Value Calculator</summary>
Type: microsim
**sim-id:** qc-expected-value-calculator<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning Objective:** Apply the expected value framework to evaluate quantum computing investments by adjusting probability of success, payoff magnitude, and investment cost (Bloom's Level 3: Apply — calculate, use, demonstrate).

**Instructional Rationale:** Parameter exploration is appropriate because the Apply/calculate objective requires learners to manipulate variables and observe how expected value changes. Sliders provide immediate feedback and build intuition about the sensitivity of EV to probability estimates.

**Canvas Layout:**
- Top section: Three horizontal sliders with labeled values
- Middle section: Large expected value display (green if positive, red if negative)
- Bottom section: Bar chart comparing the probability-weighted upside vs probability-weighted downside

**Interactive Controls:**
- Slider 1: Probability of success (0.1% to 50%, default 5%, logarithmic scale)
- Slider 2: Payoff if successful ($100M to $50B, default $2B, logarithmic scale)
- Slider 3: Investment cost ($10M to $5B, default $100M, logarithmic scale)
- Reset button to restore defaults
- Toggle button: "Show breakeven probability" — draws a vertical line on the slider showing the minimum probability needed for EV = 0

**Visual Elements:**
- Large numeric display of calculated EV in center
- Stacked horizontal bar chart: green segment for probability-weighted upside, red segment for probability-weighted downside
- Breakeven probability displayed as text and marked on slider
- Background: aliceblue

**Behavior:**
- EV recalculates in real time as sliders move
- Color of EV display transitions smoothly from red (negative) to green (positive)
- Breakeven probability updates: $P_{break} = \frac{C}{R + C}$
- Pre-set scenario buttons: "Optimistic VC," "Moderate Analyst," "Skeptical Physicist"

**Responsive Design:** Canvas resizes with window; sliders use percentage-based widths.

Implementation: p5.js with DOM sliders and canvas rendering
</details>

### Probability of Success

The entire expected value calculation hinges on one number: the probability of success. This is where quantum computing investment analysis becomes contentious, because proponents and skeptics disagree by orders of magnitude.

Estimating the probability that fault-tolerant, commercially viable quantum computing arrives within a given timeframe requires assessing multiple independent breakthroughs that must all succeed simultaneously. As we discussed in Chapter 5, the required breakthroughs include:

- Error rates must drop by a factor of 100 or more
- Qubit counts must increase by a factor of 1,000 or more
- Coherence times must improve by a factor of 100 or more
- Connectivity must approach all-to-all for useful algorithms
- Cryogenic systems must scale to support millions of qubits
- New algorithms must be discovered for commercially relevant problems
- Costs must drop by orders of magnitude

If each breakthrough has independent probability $p_i$, the joint probability is:

$$
P(\text{all succeed}) = \prod_{i=1}^{n} p_i
$$

Even if each individual breakthrough has a generous 50% probability of succeeding within 15 years, the joint probability of all seven succeeding is $0.5^7 = 0.78\%$. If the individual probabilities are 30% each, the joint probability drops to $0.3^7 = 0.02\%$.

!!! mascot-warning "Bias Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Fermi warns you">
    Watch for the conjunction fallacy here. Investors routinely estimate the probability of each breakthrough separately and then assume the overall probability is close to the individual estimates. "There's a 50% chance we'll fix error rates" does *not* mean there's a 50% chance quantum computing becomes viable. You have to multiply the probabilities, and multiplication makes small numbers very small very fast.

### Opportunity Cost

Opportunity cost is what you give up by choosing one investment over another. Every dollar spent on quantum computing is a dollar not spent on classical AI hardware, quantum sensors, advanced batteries, fusion energy research, or simply invested in index funds.

This concept is critical because quantum computing proponents rarely frame the investment decision comparatively. The relevant question is not "Is quantum computing worth investing in?" but rather "Is quantum computing worth investing in *compared to the alternatives*?"

| Alternative Investment | 10-Year Expected ROI | Risk Level | Current Revenue |
|---|---|---|---|
| Classical AI/GPU hardware | 200-500% | Moderate | $100B+/year |
| Quantum sensors | 50-200% | Low-Moderate | $2B+/year |
| Advanced batteries | 100-300% | Moderate | $50B+/year |
| Index fund (S&P 500) | 80-120% | Low | N/A |
| Quantum computing | Unknown (likely negative) | Very High | ~$0/year |

When opportunity cost is included in the analysis, the case for quantum computing investment becomes extremely difficult to defend for any investor with fiduciary responsibilities.

### The Sunk Cost Trap

The sunk cost fallacy occurs when past expenditures — which are irrecoverable — are used to justify future expenditures. "We've already invested $10 billion, so we can't stop now" is a textbook example. The rational response is: the $10 billion is gone regardless of what you do next. The only question that matters is whether the *next* dollar of investment has a positive expected value.

The quantum computing industry is deeply susceptible to the sunk cost trap for several reasons:

- Governments have made public commitments and cannot easily admit failure
- Corporate executives who championed QC programs face career consequences if they pull the plug
- Researchers whose careers depend on continued funding have strong incentives to project optimism
- The narrative of "we're so close" creates perpetual justification for "just one more round"

The sunk cost trap is reinforced by the other cognitive biases we will examine in Chapter 9. For now, note that every rational investment framework — ROI, NPV, expected value — evaluates *future* costs and benefits only. Past spending is irrelevant to the forward-looking decision.

## Part II: The Quantum Computing Ledger

Armed with our financial toolkit, let's examine the quantum computing industry's actual financial performance. The numbers tell a stark story.

### $100 Billion and Counting

By conservative estimates, global investment in quantum computing has exceeded $100 billion since the early 2000s, with the pace accelerating dramatically after 2018. This figure includes government research grants, corporate R&D expenditures, venture capital, SPAC mergers, and public market capital raises.

The investment has been distributed across several major categories:

- **Government funding:** The United States allocated over $1.2 billion through the National Quantum Initiative Act of 2018 alone. China has reportedly invested over $15 billion through state programs. The European Union committed €1 billion through its Quantum Flagship initiative. Combined global government spending likely exceeds $40 billion.
- **Corporate R&D:** IBM, Google, Microsoft, Amazon, and Intel collectively spend an estimated $3-5 billion per year on quantum computing research. Over a decade, this totals $30-50 billion.
- **Venture capital and SPACs:** Startups including IonQ, Rigetti, PsiQuantum, Xanadu, Quantinuum, and dozens of smaller players have raised over $15 billion in private and public capital.

This money has produced real scientific progress: better qubits, longer coherence times, improved error rates. What it has not produced is a single commercially viable product or service.

### Zero Revenue Generated

The quantum computing industry's most striking financial characteristic is the near-complete absence of commercial revenue. No company has shipped a quantum computing product that a customer purchased because it solved a problem cheaper, faster, or better than classical alternatives.

!!! example "The Revenue Illusion"
    Some companies report revenue figures that bear scrutiny. D-Wave Systems reports approximately $8-10 million in annual revenue, but this largely consists of hardware sales to research labs and government agencies exploring the technology — not commercial deployments solving real business problems. IBM Quantum offers cloud access for a fee, but the revenue is negligible and the service is used primarily for research and education, not production workloads. IonQ reported $28 million in revenue in 2023, but most of this came from research partnerships and government contracts, not from customers paying for quantum computational advantage.

The gap between investment and revenue is not merely large — it is total. In venture capital, this pattern is recognizable: it describes a technology that has not yet found product-market fit. The question is whether product-market fit is achievable given the physics constraints we examined in earlier chapters.

### The VC Funding Frenzy

Venture capital investment in quantum computing peaked between 2019 and 2022, driven by a confluence of factors that had little to do with the technology's actual readiness:

- Google's 2019 "quantum supremacy" announcement generated enormous media coverage
- Low interest rates created a "search for yield" that drove capital into speculative bets
- SPAC (Special Purpose Acquisition Company) vehicles offered a path to public markets without the scrutiny of a traditional IPO
- FOMO — fear of missing out on "the next big thing" — drove herd behavior among investors

The results were predictable. IonQ went public via SPAC in 2021 at a valuation of $2 billion with virtually no revenue. Rigetti followed a similar path. Both stocks subsequently declined by 60-80% from their highs. PsiQuantum raised $665 million at a $3.15 billion valuation while still years away from a working device.

| Company | Capital Raised | Peak Valuation | Revenue (2023) | Revenue/Valuation |
|---|---|---|---|---|
| IonQ | ~$750M | $2.8B | ~$28M | 1.0% |
| Rigetti | ~$350M | $1.5B | ~$15M | 1.0% |
| D-Wave | ~$400M | $1.6B | ~$8M | 0.5% |
| PsiQuantum | ~$665M | $3.15B | ~$0 | 0% |
| Xanadu | ~$250M | ~$1B | ~$0 | 0% |

These valuation-to-revenue ratios are extreme even by technology startup standards, where 10-20x revenue multiples are considered aggressive. Several of these companies trade at 100x+ revenue or have no revenue at all.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    Compare these numbers to the classical computing industry at similar stages. When Intel went public in 1971, it had $9 million in revenue. When NVIDIA went public in 1999, it had $158 million in revenue. Even early-stage tech companies typically demonstrate *some* product-market fit before reaching billion-dollar valuations. The quantum computing startups reaching these valuations with zero or negligible revenue represent a fundamentally different — and far riskier — investment thesis.

### Corporate R&D Burn Rate

Large technology companies have treated quantum computing as a strategic research investment, allocating billions without expecting near-term returns. This is legitimate for basic research — but the question is whether the framing has shifted from "basic research" to "future business," creating expectations that the physics cannot support.

IBM has been the most aggressive in creating a commercialization narrative, publishing roadmaps with specific qubit targets and timelines. Google has invested heavily in its Sycamore and subsequent processors. Microsoft has pursued the topological qubit approach for over two decades with no confirmed topological qubit to show for it.

The burn rate for corporate quantum computing programs is estimated at $3-5 billion per year across the major players. At this rate, the accumulated corporate investment will exceed $50 billion by 2030 — still with no clear path to revenue that exceeds costs.

### Government Funding Pressure

Government investment in quantum computing is driven by a distinct set of incentives that often diverge from economic rationality:

- **National security framing:** The argument that quantum computing could break encryption creates urgency regardless of whether the threat is imminent or even plausible
- **Geopolitical competition:** When China announces a quantum initiative, the US feels compelled to match it — and vice versa — creating an arms race dynamic
- **Political constituencies:** Quantum computing research creates high-prestige academic positions and laboratory jobs in politically important districts
- **Narrative momentum:** Once a government has announced a "National Quantum Initiative," admitting it was premature becomes politically impossible

The US National Quantum Initiative Act authorized $1.2 billion over five years. The European Quantum Flagship committed €1 billion. China's spending is estimated at $15 billion or more. These investments are justified primarily by security and competitiveness arguments, not by economic return analysis — which, as we have seen, would not support the spending.

#### Diagram: Quantum Computing Investment Flow

<iframe src="../../sims/qc-investment-flow/main.html" width="100%" height="600" scrolling="no"></iframe>

<details markdown="1">
<summary>Quantum Computing Investment Flow Sankey Diagram</summary>
Type: chart
**sim-id:** qc-investment-flow<br/>
**Library:** Plotly<br/>
**Status:** Specified

**Learning Objective:** Analyze the flow of capital through the quantum computing ecosystem, identifying where money enters, where it goes, and what (if any) revenue it produces (Bloom's Level 4: Analyze — examine, deconstruct, distinguish).

**Instructional Rationale:** A Sankey diagram is appropriate because it enables learners to trace capital flows visually and see proportions at each stage. The width of each flow encodes magnitude, making it immediately apparent that the "revenue" output is vanishingly thin compared to the "investment" inputs.

**Chart Type:** Sankey diagram (flow diagram with proportional widths)

**Data Flows:**
Left (Sources):
- Government grants: $40B (blue)
- Corporate R&D: $30B (indigo)
- Venture capital: $15B (green)
- SPAC/public market: $10B (orange)
- Other: $10B (gray)

Middle (Destinations):
- Hardware research: $45B
- Algorithm research: $15B
- Software/tools: $10B
- Cloud infrastructure: $10B
- Operations/overhead: $15B
- Salaries and talent: $10B

Right (Outputs):
- Scientific papers: (qualitative indicator)
- Patents: (qualitative indicator)
- Revenue: $0.05B (barely visible line)

**Interactive Features:**
- Hover over flows to see exact dollar amounts
- Click a node to highlight all connected flows
- Toggle between "All time" and "Last 5 years" views

**Visual Style:**
- Flow widths proportional to dollar amounts
- Color coding by source type
- Revenue output deliberately thin to emphasize the gap
- Background: aliceblue

**Responsive Design:** Chart resizes with window width; maintains proportions.

Implementation: Plotly.js Sankey trace
</details>

## Part III: The Revenue Problem

### Who Pays for Quantum Computing?

Every viable technology must eventually answer a simple question: who is the customer, and what are they willing to pay? For quantum computing, this question remains unanswered after four decades.

The hypothetical customer categories and their problems:

- **Financial services:** Portfolio optimization, risk modeling. But classical algorithms and hardware already handle these problems at acceptable speed and cost. No bank has identified a specific problem that quantum computing solves better than their existing infrastructure.
- **Pharmaceutical companies:** Drug discovery and molecular simulation. But the molecules of pharmacological interest are too large for near-term quantum computers, and classical methods continue to improve. No pharmaceutical company has produced a drug candidate using quantum computing.
- **Logistics companies:** Route optimization. But classical optimization algorithms already solve these problems at scale. FedEx, UPS, and Amazon operate trillion-dollar logistics networks without quantum computers.
- **Cybersecurity:** Breaking or strengthening encryption. But post-quantum cryptography already addresses the defensive side, and the offensive capability remains decades away (if it arrives at all).

!!! mascot-tip "Fermi's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Fermi shares a tip">
    When evaluating any technology investment, always ask three questions in this order: (1) Who is the specific customer? (2) What specific problem does this solve for them? (3) Why can't they solve it with existing tools? If the answers are vague — "financial services," "optimization," "it will be better" — that is a red flag. Specificity is the hallmark of real product-market fit.

### Customer Demand Evidence

The evidence for customer demand is thin. Survey data from consulting firms shows that many large enterprises are "exploring" quantum computing — but exploration is not demand. When examined closely, most "quantum computing adoption" consists of:

- Running small experiments on cloud-accessible quantum devices (academic curiosity, not commercial deployment)
- Hiring one or two quantum computing researchers to monitor the field (hedge strategy, not commitment)
- Participating in vendor-sponsored proof-of-concept programs (free or heavily subsidized, not market-rate purchasing)

None of these activities constitutes the kind of paying customer demand that validates a technology's commercial viability.

### No Paying Customers

The absence of paying customers is the single most important data point in the quantum computing investment analysis. After four decades of development and over $100 billion in investment, there is no customer anywhere in the world who pays for quantum computing because it provides computational value that exceeds its cost.

This is not a timing issue — it is a product-market fit issue. Classical computing had paying customers within years of the first commercial machines. The internet had paying customers almost immediately. Even fusion energy research, another long-timeline physics challenge, can point to the magnetic confinement plasma physics that enables the global tokamak research program as delivering genuine scientific value that sustains funding.

Quantum computing cannot point to a single commercial workload that a customer has chosen to run on a quantum computer instead of a classical one because the quantum solution was better or cheaper.

### Classical Alternatives Are Cheaper

The fundamental economic challenge for quantum computing is that classical computers continue to improve. Moore's Law may be slowing for transistor density, but specialized hardware — GPUs, TPUs, FPGAs, application-specific integrated circuits (ASICs) — continues to deliver dramatic improvements for the workloads that quantum computing targets.

| Workload | Classical Solution | Cost (2025) | QC Equivalent | QC Cost (est.) |
|---|---|---|---|---|
| Molecular simulation (small) | GPU cluster + DFT | $10K/run | 100-qubit NISQ | $100K+/run |
| Portfolio optimization | Classical solver (CPLEX) | $50K/year | D-Wave access | $500K+/year |
| Factoring RSA-2048 | Not possible (good!) | N/A | Not possible (yet) | N/A |
| Machine learning training | GPU cluster (H100s) | $100K/run | No QC advantage | N/A |
| Logistics routing | OR solver + heuristics | $10K/year | No QC advantage | N/A |

For every workload where quantum computing has been proposed as a solution, the classical alternative is currently cheaper by one to three orders of magnitude — and the classical solution actually works.

### Cost Per Computation

The cost per computation metric provides the most direct comparison between quantum and classical systems. For classical computing, the cost per floating-point operation has dropped by roughly 10x every 5-7 years for decades, driven by Moore's Law, manufacturing scale, and architectural innovation.

For quantum computing, the relevant metric is cost per logical gate operation on an error-corrected qubit. Current estimates suggest:

- **Classical CPU:** ~$10^{-15}$ per FLOP (commodity cloud pricing)
- **Classical GPU:** ~$10^{-16}$ per FLOP for parallel workloads
- **Quantum (current NISQ):** ~$10^{-3}$ per gate operation (and these gates have significant error rates)
- **Quantum (projected fault-tolerant):** ~$10^{-6}$ per logical gate (optimistic, assuming error correction overhead is manageable)

Even the optimistic projection for fault-tolerant quantum computing shows a cost per operation that is ten billion times higher than classical computing for operations that classical computers can perform. Quantum computing's advantage, if it materializes, must come from solving problems that require exponentially fewer operations — but as we saw in Chapter 2, the class of such problems is extremely narrow.

### Total Cost of Ownership

Total cost of ownership (TCO) extends the cost analysis beyond computational operations to include all costs associated with running a quantum computing system:

- **Hardware acquisition:** A state-of-the-art superconducting quantum processor costs $10-50 million
- **Cryogenic infrastructure:** Dilution refrigerators cost $1-5 million each, with ongoing helium and energy costs
- **Facility requirements:** Vibration isolation, electromagnetic shielding, clean room environment
- **Personnel:** Quantum computing requires PhD-level operators — the talent pool is small and expensive
- **Classical support infrastructure:** Quantum computers require substantial classical computing infrastructure for control, error correction decoding, and pre/post-processing
- **Downtime and calibration:** Current quantum systems require frequent recalibration and have low uptime compared to classical data centers

| TCO Component | Quantum (Annual) | Classical Equivalent |
|---|---|---|
| Hardware amortization | $5-10M | $100K-1M |
| Cooling/power | $500K-2M | $50K-200K |
| Facility costs | $1-3M | $50K-500K |
| Personnel (5 PhDs) | $1-2M | $500K (sysadmins) |
| Maintenance/calibration | $500K-1M | $50K-100K |
| **Total Annual TCO** | **$8-18M** | **$750K-2M** |

A quantum computing system costs roughly 10x more per year to operate than a classical computing cluster of comparable or greater utility. This ratio must invert — quantum must become *cheaper* than classical for the same workload — before rational customers will switch.

#### Diagram: TCO Comparison Dashboard

<iframe src="../../sims/tco-comparison-dashboard/main.html" width="100%" height="650" scrolling="no"></iframe>

<details markdown="1">
<summary>Total Cost of Ownership Comparison Dashboard</summary>
Type: microsim
**sim-id:** tco-comparison-dashboard<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning Objective:** Evaluate the total cost of ownership of quantum vs. classical computing systems by adjusting cost parameters and comparing annual and cumulative costs over a 10-year horizon (Bloom's Level 5: Evaluate — assess, compare, justify).

**Instructional Rationale:** Parameter exploration with side-by-side comparison is appropriate because the Evaluate/assess objective requires learners to weigh multiple factors simultaneously and reach a justified conclusion. Sliders allow "what if" analysis, revealing how much each parameter would need to change for quantum to become cost-competitive.

**Canvas Layout:**
- Left panel: Quantum TCO breakdown (stacked bar chart, color-coded by component)
- Right panel: Classical TCO breakdown (same format, same scale)
- Bottom panel: Cumulative cost over 10 years (two line charts overlaid)
- Control area: Sliders for key parameters

**Interactive Controls:**
- Slider: Quantum hardware cost ($1M to $100M, default $20M)
- Slider: Cryogenic annual cost ($100K to $5M, default $1M)
- Slider: Classical cluster cost ($50K to $5M, default $500K)
- Slider: Year-over-year quantum cost reduction (0% to 30%, default 5%)
- Slider: Year-over-year classical cost reduction (0% to 30%, default 10%)
- Toggle: Show/hide "crossover point" marker (if it exists within 10 years)

**Visual Elements:**
- Stacked bar charts showing cost breakdown by category
- Line chart showing cumulative TCO divergence over 10 years
- "Crossover year" indicator (or "No crossover in 10 years" message)
- Numeric summary: "Quantum is Nx more expensive than classical"
- Background: aliceblue

**Behavior:**
- All charts update in real time as sliders move
- If quantum cost reduction is aggressive enough, crossover point appears
- Default settings show no crossover (quantum remains more expensive)
- Color-coded: quantum bars in indigo, classical in orange

**Responsive Design:** Canvas resizes with window; panels stack vertically on narrow screens.

Implementation: p5.js with DOM sliders and canvas rendering
</details>

## Part IV: The Bigger Picture

### The Revenue Model Problem

Beyond the absence of current customers, quantum computing faces a structural revenue model problem. There are fundamentally only a few ways to monetize a computing technology:

1. **Sell hardware** — but quantum hardware requires extreme operating conditions that make it unsuitable for customer premises
2. **Sell cloud access** — but cloud quantum computing charges by the "shot" or circuit execution, and current systems produce noisy, unreliable results
3. **Sell software** — but quantum software is tightly coupled to specific hardware and there is no standardized platform
4. **Sell solutions** — but this requires demonstrating that the quantum solution outperforms the classical alternative for a specific customer problem

Each model has been attempted and each has failed to generate meaningful revenue. The cloud access model is the most commonly pursued, but it runs into a circular problem: customers won't pay premium prices for noisy, unreliable results, and improving reliability requires the massive hardware investments that need customer revenue to justify.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    The revenue model problem for quantum computing is structural, not temporary. Classical cloud computing succeeded because customers could immediately run their existing workloads faster and cheaper. Quantum cloud computing requires customers to (a) identify a suitable problem, (b) reformulate it for quantum hardware, (c) accept probabilistic results, and (d) pay a premium over the classical alternative. Each requirement shrinks the addressable market. When you multiply them together, the remaining market may be negligibly small.

### Putting It All Together: The Investment Decision Matrix

We can now synthesize our financial toolkit into a decision matrix for quantum computing investment. For each decision criterion, quantum computing scores poorly relative to alternatives:

| Decision Criterion | Quantum Computing | Classical AI/ML | Quantum Sensors |
|---|---|---|---|
| Current ROI | -100% | 50-200%+ | 20-100% |
| NPV (15-year horizon) | Likely negative | Strongly positive | Positive |
| Probability of success | 1-5% (fault-tolerant) | 80%+ (continued scaling) | 90%+ (already deployed) |
| Time to revenue | 10-20+ years | Immediate | Immediate |
| Customer demand evidence | None | Overwhelming | Strong |
| Opportunity cost | Very high | Low | Low-moderate |
| Sunk cost vulnerability | Extreme | Low | Low |

For an investor with fiduciary responsibilities, this matrix makes the case clear: quantum computing is the highest-risk, lowest-evidence option among the available technology investments. The only rational justification for continued investment is as a small portfolio allocation to a high-risk, high-reward option — not as a major strategic commitment.

## Key Takeaways

The financial analysis of quantum computing investment reveals several uncomfortable truths:

- Over $100 billion has been invested with effectively zero commercial revenue — an industry-wide ROI of -100%
- Net present value analysis shows that even optimistic return scenarios may be NPV-negative at standard discount rates due to the long timeline
- The expected value calculation is exquisitely sensitive to the probability of success, which is likely 1-5% for commercially viable fault-tolerant quantum computing within 15 years
- Opportunity cost analysis shows that alternative investments — classical AI, quantum sensors, advanced batteries — offer dramatically better risk-adjusted returns
- The sunk cost trap is the primary mechanism sustaining continued investment, reinforced by government prestige, corporate career incentives, and FOMO
- No paying customer anywhere in the world has chosen quantum computing over classical alternatives for a commercial workload
- Classical alternatives remain 10-1,000x cheaper for every workload where quantum computing has been proposed
- The total cost of ownership gap between quantum and classical systems shows no sign of closing within the next decade

!!! mascot-celebration "Excellent Investigative Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Fermi celebrates">
    You can now apply the complete financial analyst's toolkit — ROI, NPV, expected value, risk-adjusted returns, opportunity cost, and TCO — to evaluate quantum computing investment claims. When someone says "quantum computing is a trillion-dollar opportunity," you know exactly which numbers to ask for and which questions to pose. Outstanding work, fellow investigator!

## Review Questions

??? question "Question 1: Why does NPV analysis particularly penalize quantum computing investments?"
    NPV discounts future cash flows by a rate that reflects risk and the time value of money. Because quantum computing's potential returns are 10-20+ years in the future, even large future payoffs are worth relatively little in present value terms. At a 15% discount rate, $1 received in 15 years is worth only $0.12 today. At a 25% discount rate (typical for high-risk ventures), it's worth only $0.03. This means quantum computing must promise *extraordinary* future returns to justify investment today — returns that become increasingly implausible as the required magnitude grows.

??? question "Question 2: How does the conjunction fallacy affect probability estimates for quantum computing success?"
    The conjunction fallacy occurs when people estimate the probability of multiple independent events all occurring as being close to the probability of any single event. For quantum computing, achieving commercial viability requires multiple simultaneous breakthroughs (error rates, qubit counts, coherence, connectivity, cost reduction). Even if each has a 50% probability, the joint probability of all seven succeeding is only 0.78%. Investors who hear "50% chance of fixing error rates" often implicitly assume there's a ~50% chance the overall venture succeeds, when the actual probability is orders of magnitude lower.

??? question "Question 3: What distinguishes the quantum computing revenue gap from normal early-stage startup losses?"
    Normal early-stage startups lose money because they are spending on customer acquisition and product development while building toward product-market fit. Critically, they typically have *some* paying customers who validate that the product solves a real problem — even if revenue doesn't yet cover costs. Quantum computing has been in development for 40+ years with $100B+ invested and still has no customer who has chosen quantum over classical for a commercial workload. This isn't a timing issue; it's the absence of demonstrated product-market fit at any scale.

??? question "Question 4: Why is opportunity cost particularly important for quantum computing investment decisions?"
    Opportunity cost matters because the alternatives to quantum computing investment are exceptionally strong. Classical AI/ML hardware generates hundreds of billions in annual revenue with proven product-market fit. Quantum sensors are already commercially deployed and profitable. Even conservative index fund investment yields 8-12% annual returns. Every dollar committed to quantum computing is a dollar not earning returns in these proven alternatives. For investors with fiduciary responsibilities, the opportunity cost of quantum computing investment is not merely theoretical — it represents real, measurable foregone returns.

??? question "Question 5: How does the sunk cost trap interact with government quantum computing funding?"
    Government funding is particularly susceptible to the sunk cost trap for several reasons: (1) elected officials who championed quantum initiatives face political embarrassment if they reverse course; (2) the programs have created academic positions and laboratory jobs that constitute political constituencies; (3) national security framing makes it politically dangerous to question the investment ("Do you want China to get there first?"); and (4) government accounting does not require the same ROI analysis that private investors face. The result is that government quantum computing spending tends to escalate even as evidence mounts that commercial viability is distant, because the political costs of stopping exceed the political costs of continuing.
