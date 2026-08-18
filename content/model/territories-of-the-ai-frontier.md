---
type: Model
title: "Territories of the AI Frontier: What the Pirates Are Setting Sail Into"
description: "A draft model piece applying the pirate-organization thesis to the AI era: instead of asking whether AI is piracy, it asks what new, unsettled territory LLMs and agentic AI opened. It identifies three stacked territories — the corpus (aggregate human expression as mineable input), the weights (the model as a re-generable, legally unmapped artifact), and the web-as-action-space (machine agency as a new terrain of consequences) — and argues frontier labs rotate between pirate and sovereign postures as value moves from extraction to enclosure."
tags:
  - piracy
  - boundary-testing
  - territories
  - enclosure
  - sovereignty
  - legitimacy
  - state
  - llms
  - agentic-ai
  - model
status: draft
---

# Territories of the AI Frontier: What the Pirates Are Setting Sail Into

## Why This Is a Draft

This page is a synthesis attempt, not a settled result. It is labeled `draft` because it projects a framework — the pirate-organization thesis — onto a moving target, and because its claims are oriented and interpretive rather than tested. Following the discipline in [Functions of a Model](functions-of-a-model.md), the primary function here is **critical and interpretive** (revealing the structure of contested value in the AI economy), with a secondary **heuristic** function (giving the repository a way to ask where the next boundary fights will be). It becomes stable only when the predictions at the end have been confronted with counter-evidence. It has been expanded once already: the three state-strategy documents added since the first draft ([US Action Plan](../evidence/2025-us-ai-action-plan-global-dominance.md), [EU AI Continent Plan](../evidence/2025-eu-ai-continent-action-plan-sovereignty.md), [China AI+ Initiative](../evidence/2025-china-ai-plus-action-open-source.md)) confirmed the pirate-sovereign pattern at the level of whole blocs, and the ["State Layer" section](#the-state-layer-three-sovereigns-three-postures) records that extension.

The core question it answers is one the repo keeps circling: *what, exactly, is the territory in the age of LLMs and agentic AI?*

## The Invariant: New Technology Opens Unsettled Territory

The starting point is [Durand and Vergne's pirate-organization thesis](../bibliography/2010-durand-vergne-organisation-pirate.md). Its central claim: piracy "is a recurring organizational form that appears whenever states extend their authority into new territories and modes of exchange." As they put it elsewhere in the book, "as the state codifies and territorializes new spaces — oceans, radio spectrum, cyberspace, and even genetic material — pirate organizations contest those boundaries and force the system to evolve."

The [boundary-testing framework](../frameworks/boundary-testing.md) formalizes this as a three-beat pattern: an **existing boundary**, a **challenge from the edge**, and **new boundary formation**. And the [Dumez critical review](../bibliography/2012-dumez-sur-lorganisation-pirate-capitalisme-et-son-double.md) sharpens why this matters for capitalism: "pirates and capitalists both profit from unsettled territories, blurred rules, and strategic relations with the state."

The invariant to extract from all three: **a new technology does not merely create new capability; it opens a new space of value that the state has not yet codified.** The pirates arrive first — they exploit the absence of rules — and their activity is what forces the rules to be written. The ocean was not a territory until sovereign claims over shipping lanes demanded it be one; the radio spectrum was not a territory until states parceled out frequencies; genetic material was not a territory until it became commercializable.

That is why "is AI piracy?" is the wrong question. The right question is: **what new territory did AI open, and who sailed into it before the state drew the map?**

## The Territory Question: What Did LLMs Open?

The claim of this model is that the AI-era territory is not a new place. It is a new *form* of an existing space: the aggregate of human expression — books, journalism, images, code, lyrics — has never before been **processable as an industrial input**. Individual works have long been owned; the *aggregate as an extraction substrate* has never had an owner. Before generative AI, the "entire corpus of the web as a single mineable object" was legally unrecognized. That absence of ownership is the unsettled space.

Two further technical twists expand and complicate it. First, the process produces **new artifacts** — weights, models, outputs — that existing property law must map onto objects it was not built for (does a model "infringe"? can its outputs be owned?). Second, the models do not stop at reading: **agentic AI acts**, turning the web from a space humans read into a space machines manipulate. Each of these is an unsettled territory with its own pirate wave and its own slow-moving state response. They are stacked, not alternatives:

1. **The corpus** — territory of **extraction**.
2. **The weights** — territory of **recapture and enclosure**.
3. **The web-as-action-space** — territory of **execution** (machine agency and consequences).

## Territory 1: The Corpus — Extraction

The ocean is the aggregated commons of human expression. The pirate acts are mass scraping, torrenting, shadow-library ingestion, robots.txt-crossing crawlers. The boundary being tested is whether the aggregate of human expression is a commons to be mined or a payable input to production.

The evidence is unusually concrete. The [OpenAI copyright MDL discovery orders](../evidence/legal/2026-openai-copyright-md-l-chatgpt-logs-discovery.md) fixed in a court record that OpenAI "downloaded... nearly 100,000 LibGen books" — pirated books from a shadow library — in September 2019, with the case's evidentiary engine built for exactly that question. The [Kadrey v. Meta case](../evidence/2026-zuckerberg-future-is-for-everyone-ai-manifesto.md) — documented in the Zuckerberg-manifesto entry — produced unredacted filings describing the internal discussion of training on LibGen, stripping copyright headers and ISBNs, and escalation to the CEO. The scale of the contested boundary is visible in the [Richner local-newspaper coalition](../evidence/legal/2026-richner-publishers-v-microsoft-openai.md) (~400 publishers), the [Getty mass-extraction case](../evidence/legal/2025-getty-v-stability-ai-ewhc-2863-ch.md), the [Britannica and Merriam-Webster action](../evidence/legal/2026-britannica-merriam-webster-v-openai.md), the [Reddit v. Anthropic state-law claims](../evidence/legal/2026-reddit-v-anthropic-scraping-preemption.md), and the [News Corp v. Brave case](../evidence/legal/2026-news-corp-v-brave-crawlers.md), which shows the extraction territory is not limited to model labs — intermediaries scraped and resold content to the AI supply chain without ever building a model.

The state's response is the slow, lagging codification the [productivity J-curve](../frameworks/productivity-j-curve.md) predicts: fair-use rulings for one stage of the pipeline (the [Kadrey reproduction holding](../evidence/2026-zuckerberg-future-is-for-everyone-ai-manifesto.md)), [§1201 rulings on scraping signals](../evidence/legal/2025-ziff-davis-v-openai-robots-txt-dmca.md), and settlements that price the corpus ([Bartz v. Anthropic's $1.5 billion settlement](../evidence/legal/2026-bartz-v-anthropic-settlement.md)). The defining asymmetry of this territory is that **nobody ever owned "a language"; the aggregate is a commons by default and a claimant by takings**.

## Territory 2: The Weights — Recapture and Enclosure

The second unsettled space is the model itself: a re-generable representation of the corpus. Existing law must map it onto ownership categories it was not designed for. Is a model an "infringing article"? Are its outputs copyrightable? Is distilling a model's outputs a taking or a legitimate practice? None of these questions have settled answers, which is precisely what makes them a territory.

The pirate acts here are **distillation and output-copying** — smaller actors feeding on the models' own outputs. The [Doe v. GitHub (Copilot) §1202 case](../evidence/legal/2026-doe-v-github-copilot-open-source-cmi.md) made the exclusionary move visible: removing copyright-management information is a §1202 violation even when there is no physical copying. The [Getty v. Stability ruling](../evidence/legal/2025-getty-v-stability-ai-ewhc-2863-ch.md) and the [GEMA v. Suno verdict](../evidence/legal/2026-gema-v-suno-music-verdict.md) each found the model's outputs can reproduce protected expression — putting the model itself in the contested frame.

The [Zuckerberg manifesto](../evidence/2026-zuckerberg-future-is-for-everyone-ai-manifesto.md) is the clearest single artifact of this territory: it defends training-data and distillation freedoms ("you can learn from anything you can observe") while sitting inside a firm that also gates its outputs behind APIs and rate limits. The [July 2026 "Open Weights" letter](../evidence/2026-zuckerberg-future-is-for-everyone-ai-manifesto.md) (co-signed by frontier labs) does both moves in a single document — defending the openness of the corpus for inputs while carving out "unlawful efforts to extract value from closed models." That is extraction on the way in, enclosure on the way out.

## Territory 3: The Web-as-Action-Space — Execution

The third unsettled space is not content but **agency**. Agentic AI does not merely read the web; it *acts* on it — it browses, transacts, automates, scrapes, executes. The old legal and economic rules assumed machines were read-only instruments and humans were the only agents. Agentic AI turns the web into a manipulable environment, and the boundary question shifts from "what may a machine ingest?" to "what may a machine *do*?"

The state is visibly not ready. In [Amazon v. Perplexity](../evidence/legal/2026-amazon-v-perplexity-9th-circ-cfaa.md), the Ninth Circuit held that "the user, not the AI agent, 'accesses' a website" under the CFAA and declined to "establish a new legal regime governing agentic AI" — the state explicitly deferring the boundary. The [Reddit v. SerpApi & Perplexity §1201 case](../evidence/legal/2026-reddit-v-serpapi-perplexity-dmca-scraping.md) keeps anti-bot circumvention claims alive, and [Ziff Davis v. OpenAI](../evidence/legal/2025-ziff-davis-v-openai-robots-txt-dmca.md) resolved that robots.txt is not a §1201 technological measure — leaving the enforcement signal question open. These cases are the frontier of the frontier: the boundary that the state has barely begun to draw.

## A Fourth Emergent Territory (Flagged, Not Yet Central)

A candidate fourth territory: **the personal**. Personal agents — models that hold your data, your conversations, and your preferences, "aligned to you" in the Zuckerberg letter's phrase, with "fully private mode where even Meta cannot see" — would open the individual self as a new unsettled space of extraction and enclosure. The repo has less direct evidence here so far; the [pro-human / pacing-frontier declarations](../evidence/declarations/2026-pacing-the-frontier-frontier-ai-worker-statement.md) gesture at it from the risk side. It is flagged rather than developed because the model should not outrun its evidence.

## The Pirate-Sovereign Rotation

The sharpest structural observation in this model: **frontier labs are simultaneously pirates and would-be sovereigns.** On the way in (the corpus), they behave as boundary-testers — they extract, scrape, and ingest material they do not own, and they lobby for rules ("you can learn from anything you can observe") that keep the ocean open. On the way out (the weights), they behave as boundary-makers — they enclose the transformed knowledge inside proprietary systems, gate it with APIs and rate limits, publish open-weight *strategic* releases the [open-weights debates](../evidence/legal/2026-gcc-ai-policy-adoption.md) contest, and draw boundaries against smaller pirates who would distill or scrape them.

This rotation is the Durand-Vergne pattern at the level of a single actor rather than an era: **the payoff of extraction is the right to become the boundary.** The [Sanders letter](../evidence/legal/2026-sanders-letter-ai-ceos-pause-development.md) (demanding a pause or facing the Senate) and the [pro-human declaration](../evidence/declarations/2026-pro-human-ai-declaration.md) are the state and civil society trying to draw the boundary around the whole enterprise; the [Zuckerberg manifesto](../evidence/2026-zuckerberg-future-is-for-everyone-ai-manifesto.md) is the pirate-sovereign proposing to join the state in drawing it — on its own terms.

## The State Layer: Three Sovereigns, Three Postures

The firm-level rotation has a state-level counterpart, and all three of the world's AI powers have now written their postures into primary documents. Each bloc stakes the same three territories (corpus, weights, action space) with a distinct strategy:

- **The United States claims and exports.** "[Winning the Race: America's AI Action Plan](../evidence/2025-us-ai-action-plan-global-dominance.md)" (OSTP, July 2025) declares "global AI dominance" the policy of the state, gives open-weight models explicit "geostrategic value," exports the full American stack to allies, and moves to "counter Chinese influence in international governance bodies." It is the sovereign asserting the territory and arming its domestic pirates — leaving the corpus to the courts while fixing open weights as the American standard.
- **The European Union codifies and builds.** The "[AI Continent Action Plan](../evidence/2025-eu-ai-continent-action-plan-sovereignty.md)" (COM(2025)165) frames dependence on non-EU infrastructure as an "economic security risk," proposes to pool the continent's data as an internal resource, and legislates the boundary (the AI Act) while funding up to five gigafactories underneath it — boundary-drawing before the pirates arrive.
- **China diffuses and harvests.** The "[AI+ Initiative](../evidence/2025-china-ai-plus-action-open-source.md)" (State Council, August 2025) makes open source state doctrine, positions China as the open-source champion of the Global South against the US-led proprietary "exclusive game," and simultaneously plans "data property rights and copyright systems adapted to AI development" — the pirate-state that codifies domestically precisely to compete openly abroad.

The state layer generalizes the model's core claim. The "territory" is no longer only the corpus, the weights, and the action space: it is now also the **global governance space itself** — the question of whether open-weights diffusion, export-controlled chokepoints, or data-sovereignty regimes define the boundaries that the next generation of pirates will test. Each bloc is simultaneously drawing the map and sailing on it.

## What This Model Predicts

1. **The frontier of contest migrates from ingestion to execution.** As the corpus territory gets settled (fair-use doctrine, licensing regimes, settlements), the valuable unsettled territory shifts to Territory 3 — action and consequences, where the state has barely begun drawing boundaries ([Amazon v. Perplexity](../evidence/legal/2026-amazon-v-perplexity-9th-circ-cfaa.md)).
2. **Settlements become the next boundaries to test.** The [Bartz settlement](../evidence/legal/2026-bartz-v-anthropic-settlement.md) prices the corpus; the licensing regimes that follow become new lines that smaller actors will test.
3. **The pirate-sovereign rotation intensifies — at both firm and state level.** Expect the largest labs to keep supporting openness *of inputs* (training-data and distillation freedoms) while opposing openness *of their outputs* (weights, interfaces). The dual-signatory "[Open Weights](../evidence/2026-zuckerberg-future-is-for-everyone-ai-manifesto.md)" letter is the template; the [US Action Plan](../evidence/2025-us-ai-action-plan-global-dominance.md), [EU AI Continent Plan](../evidence/2025-eu-ai-continent-action-plan-sovereignty.md), and [China's AI+ Initiative](../evidence/2025-china-ai-plus-action-open-source.md) are the state-level instantiations.
4. **The lag confers durable advantage.** Because the state resolves boundaries slowly (the J-curve's legal-structure lag), value can be captured during the lag; the structurally advantaged actors are those who can extract now and litigate later.
5. **The standard-setter converts posture into map.** As each bloc doubles down on its posture, the one that first turns it into an operative global standard — an open-weights licensing regime, an export-control chokepoint, or a data-sovereignty rule — sets the boundaries that the *next* generation of pirates will have to test. China's state-backed open-source push and the US's open-weights export strategy are now in direct competition to be that map.

## Limits: What This Model Does Not Claim

- **The state postures are self-understandings, not measurements.** The three strategy documents record how each bloc sees itself; they do not establish which posture is winning or whether the claims (e.g., export packages delivered, gigafactories built, penetration targets hit) materialized. The model should not treat bloc postures as fixed facts.
- **Not every contested AI practice is piracy.** The frame is structural (access, extraction, boundary-making), not moral; the framework's own limits warn against stretching it (see [boundary testing's Limits](../frameworks/boundary-testing.md)).
- **The three territories are analytic constructs.** In practice they overlap — a single model release sits in all three.
- **"Territory" is a projection.** The sources do not define territory for the AI era; this model borrows the concept from piracy's historical cases and applies it by analogy. That analogy needs to be confronted with counter-cases — legitimate commons regimes ([GCC licensing](../evidence/legal/2026-gcc-ai-policy-adoption.md)), consensual data contributions, and open-weight releases that genuinely widen access rather than enclose it.
- **The nostalgic reading trap.** The [Dumez review](../bibliography/2012-dumez-sur-lorganisation-pirate-capitalisme-et-son-double.md) warns against romanticizing pirates; the boundary-testing reading of the labs should stay symmetrical — labs are boundary-testers *and* boundary-makers, and neither role is inherently good.
- **Draft status.** This model predicts and interprets; it does not yet test. It becomes a candidate for `stable` only when the execution-territory prediction is checked against the next year's legal record and when the personal-territory flag is filled or retired with evidence.

## Connections to Current Repo

- [Claude Code's Default 'Co-Authored-By: Claude' Commit Markers](../evidence/2026-claude-code-commit-attribution-markers.md): the output territory's interior being stamped — a default-on co-authorship trailer brands user-owned git history, against US Copyright Office guidance, while autonomous agent commits quietly credit the human's identity.
- [VS Code's 'Co-authored-by: Copilot' Default](../evidence/2026-vs-code-copilot-coauthor-commit-attribution.md): the same branding move at hyperscale — ~4 million commits stamped by a flipped-on default the vendor's own AI reviewer flagged and backlash forced back off.
- [Anthropic Watermarks All Claude Text Worldwide](../evidence/2026-anthropic-claude-text-watermark-over-compliance.md): the output territory's boundary in the code-tracking layer — state-mandated detection implemented worldwide and beyond the legal exemption, with the vendor holding the detection key.
- [US 'Winning the Race': America's AI Action Plan Frames Global AI Dominance as State Policy](../evidence/2025-us-ai-action-plan-global-dominance.md): the US sovereign claiming the territory — open-weight models given "geostrategic value," the full stack exported to allies, Chinese influence countered in governance bodies.
- [EU AI Continent Action Plan: Sovereignty as the European Answer to the US-China AI Race](../evidence/2025-eu-ai-continent-action-plan-sovereignty.md): the European codifying-sovereign — governing the corpus as a continental resource and building a sovereign infrastructure layer before the pirates arrive.
- [China's AI+ Initiative and Global AI Governance Action Plan: State-Directed Open-Source Diffusion as Strategy](../evidence/2025-china-ai-plus-action-open-source.md): the pirate-state — diffusion as dominance, open source as state doctrine, and a state-authored position on data-property and copyright "adapted to AI development."
- [L'organisation pirate: Essai sur l'évolution du capitalisme](../bibliography/2010-durand-vergne-organisation-pirate.md): the source book behind the "new territories" invariant.
- [Sur l'organisation pirate. Le capitalisme et son double](../bibliography/2012-dumez-sur-lorganisation-pirate-capitalisme-et-son-double.md): the review that defines the limits of the pirate analogy.
- [Boundary Testing](../frameworks/boundary-testing.md): the formalized three-beat pattern this model builds on.
- [Productivity J-Curve](../frameworks/productivity-j-curve.md): the claim that institutional/legal response lags technical adoption — the temporal structure that lets pirates capture value during the lag.
- [Zuckerberg's 'The Future is for Everyone': An AI Policy Manifesto and Its Litigation Blindspot](../evidence/2026-zuckerberg-future-is-for-everyone-ai-manifesto.md): the pirate-sovereign in a single document.
- [OpenAI Copyright MDL: LibGen Discovery Orders](../evidence/legal/2026-openai-copyright-md-l-chatgpt-logs-discovery.md): the corpus territory's formalized truth — nearly 100,000 LibGen books in the record.
- [Bartz v. Anthropic: $1.5 Billion Settlement](../evidence/legal/2026-bartz-v-anthropic-settlement.md): the corpus priced.
- [Kadrey / Ziff Davis scraping rulings](../evidence/legal/2025-ziff-davis-v-openai-robots-txt-dmca.md): the state drawing the extraction-threshold line.
- [Amazon v. Perplexity (9th Cir.)](../evidence/legal/2026-amazon-v-perplexity-9th-circ-cfaa.md): the execution territory's first boundary deferral.
- [Getty v. Stability and GEMA v. Suno](../evidence/legal/2026-gema-v-suno-music-verdict.md): the weights-and-outputs territory being adjudicated.
- [Sanders Letter: 'Pause AI Development'](../evidence/legal/2026-sanders-letter-ai-ceos-pause-development.md): the state attempting to draw a boundary around the whole enterprise.