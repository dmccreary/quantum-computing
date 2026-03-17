# Quiz: Investment Risk Analysis

Test your understanding of financial frameworks for evaluating quantum computing investments, including ROI, NPV, expected value, and opportunity cost.

---

#### 1. What is the approximate industry-wide ROI for quantum computing as of 2025?

<div class="upper-alpha" markdown>
1. -100% (total loss — over $100 billion invested with zero commercial revenue)
2. +50% (early but promising returns)
3. 0% (break-even)
4. -25% (modest losses typical of early-stage technology)
</div>

??? question "Show Answer"
    The correct answer is **A**. Over $100 billion has been invested in quantum computing globally — including government grants (~$40B), corporate R&D (~$30B), venture capital (~$15B), SPACs (~$10B), and other sources (~$10B) — with effectively zero commercial revenue generated. While some companies report nominal revenue (D-Wave ~$8-10M, IonQ ~$28M), this is negligible relative to investment, does not cover operating costs, and largely consists of research grants rather than commercial deployments.

    **Concept Tested:** Total $100B+ Invested / Zero Revenue Generated

---

#### 2. Why does NPV analysis particularly penalize quantum computing investments?

<div class="upper-alpha" markdown>
1. NPV requires companies to have positive cash flow from day one
2. NPV uses inflation rates that are always unfavorable to technology companies
3. NPV calculations cannot be applied to pre-revenue companies
4. Future returns are discounted by the time value of money, so payoffs 15-20 years away are worth very little today
</div>

??? question "Show Answer"
    The correct answer is **D**. NPV discounts future cash flows by a rate reflecting risk and time value. At a 15% discount rate, $1 received in 15 years is worth only $0.12 today; at a 25% rate (typical for high-risk ventures), only $0.03. The chapter demonstrates that even a $5 billion return after 15 years on a $1 billion investment yields a negative NPV at standard discount rates. Quantum computing must promise extraordinary future returns to overcome this discounting — returns that become increasingly implausible.

    **Concept Tested:** Net Present Value

---

#### 3. If seven independent breakthroughs each have a 50% probability of succeeding, what is the joint probability that all seven succeed?

<div class="upper-alpha" markdown>
1. 50% (same as each individual probability)
2. 3.5% (50% divided by the number of breakthroughs)
3. 0.78% ($0.5^7$)
4. 35% (50% times 7, then divided by 10)
</div>

??? question "Show Answer"
    The correct answer is **C**. When multiple independent events must all occur, the joint probability is the product of the individual probabilities: $0.5^7 = 0.0078 = 0.78\%$. This is the conjunction effect — and the conjunction fallacy causes investors to dramatically overestimate success probability. If each breakthrough has only a 30% chance, the joint probability drops to $0.3^7 = 0.02\%$. The chapter identifies seven required breakthroughs for quantum computing viability, making the compound probability very small.

    **Concept Tested:** Probability of Success

---

#### 4. A quantum computing investment of $100M has a 5% probability of yielding a $2B return and a 95% probability of total loss. What is the expected value?

<div class="upper-alpha" markdown>
1. +$100M
2. +$5M
3. -$50M
4. -$95M
</div>

??? question "Show Answer"
    The correct answer is **B**. Using the expected value formula: $EV = P(s) \times R - (1 - P(s)) \times C = 0.05 \times \$2B - 0.95 \times \$100M = \$100M - \$95M = +\$5M$. While this scenario has a slightly positive expected value, reducing the success probability to 1% (which the chapter argues is more realistic) yields: $0.01 \times \$2B - 0.99 \times \$100M = \$20M - \$99M = -\$79M$. The expected value calculation is exquisitely sensitive to the probability estimate.

    **Concept Tested:** Expected Value Framework

---

#### 5. An investor says, "We've already invested $10 billion in quantum computing, so we can't stop now." Which financial concept does this statement violate?

<div class="upper-alpha" markdown>
1. Net present value analysis
2. The sunk cost fallacy — past expenditures are irrecoverable and irrelevant to forward-looking decisions
3. The efficient market hypothesis
4. The law of diminishing returns
</div>

??? question "Show Answer"
    The correct answer is **B**. The sunk cost fallacy occurs when irrecoverable past expenditures are used to justify future spending. The rational framework evaluates only future costs and benefits: does the next dollar of investment have a positive expected value? The $10 billion already spent is gone regardless of the future decision. The quantum computing industry is particularly susceptible because governments cannot easily admit failure, executives face career consequences for pulling the plug, and researchers have strong incentives to project optimism.

    **Concept Tested:** Sunk Cost Trap

---

#### 6. Which alternative investment does the chapter identify as having the strongest risk-adjusted returns compared to quantum computing?

<div class="upper-alpha" markdown>
1. Classical AI/GPU hardware, with 200-500% expected 10-year ROI and over $100B/year in current revenue
2. Cryptocurrency mining
3. Space tourism ventures
4. Fusion energy research
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter's opportunity cost analysis shows classical AI/GPU hardware offering 200-500% expected 10-year ROI at moderate risk with over $100 billion per year in current revenue. Other alternatives like quantum sensors (50-200% ROI) and advanced batteries (100-300% ROI) also outperform quantum computing, which has an unknown but likely negative expected ROI, very high risk, and approximately $0/year in revenue. Every dollar spent on quantum computing is a dollar not earning returns in these proven alternatives.

    **Concept Tested:** Opportunity Cost

---

#### 7. Why does the chapter argue that quantum computing's revenue model problem is structural rather than temporary?

<div class="upper-alpha" markdown>
1. Quantum computing companies are poorly managed
2. Customers must identify a suitable problem, reformulate it for quantum hardware, accept probabilistic results, and pay a premium over classical — each requirement shrinks the addressable market
3. Government regulations prevent quantum computing companies from charging for services
4. Patent disputes prevent commercialization
</div>

??? question "Show Answer"
    The correct answer is **B**. The revenue model faces a cascading constraint problem. Classical cloud computing succeeded because customers could immediately run existing workloads faster and cheaper. Quantum computing requires customers to: (a) identify a suitable problem from the narrow class with quantum speedups, (b) reformulate it for quantum hardware, (c) accept probabilistic rather than deterministic results, and (d) pay a premium over the classical alternative. Each requirement dramatically shrinks the addressable market. When multiplied together, the remaining market may be negligibly small.

    **Concept Tested:** Revenue Model Problem

---

#### 8. A quantum computing system has an annual TCO of $8-18M while a classical computing cluster of comparable utility costs $750K-2M per year. What must happen before rational customers switch?

<div class="upper-alpha" markdown>
1. Quantum computers must become faster than classical computers for all workloads
2. Government subsidies must cover the cost difference
3. The TCO ratio must invert — quantum must become cheaper than classical for the same workload
4. Classical computers must stop improving
</div>

??? question "Show Answer"
    The correct answer is **C**. For rational customers to switch, quantum computing must be cheaper than classical for the same workload — the cost ratio must invert. Currently, quantum systems cost roughly 10x more per year to operate (including hardware amortization, cryogenics, facilities, PhD-level personnel, and maintenance). This gap must not merely narrow but reverse before commercial adoption makes economic sense. The chapter notes that this ratio shows no sign of closing within the next decade.

    **Concept Tested:** Total Cost of Ownership

---

#### 9. The cost per gate operation for current NISQ quantum computers is approximately $10^{-3}$, while classical CPUs achieve approximately $10^{-15}$ per FLOP. What does this gap imply about quantum computing's competitive position?

<div class="upper-alpha" markdown>
1. Quantum computing is already cost-competitive for most workloads
2. The gap is irrelevant because quantum and classical operations are not comparable
3. Classical computing will never be able to close this cost gap
4. Quantum computing's advantage must come from solving problems requiring exponentially fewer operations, but the class of such problems is extremely narrow
</div>

??? question "Show Answer"
    The correct answer is **D**. The cost per operation for quantum computing is roughly ten billion times higher than classical computing. Quantum computing can only be competitive if it solves problems requiring exponentially fewer total operations — problems where Shor's or similar algorithms provide exponential speedup. As established in earlier chapters, the class of such problems is extremely narrow (less than 1% of global computation). For any problem where classical and quantum computers require comparable numbers of operations, classical wins by a factor of a trillion on cost alone.

    **Concept Tested:** Cost Per Computation

---

#### 10. According to the chapter's investment decision matrix, which factor most distinguishes quantum computing from classical AI/ML as an investment?

<div class="upper-alpha" markdown>
1. Quantum computing has higher potential returns
2. Classical AI/ML has no risk
3. Customer demand evidence — AI/ML has overwhelming demand while quantum computing has none
4. Quantum computing requires less capital investment
</div>

??? question "Show Answer"
    The correct answer is **C**. The decision matrix compares multiple criteria, and customer demand evidence presents the starkest contrast. Classical AI/ML has overwhelming demonstrated customer demand (millions of paying customers, hundreds of billions in revenue, deployed across every major industry). Quantum computing has no customer demand evidence — no customer anywhere has chosen quantum computing over classical alternatives for a commercial workload. This absence of demand after four decades and $100B+ invested is the single most important data point in the investment analysis.

    **Concept Tested:** Customer Demand Evidence / No Paying Customers
