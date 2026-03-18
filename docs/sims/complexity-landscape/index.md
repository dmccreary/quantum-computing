---
title: Computational Complexity Landscape
description: This MicroSim presents an Euler diagram showing the containment and overlap relationships between major computational complexity classes: P, BQP, NP, and PSPACE. Specific problems are positioned
image: /sims/complexity-landscape/complexity-landscape.png
og:image: /sims/complexity-landscape/complexity-landscape.png
---
# Computational Complexity Landscape

This MicroSim presents an Euler diagram showing the containment and
overlap relationships between major computational complexity classes:
P, BQP, NP, and PSPACE. Specific problems are positioned within their
correct complexity class, making it easy to see where quantum computing
offers theoretical speedups and where it does not.

The "Quantum Advantage Zone" — the region inside BQP but outside P —
highlights the narrow slice of problems where quantum algorithms are
believed to outperform classical ones. Notice how small this zone is
relative to the full landscape of computational problems.

## Complexity Landscape MicroSim

<iframe src="./main.html" height="502" width="100%" scrolling="no"></iframe>

[View Complexity Landscape MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

Hover over any complexity class region or problem dot to see definitions,
example algorithms, and the relationship between classical and quantum
approaches. The key insight: most commercially relevant problems live
in P, where classical computers already excel.

## Term Dictionary

<style>
.cc-pspace { color: #8C3CBE; font-weight: bold; }
.cc-np     { color: #E68200; font-weight: bold; }
.cc-bqp    { color: #3264C8; font-weight: bold; }
.cc-p      { color: #2E7D32; font-weight: bold; }
.badge-class   { background: #eeecf4; border: 1px solid #aaa; border-radius: 3px; padding: 1px 6px; font-size: 0.82em; }
.badge-problem { background: #f5f5f5; border: 1px solid #ccc; border-radius: 3px; padding: 1px 6px; font-size: 0.82em; color: #444; }
</style>

| Term | Type | Contained In | Description |
|------|------|-------------|-------------|
| <span class="cc-pspace">PSPACE</span> | <span class="badge-class">Class</span> | *(outermost)* | All problems solvable using a polynomial amount of memory, regardless of time. Contains both NP and BQP. The canonical complete problem is Quantified Boolean Formula (QBF). |
| <span class="cc-np">NP</span> | <span class="badge-class">Class</span> | <span class="cc-pspace">PSPACE</span> | Problems whose solutions can be *verified* in polynomial time by a classical computer. Includes P as a subset. Whether P = NP is the most famous open problem in computer science. Quantum computers are not believed to solve NP-complete problems efficiently. |
| <span class="cc-bqp">BQP</span> | <span class="badge-class">Class</span> | <span class="cc-pspace">PSPACE</span> | Bounded-error Quantum Polynomial time. All problems a quantum computer can solve in polynomial time with error probability ≤ 1/3. Contains P; overlaps with NP but is not believed to contain NP-complete problems. This is the quantum analogue of P. |
| <span class="cc-p">P</span> | <span class="badge-class">Class</span> | <span class="cc-np">NP</span> ∩ <span class="cc-bqp">BQP</span> | Polynomial time on a classical computer. The class of tractable problems. Contained in both NP and BQP. Most commercially deployed algorithms operate here. Quantum speedups within P are at most polynomial. |
| <span class="cc-p">Sorting</span> | <span class="badge-problem">Problem</span> | <span class="cc-p">P</span> | Ordering a list of $n$ items. Best classical algorithms run in $O(n \log n)$ (Merge sort, Timsort). No significant quantum speedup exists — the classical lower bound is already tight. |
| <span class="cc-p">Shortest Path</span> | <span class="badge-problem">Problem</span> | <span class="cc-p">P</span> | Finding the minimum-cost path between two nodes in a graph. Solved in $O(V + E \log V)$ by Dijkstra's algorithm. No practical quantum speedup; classical solutions scale well for real networks. |
| <span class="cc-p">Linear Programming</span> | <span class="badge-problem">Problem</span> | <span class="cc-p">P</span> | Optimizing a linear objective subject to linear constraints. Solved in polynomial time by interior-point methods. A potential quantum speedup (quadratic) has been proposed but is unproven at practical scale and classical solvers are already fast. |
| <span class="cc-bqp">Integer Factoring</span> | <span class="badge-problem">Problem</span> | <span class="cc-bqp">BQP</span> \ <span class="cc-p">P</span> | Given an integer $N$, find its prime factors. Classical best: sub-exponential (General Number Field Sieve). Quantum: polynomial via Shor's algorithm. The theoretical basis for breaking RSA encryption — but the largest number factored on quantum hardware remains trivially small (21). |
| <span class="cc-bqp">Discrete Logarithm</span> | <span class="badge-problem">Problem</span> | <span class="cc-bqp">BQP</span> \ <span class="cc-p">P</span> | Given $g^x \equiv h \pmod{p}$, find $x$. Underlies elliptic-curve and Diffie-Hellman cryptography. Classical: sub-exponential (index calculus). Quantum: polynomial via Shor's algorithm. Not demonstrated at cryptographically relevant scale. |
| <span class="cc-bqp">Quantum Simulation</span> | <span class="badge-problem">Problem</span> | <span class="cc-bqp">BQP</span> \ <span class="cc-p">P</span> | Simulating the time evolution of a quantum system (molecules, materials). Classical cost scales exponentially with system size. Quantum hardware is a natural fit, potentially providing exponential speedup. Currently limited to small molecules; no commercial application demonstrated yet. |
| <span class="cc-np">Traveling Salesman</span> | <span class="badge-problem">Problem</span> | <span class="cc-np">NP</span>-complete | Given $n$ cities and pairwise distances, find the shortest tour visiting all cities exactly once. NP-complete; classical algorithms are exponential in the worst case. Grover's algorithm provides only a quadratic speedup — insufficient to make large instances tractable. |
| <span class="cc-np">SAT</span> | <span class="badge-problem">Problem</span> | <span class="cc-np">NP</span>-complete | Boolean Satisfiability: given a propositional formula, determine whether a variable assignment exists that makes it true. The archetypal NP-complete problem (Cook–Levin theorem). Quantum computers offer only a quadratic Grover speedup, not an exponential one. |
| <span class="cc-np">Graph Coloring</span> | <span class="badge-problem">Problem</span> | <span class="cc-np">NP</span>-complete | Assign colors to graph vertices so no two adjacent vertices share a color, using at most $k$ colors. NP-complete for $k \geq 3$. No known efficient quantum algorithm; classical backtracking heuristics dominate in practice. |
| <span class="cc-pspace">QBF</span> | <span class="badge-problem">Problem</span> | <span class="cc-pspace">PSPACE</span>-complete | Quantified Boolean Formula: a Boolean formula with both existential ($\exists$) and universal ($\forall$) quantifiers over variables. PSPACE-complete — strictly harder than NP under standard assumptions. No known quantum speedup; lies beyond both BQP and NP. |
| <span class="cc-pspace">Generalized Chess</span> | <span class="badge-problem">Problem</span> | <span class="cc-pspace">PSPACE</span>-hard | Determining the winner of a chess-like game on an $n \times n$ board with optimal play. PSPACE-hard; requires exponential resources in both time and the ability to reason over all possible futures. No quantum algorithm offers meaningful speedup for this class of adversarial search problems. |
