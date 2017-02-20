var app = angular.module('myApp',[]);
app.run(['$templateCache', function($templateCache){
	$templateCache.put('tc1','<p>itany1<mark ng-transclude></mark></p>');
}])
app.directive('first', ['$templateCache',function($templateCache){
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
		transclude:true,   //是否包含原内容
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		restrict:'AE',
		template:$templateCache.get('tc1'),
		replace:true,
		link: function($scope, iElm, iAttrs, controller) {
			console.log('自定义指令hello');
		}
	};
}]);


app.directive('second', ['$templateCache',function($templateCache){
	// Runs during compile
	return {
		// name: '',
		priority: 2,
		terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude) {
			console.log('second');
		},
	};
}]);

app.directive('third', ['$templateCache', function($templateCache){
	// Runs during compile
	return {
		// templateUrl:'temps/t1.html',
		// replace:true,
		priority:666,
		// terminal:true,
		controller: function($scope, $element, $attrs, $transclude) {

			console.log('third');
		},
	};
	
}]);
app.controller('DirectiveController', ['$scope', function($scope){
	
}]);