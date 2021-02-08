jQuery(document).ready(function($) {
    "use strict";
    
    // Карусель
    $("#testimonials-list").owlCarousel({
      loop: true,
      center: true,
      items: 3,
      nav: true,
      margin: 45,
      autoplay: false,
      dots: false,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      navText: ["<img src='icons/left_arrow.png'>", "<img src='icons/right_arrow.png'>"],
      responsive: {
        0: {
          nav: false,
          dots: true,
          items: 1
        },
        768: {
          nav: false,
          dots: true,
          items: 2
        },
        1170: {
          items: 3
        }
      }
    });

    // Скролл к нужному блоку через меню навигации
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
      e.preventDefault();
      var t = 1000;
      var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
      $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
  });

  // Кнопка вверх
  $(window).scroll(function() {
 
    if($(this).scrollTop() != 0) {
     
    $('#toTop').fadeIn();
     
    } else {
     
    $('#toTop').fadeOut();
     
    }
     
    });
     
    $('#toTop').click(function() {
     
    $('body,html').animate({scrollTop:0},800);
     
    });

    // Гамбургер
    let x = document.getElementById("contain");
    x.addEventListener("click", myFunction);

    function myFunction() {
      let element = document.getElementById("nav");
      element.classList.toggle("open");
      x.classList.toggle("change");
    }

    $('.nav_link').on('click', function(){
      let element = document.getElementById("nav");
      x.classList.toggle("change");
      element.classList.toggle("open");
    });
  });
