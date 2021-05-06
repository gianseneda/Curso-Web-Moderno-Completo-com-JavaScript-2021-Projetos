const modoDev = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: modoDev ? "development" : "production",
  entry: "./src/principal.js",
  output: {
    filename: "principal.js",
    path: __dirname + "/public",
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "estilo.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/, //sass ou css ou scss
        use: [
          MiniCssExtractPlugin.loader, //esse cria um arquivo externo de CSS
          //"style-loader", //adiciona CSS a DOM injetando a tag <style></style> no JS
          "css-loader", // interpretar @import, url()...
          "sass-loader",
        ],
      },
    ],
  },
};
