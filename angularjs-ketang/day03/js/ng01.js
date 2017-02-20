angular.module('myApp',[])
	/*.controller('FilterController', ['$scope','$filter', function($scope,$filter){
		$scope.num=$filter('number')('3.233323',4);
		$scope.dollar=$filter('currency')(2.3235553,'¥');
	}])*/

	//case 2:
	.controller('FilterController',['$scope','numberFilter','currencyFilter',function($scope,fg,cf){
		$scope.num=fg(2.32332432,3);
		$scope.dollar=cf(2.2222222,'¥',3); 
	}])