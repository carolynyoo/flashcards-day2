app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	$scope.active = "";
  $scope.formOn = false;

  $scope.toggleForm = function () {
  	$scope.formOn = !$scope.formOn;
  }

	$scope.getCards = function (category) {
		$scope.flashCards = null;
		$scope.error = null;
		FlashCardsFactory.getFlashCards(category).then(function (data) {
			$scope.flashCards = data;
			$scope.active = category;
		}).catch(function (err) {
			$scope.error = err;
		});
	}

	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];

	$scope.scores = ScoreFactory;

	$scope.getCards(); 
});

app.filter('cheat', function() {

	return function(collection) {
		return collection.filter(function(element) {
			return element.correct;
		})
	}
})


