# Method Notes: How to Estimate AI-Replaceable Human Activity

## Purpose

This note is an operational manual for approaching a problem that is too large to
measure directly: how much human effort could be agentified or AI-replaced, and
how that effort might be represented in token-equivalent terms.

The goal is not a finished answer. The goal is a procedure that can produce a
defensible order-of-magnitude estimate, with explicit assumptions, primary-source
anchors, and visible error bars.

## What This Method Is For

Use this method when:

- The quantity you want does not exist as a single published statistic.
- Direct measurement is impossible, but proxies exist.
- The useful output is a range, not a point estimate.
- You need to connect a social quantity to a physical one, such as tokens,
  FLOPs, watts, or datacenter capacity.

Do not use this method to:

- Predict exact adoption rates.
- Claim a precise ceiling.
- Skip the decomposition step and jump straight to a headline number.

## Primary-Source Precedents

The method should be patterned on how scientists handle difficult-to-measure
quantities in adjacent domains.

### Fermi-style estimation

Fermi’s style of reasoning is the core precedent: start with an observable proxy,
reduce the problem to a few factors, and combine them into a transparent estimate.
The reconstruction of the Trinity estimate in [Katz’s "Fermi at Trinity"](https://www.osti.gov/biblio/1836991)
is useful because it shows the same logic the project needs: a small observation,
a physical conversion, and a check against a known scale.

The general lesson is not the exact Trinity number. The lesson is that a rough but
structured estimate is better than a vague intuition when the system is too large
to measure directly.

For a broader exposition of Fermi-problem style reasoning, see [Adam, "Fermi
Problems: Educated Guesses"](https://digitalcommons.odu.edu/cgi/viewcontent.cgi?article=1179&context=mathstat_fac_pubs).

### Galaxy counting as proxy counting

The Hubble Deep Field literature is the right kind of precedent for large-scale
proxy work. In [Williams et al., "The Hubble Deep Field: Observations, Data
Reduction, and Galaxy Photometry"](https://doi.org/10.1086/118105), the authors
show how a tiny field can support larger inference when the sample is deep,
carefully cataloged, and clearly corrected for selection effects.

The follow-on galaxy-count paper, ["Are Hubble Deep Field Galaxy Counts Whole
Numbers?"](https://iopscience.iop.org/article/10.1086/310394/fulltext/5148.text.html),
is especially relevant because it shows the danger of overcounting fragments as
whole objects. That is the same failure mode this project must guard against when
counting tokens, documents, messages, or code events as if each were independent
units of human effort.

### Time-use statistics as a definition discipline

Human effort cannot be estimated without first defining what counts as work,
what counts as related activity, and what reference period is being used.
The cleanest primary-source standards for that are the ILO and BLS time-use
materials.

Use these as the definitional backbone:

- [BLS American Time Use Survey Methods Overview](https://www.bls.gov/tus/methods-overview.htm)
- [BLS ATUS User’s Guide](https://www.bls.gov/tus/atususersguide.pdf)
- [BLS ATUS Data Sources](https://www.bls.gov/opub/hom/atus/data.htm)
- [ILO Resolution on working time statistics](https://www.ilo.org/sites/default/files/wcmsp5/groups/public/%40dgreports/%40stat/documents/normativeinstrument/wcms_112455.pdf)
- [UNSD ICATUS 2016](https://unstats.un.org/unsd/demographic-social/time-use/icatus-2016/)

The lesson here is procedural: before estimating the quantity, define the unit of
activity, the diary window, and the categories of effort. If the categories are
unclear, the estimate will collapse into an argument about definitions.

### Large text corpora as content proxies

For web-scale human output, use corpus infrastructure as the anchor, not anecdotes.
The primary reference points are the corpus itself and its documentation:

- [Common Crawl overview](https://commoncrawl.org/overview)
- [Common Crawl data portal](https://data.commoncrawl.org/)
- [Common Crawl get started guide](https://commoncrawl.org/get-started)

The reason Common Crawl matters is not that it measures all human content. It
provides a reproducible sample of the web, which can be used as a proxy for one
important channel of human activity.

### Code activity as event streams

For software work, use event archives rather than impressionistic claims about
"coding activity."

- [GH Archive](https://www.gharchive.org/)
- [GitHub data ready for you to explore with BigQuery](https://github.blog/news-insights/research/github-data-ready-for-you-to-explore-with-bigquery/)

These sources are useful because they expose code-adjacent human actions as
machine-readable events. That makes them suitable as a proxy family for one slice
of agentifiable effort.

## Operational Procedure

### 1. Define the target quantity

Write a single sentence that specifies the quantity.

Example template:

> Estimate the total amount of human effort per year that could plausibly be
> represented as AI-executable work, expressed as token-equivalent activity.

Then immediately lock down the boundaries:

- What counts as human effort?
- What counts as replaceable or agentifiable?
- Is the unit annual, daily, or per active worker?
- Are you counting only market work, or all productive activity?

### 2. Split the problem into bins

Do not try to estimate "human activity" as one blob.

Use bins that can be separately anchored:

- text generation and consumption
- email and messaging
- documents and spreadsheets
- meetings and calls
- code and issue tracking
- web publishing and editing
- administrative work and coordination
- other information-heavy work

Each bin should have its own proxy, conversion factor, and uncertainty range.

### 3. Choose anchor datasets

For each bin, pick the best available primary source or dataset.

Selection rules:

- Prefer direct measurement over indirect inference.
- Prefer a source with a documented method.
- Prefer a public dataset or official statistical source over a blog summary.
- Prefer a source that can be reproduced or queried again later.

If a bin has no good anchor, leave it empty rather than inventing precision.

### 4. Define the proxy relationship

For every bin, write the conversion from the observed quantity to the target
quantity.

Examples of conversion forms, not final values:

- messages → tokens
- pages → tokens
- minutes of speech → transcription tokens
- code events → lines or tokens
- diary activity minutes → share of effort

The important part is that the proxy and the target are linked by a visible rule.
If the rule cannot be stated, the estimate is not ready.

### 5. Assign low, middle, and high values

For each bin, estimate a range.

Use a three-part view:

- low: conservative lower bound
- mid: best guess
- high: generous upper bound

The middle value should not be an average by default. It should be the most
defensible central estimate.

### 6. Check for double counting

This is where proxy-counting problems usually fail.

Ask:

- Does the same activity appear in more than one dataset?
- Does one event encode multiple units of effort?
- Does a tokenized artifact represent original work, duplication, or both?
- Are you counting outputs, inputs, and intermediates separately?

The Hubble Deep Field literature is the warning sign here: small structures can
be mistaken for multiple objects when they are really one system with fragments.
The same caution applies to AI-replacement estimates.

### 7. Convert everything to the same unit

Choose the common unit early and keep it fixed.

For this project, the working unit is token-equivalent human activity per unit
time.

Only after the bins are stated in their native units should you convert into:

- tokens
- FLOPs
- GPU-hours
- MW or GW
- CapEx

Do not start from GPU-hours and work backward unless the human-effort side is
already clearly defined.

### 8. Test against independent ceilings

Every result needs at least one sanity check from a different domain.

Possible checks include:

- total hours worked in the economy
- annual document or message volume
- web corpus growth
- known limits of datacenter power, silicon, or deployment pace
- observed AI inference throughput in the wild

If the estimate exceeds a ceiling by a large margin, do not smooth it away.
Either the estimate is wrong, or the ceiling is the point.

### 9. Report the answer as a range plus a story

The output should have two parts:

- a numeric range
- the reasoning structure that produced it

The range is the answer. The reasoning is the product.

### 10. Record what would improve the estimate

Every first-pass estimate should end with a research backlog:

- which dataset would narrow the largest error term
- which proxy is most fragile
- which category of activity is most likely missing
- which conversion factor deserves separate measurement

This turns the estimate into an iterative research program instead of a one-off
guess.

## Recommended Work Order For This Project

1. Build the bin structure.
2. Attach primary sources to each bin.
3. Write the proxy conversions.
4. Estimate each bin independently.
5. Merge the bins and inspect double counting.
6. Convert the result into compute and datacenter terms.
7. Stress-test against physical and economic limits.

## What To Keep Fixed

Keep these fixed across drafts:

- the question definition
- the time window
- the unit of analysis
- the bin structure
- the conversion rules

If those change, the estimate is no longer comparable across versions.

## What To Leave Open

Leave these open until the data work is done:

- the exact bin weights
- the final token-per-effort conversion
- the amount of agentification that is realistic versus merely possible
- the datacenter equivalence curve

That uncertainty is not a flaw. It is the shape of the problem.
