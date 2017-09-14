var webpack = require("webpack");
var htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    devServer: {
        port: "8089",
        host: "127.0.0.1",
        hot: true,
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.html$/,
            loader: "html-loader"
        }, {
            test: /\.vue$/,
            loader: "vue-loader"
        }, {
            test: /\.jpg | .png$/,
            loader: "url-loader"
        }, ]
    },
    resolve: {
        alias: {
            vue: "vue/dist/vue.js"
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js"
        })
    ]
}