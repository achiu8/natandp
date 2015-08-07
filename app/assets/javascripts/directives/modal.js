var modalDirective = function() {
  return {
    scope: {
      attendee: '=',
      show: '='
    },
    templateUrl: 'templates/directives/modal.html',
    link: function(scope, element, attr) {
      scope.hideModal = function() {
        scope.show = false;
        document.body.style.overflow = 'scroll';
      }
    }
  }
}

modalDirective.$inject = []
natAndP.directive('modal', modalDirective);
