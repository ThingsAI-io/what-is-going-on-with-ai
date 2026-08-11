---
type: Evidence
title: "Getty Images v. Stability AI: UK High Court Rules on AI Training, Output, and Infringing Articles"
description: "In Getty Images (US) Inc & Ors v Stability AI Ltd [2025] EWHC 2863 (Ch), Mrs Justice Joanna Smith handed down the first UK High Court judgment on generative AI training and output, holding Stability liable for trade mark infringement and passing off in limited instances while dismissing the copyright claims — the training-and-development and output claims were abandoned, and the secondary-infringement 'infringing article' claim failed because model weights never stored copies of the copyright works."
tags:
  - copyright
  - trademark
  - litigation
  - generative-ai
  - ai-intellectual-property
  - stable-diffusion
  - uk-law
  - ai-training-data
status: stable
source:
  url: "https://www.judiciary.uk/wp-content/uploads/2025/11/Getty-Images-v-Stability-AI.pdf"
  publisher: "Courts and Tribunals Judiciary (High Court of Justice, Business and Property Courts of England and Wales, Intellectual Property List (ChD))"
  authors:
    - "Mrs Justice Joanna Smith DBE"
  document_type: "High Court judgment ([2025] EWHC 2863 (Ch), Case No: IL-2023-000007)"
  issued: 2025-11-04
  accessed: 2026-08-11
  access_notes: "Full approved judgment PDF retrieved from judiciary.uk, including appendices A and B. Hearing dates 9-12, 17-20, 25-27 & 30 June 2025. Judgment handed down remotely 4 November 2025. BAILII mirror and ICLR case report used for cross-checking the disposition."
claims:
  - claim: "UK High Court first-instance ruling on a generative AI training and output case"
    value: "Getty Images (US) Inc & Ors v Stability AI Ltd [2025] EWHC 2863 (Ch), judgment 4 November 2025"
  - claim: "Allegation: Stability scraped millions of Getty Visual Assets without consent to train Stable Diffusion"
    value: "Training-and-Development, Output, and Database Rights claims abandoned by Getty before/at closing submissions"
  - claim: "Trade mark infringement and passing off outcome"
    value: "Succeeded in limited instances: iStock watermarks generated via v1.x Developer Platform and v1.4 DreamStudio infringed s.10(1) and s.10(2) TMA; one Getty Images watermark infringed s.10(2); no s.10(3) dilution; no passing off; no findings for SD XL or v1.6"
  - claim: "Secondary copyright infringement ('infringing article') outcome"
    value: "Claim failed: Stable Diffusion model weights never contained or stored copies of the Copyright Works, so the model was not an 'infringing copy' under s.27(3) CDPA 1988"
  - claim: "Number of photographers/contributors represented in Getty's case"
    value: "In excess of 50,000 photographers and content contributors claimed by Getty as exclusive licensors"
  - claim: "Sample works relied on at trial"
    value: "Eleven 'Sample Works' (A-K) used to establish subsistence and ownership of copyright"
  - claim: "Key doctrinal point"
    value: "A model whose weights never store or reproduce works can still generate images bearing protected signs attributable to the AI company's commercial communication"
---

# Getty Images v. Stability AI: UK High Court Rules on AI Training, Output, and Infringing Articles

## What This Is

On 4 November 2025, the High Court of England and Wales handed down the first substantive judgment in a generative-AI training dispute: *Getty Images (US) Inc & Ors v Stability AI Ltd* [2025] EWHC 2863 (Ch), decided by Mrs Justice Joanna Smith. The case concerned Stable Diffusion, Stability AI's open-source image-generation model, and Getty's allegation that Stability had scraped **millions of Visual Assets** from Getty Images' websites without consent to train the model.

The case narrowed dramatically before trial. Getty **abandoned** its Training-and-Development Claim (no evidence training occurred in the UK), its Output Claim (the alleged infringing prompts had been blocked, substantially achieving the relief sought), and the linked Database Rights Claim. What remained was trade mark infringement, passing off, and the Secondary Infringement Claim — the argument that Stable Diffusion itself was an "infringing article" under s.27(3) CDPA because making its model weights would have constituted infringement had it been done in the UK.

## The Claims as Decided

### Trade Mark Infringement and Passing Off (succeeded, in limited instances)

The court held Stability liable for trade mark infringement in narrowly defined configurations:

- **iStock watermarks** generated via the **v1.x Developer Platform** and **v1.4 via DreamStudio** infringed **s.10(1) and s.10(2)** of the Trade Marks Act 1994.
- A **Getty Images watermark** on the "First Japanese Temple Garden Image" infringed **s.10(2)** (confusion) though not s.10(1) (the signs relied upon were not shown identical).
- **s.10(3) dilution failed** — no reliable evidence of a proliferation of infringing signs or a change in economic behaviour.
- **Passing off was not established**.
- **No infringement was found** for SD XL or v1.6.

The key doctrinal move: Stability's role went beyond creating technical conditions for users' conduct. It trained or controlled the models, determined significant features of their training data, supplied the model weights or hosted inference, and used filtering systems — so the generation of a watermark was attributable to Stability's own commercial communication, and an average consumer could perceive a material link between the synthetic image, Stability, and Getty.

### Secondary Copyright Infringement (failed)

Getty argued Stable Diffusion was an "infringing copy" under s.27(3) CDPA because its creation would have infringed if done in the UK. The court accepted that an electronic copy stored in an intangible medium can be an "article" and an "infringing copy" — but held **Stable Diffusion was not one**. Its final model weights had **never contained or stored copies** of the Copyright Works. The fact that training involved reproductions of those works did not make the resulting model an infringing copy under s.27(3).

This is the first UK High Court authority on the "is the model itself an infringing copy?" question, and it resolved it in the AI company's favour while leaving the training-stage questions (fair dealing for text and data mining, etc.) for future cases.

## What the Judgment Establishes

- **Training and Development**: not decided on the merits (abandoned on evidence that training did not occur in the UK).
- **Model-as-article**: an AI model can in principle be an "article" for ss.22-23 CDPA, but its weights are not an "infringing copy" merely because training involved reproduction.
- **Attribution of output**: an AI company that trains, controls, supplies, or hosts the model can be treated as making the marks that appear in its outputs — responsibility is not displaced onto the end user.

## Why It Matters for This Repository

This judgment is the European copyright pillar of the repo's evidence on the [AI copyright frontier](2026-openai-copyright-md-l-chatgpt-logs-discovery.md). Where the SDNY MDL is producing discovery (20 million ChatGPT logs) that will test empirically whether and how models reproduce protected works, the High Court's judgment supplies the doctrinal counterpoint: even without findings of reproduction, trade mark law can reach the outputs an AI company's model is designed to generate.

The judgment engages directly with the question Liang and Lu formalize in [Creative Ownership in the Age of AI](../../bibliography/2026-liang-creative-ownership-ai.md): what counts as prohibited dependence on training data when the model never stores copies? Getty did not succeed on the "infringing article" theory, but it did establish that output-level attribution can stick to the model developer — the "outputs that could not have been generated without the work" logic applied at the trade-mark level rather than the copyright level.

The case is also a concrete instance of the [Durand and Vergne](../../bibliography/2010-durand-vergne-organisation-pirate.md) boundary-testing pattern: a firm built a model by mass extraction from a rights-holder's corpus; the state's courts then defined which of those practices constitute infringement. The fact that the scraping allegation was largely *not* adjudicated (abandoned or narrowed) is itself evidence for the "frontier is litigated slowly" reading of the [productivity J-curve](../../frameworks/productivity-j-curve.md): legal deterrence lags the technology's adoption curve.

## Limits

- This is a **first-instance** English High Court judgment; it is subject to appeal and does not bind other jurisdictions.
- The core copyright questions — whether *training* on scraped images infringes copyright, and whether outputs reproduce protected works — were **not decided**. Getty abandoned the training claim; the secondary-infringement claim failed on the "infringing article" point.
- The trade mark findings are **model-version and access-mechanism specific**; the court explicitly found the assessment "highly fact-sensitive."
- A parallel US case (Getty Images (US), Inc. v. Stability AI, Inc., N.D. Cal.) survived a motion to dismiss in April 2026 and remains pending; its outcome is not reflected here.

## Sources Consulted

- Primary: [Getty Images v Stability AI — approved judgment PDF (judiciary.uk)](https://www.judiciary.uk/wp-content/uploads/2025/11/Getty-Images-v-Stability-AI.pdf), [judgment landing page with appendices](https://www.judiciary.uk/judgments/getty-images-v-stability-ai/)
- Mirror: [BAILII, Getty Images (US) Inc & Ors v Stability AI Ltd [2025] EWHC 2863 (Ch)](http://mansfield.bailii.org/ew/cases/EWHC/Ch/2025/2863.pdf)
- Case report: [ICLR, [2025] WLR(D) 571](https://www.iclr.co.uk/document/2025037616/casereport_f8d8a72d-e02c-48f1-9245-337de492a1f3/html)
- Analysis: [zoomLaw summary of disposition](https://zoomlaw.co.uk/2025EWHC2863Ch.html)
