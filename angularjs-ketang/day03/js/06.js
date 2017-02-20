var app=angular.module('myApp',[]);
app.controller('FilterController', ['$scope', function($scope){
		$scope.heer=true;
		$scope.change=function(){
			$scope.heer = !$scope.heer;
		}
}])