define([
  'controller/main_controller'
], function(
  mainController
) {
  var routes = function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'templates/main.html',
      controller: mainController
    });
  }

  routes.$inject = ['$routeProvider'];

  return routes;
});
