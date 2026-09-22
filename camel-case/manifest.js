const manifest = {
  id: "camel-case",
  type: "tool",

  status: "alpha",
  version: "0.1.0",

  name: "Camel Case",
  description: "Convert text into camel case format.",

  properties: {
    domain: "text",
    inputs: ["string"],
    outputs: ["string"],
    operations: ["transform"]
  },

  implementation: "./tool.js",

  ui: {
    inputs: [
      {
        id: "text",
        component: "text-input",
        label: "Text"
      }
    ],

    actions: [
      {
        id: "run",
        component: "button",
        label: "Run",
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