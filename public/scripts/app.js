define([
  'controller/main_controller',
  'controller/rsvp_controller',
  'directives/rsvp',
  'routes',
  'angular',
  'angular-route'
], function(
  mainController,
  rsvpController,
  rsvp,
  routes,
  angular
) {
  var natAndP = angular.module('natAndP', ['ngRoute']);

  natAndP.controller('mainController', mainController);
  natAndP.controller('rsvpController', rsvpController);
  natAndP.directive('rsvp', rsvp);
  natAndP.config(routes);

  natAndP.init = function() {
    angular.bootstrap(document, ['natAndP']);
  }

  return natAndP;
});

