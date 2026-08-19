---
type: Evidence
schema: evidence.schema.json
title: "Richner, MediaNews, and Ogden Newspapers v. Microsoft & OpenAI: ~400 Local Publishers Sue Over Training Data"
description: "On June 24, 2026, roughly 400 local newspapers — including Richner Communications, MediaNews Group (~150 titles), Ogden Newspapers (~40 titles), and 40+ independent publishers — filed suit in the Southern District of New York against Microsoft and OpenAI, alleging the 'systematic and willful theft of hundreds of thousands of copyrighted articles' (many paywalled), stripped copyright management information via the Dragnet and Newspaper extractors, and used plaintiffs' content in the C4 and WebText datasets that trained ChatGPT and Microsoft Copilot."
tags:
  - copyright
  - litigation
  - news-publishers
  - scraping
  - generative-ai
  - ai-intellectual-property
  - c4
  - webtext
  - dmca
  - us-law
status: stable
source:
  url: "https://www.medianama.com/wp-content/uploads/2026/06/Richner-publishers-openAI-complaint.pdf"
  publisher: "United States District Court, Southern District of New York (filed via Stueve Siegel Hanson LLP and Clarick Guerrieri Steinhardt LLP)"
  document_type: "Complaint (Richner Communications, Inc., et al. v. Microsoft Corporation and OpenAI, Inc., et al.), filed 24 June 2026"
  issued: 2026-06-24
  accessed: 2026-08-11
  access_notes: "Complaint PDF hosted via MediaNama. Corroborated by Editor & Publisher coverage (2026-06-24) and industry reporting. Figures on token counts and titles are as pleaded in the complaint."
claims:
  - claim: "Plaintiffs' scope"
    value: "~400 local newspapers across 30+ states: Richner Communications, MediaNews Group (~150 titles), Ogden Newspapers (~40 titles), and 40+ independent publishers"
  - claim: "Core allegation"
    value: "'Systematic and willful theft of hundreds of thousands of copyrighted articles,' including from paywalled sources, for training ChatGPT and Microsoft Copilot"
  - claim: "CMI stripping alleged"
    value: "Copyright management information stripped by the 'Dragnet' and 'Newspaper' extractors used to build training corpora"
  - claim: "Datasets named"
    value: "C4 (Colossal Clean Crawled Corpus) and WebText; complaint alleges more than 115 million tokens of plaintiffs' content in C4, with Ogden Newspapers alone contributing more than 71 million tokens"
  - claim: "Products"
    value: "ChatGPT (OpenAI) and Microsoft Copilot"
  - claim: "Relief sought"
    value: "Declaratory judgment and profits-based damages under copyright and the DMCA"
  - claim: "Counsel"
    value: "Stueve Siegel Hanson LLP and Clarick Guerrieri Steinhardt LLP"
---

# Richner, MediaNews, and Ogden Newspapers v. Microsoft & OpenAI: ~400 Local Publishers Sue Over Training Data

## What This Is

On June 24, 2026, roughly **400 local newspapers** across more than 30 states — led by Richner Communications, MediaNews Group (about 150 titles), Ogden Newspapers (about 40 titles), and more than 40 independent publishers — filed a copyright complaint in the Southern District of New York against Microsoft and OpenAI. The publishers allege the companies engaged in the **"systematic and willful theft of hundreds of thousands of copyrighted articles"** — much of it from paywalled sites — to build the training corpora behind ChatGPT and Microsoft Copilot.

## The Allegations in Numbers

- **~400 plaintiffs' titles** across 30+ states.
- **CMI stripping:** The complaint alleges the **Dragnet** and **Newspaper** extractors used to assemble training data stripped copyright management information (CMI) from the articles — a §1202 theory.
- **Datasets:** The **C4** (Colossal Clean Crawled Corpus) and **WebText** datasets are named; the complaint alleges more than **115 million tokens** of plaintiffs' content in C4, with **Ogden Newspapers alone contributing more than 71 million tokens**.
- **Relief:** Declaratory judgment and **profits-based damages** under copyright and the DMCA.

## Why It Matters for This Repository

This is the **news-publisher flank** of the repo's copyright evidence. Where [Ziff Davis v. OpenAI](2025-ziff-davis-v-openai-robots-txt-dmca.md) established that robots.txt gives no DMCA hook and [Reddit v. SerpApi](2026-reddit-v-serpapi-perplexity-dmca-scraping.md) showed that enforced technical controls can, the Richner complaint pushes a **CMI-stripping (§1202)** theory at scale: hundreds of small publishers whose articles were ingested and stripped of attribution/notice metadata. It parallels the [Doe v. GitHub](2026-doe-v-github-copilot-open-source-cmi.md) §1202 theory from the code side.

The token-count figures (115M+ in C4, 71M+ for Ogden alone) give a **concrete, pleaded measure of the training-data value at stake** — a number squarely in the [Liang and Lu](../../bibliography/2026-liang-creative-ownership-ai.md) framework about whether a given corpus makes individual works essential to generation. And the scale of the plaintiff group (a newspaper coalition) echoes the superadditivity result: coalitions of creators command more than the sum of individual claims.

It also extends the [Durand and Vergne](../../bibliography/2010-durand-vergne-organisation-pirate.md) motif: small local publishers are the interior of the creative space that the J-curve framework suggests loses protection first, yet here they are litigating at scale — the state's machinery being invoked to resolve the boundary.

## Limits

- This is a **complaint**; the allegations are unproven and subject to dismissal and merits adjudication.
- Token counts and title numbers are **as pleaded**, not yet verified by discovery.
- The §1202 CMI theory turns on the open question (also in Doe v. GitHub) whether stripped metadata in training extractors triggers DMCA liability.
- Corroboration via MediaNama-hosted PDF and E&P; primary docket not separately pinned at access.

## Sources Consulted

- Primary: [Complaint, Richner Communications, Inc., et al. v. Microsoft Corporation and OpenAI, Inc. (PDF, via MediaNama)](https://www.medianama.com/wp-content/uploads/2026/06/Richner-publishers-openAI-complaint.pdf)
- Corroboration: [Editor & Publisher, "~400 local newspapers sue Microsoft and OpenAI" (2026-06-24)](https://www.editorandpublisher.com/)


