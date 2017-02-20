angular.module('myApp',[])
	.controller('FirstController', ['$scope', function($scope){
		$scope.name='tom';
		$scope.age=20;
		$scope.stu={
			id:1122,
			name:'jack'
		};
		$scope.hobbies=['eat','sleep','doudou']
	}])