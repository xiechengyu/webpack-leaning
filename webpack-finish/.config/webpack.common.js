const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./setup.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Production",
            filename: "index.html",
            template: path.resolve(__dirname, "../rename/index.html")
        })
    ]
};
