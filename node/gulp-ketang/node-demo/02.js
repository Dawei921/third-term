// 处理http请求 并响应

'user strict';

//加载http模块，用来创建http服务器
var http = require('http');



var server = http.createServer(function(request,response){
	console.log(request.url);
	if(request.url == '/favicon.ico'){

		return;

	}
	response.writeHeader(200, {

		'Content-Type':'text/html;charset=utf-8',

	});
	response.write('<h3>woshihaoren</h3>');
	response.end();
}
server.listen(8080,function(){
	console.log("start to listen 8080.....");
})