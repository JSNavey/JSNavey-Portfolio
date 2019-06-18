$(document).ready(function( ) {
  $('.menu-toggler').on('click', function() {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  $('.top-nav .nav-link').on('click', function() {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });

  // smooth scroll 
  // select all links with hashes
  $('nav a[href*="#"]').on('click', function(event) {

    event.preventDefault();
    // using animate(properties which type is PlainObj, options)
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 2000);
  });
})