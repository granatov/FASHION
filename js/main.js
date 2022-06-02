$(function () {
  $(".main_slider").slick({
    arrows: true,
    dots: true,
    prevArrow: '<img class="slick-prev" src="template/prev_arr.svg" alt="">',
    nextArrow: '<img class="slick-next" src="template/next_arr.svg" alt="">',
    swipe: false,
    speed: 1500,
    fade: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 568,
        settings: {
          arrows: false,
        },
      },
    ],
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
          autoplaySpeed: 2000,
        },
      },
    ],
  });

  $(".menu_brg").click(function () {
    $(".menu_brg,.header__menu-list").toggleClass("active");
  });
});
