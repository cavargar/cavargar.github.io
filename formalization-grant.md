---
layout: default
title: "SHS Formalization Grant Proposal"
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

# Formal Verification of Stochastic Hybrid Systems: From Cell Biology to Systems Agriculture

[← Back to Home](/) | [Research](/research) | [Publications](/publications)

**Principal Investigator Award Application — Harmonic Aristotle AI Grants**

**PI:** César A. Vargas García, PhD | Principal Investigator, AGROSAVIA (Colombia)

**Requested Funding:** $100,000 | **Duration:** 24 months

---

## Executive Summary

We propose to advance the formal verification of **Stochastic Hybrid Systems (SHS)** theory in Lean 4, extending our existing formalization to three domains: (1) **complete cell size control theory** including exponential growth, multi-step division, and changing environments, (2) **gene expression dynamics**, and (3) **theoretical systems agriculture** (stochastic crop modeling). This two-year project bridges rigorous mathematical foundations with practical applications for biology and smallholder farmers.

---

## 1. Preliminary Work: Foundations Already Formalized

Our team has completed a production-grade Lean 4 formalization of SHS theory based on Hespanha's foundational framework (2005). The following core results are **fully verified** (2,500+ lines, Lean 4.24.0 with Mathlib):

### 1.1 Stochastic Hybrid System Definition (Formalized)

The complete SHS 6-tuple $(n, Q, m, f, \phi, \lambda)$:
- State dimension $n$, discrete mode set $Q$, transition count $m$
- Continuous drift $f(q,x,t)$, reset maps $\phi_\ell(q,x,t)$, intensity functions $\lambda_\ell(q,x,t)$

### 1.2 Extended Generator & Dynkin's Formula (Verified)

$$(\mathcal{L}\psi)(q,x,t) = \nabla_x \psi \cdot f + \frac{\partial \psi}{\partial t} + \sum_{\ell=1}^{m} \left[\psi(\phi_\ell) - \psi\right] \lambda_\ell$$

**Dynkin's Formula** (Theorem 1): $\mathbb{E}[\psi(\mathbf{z}(t))] = \psi(z_0) + \mathbb{E}\left[\int_{t_0}^t (\mathcal{L}\psi)(\mathbf{z}(s))\, ds\right]$

### 1.3 Cell Size Theory: Mean Dynamics (Verified)

For cells with linear growth $\mu$ and division rate $k$:

$$\frac{dM_1}{dt} = \mu - \frac{k}{2}M_1 \quad \Rightarrow \quad \mathbb{E}[X^*] = \frac{2\mu}{k}$$

### 1.4 Additional Verified Results (Ready for Extension)

| Result | Formula | Status |
|--------|---------|--------|
| Variance | $\text{Var}[X] = \frac{4}{3}(\mu/k)^2$ | Verified |
| CV | $1/\sqrt{3} \approx 0.577$ | Verified |
| Skewness | $6\sqrt{3}/7 \approx 1.485$ | Verified |
| Characteristic function | $C(\xi) = \prod_{j=0}^{\infty} (1-i(\mu/k)2^{-j}\xi)^{-1}$ | Verified |
| Density series | $\rho^*(x) = \sum_{n=0}^{\infty} c_n e^{-(k/\mu)2^n x}$ | Verified |
| Upwind scheme stability | CFL condition verified | Verified |
| MLE for division rate | $\hat{k} = N/T$ maximizes likelihood | Verified |

---

## 2. PI Qualifications: Cell Size Modeling Expertise

This proposal builds on **15+ years** of research in stochastic cell size control:

### Foundational Theory Development

- **Ph.D. Dissertation** (*Stochastic Computational System Biology*, U. Delaware, 2018): Developed the theoretical framework for cell size homeostasis using stochastic hybrid systems, first-passage times, and moment dynamics—the exact mathematics now being formalized.

### Key Publications in Cell Size Control

- **Scientific Reports (2016):** [A mechanistic stochastic framework for regulating bacterial cell division](https://www.nature.com/articles/srep30229) — Established first-passage time models reproducing the "adder principle" and scale-invariant size distributions. This paper's mathematical framework is the foundation of our Lean 4 formalization.

- **Current Biology (2023):** [A cell-based model for size control in *Chlamydomonas reinhardtii*](https://doi.org/10.1016/j.cub.2023.10.023) — Extended stochastic models to **multiple fission** organisms with multi-step division cycles. Analysis of ~1,900 cells validated the Modified Threshold model.

- **arXiv (2025):** [Dynamical Inference of Cell Size Regulation Parameters](https://arxiv.org/abs/2511.22145) — Parameter estimation under **changing growth conditions**, directly relevant to proposed formalization extensions.

### Software Implementation

- **PyEcoLib (2023):** [Python Library for E. coli Size Dynamics](https://pypi.org/project/PyEcoLib/) — Implements stochastic cell size models, demonstrating translation from theory to computational tools.

### Gene Expression & Network Analysis

- **Nature (2017):** [Rare cell variability and drug-induced reprogramming](https://www.nature.com/articles/nature22794) — Applied φ-mixing coefficient to single-cell data, discovering coordinated gene regulatory networks in cancer drug resistance.

### Agricultural Applications (AGROSAVIA)

- Leading computational research at Colombia's agricultural institute
- Remote sensing, hyperspectral imaging, and machine learning for crop monitoring
- Direct access to smallholder farmer applications

---

## 3. Proposed Formalization Extensions

### 3.1 Cell Size Theory: Complete Formalization (Year 1)

Building on our verified linear model, we will formalize:

**A. Exponential Growth Dynamics**

Most cells grow exponentially ($\dot{x} = \mu x$), not linearly. We will formalize:
- Generator for exponential growth: $(\mathcal{L}\psi) = \mu x \frac{\partial \psi}{\partial x} + k[\psi(x/2) - \psi(x)]$
- Steady-state moments under exponential growth
- Log-normal approximations and their formal bounds

**B. Multi-Step Division Process**

Cells often require multiple molecular steps before division (e.g., DNA replication checkpoints). We will formalize:
- SHS with $Q = \{1, 2, \ldots, N\}$ discrete stages
- Erlang-distributed division times from multi-step transitions
- Reduced CV from staging: $CV_\tau \propto 1/\sqrt{N}$
- Connection to our Chlamydomonas multiple fission work

**C. Changing Growth Conditions**

Real cells experience nutrient shifts. We will formalize:
- Time-varying growth rate $\mu(t)$ and division rate $k(t)$
- Transient dynamics and relaxation to new steady states
- Parameter identifiability under environmental perturbations
- Connection to our 2025 arXiv dynamical inference work

**D. Multi-Dimensional Correlations**

Using our 4D cell tracking SHS $(x, \tau, x_b, x_d)$:
- Birth-division size correlations
- Added size distributions (adder, sizer, timer mechanisms)
- Mother-daughter size inheritance

### 3.2 Gene Expression Dynamics (Year 1-2)

- Transcriptional bursting as compound Poisson SHS
- Intrinsic/extrinsic noise decomposition (Elowitz framework)
- Regulatory motifs: negative autoregulation, feedforward loops

### 3.3 Theoretical Systems Agriculture (Year 2)

Establish **formally verified crop modeling** extending DSSAT/APSIM:

- Crop growth as SHS with phenological stages as discrete modes
- Stochastic weather effects on growth rates
- Yield distribution theory under climate uncertainty
- **Novel:** First formal verification of agricultural models

---

## 4. Budget Justification ($100,000 / 24 months)

| Category | Amount | Purpose |
|----------|--------|---------|
| Graduate Students | $50,000 | Two MS/PhD students for formalization (24 months, 50% FTE) |
| Professional Developer | $30,000 | Lean 4 expert for library architecture (12 months, 50% FTE) |
| Computational Resources | $10,000 | Cloud computing, CI/CD infrastructure |
| Software & Dissemination | $10,000 | Smallholder tools, open-source release, workshops |

---

## 5. Deliverables & Timeline

| Period | Milestone |
|--------|-----------|
| **Q1-Q2** | Exponential growth formalization; multi-step division SHS |
| **Q3-Q4** | Changing conditions dynamics; 4D correlation derivations |
| **Q5-Q6** | Gene expression bursting; noise decomposition proofs |
| **Q7-Q8** | Crop growth SHS; yield distribution theory; library release |

**Final Outputs:**
- Complete Lean 4 library for cell size control (all growth modes)
- Gene expression dynamics module
- Theoretical systems agriculture foundation
- Open-source software for smallholder yield risk assessment
- Tutorial documentation and educational materials

---

## 6. Why Aristotle AI?

Our 2,500+ lines of verified Lean 4 demonstrate feasibility. Aristotle will accelerate:
1. **Proof search** in measure-theoretic arguments
2. **Mathlib integration** for probability theory
3. **Iterative refinement** of complex multi-step proofs

Our unique position—deep theoretical expertise in cell size control plus agricultural applications—ensures impact beyond pure mathematics.

---

**Contact:** cavargas@agrosavia.co | [ORCID](http://orcid.org/0000-0002-4286-8882) | [Google Scholar](https://scholar.google.com/citations?user=csX8l60AAAAJ&hl=en)

*Supporting Harmonic's mission to democratize rigorous mathematical reasoning while addressing challenges in food security and human health.*

---

[← Back to Home](/) | [Research](/research) | [Publications](/publications)

