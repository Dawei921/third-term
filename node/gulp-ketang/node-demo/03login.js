'use strict';

var http = require('http');
var querystring = require('querystring');


var server = http.createServer(function(request, response) {
    var url = request.url;
    switch (url) {
        case '/show':
            show(request, response);
            break;
        case '/login':
            login(request, response);
            break;
        default:
            response.writeHeader(404, {});
            response.end();
            break;
    }
});

function show(request, response) {
    response.writeHeader(200, { 'Content-Type': 'text/html;charset=utf-8', });
    response.write('<!DOCTYPE html>');
    response.write('<html lang="en">');
    response.write('<head>');
    response.write('	<meta charset="UTF-8">');
    response.write('	<title>denglu</title>');
    response.write('</head>');
    response.write('<body>');
    response.write('	<form action="/login" method="post"> ');
    response.write('		<table>');
    response.write('			<tr>');
    response.write('				<td>用户名：</td>');
    response.write('				<td><input type="text" name="username"></td>');
    response.write('			</tr>');
    response.write('			<tr>');
    response.write('				<td>密码：</td>');
    response.write('				<td><input type="password" name="password"></td>');
    response.write('			</tr>');
    response.write('			<tr>');
    response.write('				<td></td>');
    response.write('				<td>');
    response.write('					<input type="submit" value="登陆">');
    response.write('					<input type="reset" value="重置">');
    response.write('				</td>');
    response.write('			</tr>');
    response.write('		</table>');
    response.write('	</form>');
    response.write('</body>');
    response.write('</html>');
    response.end();
}

function login(request,response){
	response.writeHead(200,{ 'Content-Type':'text/html;charset=utf-8', });
	var params = '';
	request.on('data',function(part){
		params +=part;
	});0
	0
	request.on('end',function(){
		console.log(params);
		var obj = querystring.parse(params);
		if(obj.username=='gcw' && obj.password=='123'){
			response.write('欢迎您'+obj.username);
		}else{
			response.write('MD'+obj.username+'是谁');
		}
		response.end();
	});
}

server.listen(8080,function(){
	console.log('start to listen.....');
})
