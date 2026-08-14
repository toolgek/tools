const manifest = {
  id: "text-compare",
  type: "tool",
  name: "Text Compare",
  description: "Compare two text values.",
  tags: ["text", "utility"],
  implementation: "./tool.js",
  beta: true,
  ui: {
    inputs: [
      {
        id: "left",
        component: "text-input",
        label: "Left"
      },
      {
        id: "right",
        component: "text-input",
        label: "Right"
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
