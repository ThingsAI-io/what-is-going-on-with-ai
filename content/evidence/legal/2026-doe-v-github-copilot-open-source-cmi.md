---
type: Evidence
title: "Doe v. GitHub (Copilot): Ninth Circuit Weighs Whether §1202 Requires Identical Copies"
description: "In the Copilot class action (Doe et al. v. GitHub, Inc., et al., 4:22-cv-06823-JST), the Ninth Circuit heard oral argument on February 11, 2026 over whether DMCA §1202(b) liability for stripped copyright management information requires 'identical copies' of source code — a question that will decide whether GitHub, OpenAI, and Microsoft can be liable for Copilot reproducing public-repository code without attribution, notices, or licenses."
tags:
  - copyright
  - dmca
  - litigation
  - open-source
  - code-generation
  - generative-ai
  - ai-intellectual-property
  - github-copilot
  - us-law
status: stable
source:
  url: "https://www.courtlistener.com/docket/69495342/doe-et-al-v-github-inc-et-al/"
  publisher: "United States District Court, Northern District of California (case on appeal to the Ninth Circuit, No. 24-7700)"
  document_type: "Class action (Doe et al. v. GitHub, Inc., et al., 4:22-cv-06823-JST); Ninth Circuit appeal argued 11 February 2026"
  issued: 2026-02-11
  accessed: 2026-08-11
  access_notes: "Primary docket via CourtListener. Case summary via fiund.com and analysis by Shuji Sado (2025-11-27) corroborate the procedural posture and the §1202 question presented. The identical-copies question is the central issue on appeal."
claims:
  - claim: "Appeal argued"
    value: "Ninth Circuit heard oral argument in Doe et al. v. GitHub, Inc., et al., No. 24-7700, on 11 February 2026"
  - claim: "Central question"
    value: "Whether DMCA §1202(b) liability for removed copyright management information requires 'identical copies' of the protected code that Copilot reproduces"
  - claim: "Underlying conduct"
    value: "Copilot trained on public GitHub repositories and reproduces code without attribution, notices, or licenses (including MIT and Apache-2.0 licensed code)"
  - claim: "Additional claims"
    value: "Open-source license breach and unjust enrichment claims alongside the DMCA §1202 claims"
  - claim: "Parties"
    value: "Developer class plaintiffs vs. GitHub, OpenAI, and Microsoft"
---

# Doe v. GitHub (Copilot): Ninth Circuit Weighs Whether §1202 Requires Identical Copies

## What This Is

*Doe et al. v. GitHub, Inc., et al.* (4:22-cv-06823-JST, N.D. Cal.) is the class action over GitHub Copilot's training on public repositories and its generation of code without attribution, copyright notices, or license terms. On appeal (Ninth Circuit No. 24-7700), oral argument was heard on **February 11, 2026**. The pivotal question: whether DMCA §1202(b) liability for stripping copyright management information (CMI) — here, the notices and license headers in training data — requires that Copilot reproduce **"identical copies"** of the protected code.

## The Stakes

- **If the identical-copy requirement stands**, §1202 claims over AI-generated code largely collapse, because Copilot rarely emits byte-for-byte copies even when it reproduces the substance of a licensed file.
- **If it does not**, AI code generators face liability for outputting code that is near-identical or derived but not exact — the same CMI-stripping theory the [Richner publishers](2026-richner-publishers-v-microsoft-openai.md) advance against Microsoft and OpenAI for news articles.
- The plaintiffs also pursue **open-source license breach** and **unjust enrichment** claims, which turn on the open-source licensing obligations (MIT, Apache-2.0) that Copilot's outputs allegedly bypass.

## Why It Matters for This Repository

This case is the **code-side companion** to the repo's §1202 evidence. The identical-copies question is the doctrinal hinge for whether the DMCA reaches the AI training-and-output pipeline at all: [Richner](2026-richner-publishers-v-microsoft-openai.md) tests it for news text, and *Doe v. GitHub* tests it for source code. The [Ziff Davis](2025-ziff-davis-v-openai-robots-txt-dmca.md) and [Reddit v. SerpApi](2026-reddit-v-serpapi-perplexity-dmca-scraping.md) rulings draw the §1201 (access control) side; this case draws the §1202 (CMI) side.

For the repo's [Liang and Lu](../../bibliography/2026-liang-creative-ownership-ai.md) framing, the case is the empirical test of code as a heavy-tailed creative domain: open-source repositories include frontier works (novel algorithms, distinctive libraries) that the theory predicts retain essentiality, and the class action asserts exactly that — that specific licensed code remains essential to Copilot's outputs. The open-source license-breach claims also connect to the [productivity J-curve](../../frameworks/productivity-j-curve.md): a whole development workflow (vibe coding) raced ahead of the licensing and attribution regime, and the state's courts are now being asked to catch up.

## Limits

- Oral argument is **not a decision**; the Ninth Circuit's ruling is pending.
- The identical-copies question is narrow; even a plaintiff-friendly ruling may not reach other §1202 elements.
- CMI-stripping in training extractors is technically distinct from CMI stripping in final outputs — the court's framing will matter.
- The case summary relies on secondary analyses (fiund.com, Sado) of the docket; primary text via CourtListener.

## Sources Consulted

- Primary: [CourtListener docket, Doe et al. v. GitHub, Inc., et al., 4:22-cv-06823-JST](https://www.courtlistener.com/docket/69495342/doe-et-al-v-github-inc-et-al/)
- Case summary: [fiund.com, Copilot class action summary](https://www.fiund.com/)
- Analysis: [Shuji Sado, analysis of Doe v. GitHub §1202 question (2025-11-27)](https://www.sado.ooo/)
