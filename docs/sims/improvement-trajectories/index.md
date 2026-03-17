# Classical vs. Quantum Improvement Trajectories

This MicroSim uses a dual-axis logarithmic line chart to compare
the historical improvement rates of classical and quantum computing
from 2015 to 2025. The visualization highlights a critical asymmetry:
classical computing has delivered steady, compounding performance
gains (approximately 100x per decade in FLOPS per dollar), while
quantum computing's headline qubit counts have grown without a
corresponding improvement in practical computational capability.

<iframe src="./main.html" height="550" width="100%" scrolling="no"></iframe>

*[View Improvement Trajectories MicroSim Fullscreen](./main.html)*

## How to Use This Chart

- **Hover** over any data point to see the specific hardware,
  benchmark value, and source context.
- Use the **toggle buttons** below the chart to show or hide
  individual data series. Try viewing just "Quantum Useful Ops"
  alongside the "Advantage Threshold" to see how far quantum
  hardware remains from commercially relevant capability.
- The **left axis** (green) tracks classical GPU performance in
  FLOPS per dollar. The **right axis** (orange) tracks quantum
  metrics: useful operations (qubit count times gate fidelity)
  or raw qubit count.

## What to Notice

The classical trajectory shows a smooth, predictable exponential —
the kind of curve that enables long-term engineering planning and
reliable return on investment. The quantum trajectory, while
impressive in raw qubit count growth, remains roughly six orders
of magnitude below the threshold needed for commercially relevant
quantum advantage.

The dashed gray line at $10^6$ represents a rough minimum for
useful error-corrected quantum computation. Even at the current
rate of improvement, quantum hardware would need decades to close
this gap — and that assumes the improvement rate does not plateau
as noise, crosstalk, and engineering constraints intensify at scale.

Toggle on the "Raw Qubit Count" series to see that qubit count
alone paints a misleadingly optimistic picture. When you factor
in gate fidelity (the "Quantum Useful Ops" line), the effective
capability is barely different from raw count — because error rates
have improved only marginally. Quantity without quality does not
produce computational advantage.
