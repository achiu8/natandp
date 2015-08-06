var rsvpController = function($scope, $http, $timeout) {
  $scope.guest = {};
  $scope.guest.willAtend = 0;
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
      showThankyouNotification();
    })
    .error(function() {
      console.log('error');
    });;
  };

  function showThankyouNotification() {
    $scope.showThankyou = true;
    $timeout(function() {
      $scope.showThankyou = false;
    }, 7000);
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

  $scope.showAttending = false;
  var showAttendingBottom = '165px';
  var showWeddingSelectionBottom = '265px';
  var showContactInfoBottom = '350px';

  var $contactInfo = $('.contact-info');
  var $paper = $('.envelope-paper');
  var $form = $('.rsvp-form');
  var paperAndForm = [$paper, $form];

  $scope.showAttendingSection = function() {
    if ($scope.guest.firstName && $scope.guest.lastName) {
      $scope.showAttending = true;
      shiftPaperAndForm(showAttendingBottom);
    }
  };

  $scope.showWeddingSelectionSection = function() {
    shiftPaperAndForm(showWeddingSelectionBottom);
  };

  $scope.showContactInfoSection = function() {
    shiftPaperAndForm(showContactInfoBottom);
    $contactInfo.css('opacity', '1');
  };

  function shiftPaperAndForm(amount) {
    paperAndForm.forEach(function($el) {
      $el.css('bottom', amount);
    });
  }
};

rsvpController.$inject = ['$scope', '$http', '$timeout'];
natAndP.controller('rsvpController', rsvpController);
