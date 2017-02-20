/**
 * 用户登陆
 */

'use strict';

//加载模块
var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(request, response) {
    var url = request.url;
    switch (url) {
        case '/show':
            //显示登陆页面
            show(request, response);
            break;
        case '/login':
            //处理登陆请求
            login(request, response);
            break;
        default:
            response.writeHead(404, {})
            response.end();
            break;
    }
});

function show(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write('<!DOCTYPE html>');
    response.write('<html lang="en">');
    response.write('<head>');
    response.write('	<meta charset="UTF-8">');
    response.write('	<title>用户登陆</title>');
    response.write('</head>');
    response.write('<body>');
    response.write('	<form action="/login" method="post">');
    response.write('		<table>');
    response.write('			<tr>');
    response.write('				<td>用户名</td>');
    response.write('				<td>');
    response.write('					<input type="text" name="username">');
    response.write('				</td>');
    response.write('			</tr>');
    response.write('			<tr>');
    response.write('				<td>密码</td>');
    response.write('				<td>');
    response.write('					<input type="password" name="password">');
    response.write('				</td>');
    response.write('			</tr>');
    response.write('			<tr>');
    response.write('				<td></td>');
    response.write('				<td>');
    response.write('					<input type="submit" value="登陆">');
    response.write('					<input type="reset" value="重置">');
    response.write('				</td>');
    response.write('			</tr>');
    response.write('		</table>');
    response.write('');
    response.write('	</form>');
    response.write('</body>');
    response.write('</html>');
    response.end();
}

function login(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    });
    var params = '';
    //绑定data事件，每当获取到请求参数时触发
    request.on('data', function(part) { //这里处理的post请求
        params += part;
    });
    //绑定end事件，当请求参数获取结束时触发
    request.on('end', function() {
        // console.log(params); //username=tom&password=123
        var obj = querystring.parse(params);
        console.log(obj);
        if (obj.username == 'admin' && obj.password == '123') {
            response.write('欢迎您：' + obj.username);
        } else {
            response.write('用户名或密码不正确！');
        }
        response.end();
    });

}

server.listen(8080, function() {
    console.log('开始监听8080端口....');
});
