'use strict';
var http = require('http');
var querystring = require('querystring');
//根据请求判断跳转页面
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
            response.writeHead(404, {});
            response.end();
            break;
    }
});

function show(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<!DOCTYPE html>');
    response.write('<html lang="en">');
    response.write('<head>');
    response.write('<script src="plugins/jquery.min.js"></script>');
    response.write('<meta charset="utf-8">');
    response.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
    response.write('<link href="css/normalize.css" rel="stylesheet" type="text/css" />');
    response.write('<link href="css/grid.css" rel="stylesheet" type="text/css" />');
    response.write('<link href="css/login.css" rel="stylesheet" type="text/css" />');
    response.write('</head>');
    response.write('<body class="body-100">');
    response.write('<div class="error" style="display: none;">');
    response.write('<font id="error" color="red" style="margin-top: 20px;"></font>');
    response.write('</div>');
    response.write('<div class="typecho-login-wrap">');
    response.write('<div class="typecho-login">');
    response.write('<h1>');
    response.write('<a href="index.html" style="text-decoration: none; color: #ADADAB;">LvHuo</a>');
    response.write('</h1>');
    response.write('<form id="login-form" method="post" action="/login" onsubmit="return checkForm()">');
    response.write('<p>');
    response.write('<label class="sr-only" for="name">用户名</label> <input type="text" class = "text-l w-100" placeholder = "username" name = "username" id = "name" > ');
    response.write('</p>'); 
    response.write('<p>'); 
    response.write('<label class="sr-only" for="password">密码</label> <input type = "password" placeholder = "password" class = "text-l w-100" name = "password" id = "password" > ');
    response.write('</p>'); 
    response.write('<p class="submit">');
    response.end();
	}

	// 验证登陆
	function login(request,response){
		response.writeHead(200,{
			'Content-Type':'text/html;charset=utf-8'
		});
		var params = '';
		request.on('data',function(part){
			params +=part;    
		});
		request.on('end',function(){
			console.log(params);
			var obj = querystring.parse(params);
			if(obj.username =='admin' && obj.password == '123'){
				response.write('welcome'+obj.username);
			}else{
				response.write('sorry,you are wrong');
			}
			response.end();
		});
	}

server.listen(8080, function(){
    console.log("start to listening......");
});
