---
type: Evidence
schema: evidence.schema.json
title: "AI Exposure and Labor Demand Across 39 Countries: Klein Teeselink and Carey (2026)"
description: "Quantitative evidence from a cross-country difference-in-differences study of job postings and advertised salaries around the November 2022 release of ChatGPT, reporting a 6.2% decline in job postings per standard deviation of AI exposure and expertise-dependent wage effects."
tags:
  - ai-economy
  - labor-demand
  - job-postings
  - wages
  - automation-exposure
  - cross-country
  - difference-in-differences
  - expertise
status: stable
source:
  url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6134506"
  publisher: "SSRN"
  authors: "Klein Teeselink, Bouke; Carey, Daniel"
  publication_type: "working paper"
  dataset: "Revelio Labs job postings, 39 countries, August 2021 - October 2025"
  accessed: 2026-08-10
claims:
  - claim: "Effect of AI exposure on job postings (pooled, 39 countries)"
    value: "-6.2% per 1 SD increase in AI exposure (p < 0.001)"
  - claim: "Countries with negative AI-exposure point estimates for job postings"
    value: "28 of 39 countries (15 statistically significant at 5%)"
  - claim: "Countries with the largest hiring reductions from AI exposure"
    value: "Finland, Slovenia, Slovakia"
  - claim: "Effect of expertise-raising automation on advertised wages (pooled)"
    value: "+0.14% per 1 SD increase in predicted expertise change"
  - claim: "Countries showing positive expertise-change wage estimates"
    value: "25 of 39 countries"
  - claim: "Direct effect of expertise change on job postings (pooled)"
    value: "Effectively zero"
  - claim: "Employment interaction between exposure and expertise change"
    value: "Positive and statistically significant: hiring decline 4.2% where AI targets low-expertise tasks vs 7.8% where AI targets high-expertise tasks"
  - claim: "Wage interaction between exposure and expertise change"
    value: "Indistinguishable from zero"
  - claim: "Correlation between cross-country hiring effects and employment protection strictness"
    value: "Negative (stricter employment protection, larger hiring reductions)"
  - claim: "Correlation between cross-country hiring effects and digital readiness"
    value: "Positive (higher digital readiness, smaller hiring reductions)"
  - claim: "Validation: baseline expertise vs observed worker outcomes"
    value: "1 SD expertise correlates with +0.42 SD education, +0.52 SD salary, +0.41 SD total compensation"
  - claim: "Exposure measure descriptive mean (beta, share of exposed tasks)"
    value: "0.34 (SD 0.22)"
  - claim: "Expertise change measure descriptive mean"
    value: "-2.73 (SD 8.07); correlation with exposure of -0.40"
---

# AI Exposure and Labor Demand: Evidence Summary

## What This Is

This entry collects the concrete quantitative findings of [Klein Teeselink and Carey, "AI, Automation, and Expertise"](../bibliography/2026-klein-teeselink-carey-ai-automation-expertise.md) (SSRN 6134506), which studies how generative AI exposure changed labor demand and advertised wages after the November 2022 release of ChatGPT drew attention to LLM capabilities.

## The Data Base

- **Source of data**: Revelio Labs job postings covering the near-universe of online vacancies.
- **Coverage**: 39 countries (OECD and BRICS, excluding coverage/data-quality outliers).
- **Window**: August 2021 to October 2025 (51 months; 15 months pre-ChatGPT, 36 months post).
- **Structure**: ~939,000 occupation-month observations; average 473 occupations per country.

## Labor Demand Effects

| Claim | Estimate |
|---|---|
| Pooled job postings decline per 1 SD exposure | -6.2% (p < 0.001) |
| Countries with negative exposure effect | 28 of 39 (15 significant) |
| Largest effects | Finland, Slovenia, Slovakia |
| Hiring decline where AI automates low-expertise tasks | -4.2% |
| Hiring decline where AI automates high-expertise tasks | -7.8% |

## Wage Effects

| Claim | Estimate |
|---|---|
| Pooled advertised salary per 1 SD expertise change | +0.14% |
| Countries with positive expertise-wage effect | 25 of 39 |
| Direct effect of exposure alone on wages | Not significant |
| Wage interaction (exposure x expertise change) | Indistinguishable from zero |

## Interpretation

The evidence shows that AI exposure reduces hiring on a large scale (a 6.2% decline per standard deviation, consistent across 28 of 39 countries), while the wage consequences depend on which tasks are automated: wages rise only where automation removes low-expertise tasks and raises entry thresholds. Where automation removes high-expertise tasks, wages do not rise — job postings fall most.

This supports the thesis that the AI transformation is not homogeneous across occupations: the composition of automated tasks, not just the quantity of exposure, determines whether an occupation experiences wage pressure, supply contraction, or hiring reduction. The intra-firm counterpart — who within a company gains from AI-assisted work — is documented in the [command-line AI agents at Microsoft evidence entry](2026-murphy-hill-command-line-ai-coding-agents.md), where the gains concentrate in already-active and senior engineers.

## Limits

- Job postings measure employer hiring intent in the formal online segment, not realized employment.
- Exposure and expertise measures capture predicted automation potential, not realized automation; realized effects are likely to grow.
- Wage data are partly imputed by Revelio Labs, which attenuates salary estimates.
- The cross-country heterogeneity correlations are exploratory with limited statistical power.

