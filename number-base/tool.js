function numberBase(raw, baseStr = "2") {
  const input = (raw ?? "").toString().trim();
  const base = parseInt(baseStr ?? "2", 10);

  if (input === "") {
    throw new Error("Enter a decimal number.");
  }

  const decimal = parseInt(input, 10);

  if (isNaN(decimal)) {
    throw new Error(`"${input}" is not a valid integer.`);
  }

  return decimal.toString(base);
}

const tool = {
  run(input = {}) {
    return numberBase(input.number ?? "", input.base ?? "2");
  },
};

export default tool;