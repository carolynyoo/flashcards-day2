app.factory('FlashFormFactory', function ($http) {
  return {
    sendFlashCard: function (flashData) {
      return $http.post('/cards', flashData)
                  .then(function (response) {
                    return response;
                  });
    }
  }
})