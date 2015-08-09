var storyDirective = function() {
  return {
    templateUrl: 'templates/directives/story.html',
    link: function(scope, element, attr) {
      scope.story = {
        'How We Met': 'ccontent - how we metcontent - how we metcontent - how we metcontent - how we metcontent - how we metcontent - how we metontent - how we met',
        'Started Dating': 'ccontent - started datingcontent - started datingcontent - started datingcontent - started datingcontent - started datingcontent - started datingontent - started dating',
        'Moved in Together': 'ccontent - moved in togethercontent - moved in togethercontent - moved in togethercontent - moved in togetherontent - moved in together',
        'Welcome Butter': 'ccontent - welcome buttercontent - welcome buttercontent - welcome buttercontent - welcome butterontent - welcome butter',
        'Proposed': 'ccontent - proposedcontent - proposedcontent - proposedcontent - proposedontent - proposed',
        'Wedding': 'ccontent - wedding content - wedding content - wedding content - wedding ontent - wedding '
      }

      scope.milestones = Object.keys(scope.story);

      scope.content = scope.story['How We Met'];

      scope.showContentFor = function(milestone) {
        scope.content = scope.story[milestone];
      }
    }
  }
}

storyDirective.$inject = []
natAndP.directive('story', storyDirective);
