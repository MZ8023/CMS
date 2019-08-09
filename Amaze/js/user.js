/**
 * 判断是否登录
 * */
var account = getCookie('account');
console.log(account);
account = JSON.parse(account);
if (account == null) {
    window.location.href = 'login.html';
} else {
    $('.username').text(account.username);
}

/**用户列表动态显示数据
 * @param {Object} id				记录id
 * @param {Object} name				用户昵称
 * @param {Object} userName			用户名
 * @param {Object} registTime		注册时间
 * @param {Object} city				所在城市
 * @param {Object} auth				认证信息
 */
function createUserList(id, PicPath, name, userName, registTime, city, auth) {
    var item = document.createElement('tr');
    item.id = id;
    var str = '';
    str += '<td><img src="' + PicPath + '" class="artist_photo"/></td>';
    str += '<td>' + name + '</td>';
    str += '<td>' + userName + '</td>';
    str += '<td>' + registTime + '</td>';
    str += '<td>' + city + '</td>';
    str += '<td>' + auth + '</td>';
    str += '<td colspan="4">';
    str += '<button type="button" class="btn btn-primary edit" data-toggle="modal" data-target="#editUser">';
    str += '编辑</button>';
    str += '<button type="button" class="btn btn-success isrecommand_btn" data-toggle="modal" data-target="#delUser">';
    str += '删除</button></td>';
    item.innerHTML = str;
    var thistbody = document.getElementById('artist_tbody');
    thistbody.appendChild(item);
}

/**
 * 页面刷新请求数据
 * */
$.ajax({
    type: "get",
    url: severURL + "user",
    timeout: 5000,
    success: function(data) {
        console.log(data)
        data = JSON.parse(data);
        if (data.code == 1) {
            data = data.result;
            for (var i = 0, datalen = data.length; i < datalen; i++) {
                createUserList(data[i].Id, 'img/jinchi.png', data[i].name, data[i].userName, data[i].registTime, data[i].city, data[i].auth)
            }
        } else {
            console.log(data.code);
        }
    },
    error: function(status, statusText) {
        alert('请求失败');
        console.log(status);
        console.log(statusText);
    }
});

/**
 * 新增用户
 * */
$('#newUserBtn').on('click', function() {
    var id = 'zhangss1125s14a4' + Math.floor(Math.random() * 10);
    var PicPath = 'img/jinchi.png';
    var name = $('#newName1').val();
    var userName = $('#newUsername1').val();
    var registTime = getNowFormatDate();
    var city = $('#newCity1').val();
    var auth = '已认证';
    createUserList(id, PicPath, name, userName, registTime, city, auth);
    $('#newUser').hide();
    $('.modal-backdrop').hide();
})

/**
 * 获取当前时间
 * */
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = ".";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
/**
 * 删除
 * */
var trid;
$('#artist_tbody').on('click', '.isrecommand_btn', function() {
    trid = this.parentNode.parentNode.id;
})
$('#delUserBtn').on('click', function() {
        console.log(trid)
        $('#' + trid).hide();
        $('#delUser').hide();
        $('.modal-backdrop').hide();
    })
    /**
     * 编辑
     * */
$('#artist_tbody').on('click', '.edit', function() {
    trid = this.parentNode.parentNode.id;
    var newUsername2 = $('#' + trid + ' td:eq(2)')[0].innerHTML;
    $('#newUsername2').val(newUsername2);
    var newName2 = $('#' + trid + ' td:eq(1)')[0].innerHTML;
    $('#newName2').val(newName2);
    var newCity2 = $('#' + trid + ' td:eq(4)')[0].innerHTML;
    $('#newCity2').val(newCity2);
})
$('#editBtn').on('click', function() {
    console.log(trid)
        //	$('#'+trid).hide();
    $('#editUser').hide();
    $('.modal-backdrop').hide();
    var newUsername2 = $('#newUsername2').val();
    $('#' + trid + ' td:eq(2)')[0].innerHTML = newUsername2;
    var newName2 = $('#newName2').val();
    $('#' + trid + ' td:eq(1)')[0].innerHTML = newName2;
    var newCity2 = $('#newCity2').val();
    $('#' + trid + ' td:eq(4)')[0].innerHTML = newCity2;
})