var weddingPartyDirective = function() {
  var controller = ['$scope', function($scope) {
    $scope.groomsmen = [
      {
        shortName: 'geoff',
        fullName: 'Geoff Consolacion',
      },
      {
        shortName: 'guru',
        fullName: 'Guru Velasco',
      },
      {
        shortName: 'baummer',
        fullName: 'James Baummer',
      },
      {
        shortName: 'ben',
        fullName: 'Ben Pham',
      },
      {
        shortName: 'Andy',
        fullName: 'Andy Chiu',
      },
      {
        shortName: 'john',
        fullName: 'John Lin',
      }
    ]

    $scope.bridesmaids = [
      {
        shortName: 'kim',
        fullName: 'Kimberly Hoang',
      },
      {
        shortName: 'leah',
        fullName: 'Leah Hernandez',
      },
      {
        shortName: 'amy',
        fullName: 'Amy Dong',
      },
      {
        shortName: 'lisa',
        fullName: 'Lisa Nguyen',
      },
      {
        shortName: 'carla',
        fullName: 'Carla Monsalud',
      },
      {
        shortName: 'ainsley',
        fullName: 'Ainsley Reyes',
      }
    ]

    $scope.showModal = false;

    $scope.toggleModal = function(groomsman) {
      $scope.attendee = groomsman
      $scope.showModal = !$scope.showModal;
      document.getElementById('navbar').style.display = 'none';
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
