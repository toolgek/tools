/**
 * Placeholder: Number base conversion tool.
 * Purpose: Convert a decimal integer string into the provided base (default base 2).
 * TODO: Add detailed README usage and examples.
 */
function numberBase(raw, baseStr = "2") {
  // Coerce value to string and trim whitespace
  const input = (raw ?? "").toString().trim();

  // Parse base as integer (fallback to binary base 2)
  const base = parseInt(baseStr ?? "2", 10);

  // Validate presence of input
  if (input === "") {
    throw new Error("Enter a decimal number.");
  }

  // Parse the provided decimal string into a number
  const decimal = parseInt(input, 10);

  // Validate numeric parse result
  if (isNaN(decimal)) {
    throw new Error(`"${input}" is not a valid integer.`);
  }

  // Convert decimal to target base and return as string
  return decimal.toString(base);
}

const tool = {
  run(input = {}) {
    return numberBase(input.number ?? "", input.base ?? "2");
  },
};

export default tool;