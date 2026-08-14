const manifest = {
  id: "camel-case",
  type: "tool",
  name: "Camel Case",
  description: "Convert text into camelCase.",
  tags: ["text", "utility"],
  implementation: "./tool.js",
  beta: true,
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