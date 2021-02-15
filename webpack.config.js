const debug = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

const devPath = path.resolve(__dirname, "src");

module.exports = {
  context: devPath,
  entry: "./index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    path: devPath,
    filename: "bundle.js",
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["ts", "tsx"],
    })
  ].concat(
    debug
      ? []
      : [
          new webpack.optimize.OccurrenceOrderPlugin(),
          new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false,
          }),
        ]
  ),
  devtool: "source-map",
  devServer: {
    contentBase: devPath,
    open: true,
  },
};
