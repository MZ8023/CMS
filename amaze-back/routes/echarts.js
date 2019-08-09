var express = require('express');
var router = express.Router();

/**
 * Created by Administrator on 2017/5/5.
 * echarts表格
 */
router.get('/', function(req, res, next) {
    //获取ajax提交的信息
    var currentData = req.query;
    console.log(currentData);
    var maxNum = Math.floor(Math.random()*5);
    var maxNumArr = [100, 300, 400, 600, 1200];
    var str = {
        result:{
            '1日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '2日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '3日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '4日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '5日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '6日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '7日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '8日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '9日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '10日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '11日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '12日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '13日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '14日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '15日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '16日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '17日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '18日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '19日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '20日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '21日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '22日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '23日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '24日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '25日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '26日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '27日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '28日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '29日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],
            '30日':[Math.floor(Math.random()*maxNumArr[maxNum]),Math.floor(Math.random()*maxNumArr[maxNum])],

        },
        "code":1, "mes":"echarts列表返回成功"};
    res.writeHead(200,{"Content-type":"text/plain","charset":"utf-8",'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});//可以解决跨域的请求
    str = JSON.stringify(str);
    res.end(str);
});

module.exports = router;
