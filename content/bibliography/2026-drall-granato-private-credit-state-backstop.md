---
type: Bibliography
title: "Private Credit's State Backstop: How Private Equity Socializes Risk Through Insurers"
description: "Law review article by Andrew Granato (UT Austin) and Pranjal Drall (Yale) showing how private equity converts life insurers into vehicles for opaque private credit, then socializes the downside through state guaranty funds whose assessments are largely offset by state premium-tax credits — a taxpayer backstop for the credit cycle that now funds AI data centers."
tags:
  - ai-economy
  - private-credit
  - private-equity
  - life-insurance
  - financial-regulation
  - systemic-risk
  - credit-risk
  - socialized-risk
  - bailout
status: stable
reference:
  short_title: "Private Credit's State Backstop"
  authors:
    - family: "Granato"
      given: "Andrew"
      affiliation: "University of Texas at Austin School of Law"
    - family: "Drall"
      given: "Pranjal"
      affiliation: "Yale University (JD-PhD candidate in Financial Economics)"
  year: 2026
  month: July
  publication_type: "working paper (law review article)"
  venue: "SSRN"
  ssrn_id: "7152239"
  url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7152239"
  doi: ""
  language: "en"
  access_date: "2026-08-14"
  access_notes: "SSRN landing page returned HTTP 403 on fetch; full text read from a pypdf text extraction of the locally downloaded PDF (65 pages)."
  keywords: ["Private credit", "Life insurance", "Private equity", "Guaranty funds", "Insurance regulation", "Financial stability", "Tax credits", "Shadow reinsurance"]
  jel: ["G22", "G23", "G28", "H25", "K22"]
---

# Executive Summary

Granato and Drall argue that private equity (PE) firms have acquired large life insurers and loaded their balance sheets with opaque, illiquid private credit — and that the one place the loss is definitively *not* allocated is the PE sponsor. Because life insurers do not pass through ordinary bankruptcy, an insolvent insurer's policyholder claims are paid by state guaranty funds, which "assess" surviving insurers in each state. In most states those assessments are then fully credited against state premium-tax liability, so the money ultimately comes out of state tax receipts. The result, the authors argue, is a system that socializes losses more sharply than banking's federal deposit insurance, embedded in an insolvency architecture far less equipped to handle a correlated wave of failures.

The article connects this to private credit's "submerged legal infrastructure": PE profits from the spread between promised policyholder returns and what the insurer's private-credit portfolio earns, plus asset-management fees paid to the PE parent's affiliates, while the downside is backstopped by competitors and taxpayers. The paper was subsequently the analytical basis for David Dayen's August 3, 2026 American Prospect article, "[The AI Bailout Could Be Baked Into the AI Bubble](https://prospect.org/2026/08/03/ai-bailout-could-be-baked-into-bubble-private-equity-life-insurers-loans/)", which applies the mechanism to the AI data-center lending boom.

# Core Contribution

**The mechanics of socialization.** Three regulatory design choices turn an ostensibly industry-funded safety net into a public backstop:

1. **Guaranty funds replace bankruptcy.** When a life insurer is liquidated, state guaranty funds pay covered claims — up to $300,000 of life-insurance benefits and $250,000 of present value of annuity benefits per insured under the NAIC Model Act — and then levy assessments on the *surviving* insurers in that state, apportioned by each insurer's share of premium volume in the relevant subaccount over the prior three years, capped at 2% of premium volume per year.
2. **Tax credits recycle the cost.** The NAIC Model Act's optional provision lets insurers credit 100% of assessments against state premium-tax liability over five years (20% per year). 34 states adopted this provision; ten states permit full or partial crediting on different timelines; only six provide no life-insurer assessment credit. Because premium taxes replace ordinary corporate income taxation for insurers, the credits effectively convert the assessments into state-revenue-funded transfers.
3. **The burden falls on prudently-run competitors.** Because assessments are based on premium volume, not risk contribution, conservatively-managed insurers (and ultimately taxpayers) finance the aggressive strategies of PE-owned competitors.

**What PE does with the insurers.** After an acquisition, a PE firm typically cuts the insurer's internal investment staff in half, and drops it altogether about a third of the time — while total investment expense stays flat because the savings are replaced by external asset-management fees, often paid to affiliates of the PE parent. The portfolio is then rotated toward private credit: in 2024, 49.5% of new PE-owned insurers' investment was in privately-placed instruments versus 13.9% for independent insurers. Post-acquisition increases in privately-placed assets run on the order of 6.4 to 7 percentage points, and privately-placed debt yields about 60 basis points more than comparable public corporate bonds.

**Scale of the transformation.** PE investment in life insurance increased tenfold between 2009 and 2014, from $23 billion to $250 billion. At the end of 2024, 139 life insurers were directly owned by PE firms, holding about $700 billion in assets, with another ~$300 billion in life insurers held as PE-fund portfolio companies — at least 8% of life-insurance-industry assets, with other studies putting the 2024 figure near 14% of life insurer general-account assets. Roughly 61% of PE-owned insurers' annuity-market-share increase is associated with growth in financial and ABS private-placement investments.

**The insolvency threshold.** A NAIC-collateralized-loan-obligation stress test finds PE-owned insurers are not likelier to lose money in benign or moderate scenarios, but in severe downturns a CLO tranche held by PE-owned insurers carries an expected loss rate 58 percentage points higher than a comparable tranche without such ownership, implying roughly 8.9 percentage points of additional portfolio loss — essentially wiping out the average life insurer's 9% equity ratio. Broader stress tests show most insurers can absorb private-credit default rates up to about 15%, but past that point insurers with $350–400 billion in general-account assets could be rendered insolvent — and the threshold falls as private credit grows as a share of assets.

# Relevance to This Repository

- It is the primary-source mechanism behind the [AI bailout evidence entry](../evidence/2026-ai-bailout-state-backstop-private-credit-life-insurers.md), which collects the verified numbers here and the AI-specific application from David Dayen's [American Prospect article](https://prospect.org/2026/08/03/ai-bailout-could-be-baked-into-bubble-private-equity-life-insurers-loans/).
- It names the institution that is the ultimate buyer of the off-balance-sheet AI financing documented in the [hidden AI debts evidence entry](../evidence/2026-nikkei-hidden-ai-debt-five-tech-giants.md): life insurers (via private credit and affiliated private-credit funds) are a major capital source for the project-finance/SPV structures the BIS calls "shadow borrowing," and the authors show the downside of that funding is state-backed.
- It extends the repository's treatment of the AI transformation from labor and productivity to financial stability: the AI buildout's debt is being channeled through a regulatory regime designed for a sleepy, AAA-heavy industry.

# What the Source Leaves Open

- The authors do not claim private-credit defaults are imminent; they argue the backstop's design makes the downside state-funded *if* losses materialize, and that the loss-absorbing threshold falls as private credit grows.
- The paper is agnostic about AI specifically — it analyzes the PE-life-insurer-private-credit model generally. The AI connection is drawn by Dayen's journalism, which maps the mechanism onto data-center lending and the 2026 AI-market rout.
- State-by-state assessment, coverage, and tax-credit design varies substantially; national figures aggregate heterogeneous rules.
- The empirical magnitudes (staff cuts, private-placement increases, yield premia) come from unpublished manuscripts and working papers cited in the article, not from new data the authors compute.
