# TCO Comparison Dashboard

This MicroSim presents a side-by-side comparison of the Total Cost of
Ownership (TCO) for a classical high-performance computing cluster versus
a quantum computer. Stacked bar charts break down costs into categories
such as hardware, electricity, staff, maintenance, cryogenics, and
error correction overhead, making each cost component visible at a glance.

Two sliders let you adjust the problem size (small, medium, or large) and
the time horizon (1 to 10 years) to see how costs scale under different
assumptions. The simulation updates in real time and displays a cost
ratio showing how many times more expensive the quantum system is compared
to the classical alternative.

## TCO Comparison Dashboard MicroSim

<iframe src="./main.html" height="552" width="100%" scrolling="no"></iframe>

*[View TCO Comparison Dashboard MicroSim Fullscreen](./main.html)*

Hover over any bar segment to see the exact cost for that category. Notice
that even under the most favorable assumptions, the quantum computer's
annual operating costs -- driven by cryogenics, specialized staff, and
error correction overhead -- cause total costs to diverge rapidly from
the classical system over time.

## Key Takeaways

- **Hardware alone does not tell the full story.** Quantum hardware costs roughly 7.5x more than a classical HPC cluster, but the gap widens dramatically when you factor in annual operating expenses.
- **Error correction overhead is a hidden cost multiplier.** Wasted capacity from error correction adds $2M per year at the medium problem size, a cost category that has no classical equivalent.
- **Operating costs dominate over time.** At a 5-year horizon with medium problem size, the quantum system costs roughly 6x more than classical. Extending the horizon makes this ratio worse, not better.
- **Cryogenics and specialized staff are non-negotiable expenses.** Unlike classical electricity costs, these cannot be reduced through commodity hardware improvements.
