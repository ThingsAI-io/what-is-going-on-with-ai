# Linux Kernel Data Point

## Scope

This note asks the same question we asked of Wikipedia, but for a software
project:

- how much content is there?
- how much change is there?
- how many people produce it?

The Linux kernel is a strong candidate because it has a public source tree,
public release notes, and long-running published development statistics.

## Primary Sources

- [The Linux Kernel Archives](https://kernel.org/)
- [How the development process works](https://kernel.org/doc/html/latest/process/2.Process.html)
- [torvalds/linux](https://github.com/torvalds/linux)
- [Development statistics for 6.10 kernel](https://lwn.net/Articles/981559/)
- [Development statistics for 6.17](https://lwn.net/Articles/1038358/)
- [Some 6.18 development statistics](https://lwn.net/Articles/1046966/)
- [Development statistics for 6.19](https://lwn.net/Articles/1057302/)

## What The Kernel Project Says About Scale

The kernel documentation says the project uses a rolling release model and that
"a typical release can contain about 13,000 changesets with changes to several
hundred thousand lines of code."

Source: [How the development process works](https://kernel.org/doc/html/latest/process/2.Process.html)

That is the closest thing the kernel project has to a built-in high-level scale
statement. It gives us a per-release unit that is directly comparable to an
editing or contribution cycle.

## What The Public Tree Gives Us

The source tree itself is public at:

- [torvalds/linux](https://github.com/torvalds/linux)
- [The Linux Kernel Archives](https://kernel.org/)

That means the project can be measured directly from its revision history. Unlike
Wikipedia, however, the kernel does not publish one canonical summary page with
the equivalent of a words table, an edits table, and a users table all in one
place.

## What Published Release Statistics Show

The LWN kernel statistics articles are not the kernel project itself, but they are
derived from the kernel history and are the most useful published cycle-level
summaries.

Recent examples:

- **6.10**: 13,312 non-merge changesets; 1,918 developers; 242 first-time
  contributors
- **6.17**: 13,089 non-merge changesets; 2,038 developers; 298 first-time
  contributors
- **6.18**: 13,710 commits; 2,134 developers; 333 first-time contributors
- **6.19**: 14,344 non-merge changesets; 2,141 developers; 333 first-time
  contributors

Sources:

- [Development statistics for 6.10 kernel](https://lwn.net/Articles/981559/)
- [Development statistics for 6.17](https://lwn.net/Articles/1038358/)
- [Some 6.18 development statistics](https://lwn.net/Articles/1046966/)
- [Development statistics for 6.19](https://lwn.net/Articles/1057302/)

These are the kernel analogue of Wikipedia edits and editors: they show the
amount of change and the number of distinct people contributing to a release
cycle.

## What We Can Use As A Data Point

For the territory-of-AI project, the most useful first-order kernel data point is:

> A typical Linux kernel release is on the order of **13,000 changesets** and
> **several hundred thousand lines of change**, with roughly **2,000+ developers**
> participating in a given release cycle.

That is good enough for a comparative baseline, but it is not yet the final
answer to total kernel code volume or total kernel contributor volume over time.

## What Is Still Missing

The kernel still lacks, at least in one canonical public place, a Wikimedia-style
table that directly reports:

- total lines of code in the tree at each point in time
- total unique contributors over the full history in one official summary
- gross additions versus deletions in a yearly or release-level public table

Those numbers can be reconstructed from the tree, but they are not presented in a
single official project dashboard the way Wikipedia’s words and edits are.

## Why This Matters

The kernel is a useful calibration case because it is not prose content. It is a
large, high-entropy technical artifact with:

- a known public source tree
- release cycles that are easy to count
- contributor counts by release
- change volume by release

That makes it a good bridge from "human effort in content" to "human effort in
code."
