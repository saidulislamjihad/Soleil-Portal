//Home Slider Js
$('.home__items-wrapper').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  fade: true,
  cssEase: 'linear',
  prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
});