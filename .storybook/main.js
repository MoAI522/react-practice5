const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  stories: [
    "../src/components/**/*.stories.@(ts|tsx)",
    "../src/components/**/story.tsx",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    config.plugins.push(
      new ESLintPlugin({
        extensions: ["ts", "tsx"],
      })
    );
    return config;
  },
};
