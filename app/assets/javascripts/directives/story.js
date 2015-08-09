var storyDirective = function() {
  return {
    templateUrl: 'templates/directives/story.html',
    link: function(scope, element, attr) {
      scope.story = {
        'HOW WE MET'        : 'Lorem ipsum dolor sit amet, in vidit reque vim. Ad iriure facilis necessitatibus sed, prima quando usu eu. Nulla erant vis ex, ad enim scaevola convenire usu. Vocibus consequat no quo. Mea at ferri euripidis, ius ei possit dolorum suscipit.',
        'STARTED DATING'    : 'Lorem ipsum dolor sit amet, in vidit reque vim. Ad iriure facilis necessitatibus sed, prima quando usu eu. Nulla erant vis ex, ad enim scaevola convenire usu. Vocibus consequat no quo. Mea at ferri euripidis, ius ei possit dolorum suscipit.',
        'MOVED IN TOGETHER' : 'Lorem ipsum dolor sit amet, in vidit reque vim. Ad iriure facilis necessitatibus sed, prima quando usu eu. Nulla erant vis ex, ad enim scaevola convenire usu. Vocibus consequat no quo. Mea at ferri euripidis, ius ei possit dolorum suscipit.',
        'WELCOME BUTTER'    : 'Lorem ipsum dolor sit amet, in vidit reque vim. Ad iriure facilis necessitatibus sed, prima quando usu eu. Nulla erant vis ex, ad enim scaevola convenire usu. Vocibus consequat no quo. Mea at ferri euripidis, ius ei possit dolorum suscipit.',
        'PROPOSED'          : 'Lorem ipsum dolor sit amet, in vidit reque vim. Ad iriure facilis necessitatibus sed, prima quando usu eu. Nulla erant vis ex, ad enim scaevola convenire usu. Vocibus consequat no quo. Mea at ferri euripidis, ius ei possit dolorum suscipit.',
        'WEDDING'           : 'Lorem ipsum dolor sit amet, in vidit reque vim. Ad iriure facilis necessitatibus sed, prima quando usu eu. Nulla erant vis ex, ad enim scaevola convenire usu. Vocibus consequat no quo. Mea at ferri euripidis, ius ei possit dolorum suscipit.'
      }
      scope.milestones = Object.keys(scope.story);
      scope.selectedMilestone = scope.milestones[0];
      scope.content = scope.story[scope.selectedMilestone];

      scope.showContentFor = function(milestone) {
        scope.selectedMilestone = milestone;
        scope.content = scope.story[milestone];
      }

      scope.isSelected = function(milestone) {
        return scope.selectedMilestone === milestone;
      }
    }
  }
}

storyDirective.$inject = []
natAndP.directive('story', storyDirective);
