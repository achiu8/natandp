define([
  'controller/main_controller',
  'angular',
  'angular-route'
], function(
  mainController,
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

  natAndP.controller('mainController', mainController);

  natAndP.config(routes);

  natAndP.init = function() {
    angular.bootstrap(document, ['natAndP']);
  }

  return natAndP;
});

