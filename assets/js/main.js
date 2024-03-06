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

//Count Up Js
$('.success__item-info-number').each(function() {
  var $this = $(this),
    countTo = $this.attr('data-value');
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {
    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }
  });  
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

// Testimonial Slider js
$('.testimonial__slider-items-wrapper').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//Dot Js
$(document).ready(function () {
    // Function to generate the pattern
    function generatePattern(rows, columns) {
      for (var i = rows - 1; i >= 0; i--) {
        var dotRow = $("<div class='dot-row'></div>");

        for (var j = 0; j < columns; j++) {
          dotRow.append("<span>&#x2022;</span>");
        }

        // Set opacity from 0 to 1
        var opacity = (rows - 1 - i) / (rows - 1); // Adjust this calculation as needed
        dotRow.css("opacity", opacity);

        $(".contact-info__right-dot-outer").append(dotRow);
      }
    }

    // Call the function to generate the pattern
    generatePattern(10, 10); // Define your rows & columns as parameters
});
