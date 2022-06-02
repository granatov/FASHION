$(function () {
  $(".main_slider").slick({
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="prev">OLDER POST</button>',
    nextArrow: '<button type="button" class="next">NEXT POST</button>',
    swipe: false,
    speed: 1500,
    fade: true,
    infinite: false,
  });

  $(".contact_slider").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });

  $(".menu_brg").click(function () {
    $(".menu_brg,.header__menu-list").toggleClass("active");
  });
});
