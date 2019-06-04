const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");
const webpack = require("webpack");
const config = require('../config.js');
const distPath = path.resolve(__dirname, "../dist");
const srcPath = path.resolve(__dirname, "../rename");
module.exports = merge(common, {
  mode: "development",
  // devtool: "inline-source-map",
  output: {
    filename: "js/[name].js",
    path: distPath
  },
  devServer: {
    port: 3000,
    progress: true,
    contentBase: distPath,
    watchContentBase: true
  },
  externals: {
    $: "jquery",
    jquery: "jquery",
    slick: "slick-carousel"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: srcPath,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        // include: srcPath,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        // include: srcPath,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: config.urlLoader.limit
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
        test: /\.html$/,
        use: { loader: 'html-loader' }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery"
      // jQuery: "jquery",
      // slick: "slick-carousel"
    })
  ],
  optimization: {
    // usedExports: true
    splitChunks: {
      chunks: "all"
    }
  }
});
