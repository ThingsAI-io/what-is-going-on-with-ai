---
type: Evidence
schema: evidence.schema.json
title: "Reddit v. Anthropic: State-Law Scraping Claims Remanded After Surviving Copyright Preemption"
description: "Judge Trina L. Thompson (N.D. Cal.) remanded Reddit's breach-of-contract, unjust-enrichment, trespass-to-chattels, tortious-interference, and UCL §17200 claims against Anthropic to San Francisco Superior Court (CGC-25-625892), holding the state-law theories are not completely preempted by copyright — keeping the scraping dispute over Reddit content used in Anthropic model training in state court."
tags:
  - litigation
  - scraping
  - preemption
  - breach-of-contract
  - tort
  - ai-training-data
  - generative-ai
  - us-law
  - state-law
  - reddit
status: stable
source:
  url: "https://www.courtlistener.com/docket/70704683/reddit-inc-v-anthropic-pbc/"
  publisher: "United States District Court, Northern District of California"
  authors:
    - "Judge Trina L. Thompson"
  document_type: "Order granting remand (Reddit, Inc. v. Anthropic PBC, 3:25-cv-05643-TLT, remanded from SF Superior Court CGC-25-625892)"
  issued: 2026-03-28
  accessed: 2026-08-11
  access_notes: "Primary docket via CourtListener (order doc 60 filed 3/28/2026; remand mailed 3/30/2026). Corroborated by Bloomberg Law (2026-03-31), a Loeb & Loeb client alert, and the fiund.com AI lawsuits tracker. Federal docket closed 5/29/2026."
claims:
  - claim: "Remand granted"
    value: "Judge Thompson granted Reddit's motion to remand its state-law claims to San Francisco Superior Court (order 3/28/2026; remand mailed 3/30/2026)"
  - claim: "Claims not preempted"
    value: "Breach of contract, unjust enrichment, trespass to chattels, tortious interference, and UCL §17200 claims are not completely preempted by the Copyright Act"
  - claim: "State-court posture after remand"
    value: "Case CGC-25-625892 continues in state court before Judge Joseph M. Quinn; Anthropic filed a demurrer, opposed by Reddit (no ruling as of 7/25/2026)"
  - claim: "Filing history"
    value: "Filed in state court 6/4/2025; removed to federal court 7/3/2025 as 3:25-cv-05643"
  - claim: "Subject matter"
    value: "Reddit alleges Anthropic scraped/used Reddit content for model training without authorization and profited from it"
---

# Reddit v. Anthropic: State-Law Scraping Claims Remanded After Surviving Copyright Preemption

## What This Is

In *Reddit, Inc. v. Anthropic PBC* (filed in San Francisco Superior Court as CGC-25-625892, removed to the Northern District of California as 3:25-cv-05643), Judge Trina L. Thompson granted Reddit's motion to remand on **March 28, 2026**. The case concerns Reddit's allegation that Anthropic used Reddit content to train its models without authorization. The federal court held that Reddit's **breach-of-contract, unjust-enrichment, trespass-to-chattels, tortious-interference, and Unfair Competition Law (UCL §17200)** claims are **not completely preempted by the federal Copyright Act**, and sent the case back to San Francisco Superior Court.

## Why the Ruling Matters

Complete-preemption doctrine would return the copyright-preemption battle to the AI companies' advantage if Reddit's state claims merely repackaged copyright. The court concluded they did not: the contract, trespass, and UCL theories each carry obligations and harms distinct from copyright infringement. The consequence is procedural but significant — the dispute will proceed in **state court, on state-law theories**, outside the federal copyright framework where the AI labs have won several early rounds (see [Bartz v. Anthropic](2026-bartz-v-anthropic-settlement.md) and the fair-use rulings distinguished in [GEMA v. Suno](2026-gema-v-suno-music-verdict.md)).

This makes *Reddit v. Anthropic* the state-law counterpart to [Reddit v. SerpApi](2026-reddit-v-serpapi-perplexity-dmca-scraping.md): both involve Reddit defending its corpus against AI-driven extraction, but this case runs on contract and tort theories rather than the DMCA.

## Why It Matters for This Repository

The case is a concrete instance of the [Durand and Vergne](../../bibliography/2010-durand-vergne-organisation-pirate.md) boundary-testing motif: Reddit, a platform whose content became a training corpus, is using contract and property theories to draw boundaries around what the AI economy may take. It also refines the [Liang and Lu](../../bibliography/2026-liang-creative-ownership-ai.md) picture: state-law theories can bite regardless of whether outputs "essentially depend" on particular works, shifting legal weight onto access, authorization, and contract breach rather than output similarity. The remand illustrates the [productivity J-curve](../../frameworks/productivity-j-curve.md) finding that legal structure lags technical adoption — in this case, the labs enjoyed a general-defendability posture in copyright that the state-law route partially bypasses.

## Limits

- Remand is a **procedural ruling**; it resolves preemption of these claims, not their merits.
- The state-court litigation (Anthropic's demurrer) was still pending as of the access date.
- The ruling covers the pleaded state-law claims only; it does not address copyright claims or other theories.

## Sources Consulted

- Primary: [CourtListener docket, Reddit, Inc. v. Anthropic PBC, 3:25-cv-05643 (order doc 60, 3/28/2026)](https://www.courtlistener.com/docket/70704683/reddit-inc-v-anthropic-pbc/)
- Corroboration: [Bloomberg Law on the remand (2026-03-31)](https://news.bloomberglaw.com/); [fiund.com AI lawsuits tracker](https://www.fiund.com/)

