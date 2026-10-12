import Ajv2020 from "ajv/dist/2020.js";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const schemaUrl = new URL(
  "../spec/manifest/schema.json",
  import.meta.url
);

const manifestPath = process.argv[2];

if (!manifestPath) {
  console.error(
    "Usage: node scripts/validate-manifest.mjs <manifest.js>"
  );
  process.exit(2);
}

function formatPath(instancePath, property) {
  const parts = (instancePath || "")
    .split("/")
    .filter(Boolean)
    .map((part) => part.replace(/~1/g, "/").replace(/~0/g, "~"));

  if (property !== undefined) {
    parts.push(property);
  }

  return ["manifest", ...parts].join(".");
}

function formatError(error) {
  const { keyword, instancePath, params, message } = error;

  switch (keyword) {
    case "required": {
      const path = formatPath(
        instancePath,
        params.missingProperty
      );
      return `${path} — is required but missing.`;
    }

    case "additionalProperties": {
      const path = formatPath(
        instancePath,
        params.additionalProperty
      );
      return `${path} — is not allowed by the schema.`;
    }

    case "type": {
      const path = formatPath(instancePath);
      return `${path} — ${message}.`;
    }

    case "enum": {
      const path = formatPath(instancePath);
      const allowed = params.allowedValues
        .map((value) => JSON.stringify(value))
        .join(", ");

      return `${path} — must be one of: ${allowed}.`;
    }

    case "pattern": {
      const path = formatPath(instancePath);
      return `${path} — has an invalid format. ${error.schema.description || message}.`;
    }

    case "minLength":
    case "maxLength":
    case "minimum":
    case "maximum":
    case "minItems":
    case "maxItems": {
      const path = formatPath(instancePath);
      return `${path} — ${message}.`;
    }

    default: {
      const path = formatPath(instancePath);
      return `${path} — ${message}.`;
    }
  }
}

try {
  const schema = JSON.parse(
    await readFile(schemaUrl, "utf8")
  );

  const manifestUrl = pathToFileURL(
    resolve(manifestPath)
  );

  const { default: manifest } = await import(
    manifestUrl.href
  );

  const ajv = new Ajv2020({
    allErrors: true,
    strict: true
  });

  const validate = ajv.compile(schema);
  const valid = validate(manifest);

  if (!valid) {
    const errors = validate.errors ?? [];

    console.error(
      `\nManifest validation failed: ${errors.length} error(s)\n`
    );

    for (const [index, error] of errors.entries()) {
      console.error(
        `  ${index + 1}. ${formatError(error)}`
      );
    }

    console.error(
      "\nFix these issues and run validation again.\n"
    );

    process.exitCode = 1;
  } else {
    console.log("\nManifest validation passed.\n");
  }
} catch (error) {
  console.error(
    "\nValidation could not run:",
    error.message,
    "\n"
  );

  process.exitCode = 2;
}