/**
 * 公共变量、方法库
 * */
// document.write("<script language=javascript src=‘https://cdn.jsdelivr.net/npm/live2d-widget@3.0.4/lib/L2Dwidget.min.js’></script>");
// 右下角live2d效果
var new_element=document.createElement("script");
new_element.setAttribute("type","text/javascript");
new_element.setAttribute("src","./js/girlBg.js");
document.body.appendChild(new_element);

//var severURL = 'http://localhost:3000/';
var severURL = 'http://139.196.124.164:3000/';

/*=== 侧边栏动态切换===*/

$('#top_nav_btn').on('click', function(){
	if ($('#left_nav').css('left') == '-240px') {
		$('#left_nav').css('left','0px');
		$('.content').css('margin-left','240px');
	} else{
		$('#left_nav').css('left','-240px');
		$('.content').css('margin-left','0px');
	}
})

function setCookie(name,value)
{
/*
*--------------- setCookie(name,value) -----------------
* setCookie(name,value)
* 功能:设置得变量name的值
* 参数:name,字符串;value,字符串.
* 实例:setCookie('username','baobao')
*--------------- setCookie(name,value) -----------------
*/
var Days = 30; //此 cookie 将被保存 30 天
var exp = new Date();
exp.setTime(exp.getTime() + Days*24*60*60*1000);
document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getCookie(name)
{
/*
*--------------- getCookie(name) -----------------
* getCookie(name)
* 功能:取得变量name的值
* 参数:name,字符串.
* 实例:alert(getCookie("baobao"));
*--------------- getCookie(name) -----------------
*/
var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
if(arr !=null) return unescape(arr[2]); return null;
}

function deleteCookie(name){
	var date=new Date();
	date.setTime(date.getTime()-10000);//设置失效时间为当前时间之前
	document.cookie=name+"=v; expires="+date.toGMTString();
} 

/**
 * logout
 * */
$('#logout').on('click', function(){
	console.log('1')
	deleteCookie('account');
//	window.location.href = 'login.html';
	$('#logout').attr('href','login.html');
});
// 右下角live2d效果
setTimeout(() => {
	L2Dwidget.init({
		"model": {
			"scale": 0.5
		},
		"display": {
			"position": "right",
			"width": 180,
			"height": 260,
			"hOffset": 0,
			"vOffset": -20
		},
		"mobile": {
			"show": true,
			"scale": 0.5
		},
		"react": {
			"opacityDefault": 0.7,
			"opacityOnHover": 0.2
		}
	});
}, 1000)
