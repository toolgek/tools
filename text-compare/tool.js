/**
 * Placeholder: Text comparison tool.
 * Purpose: Compare two input strings and return a short equality result.
 * TODO: Add detailed README usage and examples.
 */
function textCompare(left = "", right = "") {
  // Ensure values are strings and not null/undefined
  const a = left ?? "";
  const b = right ?? "";

  // Return a human-readable equality result
  return a === b ? "Identical" : "Different";
}

const tool = {
  run(input = {}) {
    return textCompare(input.left ?? "", input.right ?? "");
  },
};

export default tool;