const tool = {
  run(input = {}) {
    const left = input.left ?? "";
    const right = input.right ?? "";

    return left === right ? "Identical" : "Different";
  },
};

export default tool;