const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/js/index.js',
    // script: './src/script.js'
  },
  devServer: {
    port: 3000,
    progress: true,
    contentBase: "./dist",
    watchContentBase: true,
    compress: true //压缩
  },
  mode: 'development',
  optimization: {
    usedExports: true
  },
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
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: 'css'
          },
        }, {
          loader: 'css-loader', options: {
            sourceMap: true
          }
        },
          "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: 'css'
          },
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
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20000,
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
                  quality: 50
                }),
                require("imagemin-pngquant")({
                  quality: [0.3, 0.5]
                })
              ]
            }
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // title: '小小demo',
      // chunks: ['./src/index'],
      // filename: 'index1111.html',
      template: './src/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].css',
      chunkFilename: '[id].less',
    })
  ],
  output: {
    filename: 'js/[name].js',
    path: path.resolve('./', 'dist')
  }
};