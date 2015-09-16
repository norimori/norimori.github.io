var app = angular.module('flapperNewsYAY', []);

//Creating controller
app.controller('MainCtrl', [
	'$scope',
	function($scope) {
		$scope.test = 'Hello world! Is this on the next line?'
	}
])


