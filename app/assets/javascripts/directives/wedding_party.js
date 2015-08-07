var weddingPartyDirective = function() {
  var controller = ['$scope', function($scope) {
    $scope.groomsmen = [
      'geoff',
      'guru',
      'baummer',
      'ben',
      'andy',
      'john'
    ]

    $scope.modalShowing = false;
    $scope.attendee = "Geoff";

    $scope.toggleModal = function() {
      console.log("clicked");
      $scope.showModal = !$scope.showModal;
    }
  }];

  return {
    templateUrl: 'templates/directives/wedding_party.html',
    controller: controller
  }
}

weddingPartyDirective.$inject = []
natAndP.directive('weddingParty', weddingPartyDirective);
