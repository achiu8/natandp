var pictureSectionDirective = function() {
  return {
    templateUrl: 'templates/directives/picture_section.html.erb',
    link: function(elem) {
      $('.picture-carousel').slick({
        dots: true
      });
    }
  }
}

natAndP.directive('pictureSection', pictureSectionDirective);
