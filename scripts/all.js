/* SMOOTH SCROLL */
/* SOURCE: https://dev.to/attacomsian/smooth-scroll-to-page-section-with-jquery-2jng*/
$(document).on('click', 'a[href^="#"]', function (e) {
  e.preventDefault();
  $('html, body').stop().animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});
