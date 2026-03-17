# Quiz: Quantum Algorithms and Their Real-World Limits

Test your understanding of Shor's algorithm, Grover's algorithm, quantum supremacy vs. advantage, contrived benchmarks, and why classical computers continue to match quantum performance with these review questions.

---

#### 1. What mathematical technique does Shor's algorithm use to achieve its exponential speedup for integer factoring?

<div class="upper-alpha" markdown>
1. Brute-force search across all possible factors using superposition
2. Period-finding via the quantum Fourier transform
3. Grover's search applied to the space of prime numbers
4. Quantum annealing to find the lowest-energy factorization
</div>

??? question "Show Answer"
    The correct answer is **B**. Shor's algorithm reduces integer factoring to a period-finding problem: for a random integer $a$, the function $f(x) = a^x \mod N$ is periodic with period $r$, and finding $r$ enables computing the factors of $N$. The quantum Fourier transform extracts this period from an exponentially large superposition in polynomial time. The algorithm does not try all factors simultaneously — this is a common misconception.

    **Concept Tested:** Shor's Factoring Algorithm

---

#### 2. How many physical qubits are estimated to be needed to factor an RSA-2048 key using Shor's algorithm?

<div class="upper-alpha" markdown>
1. Approximately 4,000 qubits
2. Approximately 100,000 qubits
3. Approximately 20 million qubits
4. Approximately 1 billion qubits
</div>

??? question "Show Answer"
    The correct answer is **C**. Factoring RSA-2048 requires approximately 4,000 logical qubits. With current error rates requiring roughly 1,000-10,000 physical qubits per logical qubit for error correction, the total comes to approximately 20 million physical qubits. As of 2025, the largest quantum processors have around 1,000 noisy physical qubits — a gap of four orders of magnitude. This gap illustrates why practical cryptanalysis via quantum computing remains far from reality.

    **Concept Tested:** Shor's Factoring Algorithm

---

#### 3. What type of speedup does Grover's search algorithm provide?

<div class="upper-alpha" markdown>
1. Exponential — from $O(N)$ to $O(\log N)$
2. Quadratic — from $O(N)$ to $O(\sqrt{N})$
3. Cubic — from $O(N)$ to $O(N^{1/3})$
4. Polynomial — from $O(2^n)$ to $O(n^2)$
</div>

??? question "Show Answer"
    The correct answer is **B**. Grover's algorithm provides a quadratic speedup for unstructured search, reducing the number of queries from $O(N)$ to $O(\sqrt{N})$. This is mathematically proven and optimal — no quantum algorithm can search faster (the BBBV theorem). However, a quadratic speedup is far less dramatic than the exponential speedup often attributed to quantum computing in the press. For a database of one billion items, Grover's reduces checks from 1 billion to about 31,623.

    **Concept Tested:** Grover's Search Algorithm

---

#### 4. Why does Grover's algorithm provide less practical advantage than it appears on paper?

<div class="upper-alpha" markdown>
1. Because real-world search problems usually have structure that classical algorithms exploit, and loading classical data into quantum states can erase the speedup
2. Because Grover's algorithm only works on prime numbers
3. Because quantum computers cannot store databases larger than 1,000 entries
4. Because Grover's algorithm has been proven incorrect for large databases
</div>

??? question "Show Answer"
    The correct answer is **A**. Several factors diminish Grover's practical advantage: real-world data is rarely unstructured (classical algorithms use sorting, indexing, and hashing), the I/O bottleneck of loading a classical database into a quantum state can take $O(N)$ time (erasing the speedup), error correction overhead makes quantum operations 1,000-10,000x more expensive in physical resources, and quantum clock speeds are far slower than classical processors. The quadratic speedup often disappears when these practical realities are accounted for.

    **Concept Tested:** Grover's Search Algorithm

---

#### 5. What is the precise definition of quantum supremacy?

<div class="upper-alpha" markdown>
1. A quantum computer performing any computation — even a useless one — that no classical computer can perform in reasonable time
2. A quantum computer solving a commercially valuable problem faster than any classical computer
3. A quantum computer with more qubits than any classical computer has bits
4. A quantum computer achieving lower error rates than classical transistors
</div>

??? question "Show Answer"
    The correct answer is **A**. Quantum supremacy, a term coined by John Preskill in 2012, is a proof-of-concept milestone: demonstrating that a quantum computer can perform any computation that no classical computer can match in reasonable time. Crucially, the computation need not be useful. All supremacy demonstrations to date have used entirely contrived tasks with no practical application. Supremacy says nothing about commercial value — it is a capability demonstration, not an achievement of practical advantage.

    **Concept Tested:** Quantum Supremacy Defined

---

#### 6. What three criteria must be satisfied for a genuine demonstration of quantum advantage?

<div class="upper-alpha" markdown>
1. More qubits than classical bits, faster clock speed, and lower power consumption
2. A peer-reviewed paper, replication by another lab, and media coverage
3. A commercially relevant problem, comparison against the best known classical algorithm, and inclusion of all overhead costs
4. An exponential speedup, error-free computation, and room-temperature operation
</div>

??? question "Show Answer"
    The correct answer is **C**. Quantum advantage requires three things: (1) the problem must be commercially relevant — someone must need it solved; (2) the classical baseline must be the best known classical algorithm, not a strawman; and (3) all overhead costs must be included — error correction, state preparation, measurement, and classical pre/post-processing. As of 2025, no quantum computer has met all three criteria on any problem. Every claimed "breakthrough" has been supremacy at best.

    **Concept Tested:** Quantum Advantage Defined

---

#### 7. What happened to Google's 2019 quantum supremacy claim over the following years?

<div class="upper-alpha" markdown>
1. It was confirmed by independent labs and the advantage widened over time
2. IBM disputed it immediately, and by 2023 a GPU cluster performed the same task in about 15 seconds
3. Google retracted the paper after finding calculation errors
4. The result was replicated but found to have no significance
</div>

??? question "Show Answer"
    The correct answer is **B**. Google claimed Sycamore performed random circuit sampling in 200 seconds versus an estimated 10,000 years classically. IBM responded within days, estimating 2.5 days with optimization. By 2022, tensor network methods reduced classical time to hours. By 2023, a Chinese team demonstrated classical simulation in approximately 15 seconds using a GPU cluster. This pattern — quantum claim followed by classical algorithm improvements that erode or eliminate the gap — illustrates why supremacy claims are fragile.

    **Concept Tested:** Contrived Benchmarks

---

#### 8. As of 2025, what is the largest number that has been factored using Shor's algorithm on actual quantum hardware?

<div class="upper-alpha" markdown>
1. 15
2. 21
3. 143
4. 2,048
</div>

??? question "Show Answer"
    The correct answer is **B**. The largest number factored by a quantum computer using Shor's algorithm is 21 (3 x 7). Some claims of factoring larger numbers (such as 143) used hybrid classical-quantum shortcuts that do not scale to cryptographically relevant sizes. The gap between factoring 21 and breaking RSA-2048 — which would require approximately 20 million physical qubits — illustrates the enormous distance between theoretical algorithms and practical capability.

    **Concept Tested:** No Real-World Advantage Yet

---

#### 9. A quantum computing startup claims their algorithm provides "exponential speedups for logistics optimization." What should you check first?

<div class="upper-alpha" markdown>
1. Whether the startup has raised sufficient venture capital
2. Whether the startup's qubit count exceeds 1,000
3. Whether the underlying optimization problem has the specific mathematical structure that quantum algorithms exploit, and whether a peer-reviewed proof of advantage exists
4. Whether the startup has partnerships with Fortune 500 companies
</div>

??? question "Show Answer"
    The correct answer is **C**. Quantum speedups require problems with specific mathematical structure (periodicity, symmetry, algebraic properties) that quantum interference can exploit. For most real-world optimization problems, no quantum algorithm with a proven speedup exists. Variational algorithms like QAOA are heuristic methods with no theoretical guarantee of outperforming classical optimization. If a company cannot name the specific quantum algorithm and cite a peer-reviewed proof of advantage, the claim is marketing, not science.

    **Concept Tested:** Narrow Problem Applicability

---

#### 10. Why does the "moving target problem" make it difficult for quantum computers to demonstrate advantage over classical computers?

<div class="upper-alpha" markdown>
1. Because quantum computers keep getting slower as they add more qubits
2. Because classical computing standards are set by international committees that change the rules
3. Because every quantum milestone is compared to the classical baseline at the time, but classical algorithms and hardware keep improving, often closing the gap within months to years
4. Because quantum error rates fluctuate unpredictably from day to day
</div>

??? question "Show Answer"
    The correct answer is **C**. Classical computing does not stand still while quantum computers improve. Every quantum claim is measured against the best classical approach at the time of announcement, but classical researchers then develop improved methods — often motivated by the quantum claim itself. Google's 10,000-year estimate was reduced to 2.5 days, then hours, then 15 seconds by classical improvements. GPU computing, specialized accelerators, and algorithmic advances continue to raise the bar that quantum computers must clear.

    **Concept Tested:** Classical Computers Keep Up
