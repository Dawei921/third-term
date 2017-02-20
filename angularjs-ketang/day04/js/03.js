var app = angular.module('myApp',[]);
app.directive('hello', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		restrict:'AE',
		link: function($scope, iElm, iAttrs, controller) {
			console.log('自定义指令');
		},
	};
}]);

app.directive('myDir2', [function(){
	// Runs during compile
	return {
		
		controller: function($scope, $element, $attrs, $transclude) {
			console.log('controller');
		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){
		// 	console.log('compile');
		// }})),
		link: function($scope, iElm, iAttrs, controller) {
			console.log('link');
		}
	};
}]);

app.controller('DirectiveController', ['$scope', function($scope){
	
}])