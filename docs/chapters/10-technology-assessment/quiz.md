# Quiz: Technology Assessment Frameworks

Test your understanding of technology readiness levels, adoption curves, hype cycles, base rate reasoning, and bubble dynamics with these review questions.

---

#### 1. What does a Technology Readiness Level of TRL 3 signify?

<div class="upper-alpha" markdown>
1. The technology has been validated in a laboratory as an integrated system
2. A working prototype has been demonstrated in an operational environment
3. Experimental proof of concept has been achieved in a laboratory setting
4. The technology is complete and qualified for deployment
</div>

??? question "Show Answer"
    The correct answer is **C**. TRL 3 means "experimental proof of concept," where laboratory experiments have validated key functions of the technology. This is distinct from TRL 4 (technology validated in lab as an integrated system) and higher levels. Quantum computing sits at TRL 2-3, meaning individual components have been demonstrated but no integrated system has achieved commercial relevance. The distinction matters because TRL 3 is still firmly in the research phase, appropriate for government grants rather than commercial investment.

    **Concept Tested:** TRL Scale Explained

---

#### 2. Why is the transition from TRL 3 to TRL 4 considered particularly difficult for quantum computing?

<div class="upper-alpha" markdown>
1. Because TRL 4 requires moving from a lab to a factory environment
2. Because integrating quantum components into a working system introduces compounding errors
3. Because TRL 4 requires government certification that has not been sought
4. Because no funding exists for technologies between TRL 3 and TRL 4
</div>

??? question "Show Answer"
    The correct answer is **B**. The TRL 3-to-4 transition requires moving from demonstrating individual components in isolation to integrating them into a system that works together. For quantum computing, this is especially difficult because combining more qubits introduces more error sources, and the components interact in ways that degrade performance. Individual high-fidelity gates, small error-corrected systems, and increasing qubit counts are TRL 3 achievements, but no integrated system combining sufficient qubits, connectivity, coherence, and error correction has been demonstrated.

    **Concept Tested:** QC Stuck at TRL 2-3

---

#### 3. In Geoffrey Moore's "Crossing the Chasm" framework, what distinguishes the early majority from early adopters?

<div class="upper-alpha" markdown>
1. The early majority adopts technology purely based on price reductions
2. The early majority requires proven, complete solutions rather than tolerating incomplete products
3. The early majority consists exclusively of government agencies and regulated industries
4. The early majority evaluates technologies based on technical novelty rather than business value
</div>

??? question "Show Answer"
    The correct answer is **B**. Early adopters (visionaries) tolerate incomplete products and are willing to take risks for strategic advantage. The early majority (pragmatists) demand proven, complete solutions with professional support and reference customers. Quantum computing currently serves only innovators and early adopters running experiments, not pragmatic buyers deploying production tools. To cross the chasm, quantum computing would need a "whole product" that solves a real business problem better and cheaper than classical alternatives.

    **Concept Tested:** Crossing the Chasm

---

#### 4. According to the Gartner Hype Cycle, which phase is quantum computing currently in as of 2023-2025?

<div class="upper-alpha" markdown>
1. Peak of inflated expectations
2. Innovation trigger
3. Slope of enlightenment
4. Trough of disillusionment
</div>

??? question "Show Answer"
    The correct answer is **D**. By 2023-2025, quantum computing entered the trough of disillusionment, evidenced by stock price declines of 60-80% for public QC companies, narrative pivots (IBM shifting from "quantum advantage" to "utility-scale quantum"), revised roadmaps, and increasingly skeptical media coverage. The peak of inflated expectations occurred during 2019-2022 with massive VC funding and bold timeline claims. The critical question is whether quantum computing will eventually reach the slope of enlightenment or remain in the trough.

    **Concept Tested:** Trough of Disillusionment

---

#### 5. A venture capital firm is evaluating a quantum computing startup. Using base rate reasoning, what probability of commercial success should serve as the starting estimate?

<div class="upper-alpha" markdown>
1. 50%, since the technology either works or it does not
2. 30%, based on the typical success rate of venture-backed startups
3. 5-15%, based on the historical rate for technologies requiring multiple physics breakthroughs
4. 75%, because quantum mechanics is well-established science
</div>

??? question "Show Answer"
    The correct answer is **C**. Base rate reasoning requires starting with the historical frequency of similar outcomes. For technologies requiring multiple simultaneous physics breakthroughs to achieve commercial viability within 30 years, the base rate is approximately 5-15%. For quantum computing specifically, which requires breakthroughs in error rates, coherence, and scaling simultaneously, the rate may be below 5%. The fact that quantum mechanics is valid science is irrelevant; the question is whether engineering at the required scale is achievable, not whether the underlying physics is correct.

    **Concept Tested:** Base Rate of Tech Failure

---

#### 6. What pattern emerges from the historical track record of quantum computing timeline predictions?

<div class="upper-alpha" markdown>
1. Predictions have been approximately 50% accurate, with some early and some late
2. Predictions have consistently underestimated the speed of progress
3. No quantum computing timeline prediction has been met on schedule
4. Predictions made by companies are accurate while academic predictions are not
</div>

??? question "Show Answer"
    The correct answer is **C**. A systematic review of public predictions from 2000 through 2023 reveals a 0% accuracy rate on timeline estimates. Every prediction shares the same structure: optimistic timelines based on extrapolating current progress rates, with no accounting for the phase transitions where technologies typically stall. From "practical quantum computers in 10 years" (2000) to "quantum advantage by 2025" (IBM, 2020), every specific timeline has been missed. This track record should dramatically reduce confidence in current predictions.

    **Concept Tested:** Prediction Track Records

---

#### 7. An investor is told that decoherence in superconducting qubits will be solved "with enough engineering resources." How should the science vs. engineering distinction inform their evaluation?

<div class="upper-alpha" markdown>
1. They should increase their investment because engineering problems are always solvable with sufficient funding
2. They should recognize that decoherence may be a science barrier where no timeline estimate is reliable
3. They should wait exactly five years, which is the standard timeline for engineering solutions
4. They should invest only if the startup has hired more than 500 engineers
</div>

??? question "Show Answer"
    The correct answer is **B**. The distinction between science and engineering barriers is critical for investment timelines. Engineering barriers (where the science is understood) yield to investment with predictable timelines. Science barriers (where fundamental physics may prevent a solution) cannot be solved by spending more money, and no reliable timeline can be given. Decoherence is a fundamental physics phenomenon, not a manufacturing defect. If the error rate threshold for fault tolerance lies below the physics floor, no amount of engineering investment will succeed. The investor should require the startup to clearly articulate which barriers are science vs. engineering.

    **Concept Tested:** Science vs Engineering Gap

---

#### 8. Which feature of the dot-com bubble does quantum computing hype NOT share?

<div class="upper-alpha" markdown>
1. Billion-dollar valuations for pre-revenue companies
2. Millions of paying customers using the technology in production
3. Dismissal of skeptics as "not understanding" the technology
4. Consulting firm projections of trillion-dollar market sizes
</div>

??? question "Show Answer"
    The correct answer is **B**. The internet at its equivalent stage in the mid-1990s already had millions of paying users, demonstrated product-market fit (email, web browsing, e-commerce), and worked reliably. Quantum computing in 2025 has zero paying commercial customers, no demonstrated product-market fit, and does not work reliably enough for production use. This is a critical distinction that weakens the favorite analogy of QC proponents. The other features listed — pre-revenue valuations, dismissal of skeptics, and inflated market projections — are shared by both bubbles.

    **Concept Tested:** Dot-Com Bubble Parallel

---

#### 9. A government report justifies continued quantum computing funding by citing the number of qubits in the latest IBM processor. Which technology assessment error does this represent?

<div class="upper-alpha" markdown>
1. Confusing the Gartner Hype Cycle with the adoption curve
2. Applying the wrong TRL criteria to the assessment
3. Using a component metric rather than a system-level assessment of readiness
4. Failing to account for the slope of enlightenment phase
</div>

??? question "Show Answer"
    The correct answer is **C**. Qubit count is a component-level metric that says nothing about system readiness. A 1,121-qubit processor with error rates too high for fault-tolerant computation is not closer to commercial viability than a 100-qubit processor. The relevant metric is the number of error-corrected logical qubits capable of solving a commercially relevant problem — which remains approximately zero. This error conflates TRL 3 (component demonstration) with progress toward TRL 4 (system validation), masking the gap between component achievements and integrated system performance.

    **Concept Tested:** Technology Readiness Levels

---

#### 10. What distinguishes a technology bubble's "euphoria" phase from its "boom" phase?

<div class="upper-alpha" markdown>
1. The euphoria phase features lower investment levels but greater media coverage
2. During euphoria, valuations detach from fundamentals and skeptics are actively dismissed
3. The boom phase occurs after the euphoria phase in the bubble lifecycle
4. During the boom phase, all investors have already exited their positions
</div>

??? question "Show Answer"
    The correct answer is **B**. In the canonical bubble model, the boom phase involves rising investment driven by early believers, while the euphoria phase is the escalation beyond reason: valuations completely detach from fundamentals, and skeptics are dismissed as "not understanding the potential." For quantum computing, the euphoria phase was marked by billion-dollar valuations for pre-revenue companies, consulting reports projecting trillion-dollar markets, and the reflexive dismissal of skeptics. The boom precedes euphoria in the bubble lifecycle, followed by profit-taking and then panic.

    **Concept Tested:** Technology Bubble Dynamics
