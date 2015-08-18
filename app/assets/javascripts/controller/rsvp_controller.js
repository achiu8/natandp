var rsvpController = function($scope, $http, $timeout) {
  $scope.showLoading = false;
  $scope.showError = false;
  $scope.guest = {};
  $scope.guest.willAtend = 0;
  $scope.attendingOptions = [
    {value: true, label: 'in person'},
    {value: false, label: 'in spirit'}
  ]

  $scope.submitForm = function() {
    var parsedResponse = parseRsvpFormResponse($scope.guest);
    $scope.showLoading = true;

    $http.post('/create_guest', {
      guest: parsedResponse
    })
    .success(function() {
      $scope.showLoading = false;
      console.log('success');
      showThankyouNotification();
    })
    .error(function() {
      $scope.showError = true;
      console.log('error');
    });;
  };

  function showThankyouNotification() {
    $thankYou.css('opacity', 1);
    $formWrapper.css('opacity', 0);
  }

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

  $scope.showHint = true;
  var $contactInfo = $('.contact-info');
  var $thankYou = $('.thank-you');
  var $formWrapper = $('.rsvp-pre-submit');

  $scope.hideHint = function() {
    $scope.showHint = false;
  };

  $scope.showContactInfoSection = function() {
    $scope.showContactInfo = true;
  };
};

rsvpController.$inject = ['$scope', '$http', '$timeout'];
natAndP.controller('rsvpController', rsvpController);
