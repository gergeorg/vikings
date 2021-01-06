$('[data-fancybox]').fancybox({
  youtube : {
      controls : 0,
      showinfo : 0
  }
});



$('.hero__slider-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.hero__slider-text',
  prevArrow: '<button class="slick-prev slick-btn"><img src="img/arrow-left.png" alt="arrow-left"></button>',
  nextArrow: '<button class="slick-next slick-btn"><img src="img/arrow-right.png" alt="arrow-right"></button>'

});

$('.hero__slider-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.hero__slider-img',
  fade: true,
  arrows: false,
});



