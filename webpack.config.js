const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackplugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /.s[ac]ss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        }, ],
    },
    plugins: [
        new HTMLWebpackplugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
    ],
};