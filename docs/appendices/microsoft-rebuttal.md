# Analysis: Legg's Nature Critique of Microsoft's Majorana 2 Claims (2026)

**Paper:** "Comment on Microsoft's topological qubit paper"<br/>
**Author:** Dr. Henry Legg, University of St Andrews<br/>
**Journal:** *Nature*, "Matters Arising" section, June 24, 2026<br/>
**DOI:** [10.1038/s41586-026-10567-8](https://www.nature.com/articles/s41586-026-10567-8)<br/>
**Critiques:** Microsoft Quantum, *Nature*, February 2025

---

## Background: What Microsoft Claimed

In February 2025, Microsoft published a paper in *Nature* announcing what they called a
foundational breakthrough: the creation of a **topological qubit** using their **Majorana 2
chip**. The chip uses exotic quantum particles called *Majoranas* — theoretically stable,
error-resistant qubit states built from hybrid semiconductor-superconductor nanowires.

Microsoft's announcement was sweeping. They claimed the chip demonstrated the physical
preconditions for a new class of fault-tolerant quantum computing, and they tied it directly to
a public roadmap promising a scalable quantum computer **"by 2029"** — "years, not decades" away.

*Nature* publication lent the claim enormous credibility with investors, policymakers, and the
press. The announcement generated extensive media coverage with little critical scrutiny.

---

## What the Critique Actually Says

Dr. Legg's response is a formal "Matters Arising" — *Nature*'s structured mechanism for
peer-reviewed challenges to published results. His core conclusion is unambiguous:

> "Microsoft haven't demonstrated the basic physics needed for even a single topological qubit."

He identified three specific, technical failures in Microsoft's methods:

### 1. Basic Python Coding Errors

The software Microsoft used to analyze their experimental data contained coding mistakes that
caused the program to **exclude specific device regions from analysis** — the same regions that
peer reviewers had explicitly requested Microsoft check. This is not a subtle statistical
disagreement; it is a software bug that altered which data was included in the reported results.

### 2. A Flawed Tune-Up Protocol (TGP)

Microsoft's key test for detecting the "topological gap" — the signature energy property that
would prove a Majorana state exists — used a measurement window that could be shifted
arbitrarily. By moving that window, **the same device region could be classified as either
suitable (gapped) or unsuitable (gapless)**. The classification was therefore not driven by
physics but by choices embedded in the procedure. Microsoft presented only the favorable
outcomes.

### 3. Omitted Data That Contradicts the Conclusion

When Microsoft released a fuller dataset after the original paper's publication, the raw
conductance data looked like **random noise** — not the pristine topological gap the paper
required. Legg argues the signals Microsoft attributed to a topological state are more
plausibly explained by **ordinary quantum dots**: conventional electronic effects that are
well-understood and not exotic at all.

His analogy: "Last year Microsoft claimed they had built the equivalent of a precision Swiss
watch. However, when I opened the case to examine the mechanism, I found what looked like a
chaotic jumble of mismatched parts."

---

## Credibility Assessment

**Overall rating: 9 / 10 — Technically specific, verifiable, and historically consistent.**

### Why the Critique Is Credible

- The objections are **concrete and falsifiable**: a coding error either exists or it does not.
  Omitted data either contradicts the conclusion or it does not. These are not interpretive
  disputes.
- The fuller dataset Microsoft released after publication supports Legg's reading — the raw
  data looks like noise.
- Independent expert Sergey Frolov (University of Pittsburgh), one of the leading experimentalists
  in this field, stated the original Microsoft paper "has no scientific value" and likely requires
  retraction.
- The critique passed *Nature*'s peer review process for "Matters Arising" responses — the same
  process that cleared Microsoft's original paper.

### The One Caveat

Legg's critique has not been independently replicated in a fully separate experimental setting —
that is the gold standard. His is an analysis of Microsoft's own data and code, not a parallel
experiment. However, reanalysis of the original data is the appropriate first step, and the
specific errors he identified are testable.

---

## Unrealistic Predictions Rating

**Microsoft's 2029 roadmap: 2 / 10 — Not credible given the current evidence.**

| Microsoft's Claim | What the Critique Shows |
|---|---|
| "Topological qubit demonstrated" | No independent confirmation of the required physics |
| "Fault-tolerant architecture underway" | The foundation (Majorana states) not yet established |
| "Scalable quantum computer by 2029" | Roadmap built on physics that is contested, not proven |
| "Years, not decades" | Identical framing used since approximately 2012 |
| *Nature* publication = validated science | Peer review missed coding errors and data omissions |

---

## The Pattern: A Third Strike

This is not the first time Microsoft has faced this specific type of challenge.

- **2018:** Microsoft retracted a *Nature* paper on Majorana signatures due to data issues.
- **2021:** Microsoft retracted a second *Nature* paper on the same topic, again citing
  technical errors.
- **2026:** A third *Nature* paper on Majoranas now faces a formal published critique alleging
  coding errors, a flawed protocol, and omitted contradictory data.

A single retraction can be an isolated incident. Two retractions from the same journal on the
same topic suggest a systemic problem with how results are validated internally before
publication. A third serious public challenge — even without a formal retraction yet — is a
pattern, not an anomaly.

Microsoft has been pursuing Majorana-based topological qubits since approximately 2010. Sixteen
years of effort with no independently replicated demonstration of the core physics is a
meaningful data point.

---

## Cognitive Biases at Work

This case is a near-perfect illustration of institutional cognitive bias operating at scale.

**Sunk cost fallacy (Microsoft)**

Microsoft has invested an estimated $1 billion or more and sixteen years in this specific
approach. That creates enormous psychological and organizational pressure to see evidence of
progress. Past investment is not a physics argument — but it powerfully shapes what results a
team is motivated to find, report, and defend.

**Confirmation bias (Microsoft)**

The critique shows Microsoft presented data that supported their conclusion while omitting data
that contradicted it. This is almost certainly not deliberate fraud. It reflects the
well-documented tendency of researchers to interpret ambiguous signals as confirming their
hypothesis and to treat contradictory signals as noise or experimental error.

**Motivated reasoning driven by competitive pressure**

IBM, Google, and IonQ are producing results with conventional qubit architectures right now.
Microsoft's topological bet means they have no competitive quantum product while competitors
advance. The 2029 roadmap is not purely a technical document — it is also a competitive
positioning statement to investors and the press. That creates pressure to over-interpret
ambiguous data.

**Appeal to authority**

Publishing in *Nature* signals to the world — journalists, investors, policymakers, other
scientists — that a result has been rigorously vetted. But peer review did not catch the
Python errors or the data omissions. The prestige of the venue became a substitute for
scrutiny in public discourse.

**Optimism bias and timeline anchoring**

"Years, not decades" appears in Microsoft quantum announcements going back to approximately
2012. Each new announcement resets the clock without accounting for previous missed milestones.
Audiences who encounter each announcement in isolation have no way to recognize the pattern.

---

## Relevance to This Course

This case is referenced throughout the course as a live example of several key themes:

**Chapter 3 — The Hype Cycle:** Microsoft's announcements follow the classic pattern: a
technology with genuine theoretical promise attracts investment and ambitious timelines, and
each incremental result is framed as confirmation of the original timeline regardless of what
the physics shows.

**Chapter 7 — Cognitive Bias in Technology Investment:** The sunk cost fallacy, confirmation
bias, and motivated reasoning combine here in an institutional setting. Individual researchers
are not irrational — but institutions under competitive and financial pressure can collectively
behave as if they are.

**Chapter 9 — What Peer Review Does and Does Not Guarantee:** The Microsoft case illustrates
that peer review is a filter, not a guarantee. Three papers on the same topic passed initial
review at *Nature* and were subsequently challenged or retracted. Publication is a starting
point for scientific evaluation, not an endpoint.

**Chapter 12 — The Independent Replication Standard:** Legg's critique is powerful precisely
because it works from Microsoft's own released data. But the definitive test remains
independent replication: another lab, different equipment, same claimed physics — does it
appear? Until that happens, the topological qubit claim cannot be considered established.

---

## Microsoft's Response

Microsoft's Technical Fellow Chetan Nayak stated: *"We stand by our results and our roadmap.
Success is the delivery of a scalable quantum computer."*

This response is notable for what it does not address: the specific coding errors, the
measurement protocol problems, or the omitted data. Affirming confidence in the roadmap is not
a rebuttal to a technical critique.

---

## Summary

Microsoft published a *Nature* paper in February 2025 claiming they had demonstrated the core
physics needed for a topological qubit — a key step toward their promised 2029 quantum
computing roadmap. In June 2026, Dr. Henry Legg published a formal peer-reviewed critique in
the same journal finding basic software errors, a flawed measurement protocol that produced
arbitrary outcomes, and omitted data that looks like noise rather than the claimed quantum
state. Independent experts have called the original paper's scientific value into question.

This follows two prior retractions of Microsoft Majorana papers from *Nature* in 2018 and
2021 — making this the third serious public challenge to the same line of research in eight
years.

Microsoft's 2029 roadmap is built on a foundation of claimed physics that has not survived
independent scrutiny. Until the basic Majorana physics is demonstrated by independent labs
with no financial interest in the outcome, the roadmap timelines should be treated as
aspirational targets, not credible engineering commitments.

For investors, policymakers, and the public: the history of retractions, the pattern of
institutional bias, and the absence of independent replication are not minor caveats. They
are the story.

---

## References

- [Nature critique (Legg, 2026): DOI 10.1038/s41586-026-10567-8](https://www.nature.com/articles/s41586-026-10567-8)
- [University of St Andrews press release on the critique](https://news.st-andrews.ac.uk/archive/critique-published-by-nature-challenges-microsofts-quantum-computing-claims/)
- [Scientific American: "Top quantum computer expert claims Microsoft's 'topological qubit' doesn't hold up"](https://www.scientificamerican.com/article/top-quantum-computer-expert-claims-microsofts-topological-qubit-doesnt-hold-up/)
- [Nature news: "Microsoft upgrades controversial quantum chip — researchers are still sceptical"](https://www.nature.com/articles/d41586-026-01788-y)
- [Slashdot: "Boffin Claims Microsoft's 'Quantum Leap' Is Invalid Due To 'Basic Python Errors'"](https://developers.slashdot.org/story/26/06/24/1644216/boffin-claims-microsofts-quantum-leap-is-invalid-due-to-basic-python-errors)
- [TechXplore: "Critique challenges Microsoft's quantum computing claims"](https://techxplore.com/news/2026-06-microsoft-quantum.html)
- [Prism News: "Microsoft quantum strategy faces new scrutiny over Nature critique"](https://www.prismnews.com/news/microsoft-quantum-strategy-faces-new-scrutiny-over-nature)
