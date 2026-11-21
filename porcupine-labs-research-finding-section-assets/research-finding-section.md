## Research Finding: Calibrating Statistical AI Detection Across Wet-Lab Workflows

**Date:** November 20, 2026  
**Organization:** Porcupine Labs (an independent nonprofit in formation)  
**Study:** *First Empirical Validation of Frontier Statistical AI Detection in Wet-Lab Workflows: Calibrating GPTZero 5.0 Across Historical Methods, 2026 Preprints, and Edited Protocols*

### Headline Findings (772 Evaluated Life-Science Passages, Seed 42)
- **Late-2026 bioRxiv Preprint Drift (Slice B, n = 72, Oct 1 - Nov 20, 2026):** 26.39% (19/72; 95% Bayesian upper bound 35.53%) were classified as pure AI and 13.89% (10/72) as mixed (40.28% combined non-human, 95% Bayesian CI: 29.51% to 51.81%). Mean AI probability rose 307-fold relative to Slice A (0.26995 vs. 0.00088), with ROC-AUC = 0.7372 [0.6521, 0.8163], PR-AUC = 0.7803 [0.7061, 0.8455], Cliff's Delta = +0.4744, and confound-adjusted Raw OLS Beta = +0.320693 (p_perm = 9.999e-05).
- **Historical Wet-Lab Prose Specificity (Slice A, n = 100 & Run 1 Sweep, n = 500):** 0.00% false positives on 2010-2014 human methods (0/100 AI or mixed; 95% Bayesian upper bound 1.90%, P(FPR < 1%) = 84.4%). Across 500 pre-2021 PMC methods articles (575,200 words), zero narrative prose passages scored at or above 0.75; the sole flagged outlier (PMC9070424 at 0.7144) consisted of raw NMR and IR spectroscopy data.
- **Scalar & Physical Perturbation Invariance (Slices C1 & C2, n = 100 pairs):** Neither 50 scalar-edited protocols (Slice C1: +18.5 C temperatures, 4.2x volumes, 3x durations; mean 0.9 mutated tokens) nor 50 protocols with fabricated citations and physically impossible bench parameters (Slice C2: 148 C open aqueous incubations, 260,000 x g microcentrifuge spins; mean 27.9 mutated tokens) triggered AI or mixed classifications (0/50 in each slice). Both passed TOST equivalence within a +/- 0.01 margin (Slice C1 TOST p_max = 0; Slice C2 TOST p_max = 8.438e-14).

### Why This Matters for AI-Directed Laboratories
Statistical text detection provides a calibrated upstream signal for tracking population-level authoring drift in scientific literature without penalizing formulaic human methods prose. Because linguistic origin and physical validity are orthogonal, prose scoring cannot substitute for downstream deterministic deck-state simulation, physical-layer verification, and run-reconstruction provenance at the instrument boundary.

*Governance & Funding Disclosure:* API evaluation credits were provided under GPTZero's November 2026 Challenge 03 research benchmark with no role in study design, analysis, or publication decisions. Porcupine Labs maintains a strict no-pay-for-pass firewall and publishes evaluation harnesses as open evaluation infrastructure as a public good.
