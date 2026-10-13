# Toolgek Tool Specification

## File Structure

| File               | Purpose                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------- |
| `contract.md`      | Human/LLM explanation of what a valid manifest means and how its parts work             |
| `schema.json`      | Machine-enforceable definition of valid manifest structure and values                   |
| `template.js`      | Generation scaffold showing an LLM where and how to populate the manifest               |

## Automatic Manifest Validation

Run the command to validate manifests against the schema file.

`npm run validate:manifest -- text-compare/manifest.js`