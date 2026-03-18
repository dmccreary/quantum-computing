---
title: VC Portfolio Simulator: QC vs. Classical
description: This MicroSim runs 1,000 Monte Carlo trials to compare the expected returns of a venture capital portfolio invested in quantum computing startups versus classical technology startups. Each trial
image: /sims/vc-portfolio-simulator/vc-portfolio-simulator.png
og:image: /sims/vc-portfolio-simulator/vc-portfolio-simulator.png
---
# VC Portfolio Simulator: QC vs. Classical

This MicroSim runs 1,000 Monte Carlo trials to compare the expected
returns of a venture capital portfolio invested in quantum computing
startups versus classical technology startups. Each trial simulates
a full portfolio where individual companies either fail completely
(0x return) or succeed at their respective multiples.

Quantum computing investments carry a much lower probability of
success (default 5%) but offer a higher payoff when they do succeed
(50x). Classical tech startups have a higher success rate (20%) with
a more modest winner multiple (10x). The simulation reveals how these
differences play out across hundreds of portfolio outcomes.

## VC Portfolio Simulator MicroSim

<iframe src="./main.html" height="552" width="100%" scrolling="no"></iframe>

*[View VC Portfolio Simulator MicroSim Fullscreen](./main.html)*

Adjust the number of investments, the capital per company, and the
probability that any single QC company succeeds, then click
"Run Simulation" to generate the distribution. The overlapping
histograms show how QC portfolios tend to cluster near zero (total
loss) with occasional large wins, while classical portfolios produce
more consistent moderate returns. The summary statistics panel
compares expected value, median outcome, and the probability of
achieving positive or 10x returns for each strategy.

## Key Observations

- **Median vs. mean divergence**: QC portfolios often have a reasonable expected value but a median near zero, meaning most portfolios lose money even when the average looks acceptable.
- **Variance matters**: Two portfolios with identical expected values can have wildly different risk profiles. The histogram makes this visible.
- **Portfolio size effect**: Increasing the number of investments smooths out QC returns but cannot eliminate the fundamental asymmetry between a 5% and 20% success rate.
- **The VC math problem**: At default settings, a classical portfolio's expected value (2.0x) matches QC's (2.5x) more closely than the hype suggests, while carrying far less downside risk.
