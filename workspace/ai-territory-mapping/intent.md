# Intent: How Big Is the AI-Replaceable Human Activity Territory?

## Purpose

Estimate, to an order of magnitude, how much human effort (not jobs) could be
agentified / AI-replaced, expressed as *token-equivalents of human activity* per
unit time. Translate that into steady-state AI inference demand, and from there
into the amount of compute / data-center capacity needed to "automate all that AI
can automate."

The question is deliberately extreme: it is the AI-infrastructure equivalent of
asking "what if all of humanity lived at Western consumption standards?" — where
the answer tends to be "the planet cannot supply it." This subproject wants to
know whether the same is plausibly true of token supply for a fully agentified
human activity curve.

## Motivation (why this framing)

- Job counts measure people; they do not measure *effort*. A legal review that a
  senior associate performs in 40 focused hours, another might "do" in 200
  procrastinating ones. We want the token-count of the *underlying activity*,
  not the headcount.
- If we knew total human productive effort in tokens per minute / hour / day /
  year, we could compare it against (a) current global token generation and
  (b) current and planned AI datacenter capacity.
- This is impossible to survey directly — that is the point. We therefore treat it
  as a Fermi problem: bound it from above and below, triangulate with reference
  data, and accept order-of-magnitude error bars as the deliverable.

## Method Springs (impossible-quantity precedents)

- **Number of galaxies**: HST deep-field count * volume density → total. Core trick:
  measure a small representative region, multiply by the volume, state the
  uncertainty.
- **Google "how many windows in NYC"**: decompose (buildings × floors × windows),
  itemize known anchors (residential vs. office), state each estimate explicitly.
- **Drake equation** style: every term is a product of sub-estimates, each with its
  own bound; the result inherits the widest error bar.
- **Pyramid energy / "Big Mac" labor accounting**: convert human hours to a
  common energy/token unit via one transparent multiplier.

Deliverable discipline: every input number must be (1) explicitly stated,
(2) traceable to a source or clearly labeled assumption, (3) combined in an
equation the reader can refute, (4) given an error band. No "professional estimate"
that cannot be decomposed.

## Generic Fermi Resolution Steps

1. Define the quantity in one sentence.
   - State exactly what is being estimated and what is out of scope.
   - Decide the unit of analysis, the time window, and the boundary of the system.
2. Break the quantity into a product of smaller terms.
   - Prefer terms that can be independently checked.
   - Keep the factors simple enough that a reader can inspect each one.
3. Find one or more anchor points.
   - Use a known count, rate, or measurement as a starting point.
   - Prefer sources that are direct, recent, and close to the phenomenon.
4. Estimate each factor with a lower, middle, and upper bound.
   - Make the assumptions explicit.
   - If a factor is highly uncertain, say so instead of hiding it in the arithmetic.
5. Combine the factors into a transparent equation.
   - Write the calculation so someone else can reproduce it by hand.
   - Keep intermediate steps visible.
6. Propagate uncertainty qualitatively, then numerically.
   - Identify which factor dominates the error bar.
   - Avoid fake precision; round to the nearest power of ten or a small range when needed.
7. Check the result against independent sanity checks.
   - Compare with adjacent quantities, historical trends, physical limits, or known totals.
   - If the result is implausible, revisit the assumptions rather than polishing the number.
8. State the output as a range, not a point estimate.
   - The useful result is the order of magnitude and the reasoning, not a false exact answer.
9. Record what would change the estimate most.
   - Note which missing data or better measurements would most improve confidence.
   - That turns the estimate into a research agenda.

## The Core Equation (draft)

```
human_effort_tokens/yr
  = working_population × working_hours/day × days/yr × info_share × tokens_per_hour
```

Candidate numbers (to be validated, not final):

| Term | Order of magnitude | Note |
|---|---|---|
| working population | ~3 B | 8 B humans · ~40% workforce (ILO) |
| hours/day at work | ~6–8 h | 7.5 h · 5 days/wk |
| days/yr | ~220–250 | adopt ~1,900 h/yr |
| info-work share | ~0.1–0.5 | share of effort that is information-processing (survey / research-dependent) |
| tokens/hour of effort | ~5–10 k | rough: ~100–200 tokens/min of speaking/typing/reading work |

Product lands near **10^17–10^18 tokens/yr** (≈ 10^16 tokens/month). This is the
steady-state "if all informatable work were run as inference" workload — a
ceiling to sanity-check, not a build plan.

## Sub-problems (each gets its own worksheet later)

1. **Baseline anchors (bottom-up counting)**
   - Emails: volume estimates for daily emails sent worldwide; business share; avg
     messages → tokens (505 MB "data planet" rule-of-thumb vs. OECD/Radicati data).
   - Documents: office docs (Word/PDF/Sheets) created per year; pages × ~500–1,000
     tokens/page.
   - Web content: Common Crawl size and growth rate; Google-indexed pages; tokens
     per page.
   - Code: commits, LOC, GitHub archive; tokens per line ~5–10.
   - Meetings / calls: hours of global telephony + remote meetings; tokens as
     transcription (~140·wpm → ~8.4 k tokens/h).
   - Chat/messages: global daily messages across messengers; tokens per message.
   - Sensor/process data (factory floors, logs): separate bin, "non-human" but
     agent-relevant.
2. **Upper-bound term to be careful with**: total *potential* activity even absent
   a human doing it today (agent exploring, iterating, multi-agent zooming). This
   term is where the "Western standards for everyone" blow-up risk lives.
3. **Token-generation baseline (demand side)**: what humanity already produces in
   tokens via LLM APIs (industry-published inference throughput figures), and how
   fast it is compounding vs. the steady-state ceiling above.
4. **Datacenter conversion**: tokens/yr ↔ FLOPs ↔ accelerator-years ↔ GW ↔ CapEx,
   using open compute-efficiency figures (e.g., fp8 tokens per FLOP; modern
   training vs. inference efficiency; PUE~1.1–1.3). Compare resulting GW fleet
   against announced buildouts and against plausible physical limits
   (power, silicon, grid).

## Reference Data To Gather

- ILO / World Bank: employment and hours-worked aggregates.
- O*NET / time-use surveys (ATUS) for information-processing share of effort.
- Email / messaging / document volume studies (Radicati; Domo "Data Never Sleeps";
  Statista).
- Common Crawl index size + growth (for web generation rate).
- GitHub Archive / commit-volume data (for code).
- Cloud vendor inference-throughput and pricing pages (tokens/sec per server /
  per $, published token counts where public).
- Energy data for datacenters (IEA Energy & AI report; hyperscaler PUEs).
- Omdia/Dell'Oro/other capacity forecasts for ML server shipments as a secondary
  consistency check.

## Worked Numbers (first, rough pass — will refine)

Ternary of confidence: use **lower ≈ mid ≈ upper** per term; present the mid.

Working population  ~3 B; hours/yr ~1,900 → ~5.7·10^12 person-hours/yr.
Info share 0.2–0.3 → ~1.2–1.7·10^12 info-hours/yr.
Tokens/hour 5–10 k → ~0.6–1.7·10^16 tokens/hr·yr ≈ mid ~10^16…10^17 tokens/yr.

For comparison, even aggressive cloud inference today is ~10^14–10^15 tokens/yr
(rough). So the standing-task territory appears **1–3 orders of magnitude larger
than present global generated/tokenized content.**

Read as: if agentification approaches even a substantial fraction of replaceable
human effort, steady-state token demand dwarfs today's supply curve by orders of
magnitude — before accounting for agentic recursion. That is the same structure
as the "everyone at Western standards" problem: the ceiling is not obviously
reachable with the physical/financial build it implies.

## Deliverable Structure (this subfolder)

- `intent.md` — this file.
- `method-notes.md` — the precedent methods (galaxy count, Fermi, Drake) spelled
  out with citation-able sources.
- `data/` — raw reference numbers with source-links (emails, docs, web, code,
  telephony, capacity).
- `estimates.md` — the progressively refined model and per-term error bars.
- `datacenter-conversion.md` — tokens → FLOPs → GW → CapEx; comparison to
  announced fleet and physical limits.

## Anti-goals (explicitly out of scope)

- Not a job-automation forecast (that is headcount; this is effort/tokens).
- Not a claim about *when* — only about the order of magnitude of the territory.
- Not an investment recommendation per se; a physical-consistency bound.
- Avoiding any pretense of precision: the deliverable is the reasoning, the
  decomposition, and honest error bars — not a single "the answer is X" number.

## Next Steps (waiting for instruction)

1. Research the precedent methods and write `method-notes.md`.
2. Gather reference data into `data/` (start with emails, documents, web,
   telephony, code).
3. Build the first `estimates.md` worksheet with lower/mid/upper per term.
4. Build `datacenter-conversion.md`.
