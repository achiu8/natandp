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
    resetNavPosition();
  };

  function resetNavPosition() {
    var navBarIconNewTop = $scope.navBarMobileShown ? window.scrollY : 0 ;
    $navBar.css({ top: window.scrollY, position: 'fixed' });
    $navBarIcon.css({ top: navBarIconNewTop + 10, position: 'fixed' });
  }
};

mainController.$inject = ['$scope', '$location', '$anchorScroll'];
natAndP.controller('mainController', mainController);
