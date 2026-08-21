# GitHub Code-Production Data Point

## Scope

This note collects the best primary-source GitHub data point I could find for
pre-2025 platform-scale software activity.

Important boundary:

- GitHub does **not** publish a single total for "all code generated" in lines
  of code.
- The closest platform-level proxy GitHub does publish is **contribution volume**
  across repositories.
- For this subproject, that proxy is useful because the broader question is how
  much human effort is represented by software activity, not only how many jobs
  exist.

## Primary Sources

- [Octoverse: AI leads Python to top language as the number of global developers surges](https://github.blog/news-insights/octoverse/octoverse-2024/)
- [GitHub’s top blogs of 2024](https://github.blog/developer-skills/githubs-top-blog-posts-of-2024/)
- [Making open source data more available](https://github.blog/news-insights/research/making-open-source-data-more-available/)
- [GitHub data, ready for you to explore with BigQuery](https://github.blog/news-insights/research/github-data-ready-for-you-to-explore-with-bigquery/)

## What GitHub Says For 2024

GitHub’s Octoverse 2024 report states that:

- developers around the world made **more than 5.2 billion contributions** to
  more than **518 million open source, public, and private projects** in 2024
  [Octoverse 2024](https://github.blog/news-insights/octoverse/octoverse-2024/)
- developers globally made **nearly 1 billion contributions** to open source and
  public repositories across GitHub in 2024
  [Octoverse 2024](https://github.blog/news-insights/octoverse/octoverse-2024/)
- developers made **4.3 billion contributions** across more than **181 million
  private repositories** in 2024
  [Octoverse 2024](https://github.blog/news-insights/octoverse/octoverse-2024/)
- GitHub says there are now **150 million developers on GitHub**
  [GitHub’s top blogs of 2024](https://github.blog/developer-skills/githubs-top-blog-posts-of-2024/)
- GitHub says **1.4 million new developers globally joined open source** in 2024
  [Octoverse 2024](https://github.blog/news-insights/octoverse/octoverse-2024/)

## Working Data Point

For this project, the safest first-order data point is:

> In GitHub’s own 2024 reporting window, platform activity reached **5.2 billion
> contributions** across all projects, with **nearly 1 billion** of those in
> open source and public repositories, and GitHub reported **150 million
> developers on the platform**.

That is not yet a measure of code lines. It is a measure of the amount of
software-related human activity moving through GitHub.

## Why This Is Useful

This metric is useful for the territory-of-AI question because it gives a
platform-scale baseline for activity before the 2025 AI boom:

- contributions show how much software work is actually flowing through the
  platform
- developer counts show how broad the contributor base is
- the 2024 reporting window closes before the post-2024 AI acceleration that may
  distort later comparisons

## What It Does Not Yet Tell Us

This source does not yet answer:

- total lines of code produced on GitHub
- unique number of people responsible for all 2024 contributions
- how many of those contributions are original code versus edits, comments,
  reviews, or metadata activity

Those are separate questions and would require a direct dataset query or a more
specialized platform metric.

## Historical Anchor

GitHub’s earlier public-data releases help define the scale and shape of the
corpus:

- in 2016, GitHub said its released dataset covered more than **2.8 million open
  source GitHub repositories**, with more than **145 million unique commits**,
  over **2 billion different file paths**, and **163 million files** in the
  latest revision snapshot
  [Making open source data more available](https://github.blog/news-insights/research/making-open-source-data-more-available/)
- GitHub also described GH Archive as a record of public GitHub timeline events,
  with the data available for public analysis and updated continuously through
  public archives
  [GitHub data, ready for you to explore with BigQuery](https://github.blog/news-insights/research/github-data-ready-for-you-to-explore-with-bigquery/)

That historical anchor matters because it shows the platform has long treated
GitHub activity as an analyzable corpus rather than a vague impression.

## Next Query To Run Later

If we want a tighter answer than this note provides, the next step is to query
GitHub’s public data products directly and separate:

- code pushes
- unique developers
- file additions and deletions
- non-code contribution types

For now, this note records the best primary-source platform-scale baseline.
