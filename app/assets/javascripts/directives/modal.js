var modalDirective = function() {
  return {
    scope: {
      attendee: '='
    },
    templateUrl: 'templates/directives/modal.html'
  }
}

modalDirective.$inject = []
natAndP.directive('modal', modalDirective);
