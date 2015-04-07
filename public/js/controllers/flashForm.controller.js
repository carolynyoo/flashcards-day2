app.controller('FlashFormController', function ($scope, FlashFormFactory) {

  $scope.formObj = {
    question: null,
    category: null,
    answers: [
      {correct: false}, 
      {correct: false}, 
      {correct: false}
    ]
  }; 

  

  $scope.changeAnswer = function (index) {
    for (var i=0; i<$scope.formObj.answers.length; i++) {
      if (i===index) {
        $scope.formObj.answers[i].correct=true;
      } else {
        $scope.formObj.answers[i].correct=false;
      }
    }
  }

  $scope.submitFlashForm = function (flashData) {

    FlashFormFactory.sendFlashCard(flashData).then(function (response) {
      console.log(response);
    }).catch(function (err) {
      $scope.error = err;
      console.log(err);
    })
  }
});