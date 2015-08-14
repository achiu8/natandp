var storyDirective = function() {
  return {
    templateUrl: 'templates/directives/story.html',
    link: function(scope, element, attr) {
      scope.stories = {
        'HOW WE MET': {
          backgroundUrl: 'images/how-we-met.png',
          story: ' how we met Lorem ipsum dolor sit amet, in vidit reque vim. Ad iriure facilis necessitatibus sed, prima quando usu eu. Nulla erant vis ex, ad enim scaevola convenire usu. Vocibus consequat no quo. Mea at ferri euripidis, ius ei possit dolorum suscipit.'
        },
        'STARTED DATING': {
          backgroundUrl: 'images/started-dating.png',
          story: 'started dating Lorem ipsum dolor sit amet, in vidit reque vim. Ad iriure facilis necessitatibus sed, prima quando usu eu. Nulla erant vis ex, ad enim scaevola convenire usu. Vocibus consequat no quo. Mea at ferri euripidis, ius ei possit dolorum suscipit.'
        },
        'MOVED IN TOGETHER': {
          backgroundUrl: 'images/moved-in.png',
          story: 'moved in together Lorem ipsum dolor sit amet, in vidit reque vim. Ad iriure facilis necessitatibus sed, prima quando usu eu. Nulla erant vis ex, ad enim scaevola convenire usu. Vocibus consequat no quo. Mea at ferri euripidis, ius ei possit dolorum suscipit.'
        },
        'WELCOME BUTTER': {
          backgroundUrl: 'images/butter.png',
          story: 'welcome butter Lorem ipsum dolor sit amet, in vidit reque vim. Ad iriure facilis necessitatibus sed, prima quando usu eu. Nulla erant vis ex, ad enim scaevola convenire usu. Vocibus consequat no quo. Mea at ferri euripidis, ius ei possit dolorum suscipit.'
        },
        'PROPOSED': {
          backgroundUrl: 'images/proposed.png',
          story:'proposed Lorem ipsum dolor sit amet, in vidit reque vim. Ad iriure facilis necessitatibus sed, prima quando usu eu. Nulla erant vis ex, ad enim scaevola convenire usu. Vocibus consequat no quo. Mea at ferri euripidis, ius ei possit dolorum suscipit.'
        },
        'WEDDING': {
          backgroundUrl: 'images/wedding.png',
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
