# Schema

Place JSON Schema files in this directory to add or refine content types.

## Discovery

- The validator scans `schema/` recursively for files ending in `*.schema.json`.
- Every discovered schema is loaded automatically.
- A schema can be generic or type-specific.

## Type-specific schemas

To validate a specific content type, define a schema whose object layer sets `type.const` to the exact content type name.

Example:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.local/schema/essay.schema.json",
  "allOf": [
    { "$ref": "https://raw.githubusercontent.com/ThingsAI-io/okf-validator/main/schemas/okf/v0.2/schema.json" },
    {
      "type": "object",
      "properties": {
        "type": { "const": "Essay" }
      }
    }
  ]
}
```

## Expectations

- Give each schema a unique `$id`.
- Keep any shared frontmatter rules in the OKF v0.2 base schema or another generic schema.
- Add a new schema file when you introduce a new content type.
