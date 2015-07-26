define([], function() {
  var mainController = function($scope, $location, $anchorScroll) {
    $scope.text = "hello world";

    $scope.goTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    }
  };

  mainController.$inject = ['$scope', '$location', '$anchorScroll'];

  return mainController;
});
