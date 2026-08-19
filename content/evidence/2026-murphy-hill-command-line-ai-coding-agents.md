---
type: Evidence
schema: evidence.schema.json
title: "Command-Line AI Agents at Microsoft: +24% Pull-Request Lift, Adoption via Peers"
description: "Telemetry-based field study of tens of thousands of Microsoft engineers over a four-month early-2026 rollout of Claude Code and Copilot CLI: adopters merged 24% more pull requests (95% CI +14.5% to +33.7%), the lift persisted rather than fading, dose-response reached +50% at 5+ days of weekly use, and first use spread through peer and manager networks."
tags:
  - ai-adoption
  - developer-tools
  - agentic-ai
  - telemetry-study
  - pull-requests
  - productivity
  - microsoft
  - software-engineering
  - social-networks
status: stable
source:
  url: "https://arxiv.org/abs/2607.01418"
  publisher: "arXiv"
  authors: "Murphy-Hill, Emerson; Butler, Jenna; Savelieva, Alexandra (Microsoft)"
  document_type: "Preprint / field study"
  published: 2026-07-01
  accessed: 2026-08-10
  access_notes: "Full text read from local Markdown extraction of arXiv v1. Design: developer-level telemetry on tens of thousands of Microsoft software engineers, observation window January 5 - April 29, 2026; adoption study on Copilot CLI, outcomes study on both tools; CausalImpact synthetic control plus within-person dose-response; 609 internal survey responses for interpretation. Positionality: authors are Microsoft employees."
claims:
  - claim: "Lift in merged pull requests per engineer per day from agentic CLI tool adoption"
    value: "+24.0% (95% CI [+14.5%, +33.7%], posterior p < 0.001), estimated over a 115-day post-rollout window"
  - claim: "Lift persistence into later months"
    value: "+29.4% in February vs +20.0% in March-April, overlapping credible intervals, neither excluding zero-lift-basis"
  - claim: "Within-person dose-response at 3 days of tool use per week"
    value: "+15.0% merged PRs relative to the same engineer's zero-tool weeks"
  - claim: "Within-person dose-response at 5+ days of tool use per week"
    value: "+50.1% merged PRs relative to the same engineer's zero-tool weeks"
  - claim: "Tool comparison, any-use weeks vs zero-tool weeks"
    value: "Copilot CLI +24.9% vs Claude Code +11.4% (about 2.2x; p < 0.0001)"
  - claim: "Effect of skip-level peers having adopted Copilot CLI (25%+ share)"
    value: "+216% odds of trying it (strongest adoption signal)"
  - claim: "Effect of a direct manager using Copilot CLI"
    value: "+82% odds of initial use; +22% odds of retention"
  - claim: "Effect of a quarter or more of reviewer peers using Copilot CLI"
    value: "+54% odds of initial use; +30% odds of retention"
  - claim: "Effect of prior IDE Copilot use on trying Copilot CLI"
    value: "+49% (1-14 days) to +83% (60+ days) odds of initial use"
  - claim: "Effect of prior IDE Copilot use on retaining Copilot CLI"
    value: "-12% to -15% odds of retention (familiar-fallback effect)"
  - claim: "Retention definition"
    value: "Active on 5 of the 14 days following first use"
  - claim: "Effect of tenure on adoption"
    value: "Barely matters; <1y hires +11% odds of trying, all other bands near zero and non-significant"
  - claim: "Effect of career stage on adoption"
    value: "Junior ICs less likely to try (-13% to -14% vs IC4); senior ICs more likely (+22% at IC5); managers indistinguishable from reference"
  - claim: "Subgroup PR lift at 3 days/week (relative to each subgroup's own zero-tool weeks)"
    value: "IC4 reference +21.3%; junior ICs and senior managers larger; <1y tenure +83% (read with caution, potential onboarding confound)"
  - claim: "Internal survey sample for interpretation"
    value: "609 responses to Microsoft's internal Agentic Engineering Day follow-up survey"
---

# Command-Line AI Agents at Microsoft: Field-Evidence Summary

## What This Is

A telemetry-based field study by three Microsoft researchers (Murphy-Hill, Butler, Savelieva), arXiv:2607.01418, tracking tens of thousands of Microsoft software engineers during the company's early-2026 rollout of two agentic command-line tools — Anthropic's Claude Code and GitHub's Copilot CLI. Unlike survey-based developer-AI research, this study observes who actually adopted, who kept using, and what the tools produced, measured as merged pull requests. It is the first study to apply developer-level telemetry to agentic *command-line* tools specifically (prior telemetry work covered IDE-based tools).

## The Output Effect

The central number is a **+24.0%** lift in merged PRs per engineer per day for adopters against a synthetic counterfactual (CausalImpact; 95% CI [+14.5%, +33.7%], p < 0.001, 115-day post-period). Two properties matter for the broader AI-productivity debate:

- **It does not fade.** February shows +29.4% and March-April +20.0%, with overlapping credible intervals that both exclude zero. This stands in explicit contrast to He et al.'s finding that a Cursor-era lift faded by month three.
- **It scales with use.** Within-person, each engineer compared against their own zero-tool weeks: +5% at 2 days/week, +15% at 3, +50.1% at 5+.

## Who Adopts and Who Stays

Adoption is social; retention is behavioral.

| Agent | Odds change |
|---|---|
| Skip-level peers 25%+ using Copilot CLI | **+216%** trying (strongest signal) |
| Direct manager using Copilot CLI | +82% trying, +22% staying |
| Reviewer peers 25%+ using Copilot CLI | +54% trying, +30% staying |
| Prior IDE Copilot use (60+ days) | +83% trying, **-15% staying** |
| Tenure | essentially null |
| Junior ICs (IC2/IC3) | -13%/-14% trying vs IC4 |

The most counterintuitive result: engineers who already relied on IDE Copilot were *more* likely to try the CLI tool but *less* likely to stick with it — interpreted as a familiar-fallback effect.

## Why It Matters for This Repository

This is the micro, shown-mechanism counterpart to the survey-level and macro evidence already in the repo:

- It puts numbers on the [AI productivity paradox](../frameworks/productivity-j-curve.md): at the task level, output *does* rise (+24%) and lasts — in an early, adopters-skewed window. That sits in tension with [Atlassian's 89%-speed / 6%-ROI finding](2026-atlassian-state-of-teams-ai-fragmentation-tax.md), and with [McKinsey's claim that sustained performance impact is elusive](2026-mckinsey-ai-paradox-where-ai-creates-value.md), because measurable micro-output here and enterprise-level outcome measurement there are measuring different layers of the J-curve.
- It is the output-side of the same firm whose capex is documented in the [Microsoft FY26 Q4 capex evidence entry](finance-of-ai/2026-microsoft-fy26-q4-earnings.md): that $115.9B buys, among other things, this measurable lift. The cost-side of that same rollout surfaced four months later, when [Microsoft capped engineers' token spend and made a cheaper model the default](2026-microsoft-token-budgets-tokenmaxxing.md) — evidence that the +24% output gain was secured alongside a token-cost discipline the paper's own window (which ended before the May policy shift) did not observe.
- It extends the [Klein Teeselink & Carey labor-demand evidence](2026-klein-teeselink-carey-ai-automation-expertise.md) with the intra-firm margin: the engineers who benefit most are the already-active, senior, and socially-embedded — roughly the group whose job postings data in other studies look least exposed.

## Limits

- Merged PR throughput is a quantity proxy, not value; the study explicitly leaves software quality open.
- Adopters self-select into the outcomes study; the synthetic control absorbs shared trends but not adopter-specific shocks (the placebo test passes: -1.1%, interval [-10.6%, +8.6%]).
- Dose-response is associative within-person, not causal; heavier-use weeks may carry a lighter task mix.
- Single company, single early-2026 window, Azure DevOps measurement only; external validity is bounded.
- Positionality: authors are Microsoft employees; Microsoft owns GitHub, maker of Copilot CLI, and sells AI tools.

