var storyDirective = function($timeout) {
  return {
    templateUrl: 'templates/directives/story.html',
    link: function(scope, element, attr) {
      scope.stories = {
        'HOW WE MET': {
          className: 'how-we-met',
          story: "Natalie and Peter were introduced at work. It was Natalie's first interview with the company, and she met Peter while he was playing with a yoga ball. She thought it was the cutest thing in the world!"
        },
        'DATING': {
          className: 'started-dating',
          story: 'They started dating and spent their time binge watching Netflix, taking trips to Tahoe, and sharing their love for food. They also cooked for each other, Peter would cook and Natalie baked...and they fell in love.'
        },
        'BUTTER': {
          className: 'butter',
          story: "Natalie always wanted a dog, so for her birthday, Peter took home Butter, an italian greyhound, and they welcomed her to the family. She's a one of a kind dog and they couldn't be happier to have brought Butter into their lives."
        },
        'PROPOSAL': {
          className: 'proposal',
          story: "On June 27, 2015, Peter took Natalie out to a fancy dinner...little did she know what was going to happen. When they got home, Peter got down on one knee and asked Natalie if she would spend the rest of her life with him. She said yes!"
        },
        'WEDDING': {
          className: 'wedding',
          story:"Natalie and Peter will have two weddings, the first one is in California and second is in Bangkok. They couldn't be happier and cannot wait to celebrate (and party) with their friends and family."
        }
      }

      scope.selectedMilestone = 'HOW WE MET';
      scope.selectedContent = scope.stories[scope.selectedMilestone].story;
      scope.showMainStory = false;
      scope.showGreeting = false;
      scope.showIntroStory = false;
      var currentStory = "how-we-met";

      scope.showContentFor = function(milestone) {
        scope.selectedMilestone = milestone;
        scope.selectedContent = scope.stories[milestone].story;
        setBackground(scope.stories[milestone].className);
      }

      scope.isSelected = function(milestone) {
        return scope.selectedMilestone === milestone;
      }

      var setBackground = function(className) {
        $('.story-background').removeClass(currentStory);
        $('.story-background').addClass(className);
        currentStory = className;
      }

      scope.showStory = function() {
        scope.showMainStory = true;
        scope.showIntroStory = false;
        scope.showGreeting = false;
        setBackground('how-we-met');
      };

      $timeout(function() {
        $timeout(function() {
          $('.content').addClass("loaded");
          $timeout(function() {
            setBackground('hi-swing');
            scope.showIntroStory = true;
            scope.showGreeting = true;
          }, 750);
        }, 500);
      }, 1000);
    }
  }
}

storyDirective.$inject = ['$timeout']
natAndP.directive('story', storyDirective);
