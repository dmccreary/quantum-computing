---
title: Can Quantum Computers Break Encryption?
description: An analysis of why the quantum threat to encryption is significantly overstated — examining the massive qubit requirements, the existence of post-quantum cryptography, and the closing window of vulnerability.
generated_by: claude skill chapter-content-generator
date: 2026-03-16 23:46:52
version: 0.05
---

# Can Quantum Computers Break Encryption?

## Summary

This chapter examines the widely cited claim that quantum computers will break modern encryption, showing why this threat is significantly overstated. We explain the basics of public key encryption, the theoretical threat posed by Shor's algorithm, and the massive qubit requirements that make this threat impractical for decades. We then show that post-quantum cryptography standards already exist, NIST has standardized quantum-resistant algorithms, and the window of vulnerability is closing before quantum computers could exploit it. Students will understand why the cryptography threat is one of the most overhyped aspects of quantum computing.

## Concepts Covered

This chapter covers the following 8 concepts from the learning graph:

1. Public Key Encryption Basics
2. Could QC Break Encryption?
3. Massive Qubits Needed
4. Post-Quantum Crypto Exists
5. NIST Already Has Standards
6. Harvest Now Decrypt Later
7. Window Is Already Closing
8. Crypto Threat Is Overstated

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: What Is Quantum Computing?](../01-what-is-quantum-computing/index.md)
- [Chapter 2: Quantum Algorithms and Their Real-World Limits](../02-quantum-algorithms-and-limits/index.md)
- [Chapter 5: The Physics Barriers and Hardware Platforms](../05-physics-barriers-and-hardware/index.md)

---

!!! mascot-welcome "Fermi Welcomes You!"
    <img src="../../img/mascot/welcome.png" class="mascot-admonition-img" alt="Fermi welcomes you">
    Welcome, fellow investigators! The claim that quantum computers will
    "break all encryption" is perhaps the single most effective fundraising
    tool in the quantum computing industry. It generates fear, urgency, and
    government funding in equal measure. Today we examine this claim with
    the same rigor we have applied to every other quantum computing promise.
    But does the math check out? Let's find out!

## Learning Objectives

After completing this chapter, you will be able to:

- **Explain** how public key encryption works at a conceptual level and why its security depends on the difficulty of integer factoring and discrete logarithms
- **Describe** how Shor's algorithm theoretically threatens RSA and elliptic curve cryptography
- **Calculate** the approximate physical qubit requirements for running Shor's algorithm on cryptographically relevant key sizes
- **Identify** the post-quantum cryptography algorithms that NIST has already standardized
- **Evaluate** the "harvest now, decrypt later" threat and assess its practical significance
- **Argue** why the encryption threat from quantum computing is significantly overstated when the full evidence is considered

---

## Public Key Encryption Basics

To understand the quantum threat to encryption, you must first understand what public key encryption does and why it works. This section provides the essential background — just enough to follow the cryptographic argument.

### The Problem of Key Exchange

Classical encryption (symmetric encryption) works by scrambling a message with a secret key that both the sender and receiver share. Algorithms like AES-256 are extremely secure — even quantum computers provide no meaningful advantage against them (Grover's algorithm provides only a quadratic speedup, reducing AES-256's effective security from 256 bits to 128 bits, which remains unbreakable).

The problem is **key exchange**: how do two parties who have never met agree on a shared secret key without anyone else intercepting it? This is the problem that public key encryption solves.

### How RSA Works (Conceptual)

RSA, invented in 1977 by Rivest, Shamir, and Adleman, is the most widely used public key encryption system. Its security rests on a simple mathematical asymmetry:

- **Multiplying two large prime numbers** is computationally easy. A computer can multiply two 1,024-bit primes in microseconds.
- **Factoring the product back into its prime components** is computationally hard. The best classical algorithm requires sub-exponential time that makes factoring a 2,048-bit number infeasible.

This asymmetry creates a **trapdoor function**: easy to compute in one direction, hard to reverse without secret information (the prime factors).

| Operation | Difficulty (Classical) | Difficulty (Quantum) |
|-----------|----------------------|---------------------|
| Multiply two 1,024-bit primes | Trivial (microseconds) | Trivial |
| Factor a 2,048-bit product | Infeasible ($>10^{20}$ years) | Polynomial time (Shor's) — but requires ~20M physical qubits |
| AES-256 symmetric encryption | Secure ($2^{256}$ operations) | Still secure ($2^{128}$ with Grover's — effectively unbreakable) |

### Elliptic Curve Cryptography (ECC)

Modern systems increasingly use **elliptic curve cryptography**, which provides equivalent security to RSA with much shorter key sizes. ECC's security rests on the **elliptic curve discrete logarithm problem** — another mathematical trapdoor that is easy to compute forward but hard to reverse.

Shor's algorithm also solves the discrete logarithm problem efficiently, meaning ECC is equally vulnerable to a sufficiently powerful quantum computer. The key difference is scale: because ECC uses shorter keys (256-521 bits), the quantum resources needed to break it are somewhat smaller than for RSA-2048, but still far beyond current capabilities.

---

## Could Quantum Computers Break Encryption?

The theoretical answer is **yes** — Shor's algorithm, running on a sufficiently large and reliable quantum computer, could factor the large numbers underlying RSA and solve the discrete logarithm problems underlying ECC in polynomial time. This is not disputed. The algorithm is mathematically proven.

The practical answer is **not with any technology that exists or is projected to exist within the foreseeable future.** The gap between Shor's algorithm's theoretical capabilities and the hardware required to execute it at cryptographically relevant scale is the key to understanding the real threat level.

### What Shor's Algorithm Requires

To break RSA-2048 (the most common key size in current use), a quantum computer running Shor's algorithm would need:

- **Approximately 4,000 logical qubits** to hold the quantum registers and perform the quantum Fourier transform
- **Error correction overhead of ~1,000-5,000 physical qubits per logical qubit** (at current error rates of $\sim 10^{-3}$)
- **Total: approximately 4-20 million physical qubits**, all operating simultaneously with error rates below $10^{-4}$
- **Runtime of hours to days** of continuous, error-corrected quantum computation
- **Classical co-processing** for real-time error decoding at microsecond timescales

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    The largest quantum processors in 2025 have approximately 1,000 noisy
    physical qubits with error rates of $\sim 10^{-3}$. Breaking RSA-2048
    requires 4-20 million physical qubits with error rates of $\sim 10^{-4}$
    or better. That is a gap of four orders of magnitude in qubit count and
    at least one order of magnitude in error rates — simultaneously. Show
    me the roadmap that closes both gaps within a decade. Nobody has one.

---

## Massive Qubits Needed

Let us examine the resource requirements in detail, because the numbers are the most powerful argument against treating the quantum encryption threat as urgent.

### Resource Estimates by Key Size

| Encryption Standard | Key Size | Logical Qubits Needed | Physical Qubits (at $10^{-3}$ error rate) | Physical Qubits (at $10^{-4}$ error rate) |
|--------------------|----------|----------------------|------------------------------------------|------------------------------------------|
| RSA-1024 (deprecated) | 1,024 bits | ~2,000 | ~2-10 million | ~200K-1M |
| RSA-2048 (standard) | 2,048 bits | ~4,000 | ~4-20 million | ~400K-2M |
| RSA-4096 (high security) | 4,096 bits | ~8,000 | ~8-40 million | ~800K-4M |
| ECC-256 (common) | 256 bits | ~2,300 | ~2-12 million | ~230K-1.2M |
| ECC-521 (high security) | 521 bits | ~4,700 | ~5-24 million | ~470K-2.4M |

### The Scaling Gap

The current state of the art is approximately 1,000 noisy physical qubits. The requirement for RSA-2048 is approximately 20 million physical qubits at current error rates, or approximately 2 million at error rates ten times better than current. This means:

- At **current error rates**, we need a **20,000x increase** in qubit count
- At **10x better error rates** (which itself would be a major breakthrough), we still need a **2,000x increase** in qubit count
- **Both improvements must happen simultaneously** — more qubits with better individual qubit quality

Historical qubit scaling has roughly doubled every 1-2 years. At that rate:

$$
\text{Years to 20 million qubits} = \log_2(20{,}000) \times 1.5 \approx 14.3 \times 1.5 \approx 21 \text{ years}
$$

This assumes error rates also improve by the necessary order of magnitude during the same period, which is not guaranteed and has historically been slower than qubit count increases.

#### Diagram: Qubit Scaling Trajectory vs. Cryptographic Threat Threshold

<iframe src="../../sims/qubit-scaling-vs-crypto/main.html" width="100%" height="550px" scrolling="no"></iframe>

<details markdown="1">
<summary>Qubit Scaling Trajectory vs. Cryptographic Threat Threshold</summary>
Type: chart
**sim-id:** qubit-scaling-vs-crypto<br/>
**Library:** Chart.js<br/>
**Status:** Specified

**Bloom Level:** Apply (L3)
**Bloom Verb:** Calculate, Demonstrate

**Learning Objective:** Students will be able to calculate approximate timelines for when quantum computers might reach the qubit counts required to threaten specific encryption standards, given different assumptions about scaling rates and error rate improvements.

**Instructional Rationale:** A parameter-exploration chart is appropriate because the Apply/calculate objective requires students to manipulate scaling assumptions and observe the resulting timelines. This builds intuition for how sensitive the threat timeline is to optimistic versus realistic assumptions.

**Chart type:** Line chart with logarithmic y-axis

**X-axis:** Year (2020 to 2060)

**Y-axis:** Number of physical qubits (logarithmic, from $10^2$ to $10^8$)

**Data series:**

1. Historical qubit counts (solid blue line with data points):
   - 2019: 53 (Google Sycamore)
   - 2021: 127 (IBM Eagle)
   - 2022: 433 (IBM Osprey)
   - 2023: 1,121 (IBM Condor)
   - 2025: ~1,200 (various)

2. Optimistic projection (dashed blue): Doubling every 1 year from 2025
3. Moderate projection (dashed green): Doubling every 1.5 years from 2025
4. Conservative projection (dashed orange): Doubling every 2 years from 2025

**Horizontal reference lines:**

- Red dashed: RSA-2048 requirement at current error rates (~20M qubits) — labeled "RSA-2048 threshold (current errors)"
- Orange dashed: RSA-2048 requirement at 10x better error rates (~2M qubits) — labeled "RSA-2048 threshold (10x better errors)"
- Green dashed: ECC-256 requirement at 10x better error rates (~1M qubits) — labeled "ECC-256 threshold (10x better errors)"

**Annotations:**

- Where each projection line intersects each threshold, label the year
- Note that projections assume error rates also improve, which is not guaranteed

**Interactive controls:**

- Slider: Qubit doubling time (0.5 to 3 years) — default 1.5
- Slider: Error rate improvement factor (1x to 100x) — default 1x (no improvement)
- Toggle: "Show post-quantum migration timeline" — overlay a horizontal bar showing when PQC migration is expected to be complete (~2030-2035)
- Display: "Years until RSA-2048 threatened: [calculated]"

**Behavior:**

- Adjusting sliders updates the projection line and the intersection years in real time
- When the PQC migration timeline overlaps with or precedes the threat threshold crossing, a green label appears: "Defense arrives before threat"
- When the threat arrives before PQC migration, a red warning appears (unlikely with realistic parameters)

**Implementation:** Chart.js with logarithmic y-axis. Background: aliceblue. Responsive to window resize.
</details>

---

## Post-Quantum Cryptography Exists

While the quantum computing industry has been struggling to build larger and more reliable quantum processors, the cryptography community has not been idle. **Post-quantum cryptography** (PQC) — encryption algorithms that are secure against both classical and quantum computers — has been under active development since the late 1990s.

### How Post-Quantum Algorithms Work

Post-quantum algorithms replace the mathematical problems underlying current encryption (integer factoring, discrete logarithms) with problems that are believed to be hard for both classical and quantum computers:

| PQC Approach | Mathematical Basis | Status |
|-------------|-------------------|--------|
| **Lattice-based** | Finding short vectors in high-dimensional lattices — a problem with no known efficient quantum algorithm | NIST standardized (CRYSTALS-Kyber, CRYSTALS-Dilithium) |
| **Hash-based** | Security based on hash function collision resistance — quantum computers provide only quadratic speedup | NIST standardized (SPHINCS+) |
| **Code-based** | Decoding random linear error-correcting codes — studied since 1978 (McEliece), no efficient quantum algorithm known | Under evaluation |
| **Multivariate** | Solving systems of multivariate polynomial equations | Under evaluation |
| **Isogeny-based** | Finding isogenies between elliptic curves | Partially broken classically (SIDH); newer variants under study |

The most important takeaway is that **multiple independent mathematical approaches** to post-quantum security exist. Even if one approach is broken (as happened with SIDH in 2022, which was broken by a classical — not quantum — attack), the others remain secure. The redundancy in the PQC ecosystem means that the cryptographic community is not relying on a single unproven assumption.

---

## NIST Already Has Standards

In July 2022, the U.S. National Institute of Standards and Technology (NIST) announced the first group of post-quantum cryptographic standards after a rigorous six-year evaluation process. The standardized algorithms are:

| Algorithm | Type | Purpose | Standard |
|-----------|------|---------|----------|
| **CRYSTALS-Kyber** (ML-KEM) | Lattice-based | Key encapsulation (key exchange) | FIPS 203 |
| **CRYSTALS-Dilithium** (ML-DSA) | Lattice-based | Digital signatures | FIPS 204 |
| **SPHINCS+** (SLH-DSA) | Hash-based | Digital signatures (conservative backup) | FIPS 205 |
| **FALCON** (FN-DSA) | Lattice-based | Digital signatures (compact) | FIPS 206 (forthcoming) |

These standards are not theoretical — they are published, implemented in major cryptographic libraries (OpenSSL, BoringSSL, liboqs), and being deployed by organizations worldwide. The U.S. government has mandated that federal agencies begin migrating to PQC algorithms, with a target completion date of 2035.

!!! info "The Migration Is Already Underway"
    Google, Apple, Microsoft, and Cloudflare have all begun deploying PQC
    algorithms in their products and services. Chrome and Safari support
    hybrid key exchange (combining classical and PQC algorithms) for TLS
    connections. Signal messenger adopted PQC key exchange in 2023. The
    migration is not waiting for quantum computers to become a threat —
    it is happening now, proactively.

### The Asymmetry of Timelines

Here is the critical comparison:

| Question | Encryption Threat | Encryption Defense |
|----------|------------------|-------------------|
| When will quantum computers break RSA-2048? | Optimistically: 2040s-2050s. Pessimistically: never at commercial scale | N/A |
| When will post-quantum standards be available? | N/A | **Already available** (2022-2024) |
| When will migration be substantially complete? | N/A | Estimated 2030-2035 for critical systems |
| What is the gap? | **Defense arrives decades before the threat** | |

This asymmetry is the single most important fact in the quantum encryption debate. The defense is here. The threat is decades away at best. The window of vulnerability — if it ever opens — will close before quantum computers are powerful enough to exploit it.

!!! mascot-warning "Bias Alert"
    <img src="../../img/mascot/warning.png" class="mascot-admonition-img" alt="Fermi warns you">
    Notice how the framing of the encryption threat changes the incentive
    structure. If you are a quantum computing company seeking government
    funding, you emphasize the threat: "Quantum computers will break
    encryption — we must invest now!" If you are a cryptographer, you
    emphasize the defense: "Post-quantum standards are ready — migrate
    now and the threat is neutralized." Both are true, but the quantum
    computing industry has a financial incentive to emphasize the threat
    and downplay the defense. When you see an article about "the quantum
    threat to encryption," check whether it mentions post-quantum
    cryptography at all. Many do not.

---

## Harvest Now, Decrypt Later

The most sophisticated argument for urgency around the quantum encryption threat is the **"harvest now, decrypt later"** (HNDL) scenario. The argument goes:

1. Adversaries (nation-states, criminal organizations) are intercepting and storing encrypted communications today.
2. When quantum computers become powerful enough to break current encryption, these adversaries will decrypt the stored data.
3. Therefore, data encrypted today is already at risk if its secrecy must last beyond the arrival of quantum computers.

### Assessing the HNDL Threat

The HNDL scenario is logically valid but practically overstated for several reasons:

**The data must still be valuable when decrypted.**

Most encrypted data has a limited shelf life. Financial transactions, session tokens, API keys, and most business communications lose their value within days to months. The data that remains valuable over decades — classified military intelligence, long-term trade secrets, certain medical records — represents a tiny fraction of all encrypted traffic.

| Data Type | Typical Sensitivity Duration | HNDL Risk Level |
|-----------|----------------------------|-----------------|
| Web session tokens | Minutes to hours | None |
| Financial transactions | Days to weeks | Negligible |
| Business emails | Months to years | Low |
| Trade secrets | Years to decades | Moderate |
| Classified intelligence | Decades | High — but already protected by additional measures |
| Medical records (HIPAA) | Decades (lifetime) | Moderate |

**The storage requirements are enormous.**

Intercepting and storing all encrypted internet traffic is impractical. Global internet traffic exceeds 400 exabytes per month (as of 2025). Even selective collection targeting high-value communications generates petabytes of data that must be stored for decades. The storage cost alone is a significant deterrent.

**Perfect forward secrecy limits the damage.**

Modern TLS connections use **ephemeral key exchange** (Diffie-Hellman or ECDH). Each session generates a unique key that is discarded after use. Even if a long-term key is compromised, previously recorded sessions cannot be decrypted if perfect forward secrecy was used. This is standard practice for most major websites and services.

**PQC migration addresses the HNDL threat directly.**

The HNDL scenario assumes that organizations continue using quantum-vulnerable encryption until quantum computers arrive. But the PQC migration is already underway. As organizations adopt post-quantum key exchange, new communications become immune to HNDL attacks even if quantum computers eventually materialize. The race is between PQC migration speed and adversary storage capacity — and migration is winning.

!!! mascot-thinking "Key Insight"
    <img src="../../img/mascot/thinking.png" class="mascot-admonition-img" alt="Fermi is thinking">
    The HNDL argument is the strongest case for urgency around the quantum
    encryption threat, and it is not unreasonable — particularly for
    classified government communications. But it is often deployed without
    the qualifying analysis: most data loses value quickly, perfect forward
    secrecy limits exposure, and PQC migration is already closing the
    vulnerability window. The HNDL threat is real for a narrow category of
    data; it is routinely exaggerated into a general-purpose argument for
    quantum computing investment.

---

## The Window Is Already Closing

The "window of vulnerability" — the period during which quantum computers could break encryption that has not yet been migrated to post-quantum algorithms — is defined by two timelines:

$$
\text{Window} = T_{\text{quantum threat}} - T_{\text{PQC complete}}
$$

If $T_{\text{PQC complete}} < T_{\text{quantum threat}}$, the window never opens. If $T_{\text{quantum threat}} < T_{\text{PQC complete}}$, there is a vulnerability gap.

Current estimates:

| Timeline | Optimistic (for threat) | Moderate | Conservative |
|----------|------------------------|----------|-------------|
| $T_{\text{quantum threat}}$ (RSA-2048 broken) | 2040 | 2050+ | Never at scale |
| $T_{\text{PQC complete}}$ (critical systems migrated) | 2030 | 2035 | 2040 |
| **Window** | **Closed (defense wins by 10 years)** | **Closed** | **Closed** |

Even under the most optimistic assumptions about quantum computing progress and the most pessimistic assumptions about PQC migration speed, the defense arrives before the threat in all scenarios. The window is already closing — and for organizations that adopt PQC proactively (as many are doing), it is already closed.

#### Diagram: The Closing Window of Vulnerability

<iframe src="../../sims/vulnerability-window/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>The Closing Window of Vulnerability</summary>
Type: microsim
**sim-id:** vulnerability-window<br/>
**Library:** p5.js<br/>
**Status:** Specified

**Bloom Level:** Evaluate (L5)
**Bloom Verb:** Assess, Judge

**Learning Objective:** Students will be able to assess whether a vulnerability window exists under different assumptions about quantum computing progress and PQC migration speed, and judge the urgency of the quantum encryption threat.

**Instructional Rationale:** A parameter-exploration MicroSim is appropriate because the Evaluate/assess objective requires students to weigh competing timelines under varying assumptions. By manipulating the two key variables (threat arrival and defense completion), students discover that the window remains closed under all plausible scenarios — a more convincing finding than being told the conclusion.

**Canvas layout:**

- Main area (70%): A horizontal timeline from 2020 to 2060 with two converging/diverging bars
- Side panel (30%): Controls and assessment output

**Visual elements:**

- A horizontal timeline spanning 2020-2060
- Upper bar (red, growing from left): "Quantum Threat Progress" — representing the advance toward RSA-2048-breaking capability
- Lower bar (green, growing from left): "PQC Migration Progress" — representing the adoption of post-quantum cryptography
- A vertical zone between the bars: "Vulnerability Window" — colored yellow if it exists, green if closed
- Current year marker (2025) with progress indicators for both bars

**Interactive controls:**

- Slider: "Quantum scaling rate" — qubit doubling time (1 to 3 years), default 1.5
- Slider: "Error rate improvement" — annual improvement factor (1x to 2x), default 1.1x
- Slider: "PQC migration speed" — years to migrate critical systems (5 to 20 years from 2024), default 10
- Dropdown: "Encryption standard" — RSA-2048, RSA-4096, ECC-256
- Display: "Quantum threat arrives: [year]"
- Display: "PQC migration complete: [year]"
- Display: "Window status: CLOSED / OPEN ([N] year gap)"

**Behavior:**

- Adjusting sliders updates both timelines in real time
- If PQC migration completes before the quantum threat arrives, the window zone turns green and displays "WINDOW CLOSED"
- If the quantum threat arrives first, the window zone turns red and displays the gap
- Under all plausible parameter combinations, the window should remain closed or be at most a few years

**Implementation:** p5.js. Background: aliceblue. Responsive to window resize.
</details>

---

## The Crypto Threat Is Overstated

Synthesizing everything in this chapter, we can now make a comprehensive assessment of the quantum encryption threat:

### The Threat: What Is True

- Shor's algorithm can theoretically break RSA and ECC. This is mathematically proven.
- A sufficiently large, error-corrected quantum computer running Shor's algorithm could factor RSA-2048 in hours to days.
- The "harvest now, decrypt later" threat is logically valid for long-lived secrets.

### The Overstatement: What Is Missing from the Narrative

- **The hardware doesn't exist and may not for decades.** Breaking RSA-2048 requires ~20 million physical qubits at current error rates. Current systems have ~1,000 noisy qubits. The gap is four orders of magnitude in quantity and at least one in quality.
- **Post-quantum cryptography is already standardized and deploying.** NIST standards published 2022-2024. Migration underway at Google, Apple, Microsoft, Signal, and government agencies.
- **The vulnerability window is closing.** Under all plausible scenarios, PQC migration completes before quantum computers reach cryptographic relevance.
- **Symmetric encryption is not threatened.** AES-256, used for data at rest and many transport protocols, is quantum-resistant. Grover's algorithm provides only a quadratic speedup, reducing security to an effective 128 bits — still unbreakable.
- **Most encrypted data loses value quickly.** The HNDL threat applies only to data whose secrecy must be preserved for decades.
- **The largest number factored by a quantum computer is 21.** RSA-2048 requires factoring numbers with 617 digits. The gap from 2 digits to 617 digits is not "just engineering."

### Why the Threat Is Overstated

The encryption threat is systematically overstated because it serves the interests of multiple actors in the quantum computing ecosystem:

| Actor | Interest in Overstating the Threat |
|-------|-----------------------------------|
| Quantum computing companies | Justifies government contracts and investor funding |
| Intelligence agencies | Justifies budget increases for quantum research |
| Cybersecurity vendors | Sells "quantum-safe" products and consulting |
| Politicians | Demonstrates attention to national security |
| Media | Generates clicks and engagement |
| Quantum researchers | Justifies continued funding and career relevance |

None of these actors are necessarily dishonest. Each has genuine reasons to take the threat seriously. But the aggregate effect of these aligned incentives is a public narrative that dramatically overstates the urgency and understates the strength of the defense.

!!! mascot-tip "Fermi's Tip"
    <img src="../../img/mascot/tip.png" class="mascot-admonition-img" alt="Fermi shares a tip">
    When you encounter an article about "the quantum threat to encryption,"
    apply this checklist: (1) Does it mention the qubit count required?
    (2) Does it mention post-quantum cryptography or NIST standards?
    (3) Does it estimate when the threat might materialize? (4) Does it
    acknowledge that symmetric encryption is not threatened? If the article
    omits any of these, it is overstating the threat — intentionally or
    through ignorance.

---

## Key Takeaways

This chapter examined the quantum encryption threat and found it to be one of the most overhyped aspects of quantum computing:

1. **Public key encryption** (RSA, ECC) relies on mathematical problems — integer factoring and discrete logarithms — that Shor's algorithm can theoretically solve efficiently. This is a proven mathematical result.

2. **The hardware requirements are staggering.** Breaking RSA-2048 requires approximately 20 million physical qubits at current error rates — roughly 20,000x more than exist today, with significantly better quality.

3. **Post-quantum cryptography already exists.** NIST standardized quantum-resistant algorithms (CRYSTALS-Kyber, CRYSTALS-Dilithium, SPHINCS+) in 2022-2024, based on lattice and hash problems with no known quantum algorithm.

4. **The migration is underway.** Google, Apple, Microsoft, Signal, and government agencies are deploying PQC now, with critical infrastructure migration targeted for completion by 2030-2035.

5. **The "harvest now, decrypt later" threat** is real but narrow — applicable only to data that must remain secret for decades, and mitigated by perfect forward secrecy and PQC migration.

6. **The vulnerability window is closing.** Under all plausible scenarios, the defense (PQC) arrives before the threat (cryptographically relevant quantum computers).

7. **Symmetric encryption is not threatened.** AES-256 remains secure against quantum computers, with Grover's algorithm providing only a manageable quadratic speedup.

8. **The threat is overstated** because it serves the interests of quantum computing companies, intelligence agencies, cybersecurity vendors, politicians, and media. The aggregate effect of these aligned incentives is a public narrative that dramatically overstates urgency.

!!! mascot-celebration "Excellent Investigative Work!"
    <img src="../../img/mascot/celebration.png" class="mascot-admonition-img" alt="Fermi celebrates">
    You can now evaluate the quantum encryption threat with the evidence in
    hand. You know the qubit requirements, you know that post-quantum
    cryptography is already deployed, and you know that the window of
    vulnerability is closing. The next time someone uses "quantum computers
    will break encryption" as an argument for investing in quantum computing,
    you have the facts to assess whether the alarm is proportionate to the
    evidence. Excellent investigative work, fellow investigator!

---

## Review Questions

??? question "1. Why is symmetric encryption (e.g., AES-256) not threatened by quantum computers, while public key encryption (e.g., RSA) is?"
    Symmetric encryption's security relies on the brute-force difficulty of
    searching through $2^{256}$ possible keys. Grover's algorithm provides
    only a quadratic speedup, reducing this to $2^{128}$ quantum operations —
    still computationally infeasible. RSA, by contrast, relies on the
    difficulty of integer factoring, for which Shor's algorithm provides an
    *exponential* speedup, reducing factoring time from sub-exponential to
    polynomial. The difference is between a modest reduction in security
    (symmetric) and a complete collapse of security (public key) — but only
    if a sufficiently powerful quantum computer is built.

??? question "2. Calculate the approximate physical qubit gap between current hardware and what is needed to break RSA-2048."
    Current hardware: ~1,000 noisy physical qubits at error rates of ~$10^{-3}$.
    RSA-2048 requirement: ~4,000 logical qubits × ~5,000 physical per logical
    (at $10^{-3}$ error rate) = ~20 million physical qubits. Gap: 20,000,000 /
    1,000 = 20,000x in qubit count. Additionally, error rates need to improve
    by at least 10x to make the overhead manageable. At a qubit doubling rate
    of 1.5 years: $\log_2(20{,}000) \times 1.5 \approx 21$ years, assuming
    error rates also improve — giving a rough timeline of ~2046 at the most
    optimistic, and much longer if scaling slows.

??? question "3. Name three NIST-standardized post-quantum cryptography algorithms and the mathematical problems they rely on."
    (1) CRYSTALS-Kyber (ML-KEM, FIPS 203) — lattice-based key encapsulation,
    relying on the learning with errors (LWE) problem. (2) CRYSTALS-Dilithium
    (ML-DSA, FIPS 204) — lattice-based digital signatures, also relying on
    lattice problems. (3) SPHINCS+ (SLH-DSA, FIPS 205) — hash-based digital
    signatures, relying on the collision resistance of hash functions. All
    three are believed to be secure against both classical and quantum attacks.

??? question "4. Under what conditions does the 'harvest now, decrypt later' threat represent a genuine risk?"
    HNDL is genuinely threatening when all of the following conditions are met:
    (1) The encrypted data must remain secret for decades — longer than the
    time until cryptographically relevant quantum computers might exist.
    (2) An adversary has the capability to intercept and store the specific
    encrypted traffic. (3) The encryption does not use perfect forward secrecy
    (ephemeral key exchange). (4) The organization has not yet migrated to
    post-quantum key exchange. This combination applies primarily to classified
    government communications and certain long-lived trade secrets — a narrow
    category, not the general internet traffic the narrative implies.

??? question "5. Why does the author argue that the quantum encryption threat is 'overstated' rather than 'nonexistent'?"
    The theoretical threat is real — Shor's algorithm genuinely breaks RSA and
    ECC if run on sufficient hardware. The claim is not that quantum computers
    will never break encryption (though that is possible), but that the threat
    is systematically exaggerated relative to the evidence. The hardware
    requirements are decades away, the defense (PQC) is already deployed, the
    vulnerability window is closing, and the actors who emphasize the threat
    have financial incentives to overstate it. The threat exists in theory but
    is not proportionate to the urgency conveyed by the quantum computing
    industry, cybersecurity vendors, and media. "Overstated" means the risk is
    real but the alarm is disproportionate to the evidence.
