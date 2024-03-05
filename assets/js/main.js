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

// Article Slider js
$('.article__items-wrapper').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})