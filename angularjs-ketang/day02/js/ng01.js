var app = angular.module("myApp",[]);
app.controller('FirstController', ['$scope', function($scope){
	$scope.name="tom";
	$scope.age=12;
}]).controller('SecondController', ['$scope', function($scope){
	$scope.name="jack";
}])
