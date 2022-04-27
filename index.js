'use strict';

$(document).ready(function(){
  const $navs = $('.navbar-nav a');

  $( ".navbar-nav" ).on( "click", "a", function() {
    $navs.each( function( index, element ){
      $(element).removeClass('active');
    });
  
    $(this).addClass('active');
    console.log('add');
  });
}); 