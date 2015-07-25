var natAndP = angular.module('natAndP', ['ngRoute']);

var routes = function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/main.html',
    controller: mainController
  });
}

routes.$inject = ['$routeProvider'];

var mainController = function($scope) {
  $scope.text = "hello world";
};

mainController.$inject = ['$scope'];

natAndP.controller('mainController', mainController);
natAndP.config(routes);

natAndP.init = function() {
  angular.bootstrap(document, ['natAndP']);
}

natAndP.init();
