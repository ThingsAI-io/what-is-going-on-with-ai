---
type: Evidence
schema: evidence.schema.json
title: "GEMA v. Suno: Munich Court Largely Grants the First Generative-Music Copyright Verdict"
description: "The Landgericht München I (42. O 763/25) largely granted GEMA's claims for injunctive relief, information, and damages against Suno over six memorized music works — finding the works were reproduced in Suno's v3.5 and v4 models (memorization), that outputs reproduced their original elements, that text-and-data-mining and US-fair-use defenses failed, and that the collecting society had standing for the US claims under §131 VGG."
tags:
  - copyright
  - litigation
  - generative-ai
  - music
  - text-and-data-mining
  - ai-training-data
  - eu-law
  - germany
  - memorization
status: stable
source:
  url: "https://www.justiz.bayern.de/gerichte-und-behoerden/landgericht/muenchen-1/presse/2026/16.php"
  publisher: "Landgericht München I (Regional Court Munich I), Bavarian State Ministry of Justice"
  document_type: "Judgment (GEMA v. Suno, LG München I, 42. Zivilkammer, Az. 42 O 763/25), 31 July 2026"
  issued: 2026-07-31
  accessed: 2026-08-11
  access_notes: "Primary text from the Bavarian Justice Ministry press release 16/2026. Judgment not yet final (appeal possible) and full reasoned text not separately published at access date."
claims:
  - claim: "Claims largely granted"
    value: "GEMA's claims for injunctive relief, information, and damages against Suno largely granted (Az. 42 O 763/25, verdict 31 July 2026)"
  - claim: "Works at issue"
    value: "Six well-known music works, including Kristina Bach's 'Atemlos durch die Nacht', Frank Farian's 'Rasputin', 'Big in Japan'/'Forever Young' (Alphaville), the refrain of 'Mambo No. 5', and 'Daddy Cool'"
  - claim: "Reproduction via memorization found"
    value: "Works were reproducibly contained in Suno's models v3.5 and v4 (trained datasets memorized in model parameters) — a §16 UrhG reproduction; coincidence excluded given the works' complexity and length"
  - claim: "TDM defense rejected"
    value: "Text-and-data-mining limitation (§44b UrhG / Art. 4 DSM-RL) does not cover the memorization found"
  - claim: "US training and fair use rejected"
    value: "Court held jurisdiction over US claims under §§131(1),(2) VGG and found the US training reproductions were not protected by 17 U.S.C. §107 fair use because the works reappeared substantively in outputs"
  - claim: "Output reproduction and attribution"
    value: "Patent outputs reproduced original elements of the works and the model operator, not the user, was responsible — outputs generated from simple, open-ended prompts; offering the model also infringed the right of communication to the public (§15(2) UrhG)"
  - claim: "Stream-ripping found"
    value: "Suno used stream-ripping techniques to extract works from YouTube, circumventing YouTube's 'Rolling Cipher' technical protection measure"
  - claim: "Distinction from Bartz/Kadrey"
    value: "Court distinguished US cases treating training as fair use (Bartz, Kadrey) because there training data was not substantially accessible in outputs; here simple prompts yielded outputs materially similar to the originals"
  - claim: "Finality"
    value: "Judgment not final at verdict date; appeal possible"
---

# GEMA v. Suno: Munich Court Largely Grants the First Generative-Music Copyright Verdict

## What This Is

On **July 31, 2026**, the 42nd Civil Chamber of the Landgericht München I largely granted GEMA's claims against Suno — the company behind one of the leading artificial-intelligence music generators. The claims for **injunctive relief, information, and damages** were granted in respect of six well-known music works, including **"Atemlos durch die Nacht"** (Kristina Bach), **"Rasputin"** (Frank Farian et al.), **"Big in Japan"** and **"Forever Young"** (Alphaville), the refrain of **"Mambo No. 5"**, and **"Daddy Cool"**. The case did not concern lyrics.

## What the Court Found

- **Memorization = reproduction:** Suno's training dataset contained the six works, and the court found they were **reproducibly contained in Suno's models v3.5 and v4** — memorized in the model parameters, not merely statistically approximated. The court relied on the known phenomenon of training-data memorization and ruled out coincidence given the complexity and length of the works. That memorization is a reproduction under **§16 UrhG** and is **not covered by the text-and-data-mining limitation** of §44b UrhG (Art. 4 DSM Directive).
- **Outputs:** The outputs reproduced the works' original elements; the model **operator was responsible**, not the users, because the outputs were produced from simple, open-ended prompts (lyric text + musical style), and because Suno chose the training data, trained the models, and controlled their architecture. Offering the model itself was also held to infringe the right of communication to the public (§15(2) UrhG).
- **US training and fair use:** Although training occurred partly in the US, the court took jurisdiction for the US claims under **§131 VGG** and held the reproductions were **not shielded by 17 U.S.C. §107 fair use** — the decisive point being that the works reappeared substantially in the outputs, unlike in the US cases (*Bartz*, *Kadrey*) where training data was not substantially accessible in outputs. The court applied the Warhol-informed fair-use factors against Suno.
- **Stream-ripping:** The court noted Suno extracted the works from YouTube using **stream-ripping techniques** that circumvented YouTube's **"Rolling Cipher"** technical protection measure.

## Why It Matters for This Repository

This is the **first generative-music verdict**, and the holding that a model's parameters can *contain* a protected work (memorization) is the strongest European factual finding yet for the [Liang and Lu](../../bibliography/2026-liang-creative-ownership-ai.md) counterfactual criterion: here the outputs demonstrably existed only because specific training works were memorized. It complements the [GEMA v. OpenAI lyrics case](2025-gema-v-openai-lyrics-memorization.md), which found memorized lyrical output, and extends the same reasoning to composition.

The judgment is also a notable counterweight in the cross-atlantic conversation: the German court expressly distinguishes the two **US rulings treating training as fair use** (*Bartz* and *Kadrey*) on the grounds that neither case involved outputs that substantially exposed the training material — echoing the repo's [productivity J-curve](../../frameworks/productivity-j-curve.md) theme that the legal frontier is being resolved on different tracks in different jurisdictions. The stream-ripping finding and the rejected TDM defense add a concrete technical-control dimension that parallels the DMCA/anti-bot line in [Reddit v. SerpApi](2026-reddit-v-serpapi-perplexity-dmca-scraping.md).

## Limits

- The judgment is **first-instance and not final**; Suno may appeal.
- It concerns **six works** and does not resolve the general question of whether training on music infringes in the absence of memorized, output-accessible reproduction.
- The non-final text is available only from the press release at access date; the full reasoned judgment was not separately published.
- The US-law analysis is a German court's application of foreign law; it binds no US court.

## Sources Consulted

- Primary: [Bayerisches Staatsministerium der Justiz, LG München I, Pressemitteilung 16/2026 (31.07.2026)](https://www.justiz.bayern.de/gerichte-und-behoerden/landgericht/muenchen-1/presse/2026/16.php)

