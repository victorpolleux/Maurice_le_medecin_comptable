/* Sticky Navigation */
$(function() {
  
  var sticky = $('.sticky');
  var contentOffset;
  var nav_height;
  
  if (sticky.length) {
    
    if ( sticky.data('offset') ) {
      contentOffset = sticky.data('offset');
    }
    else {
      contentOffset = sticky.offset().top;
    }
    nav_height = sticky.height();
  }
  
  var scrollTop = $(window).scrollTop();
  var window_height = $(window).height();
  var doc_height = $(document).height();
  
  $(window).bind('resize', function() {
    scrollTop = $(window).scrollTop();
    window_height = $(window).height();
    doc_height = $(document).height();
    navHeight();
  });
  
  $(window).bind('scroll', function() {
    stickyNav();
  });
  
  function navHeight() {
    sticky.css('max-height', window_height + 'px');
  }
  
  function stickyNav() {
    scrollTop = $(window).scrollTop();
    if (scrollTop > contentOffset) {
      sticky.addClass('fixed');
    }
    else {
      sticky.removeClass('fixed');
    }
  }
  
});

$('document').ready(function() {
  var nav_height = 70;
  
  $("a[data-role='smoothscroll']").click(function(e) {
    e.preventDefault();
    
    var position = $($(this).attr("href")).offset().top - nav_height;
    
    $("body, html").animate({
      scrollTop: position
    }, 1000 );
    return false;
  });
});

$('document').ready(function() {
  // Back to top
  var backTop = $(".back-to-top");
  
  $(window).scroll(function() {
    if($(document).scrollTop() > 400) {
      backTop.css('visibility', 'visible');
    }
    else if($(document).scrollTop() < 400) {
      backTop.css('visibility', 'hidden');
    }
  });
  
  backTop.click(function() {
    $('html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});


$('document').ready(function() {
  
  // Loader
  $(window).on('load', function() {
    $('.loader-container').fadeOut();
  });
  
  // Tooltips
  $('[data-toggle="tooltip"]').tooltip();
  
  // Popovers
  $('[data-toggle="popover"]').popover();
  
  // Page scroll animate
  new WOW().init();
});

  // Couleurs en fonction des valeurs obtenues
  // Couleurs où x > 0 est bien
  $(document).ready(function(){
  
    var mc = {
      '0-19'     : 'red',
      '20-59'    : 'orange',
      '60-100'   : 'green'
    };
    
  function between(x, min, max) {
    return x >= min && x <= max;
  }
    
  
    
    var dc;
    var first; 
    var second;
    var third;
    
    $('p').each(function(index){
      
      th = $(this);
      
      dc = parseInt($(this).attr('data-color'),10);
      
      
        $.each(mc, function(name, value){
          
          
          first = parseInt(name.split('-')[0],10);
          second = parseInt(name.split('-')[1],10);
          
          console.log(between(dc, first, second));
          
          if( between(dc, first, second) ){
            third.addClass(value);
          }
  
      
      
        });
      
    });
  });

// search bar

function Recherche() {
  let input = document.getElementById("UserSearch").value
  input=input.toLowerCase();
  let x = document.getElementsByClassName("recherche");


  for (i = 0; i < x.length; i++) { 
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
    }
    else {
        if (x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="block";
        }
    }
  }
}