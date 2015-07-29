var rsvpController = function($scope, $http) {
  $scope.title = "rsvp y'all";
  $scope.guest = {};
  $scope.guest.plusOnes = 0;
  $scope.attendingOptions = [
    {value: true, label: 'in person'},
    {value: false, label: 'in spirit'}
  ]

  $scope.submitForm = function() {
    var parsedResponse = parseRsvpFormResponse($scope.guest);

    $http.post('/create_guest', {
      guest: parsedResponse
    })
    .success(function() {
      console.log('success');
    })
    .error(function() {
      console.log('error');
    });;
  };

  function parseRsvpFormResponse(response) {
    return {
      first_name: response.firstName,
      last_name: response.lastName,
      plus_ones: response.plusOnes,
      phone: response.phone,
      email: response.email,
      attending: parseAttendingResponse(response)
    }
  };

  function parseAttendingResponse(response) {
    if (response.willAttend) {
      if (response.attendingSaratoga && response.attendingThailand) {
        return 'both';
      } else if (response.attendingSaratoga) {
        return 'saratoga_springs';
      } else if (response.attendingThailand) {
        return 'thailand';
      }
    }

    return 'neither';
  }
};

rsvpController.$inject = ['$scope', '$http'];
natAndP.controller('rsvpController', rsvpController);
