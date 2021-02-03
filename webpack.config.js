const debug = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const loader = require("sass-loader");

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
      {
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
  plugins: debug
    ? []
    : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          mangle: false,
          sourcemap: false,
        }),
      ],
  devtool: "source-map",
  devServer: {
    contentBase: devPath,
    open: true,
  },
};
