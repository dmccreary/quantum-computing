# Book Review: Will We Ever Have a Quantum Computer?

**Book:** *Will We Ever Have a Quantum Computer?*
**Author:** Mikhail I. Dyakonov, University of Montpellier (Professor Emeritus)
**Publisher:** Springer (SpringerBriefs in Physics), March 2020
**ISBN:** 978-3-030-42018-5
**Length:** ~130 pages
**Related article:** ["The Case Against Quantum Computing,"](https://spectrum.ieee.org/the-case-against-quantum-computing) *IEEE Spectrum*, November 2018

---

## Overview

Mikhail Dyakonov's *Will We Ever Have a Quantum Computer?* is a compact, sharply argued book that challenges the prevailing assumption that large-scale, economically viable quantum computing is inevitable. Published by Springer in 2020, it represents the most complete statement of Dyakonov's skepticism — arguments he had been developing in journal articles and conference papers since 2001. The book is written for a general scientific audience, requiring only secondary-school-level physics and mathematics, and it pulls no punches in its assessment: the prospects for quantum computing are "extremely doubtful."

---

## The Author: Mikhail I. Dyakonov

### Academic Background

Mikhail Ivanovich Dyakonov (born 1940, Leningrad) is a theoretical physicist whose career spans over six decades of contributions to condensed matter physics, semiconductor physics, and spin dynamics. He earned his PhD in 1966 from the Ioffe Physical-Technical Institute in Saint Petersburg — one of Russia's most prestigious physics institutions — and worked there as a Principal Scientist until 1998, when he moved to the University of Montpellier in France, where he is now Professor Emeritus.

### Scientific Contributions

Dyakonov's credentials in semiconductor physics are exceptional. His name is permanently attached to multiple phenomena in the field:

- **Dyakonov-Perel spin relaxation mechanism** (1971, with V.I. Perel) — the dominant mechanism for spin relaxation in semiconductors without inversion symmetry. This is textbook-level physics cited in thousands of papers.
- **Spin Hall Effect prediction** (1971, with V.I. Perel) — predicted decades before its experimental observation, this effect has become a cornerstone of spintronics research.
- **Dyakonov-Shur plasma instability** — a mechanism in two-dimensional electron fluids with applications in terahertz physics.
- **Dyakonov surface waves** (1988) — a theoretically predicted class of surface electromagnetic waves at interfaces of anisotropic materials, later experimentally confirmed.

He edited the definitive reference text *Spin Physics in Semiconductors* (Springer, 2008/2017) and has authored or co-authored hundreds of peer-reviewed papers.

### Awards and Recognition

- **State Prize of the USSR** in physics (1976) — for theoretical work on spin dynamics
- **Frenkel Prize** of the St. Petersburg Physical Society (1992)
- **Ioffe Prize** of the Russian Academy of Sciences (1993)
- **Beller Lectureship Award** from the American Physical Society (2009)
- **Grand Prize** (Prix Félix Robin) from the French Physical Society (2009)

### Assessment of Credibility

Dyakonov is not a fringe figure or a crank. He is a highly accomplished theoretical physicist with deep expertise in precisely the areas of quantum mechanics — spin dynamics, decoherence, and semiconductor physics — that are most relevant to the physical implementation of qubits. When he speaks about the challenges of controlling quantum states in physical hardware, he speaks with genuine authority. His skepticism cannot be dismissed as ignorance of the underlying physics.

That said, his expertise is in condensed matter physics, not in quantum information theory or computational complexity theory. This distinction matters significantly when evaluating his arguments about error correction and fault tolerance, as we discuss below.

---

## The Core Arguments

Dyakonov's book develops several interconnected arguments. The central thesis is that a quantum computer is not a digital device but rather a **quantum analog computer** — and this distinction has devastating implications for scalability.

### Argument 1: The Continuous Parameter Problem

The book's most powerful argument concerns the sheer number of continuous parameters that define a quantum state. An $N$-qubit system is described by $2^N$ complex amplitudes (minus normalization and global phase), meaning the state space has roughly $2^{N+1}$ real continuous parameters. For a system of just 1,000 qubits — far fewer than what would be needed for useful computation — this means approximately $2^{1000} \approx 10^{300}$ continuous parameters must be controlled with sufficient precision.

Dyakonov's **"Axiom 1"** states: *In the physical world, no continuous quantity can have an exact value.* Every physical parameter carries some imprecision. If you must simultaneously control $10^{300}$ continuous variables, and each one carries some error, the prospect of maintaining coherent quantum computation becomes, in his view, "absolutely unimaginable."

This is a physics argument, not an engineering argument. Dyakonov is not saying that we have not yet built good enough hardware. He is saying that the fundamental nature of continuous physical quantities makes the task impossible.

### Argument 2: Quantum Error Correction Is Insufficient

Dyakonov is deeply skeptical of the **threshold theorem** — the theoretical result (Aharonov & Ben-Or, 1997; Knill, Laflamme & Zurek, 1998) that states fault-tolerant quantum computation is possible provided the physical error rate per gate falls below a certain threshold. He argues that:

1. The theorem relies on mathematical idealizations that may not hold in physical reality
2. It does not account for all possible sources of noise, unreliability, and manufacturing imprecision
3. The overhead required for error correction (thousands of physical qubits per logical qubit) compounds the control problem rather than solving it
4. The theorem treats quantum errors as discrete events, when in reality they are continuous deviations in a continuous parameter space

Dyakonov has urged quantum computing researchers to include disclaimers acknowledging that their schemes "rely on speculative technology, do not in their current form take into account all possible sources of noise, unreliability and manufacturing error, and probably will not work."

### Argument 3: The Analog Computer Analogy

Classical analog computers — machines that computed using continuous physical quantities like voltages, shaft rotations, or fluid levels — were real and useful for certain problems. But they never scaled. The fundamental reason was that errors in continuous quantities accumulate and compound in ways that are qualitatively different from errors in digital (discrete) quantities.

Dyakonov argues that quantum computers face an analogous problem. Despite the quantum error correction framework, the underlying physics is continuous, and the "digital" abstraction of qubits as clean 0-or-1 states is a mathematical convenience that breaks down in the physical world. The quantum computer, in his view, is not the quantum equivalent of the classical digital computer — it is the quantum equivalent of the classical analog computer, and will ultimately fail for the same reasons.

### Argument 4: Unfulfilled Promises and Hype Cycles

The book traces the history of quantum computing from Shor's algorithm (1994) through the subsequent decades of promises, press releases, and unfulfilled timelines. Dyakonov notes that the field has operated on a perpetual cycle of "breakthroughs" that never quite deliver on the original promise of exponential speedups for commercially relevant problems. He observes that "a few decades is the maximum lifetime of any big bubble in technology or science," and suggests that quantum computing may be approaching the end of its bubble.

---

## Strengths of the Book

### Genuine Strengths

- **Written by an expert in the relevant physics.** Dyakonov's understanding of decoherence, spin dynamics, and the behavior of quantum states in physical hardware is world-class. His intuition about what real quantum systems can and cannot do deserves serious weight.

- **The continuous parameter argument is genuinely powerful.** The observation that a useful quantum computer requires simultaneous control of an exponentially large number of continuous variables is not wrong — it is a mathematically precise statement about the structure of quantum state space. Whether error correction can tame this exponential is the central question, and Dyakonov is right to insist that this not be taken for granted.

- **Accessible and clearly written.** At roughly 130 pages, the book is concise and avoids unnecessary jargon. A scientifically literate reader without a physics PhD can follow the arguments. This is rare for a book on quantum computing and makes it useful as a teaching resource.

- **Correctly identifies the hype problem.** The quantum computing field has a well-documented tendency to over-promise and under-deliver. Dyakonov's documentation of unfulfilled timelines and inflated claims is well-sourced and fair.

- **Asks the right question.** "Will we ever have a quantum computer?" is precisely the question that billions of dollars in investment should be forced to answer with evidence rather than optimism. Dyakonov is right that the burden of proof lies with those making extraordinary claims about exponential computational advantage.

---

## Weaknesses and Possible Biases

### Legitimate Weaknesses

- **Insufficient engagement with the threshold theorem.** This is Dyakonov's most serious intellectual gap. The fault-tolerance threshold theorem does not ignore continuous errors — it explicitly models gate imprecision, state preparation errors, and decoherence as continuous noise processes, folding them into a unified error budget. As Scott Aaronson has pointed out, Dyakonov's claim that "no one has any idea how to account for imprecision" is factually incorrect — the theorem handles imprecisions "in exactly the same way it handles environmental decoherence." Dyakonov loosely suggests the theorem may be false without providing a formal argument or evidence for why it fails.

- **Conflation of analog and digital error models.** Dyakonov's analog computer analogy is rhetorically effective but technically misleading. Classical analog computers failed because they had no error correction framework. Quantum error correction is specifically designed to impose a digital abstraction on top of continuous physics — the same thing classical digital computers do with noisy transistor voltages. Dyakonov asserts this cannot work at quantum scale but does not rigorously demonstrate why quantum error correction is fundamentally different from the classical digital abstraction that obviously does work.

- **The $2^N$ parameter argument proves too much.** If the mere existence of $2^N$ continuous parameters in the quantum state description were sufficient to render quantum computation impossible, it would also render quantum *physics* impossible — yet nature routinely evolves quantum systems with enormous numbers of parameters. Molecules, crystalline solids, and even simple chemical reactions involve quantum states in exponentially large Hilbert spaces, and they work just fine. The question is not whether $2^N$ parameters exist, but whether they must all be individually controlled, and quantum error correction is designed precisely to avoid that requirement through modular, fault-tolerant architectures.

- **No constructive alternative theory.** Unlike Gil Kalai (who proposes that correlated noise fundamentally prevents error correction) or Tim Palmer (who proposes a modification to quantum mechanics itself), Dyakonov does not offer a theoretical framework that would explain *why* quantum computing is impossible. He argues from engineering intuition and the "unimaginability" of the task, not from a physical principle. As Aaronson notes, Dyakonov "never seriously entertains the possibility of a general principle that would explain why scalable quantum computing is not possible."

- **Factual errors on specific claims.** Dyakonov has claimed that Grover's algorithm "became obsolete due to the polynomial slow-down imposed by error correction." This is incorrect — the overhead from quantum error correction is polylogarithmic, not polynomial. Such errors undermine confidence in his technical command of quantum information theory, even though his physics intuition is sound.

- **Dismissive tone toward the field.** While the book's directness is a strength, Dyakonov occasionally crosses from skepticism into dismissiveness, suggesting that quantum computing researchers are engaged in something resembling a collective delusion. This alienates the very audience that should engage with his arguments most seriously.

### Possible Biases

- **Outsider's bias.** Dyakonov is a condensed matter physicist critiquing quantum information theory — a subfield with its own extensive mathematical framework, conventions, and accumulated results. His arguments sometimes reflect an incomplete engagement with this literature, particularly the post-1996 fault-tolerance results.

- **Generational bias.** Having built his career in an era when quantum mechanics was applied to understand physical systems (semiconductors, spin dynamics), Dyakonov may carry an implicit assumption that quantum mechanics is fundamentally a tool for describing nature, not for engineering computation. This is a philosophical stance, not a technical argument.

- **Confirmation bias in historical parallels.** The book's comparisons to previous technology bubbles (cold fusion, nanotechnology hype) are suggestive but not probative. The fact that some technological promises have failed does not establish that this one will. Each case must be evaluated on its own physics and engineering merits.

- **Lack of financial or institutional conflict.** It is worth noting that Dyakonov has no financial stake in the outcome — he is not funded by quantum computing companies, not seeking startup investment, and not competing for quantum computing grants. His skepticism is intellectually motivated, which lends it a credibility that industry-funded "breakthroughs" often lack.

---

## Dyakonov's Conclusions

Dyakonov concludes that:

1. The quantum computer is fundamentally a quantum analog device, not a quantum digital device
2. The continuous parameter problem makes large-scale quantum computation physically infeasible
3. The threshold theorem, while mathematically interesting, does not adequately account for the realities of physical implementation
4. The quantum computing field is sustained by hype, funding momentum, and institutional inertia rather than by demonstrated progress toward its stated goals
5. Useful, economically viable quantum computers will very likely never be built

He does not argue that quantum computing research should be stopped — he acknowledges that the experimental physics is valuable in its own right. But he insists that researchers and investors should be honest about the overwhelming odds against success.

---

## Why This Book Is Rarely Cited by Quantum Computing Advocates

Dyakonov's book occupies an unusual position in the quantum computing literature: widely read, frequently discussed informally, but rarely cited in technical papers or industry reports. Several factors explain this pattern:

### 1. It Does Not Engage on the Field's Own Terms

Quantum computing researchers have spent three decades building a rigorous mathematical framework for fault tolerance, error correction codes, and computational complexity. Dyakonov's arguments largely bypass this framework, relying instead on physical intuition and the "unimaginability" of controlling exponentially many parameters. For researchers who have internalized the threshold theorem and its implications, this feels like arguing that airplanes cannot fly because wings are heavier than air — technically true at a surface level, but missing the mechanism (aerodynamic lift / error correction) that resolves the apparent paradox. Citing Dyakonov would require engaging with arguments that the field considers already addressed.

### 2. The Book Is Not a Peer-Reviewed Technical Contribution

Published as a SpringerBrief — a short, accessible monograph rather than a peer-reviewed research article — the book does not present new theorems, new experimental results, or a formal proof that the threshold theorem fails. In academic citation practice, researchers cite results, not opinions. Dyakonov's earlier arXiv papers (e.g., [arXiv:1401.3629](https://arxiv.org/abs/1401.3629)) are occasionally cited in review articles on quantum computing skepticism, but the book format limits its citability in technical work.

### 3. Institutional and Funding Incentives

The quantum computing research ecosystem — encompassing universities, national labs, and companies like Google, IBM, Microsoft, and numerous startups — represents tens of billions of dollars in cumulative investment. Citing a book that argues the entire enterprise "will probably not work" creates obvious professional risks: difficulty securing grants, skepticism from reviewers, and friction with collaborators. This is not conspiracy — it is the ordinary sociology of science, where paradigm-challenging work faces structural resistance regardless of its merits.

### 4. The Tone Invites Dismissal

Dyakonov's writing, while clear, can be read as condescending toward the quantum computing community. Phrases suggesting that researchers are engaged in collective self-deception make it easy for advocates to dismiss the book as the grumblings of an outsider rather than engaging with the substance of the arguments. A more measured tone might have generated more productive debate.

### 5. No Falsifiable Theoretical Framework

Palmer's Rational Quantum Mechanics, Kalai's noise conjectures, and the Alicki-Horodecki decoherence models all provide specific, falsifiable predictions that the quantum computing community can test and potentially refute. Dyakonov's arguments are more diffuse — rooted in skepticism about whether engineering can overcome fundamental physics, but without a specific mechanism that predicts *where* or *how* quantum computing will fail. This makes his work harder to engage with scientifically, even when the intuition behind it is sound.

### 6. Survivorship Bias in the Literature

Papers that report positive results — new qubit architectures, improved coherence times, error correction milestones — are published, cited, and celebrated. Papers and books that question whether the entire enterprise is viable are structurally disfavored by the publication and citation ecosystem. This is a well-documented pattern in science (Ioannidis, 2005) and applies to quantum computing as strongly as to any other field with large funding streams.

---

## Relationship to This Course's Arguments

| Dyakonov's Arguments | This Course's Arguments |
|---|---|
| Quantum computers are analog devices with continuous parameters | Agrees — the analog nature of quantum states is a central theme |
| Error correction overhead is prohibitive | Agrees — and extends with specific overhead calculations |
| The threshold theorem may not apply to real hardware | This course is more cautious — notes the theorem as unproven in practice rather than incorrect in principle |
| The field is sustained by hype | Agrees — and adds cognitive bias analysis (sunk cost, authority bias, bandwagon effect) |
| Useful quantum computers will never be built | This course frames it as "may never be economically viable" — a slightly weaker but more defensible claim |

Dyakonov's work provides important physics-based ammunition for the skeptical position, but this course's analysis goes further in examining the *economic*, *cognitive*, and *sociological* dimensions of the quantum computing enterprise.

---

## Bottom Line

Mikhail Dyakonov is a serious physicist asking serious questions. His core insight — that a quantum computer must control an exponentially large number of continuous parameters, and that this is qualitatively different from classical digital computation — deserves more engagement than it has received from the quantum computing community. The book's weaknesses are real: insufficient engagement with the threshold theorem, factual errors on error correction overhead, and the absence of a constructive theoretical alternative. But these weaknesses do not negate the central question.

The quantum computing community's response to Dyakonov has largely been to assert that the threshold theorem resolves his concerns. But the threshold theorem is a mathematical result about an idealized noise model — whether it applies to physical hardware at scale remains an open experimental question. Until a large-scale, fault-tolerant quantum computer actually solves a commercially relevant problem faster than a classical computer, Dyakonov's skepticism remains a legitimate and underappreciated perspective.

As Fermi would say: the man's physics credentials are impeccable. His information theory could use some work. But his central question — does the math check out? — remains unanswered.

---

## References and Further Reading

- Dyakonov, M.I. *Will We Ever Have a Quantum Computer?* SpringerBriefs in Physics. Springer, 2020. [Springer Link](https://link.springer.com/book/10.1007/978-3-030-42019-2)
- Dyakonov, M.I. "The Case Against Quantum Computing." *IEEE Spectrum*, November 2018. [IEEE Spectrum](https://spectrum.ieee.org/the-case-against-quantum-computing)
- Dyakonov, M.I. "Prospects for Quantum Computing: Extremely Doubtful." arXiv preprint, 2014. [arXiv:1401.3629](https://arxiv.org/abs/1401.3629)
- Dyakonov, M.I. "Is Fault-Tolerant Quantum Computation Really Possible?" arXiv preprint, 2006. [arXiv:quant-ph/0610117](https://arxiv.org/abs/quant-ph/0610117)
- Aaronson, S. "Happy New Year! My Response to M.I. Dyakonov." *Shtetl-Optimized*, January 2013. [Blog post](https://scottaaronson.blog/?p=1211)
- Aaronson, S. "PHYS771 Lecture 14: Skepticism of Quantum Computing." [Lecture notes](https://www.scottaaronson.com/democritus/lec14.html)
- Kalai, G. "Robert Alicki, Michel Dyakonov, Leonid Levin, Oded Goldreich, and Others — A Summary of Some Skeptical Views on Quantum Computing." February 2025. [Blog post](https://gilkalai.wordpress.com/2025/02/17/robert-alicki-michel-dyakonov-leonid-levin-oded-goldreich-and-others-a-summary-of-some-skeptical-views-on-quantum-computing/)
- "The Case Against 'The Case Against Quantum Computing.'" *HPCwire*, January 2019. [HPCwire](https://www.hpcwire.com/2019/01/09/the-case-against-the-case-against-quantum-computing/)
- [Mikhail Dyakonov — Wikipedia](https://en.wikipedia.org/wiki/Mikhail_Dyakonov)
