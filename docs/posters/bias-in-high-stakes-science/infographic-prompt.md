# Infographic Image Generation Prompt
## "When Brilliant People Believe Wrong Things: Cognitive Bias in High-Stakes Science"

**For use with:** DALL·E 3, Midjourney, Adobe Firefly, Ideogram, or equivalent text-to-image model  
**Verified claims:** See `02-verification-report.md`  
**Layout spec:** See `03-layout-spec.yaml`

---

## CRITICAL RENDERING INSTRUCTION

Render the following exact text verbatim. Do not substitute any numbers, paraphrase any
labels, or invent additional statistics, rows, or citations. All percentages, author names,
years, and institution names must appear exactly as written below. If you cannot render any
text element legibly at the requested size, omit it rather than approximating it.

---

## Full Image Generation Prompt

Create a portrait-format scientific infographic poster (2400×3200 pixels, 300 DPI) with a
deep navy/charcoal background (#0D1117). Use amber (#E8C547) as the primary accent color,
cool blue (#4FC3F7) for data callouts, and red (#EF5350) for warning/strike markers.
All body text in off-white (#F0F0F0). Section panel backgrounds slightly lighter (#1A2332).

---

### ZONE 1 — HEADER (top 12% of poster, full width)

Large bold title in amber: **"When Brilliant People Believe Wrong Things"**

Below it, in white: **"Cognitive Bias in High-Stakes Science"**

Below that, in small italic gray: *"A case study from quantum computing research, 2018–2026"*

---

### ZONE 2 — CENTRAL ILLUSTRATION (next 18%, centered)

Illustrate a split-brain silhouette viewed from above, dividing left and right hemispheres.

**Left hemisphere (rational):** Clean orthogonal grid of data points. A perfectly balanced
scale with equal weights. Clear, organized lines. Cool blue lighting.

**Right hemisphere (emotionally biased):** The same data points, but seen through a convex
distorting lens — some enlarged, some invisible. Mismatched gears half-assembled. Amber
glow radiating from the center suggesting heat and pressure.

No text within the illustration itself.

Below the illustration, centered in small italic gray:
*"The brain under competitive pressure processes the same evidence differently"*

---

### ZONE 3 — BIAS GRID (next 38%, 2×2 grid of equal panels, slight gap between panels)

Each panel has a dark section background (#1A2332), rounded corners, and a small icon in
the top-left corner. Panel header in bold amber. Case anchor line in cool blue.
Biology note in italic gray at the bottom of each panel.

---

**Panel 1 — Top Left: SUNK COST TRAP**

Icon: Small illustration of an hourglass sinking into a pile of coins.

Header in bold amber: **THE SUNK COST TRAP**

Body text in white:
"Once large investments are made, abandoning them feels like accepting a loss —
and losses feel ~2× more painful than equivalent gains feel rewarding."

Citation in italic gray: *(Kahneman & Tversky, Econometrica, 1979)*

Case anchor in blue: **Case: ~16 yrs · est. $1B+ in topological qubits**

Biology note in italic gray:
*"Loss aversion is encoded in the amygdala — it fires harder for potential losses
than for equivalent gains"*

---

**Panel 2 — Top Right: CONFIRMATION BIAS**

Icon: Small illustration of a funnel/filter with only matching shapes passing through;
non-matching shapes blocked.

Header in bold amber: **CONFIRMATION BIAS**

Body text in white:
"Seeking or interpreting evidence in ways partial to existing beliefs.
Contradictory data is not suppressed deliberately — it is perceived as noise."

Citation in italic gray: *(Nickerson, Review of General Psychology, 1998)*

Case anchor in blue: **Case: Favorable data presented; contradictory data omitted**

Biology note in italic gray:
*"The brain's pattern-matching systems prioritize confirming signals —
a feature, not a bug, until the stakes are high"*

---

**Panel 3 — Bottom Left: MOTIVATED REASONING**

Icon: Small illustration of a trophy or competitor's medal beside a line graph that is
being subtly bent toward an upward trend.

Header in bold amber: **MOTIVATED REASONING**

Body text in white:
"Competitive goals shape which results researchers pursue and how they interpret
ambiguous findings — while the reasoner maintains an illusion of objectivity."

Citation in italic gray: *(Kunda, Psychological Bulletin, 1990)*

Case anchor in blue: **Case: IBM & Google advancing → intense pressure to show progress**

Biology note in italic gray:
*"Dopamine reward pathways reinforce finding what we expect to find —
making motivated perception feel like honest discovery"*

---

**Panel 4 — Bottom Right: PRESTIGE AS PROOF**

Icon: Small illustration of a scientific journal cover with a gold star badge; a
magnifying glass hovering over it but tilted away, not actually examining the content.

Header in bold amber: **PRESTIGE AS PROOF**

Body text in white:
"Institutions use top-journal publication as a signal that results are validated.
But peer review is a filter, not a guarantee — and >80% of published papers
report positive results."

Citation in italic gray: *(Fanelli, PLOS ONE, 2010)*

Case anchor in blue: **Case: Nature publication cited as proof; coding errors not caught**

Biology note in italic gray:
*"Authority signals bypass critical evaluation —
a cognitive shortcut that works until the authority is wrong"*

---

### ZONE 4 — TIMELINE (next 14%, full width, horizontal)

Section header centered in bold amber:
**THREE STRIKES: THE MICROSOFT MAJORANA PATTERN**

Draw a horizontal dashed amber line spanning the full width with three circular nodes:

**Node 1 — Left**
Year in bold red: **2018**
Label in bold red: **RETRACTED**
Detail in white below: "Majorana signatures paper withdrawn from Nature"

**Node 2 — Center**
Year in bold red: **2021**
Label in bold red: **RETRACTED**
Detail in white below: "Quantized Majorana conductance paper retracted"

**Node 3 — Right**
Year in bold amber: **2026**
Label in bold amber: **CHALLENGED**
Detail in white below: "Legg Nature critique: coding errors, flawed protocol, omitted data"

---

### ZONE 5 — FOOTER BANNER (bottom 10%, full-width amber background #E8C547)

On the amber background, in bold dark charcoal text (#0D1117), centered:

**"Prestigious publication is a starting point for scientific evaluation —
not an endpoint. The same biases that shape individual decisions
operate at institutional scale."**

Below that in small gray text:
"Sources: Kahneman & Tversky (1979) · Arkes & Blumer (1985) · Nickerson (1998) ·
Kunda (1990) · Fanelli (2010) · Legg, Nature (2026) DOI: 10.1038/s41586-026-10567-8"

---

### ZONE 6 — COURSE CREDIT (bottom-right corner, very small)

Small gray text:
"A Skeptic's Guide to Quantum Computing · dmccreary.github.io/quantum-computing"

---

## Style Notes for the Image Model

- Overall aesthetic: dark-mode science poster, similar to Nature or Science special issue covers
- Typography: sans-serif throughout (Helvetica Neue or Inter style)
- Panels: equal-size quadrants with 16px gap between them, 8px rounded corners
- No decorative stock photography — all visuals are simple, clean iconographic illustrations
- Brain illustration is a stylized top-down silhouette (not anatomically detailed)
- Icons are flat/minimal — no gradients, no 3D effects, no shadows
- Color discipline: amber for emphasis and headers, blue for case anchors, red only for the
  two retraction nodes, gray for citations and biology notes
- The poster should feel authoritative and analytical, not alarmist or sensationalized

---

## Claim Provenance Index

Every numbered claim in the poster traces to a specific source:

| Text in poster | Source | Verified? |
|---|---|---|
| "~2× more painful" | Kahneman & Tversky, Econometrica 1979 | VERIFIED |
| "~16 yrs · est. $1B+" | Press reports; "est." prefix required | DIRECTIONAL |
| "partial to existing beliefs" | Nickerson, Rev. Gen. Psychology 1998 | VERIFIED |
| ">80% positive results" | Fanelli, PLOS ONE 2010 | VERIFIED |
| "illusion of objectivity" | Kunda, Psychological Bulletin 1990 | VERIFIED |
| "2018 · 2021 · 2026" | Nature retractions + Legg 2026 critique | VERIFIED |
| Biology notes (amygdala, dopamine) | Established neuroscience; qualitative framing | QUALITATIVE |

**No fabricated statistics appear in this poster.**
