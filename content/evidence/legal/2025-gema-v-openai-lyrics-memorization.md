---
type: Evidence
schema: evidence.schema.json
title: "GEMA v. OpenAI: Munich Court Finds ChatGPT Reproduced German Song Lyrics"
description: "The Landgericht München I (42. Zivilkammer) largely granted GEMA's claims for injunctive relief, information, and damages against OpenAI group companies, finding ChatGPT memorized and reproduced nine German song lyrics 'originalgetreu' (in large parts faithfully) — including 'Atemlos durch die Nacht' — and rejecting OpenAI's text-and-data-mining defense."
tags:
  - copyright
  - litigation
  - generative-ai
  - lyrics
  - music
  - eu-law
  - germany
  - text-and-data-mining
  - ai-intellectual-property
status: stable
source:
  url: "https://www.justiz.bayern.de/gerichte-und-behoerden/landgericht/muenchen-1/presse/2025/11.php"
  publisher: "Landgericht München I (Regional Court Munich I), Bavarian State Ministry of Justice"
  document_type: "Judgment (GEMA v. OpenAI, LG München I, 42. Zivilkammer, Az. 42 O 14139/24), 11 November 2025"
  issued: 2025-11-11
  accessed: 2026-08-11
  access_notes: "Primary: Bavarian Justice Ministry press release on the judgment. Corroboration: Reuters reporting of 11 November 2025. Judgment text itself not published in full on the court site at access date; claims reconstructed from the press release and press coverage and flagged accordingly."
claims:
  - claim: "Claim largely granted"
    value: "Claims for injunctive relief, information, and damages against two OpenAI group companies largely granted by the Landgericht München I"
  - claim: "Memorized lyrics reproduced"
    value: "Nine German-language songs reproduced by ChatGPT; outputs were 'originalgetreu' (in large parts faithful), including Kristina Bach's 'Atemlos durch die Nacht' and Rolf Zuckowski's 'Wie schön, dass du geboren bist'"
  - claim: "Text-and-data-mining defense rejected"
    value: "OpenAI's TDM defense under the InfoSoc/DSM framework rejected by the court for the reproductions at issue"
  - claim: "Personality-right claim dismissed"
    value: "An accompanying claim based on personality rights was dismissed"
  - claim: "Court and date"
    value: "LG München I, 42. Zivilkammer, Az. 42 O 14139/24, judgment 11 November 2025"
---

# GEMA v. OpenAI: Munich Court Finds ChatGPT Reproduced German Song Lyrics

## What This Is

On November 11, 2025, the Landgericht München I (Munich Regional Court I, 42nd Civil Chamber) largely granted the claims of GEMA, the German collecting society for musical works, against two OpenAI group companies. GEMA had alleged that OpenAI's ChatGPT reproduced the lyrics of German songs it had memorized from the training data. The court found that ChatGPT **reproduced nine German-language song lyrics**, with outputs "originalgetreu" (in large parts faithful to the originals). The named works include **"Atemlos durch die Nacht"** (Kristina Bach) and **"Wie schön, dass du geboren bist"** (Rolf Zuckowski).

## The Disposition

- **Claims largely granted:** GEMA's claims for injunctive relief, information (about the reproductions), and damages largely succeeded against two OpenAI group companies.
- **Text-and-data-mining defense rejected:** The court rejected OpenAI's TDM defense for the reproductions at issue.
- **Personality-right claim dismissed:** A separate claim grounded in personality rights was dismissed.
- **The case continues:** The judgment is a first-instance decision; an appeal by OpenAI is expected. The "originalgetreu" finding on memorized lyrics is the notable feature — it grounds copyright liability in the model's demonstrated ability to output verbatim protected text, the classic reprographic-style infringement case rather than a style-similarity theory.

## Why It Matters for This Repository

This is the **European evidence counterpart** to the repo's US knowledge-rights entries: the German court found actual verbatim reproduction of protected works by an LLM, holding the model developer liable for the outputs. Where [Getty v. Stability AI](2025-getty-v-stability-ai-ewhc-2863-ch.md) (UK) left training-stage copyright largely undecided and [Doe v. GitHub](2026-doe-v-github-copilot-open-source-cmi.md) frames the §1202 question, *GEMA v. OpenAI* is the case that found a frontier model did in fact memorize and reproduce protected expression. It is direct evidence for the [Liang and Lu](../../bibliography/2026-liang-creative-ownership-ai.md) concern about outputs that essentially depend on particular training works — here demonstrated at the level of full lyrical passages.

It also reframes the [productivity J-curve](../../frameworks/productivity-j-curve.md) from the rights-holder's side: the legal frontier is now being adjudicated case-by-case across Europe, and the memorization finding supplies a concrete factual predicate for collective-management claims that the music industry is litigating against every major lab.

## Limits

- First-instance judgment, appeal expected; reasoning not fully published on the court site at access date.
- Findings concern **lyrics reproduction**, not training or scraping generally; they do not resolve the broader TDM/fair-use debate.
- The personality-right dismissal and the precise damages award require the full judgment text, which was not yet public at access.
- Reconstruction of claims from press release and Reuters; flagged in access_notes.

## Sources Consulted

- Primary: [Bavarian Ministry of Justice / LG München I press release (Nov 2025)](https://www.justiz.bayern.de/gerichte-und-behoerden/landgericht/muenchen-1/presse/2025/11.php)
- Corroboration: [Reuters, "German court says OpenAI's ChatGPT reproduced song lyrics" (2025-11-11)](https://www.reuters.com/technology/artificial-intelligence/german-court-says-chatgpt-reproduced-song-lyrics-2025-11-11/)


