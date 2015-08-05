var weddingPartyDirective = function() {
  return {
    templateUrl: 'templates/directives/wedding_party.html',
    controller: 'rsvpController'
  }
}

weddingPartyDirective.$inject = []
natAndP.directive('weddingParty', weddingPartyDirective);
