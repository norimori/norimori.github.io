var app = angular.module('flapperNewsYAY', []);

//Creating controller
app.controller('MainCtrl', [

	'$scope', //Initialize $scope variable

	/*
		$scope variable serves as the bridge between Angular controllers
		and Angular templates. If something needs to be accessible in the
		template, like a function/variable, bind it to $scope.
	*/
	function($scope) {
		//$scope variable defines a string
		$scope.testYAY = 'Hello world! HUH?!';

		//$scope variable defines a list of post titles
		$scope.posts = [
			{title: 'post 1', upvotes: 5},
			{title: 'post 2', upvotes: 2},
			{title: 'post 3', upvotes: 15},
			{title: 'post 4', upvotes: 9},
			{title: 'post 5', upvotes: 4}
		];
	}
]);


