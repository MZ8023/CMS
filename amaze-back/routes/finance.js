var express = require('express');
var router = express.Router();

/**
 * Created by Administrator on 2017/5/5.
 * 财务页面
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
        {"Id":mycode(), "userName":"zhang0830"+sixteenArr[Math.floor(Math.random()*16)], "money":"800", "rechargeWay":"ALI_APP", "rechargeTime":"2017.02.17 12:14:08", "ordeNumber":mycode()},
        {"Id":mycode(), "userName":"guan0818"+sixteenArr[Math.floor(Math.random()*16)], "money":"1000", "rechargeWay":"WX_APP", "rechargeTime":"2017.02.18 02:04:11", "ordeNumber":mycode()},
        {"Id":mycode(), "userName":"hua666"+sixteenArr[Math.floor(Math.random()*16)], "money":"500", "rechargeWay":"UN_WEB", "rechargeTime":"2017.05.22 11:25:19", "ordeNumber":mycode()},
    ], "code":1, "mes":"订单列表返回成功"};
    res.writeHead(200,{"Content-type":"text/plain","charset":"utf-8",'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});//可以解决跨域的请求
    str = JSON.stringify(str);
    res.end(str);
});

module.exports = router;
