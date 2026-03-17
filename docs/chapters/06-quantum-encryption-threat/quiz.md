# Quiz: Can Quantum Computers Break Encryption?

Test your understanding of the quantum encryption threat, post-quantum cryptography, and why this risk is significantly overstated.

---

#### 1. What mathematical problem does RSA encryption rely on for its security?

<div class="upper-alpha" markdown>
1. The difficulty of factoring large numbers into their prime components
2. Finding short vectors in high-dimensional lattices
3. The collision resistance of cryptographic hash functions
4. Solving systems of multivariate polynomial equations
</div>

??? question "Show Answer"
    The correct answer is **A**. RSA's security depends on the computational difficulty of factoring the product of two large prime numbers back into its components. Multiplying two primes is easy (microseconds), but reversing the operation for a 2,048-bit number is classically infeasible, requiring more than $10^{20}$ years with the best known algorithms. This asymmetry creates the trapdoor function that makes public key encryption possible.

    **Concept Tested:** Public Key Encryption Basics

---

#### 2. Approximately how many physical qubits would be required to break RSA-2048 at current error rates?

<div class="upper-alpha" markdown>
1. 1,000 qubits
2. 100,000 qubits
3. 4-20 million qubits
4. 1 billion qubits
</div>

??? question "Show Answer"
    The correct answer is **C**. Breaking RSA-2048 requires approximately 4,000 logical qubits, each needing 1,000-5,000 physical qubits for error correction at current error rates of approximately $10^{-3}$. This yields a total of 4-20 million physical qubits. Current quantum processors have roughly 1,000 noisy physical qubits, meaning the gap is approximately 20,000x in qubit count with at least a 10x improvement in error rates needed simultaneously.

    **Concept Tested:** Massive Qubits Needed

---

#### 3. Why is AES-256 symmetric encryption NOT significantly threatened by quantum computers?

<div class="upper-alpha" markdown>
1. AES-256 uses quantum-resistant lattice-based mathematics
2. Grover's algorithm provides only a quadratic speedup, reducing effective security to 128 bits, which remains unbreakable
3. Symmetric encryption keys are too short for Shor's algorithm to target
4. AES-256 has already been upgraded to a post-quantum version
</div>

??? question "Show Answer"
    The correct answer is **B**. Grover's algorithm is the best known quantum attack on symmetric encryption, and it provides only a quadratic speedup — reducing AES-256's security from $2^{256}$ to $2^{128}$ operations. An effective 128-bit security level remains computationally infeasible to brute force. This contrasts with Shor's algorithm, which provides an exponential speedup against the integer factoring and discrete logarithm problems underlying RSA and ECC.

    **Concept Tested:** Crypto Threat Is Overstated

---

#### 4. Which NIST-standardized post-quantum algorithm is used for key encapsulation (key exchange)?

<div class="upper-alpha" markdown>
1. SPHINCS+ (SLH-DSA)
2. FALCON (FN-DSA)
3. CRYSTALS-Dilithium (ML-DSA)
4. CRYSTALS-Kyber (ML-KEM)
</div>

??? question "Show Answer"
    The correct answer is **D**. CRYSTALS-Kyber, standardized as ML-KEM under FIPS 203, is a lattice-based key encapsulation mechanism designed for quantum-resistant key exchange. CRYSTALS-Dilithium (FIPS 204) and SPHINCS+ (FIPS 205) are digital signature algorithms, not key exchange mechanisms. NIST selected these algorithms after a rigorous six-year evaluation process, and they are already being deployed by major technology companies.

    **Concept Tested:** NIST Already Has Standards

---

#### 5. An organization stores classified intelligence that must remain secret for 30 years. They currently use RSA-2048 without perfect forward secrecy. How would you assess their HNDL risk?

<div class="upper-alpha" markdown>
1. No risk, because quantum computers will never break RSA-2048
2. Moderate risk, but only if the adversary has a quantum computer today
3. No risk, because post-quantum cryptography has already been fully deployed worldwide
4. High risk, because the data has a long sensitivity duration, and an adversary could store intercepted traffic for future decryption
</div>

??? question "Show Answer"
    The correct answer is **D**. This scenario meets all four conditions for a genuine HNDL threat: the data must remain secret for decades (exceeding the timeline for potential quantum capability), a nation-state adversary could plausibly intercept and store the traffic, the encryption lacks perfect forward secrecy, and the organization has not yet migrated to PQC. However, this represents a narrow category — most encrypted data loses value quickly, and organizations handling classified data typically employ additional protective measures.

    **Concept Tested:** Harvest Now Decrypt Later

---

#### 6. If qubit counts double every 1.5 years from a base of 1,200 qubits in 2025, approximately how many years would it take to reach 20 million qubits?

<div class="upper-alpha" markdown>
1. About 21 years
2. About 7 years
3. About 35 years
4. About 14 years
</div>

??? question "Show Answer"
    The correct answer is **A**. The calculation is: $\log_2(20{,}000{,}000 / 1{,}200) \approx \log_2(16{,}667) \approx 14.0$ doublings. At 1.5 years per doubling: $14.0 \times 1.5 \approx 21$ years, reaching the target around 2046. This estimate also assumes error rates improve by the necessary order of magnitude during the same period, which is not guaranteed and has historically been slower than qubit count scaling.

    **Concept Tested:** Massive Qubits Needed

---

#### 7. What is the primary mathematical basis for the NIST-standardized algorithms CRYSTALS-Kyber and CRYSTALS-Dilithium?

<div class="upper-alpha" markdown>
1. Hash function collision resistance
2. Integer factoring difficulty
3. Elliptic curve isogenies
4. Lattice problems (finding short vectors in high-dimensional lattices)
</div>

??? question "Show Answer"
    The correct answer is **D**. Both CRYSTALS-Kyber (key encapsulation) and CRYSTALS-Dilithium (digital signatures) are lattice-based algorithms. Their security relies on the difficulty of finding short vectors in high-dimensional lattices, specifically the Learning With Errors (LWE) problem. No efficient quantum algorithm is known for these lattice problems. SPHINCS+ is hash-based, isogeny-based approaches like SIDH were partially broken classically, and integer factoring is precisely what quantum computers threaten.

    **Concept Tested:** Post-Quantum Crypto Exists

---

#### 8. Under the chapter's analysis, the vulnerability window for quantum encryption threats is defined as $T_{\text{quantum threat}} - T_{\text{PQC complete}}$. What do current estimates show about this window?

<div class="upper-alpha" markdown>
1. The window is open and widening because quantum computers are advancing faster than PQC deployment
2. The window is approximately 5 years wide, creating moderate urgency
3. The window is closed under all plausible scenarios because PQC migration completes before the quantum threat materializes
4. The window cannot be estimated because quantum computing timelines are completely unpredictable
</div>

??? question "Show Answer"
    The correct answer is **C**. Current estimates place PQC migration completion for critical systems between 2030 and 2040, while the quantum threat to RSA-2048 is optimistically estimated at 2040-2050 or possibly never at commercial scale. Even under the most optimistic quantum progress assumptions and the most pessimistic PQC migration assumptions, the defense arrives before the threat. The window is already closing, and for organizations that adopt PQC proactively, it is already closed.

    **Concept Tested:** Window Is Already Closing

---

#### 9. A news article claims "quantum computers will break all encryption within 5 years" but does not mention qubit requirements, post-quantum cryptography, or the status of symmetric encryption. What analytical conclusion should you draw?

<div class="upper-alpha" markdown>
1. The article is technically accurate but omits some details
2. The article is overstating the threat by omitting critical context that would moderate the alarm
3. The article must be from a quantum computing company and should be ignored entirely
4. The article is presenting classified information that the public should not have
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter provides a checklist for evaluating encryption threat articles: Does it mention qubit counts required? Does it mention PQC or NIST standards? Does it estimate when the threat might materialize? Does it acknowledge symmetric encryption is not threatened? An article omitting all of these is overstating the threat, whether intentionally or through ignorance. Multiple actors — quantum computing companies, cybersecurity vendors, intelligence agencies, media — have incentives to emphasize the threat and downplay the defense.

    **Concept Tested:** Crypto Threat Is Overstated

---

#### 10. Why does the existence of multiple independent PQC approaches (lattice-based, hash-based, code-based) strengthen the defense against quantum threats?

<div class="upper-alpha" markdown>
1. Multiple approaches provide redundancy, so even if one is broken, the others remain secure
2. Each approach is faster than the others for different types of encryption
3. Using multiple approaches simultaneously makes encryption exponentially harder to break
4. Each approach was designed by a different country's intelligence agency for maximum security
</div>

??? question "Show Answer"
    The correct answer is **A**. The redundancy in the PQC ecosystem means the cryptographic community is not relying on a single unproven assumption. When SIDH (an isogeny-based approach) was broken in 2022 by a classical attack, the lattice-based and hash-based approaches remained secure. This diversity of mathematical foundations ensures that a breakthrough against one class of problems does not compromise the entire post-quantum defense. It is the same principle of defense in depth that makes cryptographic systems resilient.

    **Concept Tested:** Post-Quantum Crypto Exists
