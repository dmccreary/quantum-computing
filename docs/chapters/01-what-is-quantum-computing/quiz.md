# Quiz: What Is Quantum Computing?

Test your understanding of qubits, superposition, entanglement, measurement, and the theoretical promise and limits of quantum computation with these review questions.

---

#### 1. What is the fundamental unit of quantum information?

<div class="upper-alpha" markdown>
1. A classical bit that can be 0 or 1
2. A qubit described by probability amplitudes in a two-dimensional complex Hilbert space
3. A photon that carries energy at the speed of light
4. A transistor that switches between voltage levels
</div>

??? question "Show Answer"
    The correct answer is **B**. A qubit is the fundamental unit of quantum information. Unlike a classical bit, which is definitively 0 or 1, a qubit exists in a state $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$, where $\alpha$ and $\beta$ are complex probability amplitudes in a two-dimensional complex Hilbert space. The constraint $|\alpha|^2 + |\beta|^2 = 1$ ensures probabilities sum to one. This mathematical description is what distinguishes a qubit from all classical information units.

    **Concept Tested:** What Is a Qubit

---

#### 2. What constraint must the probability amplitudes $\alpha$ and $\beta$ of a qubit satisfy?

<div class="upper-alpha" markdown>
1. $|\alpha|^2 + |\beta|^2 = 1$
2. $\alpha + \beta = 1$
3. $\alpha$ and $\beta$ must be real numbers
4. $\alpha \times \beta = 0$
</div>

??? question "Show Answer"
    The correct answer is **A**. The normalization constraint $|\alpha|^2 + |\beta|^2 = 1$ ensures that the measurement probabilities sum to one. When a qubit is measured, it collapses to $|0\rangle$ with probability $|\alpha|^2$ or to $|1\rangle$ with probability $|\beta|^2$. The amplitudes are complex numbers (not necessarily real), and they do not need to sum to one directly — it is their squared magnitudes that must sum to one.

    **Concept Tested:** What Is a Qubit

---

#### 3. Why is a qubit in superposition NOT the same as a coin that is "either heads or tails but you don't know which"?

<div class="upper-alpha" markdown>
1. Because qubits are faster than coins
2. Because the coin analogy only applies to entangled systems
3. Because a qubit's amplitudes carry phase information enabling quantum interference, while a coin is in a definite but unknown state
4. Because coins cannot be measured without destroying them
</div>

??? question "Show Answer"
    The correct answer is **C**. A coin under a cup is in a definite classical state — your uncertainty reflects ignorance about the system, not the physical reality. A qubit in superposition genuinely has no definite state. The amplitudes $\alpha$ and $\beta$ carry phase information that produces quantum interference effects — constructive or destructive — which have no classical analog. This distinction is experimentally verifiable through Bell inequality violations.

    **Concept Tested:** Superposition Explained

---

#### 4. How many probability amplitudes are needed to describe a system of $n$ qubits?

<div class="upper-alpha" markdown>
1. $2n$
2. $n^2$
3. $n$
4. $2^n$
</div>

??? question "Show Answer"
    The correct answer is **D**. A system of $n$ qubits requires $2^n$ probability amplitudes to describe its state. Two qubits need 4 amplitudes, three qubits need 8, ten qubits need 1,024, and fifty qubits need over $10^{15}$. This exponential growth is both the source of quantum computing's theoretical promise and the source of its practical challenges, because all $2^n$ amplitudes must be maintained with high precision.

    **Concept Tested:** Superposition Explained

---

#### 5. What does the no-cloning theorem state?

<div class="upper-alpha" markdown>
1. Quantum computers cannot perform the same calculation twice
2. Two qubits cannot be entangled more than once
3. Quantum measurements always produce the same result
4. It is impossible to create an exact copy of an arbitrary unknown quantum state
</div>

??? question "Show Answer"
    The correct answer is **D**. The no-cloning theorem, proven by Wootters and Zurek in 1982, establishes that it is impossible to create an exact copy of an arbitrary unknown quantum state. This is a fundamental law of quantum mechanics, not an engineering limitation. Combined with the measurement problem (measuring destroys the state), it creates a double bind: you cannot back up quantum data by copying it, and you cannot read it without destroying it. This makes quantum error correction extraordinarily difficult.

    **Concept Tested:** Quantum Measurement Problem

---

#### 6. What happens when you measure a qubit that is in superposition?

<div class="upper-alpha" markdown>
1. The qubit remains in superposition and you observe both values simultaneously
2. The qubit splits into two copies, one for each possible outcome
3. The state collapses to either $|0\rangle$ or $|1\rangle$, and the superposition is destroyed
4. The measurement returns the exact values of $\alpha$ and $\beta$
</div>

??? question "Show Answer"
    The correct answer is **C**. When a qubit in superposition $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$ is measured, the state collapses to $|0\rangle$ with probability $|\alpha|^2$ or $|1\rangle$ with probability $|\beta|^2$. The superposition is destroyed, and the phase information encoded in the amplitudes is lost. This is irreversible — you cannot undo a measurement. A system of 50 qubits has over $10^{15}$ amplitudes, but a single measurement yields only 50 classical bits.

    **Concept Tested:** Quantum Measurement Problem

---

#### 7. What is the approximate gap in error rates between classical transistors and current quantum gates?

<div class="upper-alpha" markdown>
1. Three orders of magnitude ($10^3$)
2. Six orders of magnitude ($10^6$)
3. Fifteen orders of magnitude ($10^{15}$)
4. Twenty orders of magnitude ($10^{20}$)
</div>

??? question "Show Answer"
    The correct answer is **C**. Classical transistors have error rates of approximately $10^{-18}$ per operation, while current quantum gates have error rates of approximately $10^{-3}$ per operation. This represents a gap of fifteen orders of magnitude. This gap is not a minor detail — it is the central fact of quantum computing's practical challenges and means that quantum error correction must compensate for an enormously higher error rate than classical error correction ever faces.

    **Concept Tested:** QC vs Classical Computing

---

#### 8. Why can't quantum computers efficiently solve NP-complete problems like the traveling salesman problem?

<div class="upper-alpha" markdown>
1. Because NP-complete problems require too much memory
2. Because the complexity class BQP is believed to not contain NP-complete problems, and Grover's algorithm provides only a quadratic speedup for brute-force search
3. Because entanglement cannot be maintained long enough for these problems
4. Because NP-complete problems have already been solved classically
</div>

??? question "Show Answer"
    The correct answer is **B**. Despite popular misconceptions, quantum computers are not believed to solve NP-complete problems efficiently. The complexity class BQP (the set of problems quantum computers can solve in polynomial time) is thought to be strictly contained within NP. Grover's algorithm provides only a quadratic speedup for brute-force search — turning $O(2^n)$ into $O(2^{n/2})$ — which is significant but not the exponential advantage needed to make NP-complete problems tractable.

    **Concept Tested:** What QC Cannot Do

---

#### 9. A quantum computer with 50 qubits has over $10^{15}$ amplitudes. Why can't you simply read all of them to solve hard problems?

<div class="upper-alpha" markdown>
1. The amplitudes are too small to measure accurately
2. Reading all amplitudes would require too much energy
3. Measurement collapses the system to a single outcome, yielding only 50 classical bits of information
4. The qubits decohere before all amplitudes can be extracted
</div>

??? question "Show Answer"
    The correct answer is **C**. Measurement collapses the entire $2^n$-dimensional quantum state to a single $n$-bit classical outcome. For 50 qubits, this means the over $10^{15}$ amplitudes collapse to just 50 bits of information. You cannot directly access the exponential state space. Quantum speedups require carefully designed algorithms that use interference to amplify the probability of correct answers — most problems have no known algorithm that achieves this.

    **Concept Tested:** Quantum Measurement Problem

---

#### 10. Which of the following statements best describes the relationship between entanglement and faster-than-light communication?

<div class="upper-alpha" markdown>
1. Entanglement enables instant communication between any two points in the universe
2. Entanglement creates correlations stronger than classical, but cannot transmit information because you cannot choose the measurement outcome
3. Entanglement can send information faster than light only when combined with superposition
4. Entanglement violates the speed of light limit only for quantum computers, not for communication
</div>

??? question "Show Answer"
    The correct answer is **B**. Entanglement creates quantum correlations that are stronger than any classical correlation — a fact formalized by Bell's theorem. However, entanglement does not transmit information faster than light. You cannot choose which measurement outcome to get, so you cannot use entanglement to send a signal. The correlations are only apparent when measurement results from both qubits are compared, which requires classical communication. This is a common misconception that overstates entanglement's practical capabilities.

    **Concept Tested:** Entanglement Explained
