# Quantum Portfolio Explorer

This MicroSim lets you design your own quantum technology investment portfolio
by allocating a hypothetical $100M across five technology categories. As you
adjust the sliders, the expected return, portfolio risk, and Sharpe ratio
update in real time, giving you an intuitive sense of how portfolio
composition affects risk-adjusted returns.

The five categories span the spectrum from near-term commercially viable
technologies (quantum sensing, classical AI hardware) to speculative bets
(quantum computing). The underlying return and risk estimates reflect the
skeptical, evidence-based perspective of this course.

## Portfolio Explorer MicroSim

<iframe src="./main.html" height="602" width="100%" scrolling="no"></iframe>

*[View Quantum Portfolio Explorer MicroSim Fullscreen](./main.html)*

Use the five sliders to allocate percentages across categories. The sliders
are constrained to sum to 100% -- when you move one slider, the others adjust
proportionally. Use the preset buttons to compare your allocation against the
"Rational" portfolio (emphasizing near-term viable technologies) and the
"Current Market" allocation (which overweights quantum computing at 65%).

The comparison bars at the bottom let you see at a glance how your portfolio
stacks up against both benchmarks on expected return, risk, and Sharpe ratio.
Notice how heavily allocating to quantum computing dramatically increases
portfolio risk while reducing expected returns.

## Key Takeaways

- **Diversification matters**: Spreading investment across categories with different risk profiles reduces overall portfolio risk.
- **Quantum computing drag**: The negative expected return (-15%) and extreme risk (85%) of quantum computing investments pull down any portfolio that overweights them.
- **Near-term value**: Quantum sensing (25% expected return, 15% risk) and classical AI hardware (30% expected return, 20% risk) offer far better risk-adjusted returns than quantum computing.
- **Sharpe ratio**: A higher Sharpe ratio means better return per unit of risk. The "Rational" portfolio consistently outperforms the "Current Market" allocation on this metric.
