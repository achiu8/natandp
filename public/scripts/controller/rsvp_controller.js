define([], function() {
  var rsvpController = function($scope) {
    $scope.title = "RSVP Y'all";
    $scope.submitForm = function() {
      console.log('Submitt form...');
      console.log($scope.guest);
    }
  };

  rsvpController.$inject = ['$scope'];

  return rsvpController
});
