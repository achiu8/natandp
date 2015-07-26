define([], function() {
  var mainController = function($scope, $location, $anchorScroll) {
    $scope.text = "hello world";

    $scope.goTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    }

    $scope.submitForm = function() {
      console.log('Submitt form...');
      console.log($scope.form);
    }
  };

  mainController.$inject = ['$scope', '$location', '$anchorScroll'];

  return mainController;
});
