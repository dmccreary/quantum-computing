# Quiz: Better Alternatives to Quantum Computing

Test your understanding of quantum sensing, classical AI hardware, risk-adjusted returns, and portfolio diversification as alternatives to quantum computing investment.

---

#### 1. What is the fundamental physical difference that explains why quantum sensing is commercially successful while quantum computing is not?

<div class="upper-alpha" markdown>
1. Quantum sensing uses more advanced quantum hardware than quantum computing
2. Quantum sensing exploits decoherence as a measurement mechanism, while quantum computing must fight against decoherence
3. Quantum sensing was invented before quantum computing and had more time to develop
4. Quantum sensing receives more government funding than quantum computing
</div>

??? question "Show Answer"
    The correct answer is **B**. Quantum sensing treats environmental interaction (decoherence) as an ally — the sensor is designed to respond to the quantity being measured. Quantum computing treats decoherence as an enemy that must be eliminated through error correction. This means sensing works with quantum fragility while computing fights against it, explaining why sensing needs only 1-100 qubits with no error correction while computing needs millions of error-corrected qubits.

    **Concept Tested:** Quantum Sensing vs. Quantum Computing

---

#### 2. Approximately how much annual revenue does the atomic clock market generate?

<div class="upper-alpha" markdown>
1. $50 million
2. $500 million
3. $1.5 billion
4. $15 billion
</div>

??? question "Show Answer"
    The correct answer is **C**. The atomic clock market generates approximately $1.5 billion in annual revenue and is projected to grow to $3 billion by 2030. Companies like Microchip Technology, Teledyne, and SiTime sell commercial modules at price points from $500 for chip-scale units to $500,000+ for laboratory references. This demonstrates a mature product pipeline serving multiple paying markets — a stark contrast to quantum computing's zero computation revenue.

    **Concept Tested:** Atomic Clocks

---

#### 3. A technology investor is comparing two investments: quantum sensing with 85% probability of success and $2B market potential requiring $300M investment, versus quantum computing with 8% probability and $50B market potential requiring $50B investment. Using the expected value formula, which investment has a higher expected value and by how much?

<div class="upper-alpha" markdown>
1. Quantum computing, by approximately $2.6B, due to its larger market potential
2. Quantum sensing, by approximately $5.4B, because its high probability offsets the smaller market
3. They are roughly equal because quantum computing's larger market compensates for lower probability
4. Quantum sensing, by approximately $47.4B, because quantum computing has negative expected value
</div>

??? question "Show Answer"
    The correct answer is **D**. Quantum sensing: $E[V] = 0.85 \times \$2B - \$0.3B = +\$1.4B$. Quantum computing: $E[V] = 0.08 \times \$50B - \$50B = \$4B - \$50B = -\$46B$. The difference is approximately $47.4B in favor of sensing. This illustrates how a large potential market combined with low probability and massive required investment produces deeply negative expected value, while a modest market with high probability produces strong positive returns.

    **Concept Tested:** Risk-Adjusted Returns

---

#### 4. Which of the following best explains why QKD is considered a niche technology despite offering information-theoretic security?

<div class="upper-alpha" markdown>
1. QKD has been proven to have mathematical vulnerabilities that classical encryption does not
2. QKD requires dedicated infrastructure, costs $100K+ per endpoint, and NIST-standardized post-quantum cryptography achieves quantum resistance through free software updates
3. QKD only works over distances shorter than 1 kilometer
4. QKD is incompatible with existing fiber optic infrastructure
</div>

??? question "Show Answer"
    The correct answer is **B**. QKD faces practical limitations including fiber-based range of approximately 100 km without repeaters, slow key generation rates, hardware costs exceeding $100K per endpoint, and the need for dedicated infrastructure. Most critically, NIST-standardized post-quantum cryptographic algorithms (CRYSTALS-Kyber, CRYSTALS-Dilithium) achieve quantum-resistant encryption through classical software updates at near-zero marginal cost. QKD's value is limited to high-security applications where the physics-based security guarantee justifies the premium.

    **Concept Tested:** Quantum Key Distribution

---

#### 5. When analyzing quantum technology market reports, what deceptive practice should investors watch for regarding market size claims?

<div class="upper-alpha" markdown>
1. Reports undercount quantum computing revenue to make the market seem less attractive
2. Reports exclude military applications from their market size calculations
3. Reports lump quantum sensing revenue together with quantum computing under the umbrella term "quantum technology" to inflate perceived market size
4. Reports use inflation-adjusted dollars that make current markets look smaller
</div>

??? question "Show Answer"
    The correct answer is **C**. A common rhetorical trick in quantum computing marketing is to combine the revenue from proven, profitable quantum sensing technologies (atomic clocks, magnetometers, gravimeters) with speculative quantum computing under the label "quantum technology." When reports claim the quantum technology market is worth billions, the vast majority — typically 90% or more — comes from sensing, not computing. Investors should always disaggregate these categories to avoid being misled about quantum computing's actual commercial traction.

    **Concept Tested:** Sensors Already Make Money

---

#### 6. A government is considering allocating $5 billion to quantum computing instead of quantum sensing and AI hardware. If the alternative investments would yield 25% returns, what is the approximate annual opportunity cost?

<div class="upper-alpha" markdown>
1. $125 million
2. $500 million
3. $1.25 billion
4. $5 billion
</div>

??? question "Show Answer"
    The correct answer is **C**. The opportunity cost equals the investment amount multiplied by the difference in returns between the alternative and the actual investment: $C_{\text{opportunity}} = \$5B \times (0.25 - 0) = \$1.25B$ annually. Over a decade, this compounds to tens of billions in lost economic value. This framing shifts the debate from "Is quantum computing worth the investment?" to "Is quantum computing worth more than the alternative investments it displaces?" — a question with a clear negative answer given current evidence.

    **Concept Tested:** Alternative Tech Investments

---

#### 7. In a rational quantum technology portfolio, what percentage should be allocated to speculative quantum computing, and why?

<div class="upper-alpha" markdown>
1. 30-40%, because quantum computing has the highest potential payoff
2. 50-60%, because diversification means equal allocation to all categories
3. 5-10%, limited to an amount the investor can afford to lose entirely
4. 0%, because quantum computing has negative expected value
</div>

??? question "Show Answer"
    The correct answer is **C**. A rational portfolio allocates 5-10% to quantum computing at most — an amount the investor can afford to lose entirely. This small allocation acknowledges the possibility of a transformative breakthrough while limiting downside risk. This contrasts sharply with current market behavior, where governments and corporations allocate 50-80% of their quantum technology budgets to computing, the highest-risk category. The bulk of a rational portfolio goes to proven quantum sensing (30-40%) and classical AI hardware (25-35%).

    **Concept Tested:** Portfolio Diversification

---

#### 8. Which characteristic distinguishes technologies with continuous improvement pathways from those requiring discontinuous breakthroughs?

<div class="upper-alpha" markdown>
1. Continuous improvement technologies receive more government funding
2. Discontinuous breakthrough technologies always have validated underlying physics
3. Continuous improvement technologies generate revenue along the way, while discontinuous technologies produce no commercial value until a threshold is crossed
4. Continuous improvement technologies are limited to software, while discontinuous technologies involve hardware
</div>

??? question "Show Answer"
    The correct answer is **C**. The continuous improvement pathway criterion distinguishes technologies where incremental advances generate commercial value at each step (quantum sensing, AI hardware, photonics) from those where a fundamental breakthrough must occur before any value emerges (quantum computing, fusion energy). Technologies with continuous pathways are lower risk because revenue funds further development and provides empirical evidence of progress. Quantum computing has no intermediate commercial product — it must achieve fault-tolerant error correction before any commercial value materializes.

    **Concept Tested:** Alternative Tech Investments

---

#### 9. Evaluate why classical AI hardware represents a superior risk-adjusted investment compared to quantum computing for drug discovery applications.

<div class="upper-alpha" markdown>
1. Classical AI hardware is cheaper but cannot actually solve drug discovery problems
2. Quantum computers have already demonstrated superiority in protein folding simulations
3. Classical AI (AlphaFold, diffusion models) has already transformed protein structure prediction — the application most cited as quantum computing's killer app — while generating massive commercial returns
4. Drug discovery does not require any computational approaches, making both investments unnecessary
</div>

??? question "Show Answer"
    The correct answer is **C**. Drug discovery and molecular simulation are frequently cited as quantum computing's most promising applications. However, classical AI running on GPUs has already achieved transformational results: AlphaFold solved protein structure prediction, and diffusion models are accelerating drug candidate identification. NVIDIA's data center revenue alone exceeded $60B in 2024, while quantum computing generated approximately zero from computation. Classical AI hardware has a TRL of 9 (mass production) versus quantum computing's TRL of 2-3, making it a demonstrably superior risk-adjusted investment.

    **Concept Tested:** Classical AI Hardware

---

#### 10. Design a brief investment recommendation for a technology fund manager who currently allocates 65% of their quantum budget to quantum computing. What reallocation would you propose and what is the key argument?

<div class="upper-alpha" markdown>
1. Increase to 80% quantum computing allocation because higher investment accelerates breakthroughs
2. Maintain the current allocation but add hedging instruments against quantum computing failure
3. Reallocate to roughly 35% quantum sensing, 30% classical AI, 10-15% QKD, 10-15% adjacent tech, and 5-10% quantum computing, because the current allocation invests most heavily in the category with the worst risk-adjusted return
4. Move 100% to classical AI hardware because quantum technologies have no commercial future
</div>

??? question "Show Answer"
    The correct answer is **C**. The current 65% allocation to quantum computing concentrates capital in the highest-risk, most negative expected-value category. A rational reallocation shifts the majority to technologies with demonstrated commercial returns: quantum sensing (35%) generates billions in annual revenue, classical AI hardware (30%) has proven massive returns, QKD (10-15%) serves real security needs, and adjacent tech (10-15%) provides diversification. Quantum computing retains 5-10% as a speculative position. The key argument is opportunity cost: every dollar in speculative quantum computing is a dollar not earning 25-30% returns in proven alternatives.

    **Concept Tested:** Portfolio Diversification

---
