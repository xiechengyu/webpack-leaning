const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");
const webpack = require("webpack");
const config = require("../config");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const distPath = path.resolve(__dirname, "../dist");
const srcPath = path.resolve(__dirname, "../rename");
module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    output: {
        filename: "js/[name].js",
        path: distPath
    },
    devServer: {
        host: "0.0.0.0",
        port: 3000,
        progress: true,
        contentBase: distPath,
        watchContentBase: true
    },
    externals: {
        jquery: "$"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: srcPath,
                loader: "babel-loader",
                options: {
                    sourceMap: true
                }
            },
            {
                test: /\.vue$/,
                // include: srcPath,
                loader: "vue-loader",
                options: {
                    sourceMap: true
                }
            },
            {
                test: /\.css$/,
                use: [
                    // "style-loader",
                    "vue-style-loader",
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
                use: [
                    // "style-loader",
                    "vue-style-loader",
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
                test: /\.html$/,
                use: { loader: "html-loader" }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: config.urlLoader.limit
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 80000,
                            name: "fonts/[name].[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
});
