angular.module('myApp',[])
	.controller('FilterController', ['$scope', function($scope){
		$scope.arr=["tom","jack","mike","Alice","alex"];

		$scope.users=[
			{name:"tom",age:20,pwd:"123"},
			{name:"jack",age:22,pwd:"abc"},
			{name:"mike",age:21,pwd:"aaa"},
			{name:"Alice",age:22,pwd:"111"},
			{name:"ab",age:22,pwd:"23"},
		];
		$scope.comp=function(value,index,arr){
			// return value.age>=22;
			return value.name=="tom"
		}
		$scope.comp2=function(value,index,arr){
			return value.age>=$scope.txt
		}
		$scope.comp3=function(a){
			return a.name.length;
		}
		$scope.comp4=function(a,b){
			var al=a.value.length;
			var bl=b.value.length;
			if(al != bl){
				return al-bl;

			}
			var x=a.value.localeCompare(b.value);
			if(x>0){
				return 6666;
			}else if(x<0){
				return -6;
			}else{
				return 0;
			}
			
		}
	}])