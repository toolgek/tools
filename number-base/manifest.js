const manifest = {
  id: "number-base",
  type: "tool",

  status: "alpha",
  version: "0.0.0",

  name: "Number Base Converter",
  description: "Convert an integer between bases 2 and 36.",

  properties: {
    domain: "math",
    inputs: ["string"],
    outputs: ["string"],
    operations: ["convert"]
  },

  implementation: "./tool.js",

  ui: {
    inputs: [
      {
        id: "number",
        component: "text-input",
        label: "Number"
      }
    ],

    actions: [
      {
        id: "fromBase",
        component: "selector",
        label: "From Base",
        options: [
          { value: "2", label: "2 (Binary)" },
          { value: "3", label: "3" },
          { value: "4", label: "4" },
          { value: "5", label: "5" },
          { value: "6", label: "6" },
          { value: "7", label: "7" },
          { value: "8", label: "8 (Octal)" },
          { value: "9", label: "9" },
          { value: "10", label: "10 (Decimal)" },
          { value: "11", label: "11" },
          { value: "12", label: "12" },
          { value: "13", label: "13" },
          { value: "14", label: "14" },
          { value: "15", label: "15" },
          { value: "16", label: "16 (Hexadecimal)" },
          { value: "17", label: "17" },
          { value: "18", label: "18" },
          { value: "19", label: "19" },
          { value: "20", label: "20" },
          { value: "21", label: "21" },
          { value: "22", label: "22" },
          { value: "23", label: "23" },
          { value: "24", label: "24" },
          { value: "25", label: "25" },
          { value: "26", label: "26" },
          { value: "27", label: "27" },
          { value: "28", label: "28" },
          { value: "29", label: "29" },
          { value: "30", label: "30" },
          { value: "31", label: "31" },
          { value: "32", label: "32" },
          { value: "33", label: "33" },
          { value: "34", label: "34" },
          { value: "35", label: "35" },
          { value: "36", label: "36" }
        ]
      },
      {
        id: "toBase",
        component: "selector",
        label: "To Base",
        options: [
          { value: "2", label: "2 (Binary)" },
          { value: "3", label: "3" },
          { value: "4", label: "4" },
          { value: "5", label: "5" },
          { value: "6", label: "6" },
          { value: "7", label: "7" },
          { value: "8", label: "8 (Octal)" },
          { value: "9", label: "9" },
          { value: "10", label: "10 (Decimal)" },
          { value: "11", label: "11" },
          { value: "12", label: "12" },
          { value: "13", label: "13" },
          { value: "14", label: "14" },
          { value: "15", label: "15" },
          { value: "16", label: "16 (Hexadecimal)" },
          { value: "17", label: "17" },
          { value: "18", label: "18" },
          { value: "19", label: "19" },
          { value: "20", label: "20" },
          { value: "21", label: "21" },
          { value: "22", label: "22" },
          { value: "23", label: "23" },
          { value: "24", label: "24" },
          { value: "25", label: "25" },
          { value: "26", label: "26" },
          { value: "27", label: "27" },
          { value: "28", label: "28" },
          { value: "29", label: "29" },
          { value: "30", label: "30" },
          { value: "31", label: "31" },
          { value: "32", label: "32" },
          { value: "33", label: "33" },
          { value: "34", label: "34" },
          { value: "35", label: "35" },
          { value: "36", label: "36" }
        ]
      },
      {
        id: "run",
        component: "button",
        label: "Convert",
        action: "execute"
      }
    ],

    outputs: [
      {
        id: "result",
        component: "output",
        label: "Output"
      }
    ]
  }
};

export default manifest;