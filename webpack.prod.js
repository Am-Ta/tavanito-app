const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.join(__dirname, "dist"),
        publicPath: "./"
    },
    mode: "production",
    module: {
        rules: [
            // handle the scss file in js
            {
                test: /\.scss$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            // handle the ES6 js files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            // hanlde the assets files
            {
                test: /\.(ttf|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        publicPath: "./assets/font",
                        outputPath: "./assets/font"
                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        publicPath: "./assets/img",
                        outputPath: "./assets/img"
                    }
                }
            }
        ]
    },
    plugins: [
        // Clean dist folder for each rebuild
        new CleanWebpackPlugin(),

        // Create the separate css file
        new MiniCssExtractPlugin({
            filename: "styles.[contenthash].css"
        }),

        // Config the html file
        new HtmlWebpackPlugin({
            title: "React Card Challenge",
            meta: {
                description:
                    "A responsive card based design, to be implemented by React &amp; Redux",
                author: "Amin Taghipour <taghipur.amin@gmail.com>",
                "application-name": "HTML/CSS Challenge"
            },
            filename: "index.html",
            template: "./public/index.html"
        })
    ]
};
