const path = require("path");

module.exports = {
  stories: [
    "../src/components/**/*.stories.@(ts|tsx)",
    "../src/components/**/story.tsx",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
