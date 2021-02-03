const path = require("path");

module.exports = {
  stories: [
    "../src/components/**/*.stories.@(ts|tsx)",
    "../src/components/**/story.tsx",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
          options: {
            url: false,
            sourceMap: true,
            importLoaders: 2,
          },
        },
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
            sassOptions: {
              fiber: require("fibers"),
            },
            sourceMap: true,
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
};
