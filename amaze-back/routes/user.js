var express = require('express');
var router = express.Router();

/**
 * Created by Administrator on 2017/3/14.
 * 用户页面
 */
router.get('/', function(req, res, next) {
    //获取ajax提交的信息
    var currentData = req.query;
    console.log(currentData);
    var sixteenArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var codeStr = '';
    function mycode(){
        codeStr = '';
        for(var i = 0; i < 16; i++){
            codeStr += sixteenArr[Math.floor(Math.random()*16)];
        }
        return codeStr;
    }
    var str = {"result":[
                    {"Id":mycode(), "name":"张xx", "userName":"zhang0830"+sixteenArr[Math.floor(Math.random()*16)], "registTime":"2017.02.17", "city":"黑龙江", "auth":"已认证"},
                    {"Id":mycode(), "name":"关xx", "userName":"guan0818"+sixteenArr[Math.floor(Math.random()*16)], "registTime":"2017.02.18", "city":"哈尔滨", "auth":"待认证"},
                    {"Id":mycode(), "name":"刘xx", "userName":"liu666"+sixteenArr[Math.floor(Math.random()*16)], "registTime":"2017.05.22", "city":"红旗大街", "auth":"待认证"},
                    {"Id":mycode(), "name":"陈xx", "userName":"chen888"+sixteenArr[Math.floor(Math.random()*16)], "registTime":"2017.07.02", "city":"黑工程", "auth":"已认证"},
        ], "code":1, "mes":"user列表返回成功"};
    console.log("reqData:  " + str);
    res.writeHead(200,{"Content-type":"text/plain","charset":"utf-8",'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});//可以解决跨域的请求
    str = JSON.stringify(str);
    res.end(str);
});

module.exports = router;
