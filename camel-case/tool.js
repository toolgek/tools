/**
 * Placeholder: Camel case conversion tool.
 * Purpose: Convert an input string into camelCase.
 * TODO: Add detailed README usage and examples.
 */
function camelCase(value) {
  return value
    .toString() // Cast to string
    .normalize("NFKD") // Normalize Unicode characters
    .replace(/[^\w\s-]/g, "") // Remove punctuation except spaces, underscores and hyphens
    .trim() // Remove whitespace from both ends
    .split(/[\s_-]+/) // Split on spaces, underscores or hyphens
    .map((word, index) => {
      // Normalize each segment to lowercase for predictable casing
      word = word.toLowerCase();

      // First word remains lowercase in camelCase
      if (index === 0) {
        return word;
      }

      // Capitalize first character of subsequent words
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

const tool = {
  run(input = {}) {
    return camelCase(input.text ?? "");
  },
};

export default tool;