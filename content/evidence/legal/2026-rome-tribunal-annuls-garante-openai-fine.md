---
type: Evidence
title: "Court of Rome Annuls the €15 Million GDPR Fine the Garante Imposed on OpenAI"
description: "The Tribunale di Roma (judgment 4153/2026, decided 18 March 2026, reasoning published 28 May 2026) annulled Garante Decision 755 of 2 November 2024, which had fined OpenAI €15 million and ordered a six-month awareness campaign over ChatGPT's data processing — the only final GDPR enforcement action ever adopted against a generative-AI provider for the 2022-2023 launch period. The annulment turned on jurisdiction: after OpenAI Ireland was recognized as the company's single EEA establishment (15 February 2024), the Garante lost competence under the one-stop-shop mechanism."
tags:
  - privacy
  - gdpr
  - enforcement
  - regulation
  - generative-ai
  - eu-law
  - ai-accountability
  - data-protection
status: stable
source:
  url: "https://dei.web.uniroma1.it/sites/default/files/allegati/2026-05/Trib_Roma_OpenAI_Garante_2026.pdf"
  publisher: "Tribunale Ordinario di Roma (Sezione Diritti della Persona e Immigrazione)"
  authors:
    - "Judge Damiana Colla"
  document_type: "Court judgment (case R.G. 4785/2025; sentence No. 4153/2026), annulling Garante provvedimento n. 755 del 2.11.2024"
  issued: 2026-03-18
  accessed: 2026-08-11
  access_notes: "Full text of the judgment retrieved from a University of Rome (DEI) hosted PDF. The Garante's own documents related to Decision 755 were removed from the Garante website following the ruling, as noted in the Garante press release; the underlying Decision 755 is archived at third-party mirrors (consultingpb.com, dpo-india.com). Corroboration: Reuters (2026-03-19), notraced.com (2026-04-18), ppc.land (2026-05-28, after reasoning publication), Altalex, and European Law Blog (2026-06-04)."
claims:
  - claim: "Fine annulled"
    value: "€15,000,000 administrative fine imposed by Garante Decision 755 (2 Nov 2024) on OpenAI OpCo, LLC, annulled in full"
  - claim: "Awareness campaign annulled"
    value: "Six-month mandatory Italian media awareness campaign (Art. 166(7) Privacy Code) also set aside; declared void was the guarantee policy (n. 536/00022701, 22 May 2025) posted for the fine"
  - claim: "Ground of annulment"
    value: "Jurisdiction, not merits: once the Irish DPC recognized OpenAI Ireland as the single EEA establishment on 15 Feb 2024, the Garante lost competence under the GDPR one-stop-shop (Art. 56(1)); the pending proceeding should have been transferred to Ireland"
  - claim: "Substantive GDPR questions left open"
    value: "Lawful basis for training (Arts. 5(2), 6), transparency (Arts. 12, 13), data breach notification (Art. 33), age verification (Arts. 24, 25(1)) — none adjudicated on the merits; 'absorbed' and unexamined"
  - claim: "Timeline"
    value: "ChatGPT launched 30 Nov 2022; data breach 20 Mar 2023; OpenAI Ireland incorporated 24 Mar 2023; Garante opened sanctioning proceeding 26 Jan 2024; Irish DPC recognized the Irish establishment 15 Feb 2024; Garante issued Decision 755 on 2 Nov 2024; Rome court suspended the fine conditionally 21 Mar 2025; judgment 18 Mar 2026 (reasoning published 28 May 2026)"
  - claim: "Character of the annulled fine"
    value: "It was the only final GDPR enforcement decision ever adopted against a generative-AI provider for the 2022-2023 launch period"
  - claim: "Post-annulment status"
    value: "No final GDPR enforcement action against an LLM provider remains in force in Europe; questions now fall at least in principle to the Irish DPC as lead authority"
---

# Court of Rome Annuls the €15 Million GDPR Fine the Garante Imposed on OpenAI

## What This Is

On 18 March 2026 the Tribunale di Roma annulled in full the only GDPR fine ever imposed on a generative-AI provider for the ChatGPT launch period. Garante Decision 755 (2 November 2024) had fined **OpenAI OpCo, LLC €15,000,000** and ordered a six-month institutional awareness campaign across Italian media under Article 166(7) of the Italian Privacy Code. The judgment (No. 4153/2026, Judge Damiana Colla, case R.G. 4785/2025) set both aside — but on a purely procedural, jurisdictional ground, not on the merits of the GDPR violations alleged.

## What the Garante Had Found (Decision 755, 2 Nov 2024)

The Garante's decision was the culmination of an investigation opened after the **20 March 2023 ChatGPT data breach** (a Redis bug exposing chat titles, and for about 1.2% of ChatGPT Plus subscribers some payment information), and after the authority's **temporary ban on ChatGPT in Italy** in March-April 2023. The decision alleged:

1. **No lawful basis for training data processing** — the Garante found OpenAI had not identified a valid Art. 6 basis for processing personal data to train the models, both pre-launch and from the 30 November 2022 launch through the Italian temporary ban.
2. **Transparency failures** — passive availability of a privacy notice did not discharge the Arts. 12-14 obligation to inform data subjects whose data appeared in training corpora.
3. **Delayed/data-breach notification defects** — the Art. 33 notification of the March 2023 breach was non-compliant in form and content.
4. **No age verification** — ChatGPT's terms required users to be 13+ (16+ in some jurisdictions), but no mechanism enforced it.
5. **Accountability / privacy-by-design defects** under Arts. 24 and 25(1).

## Why the Annulment Is Notable

The Rome court did **not** weigh the proportionality of the €15 million, and it did **not** find OpenAI compliant with the GDPR. It held, on a preliminary ground, that the Garante lacked competence to adopt the decision at all:

- ChatGPT launched **30 November 2022**; the alleged violations date from 2022-2023.
- **OpenAI Ireland Limited was incorporated 24 March 2023.**
- The Garante opened its sanctioning proceeding **26 January 2024**.
- The **Irish DPC formally recognized OpenAI Ireland as the company's single EEA establishment on 15 February 2024**.
- Under Art. 56(1) GDPR, the lead-authority one-stop-shop gives the supervisory authority of the main/single establishment exclusive competence over cross-border processing. Relying on **EDPB Opinion 8/2019** (§4.3.2), the court held competence may switch to a newly competent authority at any time until a final decision, and pending proceedings must be transferred. Since no final decision existed on 15 February 2024, the proceeding should have been handed to Ireland — so the November 2024 decision was adopted by an authority that had already lost competence.
- Every remaining ground of appeal was declared "absorbed" and never examined.

The court also declared void the first-demand guarantee (policy n. 536/00022701 of 22 May 2025) OpenAI had posted to suspend the fine, and compensated costs.

## Aftermath

- The **Garante removed Decision 755 from its website** following the ruling; the decision survives only in third-party archives.
- The **full written reasoning was published 28 May 2026**, two months after the operative part was read on 18 March.
- The ruling leaves the substantive GDPR questions (lawful basis, transparency, breach notification, age verification) formally untouched and, for now, unanswered. Any continuing processing investigation should, in principle, sit with the Irish DPC.
- The Garante may yet appeal to the Corte di Cassazione; the ruling is first-instance.

## Why It Matters for This Repository

This is the privacy pillar of the repo's evidence on the AI frontier. Three observations tie it into the graph:

1. **Enforcement asymmetry between copyright and privacy.** The [OpenAI copyright MDL](2026-openai-copyright-md-l-chatgpt-logs-discovery.md), the [Getty UK judgment](2025-getty-v-stability-ai-ewhc-2863-ch.md), and the [Bartz v. Anthropic settlement](2026-bartz-v-anthropic-settlement.md) all show copyright law reaching into AI training corpora with growing force. The GDPR route, by contrast, has now produced **zero final, surviving enforcement actions** against an LLM provider for the launch period — its one landmark fine was annulled on procedural grounds. The frontier's legal exposure is concentrated on the copyright side, not the privacy side.

2. **The one-stop-shop as an enforcement bottleneck.** The ruling demonstrates a structural constraint: once a non-EEA AI company establishes a European subsidiary (OpenAI Ireland, 24 Mar 2023), national authorities lose competence and the file migrates to the lead authority — where final enforcement has not materialized. This is a measurable, court-documented channel through which regulatory risk is managed, not necessarily by intent but by mechanism. It parallels the [productivity J-curve](../../frameworks/productivity-j-curve.md) theme of adoption outpacing institutional response, and the [Durand and Vergne](../../bibliography/2010-durand-vergne-organisation-pirate.md) account of contested boundaries that the state resolves slowly.

3. **EU-specific fact pattern.** The GDPR's own institutions (EDPB Opinion 28/2024 on AI training, the CJEU automated-decision rulings) remain the operative standard; this ruling did not touch them. The evidence entry records the enforcement gap, not the underlying law.

## Limits

- The judgment is **first-instance** and may be appealed to the Corte di Cassazione.
- The annulment is **procedural**; it establishes no finding that OpenAI complied with the GDPR.
- The Garante's Decision 755 is no longer available from the primary source (removed from the Garante website); its text is reconstructed from third-party archives and press coverage, flagged in `access_notes`.
- Whether the Irish DPC takes up the matter is unresolved as of the access date.

## Sources Consulted

- Primary: [Tribunale di Roma, judgment R.G. 4785/2025, sentence 4153/2026 (full text, PDF hosted by University of Rome/DEI)](https://dei.web.uniroma1.it/sites/default/files/allegati/2026-05/Trib_Roma_OpenAI_Garante_2026.pdf)
- Underlying measure (archived): [Garante provvedimento n. 755 del 2.11.2024 (mirror)](https://www.consultingpb.com/wp-content/uploads/2024/12/GarantePrivacy-10085455-1.5.pdf); [English mirror](https://dpo-india.com/Resources/Fines_and_Penalties_by_DPAs_on_Privacy_Violations/Italy-DPA/Italian-DPA-vs-OpenAI-02.11.24.pdf)
- Garante press release (notes removal of Decision 755): [Garante, 20 Dec 2024, docweb 10085432](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10085432)
- Corroboration: [Reuters, "Italian court scraps 15-million-euro privacy watchdog fine" (2026-03-19)](https://www.reuters.com/technology/italian-court-scraps-15-million-euro-privacy-watchdog-fine-chatgpt-maker-openai-2026-03-19/); [notraced, "The Court of Rome just annulled the €15M OpenAI fine" (2026-04-18)](https://notraced.com/articles/court-of-rome-annuls-openai-fine); [ppc.land, "Italian court kills OpenAI's €15M fine" (2026-05-28)](https://ppc.land/italian-court-kills-openais-eur15m-fine-and-it-wasnt-even-close/); [European Law Blog, "Establish, Then Escape?" (2026-06-04)](https://www.europeanlawblog.eu/pub/92oig1ws); [Altalex (2026-03-27)](https://www.altalex.com/documents/news/2026/03/27/openai-tribunale-roma-annulla-sanzione-garante-privacy)
