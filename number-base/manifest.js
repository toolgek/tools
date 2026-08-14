const manifest = {
  id: "number-base",
  type: "tool",
  name: "Number Base Converter",
  description: "Convert a decimal number to binary, octal, or hexadecimal.",
  tags: ["numbers", "utility"],
  implementation: "./tool.js",
  beta: true,
  ui: {
    inputs: [
      {
        id: "number",
        component: "text-input",
        label: "Decimal Number"
      },
      {
        id: "base",
        component: "selector",
        label: "Output Base",
        options: [
          { value: "2",  label: "Binary"      },
          { value: "8",  label: "Octal"       },
          { value: "16", label: "Hexadecimal" }
        ]
      }
    ],

    actions: [
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
