const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: ["react-hot-loader/patch", "./src/index.tsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.ts(x)?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.svg$/,
                use: "file-loader",
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            mimetype: "image/png",
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        static: {
            directory: "./dist",
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateContent: ({ htmlWebpackPlugin }) =>
                '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
                htmlWebpackPlugin.options.title +
                '</title></head><body><div id="app"></div></body></html>',
            filename: "index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },
};

module.exports = config;
