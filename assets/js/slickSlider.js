$(document).ready(function () {
  $(".detail__slide").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: `<button type="button" class="slick-prev"> <i class="fa-solid fa-chevron-left"></i> </button>`,
    nextArrow: `<button type="button" class="slick-next"> <i class="fa-solid fa-chevron-right"></i> </button>`,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
