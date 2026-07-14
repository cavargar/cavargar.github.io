---
layout: default
title: "SHSLib: A Lean 4 Formalization of Stochastic Hybrid Systems"
---

<script type="text/x-mathjax-config">
MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    displayMath: [['$$','$$'], ['\\[','\\]']],
    processEscapes: true
  }
});
</script>
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-AMS_HTML">
</script>

# SHSLib: A Lean 4 Formalization of Stochastic Hybrid Systems

[← Back to Research](/research)

## Project

**SHSLib** is a formally verified [Lean 4](https://lean-lang.org/) library formalizing **Stochastic Hybrid Systems (SHS)** theory — mathematical models describing discrete-mode, continuous-state processes that combine deterministic differential flow with random jumps.

- 💻 **Repository**: [github.com/cavargar/SHSLib](https://github.com/cavargar/SHSLib)
- 🔧 **Language**: Lean 4 with Mathlib4
- ⚖️ **License**: MIT
- 📐 **Scale**: 2,500+ lines of verified theory

---

## What Are Stochastic Hybrid Systems

Many real systems — a cell that grows continuously but divides in sudden jumps, a gene switching between "on" and "off" transcriptional states — can't be described by a single continuous differential equation or a single discrete-state Markov chain. They need both at once.

SHSLib formalizes the foundational theory of these systems as laid out by:
- **J. P. Hespanha**, "A model for stochastic hybrid systems with application to communication networks," *Nonlinear Analysis* (2005)
- **M. H. A. Davis**, *Markov Models and Optimization* (Chapman & Hall, 1993) — Piecewise-Deterministic Markov Processes (PDMPs)

An SHS is defined by a 6-tuple $(n, Q, m, f, \phi, \lambda)$: state dimension $n$, discrete mode set $Q$, transition count $m$, continuous drift $f(q,x,t)$, reset maps $\phi_\ell(q,x,t)$, and jump intensities $\lambda_\ell(q,x,t)$.

---

## The Extended Generator

At the core of the library is the **extended generator** $\mathcal{L}$ — an operator capturing how a system's expected state evolves through both deterministic drift and stochastic jumps:

$$(\mathcal{L}\psi)(q,x,t) = \nabla_x \psi \cdot f + \frac{\partial \psi}{\partial t} + \sum_{\ell=1}^{m} \left[\psi(\phi_\ell) - \psi\right] \lambda_\ell$$

From this, SHSLib formally proves **Dynkin's Formula**:

$$\mathbb{E}[\psi(\mathbf{z}(t))] = \psi(z_0) + \mathbb{E}\left[\int_{t_0}^t (\mathcal{L}\psi)(\mathbf{z}(s))\, ds\right]$$

which connects the generator to the expected evolution of any observable of the system — both a differential and an integral formulation are verified.

---

## Library Structure

- `SHSLib.Core.Basic` — SHS structure and flow definitions
- `SHSLib.Core.Generator` — Extended generator, moment evolution, Fokker–Planck equation
- `SHSLib.Foundations.DavisCh1` — Measure theory and probability foundations
- `SHSLib.Foundations.DavisCh2` — PDMP (Piecewise-Deterministic Markov Process) theory

---

## Verified Results

As a worked application, the library formalizes cell size regulation for cells with linear growth rate $\mu$ and division rate $k$:

$$\frac{dM_1}{dt} = \mu - \frac{k}{2}M_1 \quad \Rightarrow \quad \mathbb{E}[X^*] = \frac{2\mu}{k}$$

| Result | Formula | Status |
|--------|---------|--------|
| Variance | $\text{Var}[X] = \frac{4}{3}(\mu/k)^2$ | Verified |
| CV | $1/\sqrt{3} \approx 0.577$ | Verified |
| Skewness | $6\sqrt{3}/7 \approx 1.485$ | Verified |
| Characteristic function | $C(\xi) = \prod_{j=0}^{\infty} (1-i(\mu/k)2^{-j}\xi)^{-1}$ | Verified |
| Density series | $\rho^*(x) = \sum_{n=0}^{\infty} c_n e^{-(k/\mu)2^n x}$ | Verified |
| Upwind scheme stability | CFL condition | Verified |
| MLE for division rate | $\hat{k} = N/T$ maximizes likelihood | Verified |

---

## Installation

```
lake build
```

Requires Lean 4 and Mathlib (version pinned in `lakefile.toml`).

---

## Applications

SHSLib's cell size theory formalizes the mathematical framework behind our own experimental and computational work on single-cell size homeostasis:

- **Scientific Reports (2016):** [A mechanistic stochastic framework for regulating bacterial cell division](https://www.nature.com/articles/srep30229)
- **Current Biology (2023):** [A cell-based model for size control in *Chlamydomonas reinhardtii*](https://doi.org/10.1016/j.cub.2023.10.023)

It also forms the preliminary work for a proposed two-year extension into gene expression dynamics and theoretical systems agriculture — see the [SHS Formalization Grant Proposal](/formalization-grant).

---

## Related Work

- M. H. A. Davis, *Markov Models and Optimization*, Chapman & Hall (1993)
- J. P. Hespanha, "A model for stochastic hybrid systems with application to communication networks," *Nonlinear Analysis* (2005)

---

[← Back to Research](/research) | [View on GitHub](https://github.com/cavargar/SHSLib) | [Extension Proposal](/formalization-grant)
