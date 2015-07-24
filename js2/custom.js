jQuery(window).on('scroll', function (){

  /*----------------------------- Navigation --------------------------*/
  if (jQuery(window).scrollTop() > 100){
    jQuery('#main-menu').addClass('menu-bg-overlay');
  } else {
    jQuery('#main-menu').removeClass('menu-bg-overlay');
  }
  if (jQuery(window).scrollTop() > 800){
    jQuery('#main-menu').addClass('menu-bg');
  } else {
    jQuery('#main-menu').removeClass('menu-bg');
  }
});


jQuery(window).load(function($) {

  /*-------------------------------- Parallax ---------------------------------------*/
  jQuery("#top-section").parallax("50%", 0.5);
  jQuery("#about-parallax").parallax("50%", 0.5);
  jQuery("#next-event").parallax("50%", 0.5);
  jQuery("#testimonial").parallax("50%", 0.5);
  jQuery("#tweet-section").parallax("50%", 0.5);
  jQuery("#clients").parallax("50%", 0.5);
  
  /*------------------------------- Preloader -----------------------------------------*/
  jQuery(".loader").fadeOut();
  jQuery("#preloader").delay(350).fadeOut("slow");

});


  /*------------------------------- Progress Bar---------------------------------------*/
  jQuery("#about-progress-1").css( "width", "60%" );
  jQuery("#causes-progress-1").css( "width", "60%" );
  jQuery("#causes-progress-2").css( "width", "60%" );
  jQuery("#causes-progress-3").css( "width", "60%" );
  jQuery("#causes-progress-4").css( "width", "60%" );


jQuery(document).ready(function($) {
  "use strict";

  
  /*-------------------------------  Scroll to Top ----------------------------*/
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
     $('#scroll-to-top').fadeIn('slow');
       } else {
        $('#scroll-to-top').fadeOut('slow');
      }
    }); 

  $('#scroll-to-top').click(function(){
    $("html,body").animate({ scrollTop: 0 }, 1000);
    return false;
  });


   //  Run Nice Scroll
  $("html").niceScroll({
    scrollspeed: 30,
    mousescrollstep: 70,
    cursorwidth: 10,
    zindex: 9999,
    cursorborderradius: 2,
    hwacceleration: true,
    cursorborder: "1px solid transparent",
    background: "#FFF",
  });
  

});