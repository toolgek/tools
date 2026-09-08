function slugify(value) {
  return value
    .toString() // Convert input to string (optional)
    .normalize('NFKD') // Decompose Unicode characters
    .toLowerCase() // Convert to lowercase
    .trim() // Remove surrounding whitespace
    .replace(/\s+/g, '-') // Replace whitespace with hyphens
    .replace(/[^\w\-]+/g, '') // Remove non-word characters
    .replace(/\_/g,'-') // Replace underscores with hyphens
    .replace(/\-\-+/g, '-') // Collapse repeated hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
}

const tool = {
  run(input = {}) {
    return slugify(input.text ?? "");
  },
};

export default tool;