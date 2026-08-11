---
type: Evidence
title: "20 Million ChatGPT Logs: Judge Stein Affirms Discovery Order in In re OpenAI Copyright Litigation"
description: "Judge Sidney Stein (SDNY) affirmed magistrate orders compelling OpenAI to produce its entire 20 million de-identified ChatGPT conversation-log sample to news and class plaintiffs in the consolidated OpenAI copyright MDL — rejecting OpenAI's proposal to substitute a narrower search-term subset to protect user privacy."
tags:
  - copyright
  - litigation
  - discovery
  - generative-ai
  - ai-intellectual-property
  - ai-economy
  - privacy
status: stable
source:
  url: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.612697/gov.uscourts.nysd.612697.1087.0.pdf"
  publisher: "United States District Court, Southern District of New York"
  authors:
    - "Judge Sidney H. Stein"
  document_type: "Court order (In re OpenAI, Inc. Copyright Infringement Litigation, 25-md-3143 (SHS) (OTW), ECF No. 1021; case 1:25-cv-09904-SHS, ECF No. 39)"
  issued: 2026-01-05
  accessed: 2026-08-11
  access_notes: "Primary text from the CourtListener/PACER PDF of the January 5, 2026 order, cross-checked against a mirror hosted by Ars Technica (cdn.arstechnica.net) and the CourtListener docket for the MDL. Status details through March 9, 2026 from a CourtListener-hosted magistrate order. Bloomberg Law (2026-01-05) corroborates the ruling."
claims:
  - claim: "OpenAI must produce its full 20 million de-identified ChatGPT conversation-log sample"
    value: "Ordered for production to both News and Class plaintiffs; OpenAI's search-term subset proposal rejected"
  - claim: "Volume of ChatGPT logs OpenAI retains"
    value: "Tens of billions of conversation logs retained in the ordinary course of business"
  - claim: "News plaintiffs' original request (July 2025)"
    value: "120 million consumer ChatGPT logs; OpenAI countered with the 20 million sample (0.5% of preserved logs)"
  - claim: "Relevance rationale for the full sample"
    value: "Logs without reproductions of plaintiffs' works are still relevant to OpenAI's fair use defense (Magistrate Wang, Dkt. No. 896)"
  - claim: "Privacy balance struck by the court"
    value: "De-identification by OpenAI's custom tool plus the existing protective order sufficiently protect users' privacy; no requirement to choose the least burdensome discovery path"
  - claim: "MDL scope"
    value: "Consolidated pretrial proceedings for 16 copyright lawsuits against OpenAI in SDNY"
  - claim: "Subsequent expansion (March 9, 2026 status order)"
    value: "OpenAI also ordered to produce reservoirs of 78 million and 10 million logs; deposition of OpenAI designee Vinnie Monaco re training datasets ordered"
  - claim: "LibGen books referenced in discovery"
    value: "Test-file deposition limited to the 'nearly 100,000 LibGen books' downloaded in September 2019 (Feb 6, 2026 order)"
---

# 20 Million ChatGPT Logs: Judge Stein Affirms Discovery Order in In re OpenAI Copyright Litigation

## What This Is

On January 5, 2026, U.S. District Judge Sidney H. Stein denied OpenAI's objections and affirmed two discovery orders by Magistrate Judge Ona T. Wang requiring OpenAI to produce its **entire 20 million de-identified ChatGPT conversation-log sample** to the News Plaintiffs and the Class Plaintiffs in the consolidated *In re OpenAI, Inc. Copyright Infringement Litigation* (25-md-3143-SHS-OTW, S.D.N.Y.). OpenAI's alternative — running search terms across the sample to produce only conversations implicating plaintiffs' works, which it argued would better protect ChatGPT users' privacy — was rejected.

The orders give content owners and copyright researchers something no previous case supplied: a direct look at what users actually prompt and what large language models actually produce, inside the flagship model of the current AI wave.

## The Discovery Path

- OpenAI retains **tens of billions** of ChatGPT conversation logs in the ordinary course of business (Dkt. No. 40).
- In **July 2025**, News Plaintiffs moved to compel a sample of **120 million** consumer ChatGPT logs. OpenAI opposed, offering its own **20 million conversation sample** — 0.5% of its preserved logs — describing it as "surely more than enough to conduct appropriate analyses relevant to Plaintiff's claim," and noting the sample would be de-identified with OpenAI's custom de-identification tool.
- News Plaintiffs agreed to the 20 million sample on **August 11, 2025**.
- On **October 14, 2025**, OpenAI reversed course, saying it would not produce the entirety of the sample and would instead run search terms to identify conversations implicating News Plaintiffs' works.
- Judge Wang granted the motion to compel on **November 7, 2025** (Dkt. No. 734), denied reconsideration on **December 2, 2025** (Dkt. No. 896), and on **December 5, 2025** ordered production of the same sample to Class Plaintiffs as well (Dkt. No. 910).

## Why the Full Sample Matters

Judge Wang's core relevance finding, affirmed by Judge Stein: even **output logs that do not contain reproductions of News Plaintiffs' works may still be relevant to OpenAI's fair use defense** (Dkt. No. 896 at 6). The fair use inquiry turns on how the copyrighted material was actually used in training and generation — a question the full corpus of real prompts and outputs speaks to directly.

On privacy, the court held ChatGPT users' "sincere" privacy interests were one factor in the proportionality analysis, adequately protected by (1) reducing the total output logs from tens of billions to 20 million, (2) OpenAI's de-identification, and (3) the existing protective order. Judge Stein added that OpenAI identified no caselaw requiring the court to order the least burdensome discovery possible.

## Subsequent Developments in the Same Case

- **February 6, 2026 (Magistrate Wang):** OpenAI's motion for a protective order limiting the "LibGen test file" deposition was granted — the deposition is limited to the **"nearly 100,000 LibGen books" that "were downloaded in September 2019"** — but *without prejudice* to further discovery regarding the acquisition of LibGen books "or other pirated or torrented" materials. A motion to compel documents about a **Disney-OpenAI agreement** was held open. The motion to compel logs of outside-counsel communications about the deletion of "Books 1 and Books 2" was denied as moot.
- **March 9, 2026 (Magistrate Wang):** OpenAI was ordered to produce two additional log reservoirs of **78 million and 10 million logs**, to meet and confer on a de-identification protocol; the court also ordered "local production" of training datasets and found OpenAI designee **Vinnie Monaco** was not sufficiently prepared for his 30(b)(6) deposition on training datasets.

## Why It Matters for This Repository

This order is the evidentiary engine for the copyright-frontier question this repository tracks. It converts the abstract dispute over whether LLMs were trained on protected works — and whether outputs "reproduce" or "essentially depend on" them — into a concrete, court-ordered evidence base. The framework in [Liang and Lu, "Creative Ownership in the Age of AI"](../../bibliography/2026-liang-creative-ownership-ai.md) proposes a counterfactual infringement criterion (does the output depend on the work?) that needs exactly the kind of data these logs will supply. The order also surfaces the [Durand and Vergne](../../bibliography/2010-durand-vergne-organisation-pirate.md) motif of boundary-testing: OpenAI's own 2019 download of "nearly 100,000 LibGen books" is now a formally documented fact in the record of the central copyright dispute of the AI era.

It complements the [Nikkei evidence entry](../2026-nikkei-hidden-ai-debt-five-tech-giants.md) and the [Microsoft token-budget entry](../2026-microsoft-token-budgets-tokenmaxxing.md) in a different register: those document the capital and operating cost of AI scale; this one documents the legal exposure that scale has created.

## Limits

- The order concerns **discovery**, not liability. Nothing in it resolves whether OpenAI's training or generation infringes copyright.
- The Jan 5, 2026 order pertains to the MDL's pretrial record; the MDL's merits posture (including the briefing on OpenAI's fair-use defense concluded April 2, 2026) is outside this entry's scope.
- The 20 million logs have been ordered produced, not proven produced; the record of actual production and use in expert analysis is still unfolding.
- Privacy limits recognized in the order (de-identification, protective order) are themselves contested by OpenAI in objections; the reasonableness of de-identification is a technical matter not adjudicated here.

## Sources Consulted

- Primary: [In re OpenAI, Inc. Copyright Infringement Litigation, 25-md-3143 (SHS) (OTW), Order, ECF No. 1021 (S.D.N.Y. Jan 5, 2026)](https://storage.courtlistener.com/recap/gov.uscourts.nysd.612697/gov.uscourts.nysd.612697.1087.0.pdf) (mirror: [Ars Technica](https://cdn.arstechnica.net/wp-content/uploads/2026/01/NYT-v-OpenAI-Order-1-5-26.pdf))
- Corroboration: [Bloomberg Law, "OpenAI Must Turn Over 20 Million ChatGPT Logs, Judge Affirms" (2026-01-05)](https://news.bloomberglaw.com/ip-law/openai-must-turn-over-20-million-chatgpt-logs-judge-affirms)
- Subsequent orders: [Magistrate Wang order, Feb 6, 2026 (CourtListener ECF No. 1230)](https://www.courtlistener.com/docket/68117049/1230/the-new-york-times-company-v-microsoft-corporation/); [Magistrate Wang status order, Mar 9, 2026 (CourtListener)](https://storage.courtlistener.com/recap/gov.uscourts.nysd.640396/gov.uscourts.nysd.640396.1418.0_1.pdf)
- Docket: [In re OpenAI Copyright MDL, 25-md-03143 (CourtListener)](https://www.courtlistener.com/docket/68024915/608/alter-v-openai-inc/); [The New York Times Company v. Microsoft Corporation, 1:23-cv-11195 (CourtListener)](https://www.courtlistener.com/docket/68117049/the-new-york-times-company-v-microsoft-corporation/)
