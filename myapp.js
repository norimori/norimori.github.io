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

		//$scope variable defines a list array of post titles
		$scope.posts = [
			{title: 'post 1', upvotes: 5},
			{title: 'post 2', upvotes: 2},
			{title: 'post 3', upvotes: 15},
			{title: 'post 4', upvotes: 9},
			{title: 'post 5', upvotes: 4}
		];

		//Allows users to add posts. 
		/*Adds function to $scope variable that adds an object into the
		'posts' array. When this function is called, it appends a new post to
		the $scope.posts variable. */
		$scope.addPost = function() {

			/*
				So, when we add a post we're getting the title from $scope.title,
				which we then clear after the post has been created, to prevent
				the user from posting a blank title.
			*/
			if (!$scope.title || $scope.title === '') {
				return;
			}

			//push appends a variable
			/*
				addPost function retrieves the title entered into the form
				bound to the $scope variable 'title', and set 'title' to
				blank once it's been added to the posts array.
			*/
			$scope.posts.push({title: 'A new post!', upvotes: 0});



			//Resets contents of $scope.title to blank string.
			$scope.title = '';
		};


	}


]);


