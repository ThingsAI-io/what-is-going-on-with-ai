# Wikipedia Data Point

## Scope

This note records what Wikimedia already measures about Wikipedia at scale, and
what can be reconstructed from the underlying revision history.

The short answer is: yes, we have useful numbers for Wikipedia content volume,
edits, users, and talk-page discussions. We do **not** have a single official
number that directly says "how much new content vs. old content vs. discussion"
for all of Wikipedia in one line. Instead, Wikimedia provides the raw history and
several official summaries that let us reconstruct those quantities.

## Primary Sources

- [Wikipedia Statistics](https://en.wikipedia.org/wiki/Wikipedia:Statistics)
- [Wikistats - Statistics For Wikimedia Projects](https://stats.wikimedia.org/)
- [Wikipedia Statistics - Tables - Words](https://stats.wikimedia.org/EN/TablesDatabaseWords.htm)
- [Wikipedia Statistics - Tables - Edits per month](https://stats.wikimedia.org/EN/TablesDatabaseEdits.htm)
- [Wikipedia Statistics - Tables - Database size](https://stats.wikimedia.org/EN/TablesDatabaseSize.htm)
- [Data dumps / Dump format](https://meta.wikimedia.org/wiki/Data_dumps/Dump_format)
- [Page metadata](https://meta.wikimedia.org/wiki/Page_metadata)
- [Analytics: MediaWiki History](https://dumps.wikimedia.org/other/mediawiki_history/readme.html)
- [Research:Detox/Data Release](https://meta.wikimedia.org/wiki/Research:Detox/Data_Release)

## What Wikimedia Publishes Directly

Wikimedia’s statistics pages publish direct counts for the English Wikipedia and
for Wikimedia projects overall. On the English Wikipedia statistics page, the
current summary includes:

- **7,226,995 articles**
- **66,117,387 pages**
- **1,365,347,508 edits**
- **54,123,699 users**
- **252,754 editors**
- **813 admins**

It also reports that, as of 2026:

- the English Wikipedia has **63 GB** of current article text
- the English Wikipedia has **166 GB** of current page text across all pages
- the full revision history occupies about **28.6 TB**

Source: [Wikipedia Statistics](https://en.wikipedia.org/wiki/Wikipedia:Statistics)

The Wikimedia stats tables also include an explicit **Words** metric:

- **Total number of words** excluding redirects, HTML/wiki codes, and hidden links
  [Wikipedia Statistics - Tables - Words](https://stats.wikimedia.org/EN/TablesDatabaseWords.htm)

That is the direct answer to the "Wikipedia content in words" part of the
question.

## What Wikimedia Publishes About Activity

Wikimedia’s stats tables also expose edit activity directly:

- **Edits per month** counts edits in the past month, including redirects,
  unregistered contributors, and bots
  [Wikipedia Statistics - Tables - Edits per month](https://stats.wikimedia.org/EN/TablesDatabaseEdits.htm)
- the English Wikipedia statistics page states that in 2025 the English Wikipedia
  received **62 million edits**, and all active Wikipedias received **172 million
  edits**
  [Wikipedia Statistics](https://en.wikipedia.org/wiki/Wikipedia:Statistics)

For the territory-of-AI project, this matters because edits are a direct proxy for
ongoing human effort, even if they are not a direct proxy for new content volume.

## What Can Be Reconstructed From Revision History

The revision history is the key to moving from "counts" to "diffs."

Wikimedia’s dump format documentation says that the XML content dumps contain the
complete raw text of some or all revisions, and that the full history files can be
extremely large.

The page metadata documentation says each revision can include:

- revision id
- timestamp
- user or IP
- edit comment
- byte length of revision content
- SHA1 of the revision content
- parent revision id

Sources:

- [Data dumps / Dump format](https://meta.wikimedia.org/wiki/Data_dumps/Dump_format)
- [Page metadata](https://meta.wikimedia.org/wiki/Page_metadata)

This means Wikimedia already gives us the ingredients needed to compute:

- new content added per edit
- old content preserved per edit
- net growth per article
- byte deltas per revision
- edit summaries and revision comments

In other words: the diffs are not usually published as a single aggregate number,
but they are reconstructible from the underlying history.

## Talk Pages And Discussion

Wikipedia discussions are also reconstructible from revision history.

Two primary-source datasets are especially useful:

- [Research:Detox/Data Release](https://meta.wikimedia.org/wiki/Research:Detox/Data_Release)
- [Analytics: MediaWiki History](https://dumps.wikimedia.org/other/mediawiki_history/readme.html)

The Detox data release says its Wikipedia Comments Corpus is built by computing
diffs over the full revision history and extracting the content added for each
revision.

The MediaWiki History dataset says it contains a historical record of revision,
user, and page events since 2001, with precomputed fields such as:

- edit-count per user
- edit-count per page
- reverting and reverted revisions

That is the cleanest primary-source basis for quantifying Wikipedia discussion
volume, because talk-page comments are not just separate messages: they are edits
to pages that can be reconstructed into conversation structures.

## Useful Precomputed Conversation Numbers

The research corpus on Wikipedia talk pages gives scale for discussion volume.

The WikiConv paper reports that the English Wikipedia component contains roughly:

- **91 million conversations**
- **212 million conversational actions**
- **24 million talk pages**

It also reports reconstruction accuracy of about **98%** for English and Chinese
talk-page corpora.

Source: [WikiConv / complete conversational history of Wikipedia talk pages](https://ar5iv.labs.arxiv.org/html/1810.13181)

Another corpus of Wikipedia discussions reports:

- **166,322 discussion threads**
- across **1,236 articles/topics**
- spanning **15 topic categories or domains**

Source: [A Corpus of Wikipedia Discussions: Over the Years, with Topic, Power and Gender Labels](https://aclanthology.org/L16-1322/)

These are not global totals for every talk-page interaction on every Wikipedia, but
they do show that the discussion layer is measurable and has already been
reconstructed at large scale.

## What This Means For The Project

For the AI-territory question, Wikipedia is useful because it gives us multiple
layers of human effort:

- **content volume**: words, bytes, article counts
- **editing volume**: edits per month, edits per page, edits per user
- **discussion volume**: talk-page comments, additions, modifications,
  deletions, restorations
- **history depth**: full revision logs with byte lengths and edit comments

That makes Wikipedia a good calibration dataset for a Fermi-style estimate of
human effort expressed as text-like work.

## What We Still Need To Compute Later

This note answers the data availability question, but not the full estimate.
Later, we may still want to compute:

- total words in a specific Wikipedia language edition at a specific date
- net new words added in a year
- gross edit delta versus net content growth
- talk-page additions versus deletions versus restorations
- article-space versus talk-space versus user-space effort

Those are reconstruction tasks on top of the raw history. The data exists; the
aggregation step is the next job.
