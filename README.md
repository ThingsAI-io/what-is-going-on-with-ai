# okf-starter-kit

Starter template for OKF-style writing projects.

## Layout

- `content/` holds the markdown documents for the project.
- `schema/` holds JSON schema files used to validate document frontmatter.
- `tools/validate-content.mjs` checks every content document under `content/`.

## Schemas

Drop a new `*.schema.json` file into `schema/` to add support for a new content type.
The validator discovers schema files automatically.

## opencode Agent

This template includes a project-level opencode subagent at `.opencode/agents/content-architect.md`.
Use it when you want help shaping content structure, schema boundaries, and naming conventions.

## Usage

1. Install dependencies with `npm install`.
2. Validate the template content with `npm run validate`.
