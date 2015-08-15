var mainController = function($scope, $location, $anchorScroll) {
  $scope.navBarMobileShown = false;

  var $body = $(document.body);

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
};

mainController.$inject = ['$scope', '$location', '$anchorScroll'];
natAndP.controller('mainController', mainController);
