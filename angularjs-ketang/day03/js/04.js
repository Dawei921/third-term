angular.module('myApp',[])
	.controller('FilterController', ['$scope', '$timeout',function($scope,$timeout){
		$timeout(function(){
			$scope.abs="https://www.baidu.com/";
			$scope.pic="2.jpg";
		},2000);
		$scope.readonly=true;
		$scope.show=function(){
			$scope.readonly= !$scope.readonly;
			console.log($scope.readonly);
		}
	}])