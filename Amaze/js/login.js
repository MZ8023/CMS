$('#login_btn').click(function() {
	var username = $('#username').val();
	var password = $('#password').val();
					console.log(username);
	if (username == '' || password == '') {
		$('#account_error').text('用户名或密码不能为空，请重新输入！');
	} else {
		$.ajax({
			type: "post",
			url: severURL + "login",
			data: {
				'username': username,
				'password': password
			},
			timeout: 5000,
			success: function(data) {
				console.log(data);
				data = JSON.parse(data);
//				console.log(data.code);
				if (data.code == 1) {
					//保存cookies
					var account = {
						"username": username,
						"password": password
					};
					setCookie('account', JSON.stringify(account));
					window.location.href = 'index.html';
				} else if (data.code == 0) {
					$('#account_error').text('输入的帐号密码有误，请重新输入！');
				}
			},
			error: function(textStatus) {
				console.log(textStatus);
				$('#account_error').text('请求失败，请稍后重试！');
			}
		});
	}
});