var gulp = require("gulp");
var server = require("gulp-webserver");
var urls = require("url");
var data = [{
    "img": "img/images/1_03.jpg",
    "txt": "一说智能机器人S1儿童陪伴机器人玩具故事",
    "price": "￥898￥1280"
}, {
    "img": "img/images/1_03.jpg",
    "txt": "一说智能机器人S1儿童陪伴机器人玩具故事",
    "price": "￥898￥1280"
}, {
    "img": "img/images/1_03.jpg",
    "txt": "一说智能机器人S1儿童陪伴机器人玩具故事",
    "price": "￥898￥1280"
}, {
    "img": "img/images/1_03.jpg",
    "txt": "一说智能机器人S1儿童陪伴机器人玩具故事",
    "price": "￥898￥1280"
}];
var datas = {
    "yi": {
        "title": "一说科技",
        "list": {
            "img": "img/images/1_03.jpg",
            "txt": "一说智能机器人S1儿童陪伴机器人玩具故事",
            "price": "￥898￥1280"
        }
    },
    "er": {
        "title": "一说科技",
        "list": [{
            "img": "img/images/1_03.jpg",
            "txt": "一说智能机器人S1儿童陪伴机器人玩具故事",
            "price": "￥898￥1280"
        }, {
            "img": "img/images/1_03.jpg",
            "txt": "一说智能机器人S1儿童陪伴机器人玩具故事",
            "price": "￥898￥1280"
        }, {
            "img": "img/images/1_03.jpg",
            "txt": "一说智能机器人S1儿童陪伴机器人玩具故事",
            "price": "￥898￥1280"
        }, {
            "img": "img/images/1_03.jpg",
            "txt": "一说智能机器人S1儿童陪伴机器人玩具故事",
            "price": "￥898￥1280"
        }]
    }
}
gulp.task("wserver", function() {
    gulp.src("gulp")
        .pipe(server({
            port: 8089,
            middleware: function(req, res, next) {
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.setHeader("Content-Type", "application/json;charset=utf-8;");
                res.write(JSON.stringify(data));
                res.end();
            }
        }))
})
gulp.task("default", ["wserver"]);