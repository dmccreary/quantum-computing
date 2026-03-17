---
title: Expert Skeptics, Ethics, and Careers
description: Arguments from physicists skeptical of large-scale QC, the incentive asymmetry between skeptics and proponents, and ethical implications for education, careers, and investment
generated_by: claude skill chapter-content-generator
date: 2026-03-17 00:27:57
version: 0.05
---

# Expert Skeptics, Ethics, and Careers

## Summary

This chapter presents the arguments of prominent physicists and mathematicians who argue that large-scale quantum computing may never work, then examines the ethical implications of quantum computing hype for education and careers. We cover Gil Kalai's mathematical arguments, Dyakonov's physics arguments about controlling 2^1000 parameters, Levin's complexity doubts, Laughlin's coherence concerns, and Goldreich's computer science perspective. We analyze the incentive asymmetry between skeptics (who have no funding to lose) and proponents (who do). We then examine PhD career risks, the job market reality where almost all positions are speculative R&D, the ethics of student advising, professor grant conflicts, and fiduciary responsibility. Students will understand both the technical case for skepticism and the human consequences of quantum computing hype.

## Concepts Covered

This chapter covers the following 23 concepts from the learning graph:

1. Gil Kalai's Math Arguments
2. Dyakonov's Physics Arguments
3. Controlling 2^1000 Parameters
4. Levin's Complexity Doubts
5. Laughlin on Coherence Limits
6. Goldreich's CS Perspective
7. Skeptics Have No Funding Bias
8. Proponents Have Funding Bias
9. Why Skeptics Are Ignored
10. Ethics of QC Education
11. PhD Career Risk in QC
12. QC Job Market Reality
13. Almost All Jobs Are R&D
14. What If the Field Contracts?
15. Transferable Skills Debate
16. Professor Grant Conflicts
17. String Theory Career Warning
18. Cold Fusion Career Warning
19. Student Advising Ethics
20. Informed Consent for Careers
21. Ethical Investment Duty
22. Fiduciary Responsibility
23. FOMO Drives Bad QC Decisions

## Prerequisites

This chapter builds on concepts from:

- [Chapter 2: Quantum Algorithms and Their Real-World Limits](../02-quantum-algorithms-and-limits/index.md)
- [Chapter 5: The Physics Barriers and Hardware Platforms](../05-physics-barriers-and-hardware/index.md)
- [Chapter 8: Investment Risk Analysis](../08-investment-risk-analysis/index.md)
- [Chapter 9: Company Case Studies and Exit Analysis](../09-company-case-studies/index.md)
- [Chapter 11: Cognitive Biases in Quantum Computing Investment](../11-cognitive-biases/index.md)

---

!!! mascot-welcome "Fermi Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Fermi welcomes you">
    Welcome, fellow investigators! This chapter asks two uncomfortable questions. First: what do serious scientists — people with nothing to gain from skepticism — actually say about the feasibility of large-scale quantum computing? Second: what are the human consequences of quantum computing hype for students, researchers, and investors? These are questions the industry would prefer you not ask. But does the math check out? Let's find out!

## Learning Objectives

After completing this chapter, you will be able to:

- Summarize the key arguments of at least five expert skeptics who question the feasibility of fault-tolerant quantum computing
- Analyze the incentive asymmetry between QC proponents and skeptics and explain how it distorts the public discourse
- Evaluate the ethical implications of recruiting students into quantum computing PhD programs given current evidence
- Assess the QC job market and explain why career risk is concentrated in speculative R&D positions
- Apply historical parallels (string theory, cold fusion) to evaluate career risk in quantum computing
- Articulate the fiduciary and ethical responsibilities of investors and advisors in the quantum computing ecosystem

## Part I: The Expert Skeptics

The public discourse around quantum computing is dominated by proponents — researchers, company executives, and consultants who project optimism about the technology's future. But a smaller group of serious, credentialed scientists has published rigorous arguments that fault-tolerant quantum computing may be fundamentally impossible at commercially relevant scale. Understanding their arguments is essential for any informed assessment of the field.

### Gil Kalai's Mathematical Arguments

Gil Kalai, a professor of mathematics at Hebrew University of Jerusalem, has been the most persistent and mathematically rigorous skeptic of quantum computing. His arguments are not based on engineering pessimism but on mathematical analysis of noise and error correction in quantum systems.

Kalai's central thesis can be summarized as follows:

- **Correlated noise is unavoidable.** The threshold theorem for fault-tolerant quantum computing assumes that qubit errors are independent — each qubit fails independently of the others. Kalai argues mathematically that in any physical system, errors will be correlated (when one qubit fails, nearby qubits are more likely to fail simultaneously), and that correlated errors fundamentally break the error correction schemes that fault tolerance depends on.
- **The noise rate scales with computation complexity.** Kalai proposes that as quantum computations become more complex (more gates, more qubits), the effective noise rate increases — precisely the opposite of what is needed for fault tolerance. This is not an engineering limitation but a mathematical property of noisy quantum systems.
- **Quantum advantage on classically hard problems is impossible.** If Kalai's noise model is correct, then the quantum computational advantage predicted by theorems like Shor's algorithm cannot be achieved in practice — the noise will degrade the computation faster than error correction can fix it.

Kalai's arguments are published in peer-reviewed mathematics journals and have been debated extensively in the quantum information community. They have not been refuted — proponents typically respond by asserting that engineering improvements will reduce correlations sufficiently, which is an empirical claim that has not been demonstrated at scale.

| Argument | Implication | Proponent Response | Status |
|---|---|---|---|
| Errors are inherently correlated | Threshold theorem assumptions are violated | "We'll engineer out correlations" | Unresolved — no demonstration at scale |
| Noise scales with computation depth | Deeper circuits become noisier, not cleaner | "Error correction overhead will absorb it" | Unresolved — overhead may be unbounded |
| Quantum supremacy experiments are flawed | Google's Sycamore result doesn't prove what it claims | "The benchmark was valid" | Debated — classical simulations have matched the result |

### Dyakonov's Physics Arguments

Michel Dyakonov, a physicist at Université Montpellier, has published some of the most accessible and devastating critiques of quantum computing in both academic papers and his book *Will We Ever Have a Quantum Computer?* (Springer, 2020).

Dyakonov's central argument focuses on the problem of precision:

A quantum computer with $n$ qubits operates in a Hilbert space of dimension $2^n$. The state of the system is described by $2^n$ complex amplitudes, each of which must be controlled with sufficient precision for the computation to succeed. For a practically useful quantum computer — say, one with 1,000 logical qubits — this means controlling $2^{1000}$ parameters simultaneously.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    To grasp the scale of Dyakonov's argument, consider that $2^{1000}$ is approximately $10^{301}$. The number of atoms in the observable universe is approximately $10^{80}$. Dyakonov's point is not that quantum mechanics is wrong — it is that the *precision* required to manipulate a system of this dimensionality is physically unachievable. No engineering process in history has achieved — or even approached — the simultaneous precision control of $10^{301}$ parameters.

Dyakonov's argument is frequently dismissed by proponents as "not understanding quantum error correction." But Dyakonov's rebuttal is precise: error correction is supposed to reduce the effective dimensionality of the problem, but doing so requires the error correction itself to work with sufficient precision — creating a recursive dependency that may not converge.

### Levin's Complexity Doubts

Leonid Levin, a computer scientist at Boston University and co-discoverer of NP-completeness (alongside Stephen Cook), has expressed skepticism about the physical realizability of quantum speedups from a computational complexity perspective.

Levin's argument is subtle:

- The Extended Church-Turing thesis holds that any physically realizable computation can be efficiently simulated by a probabilistic Turing machine
- If quantum computers could efficiently solve problems that classical computers cannot (BQP ⊄ BPP), this would violate the Extended Church-Turing thesis
- Levin suggests that nature may impose constraints that prevent quantum systems from achieving the theoretical speedups — not because quantum mechanics is wrong, but because the physical processes required to implement those speedups may not be realizable at the necessary scale

This is a deep argument about the relationship between physics and computation. Levin does not claim to have proved that quantum computing is impossible — he argues that the burden of proof should be on those claiming it is possible, given the extraordinary nature of the claim.

### Laughlin on Coherence Limits

Robert Laughlin, a Nobel laureate in physics (1998, for work on the fractional quantum Hall effect), has raised concerns about whether quantum coherence can be maintained at the scale required for useful computation. Laughlin's perspective is rooted in condensed matter physics — the study of how quantum effects behave in real materials with real imperfections.

Laughlin's key concern is that quantum coherence is fundamentally a *small-system* phenomenon. As systems grow larger, they interact more strongly with their environment, and decoherence becomes not merely more likely but physically inevitable. The theoretical framework of fault-tolerant quantum computing assumes that decoherence can be corrected faster than it accumulates — but Laughlin suggests this assumption may fail at the scale where useful computation would occur.

### Goldreich's Computer Science Perspective

Oded Goldreich, a computer scientist at the Weizmann Institute, has questioned whether quantum computational advantage will materialize for practical problems from a complexity theory standpoint. Goldreich's concerns center on the gap between:

- **Theoretical quantum advantage:** Problems where quantum algorithms have provably better asymptotic complexity than classical algorithms (e.g., factoring)
- **Practical quantum advantage:** Problems where quantum algorithms actually outperform classical implementations on problem sizes that matter commercially

Goldreich notes that for many problems where quantum speedups are theoretically possible, the constant factors and error correction overhead may eliminate the advantage for any practically relevant problem size. A quantum algorithm that is theoretically $O(\sqrt{N})$ but requires 10,000x overhead per operation may be slower than a classical $O(N)$ algorithm for any $N$ that fits in a realistic quantum computer.

| Skeptic | Discipline | Core Argument | Key Publication |
|---|---|---|---|
| Gil Kalai | Mathematics | Correlated noise defeats error correction | "The Quantum Computer Puzzle" (AMS Notices, 2016) |
| Michel Dyakonov | Physics | $2^{1000}$ parameter precision is unachievable | *Will We Ever Have a Quantum Computer?* (Springer, 2020) |
| Leonid Levin | Computer Science | Extended Church-Turing thesis constrains physics | Various papers and lectures |
| Robert Laughlin | Physics (Nobel) | Coherence fails at scale due to condensed matter effects | Various lectures and interviews |
| Oded Goldreich | Computer Science | Overhead eliminates practical advantage | Complexity theory analysis |

## Part II: The Incentive Asymmetry

### Skeptics Have No Funding Bias

A striking feature of the quantum computing debate is the asymmetry of incentives between proponents and skeptics. Skeptics have essentially nothing to gain from their skepticism:

- Gil Kalai's career is in combinatorics and probability theory — he has no competing technology to promote
- Michel Dyakonov studies semiconductor physics — his funding does not depend on quantum computing failing
- Leonid Levin's reputation in complexity theory is secure regardless of what happens in quantum computing
- None of these skeptics sell competing products, manage competing investment funds, or run competing research programs

Their skepticism costs them professionally: they are excluded from quantum computing conferences, criticized by colleagues in the field, and sometimes dismissed as "not understanding" the technology. The social cost of skepticism is real; the financial benefit is zero.

### Proponents Have Funding Bias

By contrast, quantum computing proponents have enormous financial and career incentives to project optimism:

- **Researchers** depend on grants from agencies that have committed to quantum computing as a priority
- **Company executives** hold equity in quantum computing startups worth millions or billions — contingent on continued investment
- **Government officials** who championed quantum initiatives face political consequences if the programs are seen as wasteful
- **Consulting firms** generate revenue from reports projecting massive quantum computing markets
- **Conference organizers** need speakers and attendees who are excited about the field

This does not mean proponents are dishonest. Motivated reasoning (Chapter 11) is unconscious — proponents genuinely believe their optimistic assessments. But the incentive structure systematically selects for optimism: researchers who express skepticism lose funding, executives who lower expectations lose investors, and officials who question programs lose political capital.

!!! mascot-warning "Bias Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Fermi warns you">
    When evaluating any expert opinion on quantum computing, always ask: "What happens to this person's career and income if quantum computing fails?" If the answer is "nothing" — they're a skeptic with no skin in the game. If the answer is "they lose their grant, their equity, or their political standing" — they're a proponent with strong incentives for optimism. This doesn't make proponents wrong, but it should calibrate how much weight you give their predictions.

### Why Skeptics Are Ignored

Given that skeptics have no financial bias and proponents do, you might expect the investment community to weight skeptical arguments more heavily. The opposite occurs. Skeptics are systematically marginalized for several reasons:

- **Authority bias** favors proponents: quantum computing companies employ Nobel laureates and tenured professors from elite universities. Skeptics are often senior but less media-visible.
- **Narrative asymmetry:** "Quantum computers will transform the world" is a better story than "quantum computers may not work." Media outlets, investors, and policymakers prefer compelling narratives.
- **Groupthink dynamics:** The quantum computing community is self-reinforcing. Conference panels, journal special issues, and government advisory boards are populated by proponents. Skeptics are rarely invited.
- **Shooting the messenger:** Expressing skepticism is framed as "being against progress" or "not understanding the science" — social punishments that deter public dissent.
- **Complexity of skeptical arguments:** Kalai's correlated noise argument requires graduate-level mathematics. Dyakonov's $2^{1000}$ argument requires understanding Hilbert spaces. Proponents' pitch — "quantum computers are exponentially faster" — fits in a headline.

The result is a public discourse dominated by voices with financial incentives for optimism, while the voices with no bias are drowned out by a combination of social pressure, narrative appeal, and the genuine difficulty of communicating technical skepticism to non-expert audiences.

#### Diagram: Incentive Asymmetry Map

<iframe src="../../sims/incentive-asymmetry-map/main.html" width="100%" height="600" scrolling="no"></iframe>

<details markdown="1">
<summary>Quantum Computing Incentive Asymmetry Map</summary>
Type: diagram
**sim-id:** incentive-asymmetry-map<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning Objective:** Analyze the incentive structures of different stakeholders in the quantum computing ecosystem, distinguishing between those who gain from optimism and those who have no financial stake in the outcome (Bloom's Level 4: Analyze — differentiate, attribute, examine).

**Instructional Rationale:** A visual stakeholder map with balance-scale metaphor is appropriate because the Analyze/differentiate objective requires learners to compare incentive structures side by side. The visual weight of each stakeholder's incentives makes the asymmetry immediately apparent.

**Canvas Layout:**
- Center: Large balance scale (tilted heavily toward the "proponent" side)
- Left side of scale: Proponent stakeholders (weighted heavily)
- Right side of scale: Skeptic stakeholders (weighted lightly)
- Below scale: Legend and summary statistics

**Visual Elements:**
- Balance scale beam visibly tilted left (proponent side)
- Proponent side: Stacked boxes representing stakeholders, sized by financial incentive magnitude
  - QC Company Executives: $Billions (large box, red)
  - VC Investors: $Billions (large box, orange)
  - Government Programs: $Billions (large box, yellow)
  - Researchers/Faculty: $Millions (medium box, light orange)
  - Consulting Firms: $Millions (medium box, light yellow)
  - Media/Journalists: visibility/clicks (small box, gray)
- Skeptic side: Small boxes
  - Kalai: $0 financial stake (small box, blue)
  - Dyakonov: $0 financial stake (small box, blue)
  - Levin: $0 financial stake (small box, blue)
  - Laughlin: $0 financial stake (small box, blue)
  - Goldreich: $0 financial stake (small box, blue)

**Interactive Features:**
- Hover over any stakeholder box to see: name, financial stake, incentive direction, and a quote or example
- Click a stakeholder to highlight their connections to other stakeholders
- Toggle: "Show social costs of skepticism" — adds penalty indicators (conference exclusion, grant denial) to skeptic boxes
- Background: aliceblue

**Responsive Design:** Scale and stakeholder boxes resize with window; on narrow screens, stakeholders list vertically instead of on scale pans.

Implementation: p5.js with custom balance scale rendering and DOM tooltips
</details>

## Part III: Ethics of Quantum Computing Education and Careers

### The Ethics of QC Education

The ethical question at the heart of quantum computing education is straightforward: should universities recruit students into quantum computing PhD programs when the commercial viability of the field is uncertain and the career prospects are concentrated in speculative R&D?

This question has no simple answer, but it demands honest engagement. The relevant considerations include:

- **PhD programs take 5-7 years.** A student entering a quantum computing PhD program in 2025 will graduate around 2030-2032. If quantum computing investment contracts during that period — as the technology assessment frameworks from Chapter 10 suggest is plausible — the graduate enters a shrinking job market.
- **Students are not fully informed.** Most prospective PhD students learn about quantum computing from popular media, university marketing materials, and professors with grant funding. These sources systematically overstate the field's prospects.
- **The power asymmetry is significant.** A prospective PhD student is in a fundamentally unequal position relative to a tenured professor who controls lab access, recommendation letters, and future career prospects. Expressing skepticism about the professor's research area is socially costly.

### PhD Career Risk in Quantum Computing

The career risk for quantum computing PhDs is concentrated and poorly understood by most students entering the field.

| Career Outcome | Probability (est.) | Pathway | Risk |
|---|---|---|---|
| Academic faculty position | 5-10% | Postdoc → Assistant Prof → Tenure | Very low probability; funding depends on field health |
| QC company researcher | 20-30% | Direct hire from PhD/postdoc | Job depends on continued company funding |
| Government lab researcher | 10-15% | National lab positions (DOE, NIST) | More stable, but positions are limited |
| Pivot to adjacent field | 30-40% | Use transferable skills in classical CS, ML, physics | Requires significant retooling |
| Extended postdoc / underemployment | 15-25% | Multiple short-term positions | High personal cost |

The most likely outcome for a quantum computing PhD is *not* a permanent position in quantum computing. The most probable outcome is either pivoting to an adjacent field (requiring the "transferable skills" argument) or an extended period of underemployment in academic positions.

### The Job Market Reality

The quantum computing job market in 2025 is almost entirely composed of R&D positions funded by speculative investment:

- **Startup positions** depend on continued venture capital funding, which — as Chapter 9 showed — is at risk as companies fail to generate revenue
- **Corporate R&D positions** (IBM, Google, Microsoft) are more stable but could be cut if corporate priorities shift, as happened with Microsoft's initial topological qubit program
- **Academic positions** depend on government grant funding, which is subject to political cycles and could contract if national quantum initiatives are scaled back
- **Government lab positions** (Sandia, Los Alamos, NIST) are the most stable but represent a small fraction of total positions

The critical insight is that almost all quantum computing jobs are research positions, not production or commercial roles. In a mature technology sector, the majority of jobs are in engineering, sales, support, and operations — roles that exist because the technology generates revenue. Quantum computing has no revenue-generating products, and therefore no jobs that are sustained by commercial demand rather than speculative investment.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    Here's the test for whether a field has real job market depth: are there jobs for people who aren't doing cutting-edge research? In classical computing, there are millions of jobs for software engineers, system administrators, database managers, and IT support staff — none of whom need a PhD. In quantum computing, virtually every job requires a PhD in physics or computer science and involves research. That's the profile of a field that hasn't crossed the threshold from research to industry.

### What If the Field Contracts?

The possibility that quantum computing investment contracts — and with it, the job market — is not hypothetical. It is precisely what the technology assessment frameworks, financial analysis, and cognitive bias analysis presented in this course predict as the most likely near-term outcome.

If the field contracts, the consequences for quantum computing PhDs would include:

- **Startup closures:** Companies unable to raise new funding rounds close or are acqui-hired, eliminating positions
- **Corporate program reductions:** Large companies reduce or eliminate quantum computing teams as a cost-cutting measure
- **Grant funding declines:** Government agencies reduce quantum computing grant budgets as political priorities shift
- **Academic position freezes:** Universities stop hiring for quantum computing positions; existing positions are not replaced when vacated

### The Transferable Skills Debate

Proponents argue that quantum computing PhDs develop highly transferable skills — linear algebra, optimization theory, quantum mechanics, programming — that make them employable in adjacent fields like machine learning, finance, or materials science. This argument has some merit but deserves scrutiny:

**Arguments for transferability:**

- Strong mathematical foundations applicable to data science and ML
- Programming skills in Python and numerical computing
- Problem-solving abilities and research methodology
- Domain knowledge applicable to quantum chemistry and materials science

**Arguments against transferability:**

- The *specific* skills of quantum error correction, gate design, and quantum algorithm development have no direct application outside quantum computing
- Employers in adjacent fields often prefer candidates with direct experience rather than "transferable" PhD skills
- The 5-7 years spent on a quantum computing PhD represent an opportunity cost: those years could have been spent developing directly relevant expertise in a growing field like AI/ML
- The "transferable skills" argument is often deployed retroactively to justify sunk costs — the same argument could be made for any PhD in any field

!!! quote "The Transferable Skills Test"
    Ask yourself: "If I knew from the start that I would end up in machine learning, would I choose to get there via a 6-year quantum computing PhD — or via a 2-year ML Master's degree?" If the answer is the Master's degree, then the "transferable skills" argument is a rationalization, not a plan.

### Historical Parallels: String Theory and Cold Fusion

Two historical cases provide sobering parallels for quantum computing career risk.

**String Theory:** In the 1980s and 1990s, string theory was the most prestigious area of theoretical physics. Universities competed to hire string theorists, major grants flowed to string theory research, and graduate students were told that string theory was "the future of physics." By the 2010s, string theory had produced no testable predictions, no experimental confirmations, and no practical applications. Many string theory PhDs found themselves in a contracting job market with highly specialized skills that didn't transfer easily. Lee Smolin's *The Trouble with Physics* (2006) and Peter Woit's *Not Even Wrong* (2006) documented how the field's institutional dynamics — prestige, groupthink, and funding incentives — sustained a research program long after its promise had faded.

The parallel to quantum computing is direct: a field sustained by prestige and funding incentives, producing genuine intellectual work that may never translate into practical outcomes, with career consequences borne disproportionately by junior researchers.

**Cold Fusion:** In 1989, Stanley Pons and Martin Fleischmann announced the discovery of cold fusion — nuclear fusion at room temperature. The announcement generated enormous excitement, significant investment, and a wave of research programs. Within months, the claims were discredited. Researchers who had pivoted their careers to cold fusion found their expertise worthless and their reputations damaged by association with a discredited field.

The cold fusion parallel is more extreme than string theory — cold fusion was actively wrong, whereas quantum computing is based on correct physics. But the career lesson is the same: when a field contracts, the human consequences are borne by the people who committed their careers to it.

| Parallel | Duration of Hype | Outcome | Career Consequence |
|---|---|---|---|
| String theory | ~30 years (1984-present) | No experimental confirmation; field contracting | PhDs with narrow specialization; reduced job market |
| Cold fusion | ~2 years (1989-1991) | Claims discredited | Career damage by association; wasted years |
| Quantum computing | ~25 years (2000-present) | TBD | TBD — but risk profile matches string theory |

### Professor Grant Conflicts

University professors occupy a unique position in the quantum computing ecosystem: they simultaneously serve as educators (advising students), researchers (securing grants), and public intellectuals (shaping discourse). These roles create conflicts of interest that are rarely acknowledged:

- **As educators**, professors have a duty to give students honest, unbiased advice about career prospects
- **As researchers**, professors need graduate students and postdocs to staff their labs — and they need to demonstrate "impact" and "training" to justify their grants
- **As grant recipients**, professors depend on continued government investment in quantum computing — which means they have incentives to project optimism about the field's prospects

The conflict is most acute when a professor advises a prospective student. The honest answer might be: "The career prospects in quantum computing are highly uncertain, the job market depends on sustained speculative investment, and you might be better served by a PhD in machine learning or classical computing." But this honest answer conflicts with the professor's need for lab members, the department's need for PhD enrollment numbers, and the university's need for grant overhead revenue.

### Student Advising Ethics and Informed Consent

The ethical standard for advising students about high-risk career paths should be *informed consent*: the student should understand the risks before committing 5-7 years of their life. Informed consent requires:

1. **Honest risk assessment:** What is the probability that quantum computing jobs will exist in 5-10 years at current levels? (Answer: uncertain, with significant downside risk)
2. **Comparison with alternatives:** How do career prospects in quantum computing compare with classical CS, AI/ML, or other physics subfields? (Answer: significantly worse on risk-adjusted basis)
3. **Disclosure of conflicts:** Does the advisor have financial or career incentives that might bias their advice? (Answer: almost always yes — grant funding, lab staffing needs)
4. **Historical context:** What happened to graduates in similar fields that contracted? (Answer: string theory, nuclear physics post-Cold War — significant career disruption)

!!! mascot-tip "Fermi's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Fermi shares a tip">
    If you're considering a quantum computing PhD, ask your prospective advisor three direct questions: (1) "What fraction of your recent graduates have permanent positions in quantum computing?" (2) "What happens to my career if quantum computing funding contracts in the next 5-10 years?" (3) "What are the alternative career paths, and how do they compare to what I could reach by going into ML or classical CS directly?" If the answers are vague or defensive, that tells you something important.

## Part IV: Investment Ethics and Fiduciary Responsibility

### Ethical Investment Duty

Beyond career ethics, quantum computing raises questions about the ethical responsibilities of investors — particularly institutional investors managing other people's money.

The core principle is straightforward: investors have an ethical duty to make investment decisions based on evidence and rational analysis, not on FOMO, hype, or the desire to appear innovative. This duty is particularly acute when:

- The investor is managing pension funds, endowments, or other money entrusted by people who cannot evaluate the investment themselves
- The investment thesis depends on fundamental physics breakthroughs that may not occur
- Alternative investments with better risk-adjusted returns are available
- The investor lacks the technical expertise to independently evaluate the claims underlying the investment

### Fiduciary Responsibility

Fiduciary responsibility is the legal and ethical obligation to act in the best interest of those whose money you manage. For institutional investors — pension fund managers, endowment directors, fund-of-fund managers — fiduciary responsibility creates a specific test for quantum computing investment:

$$
\text{Fiduciary test: } E[\text{QC investment}] \geq E[\text{Best available alternative}]
$$

If the expected value of a quantum computing investment is lower than the expected value of alternative investments available to the same fund, the fiduciary has a duty to choose the alternative. As we demonstrated in Chapter 8, the expected value of quantum computing investment is almost certainly lower than alternatives including classical AI hardware, quantum sensors, and even index funds.

The fiduciary standard does not require certainty — it requires that the investor make a reasonable, evidence-based decision. Investing in quantum computing because "everyone else is doing it" (FOMO), because "we've already committed too much to stop" (sunk cost fallacy), or because "the quantum computing company CEO said it will work" (authority bias) violates the fiduciary standard, because these are bias-driven justifications, not evidence-based analysis.

### FOMO Drives Bad Quantum Computing Decisions

Fear of missing out is the bias most directly responsible for fiduciary failures in quantum computing investment. FOMO operates through a specific mechanism: it reframes the investment decision from "Does this have positive expected value?" to "Can I afford to be wrong if this turns out to be huge?"

This reframing is psychologically powerful because it shifts the burden of proof. Instead of requiring evidence *for* the investment (which is weak), it requires evidence *against* the worst-case scenario of missing out (which is impossible to provide, because you cannot prove a technology won't eventually succeed).

The corrective for FOMO-driven investment is to reframe the question back to expected value:

- "If I don't invest and quantum computing succeeds in 20 years, what did I lose?" (Answer: a speculative return that I could have captured by investing later, when the technology was more mature)
- "If I do invest and quantum computing fails, what did I lose?" (Answer: the money, plus the opportunity cost of not investing it in something with positive expected value)

The asymmetry favors caution: the cost of investing early in a technology that fails is the entire investment. The cost of investing later in a technology that succeeds is a smaller return — because you missed the early-stage risk premium. Given the 85-95% probability of failure for QC investments (Chapter 9), the expected cost of premature investment far exceeds the expected cost of patient observation.

#### Diagram: Ethical Decision Framework

<iframe src="../../sims/ethical-decision-framework/main.html" width="100%" height="600" scrolling="no"></iframe>

<details markdown="1">
<summary>QC Ethics and Fiduciary Decision Framework</summary>
Type: workflow
**sim-id:** ethical-decision-framework<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Learning Objective:** Apply ethical and fiduciary frameworks to evaluate quantum computing decisions in advising, investment, and career contexts, identifying where conflicts of interest compromise decision quality (Bloom's Level 3: Apply — use, execute, demonstrate).

**Instructional Rationale:** A decision tree with branching ethical scenarios is appropriate because the Apply/use objective requires learners to work through structured decision processes. Three scenario tabs (Student, Investor, Professor) let learners practice the framework in different roles.

**Canvas Layout:**
- Top: Three tab buttons — "Student Deciding on PhD," "Investor Evaluating QC Fund," "Professor Advising Student"
- Main area: Decision tree specific to the selected scenario
- Bottom: Summary panel showing identified conflicts and recommended actions

**Tab 1 — Student Deciding on PhD:**
Decision nodes:
1. "Has the advisor disclosed their grant funding dependencies?" → Yes/No
2. "Are career outcomes data available for the program's graduates?" → Yes/No
3. "Are alternative PhD programs with better career prospects available?" → Yes/No
4. "Do you have a backup plan if the field contracts?" → Yes/No
Outcomes: "Proceed with informed consent" / "Seek more information" / "Consider alternatives"

**Tab 2 — Investor Evaluating QC Fund:**
Decision nodes:
1. "Does the expected value exceed alternatives (classical AI, index funds)?" → Yes/No
2. "Can you independently verify the technical claims?" → Yes/No
3. "Is your decision driven by evidence or by FOMO?" → Evidence/FOMO
4. "Are you managing other people's money (fiduciary duty)?" → Yes/No
Outcomes: "Invest (small allocation)" / "Decline — fiduciary duty violated" / "Seek independent technical review"

**Tab 3 — Professor Advising Student:**
Decision nodes:
1. "Have you disclosed your grant funding interest?" → Yes/No
2. "Have you provided honest career outcome data?" → Yes/No
3. "Have you discussed alternatives and backup plans?" → Yes/No
4. "Would you advise your own child to pursue this PhD?" → Yes/No
Outcomes: "Ethical advising standard met" / "Conflict of interest present — additional disclosure needed"

**Interactive Features:**
- Click decision nodes to select path
- Selected path highlights; other paths fade
- Reaching an outcome shows a 2-3 sentence explanation
- Reset button per tab
- Background: aliceblue

**Responsive Design:** Decision trees scale with window; on narrow screens, nodes stack vertically.

Implementation: p5.js with tab switching and click detection on node shapes
</details>

## Bringing It Together: The Human Cost of Hype

The arguments in this chapter connect the technical skepticism of Part I with the human consequences of Parts III and IV. The chain of causation is:

1. **Expert skeptics present evidence** that fault-tolerant quantum computing may be fundamentally impossible at commercially relevant scale
2. **Incentive asymmetry** ensures that skeptics are marginalized and proponents dominate the discourse
3. **The optimistic discourse** attracts students, investment, and government funding
4. **Students commit 5-7 years** to PhD programs in a field with uncertain commercial viability
5. **Investors commit billions** to companies with no revenue and blocked exit paths
6. **When reality corrects** — as it has begun to in 2023-2025 — the consequences fall on the least powerful participants: junior researchers and retail investors

The ethical imperative is not to stop quantum computing research — basic research is valuable regardless of commercial outcomes. The imperative is honesty: honest advising of students, honest assessment of investment risk, honest disclosure of conflicts of interest, and honest engagement with skeptical arguments rather than dismissal of them.

## Key Takeaways

- Five serious scientists — Kalai, Dyakonov, Levin, Laughlin, and Goldreich — have published rigorous arguments questioning the feasibility of fault-tolerant quantum computing, from mathematical, physical, and computational perspectives
- Skeptics have no financial incentive for their skepticism; proponents have enormous financial and career incentives for optimism — this asymmetry should heavily weight how we evaluate competing claims
- Skeptics are systematically marginalized through authority bias, narrative asymmetry, groupthink, and the genuine difficulty of communicating technical arguments to non-experts
- The quantum computing job market is almost entirely speculative R&D — there are no production or commercial roles because there are no revenue-generating products
- PhD career risk in quantum computing parallels historical cases in string theory and cold fusion where field contractions left graduates with narrow, non-transferable expertise
- The "transferable skills" argument has some merit but is often deployed as a rationalization rather than a career plan
- Professors advising students face genuine conflicts of interest between their duty as educators and their needs as grant-funded researchers
- Institutional investors have a fiduciary duty to evaluate quantum computing investment based on evidence and expected value, not FOMO
- Informed consent — for students choosing careers and investors committing capital — requires honest disclosure of risks, alternatives, and conflicts of interest

!!! mascot-celebration "Excellent Investigative Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Fermi celebrates">
    This was a challenging chapter — technically rigorous *and* personally relevant. You now understand the strongest scientific arguments against quantum computing, the incentive structures that suppress those arguments, and the ethical consequences for real people. Whether you're advising a student, evaluating an investment, or making your own career choice, you have the frameworks to do it with eyes wide open. Outstanding work, fellow investigator!

## Review Questions

??? question "Question 1: Summarize Dyakonov's central argument about the feasibility of large-scale quantum computing."
    Dyakonov argues that a quantum computer with $n$ qubits operates in a Hilbert space of dimension $2^n$, meaning its state is described by $2^n$ complex amplitudes that must all be simultaneously controlled with sufficient precision. For a useful quantum computer with 1,000 logical qubits, this means controlling approximately $2^{1000} \approx 10^{301}$ parameters — a number vastly exceeding the number of atoms in the observable universe ($10^{80}$). Dyakonov's point is not that quantum mechanics is wrong but that the precision required for such simultaneous control is physically unachievable. Error correction is supposed to reduce this requirement, but Dyakonov argues that error correction itself requires precision that creates a recursive dependency that may not converge.

??? question "Question 2: Why does the incentive asymmetry between skeptics and proponents matter for evaluating quantum computing claims?"
    The incentive asymmetry matters because it creates a systematic bias in public discourse. Skeptics (Kalai, Dyakonov, Levin, Laughlin, Goldreich) have no financial stake in quantum computing failing — their careers, funding, and reputations do not depend on the outcome. Proponents (researchers, executives, investors, government officials) have enormous financial and career incentives tied to continued optimism. This means the optimistic voices dominating the discourse are the most likely to be biased, while the skeptical voices being marginalized are the least likely to be biased. Rational evaluation should weight unbiased voices more heavily than biased ones — but the social dynamics of the quantum computing ecosystem do the opposite.

??? question "Question 3: What is the 'transferable skills' argument for quantum computing PhDs, and why should it be scrutinized?"
    The transferable skills argument claims that quantum computing PhDs develop broadly applicable skills — linear algebra, optimization, programming, research methodology — that make them employable in adjacent fields like machine learning, finance, or materials science. The argument has some merit: these skills are genuinely valuable. However, it should be scrutinized because: (1) the *specific* skills of quantum error correction, gate design, and quantum algorithm development have no direct application outside QC; (2) employers typically prefer candidates with direct domain experience; (3) the 5-7 year PhD represents a massive opportunity cost — those years could build directly relevant expertise in a growing field; and (4) the argument is often deployed retroactively to rationalize sunk career costs rather than as a genuine career strategy.

??? question "Question 4: How does the string theory career parallel apply to quantum computing?"
    String theory in the 1980s-2000s shares several structural features with quantum computing today: (1) it was the most prestigious area in its field, attracting the best students; (2) major grants and positions flowed to string theorists; (3) the field was sustained by institutional momentum, prestige, and groupthink; (4) it produced genuine intellectual achievements that never translated to practical applications; and (5) when the field contracted, graduates found themselves with highly specialized skills in a shrinking job market. The parallel warns that quantum computing PhD students may face similar outcomes: a field that was "the future" when they entered becomes a contracting niche by the time they graduate, leaving them with specialized expertise that doesn't transfer easily to growing fields.

??? question "Question 5: What does fiduciary responsibility require of institutional investors regarding quantum computing?"
    Fiduciary responsibility requires that institutional investors — pension fund managers, endowment directors, fund-of-fund managers — act in the best interest of those whose money they manage. For quantum computing, this means: (1) the expected value of a QC investment must exceed the expected value of available alternatives (classical AI, quantum sensors, index funds); (2) the decision must be based on evidence and rational analysis, not FOMO, hype, or the desire to appear innovative; (3) the investor must either have or obtain independent technical expertise to evaluate the underlying claims; and (4) the decision cannot rely on biased justifications like sunk cost reasoning or bandwagon effects. Given that the expected value of QC investment is almost certainly lower than readily available alternatives, a fiduciary investing heavily in quantum computing may be violating their legal and ethical obligations.
