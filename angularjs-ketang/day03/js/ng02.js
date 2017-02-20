angular.module('myApp',[])
	.controller('FilterController', ['$scope','$filter',function($scope,$filter){
		$scope.now= new Date();
		$scope.str=$filter('uppercase')($filter('limitTo')('Hello world',2));
		var person={id:1001,name:'alice',sex:'male'};
		$scope.person=$filter('json')(person);
		
	}]);