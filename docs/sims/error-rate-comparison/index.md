---
title: Classical vs. Quantum Error Rate Comparison
description: This MicroSim uses a horizontal bar chart on a logarithmic scale to compare the error rates of classical computing components with current quantum computing hardware. The visualization makes the
image: /sims/error-rate-comparison/error-rate-comparison.png
og:image: /sims/error-rate-comparison/error-rate-comparison.png
---
# Classical vs. Quantum Error Rate Comparison

This MicroSim uses a horizontal bar chart on a logarithmic scale to
compare the error rates of classical computing components with
current quantum computing hardware. The visualization makes the
enormous gap between classical and quantum reliability immediately
apparent — a gap spanning roughly 10 to 14 orders of magnitude.

<iframe src="./main.html" height="550" width="100%" scrolling="no"></iframe>

*[View Error Rate Comparison MicroSim Fullscreen](./main.html)*

## How to Use This Chart

- **Hover** over any bar to see the exact error rate and source citation.
- Use the **Log Scale / Linear Scale** toggle buttons to switch between
  a logarithmic view (which reveals the full range) and a linear view
  (which dramatically illustrates how quantum error rates dominate).
- The **red dashed line** marks the quantum error correction (QEC)
  threshold at $10^{-4}$. Quantum hardware must achieve error rates
  below this line before error correction schemes can even begin to work.

## What to Notice

Classical computing operates at error rates between $10^{-18}$ and
$10^{-14}$ per operation — so reliable that errors are essentially
invisible in normal use. Quantum gates, by contrast, currently fail
at rates between $10^{-4}$ and $10^{-1}$ per operation. This gap is
not a minor engineering shortfall; it represents a fundamental
difference in the physical reliability of the two computing paradigms.

When you switch to linear scale, the classical bars vanish entirely
because their error rates are indistinguishable from zero at quantum
scales. That visual disappearance is itself the argument: classical
computing solved its reliability problem decades ago, while quantum
computing has not yet crossed even the theoretical threshold needed
for error correction to function.
