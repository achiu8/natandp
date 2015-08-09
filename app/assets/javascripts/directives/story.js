var storyDirective = function() {
  return {
    templateUrl: 'templates/directives/story.html',
    link: function(scope, element, attr) {
      scope.stories = {
        'HOW WE MET': {
          backgroundUrl: 'http://placehold.it/1596x860',
          story: ' how we met Lorem ipsum dolor sit amet, in vidit reque vim. Ad iriure facilis necessitatibus sed, prima quando usu eu. Nulla erant vis ex, ad enim scaevola convenire usu. Vocibus consequat no quo. Mea at ferri euripidis, ius ei possit dolorum suscipit.'
        },
        'STARTED DATING': {
          backgroundUrl: 'http://placehold.it/1595x860',
          story: 'started dating Lorem ipsum dolor sit amet, in vidit reque vim. Ad iriure facilis necessitatibus sed, prima quando usu eu. Nulla erant vis ex, ad enim scaevola convenire usu. Vocibus consequat no quo. Mea at ferri euripidis, ius ei possit dolorum suscipit.'
        },
        'MOVED IN TOGETHER': {
          backgroundUrl: 'http://placehold.it/1594x860',
          story: 'moved in together Lorem ipsum dolor sit amet, in vidit reque vim. Ad iriure facilis necessitatibus sed, prima quando usu eu. Nulla erant vis ex, ad enim scaevola convenire usu. Vocibus consequat no quo. Mea at ferri euripidis, ius ei possit dolorum suscipit.'
        },
        'WELCOME BUTTER': {
          backgroundUrl: 'http://placehold.it/1593x860',
          story: 'welcome butter Lorem ipsum dolor sit amet, in vidit reque vim. Ad iriure facilis necessitatibus sed, prima quando usu eu. Nulla erant vis ex, ad enim scaevola convenire usu. Vocibus consequat no quo. Mea at ferri euripidis, ius ei possit dolorum suscipit.'
        },
        'PROPOSED': {
          backgroundUrl: 'http://placehold.it/1592x860',
          story:'proposed Lorem ipsum dolor sit amet, in vidit reque vim. Ad iriure facilis necessitatibus sed, prima quando usu eu. Nulla erant vis ex, ad enim scaevola convenire usu. Vocibus consequat no quo. Mea at ferri euripidis, ius ei possit dolorum suscipit.'
        },
        'WEDDING': {
          backgroundUrl: 'http://placehold.it/1591x860',
          story:'wedding Lorem ipsum dolor sit amet, in vidit reque vim. Ad iriure facilis necessitatibus sed, prima quando usu eu. Nulla erant vis ex, ad enim scaevola convenire usu. Vocibus consequat no quo. Mea at ferri euripidis, ius ei possit dolorum suscipit.'
        }
      }

      scope.selectedMilestone = 'HOW WE MET';
      scope.selectedContent = scope.stories[scope.selectedMilestone].story;

      scope.showContentFor = function(milestone) {
        scope.selectedMilestone = milestone;
        scope.selectedContent = scope.stories[milestone].story;
        setBackground(scope.stories[milestone].backgroundUrl);
      }

      scope.isSelected = function(milestone) {
        return scope.selectedMilestone === milestone;
      }

      var setBackground = function(url) {
        var backgroundUrl = "url(" + url + ")"
        $('.story').css('background-image', backgroundUrl);
      }

    }
  }
}

storyDirective.$inject = []
natAndP.directive('story', storyDirective);
