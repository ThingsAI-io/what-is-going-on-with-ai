---
type: Bibliography
title: "Labor Market Impacts of AI: A New Measure and Early Evidence"
description: "Anthropic research report introducing 'observed exposure' — a new occupational AI displacement metric combining theoretical LLM capability with real-world Claude usage data — and finding no systematic rise in unemployment for exposed workers, with tentative evidence of slowed hiring for younger workers."
tags:
  - ai-economy-labor
  - ai-ethics-safety
  - labor-market
  - ai-displacement
  - occupational-exposure
  - employment-effects
  - economic-impact
  - ai-work
  - observed-exposure
status: stable
reference:
  source_type: paper
  full_title: "Labor market impacts of AI: A new measure and early evidence"
  authors:
    - "Massenkoff, Maxim"
    - "McCrory, Peter"
  primary_author: "Massenkoff"
  year: 2026
  venue: "Anthropic Research"
  url: "https://www.anthropic.com/research/labor-market-impacts"
  date_captured: 2026-03-16
  topics:
    - ai-economy-labor
    - ai-ethics-safety
  tags:
    - labor-market
    - ai-displacement
    - occupational-exposure
    - employment-effects
    - economic-impact
    - ai-work
    - observed-exposure
  relevance: >
    This paper directly addresses the ai-economy-labor topic by providing a novel empirical
    framework for measuring AI's actual (versus theoretical) penetration into occupational
    tasks, then testing whether that penetration has yet caused measurable labor market
    harm. Its finding that highly exposed workers skew female, educated, and well-paid
    raises distributive equity concerns central to the ai-ethics-safety topic, as does its
    call for ongoing monitoring before displacement becomes visible.
  key_insights:
    - "'Observed exposure' bridges the gap between theoretical AI capability and actual deployment: 97% of Claude usage falls on tasks rated as theoretically feasible, yet actual coverage is only ~33% in Computer & Math — showing a large, closing but still wide frontier."
    - "Occupations with the highest observed exposure are projected by BLS to grow 0.6 percentage points less for every 10-point coverage increase, providing partial external validation of the new measure."
    - "The demographic profile of the most exposed workers — more female, more educated, higher-paid — challenges the narrative that AI primarily threatens low-wage manual labor; white-collar displacement risk is real."
    - "No statistically significant increase in unemployment for the most AI-exposed quartile since ChatGPT's launch (late 2022), consistent with effects being below detection threshold or simply not yet having arrived."
    - "Tentative evidence that young workers (22–25) are 14% less likely to be hired into highly exposed occupations post-ChatGPT, echoing Brynjolfsson et al.'s payroll findings and suggesting early hiring chilling effects."
    - "The framework is explicitly designed for longitudinal re-use: by establishing a baseline before large-scale displacement occurs, future updates can more reliably identify causal labor market disruption."
  bibtex: |
    @online{massenkoff2026labormarket,
      author    = {Massenkoff, Maxim and McCrory, Peter},
      title     = {Labor market impacts of {AI}: A new measure and early evidence},
      year      = {2026},
      date      = {2026-03-05},
      url       = {https://www.anthropic.com/research/labor-market-impacts},
      institution = {Anthropic}
    }
  chicago: 'Massenkoff, Maxim, and Peter McCrory. 2026. "Labor Market Impacts of AI: A New Measure and Early Evidence." Anthropic Research, March 5, 2026. https://www.anthropic.com/research/labor-market-impacts.'
  metadata:
    status: read
    priority: high
    notes: "Anthropic internal research report. PDF appendix available separately. Updated March 8, 2026 to correct Figure 7 label reversal."
---

# Executive Summary

This Anthropic research report by Maxim Massenkoff and Peter McCrory makes two intertwined contributions: it introduces a new occupational-level measure of AI displacement risk, and it uses that measure to test whether AI has yet produced detectable harm in US labor markets.

The core methodological innovation is a metric called **observed exposure**. Prior measures of AI exposure — most notably the widely-cited Eloundou et al. (2023) β score — estimated which occupational tasks are *theoretically* feasible for LLMs to perform. Massenkoff and McCrory add a second layer: whether those theoretically feasible tasks are *actually* appearing in work-related, automated Claude usage. The resulting measure weights automated API implementations more heavily than augmentative uses, and requires tasks to clear a minimum usage threshold before they count as "covered." The result is a measure that is considerably more conservative than the theoretical baseline: although 94% of tasks in Computer & Math occupations are theoretically AI-feasible, actual Claude coverage of that category is only 33%.

Using this measure, the authors rank about 800 US occupations by exposure. Computer Programmers emerge at the top with 75% task coverage, followed by Customer Service Representatives and Data Entry Keyers. Roughly 30% of workers occupy occupations with zero measured coverage, including Cooks, Motorcycle Mechanics, and Bartenders. The measure correlates with Bureau of Labor Statistics employment growth projections: every 10-percentage-point increase in observed exposure is associated with a 0.6-point decrease in projected growth through 2034 — a modest but notable alignment with independently-derived labor market forecasts.

A striking finding concerns worker demographics: the most exposed occupations disproportionately employ workers who are female, white, Asian, more highly educated, and higher-paid. Workers in the top exposure quartile earn 47% more on average than workers with zero exposure, and are more than four times as likely to hold graduate degrees. This directly challenges narratives that frame AI displacement primarily as a threat to low-wage manual jobs.

For the central empirical question — has AI harmed employment so far? — the paper's answer is cautious: no systematic harm is detectable yet. Using the Current Population Survey, the authors find no statistically significant increase in unemployment rates for workers in the most AI-exposed occupations since ChatGPT's launch in late 2022. However, they detect tentative evidence that young workers (22–25 years old) are being hired into exposed occupations at a slower rate: job-finding rates in exposed occupations fell by roughly 14% relative to 2022, a finding that is statistically marginal but echoes Brynjolfsson et al.'s payroll-based evidence.

The authors frame this as an early-warning system: by laying methodological groundwork before displacement becomes unmistakable, the framework is designed to sharpen future signal-from-noise analyses as AI capabilities and adoption continue to grow.

## Key Contributions

- Introduces **observed exposure** — a new occupational AI displacement measure that weights actual task-level Claude usage (automated, work-related) against theoretical LLM feasibility (Eloundou et al.).
- Provides the first systematic comparison of theoretical AI capability versus real-world deployment penetration at occupational scale, revealing a large and uneven "coverage gap."
- Establishes baseline empirical estimates of AI's early labor market effects using Current Population Survey unemployment data and a difference-in-differences framework.
- Documents the demographic profile of the most AI-exposed workers: female, educated, and higher-paid — a counterintuitive finding that reshapes how we should frame AI displacement risk.
- Offers a longitudinal methodology explicitly designed for repeated updating as new usage and employment data emerge.

## Relevance to Our Work

**ai-economy-labor**: This paper is squarely at the center of the ai-economy-labor topic. It provides a theoretically grounded, empirically tested measure of how AI is penetrating occupational task structures, and tests whether that penetration has yet produced labor market disruption. Its finding that a large "capability gap" still exists — AI is far from its theoretical potential in most occupations — provides important calibration for discussions of AI as an economic supply shock. The paper also adds precision to the question of *who* is at risk: the most exposed workers are not at the low end of the wage scale, complicating simple "bottom-up" displacement narratives.

**ai-ethics-safety**: The demographic profile of highly exposed workers has clear governance implications. If displacement materializes among better-educated, higher-paid workers (disproportionately women), the social and policy response differs substantially from displacement concentrated among low-wage workers. The paper's explicit framing — establish a monitoring framework *before* harms become obvious — reflects an anticipatory governance logic directly aligned with the ai-ethics-safety topic. The call for ongoing updates positions this as a living accountability infrastructure, not a one-time finding.

## Methodology / Approach

The measure construction draws on three data sources: (1) the O*NET database (~800 US occupations enumerated by task); (2) Eloundou et al.'s β scores (0, 0.5, 1) for task-level LLM feasibility as of early 2023; and (3) Anthropic's own Economic Index usage data (two reports, covering August and November 2025 usage). A task is "covered" if it is theoretically feasible (β ≥ 0.5) and appears with sufficient frequency in work-related Claude traffic. Automated usage receives full weight; augmentative usage receives 0.5 weight. Coverage is aggregated to the occupation level weighted by time-spent fractions from O*NET, then to occupational categories weighted by employment.

The employment analysis uses the Current Population Survey, matched to occupations via a Eckhardt–Goldschlag crosswalk from O*NET-SOC to historical CPS codes. The core design is difference-in-differences: comparing trends in unemployment rates (and job-finding rates for young workers) between the top-quartile and zero-exposure groups before and after ChatGPT's launch (October 2022). The authors validate results by varying the treatment cutoff from the median to the 95th percentile, and by using unemployment insurance claimant data as an alternative outcome measure.

## Key Insights and Takeaways

### The Coverage Gap as a Progress Indicator
The gap between theoretical AI feasibility and observed usage is large: Claude covers only 33% of Computer & Math tasks despite 94% theoretical feasibility. The authors frame this gap as an evolving frontier rather than a static ceiling. As capabilities advance and adoption spreads, the "red area" of actual coverage will grow toward the "blue area" of theoretical possibility. This framing makes observed exposure a forward-looking index, not just a snapshot.

### Demographic Reversal of the Displacement Narrative
The standard narrative positions AI displacement as a threat to low-wage, low-skill workers performing routine tasks. This paper's data contradict that framing at the occupational level: workers in the top exposure quartile earn 47% more, are 4x more likely to hold graduate degrees, and are significantly more likely to be female and Asian. If AI displacement follows occupational exposure, it will disproportionately affect knowledge-economy workers — a socially and politically distinct disruption scenario.

### Early Hiring Signals vs. Unemployment Signals
The paper surfaces a methodologically important asymmetry: unemployment data shows no clear AI effect, but hiring data for young workers shows a tentative 14% slowdown in exposed occupations. The authors note that young labor market entrants who fail to find work may exit the labor force rather than appear as unemployed, making unemployment an imperfect sensor for early-stage displacement. This distinction between hiring chilling and layoff effects is critical for monitoring approaches.

### The Value of Prospective Monitoring
A key conceptual contribution is the argument for monitoring *before* disruption is obvious. Post-hoc analyses of past economic shocks (offshoring, robots) have produced contradictory estimates because the counterfactual is hard to reconstruct. By establishing exposure measures and baseline employment trends now, the framework can support more credible causal inference if large AI-driven disruption materializes later.

## Relevance to This Repository

This paper belongs in the repo's evidence layer because it tries to measure AI disruption before it becomes obvious. That is exactly the kind of source the project needs: something that separates theoretical capability from observed penetration and then asks whether labor-market effects are already visible.

The paper is especially useful because it suggests the earliest signal may be hiring slowdown rather than unemployment, which fits the repository's broader aim to track mechanisms at the right level of observation.

## Connections to Current Repo

- [Generative AI at Work](2025-brynjolfsson-generative-ai-at-work.md): workplace-level productivity and learning effects that complement the labor-market lens here.
- [AI and the Global Productivity Divide](2025-chaar-ai-global-productivity-divide.md): country-level exposure and adoption constraints that extend the same logic globally.
- [From Future of Work to Future of Workers: The AI-as-Amplifier Paradox](2026-ehsan-ai-amplifier-paradox.md): hidden erosion inside occupations versus the early labor-market signal measured here.
- [Generative AI as a Non-Convex Supply Shock](2026-zhang-genai-supply-shock.md): a market-level mechanism that helps explain why exposure may not immediately show up in unemployment.
- ["We Must Act Now": 200+ Economists and 16 Nobel Laureates Call for Preparation for AI's Economic Transformation](../evidence/declarations/2026-we-must-act-now-economists-ai-statement.md): the profession-wide statement that treats the hiring slowdown this paper measures as the leading edge of 'large-scale job displacement.'

## Open Questions and Further Exploration

- Will the 14% hiring slowdown for young workers in exposed occupations persist and widen, or will it reverse as AI adoption normalizes hiring expectations?
- How should the exposure measure be updated as Eloundou et al.'s (2023) LLM capability scores become outdated relative to current frontier models?
- Do exposure effects differ by firm size, sector, or country? The authors note the methodology can extend to different geographies — when will international comparisons be available?
- What happens to the workers who are not hired into exposed occupations? Do they find equivalent work elsewhere, return to school, or experience persistent wage scarring?
- Given the female skew among highly exposed workers, what gender-differentiated policy responses might be appropriate if displacement materializes?

## Quotes and Highlights

> "We introduce a new measure of AI displacement risk, observed exposure, that combines theoretical LLM capability and real-world usage data, weighting automated (rather than augmentative) and work-related uses more heavily."
>
> — Key Findings

> "AI is far from reaching its theoretical capability: actual coverage remains a fraction of what's feasible."
>
> — Key Findings

> "Workers in the most exposed professions are more likely to be older, female, more educated, and higher-paid."
>
> — Key Findings

> "It is possible that the impacts of AI will be unmistakable. This framework is most useful when the effects are ambiguous—and could help identify the most vulnerable jobs before displacement is visible."
>
> — Introduction

> "The averaged estimate in the post-ChatGPT era is a 14% drop in the job finding rate compared to that in 2022 in the exposed occupations, although this is just barely statistically significant."
>
> — Initial Results (Figure 7 discussion)

> "By laying this groundwork now, before meaningful effects have emerged, we hope future findings will more reliably identify economic disruption than post-hoc analyses."
>
> — Introduction
