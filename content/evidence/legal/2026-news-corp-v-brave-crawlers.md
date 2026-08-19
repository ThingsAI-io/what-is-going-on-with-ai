---
type: Evidence
schema: evidence.schema.json
title: "News Corp v. Brave: Publishers Allege Masked Crawling and AI Snippet Sales"
description: "In the Northern District of California (3:26-cv-04126), Dow Jones and NYP Holdings counterclaimed against Brave on July 21, 2026, alleging the browser company masks its crawlers to evade publishers' detection, bundles ~250-word 'extra-long' snippets (about five times the traditional excerpt) and 'summarizer' versions, and sells verbatim or near-verbatim content to AI companies through its 'Data for AI API' — while claiming the practice 'far more extensive' than fair use transforms."
tags:
  - copyright
  - scraping
  - litigation
  - web-search
  - browser
  - generative-ai
  - ai-intellectual-property
  - news-publishers
  - us-law
status: stable
source:
  url: "https://copyrightalliance.org/wp-content/uploads/2026/07/brave-vs-news-corp-reply-and-counterclaims.pdf"
  publisher: "United States District Court, Northern District of California"
  authors:
    - "Dow Jones & Company, Inc."
    - "NYP Holdings, Inc."
  document_type: "Reply and counterclaims (News Corp v. Brave, 3:26-cv-04126), filed 21 July 2026"
  issued: 2026-07-21
  accessed: 2026-08-11
  access_notes: "Counterclaim PDF hosted by Copyright Alliance. Brave filed a declaratory action on 25 June 2026; Dow Jones and NYP Holdings answered with counterclaims on 21 July 2026. Corroborated by Bloomberg Law coverage (2026-07-21)."
claims:
  - claim: "Masked crawling alleged"
    value: "Brave allegedly masks its crawlers so publishers cannot detect or block them, evading robots.txt and other access controls"
  - claim: "Snippet scale alleged"
    value: "~250-word 'Extra-alternate' snippets, about five times the traditional excerpt, and/or 'summarizer' versions, displayed in Brave Search"
  - claim: "AI data sales alleged"
    value: "Brave allegedly sells verbatim or near-verbatim copied content to AI companies via a 'Data for AI API' (recipients named in prior research include Perplexity, Cohere, Mistral)"
  - claim: "Legal claims"
    value: "Copyright infringement, contributory infringement, and vicarious liability; snippets allegedly 'far more extensive' than fair use transforms"
  - claim: "Procedural posture"
    value: "Brave filed a declaratory action 25 June 2026; Dow Jones and NYP Holdings counterclaimed 21 July 2026 in N.D. Cal. (3:26-cv-04126)"
---

# News Corp v. Brave: Publishers Allege Masked Crawling and AI Snippet Sales

## What This Is

In the Northern District of California (3:26-cv-04126), Dow Jones and NYP Holdings responded to Brave Software's June 25, 2026 declaratory action with counterclaims on July 21, 2026. The publishers allege that Brave's search engine **masks its crawlers** so that publishers cannot detect or block them, and that Brave bundles roughly **250-word "Extra-alternate" snippets** — about five times the length of a traditional excerpt — and/or "summarizer" versions of articles into its search results. They further allege that Brave **sells verbatim or near-verbatim copied content to AI companies** through a "Data for AI API."

## The Allegations

- **Masked crawling:** Brave allegedly disguises its crawler identity to evade robots.txt directives, rate limits, and other signals publishers use to block unwanted access.
- **Snippet scale:** ~250-word excerpts (or "summarizer" outputs) far exceed the ~50-word norm of "fair use" snippets, reproducing the substance of news articles in search results.
- **AI data resale:** Brave allegedly monetizes the scraped content by licensing it to AI companies (previous reporting named Perplexity, Cohere, and Mistral as customers of the Data for AI API).
- **Claims:** copyright infringement, contributory infringement, and vicarious liability. The publishers characterize the practice as "far more extensive" than the transformation fair use protects.

## Why It Matters for This Repository

This case is a distinctive data point in the repo's scraping evidence: the alleged infringer is not a model lab but a **search/browser intermediary that sits between publishers and the AI economy** — scraping content, reformatting it into longer snippets, and reselling it to AI companies. It generalizes the [Durand and Vergne](../../bibliography/2010-durand-vergne-organisation-pirate.md) boundary-testing motif beyond the labs: a layer of the AI supply chain that capitalizes on content without being a model developer.

It also sharpens the fair-use question the repo tracks. Where [Richner et al.](2026-richner-publishers-v-microsoft-openai.md) concerns training-data ingestion and [Ziff Davis](2025-ziff-davis-v-openai-robots-txt-dmca.md) concerns access-control law, *News Corp v. Brave* puts **snippet length and transformation** at the center — the exact trade-off the [Liang and Lu](../../bibliography/2026-liang-creative-ownership-ai.md) counterfactual criterion would assess (does the snippet essentially depend on the article?) and the search-result reproduction question the [productivity J-curve](../../frameworks/productivity-j-curve.md) framework frames as the state slowly resolving contested boundaries.

## Limits

- The counterclaims are **allegations**; none are adjudicated.
- The "Data for AI API" recipient list is based on prior reporting and named customers, not on the counterclaim text alone.
- Whether ~250-word snippets transform the works is a merits question not yet decided.
- Primary text via Copyright Alliance-hosted PDF; corroboration via Bloomberg Law.

## Sources Consulted

- Primary: [Reply and counterclaims, News Corp v. Brave, 3:26-cv-04126 (PDF via Copyright Alliance)](https://copyrightalliance.org/wp-content/uploads/2026/07/brave-vs-news-corp-reply-and-counterclaims.pdf)
- Corroboration: [Bloomberg Law, "News Corp accuses Brave of selling articles to AI companies" (2026-07-21)](https://news.bloomberglaw.com/)


