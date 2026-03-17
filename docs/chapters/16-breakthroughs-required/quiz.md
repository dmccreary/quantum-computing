# Quiz: The Breakthroughs Required for Viability

Test your understanding of the ten simultaneous breakthroughs required for quantum computing viability, joint probability analysis, and independent versus coupled risks.

---

#### 1. How many distinct technical breakthroughs must be achieved simultaneously for quantum computing to become commercially viable?

<div class="upper-alpha" markdown>
1. 3 major breakthroughs
2. 5 major breakthroughs
3. At least 10 distinct breakthroughs
4. Only 1 breakthrough (fault-tolerant error correction)
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter identifies at least ten distinct breakthroughs required: error rates must drop 100x, qubit count must increase 1,000x, coherence must improve 100x, connectivity must improve, cryogenics must scale, new algorithms are needed, cost must drop by a factor of one million or more, error correction must work at scale, classical control electronics must be redesigned, and software/compilers must mature. Each represents a separate research frontier where success is uncertain, and all must be achieved concurrently.

    **Concept Tested:** The 10 Required Breakthroughs

---

#### 2. What is the approximate ratio between the current cost per quantum gate and the cost per classical floating-point operation?

<div class="upper-alpha" markdown>
1. 100x ($10^2$)
2. 1 million times ($10^6$)
3. 1 billion times ($10^9$)
4. 1 quadrillion times ($10^{15}$)
</div>

??? question "Show Answer"
    The correct answer is **D**. The current cost per quantum two-qubit gate is approximately $1-$10, while a classical floating-point operation on a modern GPU costs approximately $10^{-15}$. The ratio is therefore about $10^{15}$ — fifteen orders of magnitude. Even accounting for quantum algorithmic speedups, this cost gap must be substantially closed before quantum computing offers any commercial value. The required cost reduction of $10^6$x to $10^7$x per gate has no equivalent to Moore's Law driving it, and quantum physics may actually cause costs to increase with qubit count.

    **Concept Tested:** Cost Must Drop Dramatically

---

#### 3. Calculate the joint probability of success if each of the ten breakthroughs has an independent 50% probability of being achieved.

<div class="upper-alpha" markdown>
1. 50% — the average of the individual probabilities
2. 5% — 50% divided by the number of breakthroughs
3. Approximately 0.1% — $(0.5)^{10} \approx 1/1024$
4. 25% — $50\% \times 50\%$ for the two hardest breakthroughs
</div>

??? question "Show Answer"
    The correct answer is **C**. For independent events, the joint probability is the product of individual probabilities: $P = 0.5^{10} = 1/1024 \approx 0.098\%$. Even in this extremely optimistic scenario where every breakthrough is more likely to succeed than fail, the joint probability is less than one in a thousand. This demonstrates the power of probability compounding: individually reasonable odds produce collectively improbable outcomes when many independent conditions must all be satisfied simultaneously.

    **Concept Tested:** Joint Probability Problem

---

#### 4. Why do the ten breakthroughs need to occur concurrently rather than sequentially?

<div class="upper-alpha" markdown>
1. Because research funding requires demonstrating progress on all fronts simultaneously
2. Because the breakthroughs are interdependent and partial achievement provides zero commercial value — like a bridge that is 90% complete
3. Because the patents on early breakthroughs would expire before later ones are achieved
4. Because quantum hardware degrades over time, so early breakthroughs would be lost before later ones are achieved
</div>

??? question "Show Answer"
    The correct answer is **B**. The breakthroughs must be concurrent because the value function is discontinuous: it remains at zero until all requirements are simultaneously met. Achieving 1,000x more qubits without improving error rates produces a larger, noisier system that cannot compute anything useful. Perfect error rates on 1,000 qubits yields a flawless but tiny system that cannot solve commercially relevant problems. This "all or nothing" character makes quantum computing fundamentally different from technologies with continuous improvement pathways, where each increment generates commercial value.

    **Concept Tested:** All Must Happen Together

---

#### 5. How does the coupling between qubit count and error rates create a "scaling trap"?

<div class="upper-alpha" markdown>
1. Adding more qubits is expensive, which reduces funding available for error rate research
2. More qubits increase cross-talk that worsens error rates, which demands more error correction, which requires even more qubits — creating a vicious cycle
3. Qubit count and error rates are measured by different teams that do not share information
4. Manufacturing more qubits requires different materials that inherently have higher error rates
</div>

??? question "Show Answer"
    The correct answer is **B**. The scaling trap is a negative feedback loop: as more qubits are added to a processor, electromagnetic cross-talk between control signals increases, degrading gate fidelity and worsening error rates. To compensate, more aggressive error correction is needed, which demands even more physical qubits per logical qubit, which further worsens cross-talk. This circular dependency — more qubits leading to worse errors leading to more correction requiring more qubits — means that scaling the system makes the fundamental problem harder rather than easier. This is the opposite of classical computing's virtuous scaling cycle.

    **Concept Tested:** Independent vs. Coupled Risks

---

#### 6. Using the chapter's generous probability estimates, what is the approximate joint probability that all ten breakthroughs will succeed?

<div class="upper-alpha" markdown>
1. Approximately 3% (1 in 33)
2. Approximately 0.3% (1 in 333)
3. Approximately 0.0008% (1 in 131,000)
4. Approximately 10% (1 in 10)
</div>

??? question "Show Answer"
    The correct answer is **C**. Using the chapter's generous individual estimates (ranging from 15% to 50% per breakthrough), the joint probability is approximately 0.00076%, or roughly 1 in 131,000. These are not pessimistic estimates — several individual probabilities are arguably too generous (e.g., 40% for qubit count scaling, 50% for software). Even so, the multiplicative compounding of ten uncertain conditions produces a vanishingly small collective probability. This calculation is the mathematical core of the skeptic's case against quantum computing investment.

    **Concept Tested:** Joint Probability Problem

---

#### 7. A quantum computing CEO claims breakthroughs in three of the ten areas. Apply the joint probability framework to explain why this does not substantially improve the investment case.

<div class="upper-alpha" markdown>
1. Three breakthroughs out of ten means the company is 30% of the way to viability
2. Setting three breakthroughs to P=1.0 while maintaining generous estimates for the remaining seven still yields approximately 0.009% joint probability (1 in 11,000), and commercial value remains zero until all ten are met
3. Three breakthroughs demonstrate the company can solve technical challenges and the remaining seven will follow
4. The CEO's claim should be taken at face value because companies have internal data that external analysts lack
</div>

??? question "Show Answer"
    The correct answer is **B**. Even setting three breakthroughs to certainty (P=1.0), the joint probability of the remaining seven becomes: $P = 0.40 \times 0.30 \times 0.20 \times 0.15 \times 0.25 \times 0.40 \times 0.50 \approx 0.009\%$, or about 1 in 11,000. This is 12x better than the baseline but still less than one hundredth of one percent. Moreover, the three achieved breakthroughs may be the easier ones, leaving the hardest challenges ahead. Critically, commercial value remains zero until all ten are achieved — there is no intermediate revenue from partial completion.

    **Concept Tested:** Each Breakthrough Is Uncertain

---

#### 8. Why does quantum computing lack a "Moore's Law equivalent" for cost reduction?

<div class="upper-alpha" markdown>
1. Because quantum computing companies refuse to publish cost data
2. Because quantum computing is too new to have established a cost trend
3. Because making qubits better requires more expensive fabrication and more complex control, and costs scale linearly or superlinearly with qubit count rather than decreasing exponentially
4. Because Moore's Law was specific to silicon transistors and does not apply to any other technology
</div>

??? question "Show Answer"
    The correct answer is **C**. Moore's Law worked because making transistors smaller simultaneously made them faster, cheaper, and more energy-efficient — the physics cooperated with economics. Quantum computing faces the opposite dynamic: lower error rates require more expensive fabrication and tighter tolerances; more qubits require proportionally more cooling, control electronics, and calibration. Costs scale linearly or superlinearly with qubit count. There is no known physical mechanism that would cause quantum computing costs to decrease exponentially over time. The required cost reduction of $10^6$x to $10^7$x per gate has no clear pathway.

    **Concept Tested:** Cost Must Drop Dramatically

---

#### 9. Evaluate the following Bayesian argument: "Error rates have plateaued after 2020, classical computers continue to improve, and no commercial quantum computation exists after 40+ years. What should a rational Bayesian agent conclude?"

<div class="upper-alpha" markdown>
1. These observations are irrelevant because past performance does not predict future breakthroughs
2. A rational agent should maintain their prior probability unchanged until a definitive experiment resolves the question
3. Each observation provides negative Bayesian evidence that should cumulatively lower the estimated probability of quantum computing viability
4. A rational agent should increase their probability estimate because continued investment despite these failures suggests insider knowledge of progress
</div>

??? question "Show Answer"
    The correct answer is **C**. Under Bayesian updating, each observation serves as evidence that shifts the posterior probability. If quantum computing were truly on a path to viability, we would expect intermediate milestones, improving error rates, and some commercial traction. The absence of these indicators — error rate plateaus, continued classical computing improvements, zero commercial computation revenue — constitutes strong negative evidence. The cumulative effect of 40 years of such observations should substantially reduce any rational agent's probability estimate for quantum computing viability. Bayesian reasoning demands updating beliefs based on evidence, not maintaining fixed priors.

    **Concept Tested:** Bayesian Reasoning and Breakthroughs

---

#### 10. Design a one-page "breakthrough scorecard" that an investor could use to track quantum computing progress. Which elements are most essential to include?

<div class="upper-alpha" markdown>
1. Stock prices of quantum computing companies, media sentiment scores, and number of published papers
2. Total funding raised, number of employees, and patent counts across all quantum companies
3. All ten breakthroughs with current state, target state, improvement factor needed, and year-over-year progress trend for each — tracking all simultaneously rather than individual metrics in isolation
4. A single composite "quantum readiness index" that averages all technical metrics into one number
</div>

??? question "Show Answer"
    The correct answer is **C**. An effective breakthrough scorecard must track all ten breakthroughs simultaneously because individual improvements have zero commercial value until all requirements are met. Each row should show: the breakthrough name, current measured state, target state for viability, the improvement factor still needed, and whether the metric is improving, plateauing, or worsening year-over-year. This forces honest assessment of the full picture rather than cherry-picking individual metrics. A composite index (option D) would obscure the "all must succeed" constraint, and financial metrics (options A, B) measure hype, not technical progress.

    **Concept Tested:** The 10 Required Breakthroughs

---
