const manifest = {
  id: "<tool-id>",
  type: "tool",

  status: "<tool-status>",
  version: "<tool-version>",

  name: "<tool-name>",
  description: "<tool-description>",

  properties: {
    domain: "<tool-domain>",
    inputs: ["<input-type>"],
    outputs: ["<output-type>"],
    operations: ["<operation-type>"]
  },

  implementation: "./tool.js",

  ui: {
    inputs: [
      {
        id: "<input-id>",
        component: "text-input",
        label: "<input-label>"
      }
    ],

    actions: [
      {
        id: "<action-id>",
        component: "button",
        label: "<action-label>",
        action: "execute"
      }
    ],

    outputs: [
      {
        id: "<output-id>",
        component: "output",
        label: "<output-label>"
      }
    ]
  }
};

export default manifest;