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

    $scope.bridesmaids = [
      'kim',
      'leah',
      'amy',
      'lisa',
      'carla',
      'ainsley'
    ]

    $scope.showModal = false;

    $scope.toggleModal = function(groomsman) {
      $scope.attendee = groomsman
      $scope.showModal = !$scope.showModal;
      document.body.style.overflow = 'hidden';
    }
  }];

  return {
    templateUrl: 'templates/directives/wedding_party.html',
    controller: controller
  }
}

weddingPartyDirective.$inject = []
natAndP.directive('weddingParty', weddingPartyDirective);
