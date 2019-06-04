const path = require("path");
// const CleanWebpackPlugin = require("clean-webpack-plugin")
// const webpack = require("webpack")
const distPath = path.resolve(__dirname, "../dist");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./rename/setup.js"
  },
  plugins: [
    // new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Production",
      filename: "index.html",
      template: path.resolve(__dirname, "../rename/index.html")
    })
  ]
};
