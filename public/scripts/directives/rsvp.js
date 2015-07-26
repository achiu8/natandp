define([], function() {
  var rsvpDirective = function() {
    return {
      templateUrl: 'templates/directives/rsvp.html',
      controller: 'rsvpController'
    }
  }

  rsvpDirective.$inject = []

  return rsvpDirective;
});
