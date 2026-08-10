---
name: evidence-entry
description: Use when creating or updating a file under content/evidence/ - concrete, fact-checked entries that document the AI transformation's measurable effects (market, institutional, societal). Trigger on "evidence entry", "create evidence", "fact-check", "corroborate", or when a bibliography/analysis source contains concrete numbers that should be pinned to a primary source. Emphasizes tracing every claim to a verifiable primary source and wiring internal markdown links so entries form a connected graph.
---

# Evidence Entry

Use this skill when creating or updating a file under `content/evidence/`.

Goal: produce a repo-ready evidence entry that records the concrete, measurable effects of the AI transformation — a number, a survey, a filing, a market event — grounded in a verifiable primary source, with every claim either confirmed directly or explicitly labeled as reconstructed and fact-checked.

The authoritative schema for evidence entries lives at `schema/evidence.schema.json`. That schema extends `schema/content.schema.json`.

## How Evidence Entries Differ From Bibliography Entries

- A bibliography entry (`content/bibliography/`) records what a *source* says: its argument, method, and contribution.
- An evidence entry (`content/evidence/`) records what *happened*: the concrete claim, its value, and where it comes from. Numbers, filings, survey results, and market events live here.

A single source often produces both: the bibliography entry carries the analysis, and the evidence entry carries the raw findings. Cross-link the two.

## Source Selection Rules

- **Trace every number to its root primary source.** When a secondary or analysis source (a blog post, an essay, a consulting article) cites figures, do NOT make the evidence entry from the secondary source. Find the underlying primary source (the company filing, the survey report, the research paper, the regulated disclosure) and ground the claims there.
  - Example to follow: the SVPG post "The AI Productivity Paradox" cited an Atlassian survey and a McKinsey article. The evidence entries were built from the Atlassian State of Teams 2026 report and the McKinsey Quarterly article themselves, not from the SVPG essay.
- Prefer primary sources: earnings releases, SEC filings, survey reports, working papers, and articles from recognized institutions (Publications from NBER, OECD, IMF, World Bank, BIS, academic presses, and named researchers rank higher than commentary).
- Reject anonymous, unverified, or low-credibility sources. A paywalled or fetch-blocked source is usable only if the figure can be confirmed by an independent reconstruction from primary materials (SEC filings, etc.) — and the verification must be recorded in `access_notes` and in the body.
- Use canonical URLs, DOIs, or official publication pages when available.

## Required File Shape

Create or update a markdown file like `content/evidence/YYYY-slug.md`. The year prefix should reflect when the underlying fact was produced (e.g., `2026-atlassian-state-of-teams-ai-fragmentation-tax.md`), matching the bibliography convention.

## Frontmatter Fields

- `type: Evidence` — required by the schema and must equal `Evidence`.
- `title` — required by the extended content schema.
- `description` — required; specific, not generic. Lead with the strongest concrete finding.
- `tags` — optional; reuse the vocabulary already in the repo (`ai-economy`, `ai-infrastructure`, `ai-productivity`, `ai-paradox`, `capital-expenditure`, `off-balance-sheet`, `hyperscalers`, `labor-demand`, etc.). Prefer existing tags over inventing near-synonyms.
- `status` — optional; one of `draft`, `stable`, `deprecated`.
- `source` — required object with at least `url`. Fields seen in repo entries: `publisher`, `author`/`authors`, `document_type`, `reporting_period`, `issued`, `published`, `accessed` (must be isoDate `YYYY-MM-DD`), `access_notes`.
- `claims` — optional array of `{claim, value}` pairs. These are the machine-readable summary of the concrete findings; keep each `claim` a short descriptor and put the number/magnitude in `value`.

## The `claims` Block

Make every substantive number a claim:

```yaml
claims:
  - claim: "Executives reporting AI increases speed of work"
    value: "89%, versus only 6% sure they can point to clear examples of organization-wide AI ROI"
```

Rules:

- One claim per discrete finding. Do not bury a second number inside a `value` that could be its own `claim`.
- Keep the `value` self-contained: readers and downstream tooling should get the magnitude without re-reading the prose.
- If a claim was reconstructed or fact-checked (not confirmed verbatim from the primary source), say so in `access_notes` and/or flag it in the body's fact-check section.

## Writing Expectations

- **Name the source and the method.** Say which report, filing, or survey the numbers come from, who published it, and when. For surveys, state sample size and fielding method (e.g., "double-blind survey, 12,035 knowledge workers and 173 Fortune 1000 executives, Jan–Feb 2026").
- **Lead with the strongest finding.** The description and opening section should state the headline number first.
- **Separate fact from interpretation.** The evidence entry records what is measured; interpretation belongs in an "Interpretation" or "Why It Matters for This Repository" section, clearly separated from the numbers.
- **Distinguish confirmed from reconstructed.** If a primary source is paywalled or blocked, reconstruct the figures from filings or independent analyses AND label them as such. When independent sources conflict, record both sides (a "fact-check verdict" subsection is the established pattern).
- Prefer neutral, analytical prose. Do not invent repository links or internal references that do not exist.

## Internal Links (Graph Wiring) — REQUIRED

Entries must be wired into the markdown graph with **inline relative links placed where one entry mentions another**. This is what lets the markdown behave as a navigable graph rather than isolated files.

Rules:

- **Link on mention.** Wherever your prose references another entry in the repo, wrap the name in an inline link on that exact text. Do not only add links in a list at the end.
  - Evidence → evidence: `[the Microsoft capex evidence entry](2026-microsoft-fy26-q4-earnings.md)`
  - Evidence → framework: `[productivity J-curve](../frameworks/productivity-j-curve.md)`
  - Evidence → bibliography: `[Klein Teeselink and Carey, "AI, Automation, and Expertise"](../bibliography/2026-klein-teeselink-carey-ai-automation-expertise.md)`
- **Relative paths, from the entry's own directory:** sibling evidence files are linked by filename; frameworks and bibliography are reached via `../frameworks/...` and `../bibliography/...`.
- **Link naturally-named concepts only when they refer to an actual file.** Before linking, confirm the target file exists (check the glob of `content/frameworks`, `content/bibliography`, `content/evidence`). If there is no file yet, do not fabricate a link — write the name in plain text, or create the linked entry.
- **Reverse edges where the repo convention supports them.** Frameworks carry a "Connections to Current Repo" list; when you link a framework from an evidence entry, add a reverse line there pointing back at the evidence entry. Bibliography "Relevance to This Repository" sections support the same. This makes the graph bidirectional.
- **Update the indexes.** Add the new entry to `content/evidence/index.md` (and the root `content/index.md` only if a new section is warranted).

## Practical Body Template

Follow this scaffold, adapting section names to the material (all five existing evidence entries use `## What This Is`, `## Interpretation` or `## Why It Matters for This Repository`, and `## Limits` / `## Limitations`):

1. `What This Is` — 1–3 paragraphs naming the source and the headline findings.
2. Detail sections (`The Headline Numbers`, `The Structure of the Obligations`, tables, etc.) — the concrete claims, with a `claims` block mirrored in prose.
3. `Interpretation` or `Why It Matters for This Repository` — what the evidence means for the AI transformation, wired into the graph via inline links to related entries, frameworks, and bibliography.
4. `Limits` / `Limitations` — what the evidence does NOT establish: self-reporting, methodological caveats, measurement lag, contradiction with other sources.
5. `Sources Consulted` — primary source first, corroborating sources second, each an external URL.

When a headline figure is disputed in framing (e.g., "is it debt or not?"), add a `## Why the Figure Is Disputed in Framing` section with a `### Fact-check verdict` subsection recording what independent checks confirm, what they correct, and what they could not verify.

## Quality Check

Before finishing, verify that:

- The file uses `type: Evidence`.
- The title and description are specific, not generic.
- The `source` object has a `url` and `accessed` is a valid `YYYY-MM-DD` date.
- Every number is a claim or is traceable to a claim; every claim is traceable to the named source.
- The entry names the underlying primary source for any figures first cited elsewhere.
- Contested figures carry explicit corroboration/contradiction notes, not a single-sided assertion.
- Every mention of another repo entry is an inline relative link; the link targets exist; the reverse edge is added where the convention applies; `content/evidence/index.md` is updated.
- The entry fits the tone and depth of existing evidence pages.
- Run `npm run validate` (and the repo's test command) and re-check after any edits.