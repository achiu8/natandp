var storyDirective = function() {
  return {
    templateUrl: 'templates/directives/story.html',
    link: function(scope, element, attr) {
      scope.stories = {
        'HOW WE MET': {
          backgroundUrl: 'images/how-we-met.png',
          story: "Natalie and Peter were introduced at work. It was Natalie's first interview with the company, and she met Peter while he was playing with a yoga ball. She thought it was the cutest thing in the world."
        },
        'DATING': {
          backgroundUrl: 'images/started-dating.png',
          story: 'They started dating and spent their time binge watching Netflix, going to concerts together, and eating out. They also cooked for each other, Peter would cook and Natalie baked...and they fell in love.'
        },
        'BUTTER': {
          backgroundUrl: 'images/butter.png',
          story: "Natalie always wanted a dog, so for her birthday, Peter took home Butter, an italian greyhound, and they welcomed her to the family. She's a one of a kind dog and they couldn't be happier to have brought Butter into their lives."
        },
        'PROPOSAL': {
          backgroundUrl: 'images/proposed.png',
          story: "On June 28, 2015, Peter took Natalie out to a fancy dinner...little did she know what was going to happen. When they got home, Peter got down on one knee and asked Natalie to spend the rest of their lives together. And Natalie said yes."
        },
        'WEDDING': {
          backgroundUrl: 'images/wedding.png',
          story:"Natalie and Peter will have two weddings, the first one is in California and second is in Bangkok. They couldn't be happier and cannot wait to celebrate (and party) with their friends and family."
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
