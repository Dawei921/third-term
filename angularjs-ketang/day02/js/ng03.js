var app=angular.module('myApp',[]);


app.controller('FirstController', ['$scope', function($scope){
	$scope.name='tom';
	$scope.show=function(){
		console.log('hello:'+$scope.name);
	};
}]);

app.controller('SecondController', ['$scope', function($scope){
	// $scope.name='alice';
	$scope.show=function(){
		console.log('您好：'+$scope.name);
	};
}]);
