var natAndP = angular.module('natAndP', ['ngRoute', 'templates']);

var routes = function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/main.html',
    controller: mainController
  });
}

routes.$inject = ['$routeProvider'];

natAndP.config(routes);
