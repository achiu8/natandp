var storyDirective = function() {
  return {
    templateUrl: 'templates/directives/story.html',
    link: function(scope, element, attr) {
      scope.story = {
        'How We Met': 'cccontent - how we metcontenccontent - how we metcontencontent - how we metcontent - how we metcontent - how we metcontent - how we metcontent - how we metcontent - how we metontent - how we met',
        'Started Dating': 'ccontent - started datingcontent - started datingcoccontent - how we metcontenntent - started datingcontent - started datingcontent - started datingcontent - started datingontent - started dating',
        'Moved in Together': 'ccontent - moved in togethercontent - moved in togethercontent - moved in togethercontent - moved in togetherontent - ccontent - how we metcontenccontent - how we metcontenmoved in together',
        'Welcome Butter': 'cccontent - welcome buttercontent - welcome buttercontent - welcome buttercontent - welcome butterontent - welcome buttercontent - welcome buttercontent - welcome buttercontent - welcome buttercontent - welcome butterontent - welcome butter',
        'Proposed': 'cccontent - proposedcontent - proposedcontent - proposedcontent - proposedontent - proposedcontent - proposedcontent - proposedcontent - proposedcontent - proposedontent - proposed',
        'Wedding': 'cccontent - wedding content - wedding content - wedding content - wedding ontent - wedding content - ccontent - how we metcontenwedding content - wedding content - wedding content - wedding ontent - wedding '
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
