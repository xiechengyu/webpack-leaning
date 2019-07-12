const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const config = require("../config");
const distPath = path.resolve(__dirname, "../dist");
module.exports = env => {
    return merge(common, {
        mode: "production",
        devtool: "source-map",
        output: {
            filename: "js/[name].js",
            path: distPath,
            publicPath: `http://static.wangxiao.cn/zhuanti/2019/${env.pathName}/`
        },
        externals: {
            jquery: "$"
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: "babel-loader"
                },
                {
                    test: /\.vue$/,
                    loader: "vue-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: "../"
                            }
                        },

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
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: "../"
                            }
                        },

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
                    use: {
                        loader: "html-loader",
                        options: {
                            attrs: [
                                "img:src",
                                "img:data-src",
                                "link:href",
                                "script:src",
                                "source:data-srcset"
                            ]
                        }
                    }
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
                            loader: "img-loader",
                            options: {
                                plugins: [
                                    require("imagemin-mozjpeg")({
                                        quality: config.imgLoader.jpgQuality
                                    }),

                                    require("imagemin-pngquant")({
                                        quality: config.imgLoader.pngQuality
                                    }),

                                    require("imagemin-gifsicle")({
                                        optimizationLevel:
                                            config.imgLoader.gifQuality
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
            new CleanWebpackPlugin(),
            new webpack.ProvidePlugin({
                $: "jquery"
            }),
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                filename: "css/[name].css"
            })
        ],
        optimization: {
            // usedExports: true
        }
    });
};
