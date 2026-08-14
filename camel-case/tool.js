function camelCase(value) {
  return value
    .toString() // Cast to string
    .normalize("NFKD") // Normalize Unicode characters
    .replace(/[^\w\s-]/g, "") // Remove punctuation except spaces, underscores and hyphens
    .trim() // Remove whitespace from both ends
    .split(/[\s_-]+/) // Split on spaces, underscores or hyphens
    .map((word, index) => {
      word = word.toLowerCase();

      if (index === 0) {
        return word;
      }

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