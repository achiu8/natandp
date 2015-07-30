var mainController = function($scope, $location, $anchorScroll) {
  $scope.text = "hello world";
  $scope.$body = $(document.body);
  $scope.$navBar = $('.nav-bar');
  $scope.$navBarIcon = $('.nav-bar-mobile');
  $scope.navBarMobileShown = false;

  $scope.goTo = function(id) {
    $location.hash(id);
    $anchorScroll();

    if ($scope.navBarMobileShown) {
      $scope.toggleNav();
    }
  };

  $scope.toggleNav = function() {
    $scope.navBarMobileShown = !$scope.navBarMobileShown;
    $scope.$body.toggleClass('scroll-lock', $scope.navBarMobileShown);
    resetNavPosition();
  };

  function resetNavPosition() {
    var navBarIconNewTop = $scope.navBarMobileShown ? window.scrollY : 0 ;
    $scope.$navBar.css({ top: window.scrollY, position: 'fixed' });
    $scope.$navBarIcon.css({ top: navBarIconNewTop + 10, position: 'fixed' });
  }
};

mainController.$inject = ['$scope', '$location', '$anchorScroll'];
natAndP.controller('mainController', mainController);
