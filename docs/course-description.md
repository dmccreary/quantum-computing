# Course Description

**Course Title:** A Skeptic's Guide to Quantum Computing: Why It May Never Be Economically Viable

**Course Classification:** Multidisciplinary/Physics/Computing/Economics/Psychology — Special Topics in Technology Assessment

**Credits:** 3 semester hours

**Modality:** A 10-week in-person lecture or self paced course with discussion sections; online-synchronous option available

**Target Audience:** Upper-division undergraduates and graduate students in physics, computer science, economics, public policy, and science & technology studies. Also suitable for technology investors, venture capitalists, corporate strategists, and policymakers who evaluate emerging-technology claims.

## Course Summary

Over $100 billion has been invested in quantum computing worldwide, yet no company has produced a single dollar of positive return on investment from quantum computing products or services. Proponents routinely assert that economic viability is "just a few years away" — a claim that has been made, and missed, repeatedly since the 1990s. Most current roadmaps assume that quantum computing will become practical once devices reach approximately one million high-quality qubits. However, reaching that milestone requires multiple simultaneous breakthroughs in condensed-matter physics, materials science, cryogenic engineering, quantum error correction theory, and classical control electronics — none of which are guaranteed.

This course examines quantum computing through the lens of economic viability, investment risk, cognitive bias, and the sociology of technology hype. We trace the full history of quantum computing from Feynman's 1981 conjecture through the present day, cataloging the repeated pattern of optimistic predictions followed by missed deadlines. We analyze the fundamental physics constraints — decoherence, error rates, qubit connectivity, cryogenic requirements — that make large-scale fault-tolerant quantum computing extraordinarily difficult. We examine the psychology of sunk-cost reasoning, confirmation bias, and groupthink that sustain investment in technologies with uncertain payoffs. And we compare quantum computing investment against alternative opportunities — such as quantum sensors, quantum communication, and classical AI hardware — that may offer far better risk-adjusted returns.

---

## Prerequisites

### Required

- **Introductory Physics** (calculus-based, two semesters) — Students must understand classical mechanics, electromagnetism, and basic thermodynamics
- **Linear Algebra** — Familiarity with vector spaces, matrix operations, eigenvalues, and tensor products
- **Introductory Probability and Statistics** — Understanding of probability distributions, expected value, Bayesian reasoning, and basic hypothesis testing
- **Introduction to Computer Science** — Comfort with algorithms, computational complexity (Big-O notation), and the concept of P vs. NP

### Recommended (Helpful but Not Required)

- **Introductory Quantum Mechanics** — One semester covering wave functions, superposition, measurement, entanglement, and the postulates of quantum mechanics
- **Microeconomics or Managerial Finance** — Understanding of net present value, return on investment, risk-adjusted returns, and technology adoption curves
- **History or Philosophy of Science** — Exposure to how scientific paradigms shift, the sociology of scientific communities, and the problem of distinguishing genuine breakthroughs from hype
- **Critical Thinking or Formal Logic** — Ability to identify logical fallacies, cognitive biases, and rhetorical manipulation in technical claims

---

## Topics Covered

### Part I: Foundations and History

1. **What Is Quantum Computing? A Minimal Technical Primer**
    - Qubits, superposition, entanglement, and interference
    - Quantum gates, circuits, and the circuit model of computation
    - The theoretical promise: exponential state spaces and quantum parallelism
    - What quantum computers can and cannot do (BQP vs. NP)

2. **A Detailed History and Timeline of Quantum Computing**
    - 1981 — Feynman proposes quantum simulation
    - 1985 — Deutsch describes the universal quantum computer
    - 1994 — Shor's algorithm for factoring (and the cryptography panic begins)
    - 1995 — Grover's search algorithm
    - 1996 — First quantum error correction codes (Shor, Steane)
    - 1998 — First 2-qubit NMR demonstrations
    - 2001 — IBM/Stanford factor the number 15 on a 7-qubit NMR machine
    - 2007 — D-Wave announces "commercial" quantum computer (quantum annealing)
    - 2011 — D-Wave One sold to Lockheed Martin ($10M)
    - 2013 — Google/NASA purchase D-Wave Two; debate over whether it is truly quantum
    - 2016 — IBM puts 5-qubit system on the cloud (IBM Quantum Experience)
    - 2019 — Google claims "quantum supremacy" with 53-qubit Sycamore (solving a problem with no commercial value)
    - 2020 — China's Jiuzhang photonic system claims supremacy for boson sampling
    - 2021 — IBM unveils 127-qubit Eagle processor
    - 2022 — IBM unveils 433-qubit Osprey; announces roadmap to 100,000+ qubits by 2033
    - 2023 — IBM unveils 1,121-qubit Condor; begins pivot toward "utility-scale" narrative
    - 2024 — Multiple companies announce "logical qubit" demonstrations with heavy error correction overhead
    - 2025 — Still zero commercial quantum advantage demonstrated on any real-world problem
    - Pattern analysis: At every milestone, proponents claimed viability was "3-5 years away"

3. **The Appendix of Overly Optimistic Claims**
    - Geordie Rose (D-Wave, 2007): "We have built a quantum computer" — reality: a quantum annealer with no proven speedup
    - Hartmut Neven (Google, 2019): "Quantum supremacy achieved" — reality: a contrived benchmark with no practical application, later matched by classical supercomputers
    - IBM Quantum Roadmap (2020): "Quantum advantage by 2025" — reality: repeatedly revised and redefined
    - Startup pitch decks (2018-2024): Cataloged examples of "5-year to commercial viability" claims from Rigetti, IonQ, PsiQuantum, and others
    - Political and media amplification: How press releases become headlines become policy
    - Historical parallels: Fusion energy ("30 years away for 60 years"), flying cars, nanotechnology self-replicators

### Part II: The Physics Barriers

4. **Decoherence: The Fundamental Enemy**
    - What decoherence is and why it destroys quantum information
    - Decoherence timescales across platforms (superconducting, trapped ion, photonic, topological)
    - The harsh arithmetic: current decoherence times vs. times needed for useful computation
    - Why decoherence is not merely an engineering problem — it is a physics problem

5. **Quantum Error Correction: The Staggering Overhead**
    - The threshold theorem: fault-tolerant quantum computing is theoretically possible *if* error rates are low enough
    - Current physical error rates vs. required thresholds
    - The overhead ratio: 1,000-10,000 physical qubits per logical qubit
    - Running Shor's algorithm to break RSA-2048: estimated requirement of 20 million physical qubits with current error rates
    - The circular dependency: better error correction requires more qubits, more qubits introduce more errors

6. **The Cryogenic Bottleneck**
    - Superconducting qubits require temperatures of 10-15 millikelvin (colder than outer space)
    - Dilution refrigerator capacity, cost, and energy consumption
    - The wiring problem: each qubit requires multiple control lines from room temperature to millikelvin
    - Why you cannot simply "build bigger fridges" — fundamental thermodynamic limits
    - Comparison to room-temperature classical computing

7. **Qubit Connectivity and the Compilation Problem**
    - Limited qubit-to-qubit connectivity in real hardware
    - SWAP gate overhead to route information across a chip
    - The gap between algorithm assumptions (all-to-all connectivity) and hardware reality (nearest-neighbor)
    - How compilation overhead erodes theoretical speedups

8. **Alternative Hardware Platforms and Why None Have Solved the Problem**
    - Superconducting circuits (Google, IBM): fast but noisy, cryogenic
    - Trapped ions (IonQ, Quantinuum): high fidelity but slow gate speeds, difficult to scale
    - Photonic systems (PsiQuantum, Xanadu): room temperature but massive loss rates
    - Topological qubits (Microsoft): theoretically robust, but no confirmed existence of non-Abelian anyons after 20+ years
    - Neutral atoms (QuEra, Pasqal): promising but early-stage
    - Each platform has fundamental physics obstacles, not just engineering challenges

### Part III: The Economics and Psychology of Quantum Hype

9. **What Is a General Purpose Technology (GPT)?**
    - Definition and characteristics of GPTs: steam engine, electricity, the internet, semiconductors
    - Why GPTs must be broadly applicable, improvable over time, and enable complementary innovations
    - Why quantum computing fails the GPT test:
        - Extremely narrow application space (specific optimization, simulation, and cryptographic problems)
        - Cannot replace classical computers for general tasks
        - No ecosystem of complementary innovations
        - Prohibitive cost and infrastructure requirements
    - Contrast with classical AI/ML, which *is* emerging as a GPT

10. **Investment Risk Analysis: Lessons from History**
    - Framework: Expected value = probability of success x magnitude of payoff - cost of investment
    - Technologies where bold physics bets paid off: transistors, lasers, fiber optics, GPS (atomic clocks), MRI (nuclear magnetic resonance)
    - Technologies where investors lost fortunes due to physics limitations: cold fusion, theranos (biology, not physics, but instructive), supersonic commercial aviation (Concorde economics)
    - The asymmetry of information: when scientists know the limitations but investors do not
    - Case study: Theranos as a template for how charismatic founders exploit information asymmetry
    - How to evaluate technology readiness levels (TRLs) honestly
    - Quantum computing by TRL standards: still at TRL 2-3 (technology concept formulated, experimental proof of concept)

11. **Cognitive Biases in Quantum Computing Investment**
    - **Sunk Cost Fallacy:** "We've invested $10 billion; we can't stop now"
    - **Confirmation Bias:** Interpreting incremental progress as validation of the entire thesis
    - **Anchoring:** Fixating on theoretical speedups (exponential!) while ignoring practical overhead
    - **Bandwagon Effect:** "Google, IBM, and Microsoft are doing it, so it must be viable"
    - **Dunning-Kruger Effect:** Investors and policymakers who understand neither quantum mechanics nor computational complexity making funding decisions
    - **Optimism Bias:** Systematically underestimating the difficulty of remaining breakthroughs
    - **Authority Bias:** Trusting Nobel laureates and corporate research labs without examining their incentive structures
    - **FOMO (Fear of Missing Out):** Geopolitical competition (US vs. China) driving investment regardless of economic merit

12. **Causal Loop Diagrams: Why Quantum Investment Perpetuates Itself**
    - **The Hype Reinforcement Loop:**
        - Government/corporate funding → Research papers → Media coverage → Public excitement → Political pressure to fund more → More funding
    - **The Sunk Cost Escalation Loop:**
        - Prior investment → Reluctance to write off losses → Continued investment → Need to justify continued investment → Overly optimistic milestones → Prior investment grows
    - **The Career Incentive Loop:**
        - Quantum research funding → Faculty positions and graduate students → More papers and grant proposals → Pressure to promise breakthroughs → More funding
    - **The Geopolitical Arms Race Loop:**
        - Country A invests → Country B fears falling behind → Country B invests → Country A fears falling behind → Escalating investment regardless of technical merit
    - **The Missing Balancing Loop:**
        - Honest assessment of physics barriers → Reduced funding → Fewer researchers → Slower progress → *This loop is suppressed by career and institutional incentives*
    - Systems dynamics analysis: How these reinforcing loops create a self-sustaining investment bubble

13. **The Cryptography Hype: Can Quantum Computers Break Encryption?**
    - Shor's algorithm: theoretically, yes, for RSA and ECC
    - The resource requirements: millions of high-quality logical qubits, running for hours to days
    - Current state: the largest number factored by a quantum computer is 21 (and even that used shortcuts)
    - Post-quantum cryptography (PQC): NIST has already standardized quantum-resistant algorithms
    - The window of vulnerability is likely closing before quantum computers can open it
    - "Harvest now, decrypt later" threat: real but overstated — most encrypted data becomes worthless long before million-qubit machines could exist
    - The inconvenient truth: even if quantum computers *could* break current encryption, we have already deployed countermeasures

14. **Expert Skeptics: Physicists Who Say It Won't Work**
    - Gil Kalai (Hebrew University): Mathematical arguments for why quantum error correction cannot scale
    - Michel Dyakonov (Université Montpellier): "The case against quantum computing" — fundamental precision requirements are unachievable
    - Mikhail Dyakonov's argument: controlling 2^1000 continuous parameters simultaneously is physically impossible
    - Leonid Levin (Boston University): Skepticism about the physical realizability of quantum speedups
    - Robert Laughlin (Nobel laureate): Questions about whether quantum coherence can be maintained at scale
    - Oded Goldreich: Computational complexity perspective on why quantum advantage may not materialize for practical problems
    - The asymmetry of incentives: skeptics have no funding to lose; proponents do

### Part IV: Ethics, Alternatives, and Clear Thinking

15. **The Ethics of Quantum Computing Education and Careers**
    - Should universities recruit students into quantum computing PhD programs when commercial jobs may never exist?
    - The current job market: almost entirely R&D positions funded by speculative investment
    - What happens to quantum computing PhDs if the field contracts?
    - The responsibility of professors who know the odds but benefit from grant funding
    - Comparison to other speculative fields: string theory, cold fusion research
    - The transferable skills argument: is it genuine or is it a rationalization?
    - Ethical framework for advising students about high-risk career paths

16. **Better Bets: Quantum Sensors and Quantum Communication**
    - Quantum sensors: already commercially viable and economically productive
        - Atomic clocks (GPS depends on them)
        - Quantum magnetometers (medical imaging, mineral exploration)
        - Quantum gravimeters (civil engineering, defense)
    - Quantum key distribution (QKD): niche but deployable today
    - Why quantum sensing succeeds where quantum computing fails: sensors need only single qubits or small entangled states, not millions of error-corrected qubits
    - Investment comparison: risk-adjusted returns of quantum sensing vs. quantum computing

17. **How to Think Clearly About Emerging Technology Claims**
    - The base rate of technology predictions: most fail
    - Red flags in technology hype: unfalsifiable timelines, moving goalposts, appeal to theoretical possibility, suppression of skepticism
    - A checklist for evaluating quantum computing claims
    - The role of science journalism in amplifying hype
    - How to read a quantum computing press release critically
    - Applying this framework beyond quantum computing: fusion, AGI, autonomous vehicles, brain-computer interfaces

---

## Topics NOT Covered

This course deliberately excludes or limits the following topics:

- **Quantum computing programming tutorials** — We do not teach Qiskit, Cirq, or other quantum SDKs. Students interested in quantum programming should take a dedicated quantum computing course.
- **Detailed quantum mechanics derivations** — We assume students have or can acquire basic quantum mechanics knowledge. We do not re-derive the Schrödinger equation or the formalism of density matrices.
- **Quantum field theory or particle physics** — These are separate domains; our focus is on quantum information processing hardware.
- **Detailed financial modeling or portfolio theory** — We discuss investment risk conceptually but do not teach quantitative finance.
- **Advocacy for or against any specific company** — We analyze public claims and technical fundamentals, not stock picks. This is not investment advice.
- **Classified or export-controlled information** — All material is drawn from publicly available sources.
- **Quantum biology or quantum consciousness** — These speculative fields are outside our scope.
- **Detailed post-quantum cryptography algorithms** — We discuss PQC at a high level but do not teach lattice-based or code-based cryptographic constructions.

---

## Learning Objectives (Revised Bloom's Taxonomy, 2001)

The 2001 revision of Bloom's Taxonomy (Anderson & Krathwohl) organizes cognitive processes into six levels: **Remember, Understand, Apply, Analyze, Evaluate, and Create.** Below, learning objectives are organized by level, from foundational to advanced.

### Level 1: Remember

Students who complete this course will be able to:

1.1. **List** the major milestones in the history of quantum computing from 1981 to the present, including key dates, researchers, and claimed achievements.

1.2. **Identify** the five major qubit hardware platforms (superconducting, trapped ion, photonic, topological, neutral atom) and their primary physical characteristics.

1.3. **Recall** the definition of a General Purpose Technology (GPT) and name at least four historical examples.

1.4. **State** the approximate number of physical qubits required per logical qubit under current error correction schemes (1,000-10,000).

1.5. **Name** at least five cognitive biases (sunk cost fallacy, confirmation bias, anchoring, bandwagon effect, optimism bias) and provide a one-sentence definition of each.

1.6. **List** at least three prominent physicists or mathematicians who have publicly expressed skepticism about the feasibility of large-scale quantum computing.

1.7. **Recall** that no quantum computer has demonstrated commercial advantage on any real-world problem as of 2025.

### Level 2: Understand

Students who complete this course will be able to:

2.1. **Explain** in plain language why decoherence is a fundamental obstacle to scaling quantum computers, not merely an engineering challenge to be solved with better manufacturing.

2.2. **Describe** the circular dependency in quantum error correction: more qubits are needed to correct errors, but more qubits introduce more errors.

2.3. **Summarize** the key arguments of at least two expert skeptics (e.g., Kalai, Dyakonov) regarding the physical realizability of fault-tolerant quantum computing.

2.4. **Explain** why quantum computing does not meet the criteria for a General Purpose Technology, contrasting it with electricity, the transistor, or the internet.

2.5. **Describe** the reinforcing feedback loops (hype, sunk cost, career incentive, geopolitical competition) that sustain quantum computing investment despite absent returns.

2.6. **Paraphrase** the distinction between quantum supremacy (solving a contrived problem faster) and quantum advantage (solving a commercially valuable problem faster or cheaper).

2.7. **Interpret** a quantum computing company's roadmap and explain what assumptions about physics breakthroughs are embedded in it.

2.8. **Explain** why the threat of quantum computers breaking RSA encryption may be closing before quantum computers are capable of exploiting it, due to post-quantum cryptography standardization.

### Level 3: Apply

Students who complete this course will be able to:

3.1. **Calculate** the approximate physical qubit requirements for running Shor's algorithm on RSA-2048, given published estimates of error rates and error correction overhead.

3.2. **Apply** an investment risk analysis framework (expected value = probability x payoff - cost) to a hypothetical quantum computing venture, and compare it to an alternative investment in quantum sensing.

3.3. **Use** a cognitive bias checklist to identify biases present in a quantum computing press release, investor pitch, or news article.

3.4. **Construct** a basic causal loop diagram illustrating a reinforcing feedback loop in quantum computing investment.

3.5. **Apply** technology readiness level (TRL) criteria to classify the current state of at least two quantum computing platforms.

3.6. **Use** the historical pattern of overly optimistic quantum computing predictions to estimate the reliability of a current prediction about commercial quantum advantage timelines.

3.7. **Demonstrate** how to read a quantum computing research paper's abstract and extract the key assumptions, limitations, and caveats that are often omitted from press coverage.

### Level 4: Analyze

Students who complete this course will be able to:

4.1. **Compare and contrast** the physics barriers facing at least three quantum computing hardware platforms, identifying which barriers are engineering challenges and which are fundamental physics constraints.

4.2. **Analyze** the incentive structures of quantum computing researchers, startup founders, corporate R&D labs, venture capitalists, and government funding agencies, and explain how these incentives create systematic bias toward optimism.

4.3. **Differentiate** between incremental progress (e.g., slightly lower error rates, slightly more qubits) and the transformative breakthroughs actually required for commercial viability.

4.4. **Examine** the historical analogy between quantum computing hype and at least two other technology hype cycles (e.g., fusion energy, nanotechnology, autonomous vehicles), identifying structural similarities and differences.

4.5. **Deconstruct** a quantum computing company's claim of "quantum advantage" by identifying the benchmark used, the classical baseline compared against, and the commercial relevance of the problem solved.

4.6. **Analyze** the gap between the theoretical computational complexity advantages of quantum algorithms and the practical overhead introduced by error correction, limited connectivity, and compilation.

4.7. **Distinguish** between the economic viability of quantum computing, quantum sensing, and quantum communication, explaining why the physics requirements differ fundamentally.

### Level 5: Evaluate

Students who complete this course will be able to:

5.1. **Assess** the probability that fault-tolerant quantum computing at commercially relevant scale (1 million+ logical qubits) will be achieved within 10, 20, or 50 years, defending the assessment with specific physics arguments.

5.2. **Critique** a quantum computing company's investor presentation, identifying unsupported claims, omitted risks, misleading benchmarks, and cognitive biases embedded in the narrative.

5.3. **Judge** the ethical implications of recruiting students into quantum computing PhD programs given current evidence about commercial viability and career prospects.

5.4. **Evaluate** whether government funding of quantum computing research is justified as basic science investment, as national security investment, or as economic development investment, considering the opportunity cost of alternative investments.

5.5. **Appraise** the strength of the expert skeptics' arguments (Kalai, Dyakonov, etc.) against the proponents' arguments, identifying which claims are supported by rigorous analysis and which rely on speculation or analogy.

5.6. **Rank** at least five technology investment opportunities (quantum computing, quantum sensing, classical AI hardware, fusion energy, advanced batteries) by risk-adjusted expected return, defending the ranking with evidence from the course.

5.7. **Assess** media coverage of a quantum computing breakthrough, rating its accuracy, completeness, and potential to mislead non-expert readers.

### Level 6: Create

Students who complete this course will be able to:

6.1. **Design** an investment risk assessment framework for emerging physics-based technologies, incorporating probability estimation, timeline analysis, cognitive bias detection, and opportunity cost comparison.

6.2. **Compose** a written brief (suitable for a non-technical executive, policymaker, or investor) that accurately communicates the current state, genuine prospects, and key risks of quantum computing.

6.3. **Construct** a complete causal loop diagram (systems dynamics model) of the quantum computing investment ecosystem, including all major reinforcing and balancing loops, and identify leverage points where honest assessment could break the hype cycle.

6.4. **Develop** a "red team" analysis of a quantum computing company's roadmap, systematically identifying the physics breakthroughs assumed, the probability of each, and the consequences if any one fails.

6.5. **Propose** a balanced national quantum technology investment strategy that allocates resources across quantum computing research, quantum sensing commercialization, quantum communication infrastructure, and post-quantum cryptography deployment, with explicit risk-adjusted justification for each allocation.

6.6. **Create** an "Overly Optimistic Claims" tracker: a structured database documenting quantum computing predictions, their stated timelines, their actual outcomes, and the lessons each teaches about technology forecasting.

6.7. **Author** a critical review of a quantum computing research paper or press release, suitable for publication in a science policy or technology assessment journal, applying the analytical frameworks learned in the course.

---

## Assessment Methods

| Assessment | Weight | Bloom's Levels Targeted |
|---|---|---|
| Historical Timeline & Claims Analysis (research paper) | 15% | Remember, Understand, Analyze |
| Physics Barriers Technical Report | 20% | Understand, Apply, Analyze |
| Cognitive Bias Case Study (press release or pitch deck analysis) | 15% | Apply, Analyze, Evaluate |
| Causal Loop Diagram & Systems Analysis | 15% | Apply, Analyze, Create |
| Investment Risk Comparison (quantum computing vs. alternatives) | 15% | Apply, Evaluate, Create |
| Final Project: Executive Brief or Red Team Analysis | 20% | Evaluate, Create |

---

## Required Readings (Selected)

- Dyakonov, M. (2020). *Will We Ever Have a Quantum Computer?* Springer.
- Kalai, G. (2016). "The Quantum Computer Puzzle." *Notices of the AMS*, 63(5), 508-516.
- National Academies of Sciences (2019). *Quantum Computing: Progress and Prospects.* National Academies Press. (Especially Chapter 6: "Key Findings and Recommendations")
- Aaronson, S. (2008). "The Limits of Quantum Computers." *Scientific American*, March 2008. (Nuanced view from a proponent)
- Preskill, J. (2018). "Quantum Computing in the NISQ Era and Beyond." *Quantum*, 2, 79. (The originator of "NISQ" acknowledging limitations)

---

!!! note
    This course is designed to make students better thinkers about technology claims, investment risk, and the sociology of science — skills that are valuable regardless of whether quantum computing ultimately succeeds or fails. The best possible outcome of this course is that students leave equipped to evaluate any bold technology claim with rigor, humility, and clear-eyed realism.*
