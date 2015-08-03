var pictureSectionDirective = function() {
  return {
    templateUrl: 'templates/directives/picture_section.html.erb',
    link: function(elem) {
      $('.picture-carousel').slick({
        fade: true,
        speed: 500,
        cssEase: 'linear',
        arrows: true,
        asNavFor: '.picture-carousel-nav'
      });

      $('.picture-carousel-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.picture-carousel'
      });
    }
  }
}

natAndP.directive('pictureSection', pictureSectionDirective);
