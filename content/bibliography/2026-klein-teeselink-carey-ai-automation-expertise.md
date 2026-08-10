---
type: Bibliography
title: "AI, Automation, and Expertise"
description: "Large-scale cross-country empirical test of the expertise framework: AI adoption to ChatGPT's release raises wages where exposed tasks are low-expertise and reduces job postings by 6.2% per standard deviation of AI exposure, across 39 countries."
tags:
  - ai-economy
  - ai-automation
  - expertise
  - labor-demand
  - job-postings
  - wages
  - automation-exposure
  - difference-in-differences
status: stable
reference:
  short_title: "AI, Automation, and Expertise"
  authors:
    - family: "Klein Teeselink"
      given: "Bouke"
      affiliation: "King's College London; AI Objectives Institute; King's Institute for Artificial Intelligence"
    - family: "Carey"
      given: "Daniel"
      affiliation: "AI Objectives Institute"
  year: 2026
  month: April
  publication_type: "working paper"
  venue: "SSRN"
  ssrn_id: "6134506"
  url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6134506"
  doi: ""
  language: "en"
  access_date: "2026-08-10"
  access_notes: "Full text read from local Markdown conversion of the SSRN PDF."
  keywords: ["Generative AI", "Expertise", "Large Language Models", "Automation", "Labor demand"]
  jel: ["O33", "J23", "J31"]
---

# Executive Summary

Klein Teeselink and Carey provide the first large-scale empirical test of the expertise framework in the context of generative AI. Building on Autor and Thompson (2025), they separate two margins of automation: a demand-side channel in which automation displaces labor (raising the output elasticity of capital), and a supply-side channel in which automation changes an occupation's expertise threshold, expanding or contracting the pool of qualified workers.

Two occupations with identical AI exposure can therefore experience opposite labor-market trajectories, depending on which tasks are automated. Automating low-expertise tasks raises the expertise threshold, shrinks supply, and pushes wages up; automating high-expertise tasks lowers the threshold, expands supply, and pushes wages down.

# Core Contribution

**Design.** The empirical strategy is a difference-in-differences design exploiting the November 2022 release of ChatGPT as a natural experiment. It uses hundreds of millions of job postings from Revelio Labs across 39 countries, spanning August 2021 to October 2025 (~939,000 occupation-month observations). AI exposure is measured using the Eloundou et al. (2024) beta task-level measure; a new task-level expertise measure is built via GPT-4o semantic classification of 19,265 O*NET task descriptions. Effects are estimated country-by-country and aggregated with random-effects meta-analysis.

**Two robust findings.** First, a one standard deviation increase in AI exposure reduces job postings by **6.2 percent** (p < 0.001); 28 of 39 countries show negative point estimates, 15 statistically significant. Second, expertise-raising automation raises advertised wages: a one standard deviation increase in predicted expertise change is associated with a small but significant **0.14 percent salary increase**, consistent in direction in 25 of 39 countries.

**Interactions.** The theoretical prediction that the margins interact is confirmed for employment: the exposure x expertise-change interaction on job postings is positive and significant, so displacement is dampened when automation raises expertise requirements. Occupations where AI targets low-expertise tasks see a 4.2 percent decline in job postings versus 7.8 percent where AI targets high-expertise tasks. The wage interaction is indistinguishable from zero.

**Cross-country heterogeneity.** Effects are larger in countries with stricter employment protection legislation and smaller in countries with higher digital readiness. Prior unemployment and AI adoption show little correlation.

# Relevance to This Repository

This paper adds empirical grounding to the repository's treatment of the AI transformation of work:

- It provides evidence that AI exposure reduces labor demand, complementing existing entries on labor-market impacts ([Massenkoff and McCrory](2026-massenkoff-labor-market-impacts-ai.md); [Brynjolfsson et al.](2025-brynjolfsson-generative-ai-at-work.md)).
- It introduces the expertise threshold as a mechanism for heterogeneous effects, giving a structure for explaining why identical exposure can produce opposite outcomes.
- It supports the [productivity J-curve](../frameworks/productivity-j-curve.md) framing by showing displacement now, with wage effects still small and concentrated in specific task compositions.

The quantitative results collected in this entry are also available as a standalone evidence entry: [AI Exposure and Labor Demand Across 39 Countries](../evidence/2026-klein-teeselink-carey-ai-automation-expertise.md).

# What the Source Leaves Open

- Exposure and expertise measures capture potential, not realized, automation; realized effects are likely to grow as automation plays out.
- The post-ChatGPT window (2.5 years) may be too short to observe full supply-side adjustment.
- If AI lowers the cost of learning, expertise-threshold constraints could bind less tightly, attenuating predicted wage effects.
- The cross-country heterogeneity analysis is exploratory given the limited number of country observations.