var app = angular.module('flapperNewsYAY', []);

//Creating controller
app.controller('MainCtrl', [
	'$scope', //Initialize $scope variable

	/*
		$scope variable serves as the bridge between Angular controllers
		and Angular templates. If soemthing needs to be accessible in the
		template, like a function/variable, bind it to $scope.
	*/
	function($scope) {
		//$scope variable defines a string
		$scope.testYAY = 'Hello world! HUH?!';

		//$scope variable defines a list of post titles
		$scope.posts = [
			'post 1',
			'post 2',
			'post 3',
			'post 4',
			'post 5',
		];
	}
]);


