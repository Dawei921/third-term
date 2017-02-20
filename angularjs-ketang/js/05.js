var app = angular.module('myApp',[]);
app.filter('reverse',function(){
	return function (data,splitChar){
		if(typeof data==='string'){
			if(!splitChar){
				splitChar='';
			}
			var arr = data.split(splitChar);
			arr.reverse();
			return arr.join(splitChar);
		}
		if(typeof==='number'){

			var arr=(data+"").split('');
			arr.reverse();
			return parseFloat(arr.join(''));
		}

		if(angular.isArray(data)){
			var temp=new Array();
			for(var index in data){
				temp.push(data[index]);
			}
			return temp.reverse();
		}
		return data;
	};
});
app.controller('FilterControler', ['$scope','$filter', function($scope,$filter){
	/*$scope.reverse=$filter('reverse')('wbs16092');
	$scope.hobbies=['eat','sleep','doudou'];*/
}])