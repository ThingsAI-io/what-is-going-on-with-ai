---
type: Evidence
title: "Claude Code's Default 'Co-Authored-By: Claude' Commit Markers: Vendor Branding in User Git History"
description: "Claude Code ships with a default-on behavior that appends 'Co-Authored-By: Claude <noreply@anthropic.com>' to every git commit and a '🤖 Generated with Claude Code' line to pull-request bodies — an attribution the US Copyright Office explicitly advises against ('should not list an AI technology... as an author or co-author'), producing sustained 2025–2026 backlash framed as 'branding user work,' while the mirror-image problem (autonomous agent commits credited to the human's GitHub identity, 338 lines of Go merged under kody-w's name) shows attribution cutting both ways in the output territory."
tags:
  - ai-coding-agents
  - attribution
  - authorship
  - enclosure
  - branding
  - output-territory
  - developer-ecosystem
status: stable
source:
  url: "https://github.com/anthropics/claude-code/issues/66602"
  publisher: "GitHub (anthropics/claude-code issue tracker)"
  author: "Claude Code users (issue authors and commenters)"
  document_type: "Issue tracker records / developer commentary (primary for tool behavior; complaints corroborated across multiple independent issues and blogs)"
  published: 2025-10-01
  accessed: 2026-08-18
  access_notes: "Tool's default behavior documented by multiple independent issue reports and two engineering blogs; the de-minified attribution function (v2.1.169) is reproduced in issue #66602. US Copyright Office guidance and kernel.org coding-agent conventions confirm the contested status of AI co-authorship trailers."
claims:
  - claim: "Default commit trailer"
    value: "Claude Code appends 'Co-Authored-By: Claude <noreply@anthropic.com>' to every git commit by default; opt-out requires discovering an 'attribution' or 'includeCoAuthoredBy' setting"
  - claim: "Default PR marker"
    value: "Claude Code adds a '🤖 Generated with <Claude Code>' line to pull-request bodies it creates"
  - claim: "Enforcement path"
    value: "The co-authorship trailer is repeated in the system prompt; multiple reports (#53259, #45137) describe user overrides (CLAUDE.md, settings.json, skills) failing against the system-prompt default"
  - claim: "Contested legal status"
    value: "U.S. Copyright Office guidance (88 Fed. Reg. 16190, March 16, 2023): applicants 'should not list an AI technology or the company that provided it as an author or co-author simply because they used it when creating their work'"
  - claim: "Community counter-convention"
    value: "The Linux kernel project codified 'Assisted-by:' over 'Co-Authored-By:' for coding agents because Co-Authored-By 'implies shared responsibility' an AI cannot hold (docs.kernel.org/process/coding-assistants.html)"
  - claim: "Backlash framing"
    value: "Users describe the default as 'branding user work,' 'vendor advertising inserted into user-owned git history without consent,' and 'vandalism'; issue #39664 calls it 'a shameless advertisement'"
  - claim: "Mirror-image problem (human identity)"
    value: "An autonomous Claude Code PR (#911 on steveyegge/gastown) merged Jan 25, 2026, carrying 338 lines of Go written by the agent but attributed in git/GitHub metadata to the human account kody-w, who never wrote it"
  - claim: "Metadata misuse side effect"
    value: "At one point GitHub attributed Co-Authored-By commits to a random user who had registered the noreply@anthropic.com address (Fabio Rehm, March 2026)"
---

# Claude Code's Default "Co-Authored-By: Claude" Commit Markers: Vendor Branding in User Git History

## What This Is

Claude Code — Anthropic's terminal coding agent — ships with attribution **on by default**: every commit it creates carries the git trailer `Co-Authored-By: Claude <noreply@anthropic.com>`, and every pull request it opens carries a `🤖 Generated with Claude Code` line. The behavior is documented across a long chain of GitHub issues ([#29999](https://github.com/anthropics/claude-code/issues/29999), [#27083](https://github.com/anthropics/claude-code/issues/27083), [#47579](https://github.com/anthropics/claude-code/issues/47579), [#53259](https://github.com/anthropics/claude-code/issues/53259), [#66602](https://github.com/anthropics/claude-code/issues/66602), [#69835](https://github.com/anthropics/claude-code/issues/69835)); issue [#66602](https://github.com/anthropics/claude-code/issues/66602) even reproduces the de-minified attribution function from build v2.1.169, whose final branch returns the trailer whenever no explicit setting is present — **the marker is on by omission.**

Git's `Co-Authored-By` trailer carries real semantics within the ecosystem: it asserts shared authorship and shows up in GitHub's contributor co-author display. The [US Copyright Office's AI-authorship guidance](https://www.copyright.gov/fedreg/2023/88fr16190.pdf) (88 Fed. Reg. 16190, March 2023) states applicants "should not list an AI technology or the company that provided it as an author or co-author simply because they used it when creating their work." The default marker therefore asserts, in the durable public record, exactly the co-authorship the US state tells authors not to claim.

## The Two Directions of the Attribution Problem

The evidence captures both directions of attribution flow in the output territory:

1. **Tool-to-vendor branding.** The vendor's name is stamped into the user's own git history — a marker that survives forever in commit metadata, PR bodies, contributor graphs, and `git blame`. Users' words in the issues carry the analytic point: "This is like a contractor stamping their logo on your house without asking"; "It's a marketing campaign on the backs of users"; one maintainer reports maintaining a `commit-msg` hook, a `scrub-promo` pre-push validator, and a release gate "all to counteract a feature I'm paying to not have."
2. **Agent-to-human identity.** In the reverse case, an autonomous agent commits under the human user's git identity. Kody Wildfeuer's March 2026 write-up documents PR [#911 on Steve Yegge's gastown repo](https://kody-w.github.io/2026/03/26/the-attribution-problem-when-your-ai-ships-code-under-your-name/): Claude Code authored 338 lines of Go, forked the repo, pushed, and opened a PR merged January 25, 2026 — while the git author, contributor graph, and repo contributor list all read `kody-w`. Disclosure existed only in the PR-body prose ("Generated with Claude Code"), not in the metadata that actually powers trust signals and recruiter checks.

The [Linux kernel's coding-assistant policy](https://docs.kernel.org/process/coding-assistants.html) is the community-negotiated resolution point: `Assisted-by:` rather than `Co-Authored-By:`, because the latter "implies shared responsibility" — review, licensing, accountability — that an AI cannot hold. The [Fabio Rehm analysis](https://fabiorehm.com/blog/2026/03/02/our-coding-agent-commits-deserve-better-than-co-authored-by/) adds the mechanical detail: at one point GitHub was attributing those commits to a random human user who had simply registered the `noreply@anthropic.com` address — tool metadata loaded into a human-oriented field, then rendered as human.

## Interpretation: Stamping the Inside of the Enclosure

This is the [territories model's](../model/territories-of-the-ai-frontier.md) Territory 2 — the weights-and-outputs — operating on the *interior* of the user's own repository. The pattern is enclosure by branding: the vendor does not need to claim ownership of the code to leave its marker on it; a default-on trailer turns the user's git history into a distribution surface for the vendor's name, in a format (co-authorship) whose semantics the vendor has authority to define. The user's characterization — "as if co-owning" — is not rhetorical: the trailer literally asserts co-authorship, against USCO guidance, inside the user's most durable professional record.

It pairs with the [Murphy-Hill coding-agents evidence](2026-murphy-hill-command-line-ai-coding-agents.md) (which measures the +24% pull-request lift the agents produce) and the [Microsoft 'tokenmaxxing' evidence](2026-microsoft-token-budgets-tokenmaxxing.md): the same outputs that are being optimized and budgeted are also being marked. Microsoft itself ran the same move — the [VS Code 'Co-authored-by: Copilot' default](2026-vs-code-copilot-coauthor-commit-attribution.md) — flipped to 'all', branded ~4 million commits, and reverted under backlash. And this entry completes a symmetry with the [watermarking entry](2026-anthropic-claude-text-watermark-over-compliance.md): on text, Anthropic watermarks *outputs* for state-mandated tracking; on code, it marks *the commits themselves* on its own initiative. Both are boundary moves on the output territory, made by the pirate-sovereign that [spends its manifesto arguing for open inputs](2026-zuckerberg-future-is-for-everyone-ai-manifesto.md).

## Limits

- **No official Anthropic statement in the evidence record here.** The tool's behavior is documented through its shipped defaults (observed and reverse-engineered by users), not through a vendor acknowledgment.
- **The defaults have moved.** Issue thread dates span Oct 2025–Jun 2026 and report inconsistent behavior (setting field renamed, `attribution.commit: ""` reportedly not honored in one version, improved in others); the entry records the persistent *default-on* pattern, not a single fixed config.
- **Polarized sources.** Issue trackers and blogs over-represent the aggrieved; the underrepresented counter-case is developers who find the marker a useful transparency record. Both are attitudes, not measurements of adoption.
- **The human-identity case is anecdotal.** Kody Wildfeuer's PR #911 is one documented instance; its representativeness is claimed, not measured.

## Sources Consulted

- [anthropics/claude-code issue #66602 — "Built-in Co-Authored-By: Claude commit trailer asserts AI co-authorship by default"](https://github.com/anthropics/claude-code/issues/66602) — primary (behavior + de-minified code).
- [Issue #29999 — "Co-Authored-By default is inappropriate — stop branding user work"](https://github.com/anthropics/claude-code/issues/29999) and [issue #27083 — "Co-Authored-By attribution should be opt-in"](https://github.com/anthropics/claude-code/issues/27083) — primary (backlash).
- [US Copyright Office — "Copyright Registration Guidance: Works Containing Material Generated by AI" (88 Fed. Reg. 16190)](https://www.copyright.gov/fedreg/2023/88fr16190.pdf) — primary (contested legal status).
- [Linux kernel — "Coding Style / Coding assistant conventions" (Assisted-by)](https://docs.kernel.org/process/coding-assistants.html) — primary (community resolution).
- [Kody Wildfeuer — "The Attribution Problem: When Your AI Ships Code Under Your Name" (Mar 26, 2026)](https://kody-w.github.io/2026/03/26/the-attribution-problem-when-your-ai-ships-code-under-your-name/) — corroborating (human-identity direction).
- [Fabio Rehm — "Our coding agent commits deserve better than Co-Authored-By" (Mar 2, 2026)](https://fabiorehm.com/blog/2026/03/02/our-coding-agent-commits-deserve-better-than-co-authored-by/) — corroborating (metadata mechanics).