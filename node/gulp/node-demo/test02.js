/**
 * 处理HTTP请求并响应
 */

'use strict';

//加载http模块，用来创建HTTP服务器
var http=require('http');

//创建一个HTTP服务器
var server=http.createServer(function (request,response) {
	/**
	 * 浏览器每次发起请求，都会同时请求一次favicon.ico（favorities icon的缩写）
	 * favicon.ico用于收藏夹图标和浏览器标签上的显示
	 * 浏览器会自动向服务器发送这样的图片请求，可以在服务器端过滤掉此请求 	 
	 */

	 //处理请求
	 // console.log('接收到请求');
	 console.log(request.url);
	 if(request.url=='/favicon.ico'){
	 	return;
	 }
	 //响应客户端，指定响应头信息
	 response.writeHead(200,{
	 	'Content-Type':'text/html;charset=utf-8',
	 });
	 //响应数据
	 response.write('<h1>welcome to itany</h1>');
	 response.end();//响应结束
});

//启动服务器，监听8080端口的请求
server.listen(8080,function () {
	 console.log('开始监听8080端口...');
});