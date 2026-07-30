import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import test from 'node:test';

import { validateContent } from '../tools/validate-content.mjs';

function write(root, relativePath, content) {
  const fullPath = path.join(root, relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
}

const baseSchema = `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://okf-starter-kit.local/schema/content.schema.json",
  "$defs": {
    "nonEmptyString": { "type": "string", "minLength": 1 }
  },
  "type": "object",
  "required": ["type"],
  "properties": {
    "type": { "$ref": "#/$defs/nonEmptyString" },
    "title": { "$ref": "#/$defs/nonEmptyString" },
    "description": { "$ref": "#/$defs/nonEmptyString" }
  },
  "additionalProperties": true
}`;

test('valid content bundle passes', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'okf-starter-kit-'));
  try {
    write(root, 'index.md', '---\ntype: Index\ntitle: Example bundle\ndescription: A small example bundle.\n---\n\n# Example bundle\n');
    write(root, 'notes/example.md', '---\ntype: Note\ntitle: Example note\ndescription: A valid note.\n---\n\n# Note\n');

    const result = validateContent(root);
    assert.equal(result.errors.length, 0);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test('a newly added schema file is discovered automatically', () => {
  const contentRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'okf-starter-kit-content-'));
  const schemaRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'okf-starter-kit-schema-'));

  try {
    write(schemaRoot, 'content.schema.json', baseSchema);
    write(
      schemaRoot,
      'essay.schema.json',
      `{
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://okf-starter-kit.local/schema/essay.schema.json",
        "allOf": [
          { "$ref": "https://okf-starter-kit.local/schema/content.schema.json" },
          {
            "type": "object",
            "properties": {
              "type": { "const": "Essay" },
              "audience": { "type": "string", "minLength": 1 }
            },
            "required": ["audience"]
          }
        ]
      }`
    );
    write(
      contentRoot,
      'essay.md',
      `---
type: Essay
audience: writers
---

# Essay
`
    );

    const result = validateContent(contentRoot, schemaRoot);
    assert.equal(result.errors.length, 0);
  } finally {
    fs.rmSync(contentRoot, { recursive: true, force: true });
    fs.rmSync(schemaRoot, { recursive: true, force: true });
  }
});

test('missing frontmatter is rejected', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'okf-starter-kit-'));
  try {
    write(root, 'index.md', '---\ntype: Index\ntitle: Example bundle\ndescription: A small example bundle.\n---\n');
    write(root, 'notes/example.md', '# Missing frontmatter\n');

    const result = validateContent(root);
    assert.match(result.errors.join('\n'), /missing YAML frontmatter block/);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});
