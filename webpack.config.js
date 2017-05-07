/*jshint esversion: 6 */
const {resolve} = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry: "./src/js/main.js",
    output: {
        publicPath: "/dist",
        path: resolve(__dirname, "dist/"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader"
                })

            }
        ]
    },

    plugins: [
        new ExtractTextWebpackPlugin("main.css"),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]

}