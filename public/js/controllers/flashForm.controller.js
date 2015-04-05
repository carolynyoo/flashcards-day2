app.controller('FlashFormController', function ($scope, FlashFormFactory) {
  $scope.answers = [
    {correct: false}, 
    {correct: false}, 
    {correct: false}
  ];

  $scope.changeAnswer = function (index) {
    for (var i=0; i<$scope.answers.length; i++) {
      if (i===index) {
        $scope.answers[i].correct=true;
      } else {
        $scope.answers[i].correct=false;
      }
    }
  }

  $scope.submitFlashForm = function (q, c, a) {
    // $scope.formOn = false;

    var flashData = {
      question: q,
      category: c,
      answers: a
    }

    FlashFormFactory.sendFlashCard(flashData).then(function (response) {
      console.log(response);
    }).catch(function (err) {
      $scope.error = err;
      console.log(err);
    })
  }
});