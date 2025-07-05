# Computational Discovery of Cancer Drug Resistance Networks

[← Back to Research](/research)

## Publication
### 🧬 💊 Rare cell variability and drug-induced reprogramming as a mode of cancer drug resistance
**Nature** (2017) | [Read Paper](https://www.nature.com/articles/nature22794) | [Press Coverage](https://www.udel.edu/udaily/2017/june/nature-random-variations-cancer-drug-resistance/) | [Network Analysis](https://www.nature.com/articles/nature22794/figures/11) | [Mathematical Methods](https://static-content.springer.com/esm/art%3A10.1038%2Fnature22794/MediaObjects/41586_2017_BFnature22794_MOESM1_ESM.pdf#page=1)

---

## The Challenge

Cancer patients often initially respond well to targeted drugs, but tumors almost inevitably develop resistance, leading to treatment failure. Understanding how this resistance emerges is crucial for developing better therapies. We discovered that rare cancer cells can coordinately express multiple resistance genes, but the key question was: **which genes are the controllers and which are just followers?**

## Our Computational Innovation: The φ-Mixing Coefficient

### What Makes It Special

Traditional methods for analyzing gene networks have critical limitations:
- **Correlation**: Shows genes changing together but not causation
- **Bayesian Networks**: Assume no feedback loops (unrealistic in biology)
- **Mutual Information**: Provides no directional information

The φ-mixing coefficient overcomes all these limitations.

### Intuitive Explanation

Imagine you're studying a company to understand decision-making:

**Correlation approach**: "The CEO, managers, and employees all arrive at 9 AM" → Everyone seems equally important

**φ-coefficient approach**: "When the CEO decides to start at 8 AM, 90% of employees shift their schedule. When employees come early, only 5% of the time does the CEO change schedule" → Clear hierarchy revealed!

### Mathematical Insight

```
φ(Gene B | Gene A) = Maximum over all states of:
|P(Gene B = ON | Gene A state) - P(Gene B = ON)|
```

This measures how much knowing Gene A's state changes our prediction of Gene B.

### Key Properties

1. **Asymmetric**: φ(A→B) ≠ φ(B→A), revealing direction of influence
2. **Range [0,1]**: 0 = no influence, 1 = complete control
3. **Conditional Independence**: Can detect and remove indirect effects

---

## Our Implementation

I developed **binPhix**, a MATLAB implementation of the φ-mixing algorithm specifically optimized for binary single-cell RNA data:

```matlab
% Core algorithm steps
1. Start with all possible connections (n genes → n(n-1) edges)
2. Compute φ coefficient for each directed edge
3. Prune indirect connections using conditional independence
4. Result: True regulatory network
```

### Technical Innovations
- Efficient computation for binary gene expression states
- Handles ~10,000 single cells × 19 genes
- Identifies feedback loops and complex regulatory patterns
- Robust to measurement noise

---

## Key Discoveries

### From 342 Possible Connections to 68 True Influences

<div style="background-color: #f0f0f0; padding: 15px; border-radius: 5px; margin: 20px 0;">
<strong>80% of apparent gene correlations were indirect effects!</strong>
</div>

### The Master Regulators

Our analysis revealed just **4 key upstream genes** controlling the resistance program:

1. **NRG1** - Neuregulin 1
   - Directly controls: VEGFC, AXL, JUN, WNT5A, LOXL2
   - Creates multiple feedforward loops
   
2. **RUNX2** - Runt-related transcription factor 2
   - Orchestrates transcriptional programs
   - No incoming regulatory edges
   
3. **EGFR** - Epidermal growth factor receptor
   - Weak but significant control over WNT5A, JUN
   
4. **PDGFRB** - Platelet-derived growth factor receptor β
   - Multiple weak outgoing edges

### Biological Impact

This discovery suggests that targeting these 4 master regulators could prevent the emergence of drug resistance, rather than trying to target all 19 resistance markers individually.

---

## Why This Matters

### For Cancer Treatment
- Identifies the root controllers of resistance
- Suggests more effective therapeutic targets
- Explains why single-target therapies fail

### For Computational Biology
- New method for causal network inference
- Handles complex biological feedback loops
- Scalable to single-cell data

### For Future Research
- Applicable to other diseases and biological systems
- Framework for understanding cellular decision-making
- Bridge between correlation and causation

---

## Visual Summary

```
Traditional View (Correlation):
All 19 resistance genes seem equally important
🔴↔️🔴↔️🔴↔️🔴↔️🔴... (342 connections)

Our Discovery (φ-mixing):
4 master regulators control the rest
    NRG1 ──→ VEGFC
      ├────→ AXL
      ├────→ JUN      
      └────→ WNT5A
           └──→ LOXL2
```

---

## Code Availability

The binPhix algorithm implementation is available as part of the Nature publication supplementary materials. For researchers interested in applying this method to their own single-cell data, please refer to the detailed implementation guide in the [supplementary information](https://static-content.springer.com/esm/art%3A10.1038%2Fnature22794/MediaObjects/41586_2017_BFnature22794_MOESM1_ESM.pdf#page=1).

---

## Collaborators

This work was a collaboration with the University of Pennsylvania, including Sydney M. Shaffer, Margaret C. Dunagin, Stefan R. Torborg, Eduardo A. Torre, Benjamin Emert, Clemens Krepler, and Arjun Raj.

---

[← Back to Research](/research) | [View Publication](https://www.nature.com/articles/nature22794) | [Press Coverage](/press)
