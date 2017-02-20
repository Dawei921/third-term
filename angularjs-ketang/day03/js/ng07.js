var app = angular.module('myApp',[]);
app.controller('DirectiveController', ['$scope', function($scope){
	$scope.arr = ['tom','alice','jack','ammy','toma'];
	$scope.users=[
		{id:1,name:'tom',age:12,hobby:'basketball',pwd:"123"},
		{id:2,name:'alice',age:22,hobby:'football',pwd:"123"},
		{id:3,name:'jerry',age:32,hobby:'ball',pwd:"123"},
		{id:4,name:'jack',age:42,hobby:'basball',pwd:"123"},
		{id:5,name:'ammy',age:52,hobby:'ketball',pwd:"123"},
	]
}])