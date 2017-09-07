var data = [{
    name: "特便宜 秒杀12群...",
    time: "16:00",
    text: "文熙1：本群招募代理（兼职）要求认真"
}, {
    name: "特便宜 秒杀12群...",
    time: "16:00",
    text: "文熙1：本群招募代理（兼职）要求认真"
}, {
    name: "特便宜 秒杀12群...",
    time: "16:00",
    text: "文熙1：本群招募代理（兼职）要求认真"
}, {
    name: "特便宜 秒杀12群...",
    time: "16:00",
    text: "文熙1：本群招募代理（兼职）要求认真"
}, {
    name: "特便宜 秒杀12群...",
    time: "16:00",
    text: "文熙1：本群招募代理（兼职）要求认真"
}];
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: __dirname + "/main.js",
    output: {
        path: __dirname + "/dist",
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ["babel-loader"]
        }]
    },
    devServer: {
        hot: true,
        port: 9099,
        host: "127.0.0.1",
        setup(app) {
            app.get("/data", function(req, res) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('content-type', 'application/json;charset=utf-8');
                console.log(666)
                res.json(data)
            })
        }
    },
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin(),
    //     //这是把共公的方法属性放到一块
    //     new webpack.optimize.CommonsChunkPlugin({
    //         name: "commons",
    //         filename: "commons.js",
    //     }),
    //     //把代码压缩成一行
    //     // new webpack.optimize.UglifyJsPlugin(),
    //     //把js都放在html里
    //     new HtmlWebpackPlugin({
    //         template: "./index.html"
    //     }),
    // ]
}