var storyDirective = function() {
  return {
    templateUrl: 'templates/directives/story.html',
    link: function(scope, element, attr) {
      scope.story = {
        'HOW WE MET'        : 'cccontent - how we metcontenccontent - how we metcontencontent - how we metcontent - how we metcontent - how we metcontent - how we metcontent - how we metcontent - how we metontent - how we met',
        'STARTED DATING'    : 'ccontent - started datingcontent - started datingcoccontent - how we metcontenntent - started datingcontent - started datingcontent - started datingcontent - started datingontent - started dating',
        'MOVED IN TOGETHER' : 'ccontent - moved in togethercontent - moved in togethercontent - moved in togethercontent - moved in togetherontent - ccontent - how we metcontenccontent - how we metcontenmoved in together',
        'WELCOME BUTTER'    : 'cccontent - welcome buttercontent - welcome buttercontent - welcome buttercontent - welcome butterontent - welcome buttercontent - welcome buttercontent - welcome buttercontent - welcome buttercontent - welcome butterontent - welcome butter',
        'PROPOSED'          : 'cccontent - proposedcontent - proposedcontent - proposedcontent - proposedontent - proposedcontent - proposedcontent - proposedcontent - proposedcontent - proposedontent - proposed',
        'WEDDING'           : 'cccontent - wedding content - wedding content - wedding content - wedding ontent - wedding content - ccontent - how we metcontenwedding content - wedding content - wedding content - wedding ontent - wedding '
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
