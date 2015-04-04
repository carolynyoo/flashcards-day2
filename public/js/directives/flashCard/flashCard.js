app.directive('flashCard', ['ScoreFactory', function (ScoreFactory) {
  return {
    restrict: 'E', 
    templateUrl: '/js/directives/flashCard/flashCard.html',
    link: function (scope, elem, attrs) {
      scope.answered = false;
      scope.answeredCorrectly = null;
      scope.answerQuestion = function (answer) {
        if (scope.answered) {
            return;
        }

        scope.answered = true;
        scope.answeredCorrectly = answer.correct;

        console.log(scope.answered);

        if (answer.correct) {
          console.log('correct');
            ScoreFactory.correct++;
        } else {
            ScoreFactory.incorrect++;
        }
      }
    }
  }
}])