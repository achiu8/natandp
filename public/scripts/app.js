define([
  'controller/main_controller',
  'routes',
  'angular',
  'angular-route'
], function(
  mainController,
  routes,
  angular
) {
  var natAndP = angular.module('natAndP', ['ngRoute']);

  natAndP.controller('mainController', mainController);
  natAndP.config(routes);

  natAndP.init = function() {
    angular.bootstrap(document, ['natAndP']);
  }

  return natAndP;
});

