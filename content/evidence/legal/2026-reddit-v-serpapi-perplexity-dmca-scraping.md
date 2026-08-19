---
type: Evidence
schema: evidence.schema.json
title: "Reddit v. SerpApi & Perplexity: DMCA §1201 Claims Survive Dismissal for Anti-Bot Circumvention"
description: "Judge Paul A. Engelmayer (S.D.N.Y.) denied motions to dismiss Reddit's DMCA §1201 claims against SerpApi and Perplexity in Reddit, Inc. v. SerpApi, LLC (1:25-cv-08736-PAE), holding that circumventing Google's SearchGuard anti-bot protections to harvest Reddit content at scale can constitute circumvention of a technological measure — even though the underlying content remains viewable by an authorized individual."
tags:
  - copyright
  - dmca
  - litigation
  - scraping
  - anti-bot
  - generative-ai
  - ai-intellectual-property
  - ai-training-data
  - us-law
status: stable
source:
  url: "https://www.courtlistener.com/docket/71720563/reddit-inc-v-serpapi-llc/"
  publisher: "United States District Court, Southern District of New York"
  authors:
    - "Judge Paul A. Engelmayer"
  document_type: "Opinion and order on motions to dismiss (Reddit, Inc. v. SerpApi, LLC, 1:25-cv-08736-PAE)"
  issued: 2026-07-31
  accessed: 2026-08-11
  access_notes: "Primary docket and order hosted on CourtListener (RECAP). Corroborated by Bloomberg Law coverage (2026-07-31) and a Law.com/New York Law Journal report (2026-07-31). Complaint filed 22 October 2025."
claims:
  - claim: "DMCA §1201 circumvention claims survive dismissal"
    value: "Reddit's claims against SerpApi and Perplexity for circumventing Google's SearchGuard anti-bot protections survive; 'Nothing in the DMCA's text exempts... circumvention of protections designed to prevent bulk access merely because the material remains available to an authorized individual'"
  - claim: "Standing under §1203(a)"
    value: "Court held the 'any person injured' language of the DMCA gives Reddit standing to sue for circumvention of protections on its own content, though the protections were Google's"
  - claim: "Defendants"
    value: "SerpApi (API reseller that bypassed SearchGuard to sell Reddit content at scale) and Perplexity AI (alleged user of SerpApi's circumvention service for its AI answer engine)"
  - claim: "SearchGuard circumvention"
    value: "Alleged misuse of Google's anti-bot system to harvest Reddit content in bulk, defeating access controls Reddit relied on"
  - claim: "Complaint filing date"
    value: "Filed 22 October 2025 in the Southern District of New York (1:25-cv-08736-PAE)"
---

# Reddit v. SerpApi & Perplexity: DMCA §1201 Claims Survive Dismissal for Anti-Bot Circumvention

## What This Is

On July 31, 2026, Judge Paul A. Engelmayer of the Southern District of New York denied motions to dismiss most of Reddit's DMCA claims against SerpApi LLC and Perplexity AI in *Reddit, Inc. v. SerpApi, LLC* (1:25-cv-08736-PAE). Reddit alleged that SerpApi bypassed Google's **SearchGuard** anti-bot protections to harvest Reddit content at scale and resell it, and that Perplexity used SerpApi's circumvention service to feed its AI answer engine. The ruling is the clearest federal authority to date holding that **anti-bot circumvention can support a §1201 claim even when the underlying content remains publicly viewable** — the heart of the modern scraping-defense debate.

## The Legal Holdings

- **§1201 circumvention is not limited to paywalls or subscriber-only content.** Judge Engelmayer rejected the argument that the DMCA only protects measures preventing *access*, writing that "nothing in the DMCA's text exempts... circumvention of protections designed to prevent bulk access merely because the material remains available to an authorized individual."
- **Standing survived.** Reddit is "any person injured" under §1203(a) by circumvention of protections that govern access to its own content, even though the technical measure belonged to Google.
- **The claims against both defendants proceed** on the theory that SerpApi built a circumvention service and Perplexity used it.

## Why It Matters for This Repository

This case is the technical-controls companion to the repo's other scraping rulings. Where [Ziff Davis v. OpenAI](2025-ziff-davis-v-openai-robots-txt-dmca.md) held that a mere robots.txt directive is *not* a §1201 technological measure, *Reddit v. SerpApi* holds that an *actual, enforced* anti-bot control (Google SearchGuard) can be — and that defeating it to enable bulk harvesting is actionable. The two rulings together draw the line the AI-scraping economy has been pressing against since 2023: **precatory signals are not protected, but actively enforced technical fences are.**

The case also extends the [Durand and Vergne](../../bibliography/2010-durand-vergne-organisation-pirate.md) boundary-testing motif to the anti-bot frontier: an intermediary (SerpApi) built a business precisely at the boundary of another platform's access controls, and the state's courts are now deciding where the line runs. It complements the [Doe v. GitHub](2026-doe-v-github-copilot-open-source-cmi.md) entry on the other §12xx question — how far the DMCA reaches into the AI supply chain's data acquisition. And the [Bartz v. Anthropic settlement](2026-bartz-v-anthropic-settlement.md) shows the same boundary being priced rather than litigated; here it is being litigated.

## Limits

- The opinion is a **motion-to-dismiss ruling**; no merits finding that SerpApi or Perplexity actually violated the DMCA.
- The holding rests on the specific character of Google's SearchGuard as an enforced technical measure — it does not generalize to robots.txt or other precatory signals.
- Perplexity's state-law claims were dismissed; only the DMCA theory survived, so the case's ultimate reach is untested.
- Corroborating coverage was via secondary sources; the operative text is on CourtListener.

## Sources Consulted

- Primary: [CourtListener docket, Reddit, Inc. v. SerpApi, LLC, 1:25-cv-08736-PAE](https://www.courtlistener.com/docket/71720563/reddit-inc-v-serpapi-llc/)
- Corroboration: [Bloomberg Law, "Reddit Beats Bids to Drop Anti-Bot Scraping Claims" (2026-07-31)](https://news.bloomberglaw.com/ip-law/reddit-beats-bids-to-drop-anti-bot-scraping-claims)
- Corroboration: [Law.com / New York Law Journal, "Engelmayer Keeps Reddit DMCA Claims Alive Against SerpApi, Perplexity" (2026-07-31)](https://www.law.com/)


