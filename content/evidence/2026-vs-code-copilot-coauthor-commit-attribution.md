---
type: Evidence
title: "VS Code's 'Co-authored-by: Copilot' Default: 4 Million Commits Branded in the Attribution Backlash Microsoft Reversed"
description: "VS Code flipped its `git.addAICoAuthor` default from 'off' to 'all' in April 2026 (PR #310226), stamping 'Co-authored-by: Copilot <copilot@github.com>' onto every commit — even when AI features were disabled and even on commits with no AI involvement, with the trailer inserted after the commit-message UI — producing an estimated ~4 million branded commits, ~1,200-point Hacker News backlash, 'vandalism'/'marketing stunt' framing, an apology from the approving engineer, and a revert to 'off' in VS Code 1.119; GitHub Copilot's own AI code reviewer had flagged the config mismatch before merge."
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
  url: "https://github.com/microsoft/vscode/issues/314311"
  publisher: "GitHub (microsoft/vscode issue tracker) — Microsoft's official update; corroborated by press"
  author: "Dmitriy Vasyura (dmitrivMS) and VS Code maintainers; user reports"
  document_type: "Issue-tracker update (primary for rollback timeline) + engineering-blog and press coverage"
  published: 2026-04-22
  accessed: 2026-08-18
  access_notes: "Rollout history (1.110 introduction, PR #310226 flipping the default, 1.117 bug, 1.118 ship, 1.119 revert), the PR review artifacts, and the ~4 million-commit magnitude cross-checked against The Register, Windows Central, awesomeagents.ai, AI Beat, ostechnix, and DEV.to coverage of May 2026."
claims:
  - claim: "Feature introduction"
    value: "VS Code 1.110 (March 2026) added `git.addAICoAuthor` with values 'off'/'chatAndAgent'/'all'; default was 'off'"
  - claim: "Default flip"
    value: "PR #310226 (opened Apr 15, 2026, merged in one day with no substantive description) changed the default from 'off' to 'all'"
  - claim: "Trailer"
    value: "`Co-authored-by: Copilot <copilot@github.com>` appended to commit messages"
  - claim: "Bug severity"
    value: "Trailer added even with `chat.disableAIFeatures: true`, and to commits with no AI involvement (typo fixes, gitignore edits, merge commits); inserted after the user's commit-message review, violating what-you-see-is-what-you-get"
  - claim: "Scale"
    value: "Estimated ~4 million GitHub commits carried 'Co-authored-by: Copilot' by early May 2026 (AI Beat)"
  - claim: "Backlash"
    value: "~1,200-point / 646-comment Hacker News thread; 372 thumbs-down vs 2 thumbs-up on PR #310226; 'vandalism,' 'marketing stunt,' 'this could cost people their jobs' (Windows Central)"
  - claim: "Meta-irony"
    value: "GitHub Copilot's own PR-reviewer AI flagged that the schema default ('all') was out of sync with the runtime fallback ('off'), warning of 'unexpected behavior' — before merge"
  - claim: "Microsoft response"
    value: "Reverted default to 'off' in VS Code 1.119 (May 6, 2026, PR #313931); approving engineer Dmitriy Vasyura apologized: 'there was no ill intent by evil corporation, but rather a desire to support functionality'"
  - claim: "Commercial context"
    value: "The flip coincided with GitHub's move of Copilot to usage-based billing — every co-author trailer is a data point for AI-usage metrics"
  - claim: "Legal backdrop"
    value: "US Copyright Office guidance and Thaler v. Perlmutter exclude non-human co-authors; some enterprise legal teams require AI code stay under ~30% of a file for copyright protectability, which blanket trailers make unverifiable"
---

# VS Code's "Co-authored-by: Copilot" Default: 4 Million Commits Branded in the Attribution Backlash Microsoft Reversed

## What This Is

In the spring of 2026, Microsoft ran — and then backed out of — the exact play the repo documents for [Anthropic's Claude Code](2026-claude-code-commit-attribution-markers.md). VS Code 1.110 (March 2026) introduced the `git.addAICoAuthor` setting, defaulting to `"off"`. Then on **April 15, 2026**, PR [#310226](https://github.com/microsoft/vscode/issues/314311), a one-line change by a VS Code team member titled with no embellishment "Enabling ai co author by default," flipped the default to `"all"` and merged within a day. VS Code 1.118 (shipping April 29) stamped `Co-authored-by: Copilot <copilot@github.com>` onto commits — and, per the bug reports and release notes, onto commits where Copilot was never used and even where AI features were explicitly disabled.

The engine of the controversy was not the concept of attribution but the *default plus its bugs*:

- **False positives by design.** With `"all"`, the trailer was appended to typo fixes, `.gitignore` edits, merge resolutions, and `--amend` rewrites — to commits where Copilot "was demonstrably not invoked." As one analysis put it, the claim it makes is "true sometimes" but "recorded always."
- **Silent insertion.** The trailer was added *after* the user reviewed and confirmed the commit message, in the background — violating the WYSIWYG principle developers rely on when signing off code. "The message I reviewed before committing was not the final content that ended up in Git history."
- **Settings ignored.** Users with `chat.disableAIFeatures: true` still got the trailer; the earlier 1.117 rollout had attributed even non-Copilot code completions.
- **The meta-irony.** [GitHub Copilot's own AI code reviewer](https://awesomeagents.ai/news/vscode-1-118-copilot-coauthor-commits/) flagged the flaw *inside the PR thread itself* — the schema default was `"all"` while the runtime fallback still read `"off"` — warning of "unexpected behavior... and makes the intended default unclear." The PR merged anyway, with 25 of 26 checks passing and no substantive description.

## The Headline Numbers and Positions

- **~4 million GitHub commits** carrying `Co-authored-by: Copilot` by early May 2026 (AI Beat's estimate), in a git history "designed to be permanent."
- **Backlash scale**: the Hacker News thread topped ~1,200 points with ~646 comments; the PR drew **372 thumbs-down against 2 thumbs-up**; the GitHub Community Discussion was locked due to volume. Developers called it ["vandalism," a "marketing stunt,"](https://ostechnix.com/vs-code-ai-co-author-controversy-explained/) and warned "this could cost people their jobs" — a commit trailer could make an employee look like they use "a not-company-approved AI."
- **Microsoft's response**: default reverted to `"off"` in **VS Code 1.119 (May 6, 2026)**, with the approving engineer Dmitriy Vasyura's [public apology](https://ostechnix.com/vs-code-ai-co-author-controversy-explained/): "There was no ill intent by evil corporation, but rather a desire to support functionality that some customers expect of VS Code w.r.t. AI-generated code."
- **The commercial context skeptics flagged**: the flip landed as GitHub [moved Copilot to usage-based billing](https://ai-beat.github.io/news/2026/05/vscode-copilot-commit-attribution/), giving Microsoft "a financial interest in demonstrating that Copilot is woven into developer workflows — every commit with a co-author trailer is a data point."

The Register's closer tied the [corpus-piracy thread](../bibliography/2010-durand-vergne-organisation-pirate.md) directly: "not one commercial AI model credits the human authors who created their training material – unless forced to do so in court."

## Interpretation: The Same Move, the Same Recoil, the Same Boundary

Where [Claude Code's trailer](2026-claude-code-commit-attribution-markers.md) was on by default from day one and (as of access) still is, Microsoft's Copilot default was *flipped on after the fact, caught by the vendor's own AI reviewer, shipped, and reverted under fire*. The contrast teaches a boundary lesson: the community metal is the same — a `Co-Authored-By` trailer asserting co-authorship the [US Copyright Office's guidance and Thaler v. Perlmutter exclude](2026-claude-code-commit-attribution-markers.md) — but the *recoil* differs by how aggressively the vendor defaulted. Anthropic's opt-out default absorbed years of issues; Microsoft's flip to `"all"` exploded in less than a week because it claimed authorship "on behalf of its AI product, in your name and in your repository," in the most-permanent log a project keeps.

For the [territories model](../model/territories-of-the-ai-frontier.md), this is Territory 2's output layer: the same "enclosure by branding" the [Claude Code entry](2026-claude-code-commit-attribution-markers.md) documents, now measured at **scale** — ~4 million tampered provenance records, an advertising-by-default, and a provider controlling what the record *means* ([the watermark dynamic](2026-anthropic-claude-text-watermark-over-compliance.md) applied to code metadata instead of text). It also reinforces the model's J-curve point about [institutional lag](../frameworks/productivity-j-curve.md): the counter-boundary here came not from courts or regulators but from the developer community's own norms — the same norms that produced the kernel's `Assisted-by:` standard and that [Microsoft's own engineers then promised to align with](https://github.com/microsoft/vscode/issues/314311).

## Limits

- **The 4-million figure is an estimate.** AI Beat's count is derived from public commit search, not Microsoft telemetry; treat as order-of-magnitude.
- **No separate vendor intent evidence.** Whether the flip was marketing, completion, or both is inferred from timing (usage-based billing) and PR behavior; Microsoft's spokespeople denied intentional misattribution.
- **Source asymmetry.** The record is dominated by aggrieved developers and engineering blogs; the pro-attribution argument (honest provenance recording) is real but underrepresented — noted in one analysis's "coherent argument for this default."
- **Windows/VS Code contexts differ.** The trailer's reach varies by VS Code host/load path (schema default vs runtime fallback), which the confusion itself demonstrates.

## Sources Consulted

- [microsoft/vscode issue #314311 — "Update on 'Co-authored-by: Copilot' in commit messages" (Microsoft's official rollout/rollback record)](https://github.com/microsoft/vscode/issues/314311) — primary.
- [The Register — "Microsoft fixes VS Code after app gives Copilot credit for human's work" (May 4, 2026)](https://www.theregister.com/software/2026/05/04/microsoft-fixes-vs-code-after-copilot-credited-human-code/) — corroborating (incl. the training-data zinger).
- [awesomeagents.ai — "Microsoft Sneaks Copilot Credit Into VS Code Commits" (May 3, 2026)](https://awesomeagents.ai/news/vscode-1-118-copilot-coauthor-commits/) — corroborating (PR artifacts, Copilot AI review, WYSIWYG violation).
- [AI Beat — "Copilot Signs the Commit Whether You Asked It To or Not" (May 3, 2026)](https://ai-beat.github.io/news/2026/05/vscode-copilot-commit-attribution/) — corroborating (~4M commits, billing context).
- [Windows Central — "'This could cost people their jobs': VS Code added Copilot as co-author..." (May 5, 2026)](https://www.windowscentral.com/software-apps/this-could-cost-people-their-jobs-vs-code-added-copilot-as-co-author-without-permission-or-notice) — corroborating.
- [OSTechnix — "Microsoft Apologizes for Enabling AI Co-Author by Default in VS Code" (May 3, 2026)](https://ostechnix.com/vs-code-ai-co-author-controversy-explained/) — corroborating (praise/backlash, apology text).
- [DEV.to — "VS Code Now Credits Copilot on Every Commit by Default" (May 22, 2026)](https://dev.to/arthurpro/vs-code-now-credits-copilot-on-every-commit-by-default-446) — corroborating (defaults-as-policy analysis).