var app = angular.module('flapperNewsYAY', []);

//Creating controller
app.controller('MainCtrl', [
	'$scope',
	function($scope) {
		$scope.test = 'Hello world! Please work? \n Does this escape key work?';
	}
]);


