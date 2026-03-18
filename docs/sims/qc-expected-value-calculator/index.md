---
title: QC Investment Expected Value Calculator
description: This MicroSim lets you explore the expected value framework applied to quantum computing investments. By adjusting the probability of success, potential payoff, investment cost, and time horizon, you
image: /sims/qc-expected-value-calculator/qc-expected-value-calculator.png
og:image: /sims/qc-expected-value-calculator/qc-expected-value-calculator.png
---
# QC Investment Expected Value Calculator

This MicroSim lets you explore the expected value framework applied to
quantum computing investments. By adjusting the probability of success,
potential payoff, investment cost, and time horizon, you can see how
sensitive the expected value calculation is to each parameter.

The core formula is straightforward: $E[V] = P(\text{success}) \times \text{Payoff} - \text{Cost}$.
What makes it powerful is seeing how small changes in the estimated
probability of success can swing the expected value from deeply negative
to marginally positive.

## Expected Value Calculator MicroSim

<iframe src="./main.html" height="582" width="100%" scrolling="no"></iframe>

*[View QC Investment Expected Value Calculator MicroSim Fullscreen](./main.html)*

Use the sliders to adjust each parameter and observe how the expected
value changes in real time. The breakeven line shows the minimum
probability of success needed for the investment to have a non-negative
expected value. Compare the quantum investment scenario against the
classical R&D alternative shown at the bottom of the display.

## Key Takeaways

- **Probability dominates**: When the probability of success is low (as with quantum computing), even enormous potential payoffs produce negative expected values.
- **Breakeven probability**: The formula $P_{\text{break}} = \frac{\text{Cost}}{\text{Payoff}}$ reveals how high the success probability must be to justify the investment.
- **Classical alternative**: A classical R&D investment with higher probability of success and modest payoff often has a better expected value than a quantum moonshot.
- **Time horizon matters**: Longer time horizons increase uncertainty, which typically reduces realistic probability estimates further.
