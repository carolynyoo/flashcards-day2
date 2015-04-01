app.controller('MainController', function ($scope, whateverName, FlashCardsFactory, ScoreFactory) {
	FlashCardsFactory.getFlashCards().then(function (data) {
		$scope.flashCards = data;
	});

	$scope.active = false;

	$scope.getCategoryCards = function (category) {
		FlashCardsFactory.getFlashCards(category).then(function (data) {
			$scope.flashCards = data;
			$scope.active = true;
		});
	}


	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];

	$scope.scores = ScoreFactory;

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			if (flashCard.answeredCorrectly) {
				$scope.scores['correct']+=1;
			} else {
				$scope.scores['incorrect']+=1;
			}
		}
	}
});