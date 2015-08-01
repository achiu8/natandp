var mainController = function($scope, $location, $anchorScroll) {
  $scope.text = "hello world";
  $scope.navBarMobileShown = false;

  var $body = $(document.body);
  var $navBar = $('.nav-bar');
  var $navBarIcon = $('.nav-bar-mobile');

  $scope.goTo = function(id) {
    $location.hash(id);
    $anchorScroll();

    if ($scope.navBarMobileShown) {
      $scope.toggleNav();
    }
  };

  $scope.toggleNav = function() {
    $scope.navBarMobileShown = !$scope.navBarMobileShown;
    $body.toggleClass('scroll-lock', $scope.navBarMobileShown);
  };
};

mainController.$inject = ['$scope', '$location', '$anchorScroll'];
natAndP.controller('mainController', mainController);
