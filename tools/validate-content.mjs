import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath, pathToFileURL } from 'node:url';

import Ajv2020 from 'ajv/dist/2020.js';
import { parseDocument } from 'yaml';

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEFAULT_CONTENT_DIR = path.join(ROOT_DIR, 'content');
const DEFAULT_SCHEMA_DIR = path.join(ROOT_DIR, 'schema');

class ValidationResult {
  constructor() {
    this.errors = [];
  }

  error(message) {
    this.errors.push(message);
  }
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function isPlainObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function walkSchemaFiles(rootDir) {
  const files = [];

  function walk(currentDir) {
    for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.schema.json')) {
        files.push(fullPath);
      }
    }
  }

  walk(rootDir);
  files.sort();
  return files;
}

function walkMarkdownFiles(rootDir) {
  const files = [];

  function walk(currentDir) {
    for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        files.push(fullPath);
      }
    }
  }

  walk(rootDir);
  files.sort();
  return files;
}

function parseFrontmatter(text, filePath, required) {
  const lines = text.split(/\r?\n/);

  if (lines.length === 0 || lines[0].trim() !== '---') {
    if (required) {
      throw new Error(`${filePath}: missing YAML frontmatter block`);
    }
    return { frontmatter: null, body: text };
  }

  let endIndex = -1;
  for (let i = 1; i < lines.length; i += 1) {
    if (lines[i].trim() === '---') {
      endIndex = i;
      break;
    }
  }

  if (endIndex === -1) {
    throw new Error(`${filePath}: unterminated YAML frontmatter block`);
  }

  const doc = parseDocument(lines.slice(1, endIndex).join('\n'));
  if (doc.errors.length > 0) {
    throw new Error(`${filePath}: invalid YAML frontmatter: ${doc.errors[0].message}`);
  }

  const frontmatter = doc.toJS() ?? {};
  if (!isPlainObject(frontmatter)) {
    throw new Error(`${filePath}: frontmatter must be a YAML mapping`);
  }

  let body = lines.slice(endIndex + 1).join('\n');
  if (body.startsWith('\n')) {
    body = body.slice(1);
  }

  return { frontmatter, body };
}

function formatAjvPath(instancePath) {
  if (!instancePath) {
    return 'frontmatter';
  }
  return `frontmatter${instancePath.replaceAll('/', '.')}`;
}

function formatAjvError(error) {
  const location = formatAjvPath(error.instancePath);
  if (error.keyword === 'required') {
    return `${location}: missing required field \`${error.params.missingProperty}\``;
  }
  if (error.keyword === 'enum') {
    return `${location}: must be one of ${error.params.allowedValues.map((value) => `\`${value}\``).join(', ')}`;
  }
  if (error.keyword === 'pattern') {
    return `${location}: has invalid format`;
  }
  return `${location}: ${error.message}`;
}

function getSchemaObjectLayer(schema) {
  if (isPlainObject(schema) && isPlainObject(schema.properties)) {
    return schema;
  }

  if (Array.isArray(schema.allOf)) {
    return schema.allOf.find((layer) => isPlainObject(layer) && isPlainObject(layer.properties)) ?? null;
  }

  return null;
}

function getSchemaTypeName(schema, filePath) {
  const objectLayer = getSchemaObjectLayer(schema);
  const typeName = objectLayer?.properties?.type?.const;

  if (!typeName) {
    return null;
  }

  if (typeof typeName !== 'string' || typeName.length === 0) {
    throw new Error(`${filePath}: schema type const must be a non-empty string`);
  }

  return typeName;
}

function buildSchemaModel(schemaDir) {
  const schemaFiles = walkSchemaFiles(schemaDir);
  const ajv = new Ajv2020({ allErrors: true, strict: false });
  const genericValidators = [];
  const validatorsByType = new Map();

  for (const filePath of schemaFiles) {
    const schema = readJson(filePath);
    ajv.addSchema(schema, schema.$id ?? filePath);
  }

  for (const filePath of schemaFiles) {
    const schema = readJson(filePath);
    const schemaKey = schema.$id ?? filePath;
    const validator = ajv.getSchema(schemaKey);
    if (!validator) {
      throw new Error(`Unable to compile schema ${filePath}`);
    }
    const typeName = getSchemaTypeName(schema, filePath);

    if (typeName) {
      if (validatorsByType.has(typeName)) {
        throw new Error(`Duplicate schema type \`${typeName}\` found in ${filePath}`);
      }
      validatorsByType.set(typeName, { filePath, validate: validator });
    } else {
      genericValidators.push({ filePath, validate: validator });
    }
  }

  return { genericValidators, validatorsByType };
}

function validateDocument(filePath, validators, result) {
  try {
    const { frontmatter } = parseFrontmatter(fs.readFileSync(filePath, 'utf8'), filePath, true);

    for (const { filePath: schemaPath, validate } of validators.genericValidators) {
      const valid = validate(frontmatter);
      if (!valid) {
        for (const error of validate.errors ?? []) {
          result.error(`${filePath} [${path.basename(schemaPath)}]: ${formatAjvError(error)}`);
        }
      }
    }

    const typeName = frontmatter?.type;
    if (typeof typeName === 'string') {
      const typedValidator = validators.validatorsByType.get(typeName);
      if (typedValidator) {
        const valid = typedValidator.validate(frontmatter);
        if (!valid) {
          for (const error of typedValidator.validate.errors ?? []) {
            result.error(`${filePath} [${path.basename(typedValidator.filePath)}]: ${formatAjvError(error)}`);
          }
        }
      }
    }
  } catch (error) {
    result.error(error.message);
  }
}

export function validateContent(contentDirInput = DEFAULT_CONTENT_DIR, schemaDirInput = DEFAULT_SCHEMA_DIR) {
  const contentDir = path.resolve(contentDirInput);
  const schemaDir = path.resolve(schemaDirInput);
  const result = new ValidationResult();

  if (!fs.existsSync(contentDir)) {
    result.error(`Content root does not exist: ${contentDir}`);
    return result;
  }

  if (!fs.existsSync(schemaDir)) {
    result.error(`Schema root does not exist: ${schemaDir}`);
    return result;
  }

  const validators = buildSchemaModel(schemaDir);

  for (const filePath of walkMarkdownFiles(contentDir)) {
    validateDocument(filePath, validators, result);
  }

  return result;
}

function main() {
  const contentDir = process.argv[2] ?? DEFAULT_CONTENT_DIR;
  const result = validateContent(contentDir);

  for (const error of result.errors) {
    console.error(`ERROR: ${error}`);
  }

  if (result.errors.length > 0) {
    console.error(`\nValidation failed with ${result.errors.length} error(s).`);
    process.exit(1);
  }

  console.log('Validation passed.');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
