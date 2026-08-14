const tool = {
  run(input = {}) {
    const raw = (input.number ?? "").trim();
    const base = parseInt(input.base ?? "2", 10);

    if (raw === "") {
      throw new Error("Enter a decimal number.");
    }

    const decimal = parseInt(raw, 10);

    if (isNaN(decimal)) {
      throw new Error(`"${raw}" is not a valid integer.`);
    }

    return decimal.toString(base);
  },
};

export default tool;
