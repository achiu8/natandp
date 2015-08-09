var storyDirective = function() {
  return {
    templateUrl: 'templates/directives/story.html'
  }
}

storyDirective.$inject = []
natAndP.directive('story', storyDirective);
