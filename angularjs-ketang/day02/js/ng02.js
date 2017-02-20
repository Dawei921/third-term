

var app = angular.module('myApp',[]);

app.run(['$rootScope',function($rootScope){
	$rootScope.name='jack';
	$rootScope.age=23;
}])
app.controller('FirstController', ['$scope', function($scope){
	$scope.name="tom";
}])
app.controller('SecondController', ['$scope', function($scope){
	$scope.hobby='football';
}])
