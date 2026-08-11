---
type: Evidence
title: "Amazon v. Perplexity (9th Cir.): The User, Not the AI Agent, 'Accesses' a Website Under the CFAA"
description: "A Ninth Circuit panel vacated the preliminary injunction Amazon obtained against Perplexity's agentic browser tool, holding that when a user directs the AI agent to act on Amazon.com, it is the user — not Perplexity — who 'accesses' Amazon's computers for purposes of the Computer Fraud and Abuse Act and California's CDAFA analogue, a first circuit-level ruling on agentic AI and anti-hacking liability."
tags:
  - litigation
  - cfaa
  - agentic-ai
  - scraping
  - web-browsing
  - ai-intellectual-property
  - us-law
  - preliminary-injunction
status: stable
source:
  url: "https://cdn.ca9.uscourts.gov/datastore/opinions/2026/08/04/26-1444.pdf"
  publisher: "United States Court of Appeals for the Ninth Circuit"
  authors:
    - "Judge Milan D. Smith Jr."
  document_type: "Opinion (Amazon.com Services, LLC v. Perplexity AI, Inc., No. 26-1444, D.C. No. 3:25-cv-09514-MMC)"
  issued: 2026-08-04
  accessed: 2026-08-11
  access_notes: "Full opinion PDF retrieved from the Ninth Circuit's official CDN. Corroborated by Cooley, Ropes & Gray, and WSGR client alerts and Bloomberg Law (2026-08-04/06) and Eric Goldman's Technology & Marketing Law Blog."
claims:
  - claim: "Preliminary injunction vacated"
    value: "Ninth Circuit vacated the district court's March 9, 2026 preliminary injunction barring Perplexity's agentic browser tool from using Amazon.com, and remanded"
  - claim: "Core holding on 'access'"
    value: "For CFAA purposes it is 'the user who accessed Amazon's computers' with the help of Perplexity's AI 'Assistant' — the CFAA contemplates access by a person, and the AI tool is not a person"
  - claim: "Architecture determining the outcome"
    value: "Perplexity's Assistant takes screenshots on the user's own machine and returns navigation instructions; 'Perplexity itself does not directly communicate with Amazon's servers'"
  - claim: "CDAFA claim fails for same reason"
    value: "Though the CDAFA (Cal. Penal Code §502) defines 'access' more broadly, the focus remains on the person accessing; the user, not Perplexity, accessed"
  - claim: "Equitable factors"
    value: "Balance of harms, public interest, and irreparable-harm analysis all favored Perplexity; an injunction against conduct that likely does not violate the statutes would not serve the public interest"
  - claim: "Scope deliberately narrow"
    value: "Panel: 'We do not establish a new legal regime governing agentic AI'; holding limited to the CFAA/CDAFA 'access' inquiry on the present record, contract and tort theories expressly left open"
  - claim: "District court posture"
    value: "Judge Maxine M. Chesney (N.D. Cal.) granted the PI on March 9, 2026; Amazon filed suit November 2025 (3:25-cv-09514)"
---

# Amazon v. Perplexity (9th Cir.): The User, Not the AI Agent, 'Accesses' a Website Under the CFAA

## What This Is

On August 4, 2026, a Ninth Circuit panel vacated the preliminary injunction that Amazon.com Services, LLC had obtained against Perplexity AI over Perplexity's agentic web-browser tool (the "Assistant," part of its Comet browser). Amazon had sued under the federal **Computer Fraud and Abuse Act (CFAA)** and California's **Comprehensive Computer Data Access and Fraud Act (CDAFA)** after the Assistant — which can browse and attempt purchases on a user's Amazon account — acted without Amazon's authorization. The panel held Amazon was **unlikely to succeed on the merits** because, on the facts alleged, it was the *user* who "accessed" Amazon's computers with the Assistant as a tool, not Perplexity itself.

## The Access Question

The decisive fact was the tool's **architecture**: when a user directs the Assistant to shop on Amazon, it takes screenshots of the browser on the user's own machine, sends them to Perplexity's servers, and receives back navigation instructions. **"Perplexity itself does not directly communicate with Amazon's servers."** The panel concluded the CFAA "contemplates access by a person," and "[h]owever advanced the Assistant currently is, it is a tool, not a person for statutory purposes." It distinguished *Facebook v. Power Ventures*, where the defendant's own systems communicated directly with the platform.

The CDAFA claim failed for the same reason: although the CDAFA defines "access" more broadly than the CFAA, the inquiry still centers on "the person accessing or causing the access," and here that person is the user.

## Why It Matters for This Repository

This is the first **circuit-level ruling on agentic AI and anti-hacking liability**, and it cuts against the dominant scrapers-beware reading of the AI data frontier. Where [Reddit v. SerpApi](2026-reddit-v-serpapi-perplexity-dmca-scraping.md) held that circumventing an enforced technical control (Google's SearchGuard) can violate the DMCA, and [Reddit v. Anthropic](2026-reddit-v-anthropic-scraping-preemption.md) kept state-law scraping claims alive, *Amazon v. Perplexity* shows that the federal anti-hacking statutes do not automatically reach a browser-based AI agent that piggybacks on the user's own authenticated access. The result: websites policing AI agents are pushed toward DMCA §1201, contract, and tort theories rather than the CFAA.

It is a direct illustration of the [productivity J-curve](../../frameworks/productivity-j-curve.md) and the [Durand and Vergne](../../bibliography/2010-durand-vergne-organisation-pirate.md) boundary-testing motif in the adjectives the court used: agentic AI is "an emerging technology," "the legal understanding of agentic AI will doubtless change as AI technology grows increasingly sophisticated," and "we do not establish a new legal regime governing agentic AI." The state is explicitly declining to settle the boundary yet — a textbook case of legal deterrence lagging the adoption curve.

## Limits

- The ruling is a **preliminary-injunction appeal**; it resolves the likelihood-of-success standard, not the merits, and the case was remanded.
- The holding is **architecture-specific**: an agent whose servers communicate directly with a target website, or one with greater autonomy than the user's relayed instructions, could still be found to "access."
- Non-CFAA theories (breach of terms of service, tort) were expressly left open and are still live against Perplexity.
- This treats the CFAA/CDAFA accessibility question only; Amazon's trade mark and state-law claims survived the appeal.

## Sources Consulted

- Primary: [Amazon.com Services, LLC v. Perplexity AI, Inc., No. 26-1444, opinion (9th Cir. Aug 4, 2026)](https://cdn.ca9.uscourts.gov/datastore/opinions/2026/08/04/26-1444.pdf) (mirror: [Courthouse News](https://www.courthousenews.com/wp-content/uploads/2026/08/amazon-v-perplexity-ninth-circuit-opinion.pdf))
- Corroboration: [Bloomberg Law, "Perplexity's Appeal Win Over Amazon Keeps Hacking Liability Risk" (2026-08-05)](https://news.bloomberglaw.com/ip-law/perplexitys-appeal-win-over-amazon-keeps-hacking-liability-risk); [Cooley alert (2026-08-06)](https://www.cooley.com/news/insight/2026/2026-08-06-ninth-circuit-rules-on-ai-agent-access-to-third-party-websites-under-cfaa); [Eric Goldman, Technology & Marketing Law Blog (2026-08-06)](https://blog.ericgoldman.org/archives/2026/08/ninth-circuit-lifts-restrictions-on-agentic-ai-accessing-amazon.htm)