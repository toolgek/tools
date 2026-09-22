function camelCase(value) {
  return value
    .toString() // Convert input to string
    .normalize("NFKD") // Decompose Unicode characters
    .trim() // Remove surrounding whitespace
    .replace(/[^\p{L}\p{N}\s_-]+/gu, " ") // Remove punctuation and treat as word boundaries
    .split(/[\s_-]+/) // Split on spaces, underscores or hyphens
    .map((word, index) => {
      word = word.toLowerCase(); // Normalize each segment to lowercase

      if (index === 0) { // Keep first word as lowercase
        return word;
      }

      return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize first character of subsequent words
    })
    .join("");
}

const tool = {
  run(input = {}) {
    return camelCase(input.text ?? "");
  },
};

export default tool;