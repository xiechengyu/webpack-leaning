const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const config = require('../config.js');

const distPath = path.resolve(__dirname, "../dist");
const srcPath = path.resolve(__dirname, "../rename");
module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "js/[name][hash:8].js",
    path: distPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.html$/,
        use: { loader: 'html-loader' }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: config.urlLoader.limit,
              useRelativePath: true,
              outputPath: "./img",
              pulbicPath: "./dist/img"
            }
          },
          {
            loader: 'img-loader',
            options: {
              plugins: [
                require('imagemin-mozjpeg')({
                  quality: config.imgLoader.jpgQuality
                }),
                require("imagemin-pngquant")({
                  quality: config.imgLoader.pngQuality
                }),
                require("imagemin-gifsicle")({
                  optimizationLevel: config.imgLoader.gifQuality
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader:"file-loader",
            options:{
              outputPath: "./font-style",
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({}),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ],
  optimization: {
    // usedExports: true
  }
});
