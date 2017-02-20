var app = angular.module('myApp',[]);
app.controller('FormController', ['$scope', function($scope){
	$scope.user = {};
	$scope.doSubmit=function(){
		console.log($scope.user);
	}
}])