const manifest = {
  id: "slugify",
  type: "tool",

  status: "alpha",

  name: "Slugify",
  description: "Convert text into a URL-friendly slug.",

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