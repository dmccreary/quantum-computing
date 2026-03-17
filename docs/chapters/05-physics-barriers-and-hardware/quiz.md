# Quiz: The Physics Barriers and Hardware Platforms

Test your understanding of decoherence, error correction overhead, cryogenic requirements, the engineering-physics barrier distinction, and why each of the five major hardware platforms has fundamental flaws with these review questions.

---

#### 1. What is decoherence, and why is it classified as a physics barrier rather than an engineering barrier?

<div class="upper-alpha" markdown>
1. Decoherence is a software bug that can be fixed with better quantum compilers
2. Decoherence is the loss of quantum properties through interaction with the environment, arising from fundamental quantum mechanics — not a limitation of current instruments
3. Decoherence is a manufacturing defect in superconducting chips that better fabrication will eliminate
4. Decoherence is the intentional collapse of qubits during measurement
</div>

??? question "Show Answer"
    The correct answer is **B**. Decoherence occurs when a quantum system's superposition and entanglement are destroyed through unwanted interaction with the environment. This is a consequence of quantum mechanics itself: any physical system above absolute zero experiences environmental coupling. The fundamental paradox is that qubits must interact strongly with each other (for gate operations) but interact with nothing else (to avoid decoherence) — contradictory requirements that engineering can mitigate but not eliminate. This distinguishes it from engineering barriers that money and effort can solve.

    **Concept Tested:** Decoherence Problem

---

#### 2. If a quantum computation requires $10^{10}$ gate operations and the gate error rate is $10^{-3}$, approximately how many errors will occur?

<div class="upper-alpha" markdown>
1. About 1,000 errors
2. About 100,000 errors
3. About 10 million errors
4. About 1 billion errors
</div>

??? question "Show Answer"
    The correct answer is **C**. Expected errors = $10^{10} \times 10^{-3} = 10^{7}$, or ten million errors. With this many errors distributed across the computation, the final quantum state has no meaningful relationship to the correct answer — the output is pure noise. For comparison, a classical processor with error rate $10^{-18}$ performing the same number of operations would expect essentially zero errors. This calculation demonstrates why raw (uncorrected) quantum computation is useless for large-scale problems at current error rates.

    **Concept Tested:** Error Rate Problem

---

#### 3. Using the surface code at current error rates ($\sim 10^{-3}$), approximately how many physical qubits are needed per logical qubit?

<div class="upper-alpha" markdown>
1. About 10 physical qubits per logical qubit
2. About 100 physical qubits per logical qubit
3. About 1,000 physical qubits per logical qubit
4. About 100,000 physical qubits per logical qubit
</div>

??? question "Show Answer"
    The correct answer is **C**. The surface code's overhead depends on the ratio of the threshold error rate to the physical error rate. At current physical error rates of approximately $10^{-3}$ and a surface code threshold of approximately $10^{-2}$, the overhead is roughly 1,000 physical qubits per logical qubit. This means that running Shor's algorithm on RSA-2048, which requires about 4,000 logical qubits, would need approximately 4 million to 20 million physical qubits — versus the roughly 1,000 noisy physical qubits available today.

    **Concept Tested:** 1000 Physical per 1 Logical

---

#### 4. Which of the following is an engineering barrier, NOT a physics barrier?

<div class="upper-alpha" markdown>
1. The no-cloning theorem preventing copies of quantum states
2. Decoherence from two-level system defects in materials
3. Building larger dilution refrigerators to house more qubits
4. Measurement backaction destroying quantum information
</div>

??? question "Show Answer"
    The correct answer is **C**. Building larger dilution refrigerators is an engineering barrier — the thermodynamic principles are well understood, and larger units can be designed with sufficient investment. In contrast, the no-cloning theorem (a proven mathematical theorem), decoherence from TLS defects (intrinsic to materials at the quantum level), and measurement backaction (a fundamental law of quantum mechanics) are all physics barriers that cannot be overcome by money or effort alone. This distinction is the most important analytical tool for evaluating quantum computing claims.

    **Concept Tested:** Engineering vs Physics Barrier

---

#### 5. Why does the wiring problem become physically impossible at the million-qubit scale for superconducting systems?

<div class="upper-alpha" markdown>
1. Because copper wires cannot carry quantum information
2. Because each qubit requires 2-4 coaxial cables from room temperature to millikelvin, and a million-qubit system would need 2-4 million cables that cannot physically fit in a cryostat without overwhelming its cooling capacity
3. Because wireless qubit control has not been invented yet
4. Because the cables would be too expensive at that scale
</div>

??? question "Show Answer"
    The correct answer is **B**. Each superconducting qubit requires approximately 2-4 coaxial cables running from room-temperature electronics (~300 K) through multiple cryogenic stages to the millikelvin chip. For a million-qubit system, this means 2-4 million cables. There is simply not enough physical space in current cryostat designs, and the heat conducted by the cables would overwhelm the refrigerator's cooling capacity (only 10-100 microwatts at base temperature). Proposed solutions (cryogenic electronics, multiplexing, optical interconnects) each involve significant tradeoffs and remain undemonstrated at scale.

    **Concept Tested:** Wiring and Control Problem

---

#### 6. What is the estimated power consumption of a million-qubit quantum computing system?

<div class="upper-alpha" markdown>
1. About 1 kilowatt — comparable to a household appliance
2. About 100 kilowatts — comparable to a small building
3. About 10-100 megawatts — comparable to a small power plant
4. About 1 gigawatt — comparable to a nuclear reactor
</div>

??? question "Show Answer"
    The correct answer is **C**. A million-qubit quantum computer is estimated to consume 10-100 megawatts, accounting for dilution refrigerators, room-temperature control electronics, real-time error correction processing, and facility infrastructure. For comparison, current systems with roughly 1,000 qubits consume 200-600 kilowatts. A classical data center rack consuming 10-20 kilowatts performs over $10^{18}$ floating-point operations per second. The energy cost per useful quantum operation — after error correction overhead — may not be competitive with classical computation.

    **Concept Tested:** Energy Consumption Problem

---

#### 7. What is the fatal flaw of the topological quantum computing approach?

<div class="upper-alpha" markdown>
1. It requires temperatures colder than any other platform
2. Its gate speeds are too slow for practical computation
3. The non-Abelian anyons it requires have never been confirmed to exist, and Microsoft's 2018 paper claiming evidence was retracted in 2021
4. It can only perform quantum annealing, not universal computation
</div>

??? question "Show Answer"
    The correct answer is **C**. Topological quantum computing relies on exotic quasiparticles called non-Abelian anyons, which would provide built-in error protection. However, after more than 20 years of searching, no experiment has conclusively demonstrated their existence. Microsoft's 2018 paper in Nature claiming evidence of Majorana fermions was retracted in 2021 due to data processing errors. A 2023 paper reported "topological signatures" but acknowledged no definitive demonstration. Betting billions on particles that may not exist in usable form represents an extraordinary risk.

    **Concept Tested:** Topological Approach

---

#### 8. A quantum hardware company reports "99.9% gate fidelity" for their system. Why might this number be misleading when evaluating the system's practical capability?

<div class="upper-alpha" markdown>
1. Because 99.9% fidelity means no errors at all
2. Because fidelity measurements are always inaccurate
3. Because 99.9% is typically reported for the best qubit pair, while system-level fidelity is much lower, and even 99.9% yields millions of errors in a large computation
4. Because gate fidelity has no relationship to computational performance
</div>

??? question "Show Answer"
    The correct answer is **C**. A reported 99.9% fidelity (error rate of $10^{-3}$) is typically the best-case measurement on the highest-performing qubit pair, not the system-wide average. System-level fidelity is substantially lower due to variation across qubits, crosstalk, and measurement errors. Even at 99.9%, a computation requiring $10^{10}$ gates would produce 10 million errors — pure noise. Startups frequently report best-case metrics in marketing materials, a pattern identified in the chapter as "suppressing failure modes."

    **Concept Tested:** Error Rate Problem

---

#### 9. Trapped ion quantum computers have the highest gate fidelities and longest coherence times. Why haven't they achieved fault-tolerant quantum computing?

<div class="upper-alpha" markdown>
1. Because their qubits are not truly quantum
2. Because they require temperatures colder than superconducting systems
3. Because scaling beyond approximately 30 ions per chain is extremely difficult due to motional mode crowding, and gate speeds are 1,000x slower than superconducting systems
4. Because trapped ions cannot be entangled with each other
</div>

??? question "Show Answer"
    The correct answer is **C**. Despite superior fidelity (99.9%) and coherence times (seconds to minutes), trapped ions face fundamental scaling barriers. As ion chains grow beyond roughly 30 ions, the motional modes used for gate operations become crowded and unstable — a physics constraint inherent to Coulomb crystals. Gate speeds of 1-100 microseconds are roughly 1,000x slower than superconducting gates, partially negating the coherence time advantage. Scaling requires modular architectures with ion shuttling, which introduces noise and complexity.

    **Concept Tested:** Trapped Ion Approach

---

#### 10. The chapter describes a "scaling wall" in quantum computing. What creates this wall?

<div class="upper-alpha" markdown>
1. Government regulations that limit the size of quantum computers
2. The combination of decoherence, error rates, error correction overhead, cryogenics, wiring, energy, and cost — where the overhead of managing errors and infrastructure grows faster than the computational benefit of adding qubits
3. A theoretical proof that quantum computers cannot exceed 10,000 qubits
4. Competition from classical computers that prevents quantum companies from raising enough funding
</div>

??? question "Show Answer"
    The correct answer is **B**. The scaling wall emerges from the compounding of multiple barriers: decoherence limits circuit depth, error correction demands 1,000 physical qubits per logical qubit, cryogenic cooling provides only microwatts at base temperature, wiring density is physically constrained, and energy consumption grows nonlinearly with system size. Beyond a certain point, adding more qubits does not increase useful computation because the overhead grows faster than the benefit. The wall's position depends on error rates and error correction efficiency, but its existence is a fundamental constraint.

    **Concept Tested:** Hardware Scaling Wall
