/*=== Javascript function indexing hear===========


==================================================*/

(function ($) {
  'use strict';
 
  var thJs = {
    m: function (e) {
      thJs.d();
      thJs.methods();
    },
    d: function (e) {
      this._window = $(window),
        this._document = $(document),
        this._body = $('body'),
        this._html = $('html')
    },
    methods: function (e) {
      thJs.swiperActivation();
      thJs.scrollCue();
      thJs.Counterup();
      thJs.backToTop();
      thJs.fixHeader();
    },

    swiperActivation: function(e){
      $(document).ready(function(){  

        // Feature
        var swiper = new Swiper(".feature__wrapper", {
          slidesPerView: 4,
          speed:1000,
          spaceBetween: 10,
          loop:true,
          breakpoints: {
            375: {
              slidesPerView: 1.2,
            },
            575: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1200: {
              slidesPerView: 4,
            }
          }
          
        });
        
        // TESTIMONIAL SLIDER ONE
        var swiper = new Swiper(".best__seller__slider", {
          slidesPerView: 3,
          speed:1000,
          spaceBetween: 30,
          loop:true,
          navigation: {
            nextEl: '.weargnj__next',
            prevEl: '.weargnj__prev',
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            375: {
              slidesPerView: 1.2,
            },
            575: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1200: {
              slidesPerView: 3,
            }
          }
          
        });
        var swiper = new Swiper(".marque__wrapper", {
          slidesPerView: 3,
          speed:1000,
          loop:true,
          autoplay: {
            delay: 200,
          },
          breakpoints: {
            375: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1200: {
              slidesPerView: 3,
            }
          }
        })
        var swiper = new Swiper(".repeat__customer", {
          slidesPerView: 3.5,
          speed:1000,
          loop:true,
          autoplay: {
            delay: 200,
          }
        })

        var product = new Swiper(".item__of__day__slider", {
          slidesPerView: 1,
          speed:1000,
          loop:true,
          autoplay: {
            delay: 5000,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          }
        })

        var instagram = new Swiper(".instagram__slider", {
          slidesPerView: 4.5,
          spaceBetween: 20,
          speed:1000,
          loop:true,
          autoplay: {
            delay: 1000,
          }
        })

      });

    },  
    scrollCue: function (e) {
        scrollCue.init();      
    },
    
    Counterup: function (e) {
      $(document).ready(function () {
        $('.counter').counterUp({
          delay: 50,
          time: 2000,
        });
      })
    },
    backToTop: function (e) {
      $(document).ready(function () {
        var backButton = $("#backToTop");
        $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
            backButton.addClass("show");
          } else {
            backButton.removeClass("show");
          }
        });
        backButton.on("click", function () {
          $("html, body").animate(
            {
              scrollTop: 0,
            },
            1000
          );
        });
      });
    },

    fixHeader: function (e) {
              
    },

  };


  thJs.m(); 

})(jQuery, window);

