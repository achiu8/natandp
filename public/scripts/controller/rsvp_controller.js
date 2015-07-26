define([], function() {
  var rsvpController = function($scope, $http) {
    $scope.title = "RSVP Y'all";
    $scope.guest = {};
    $scope.attendingOptions = [
      {value: true, label: 'in person'},
      {value: false, label: 'in spirit'}
    ]

    $scope.submitForm = function() {
      var parsedResponse = parseRsvpFormResponse($scope.guest);

      console.log('FIRE THE TORPEDOES!!!');

      $http.post('/create_guest', {
        guest: parsedResponse
      })
      .success(function() {
        console.log('success!!!!');
      })
      .error(function() {
        console.log('we fucked up');
      });;
    };

    function parseRsvpFormResponse(response) {
      return {
        first_name: response.firstName,
        last_name: response.lastName,
        plus_ones: response.plus_ones,
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

  return rsvpController;
});
