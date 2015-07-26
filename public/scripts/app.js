define([
  'angular',
  'angular-route'
], function(
  angular
) {
  var natAndP = angular.module('natAndP', ['ngRoute']);

  var routes = function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'templates/main.html',
      controller: mainController
    });
  }

  routes.$inject = ['$routeProvider'];

  var mainController = function($scope, $location, $anchorScroll) {
    $scope.text = "hello world";

    $scope.goTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    }
  };

  mainController.$inject = ['$scope', '$location', '$anchorScroll'];

  natAndP.controller('mainController', mainController);
  natAndP.config(routes);

  natAndP.init = function() {
    angular.bootstrap(document, ['natAndP']);
  }

  return natAndP;
});

