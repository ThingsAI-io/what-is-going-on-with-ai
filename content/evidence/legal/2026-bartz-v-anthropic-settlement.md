---
type: Evidence
schema: evidence.schema.json
title: "Bartz v. Anthropic: Court Grants Final Approval to $1.5 Billion Authors' Copyright Settlement"
description: "Judge Araceli Martínez-Olguín (N.D. Cal.) granted final approval to the $1.5 billion non-reversionary settlement fund resolving Bartz v. Anthropic PBC, the authors' class action over Anthropic's downloading of copyrighted books from LibGen and PiLiMi for model training; the court awarded roughly $101.6 million in attorneys' fees (about 6.8% of the fund) and approved an estimated per-work payout of about $3,000 — four times the statutory minimum."
tags:
  - copyright
  - litigation
  - settlement
  - generative-ai
  - ai-intellectual-property
  - class-action
  - licensing
  - anthropic
status: stable
source:
  url: "https://storage.courtlistener.com/recap/gov.uscourts.cand.434709/gov.uscourts.cand.434709.680.0_4.pdf"
  publisher: "United States District Court, Northern District of California"
  authors:
    - "Judge Araceli Martínez-Olguín"
  document_type: "Order granting final approval of class action settlement (Bartz v. Anthropic PBC, 3:24-cv-05417-AMO, ECF No. 680)"
  issued: 2026-07-20
  accessed: 2026-08-11
  access_notes: "Full order retrieved from CourtListener (RECAP). Cross-checked against the official settlement website (anthropiccopyrightsettlement.com/documents) and Bloomberg Law coverage (2026-07-20). The settlement was preliminarily approved by Judge William Alsup in September 2025 (Bartz, 2025 WL 2961371); the case was reassigned to Judge Martínez-Olguín after his retirement."
claims:
  - claim: "Settlement fund"
    value: "Non-reversionary Settlement Fund of $1.5 billion plus interest paid by Anthropic"
  - claim: "Estimated per-work payout"
    value: "Approximately $3,000 per work — four times the minimum statutory damages for ordinary copyright infringement ($750)"
  - claim: "Attorneys' fees awarded"
    value: "$101,561,111, nearly 6.8% of the settlement fund (requested $187.5 million, 12.5%)"
  - claim: "Expenses and cost reserve"
    value: "Reimbursement of $2,635,197.46 plus an $18,220,000 reserve for future expenses including the settlement administrator"
  - claim: "Service awards"
    value: "$15,000 for each of the three class representatives (total $45,000)"
  - claim: "Class definition (preliminary approval, Bartz, 2025 WL 2961371)"
    value: "Authors whose books were included in LibGen or PiLiMi versions that Anthropic downloaded and used in model training"
  - claim: "Final approval timeline"
    value: "Final approval granted July 20, 2026, after a hearing held May 14, 2026; opt-out deadline was February 9, 2026 (late opt-outs disallowed except for two individuals)"
  - claim: "Case history"
    value: "Filed August 19, 2024; the court had earlier ruled on a fair-use motion (Alsup) before preliminary approval in September 2025"
---

# Bartz v. Anthropic: Court Grants Final Approval to $1.5 Billion Authors' Copyright Settlement

## What This Is

On July 20, 2026, Judge Araceli Martínez-Olguín of the Northern District of California granted final approval to the class action settlement in *Bartz v. Anthropic PBC* (3:24-cv-05417-AMO). The settlement resolves the authors' copyright claims arising from Anthropic's **downloading of copyrighted books from the LibGen and PiLiMi repositories** and using them in training its models. It is the largest settlement of an AI-training copyright class action to date.

## The Deal in Numbers

- **$1.5 billion non-reversionary Settlement Fund**, plus interest paid by Anthropic or accrued in the fund.
- **Estimated per-work payment of approximately $3,000** — described by the court as "four times the minimum statutory damages amount for willful infringement" (and four times the $750 minimum for ordinary infringement, "the most common award in copyright cases").
- **Attorneys' fees:** the court awarded **$101,561,111**, nearly 6.8% of the fund — well below the $187.5 million (12.5%) requested. Class counsel were Susman Godfrey and Lieff Cabraser.
- **Expenses:** $2,635,197.46 reimbursed; $18,220,000 reserved for future costs, including the settlement administrator (JND Legal Administration).
- **Service awards:** $15,000 each to the three class representatives (Andrea Bartz, Charles Graeber, Kirk Wallace Johnson; MJ + KJ, Inc. as a corporate plaintiff), totaling $45,000.

## The Procedure

- The case was filed **August 19, 2024**.
- Judge William Alsup presided over the merits phase, including a ruling on the fair-use issues, before preliminarily approving the settlement in **September 2025** (*Bartz*, 2025 WL 2961371) and retiring; Judge Martínez-Olguín took over.
- The final-approval hearing was held **May 14, 2026**.
- The **opt-out deadline was February 9, 2026**; the court disallowed late opt-outs except for two individuals whose requests were allowed.
- The **claim deadline was March 30, 2026**.

## Why It Matters for This Repository

This settlement is the definitive market-priced answer to one of the repo's core questions: **what is a copyrighted training corpus actually worth to a frontier AI company?** The $1.5 billion figure — paid to resolve claims over books *known to have been downloaded* from shadow libraries — prices the training-data frontier at a scale comparable to a mid-tier AI research budget. The per-work figure (~$3,000) implicitly values the marginal book in a training corpus, a number relevant to the [Liang and Lu](../../bibliography/2026-liang-creative-ownership-ai.md) analysis of when individual works retain essentiality as corpora grow.

It also sharpens the [pirate-organization](../../bibliography/2010-durand-vergne-organisation-pirate.md) lens: this is the case in which the courts confirmed in a settlement record that a frontier lab's training corpus included "pirated or torrented" material — the same wording Magistrate Wang used in the [OpenAI MDL discovery order](2026-openai-copyright-md-l-chatgpt-logs-discovery.md) when limiting the LibGen test-file deposition to "nearly 100,000 LibGen books downloaded in September 2019."

The settlement's structure — per-work payments to authors, non-reversionary fund, service awards — is likely to be the template for the several remaining author and news class actions against other labs, and it coexists with the licensing deals the labs have signed since. Whether settlements of this scale deter or merely price the practice is exactly the "licensing settlement" data point this evidence theme is meant to collect.

## Limits

- Settlement approval is **not an adjudication of liability**; Anthropic admitted nothing about infringement, and the fair-use defense remains legally unresolved.
- The **effective class** and per-work amounts are estimates; actual distributions depend on claims rates and the plan of allocation.
- The order covers only the books on the defined **Works List** (LibGen/PiLiMi versions Anthropic downloaded); it does not address other corpora or future uses.
- The court's fee award is subject to a 10% holdback pending a post-distribution accounting.

## Sources Consulted

- Primary: [Order Granting Final Approval (ECF No. 680, July 20, 2026), CourtListener RECAP](https://storage.courtlistener.com/recap/gov.uscourts.cand.434709/gov.uscourts.cand.434709.680.0_4.pdf) (mirror: [Courthouse News](https://www.courthousenews.com/wp-content/uploads/2026/07/order-anthropic-authors.pdf); [Ars Technica](https://cdn.arstechnica.net/wp-content/uploads/2026/07/Bartz-v-Anthropic-Order-Approving-Settlement-7-20-26.pdf))
- Settlement site: [anthropiccopyrightsettlement.com — Important Documents](https://www.anthropiccopyrightsettlement.com/documents)
- Docket: [Bartz v. Anthropic PBC, 4:24-cv-05417 (CourtListener)](https://www.courtlistener.com/docket/69058235/bartz-v-anthropic-pbc/)
- Corroboration: [Bloomberg Law, "Anthropic, Authors' $1.5 Billion Deal Earns Final Approval" (2026-07-20)](https://news.bloomberglaw.com/ip-law/anthropic-authors-1-5-billion-deal-receives-final-approval)
- Case page: [N.D. Cal., Bartz et al v. Anthropic PBC](https://cand.uscourts.gov/cases-e-filing/cases/324-cv-05417-amo/bartz-et-al-v-anthropic-pbc)


