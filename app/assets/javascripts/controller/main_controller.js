var mainController = function($scope, $location, $anchorScroll) {
  $scope.text = "hello world";
  $scope.navBarMobileShown = false;

  var $body = $(document.body);
  var $navBar = $('.nav-bar');
  var $navBarIcon = $('.nav-bar-mobile');
  var $logo = $('#nat-and-p-logo');

  $scope.goTo = function(id) {
    $location.hash(id);
    $anchorScroll();

    if ($scope.navBarMobileShown) {
      $scope.toggleNav();
    }
  };

  $scope.toggleNav = function() {
    $scope.navBarMobileShown = !$scope.navBarMobileShown;
    toggleLogoPosition();
    $body.toggleClass('scroll-lock', $scope.navBarMobileShown);
  };

  function toggleLogoPosition() {
    if ($scope.navBarMobileShown) {
      $logo.insertAfter($('#nav-bar-registry'));
    } else {
      $logo.insertAfter($('#nav-bar-wedding-party'));
    }
  }
};

mainController.$inject = ['$scope', '$location', '$anchorScroll'];
natAndP.controller('mainController', mainController);
