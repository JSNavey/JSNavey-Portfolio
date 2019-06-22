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

  // scroll up button
  $('#up').on('click', function(event) {

    event.preventDefault();
    
    $('html, body').animate({
      scrollTop: 0
    }, 2000);
  });

  // AOS
  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
  });
})