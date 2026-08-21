# Wikipedia Simulation: Replacing Wikipedia Effort

## Purpose

This note is a working frame for a simulation question:

> What would it mean to replace Wikipedia’s human effort with agents?

The point is not to solve it yet. The point is to classify the available metrics
so we can estimate effort without confusing it with content or demand.

## Short Critique Of The Naive Split

The three-way split you suggested is close, but not quite enough on its own:

- **inputs** are not just "global data"; they are the exogenous pressures that
  enter the system
- **outputs** are not just diffs; diffs are often the *measured trace of work*,
  not the final output itself
- **effort** is broader than comments and discussions; it includes edits,
  reverts, review, maintenance, and coordination overhead

So the cleaner split is:

1. **Demand / Inputs**: what arrives from outside the system.
2. **Work / Process**: the human actions that transform the system.
3. **State / Outputs**: the persistent Wikipedia artifact after those actions.

That is more causal and less ambiguous than treating diffs as outputs and
discussions as effort in a loose way.

## Recommended Taxonomy

### 1. Demand / Inputs

These are the things that create pressure for work, but are not themselves the
work product.

Useful metrics we already have or can infer:

- page views
- new article demand / new article creation rate
- incoming vandalism / reversion pressure
- topic churn or controversial pages with repeated edits
- external source availability, if later measured separately

For a simulation, these are the inputs to the human labor system. They are not
the labor itself.

### 2. Work / Process

These are the actual human activities that an agent would need to replace.

Useful metrics we already have or can reconstruct:

- edits
- revisions
- edit summaries / comments
- talk-page comments
- discussion threads
- reverts
- restorations
- modifications of existing comments
- page protection / moderation actions, if available from logs

This is the core category for the simulation. If the question is "how much human
effort can agents replace?" this is the layer to measure.

### 3. State / Outputs

These are the persistent artifacts left behind by the work.

Useful metrics we already have:

- words
- bytes
- article count
- page count
- database size
- full revision history size
- current content size

This layer tells us what the system produced, but not how hard it was to produce.
Outputs are necessary, but they are not enough to estimate effort.

## Mapping The Wikimedia Metrics

### Demand / Inputs

- **Page views**: measure readership demand and likely downstream maintenance
  pressure.
- **New articles per day**: a proxy for creation demand.
- **Page requests**: a broader access-demand signal.
- **Controversial / heavily reverted pages**: demand for moderation and repair.

### Work / Process

- **Edits per month**: the main unit of editing labor.
- **Edits per page**: concentration of work.
- **Edits per user**: distribution of labor across contributors.
- **Talk-page comments**: coordination, negotiation, and dispute resolution.
- **Discussion threads**: higher-level coordination structure.
- **Reverts**: negative work, but still work.
- **Restorations / modifications / deletions** in talk-page corpora: interaction
  dynamics and moderation overhead.
- **Edit summaries**: lightweight metadata of intent and coordination.

### State / Outputs

- **Words**: content volume.
- **Bytes**: storage-weighted content volume.
- **Articles / pages**: structural output.
- **Revision history size**: accumulated artifact of past work.

## Why Diffs Need Special Treatment

Diffs sit between work and output.

They are:

- the immediate trace of work
- the mechanism by which output state changes
- the thing you can count to reconstruct net and gross change

So in this project, diffs should be treated as **process traces**, not as pure
output.

That means:

- a diff is not the same as a finished article
- a diff is not the same as effort, either
- a diff is the observable bridge between effort and state

## What A Wikipedia Simulation Should Measure

If we want to model "replace all Wikipedia effort with agents," the simulation
should ask at least four separate questions:

1. How much demand exists for Wikipedia labor?
2. How much human work is currently used to satisfy that demand?
3. How much of that work is visible in edits, talk, and moderation?
4. How much output state results from that work?

That gives a usable decomposition:

- **demand** explains why work exists
- **process** explains what humans do
- **output** explains what the work leaves behind
- **agent replacement** then estimates which process terms can be automated and
  at what token cost

## Practical Measurement Plan

For a first pass, measure in this order:

1. page views and page requests
2. edits and revisions
3. talk-page comments and discussion threads
4. reverts and restorations
5. words and bytes
6. editor counts and contributor concentration

That sequence starts with demand, moves into work, and ends with state.

## Bottom Line

If the aim is to replace Wikipedia effort with agents, the best organizing frame
is not simply input/output/effort.

Use this instead:

- **Demand / Inputs**
- **Work / Process**
- **State / Outputs**

Within that frame, treat diffs as process traces, talk pages as coordination
work, and words/bytes/pages as output state.
