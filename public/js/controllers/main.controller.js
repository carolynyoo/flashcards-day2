app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	FlashCardsFactory.getFlashCards().then(function (data) {
		$scope.flashCards = data;
	});

	$scope.active = "";

	$scope.getCategoryCards = function (category) {
		FlashCardsFactory.getFlashCards(category).then(function (data) {
			$scope.flashCards = data;
			$scope.active = category;
		});
	}


	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];

	$scope.scores = ScoreFactory;
});

app.filter('cheat', function() {

	return function(collection) {
		return collection.filter(function(element) {
			return element.correct;
		})
	}
})


