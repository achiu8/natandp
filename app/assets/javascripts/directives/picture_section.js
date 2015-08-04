var pictureSectionDirective = function() {
  return {
    templateUrl: 'templates/directives/picture_section.html.erb',
    link: function(elem) {
      $('.picture-carousel').slick({
        fade: true,
        speed: 500,
        cssEase: 'linear',
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
      });
    }
  }
}

natAndP.directive('pictureSection', pictureSectionDirective);
