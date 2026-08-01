---
name: bibliography-entry
description: Bibliography entry template for content/bibliography/; use when writing or updating analytical source entries from recognized literature.
---

# Bibliography Entry

Use this skill when creating or updating a file under `content/bibliography/`.

Goal: produce a repo-ready analytical bibliography entry grounded in a real source from a recognized author, institution, journal, press, or research organization.

The authoritative schema for bibliography entries lives at `schema/bibliography.schema.json`. That schema extends `schema/content.schema.json`.

## Source Selection Rules

- Prefer primary sources over summaries.
- Prefer peer-reviewed journals, university presses, NBER, OECD, IMF, World Bank, working papers from named institutions, and named researchers at credible institutions.
- Reject anonymous, unverified, or low-credibility sources.
- Use canonical URLs, DOIs, or official publication pages when available.

## Required File Shape

Create or update a markdown file like `content/bibliography/YYYY-slug.md` with:

## Mandatory frontmatter fields

- `type: Bibliography`
- `title`
- `description`
- `reference`

The `schema/bibliography.schema.json` file enforces `type` and `reference`; `schema/content.schema.json` enforces `type`, `title`, and `description` for all content entries.

The `reference` object should usually include the source's verified bibliographic metadata. Use the fields already present in the repo as the model, typically:

- `authors`
- `year`
- `venue`
- `url`
- `doi` when available
- source-specific metadata such as `pdf_source`, `page_count`, `extraction_method`, or `access_date` when relevant

`tags`, `status`, `generated`, `verified`, and `stale_after` are optional unless the repo adds stricter rules later.

Use the existing bibliography pages as the model for how to fill the `reference` object and how to structure the body.

## Writing Expectations

- Keep the summary grounded in the source text.
- Name the method when the source uses one.
- Mention the strongest evidence or findings first.
- Prefer neutral, analytical prose.
- Keep titles, authors, years, venue names, and URLs accurate.
- Do not invent repository links or internal references.

## Practical Template

If a source is not yet fully analyzed, use this body scaffold and fill in the details progressively:

1. `reference` block with verified bibliographic metadata.
2. `Executive Summary` with 1-3 paragraphs.
3. `Core Contribution` with 2-4 paragraphs.
4. `Relevance to This Repository` with explicit links to current themes.
5. `What the Source Leaves Open` with limitations or research gaps.

## Quality Check

Before finishing, verify that:

- The file uses `type: Bibliography`.
- The title matches the source.
- The description is specific, not generic.
- All claims are defensible from the source.
- The entry fits the tone and depth of existing bibliography pages.
