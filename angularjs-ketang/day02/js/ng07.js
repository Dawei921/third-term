angular.module('myApp',[])
.controller('ParseController', ['$scope', '$parse',function($scope,$parse){
	$scope.$watch('txt',function (newValue,oldValue,scope) {   //首先去监听txt的改变

		try{


			//parse函数用来将表达式解析为函数
			var fn = $parse(newValue);//如果解析成功则返回一个函数
			$scope.result = fn(scope);
		}catch(e){

		}
	})
}])