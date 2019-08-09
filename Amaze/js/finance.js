/**
 * 判断是否登录
 * */
var account = getCookie('account');
console.log(account);
account = JSON.parse(account);
if(account == null){
	window.location.href = 'login.html';
} else{
	$('.username').text(account.username);
}

/**
 * 页面切换请求
 */
$('#financeTab_ul li').click(function() {
		//获取当前点击的li下的a标签的href属性
		var thisHref = this.children[0].href;
		//截取#号后面的
		var tabDiv = thisHref.substring(thisHref.indexOf('#') + 1);
		console.log(tabDiv);
		//充值中页
		if(tabDiv == 'rechargeIngDiv') {
			document.getElementById('rechargeIng_tbody').innerHTML = '';
			$.ajax({
				type: "get",
				url: severURL + "finance",
				timeout: 5000, //Number类型，设置请求超时时间（毫秒）
				success: function(data) {
					console.log(data);
					data = JSON.parse(data);
					if(data.code == 1) {
						data = data.result;
						for(var i = 0, datalen = data.length; i < datalen; i++) {
							createRechargeList(data[i].id, data[i].userName, data[i].money, data[i].rechargeWay, data[i].rechargeTime, data[i].ordeNumber)
						}
					} else {
						console.log(data.code);
					}
				},
				error: function(data, status, statusText) {
					alert('请求失败');
					console.log(data);
					console.log(status);
					console.log(statusText);
				},
			});
		}
	})
/**充值中页动态显示数据
 * @param {Object} id				记录id
 * @param {Object} userName			用户名
 * @param {Object} money			充值金额
 * @param {Object} rechargeWay		充值渠道
 * @param {Object} rechargeTime		充值时间
 * @param {Object} ordeNumber		订单编号
 */
function createRechargeList(id, userName, money, rechargeWay, rechargeTime, ordeNumber) {
	var item = document.createElement('tr');
	item.id = id;
	var str = '<td>' + userName + '</td>';
	str += '<td>' + money + '</td>';
	if(rechargeWay == 'ALI_APP') {
		str += '<td>支付宝</td>';
	} else if(rechargeWay == 'WX_APP') {
		str += '<td>微信支付</td>';
	} else if(rechargeWay == 'UN_WEB') {
		str += '<td>银联支付</td>';
	} else {
		str += '<td>' + rechargeWay + '</td>';
	}
	str += '<td>' + rechargeTime + '</td>';
	str += '<td>' + ordeNumber + '</td>';
	str += '<td colspan="4"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#outMoney">';
	str += '退款</button></td>';
	item.innerHTML = str;
	var thistbody = document.getElementById('rechargeIng_tbody');
	thistbody.appendChild(item);
}

/**
 * echarts
 */
//页面刷新请求获取图表数据
$.ajax({
	type:"get",
	url: severURL + "echarts",
	timeout:5000,
	success:function(data){
		data = JSON.parse(data);
		if(data.code == 1) {
			data = data.result;
			console.log(JSON.stringify(data))
			var xdata = [],
				indata = [],
				outdata = [];
			$.each(data, function(i, o) {
					xdata.push(i);
					indata.push(o[0]);
					outdata.push(o[1]);
			});
//			var xdata = ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日'];
//			var indata = [120, 132, 101, 134, 90, 590, 210, 120, 132, 101, 634, 90, 830, 210, 120, 132, 101, 934, 90, 930, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132];
//			var outdata = [220, 182, 191, 4, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 134, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 330, 310];
			
			
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('my_echarts'));
			
			option = {
			    title: {
			        text: '近30天平台收入支出折线图',
			        textStyle:{color:'#838FA1'}
			    },
			    //坐标轴触发
			    tooltip: {
			        trigger: 'axis',
			        textStyle:{color:'#838FA1'}
			    },
			    //图例组件
			    legend: {
			        data:['收入','支出'],
			        textStyle:{color:'#838FA1'}
			    },
			    grid: {
			        left: '0',
			        right: '1%',
			        bottom: '3%',
			        containLabel: true
			    },
			    //工具栏
			    toolbox: {
			        feature: {
			            dataView: {show: true, readOnly: false},//数据视图
			            saveAsImage: {show: true}//保存为图片
			        }
			    },
			    xAxis: {
			        type: 'category',
			        boundaryGap: false,
			//      data: ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日'],
			        data: xdata,
			        axisLabel:{textStyle:{color:'#838FA1'}},
			        axisLine:{
			        	lineStyle:{color: '#48b'}
			        }
			    },
			    yAxis: {
			        type: 'value',
			        axisLabel:{
			        	textStyle:{color:'#838FA1'},
			        	formatter: '{value}元'
			        },
			        axisLine:{
			        	lineStyle:{color: '#48b'}
			        }
			    },
			    
			    series: [
			        {
			            name:'收入',
			            type:'line',
			            itemStyle:{
					    	 normal: {
						            color: '#48b'
						        }
					    },
			//          data:[120, 132, 101, 134, 90, 590, 210, 120, 132, 101, 634, 90, 830, 210, 120, 132, 101, 934, 90, 930, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132]
			        	data: indata
			        },
			        {
			            name:'支出',
			            type:'line',
			            itemStyle:{
					    	 normal: {
						            color: 'red'
						        }
					    },
			//          data:[220, 182, 191, 4, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 134, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 330, 310]
			        	data: outdata
			        }
			    ]
			};
			
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
		} else {
			console.log(data.code);
		}
	},
	error:function(data, status, statusText){
		alert('请求失败')
		console.log(data);
		console.log(status);
		console.log(statusText);
	}
});

