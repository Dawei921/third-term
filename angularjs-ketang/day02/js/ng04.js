var app = angular.module('myApp',[]);
app.controller('EventController', ['$scope', function($scope){
	$scope.name='tom';
	$scope.show=function(e){
		var obj = angular.element(e.target);
		console.log(obj.html());
		obj.css('color','red');
		obj.css('background','pink');
	}
}])
