# Quiz: A History of Quantum Computing Promises

Test your understanding of the major milestones in quantum computing history, the pattern of optimistic predictions, and the persistent gap between promises and results with these review questions.

---

#### 1. What did Richard Feynman propose in his 1981 talk at MIT?

<div class="upper-alpha" markdown>
1. That quantum computers would replace all classical computers within 20 years
2. That quantum systems could be used to simulate other quantum systems, since classical computers cannot do so efficiently
3. That quantum entanglement could be used for faster-than-light communication
4. That Shor's algorithm could break RSA encryption
</div>

??? question "Show Answer"
    The correct answer is **B**. Feynman argued that simulating a quantum system of $n$ particles on a classical computer requires tracking $2^n$ amplitudes — an exponentially growing requirement. He proposed building a computer that operates according to quantum mechanical principles to simulate other quantum systems. His vision was specifically about quantum simulation, not about building a general-purpose quantum computer. This distinction, often lost in popular retellings, matters because the original vision was far narrower than how quantum computing is marketed today.

    **Concept Tested:** Feynman's 1981 Idea

---

#### 2. Why did Shor's 1994 algorithm redirect the entire field of quantum computing?

<div class="upper-alpha" markdown>
1. It proved quantum computers could solve any NP-complete problem
2. It demonstrated the first working quantum hardware
3. It showed that quantum computers could factor large integers, threatening RSA encryption and attracting security-driven government funding
4. It proved that quantum computers were impossible to build
</div>

??? question "Show Answer"
    The correct answer is **C**. Shor's algorithm can factor large integers in polynomial time, which would break RSA encryption — the system protecting virtually all digital commerce and classified communications. This attracted massive funding from intelligence agencies (NSA, DARPA) and redirected the field from Feynman's original vision of physics simulation toward cryptanalysis. The funding followed the security threat, not the science — establishing a recurring pattern where quantum computing's direction is shaped by what attracts funding rather than what the physics can deliver.

    **Concept Tested:** Shor's Algorithm 1994

---

#### 3. What was the significance of the 2001 IBM/Stanford demonstration that factored the number 15?

<div class="upper-alpha" markdown>
1. It proved quantum computers could break RSA encryption
2. It was the first physical demonstration of Shor's algorithm, but factored a number any first-grader could factor mentally
3. It demonstrated that NMR systems could scale to thousands of qubits
4. It showed that quantum computers were faster than classical computers for all factoring problems
</div>

??? question "Show Answer"
    The correct answer is **B**. The 7-qubit NMR demonstration that factored $15 = 3 \times 5$ was a genuine landmark — the first physical execution of Shor's algorithm. However, it also revealed the enormous gap between theory and practice. Twenty-four years later, quantum computers have not significantly advanced beyond this in practical factoring capability. The NMR approach itself proved to be a dead end that does not scale beyond a handful of qubits, but the excitement it generated carried the field forward.

    **Concept Tested:** First Lab Demos 1998-2001

---

#### 4. What was D-Wave's Orion system, announced in 2007?

<div class="upper-alpha" markdown>
1. A 16-qubit quantum annealer — a specialized device for optimization, not a universal quantum computer
2. The first universal gate-based quantum computer capable of running Shor's algorithm
3. A classical computer that simulated quantum behavior
4. A 128-qubit error-corrected quantum processor
</div>

??? question "Show Answer"
    The correct answer is **A**. D-Wave's Orion was a 16-qubit quantum annealer, not a universal gate-based quantum computer. Quantum annealing is a specialized technique for finding approximate solutions to optimization problems, and whether it provides any advantage over classical simulated annealing remains debated. The system could not run Shor's algorithm, Grover's algorithm, or most algorithms that justify quantum computing investment. The distinction between annealing and gate-based computing was often lost in press coverage.

    **Concept Tested:** D-Wave "Commercial" QC 2007

---

#### 5. What did Google's own researchers find when they tested the D-Wave Two system purchased in 2013?

<div class="upper-alpha" markdown>
1. The D-Wave system was 100 million times faster than classical computers
2. The D-Wave system demonstrated clear quantum advantage for optimization
3. A classical algorithm called simulated quantum annealing matched or outperformed the D-Wave hardware
4. The D-Wave system could run Shor's algorithm faster than IBM's systems
</div>

??? question "Show Answer"
    The correct answer is **C**. A 2014 study by a team including Google researchers found that simulated quantum annealing — a classical algorithm running on a conventional computer — matched or outperformed D-Wave's quantum hardware on the optimization problems tested. This result undermined claims that D-Wave provided a quantum speedup, though the media narrative of "Google validates quantum computing" persisted. The corporate purchase validated the narrative without validating the technology.

    **Concept Tested:** Google Buys D-Wave 2013

---

#### 6. What recurring prediction pattern has persisted throughout the history of quantum computing since the 1990s?

<div class="upper-alpha" markdown>
1. Predictions that quantum computing would be abandoned within 5 years
2. Predictions that classical computing would hit a wall and stop improving
3. Predictions that commercially useful quantum computing is "3-5 years away," with the target moving forward by 3-5 years each time the previous target is missed
4. Predictions that quantum computing funding would be cut in half every decade
</div>

??? question "Show Answer"
    The correct answer is **C**. At every major milestone — from the first algorithms through the latest hardware demonstrations — prominent voices predicted commercial quantum computing was "3-5 years away." Every prediction was wrong, and each was replaced by a new prediction pushing the target forward by approximately the same interval. This pattern reflects structural incentives: government grants operate on 3-5 year cycles, VC funds on 7-10 year cycles, and faculty tenure on 6-year clocks, all creating pressure to predict imminent breakthroughs.

    **Concept Tested:** 3-5 Years Away Pattern

---

#### 7. How did IBM's language about its quantum computing targets shift between 2019 and 2024?

<div class="upper-alpha" markdown>
1. From "quantum utility" to "quantum advantage" to "quantum supremacy"
2. From "quantum advantage" to "quantum utility" to "quantum-centric supercomputing"
3. From "commercial quantum computing" to "quantum internet" to "quantum AI"
4. From "error correction" to "error mitigation" to "error elimination"
</div>

??? question "Show Answer"
    The correct answer is **B**. IBM's terminology evolved from "quantum advantage" (2019) — solving a useful problem faster than classical — to "quantum utility" (2021) — contributing something useful, a lower bar — to "utility-scale quantum computing" (2023) — useful for research, lower still — to "quantum-centric supercomputing" (2024) — hybrid systems with unspecified quantum contribution. Each iteration replaced a falsifiable, ambitious target with a vaguer, less demanding one, illustrating the "redefining success" pattern.

    **Concept Tested:** Timeline Pattern Analysis

---

#### 8. What is the cumulative commercial return on investment (ROI) from quantum computing products and services as of 2025?

<div class="upper-alpha" markdown>
1. Zero dollars in net positive ROI
2. Approximately $1 billion
3. Approximately $250 million in net positive ROI
4. Approximately $10 billion
</div>

??? question "Show Answer"
    The correct answer is **A**. Despite over $100 billion in cumulative global investment, no company has built a quantum computer that solves a commercial problem better, faster, or cheaper than a classical alternative. No quantum startup has achieved profitability from quantum computing products. Companies like IonQ, Rigetti, and D-Wave generate revenue primarily from government contracts and research partnerships, not from customers achieving commercial advantage. This is an empirical fact acknowledged by the industry itself.

    **Concept Tested:** Zero Commercial ROI by 2025

---

#### 9. A researcher predicts "fault-tolerant quantum computing by 2030." Using the historical pattern analysis from this chapter, what is the most appropriate analytical response?

<div class="upper-alpha" markdown>
1. Accept the prediction because technology always improves over time
2. Reject the prediction because quantum computing is fundamentally impossible
3. Check what the same organization predicted 5 years earlier — if that prediction was missed and the new one simply pushes the target forward, the pattern is repeating
4. Wait until 2030 to evaluate the prediction
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter teaches a specific analytical tool: when encountering a quantum computing prediction, look up what the same organization predicted 5 years earlier. If the previous prediction was missed and the new one simply pushes the target forward by 3-5 years, you are observing the pattern rather than evidence of progress. Real progress would mean the target date moving closer, not perpetually forward. This approach transforms historical data into a predictive framework.

    **Concept Tested:** 3-5 Years Away Pattern

---

#### 10. Which technology provides the most instructive historical parallel to quantum computing's "perpetually N years away" pattern?

<div class="upper-alpha" markdown>
1. Smartphones, which went from concept to ubiquity in about 15 years
2. Controlled fusion energy, which has been "30 years away" for over 60 years despite genuine physics and massive funding
3. The internet, which exceeded all predictions for growth
4. Solar power, which achieved commercial viability ahead of many predictions
</div>

??? question "Show Answer"
    The correct answer is **B**. Controlled fusion energy shares a remarkably similar structural profile with quantum computing: a genuine physics concept that is theoretically sound, a perpetual prediction horizon (30 years for fusion, 3-5 years for quantum computing), genuine physics barriers that may not yield to engineering (plasma confinement for fusion, decoherence for QC), self-reinforcing funding loops, marginalization of skeptics, and zero commercial return despite tens of billions in cumulative investment. The parallel demonstrates that this pattern can persist indefinitely when institutional incentives sustain it.

    **Concept Tested:** 40 Years of Promises
