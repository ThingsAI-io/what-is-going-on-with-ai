---
type: Evidence
schema: evidence.schema.json
title: "Zuckerberg's 'The Future is for Everyone': An AI Policy Manifesto and Its Litigation Blindspot"
description: "Mark Zuckerberg's ~6,500-word open letter (Aug 10, 2026) framed 'personal superintelligence for everyone' as the answer to AI risk, asked the US to relax training-data and distillation restrictions on the grounds that 'you can learn from anything you can observe,' and announced that most of Meta's $145bn 2026 capex goes to data centers — while never naming the copyrighted-training-data litigation (Kadrey v. Meta, LibGen) surrounding its models."
tags:
  - ai-governance
  - ai-policy
  - open-source
  - open-weights
  - superintelligence
  - ai-economy
  - ai-infrastructure
  - capital-expenditure
  - intellectual-property
  - copyright
status: stable
source:
  url: "https://about.fb.com/news/2026/08/the-future-is-for-everyone/"
  publisher: "Meta (Newsroom)"
  author: "Mark Zuckerberg"
  document_type: "Open letter / corporate policy manifesto"
  published: 2026-08-10
  accessed: 2026-08-18
  access_notes: "Full text read from the about.fb.com mirror (meta.com/thefutureisforeveryone/ returned HTTP 400 on fetch). Length (~6,500 words), 'superintelligence' count (60), and co-released model names cross-checked against The Verge, Guardian, CNN, and Ars Technica coverage of the same date."
claims:
  - claim: "Essay title and author"
    value: "'The Future is for Everyone' by Mark Zuckerberg, published on Meta's site August 10, 2026"
  - claim: "Length"
    value: "~6,500 words (Guardian and The Verge)"
  - claim: "Use of the term 'superintelligence'"
    value: "60 times (Guardian count)"
  - claim: "Core policy position"
    value: "Distribute superintelligence broadly to individuals rather than centralizing it in institutions; 'skeptical of any proposals that lead to centralizing superintelligence'"
  - claim: "Alignment definition"
    value: "'Helping each person achieve their goals, not ours' -- personalized/individual alignment, rejecting the view that a single aligned superintelligence can be 'benevolent to everyone'"
  - claim: "Training-data and distillation position"
    value: "Meta and the US should 'rethink our policies' on distillation and data use; 'the principle that you can learn from anything you can observe' should be protected; US restrictions on training data put American open-source models at a competitive disadvantage"
  - claim: "Job-displacement claim"
    value: "Predicts 'more employment over time rather than less'; company sizes may shrink but job counts grow; 'invention, not automation, will be the greatest contribution of superintelligence'"
  - claim: "Meta 2026 capital spending"
    value: "$145 billion, largely to build data centers (stated in the essay; per CBS)"
  - claim: "Community investment fund"
    value: "'Future is for Everyone Fund,' $1 billion according to The Wall Street Journal"
  - claim: "Data-center community promises"
    value: "water-positive by 2030 (200% of water used restored in high-stress areas); America's Workforce Academy for free skilled-trade training; example of $50,000 teacher bonuses in Richland Parish, Louisiana"
  - claim: "Access pledge"
    value: "Free versions of AI tools for 'billions of people'; dynamic auction so 'everyone gets the lowest price possible' for compute"
  - claim: "Privacy pledge"
    value: "A 'fully private mode' for personal agents 'where even Meta cannot see or grant access to your information'"
  - claim: "Internal governance proposal"
    value: "Meta's independent board will approve safety criteria for model releases; encourages other frontier labs to adopt similar structures"
  - claim: "Government collaboration proposal"
    value: "Frontier labs should share intermediate training checkpoints of new models with the government for hardening instead of waiting to completion; labs should work with law enforcement"
  - claim: "Open-weight models released the same day"
    value: "Muse Glimmer (open-weight, positioned for on-device use) and an open-weight rendition of Muse Spark 1.2; Meta says it will 'resume releasing some open source models soon'"
  - claim: "Mentions of the pending copyright/training-data litigation"
    value: "None. The letter does not name Kadrey v. Meta Platforms, its shadow-library (LibGen) training-data allegations, or any pending AI copyright case"
  - claim: "Prior month's co-signed industry letter"
    value: "July 24, 2026 'Open Weights and American AI Leadership' open letter co-signed by Meta, Nvidia, Hugging Face, Mistral, Mozilla, OpenAI and others, defending open-weight models and distillation while carving out 'unlawful efforts to extract value from closed models'"
---

# Zuckerberg's "The Future is for Everyone"

## What This Is

On August 10, 2026, Meta CEO Mark Zuckerberg published "[The Future is for Everyone](https://about.fb.com/news/2026/08/the-future-is-for-everyone/)" — a ~6,500-word open letter that doubles as a corporate policy manifesto. Its headline thesis: AI risk is best addressed not by centralizing "superintelligence" in a few labs (which he argues makes safety worse by concentrating power) but by distributing it widely as "personal superintelligence" that is aligned to each individual's goals rather than to a company's. The word "superintelligence" appears 60 times. The same day, Meta released open-weight models (Muse Glimmer, plus an open-weight rendition of Muse Spark 1.2) and the essay announced that most of Meta's **$145 billion 2026 capital budget** goes to data centers.

The letter is best understood as a **market-positioning document**: Meta owns the leading open-weight/Llama franchise, a giant ad business, and a $145bn data-center buildout, so its preferred policy world is one where open models, cheap personal agents, and minimal training-data restrictions are the American strategy. The entry records its claims as claims, separates the letter's assertions from verified facts, and flags what the essay conspicuously does not address: the pending copyright litigation over how Meta obtained its training data.

## The Policy Manifesto, Section by Section

**The core argument.** "Rather than centralizing superintelligence, we should distribute it widely and give every person the ability to direct it." The safety framing is a balance-of-power argument: decentralized agents that "check and balance each other" are safer than any "singular superintelligence," because no model can be aligned with everyone's competing values at once. Meta positions itself as the only lab building "for individuals" — "Most other labs are focused on building AI for companies, governments, or other institutions."

**Jobs.** Zuckerberg dismisses labor-doom framing — "I do not understand why anyone who believes that AI will eliminate most jobs and much of humanity's relevance would rush to build that future" — and predicts "more employment over time rather than less," with company sizes shrinking but firm counts rising.

**Infrastructure.** The letter responds to the PR pressure around data-center buildouts ([documented in this repo in the Nikkei entry](finance-of-ai/2026-nikkei-hidden-ai-debt-five-tech-giants.md) and the [Microsoft capex entry](finance-of-ai/2026-microsoft-fy26-q4-earnings.md)) with a "community compact": a $1bn "Future is For Everyone Fund," water-positive operation by 2030, free skilled-trade training via "America's Workforce Academy," and the example of $50,000 teacher bonuses in Richland Parish, Louisiana.

**Policy asks.** The letter urges (a) continued cooperation between labs and government, including sharing intermediate training checkpoints for hardening; (b) skepticism of any release-slowing regulation — "Any policy that slows American model releases — even by a month — could add significant risk to American leadership"; and (c) **reducing US restrictions on training data and distillation**. On the last point the letter is explicit:

> "The ability for models to learn from other models is an important principle of how the open source ecosystem works. All AI models are derived from human knowledge. Some have tried to frame distillation as harmful, but I think it is important to protect the principle that **you can learn from anything you can observe**."

**Internal governance.** Meta commits to giving its independent board power to approve release-safety criteria, presented as an alternative to direct CEO discretion over model launches.

## The Litigation It Reframes But Never Names

The user-flagged connection is real: the letter's training-data section is the public, principled version of the position Meta takes in court, but the essay **never mentions a lawsuit, a copyright claim, or a shadow library** (there are zero matches for "lawsuit," "copyright," "litigation," or "pirat*" in the text). That silence is analytically significant:

- In **Kadrey v. Meta Platforms** (N.D. Cal., case 3:23-cv-03417), authors allege Meta trained Llama partly on **LibGen** — "shadow libraries" of pirated books — obtained by **torrenting**. WIRED (Jan 2025) reported unredacted exhibits showing internal emails discussing training on LibGen while worrying about "media coverage suggesting we have used a dataset we know to be pirated," and steps to strip copyright headers, ISBNs, and author metadata. One email cites approval of LibGen for Llama 3 after escalation to "MZ."
- In **June 2025**, Judge Chhabria granted Meta summary judgment that *reproducing* the books for training was **fair use**, but left open the separate claim that Meta's *distribution* of the works over the torrent network was infringing. So the acquisition itself — the mechanism behind "learn from anything you can observe" — remains live, and is precisely the part the essay's ideal ("protect the principle") would preclude any remedy for.
- The pattern matches how the [boundary-testing framework](../frameworks/boundary-testing.md) describes AI firms: "they appropriate broadly shared knowledge, build business value from proprietary or poorly consented data, and then enclose the result inside a new regime of control." Here the enclosure is doubled — not just the model, but the *policy argument* that turns the contested appropriation into a patriotic openness principle.
- The letter's distillation defense also lines up with the July 24, 2026 "[Open Weights and American AI Leadership](https://arstechnica.com/ai/2026/08/with-new-open-models-meta-pitches-another-reboot-of-its-struggling-ai-strategy/)" letter (co-signed by Meta, Nvidia, Hugging Face, Mistral, Mozilla, OpenAI) — which itself carved out "unlawful efforts to extract value from closed models," an acknowledgment that the same labs are pursuing both freedom-to-train and protection-from-distillation.

The [Sanders letter](legal/2026-sanders-letter-ai-ceos-pause-development.md) sent the same day (Aug 10, 2026) to Zuckerberg, Altman, and Amodei draws the opposite boundary — that the labs have already crossed their own safety thresholds. The two documents, published hours apart, stake out the two poles of the current frontier-governance fight.

## Verified Facts vs. Assertions

**Verified independently:**
- Publication date and venue (Meta Newsroom, Aug 10, 2026); ~6,500 words; "superintelligence" × 60 (Guardian, Verge).
- Same-day open-weight releases: Muse Glimmer and open-weight Muse Spark 1.2 (CBS/WSJ/Vogue reporting).
- $145bn 2026 capex "largely to build data centers" (stated in the essay, echoed by CBS).
- $1bn community fund (WSJ figure cited by CBS).

**Assertions to treat as claims, not findings:**
- "More employment over time rather than less"; jobs created > jobs displaced.
- Free access for "billions of people"; the dynamic-auction pricing guarantee.
- The fully-private mode ("where even Meta cannot see") — a design aspiration, and one in tension with the essay's simultaneous request that frontier labs give the government intermediate checkpoints.
- Water-positive by 2030 and 200% restoration in high-stress watersheds.
- "Most other labs" serve institutions, not individuals — a competitive characterization, not a measurement.

## Interpretation

Read alongside the repo's evidence base, the optimistic core of the letter is contradicted by the entry-level data: the [cross-country labor evidence](2026-klein-teeselink-carey-ai-automation-expertise.md) shows AI exposure cutting job postings 6.2% per standard deviation, and the [Brynjolfsson et al.](../bibliography/2025-brynjolfsson-generative-ai-at-work.md) and [Massenkoff & McCrory](../bibliography/2026-massenkoff-labor-market-impacts-ai.md) findings on realized productivity gains are far more modest than "invention superpowers." On the financing side, the letter celebrates the data-center buildout the [Nikkei investigation](finance-of-ai/2026-nikkei-hidden-ai-debt-five-tech-giants.md) documents as ~$1.65tn of off-balance-sheet AI obligations, and whose downside is state-backed per the [private-credit state-backstop entry](finance-of-ai/2026-ai-bailout-state-backstop-private-credit-life-insurers.md).

The letter is best treated as evidence of **how the frontier is arguing about itself**, not as evidence about the future it predicts: a founder-controlled company asking for less training-data regulation and more government trust on checkpoints, while simultaneously proposing board oversight as the answer to concentration-of-power concerns it refuses to accept. Its [copyright-theory counterpart](../bibliography/2026-liang-creative-ownership-ai.md) formalizes why "you can learn from anything you can observe" is contested rather than settled: creative-ownership rules in generative domains depend on exactly the closure and domain-structure questions the courts are now deciding in cases like Kadrey.

## Limits

- **Self-interested source.** The letter is corporate advocacy by the CEO of the company that owns the leading open-weight franchise and the $145bn buildout; its "balance of power favors individuals" framing aligns precisely with Meta's business model. It claims no independent verification for its labor, pricing, or privacy promises.
- **The essay never discusses the litigation.** One cannot cite the letter for Meta's position on the lawsuits; only for the general principles it advances. The Kadrey/LibGen connection in this entry is context supplied by WIRED, court filings, and the fair-use decision — not by the letter.
- **"Open source" vs "open weights."** As multiple analysts note, open-weight models are not open source in the strict sense; the letter's "open source ecosystem" rhetoric outruns the technical reality of its releases.
- **Contemporaneous contradictions.** The board-governance proposal sits uneasily beside founder control and the request for government checkpoints; the "fully private" pledge is unverifiable and sits alongside the essay's own framework of pervasive government-lab collaboration.

