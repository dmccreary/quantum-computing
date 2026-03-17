# Quiz: Expert Skeptics, Ethics, and Careers

Test your understanding of expert skeptical arguments against large-scale quantum computing, incentive asymmetries, and the ethical implications for education, careers, and investment with these review questions.

---

#### 1. What is the central argument in Michel Dyakonov's critique of large-scale quantum computing?

<div class="upper-alpha" markdown>
1. Quantum mechanics itself is incorrect and will be superseded by a more accurate theory
2. The number of parameters requiring simultaneous precision control ($2^{1000}$) is physically unachievable
3. Classical computers will always be faster than quantum computers for every problem class
4. Quantum error correction has been mathematically proven to be impossible
</div>

??? question "Show Answer"
    The correct answer is **B**. Dyakonov argues that a quantum computer with $n$ qubits operates in a Hilbert space of dimension $2^n$, requiring simultaneous precision control of $2^n$ complex amplitudes. For 1,000 logical qubits, this means controlling approximately $2^{1000} \approx 10^{301}$ parameters — far exceeding the number of atoms in the observable universe ($10^{80}$). Dyakonov does not claim quantum mechanics is wrong; he argues the precision demands are physically unachievable. Error correction is supposed to reduce this burden, but Dyakonov contends it creates a recursive dependency that may not converge.

    **Concept Tested:** Dyakonov's Physics Arguments

---

#### 2. Gil Kalai's mathematical argument against fault-tolerant quantum computing centers on which claim about quantum errors?

<div class="upper-alpha" markdown>
1. Quantum errors are too rare to require error correction in the first place
2. Quantum errors are inherently correlated, violating the independence assumption of the threshold theorem
3. Quantum errors only affect measurement, not computation
4. Quantum error correction codes have been proven to contain logical contradictions
</div>

??? question "Show Answer"
    The correct answer is **B**. Kalai argues that in any physical quantum system, errors will be correlated — when one qubit fails, nearby qubits are more likely to fail simultaneously. The threshold theorem for fault-tolerant quantum computing assumes that qubit errors are independent. If errors are inherently correlated, the error correction schemes that fault tolerance depends on break down fundamentally. Kalai further proposes that the effective noise rate increases as computations become more complex, the opposite of what fault tolerance requires. His arguments are published in peer-reviewed mathematics journals and remain unrefuted.

    **Concept Tested:** Gil Kalai's Math Arguments

---

#### 3. A prospective PhD student asks their advisor about career risks in quantum computing. The advisor says the field is "booming with opportunities" without mentioning that virtually all positions are speculative R&D. Apply the informed consent framework to evaluate this advising interaction.

<div class="upper-alpha" markdown>
1. The advising is adequate because the advisor accurately described current hiring conditions
2. The advising fails the informed consent standard because it omits risk assessment, alternative comparisons, and conflict disclosure
3. The advising is acceptable because PhD students are expected to conduct their own career research
4. The advising meets ethical standards as long as the advisor personally believes the field will grow
</div>

??? question "Show Answer"
    The correct answer is **B**. Informed consent for career decisions requires four elements: honest risk assessment (probability that QC jobs will exist at current levels in 5-10 years), comparison with alternatives (how QC career prospects compare to classical CS or AI/ML), disclosure of conflicts (does the advisor need lab members or grant justification?), and historical context (what happened in string theory and cold fusion contractions). Describing the field as "booming" without these disclosures fails the informed consent standard, regardless of the advisor's personal beliefs. The power asymmetry between professor and prospective student makes this omission ethically significant.

    **Concept Tested:** Student Advising Ethics

---

#### 4. Why does the chapter argue that skeptics' arguments should be weighted more heavily than proponents' arguments in evaluating quantum computing claims?

<div class="upper-alpha" markdown>
1. Because skeptics have more publications in peer-reviewed journals
2. Because skeptics are more intelligent and better trained than proponents
3. Because skeptics have no financial incentive for their position while proponents have enormous financial and career incentives for optimism
4. Because the majority of physicists worldwide are skeptics of quantum computing
</div>

??? question "Show Answer"
    The correct answer is **C**. The incentive asymmetry is stark. Skeptics like Kalai, Dyakonov, Levin, Laughlin, and Goldreich have no financial stake in quantum computing failing — their careers and funding do not depend on the outcome. In contrast, proponents (researchers, executives, investors, officials) have enormous incentives tied to continued optimism: grants, equity, political capital, and consulting revenue. Their skepticism even costs them professionally through conference exclusion and colleague criticism. Rational evaluation should weight unbiased voices more heavily, but the social dynamics of the ecosystem do the opposite.

    **Concept Tested:** Skeptics Have No Funding Bias

---

#### 5. A quantum computing PhD graduate finds that their specialized skills in quantum error correction have no direct application outside the field. Analyze whether the "transferable skills" argument adequately addresses this situation.

<div class="upper-alpha" markdown>
1. Yes, because linear algebra and Python skills are sufficient for any technology career
2. No, because the specific skills have no direct application and the 5-7 year PhD represents a massive opportunity cost compared to direct training in a growing field
3. Yes, because employers always prefer PhD holders regardless of specialization
4. No, but only because the graduate failed to develop sufficient breadth during their program
</div>

??? question "Show Answer"
    The correct answer is **B**. While QC PhDs do develop genuinely valuable general skills (linear algebra, optimization, programming), the specific skills of quantum error correction, gate design, and quantum algorithm development have no direct application outside quantum computing. The critical flaw in the transferable skills argument is opportunity cost: 5-7 years spent on a QC PhD could instead build directly relevant expertise in a growing field like AI/ML. The "transferable skills" test is revealing: if you knew you would end up in machine learning, would you get there via a 6-year QC PhD or a 2-year ML Master's? The argument is often deployed retroactively as rationalization rather than as a career plan.

    **Concept Tested:** Transferable Skills Debate

---

#### 6. Which historical parallel does the chapter identify as most structurally similar to quantum computing career risk?

<div class="upper-alpha" markdown>
1. The Manhattan Project, where physicists found abundant postwar careers
2. String theory, where prestige and funding sustained a field that produced no practical applications
3. The Apollo program, where aerospace engineers transitioned easily to commercial aviation
4. The Human Genome Project, where career investment paid off through biotechnology applications
</div>

??? question "Show Answer"
    The correct answer is **B**. String theory shares the closest structural parallel: it was the most prestigious area in its field, attracted the best students, received major grants, was sustained by institutional momentum and groupthink, produced genuine intellectual work that never translated to practical applications, and left graduates with narrow specializations when the field contracted. Cold fusion provides a more extreme parallel (actively wrong rather than merely impractical), but string theory's 30-year arc of prestige-driven research without practical outcomes most closely mirrors quantum computing's current trajectory.

    **Concept Tested:** String Theory Career Warning

---

#### 7. An institutional investor managing a pension fund allocates 15% of the portfolio to quantum computing startups because "we can't afford to miss the next big thing." Evaluate this decision against fiduciary responsibility standards.

<div class="upper-alpha" markdown>
1. The decision is sound because diversification into emerging technologies is standard practice
2. The decision meets fiduciary standards because the investor disclosed the allocation to beneficiaries
3. The decision likely violates fiduciary duty because it is driven by FOMO rather than evidence that expected returns exceed available alternatives
4. The decision is acceptable because pension funds have long time horizons that match QC development timelines
</div>

??? question "Show Answer"
    The correct answer is **C**. Fiduciary responsibility requires that the expected value of a QC investment exceed available alternatives (classical AI, quantum sensors, index funds). The investor's reasoning — "can't afford to miss" — is textbook FOMO, not evidence-based analysis. A 15% allocation to pre-revenue companies in a technology at TRL 2-3 with a 5-15% base rate of success almost certainly fails the fiduciary test. The decision relies on the impossibility of proving QC will never work, rather than on positive evidence that it will. Managing other people's money demands evidence-based analysis, not bias-driven justifications.

    **Concept Tested:** Fiduciary Responsibility

---

#### 8. Leonid Levin's skepticism about quantum computing is grounded in which theoretical concern?

<div class="upper-alpha" markdown>
1. The Extended Church-Turing thesis suggests nature may prevent quantum systems from achieving theoretical speedups at scale
2. Quantum algorithms have been proven to offer no speedup over classical algorithms
3. The P vs NP problem has been solved, invalidating the premise of quantum advantage
4. Quantum entanglement violates special relativity, making quantum computing physically impossible
</div>

??? question "Show Answer"
    The correct answer is **A**. Levin, co-discoverer of NP-completeness, argues from the Extended Church-Turing thesis: any physically realizable computation can be efficiently simulated by a probabilistic Turing machine. If quantum computers could efficiently solve problems classical computers cannot (BQP not contained in BPP), this would violate the thesis. Levin suggests nature may impose constraints preventing theoretical speedups from being realized at scale — not because quantum mechanics is wrong, but because the physical processes required may not be achievable. He argues the burden of proof should be on those claiming quantum advantage is possible.

    **Concept Tested:** Levin's Complexity Doubts

---

#### 9. A professor needs three new PhD students to staff their quantum computing lab and maintain grant funding. They also serve on the department's admissions committee. Evaluate the ethical dimensions of this dual role.

<div class="upper-alpha" markdown>
1. There is no ethical issue because professors routinely recruit students for their labs
2. The professor should recuse themselves from admissions decisions involving quantum computing applicants
3. The conflict between recruiting for personal lab needs and providing unbiased career guidance represents a genuine ethical tension requiring disclosure
4. The ethical issue is resolved as long as the professor mentions that "all research areas carry some risk"
</div>

??? question "Show Answer"
    The correct answer is **C**. The professor faces a structural conflict of interest: as an educator, they have a duty to give honest, unbiased career advice; as a researcher, they need students to staff their lab; as a grant recipient, they need to demonstrate training impact. The honest assessment might be that career prospects in QC are highly uncertain compared to classical CS or AI/ML. But this honest assessment conflicts with the professor's need for lab members, the department's enrollment goals, and the university's grant overhead revenue. The ethical resolution requires transparent disclosure of these conflicts, not their elimination (which may be impossible).

    **Concept Tested:** Professor Grant Conflicts

---

#### 10. Design an approach to correct the systematic marginalization of skeptical voices in quantum computing discourse.

<div class="upper-alpha" markdown>
1. Ban all optimistic claims about quantum computing until commercial viability is demonstrated
2. Require equal representation of skeptics on all quantum computing conference panels, government advisory boards, and journal special issues
3. Create a public prediction-tracking database and require funded researchers to engage with published skeptical arguments in their grant applications
4. Replace peer review with public voting on the validity of quantum computing research
</div>

??? question "Show Answer"
    The correct answer is **C**. This approach addresses two key mechanisms of marginalization: narrative asymmetry (skeptical arguments are harder to communicate than optimistic headlines) and groupthink (conference panels and advisory boards are populated by proponents). A prediction-tracking database creates accountability by making past optimistic claims visible alongside actual outcomes. Requiring engagement with skeptical arguments in grant applications forces proponents to address the strongest counterarguments rather than ignoring them. This does not suppress optimism; it introduces intellectual accountability that the current system lacks. Options A and D are impractical; option B addresses symptoms rather than structural incentives.

    **Concept Tested:** Why Skeptics Are Ignored
