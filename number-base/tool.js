const DIGITS = "0123456789abcdefghijklmnopqrstuvwxyz";

function parseBase(baseStr, label) {
  const raw = (baseStr ?? "").toString().trim();

  if (raw === "") {
    throw new Error(`Choose a ${label} base.`);
  }

  if (!/^[+-]?\d+$/.test(raw)) {
    throw new Error(`${label} base must be an integer between 2 and 36.`);
  }

  const base = parseInt(raw, 10);
  if (base < 2 || base > 36) {
    throw new Error(`${label} base must be between 2 and 36.`);
  }

  return base;
}

function parseSignedDigits(raw) {
  const input = (raw ?? "").toString().trim();

  if (input === "") {
    throw new Error("Enter a number.");
  }

  let sign = 1n;
  let digits = input;

  if (digits.startsWith("+") || digits.startsWith("-")) {
    sign = digits[0] === "-" ? -1n : 1n;
    digits = digits.slice(1);
  }

  if (digits === "") {
    throw new Error(`"${input}" is not a valid integer.`);
  }

  return { sign, digits: digits.toLowerCase(), input };
}

function parseValueInBase(raw, fromBase) {
  const { sign, digits } = parseSignedDigits(raw);

  let value = 0n;
  const from = BigInt(fromBase);

  for (const ch of digits) {
    const digit = DIGITS.indexOf(ch);
    if (digit < 0 || digit >= fromBase) {
      throw new Error(`Digit "${ch}" is not valid for base ${fromBase}.`);
    }

    value = value * from + BigInt(digit);
  }

  if (value === 0n) {
    return 0n;
  }

  return sign < 0n ? -value : value;
}

function formatValueInBase(value, toBase) {
  if (value === 0n) {
    return "0";
  }

  const base = BigInt(toBase);
  const negative = value < 0n;
  let remaining = negative ? -value : value;
  let output = "";

  while (remaining > 0n) {
    const digit = Number(remaining % base);
    output = DIGITS[digit] + output;
    remaining = remaining / base;
  }

  return negative ? `-${output}` : output;
}

function numberBase(raw, fromBaseStr = "10", toBaseStr = "2") {
  const fromBase = parseBase(fromBaseStr, "Source");
  const toBase = parseBase(toBaseStr, "Target");
  const value = parseValueInBase(raw, fromBase);
  return formatValueInBase(value, toBase);
}

const tool = {
  run(input = {}) {
    const fromBase = input.fromBase ?? "10";
    const toBase = input.toBase ?? "2";
    return numberBase(input.number ?? "", fromBase, toBase);
  },
};

export default tool;