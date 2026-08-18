---
type: Bibliography
title: "Adoption and Impact of Command-Line AI Coding Agents"
description: "First field study using developer-level telemetry to study the adoption and output effect of agentic command-line AI tools (Claude Code, Copilot CLI) at Microsoft's early-2026 rollout across tens of thousands of engineers: adoption spread through social networks, retention tracked coding activity more than demographics, and adopters merged ~24% more pull requests over a four-month window."
tags:
  - ai-adoption
  - developer-tools
  - agentic-ai
  - telemetry-study
  - pull-requests
  - productivity
  - software-engineering
  - organizational-adoption
  - social-networks
status: stable
reference:
  short_title: "Adoption and Impact of Command-Line AI Coding Agents"
  authors:
    - family: "Murphy-Hill"
      given: "Emerson"
      affiliation: "Microsoft"
    - family: "Butler"
      given: "Jenna"
      affiliation: "Microsoft"
    - family: "Savelieva"
      given: "Alexandra"
      affiliation: "Microsoft"
  year: 2026
  month: July
  publication_type: "preprint"
  venue: "arXiv"
  arxiv_id: "2607.01418"
  url: "https://arxiv.org/abs/2607.01418"
  doi: "10.48550/arXiv.2607.01418"
  language: "en"
  access_date: "2026-08-10"
  access_notes: "Full text read from a local Markdown extraction of the arXiv v1. Sampling: tens of thousands of Microsoft software engineers, observation window January 5 - April 29, 2026."
  keywords: ["AI coding agents", "Claude Code", "Copilot CLI", "adoption", "developer productivity", "telemetry"]
  subjects: ["Software Engineering (cs.SE)", "Artificial Intelligence (cs.AI)", "Human-Computer Interaction (cs.HC)"]
---

# Executive Summary

Murphy-Hill, Butler, and Savelieva provide the first field study of agentic command-line AI coding tools that observes adoption and consequences through developer-level telemetry rather than surveys. At Microsoft's early-2026 rollout of Claude Code and GitHub Copilot CLI, they track tens of thousands of engineers over four months (January 5 - April 29, 2026), separating who tries the tools from who keeps using them, and measuring the effect of usage on merged pull requests.

Three headline findings: first use spread **primarily through social networks**; retention was associated more with **coding activity than with demographics**; and adopters merged roughly **24% more pull requests** than they would have otherwise — with the lift persisting across the four-month window rather than fading as a novelty effect.

# Core Contribution

**Design.** The adoption study covers only Copilot CLI, the tool with a well-defined eligible-adopter population: engineers are tracked in an engineer-week panel, with initial use modeled as a discrete-time hazard and retention as being active on 5 of the 14 days after first use. Predictors span five groups — career stage, tenure, baseline PR activity, prior IDE Copilot use, and time-varying social exposure (reviewer peers, skip-level peers, direct manager use). The outcomes study covers both tools, estimating PR lift with a CausalImpact synthetic-control counterfactual and then a within-person dose-response in which each engineer is their own control across weeks of differing use.

**Adoption is social.** An engineer whose skip-level peers had mostly adopted Copilot CLI had **+216% odds** of trying it; a direct manager using it raised odds **+82%**; a quarter-or-more of reviewer peers using it raised odds **+54%**. Prior IDE Copilot use predicted trying (up to +83%) but *negatively* predicted retention (-12% to -15%), interpreted as a familiar-fallback effect. Career stage produced a gentle gradient (juniors less likely to try, seniors more) and tenure barely mattered.

**Impact persists.** CausalImpact estimates a **+24.0%** lift in merged PRs per engineer per day (95% CI [+14.5%, +33.7%], p < 0.001). The lift does not fade within the window: February shows +29.4% and March-April +20.0%, intervals that overlap substantially and both exclude zero. Dose-response is monotone: +5% at two tool-use days per week rising to **+50.1%** at five or more. Copilot CLI showed about 2.2x the lift of Claude Code (+24.9% vs +11.4%), contrary to public developer sentiment favoring Claude Code for autonomous work.

# Relevance to This Repository

- This is the strongest quantitative field evidence so far on the [AI productivity paradox](../evidence/2026-atlassian-state-of-teams-ai-fragmentation-tax.md) at the task level: output does move, and it moves lastingly, for a selected set of adopters.
- It connects the [Microsoft capex evidence entry](../evidence/finance-of-ai/2026-microsoft-fy26-q4-earnings.md): the capital being spent on AI tooling here shows up as a measurable engineering-output lift, not just as cost.
- It adds an adoption-mechanism layer to the [productivity J-curve](../frameworks/productivity-j-curve.md): visible peer use drives uptake, and sustained gain depends on whether the tool survives into habitual use.
- It extends the labor-demand story in [Klein Teeselink and Carey](../evidence/2026-klein-teeselink-carey-ai-automation-expertise.md) with the opposing margin: within firms, AI-assisted engineers produce more output, concentrated in already-active and senior engineers.

The concrete quantitative results collected in this entry are also available as a standalone evidence entry: [Command-Line AI Agents at Microsoft: +24% Pull-Request Lift, Adoption via Peers](../evidence/2026-murphy-hill-command-line-ai-coding-agents.md).

# What the Source Leaves Open

- Merged PRs are an acknowledged proxy for output, not value; the paper explicitly leaves quality unanswered ("whether this added throughput yields better software").
- The outcomes study conditions on adopters who self-select, and the dose-response is associative, not causal.
- One company, one early-2026 window, Azure DevOps only — external validity is bounded.
- The authors are Microsoft employees; Microsoft owns GitHub (maker of Copilot CLI) and sells AI tools, a positionality the paper discloses.