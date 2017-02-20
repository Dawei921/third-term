var app = angular.module('myApp',[]);
app.controller('EventController', ['$scope', function($scope){
	$scope.count=0;
	$scope.doAdd=function(){
		$scope.count++;
	}
	$scope.$on('MyClick',function(){
		$scope.count++;
	})
}])