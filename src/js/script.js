$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        arrows: true,
        dots: false,
        /* autoplay: true,
        autoplaySpeed: 2000, */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/right.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                }
            }
        ]
    });
  });