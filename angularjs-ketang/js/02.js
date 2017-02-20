/*angular.module('myApp',[]).controller(
	'firstController',function($scope){
		$scope.name='tom';
	}
);*/

var app = angular.module('myApp',[]);
app.controller('firstController', ['$scope','$scope', function($scope,b){
	$scope.name="tom&jack";
	b.age=12;
}])
