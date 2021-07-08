$(window).scroll(function() {
  if ($(this).scrollTop() > 220) {
    $('.btn').fadeOut();
    $('.btn-floating').addClass('show-on-scroll');
  }
  else {
    $('.btn').fadeIn();
    $('.btn-floating').removeClass('show-on-scroll');
  }
});