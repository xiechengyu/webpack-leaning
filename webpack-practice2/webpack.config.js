const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './main.js',
    script: './project/2019-5-31/js/script.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(css|less)$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, 'css-loader', {
          loader: "less-loader", options: {
            sourceMap: true
          }
        },
          "postcss-loader"]
      },
      {
        test: /\.html$/,
        use: { loader: 'html-loader' }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: "./img"
            }
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // title: '小小demo',
      // chunks: ['./src/index'],
      // filename: 'index1111.html',
      template: './index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].less',
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve('./', 'dist')
  }
};