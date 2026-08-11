---
type: Evidence
title: "Ziff Davis v. OpenAI: robots.txt Is Not a DMCA §1201 Technological Measure"
description: "In the consolidated In re OpenAI copyright MDL, Judge Sidney H. Stein held that a robots.txt exclusion directive is a precatory signal, not a 'technological measure' under DMCA §1201, dismissing Ziff Davis's anti-circumvention claim over OpenAI's automated crawling of its web content."
tags:
  - copyright
  - dmca
  - robots-txt
  - scraping
  - litigation
  - generative-ai
  - ai-intellectual-property
  - web-crawling
  - us-law
status: stable
source:
  url: "https://www.courtlistener.com/docket/69879510/in-re-openai-inc-copyright-infringement-litigation/"
  publisher: "United States District Court, Southern District of New York"
  authors:
    - "Judge Sidney H. Stein"
  document_type: "Opinion (In re OpenAI, Inc. Copyright Infringement Litigation, 25-md-3143 (SHS) (OTW))"
  issued: 2025-12-15
  accessed: 2026-08-11
  access_notes: "Opinion reported at 2025 WL 3635559; order docketed 18 December 2025. Primary text via CourtListener docket and docket number 69879510. Analysis via Eric Goldman's Technology & Marketing Law Blog and LexSummary corroborate the ruling."
claims:
  - claim: "robots.txt is not a technological measure under DMCA §1201"
    value: "A robots.txt exclusion directive is precatory — a 'keep off the grass' sign — not a measure that effectively controls access, so its disregard is not §1201 circumvention"
  - claim: "Ziff Davis's §1201 claim dismissed"
    value: "Claim over OpenAI's crawling of web content (including via automated tools) dismissed on the pleadings"
  - claim: "Court"
    value: "U.S. District Judge Sidney H. Stein, S.D.N.Y., in the consolidated OpenAI copyright MDL"
  - claim: "Opinion date"
    value: "15 December 2025 (2025 WL 3635559); order docketed 18 December 2025"
  - claim: "Implication"
    value: "Web publishers relying on robots.txt alone cannot bring a DMCA circumvention claim; other theories (contract, scraping, other access-control measures) remain"
---

# Ziff Davis v. OpenAI: robots.txt Is Not a DMCA §1201 Technological Measure

## What This Is

On December 15, 2025, Judge Sidney H. Stein (S.D.N.Y.) dismissed the DMCA §1201 anti-circumvention claim that Ziff Davis asserted against OpenAI in the consolidated *In re OpenAI, Inc. Copyright Infringement Litigation* (25-md-3143 (SHS) (OTW)). Ziff Davis, publisher of digital properties including IGN, had alleged that OpenAI's automated crawling of its websites in disregard of robots.txt exclusion directives constituted circumvention of a "technological measure" protecting its works.

## The Holding

Judge Stein held that **a robots.txt directive is not a "technological measure" within the meaning of DMCA §1201.** The statute requires a measure that "effectively controls access" to a copyrighted work. A robots.txt file merely communicates the operator's preferences to well-behaved crawlers; it does not *prevent* access. As commentators summarized the ruling, it is a precatory "keep off the grass" sign — a request, not a fence. Disregarding it may support other theories, but it is not circumvention of a §1201 access control.

## Why It Matters for This Repository

This ruling sits at the center of the scraping-defense debate the repo tracks. It draws the boundary that [Reddit v. SerpApi & Perplexity](2026-reddit-v-serpapi-perplexity-dmca-scraping.md) later drew from the other side: **a precatory signal (robots.txt) is not protected; an actively enforced technical control (SearchGuard) can be.** Together the two rulings delineate what the DMCA does and does not protect in the web-scraping economy that feeds AI training.

The holding matters for publishers, whose robots.txt preferences against AI crawlers (a widespread 2023-2025 practice, contested in cases like the [Richner local-newspaper action](2026-richner-publishers-v-microsoft-openai.md)) do not by themselves create DMCA liability. It is a concrete instance of the [Durand and Vergne](../../bibliography/2010-durand-vergne-organisation-pirate.md) boundary-testing theme: firms signal exclusion, crawlers cross the signal, and courts are now deciding which signals the state's machinery will enforce.

It also qualifies the [Liang and Lu](../../bibliography/2026-liang-creative-ownership-ai.md) account of when works matter to generation: exclusion signals that are not technically enforced are legally weak, shifting the weight onto output dependence and market harm rather than access control.

## Limits

- The ruling concerns **§1201 only**; it does not foreclose copyright infringement, breach of contract, or other scraping theories against AI companies.
- It is a district-court opinion within an MDL, not a circuit authority.
- The holding is specific to robots.txt as a purely declarative protocol; other technical measures were not at issue.
- Corroboration relied on secondary analysis (Goldman blog, LexSummary) of the primary docket text.

## Sources Consulted

- Primary: [CourtListener docket, In re OpenAI, Inc. Copyright Infringement Litigation, 25-md-3143](https://www.courtlistener.com/docket/69879510/in-re-openai-inc-copyright-infringement-litigation/)
- Analysis: [Eric Goldman, Technology & Marketing Law Blog, "Ziff Davis v. OpenAI — robots.txt Is Not a Technological Measure" (Dec 2025)](https://blog.ericgoldman.org/)
- Analysis: [LexSummary on 2025 WL 3635559](https://www.lexsummary.com/)
