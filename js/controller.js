//用户自定义控制器
function helloController($scope){
	$scope.hello = "Hello ";	//定义基本数据类型
	//定义对象属性
	$scope.person = {
		firstName:"Ramm",
		lastName:"Derek",
		//对象内声明方法
		fullName:function(){return $scope.person.firstName + " " +$scope.person.lastName}
	};
	//定义方法
	$scope.show = function(){return $scope.hello + $scope.person.fullName();};
}
function testController($scope){
	$scope.msg = "test";
}