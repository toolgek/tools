function textCompare(left = "", right = "") {
  const a = left ?? "";
  const b = right ?? "";

  return a === b ? "Identical" : "Different";
}

const tool = {
  run(input = {}) {
    return textCompare(input.left ?? "", input.right ?? "");
  },
};

export default tool;