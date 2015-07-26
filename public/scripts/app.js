define([
  'controller/main_controller',
  'directives/rsvp',
  'routes',
  'angular',
  'angular-route'
], function(
  mainController,
  rsvp,
  routes,
  angular
) {
  var natAndP = angular.module('natAndP', ['ngRoute']);

  natAndP.controller('mainController', mainController);
  natAndP.directive('rsvp', rsvp);
  natAndP.config(routes);

  natAndP.init = function() {
    angular.bootstrap(document, ['natAndP']);
  }

  return natAndP;
});

