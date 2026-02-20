// trigger-icon
var navigation = $(".trigger-container").height();
$('a[href^="#trigger-icon').on("click", function(){
    var clickedElementAttrName = $(this).attr("href");
    var seciton = $(clickedElementAttrName);
    var scroToTop = seciton.offset().top - navigation;
    console.log(scroToTop, navigation);
    $("html,body").animate({
        scrollTop:scroToTop
    }, 500)
});

$(window).scroll(function(){
    $(".trigger-icon").toggleClass("scrolled", $(this).scrollTop() > 2500);
});

// end of trigger-icon

$(window).scroll(function(){
    $(".home-page-css .index-container").toggleClass("scrolled-nav", $(this).scrollTop() > 200);
});


Fancybox.bind("[data-fancybox='gallery']", {
    on: {
        // This runs when the lightbox fully closes (no matter how: backdrop click, Esc, close button, etc.)
        close: (fancybox, slide) => {
            $("body").removeClass("newSwiper-body");
        },
        
        // Optional: If you want to add the class on open (as a backup/alternative to your slide click)
        init: (fancybox, slide) => {
            $("body").addClass("newSwiper-body");
        }
    },
    Carousel: {
        // infinite: false,
        transition: "slide",
        // Remove the navigation arrows
        // Navigation: false,
    },
    compact: false, /*Background click close. თუ ამოვაკომენტარებ მაშინ min-width: 579px-ზე იმუშავებს და max-width: 578px-ზე - არა*/
    idle: false,
    animated: true,
    Toolbar: {
        display: {
          left: [],
          // middle: ["infobar"],
          right: [/*"fullscreen",*/ "close"],
        },
    },
    Thumbs: {
        // type: 'modern',
        type: 'classic',
        // Carousel: {
        //   center: function () {
        //     return this.contentDim > this.viewportDim;
        //   },
        // },
    },
});
Fancybox.bind("[data-fancybox='gallery_1']", {
    on: {
        // This runs when the lightbox fully closes (no matter how: backdrop click, Esc, close button, etc.)
        close: (fancybox, slide) => {
            $("body").removeClass("newSwiper-body");
        },
        
        // Optional: If you want to add the class on open (as a backup/alternative to your slide click)
        init: (fancybox, slide) => {
            $("body").addClass("newSwiper-body");
        }
    },
    Carousel: {
        // infinite: false,
        transition: "slide",
        // Remove the navigation arrows
        // Navigation: false,
    },
    compact: false, /*Background click close. თუ ამოვაკომენტარებ მაშინ min-width: 579px-ზე იმუშავებს და max-width: 578px-ზე - არა*/
    idle: false,
    animated: true,
    Toolbar: {
        display: {
          left: [],
          // middle: ["infobar"],
          right: [/*"fullscreen",*/ "close"],
        },
    },
    Thumbs: {
        // type: 'modern',
        type: 'classic',
        // Carousel: {
        //   center: function () {
        //     return this.contentDim > this.viewportDim;
        //   },
        // },
    },
});
Fancybox.bind("[data-fancybox='gallery_2']", {
    on: {
        // This runs when the lightbox fully closes (no matter how: backdrop click, Esc, close button, etc.)
        close: (fancybox, slide) => {
            $("body").removeClass("newSwiper-body");
        },
        
        // Optional: If you want to add the class on open (as a backup/alternative to your slide click)
        init: (fancybox, slide) => {
            $("body").addClass("newSwiper-body");
        }
    },
    Carousel: {
        infinite: false,
        transition: "slide",
        // Remove the navigation arrows
        // Navigation: false,
    },
    compact: false, /*Background click close. თუ ამოვაკომენტარებ მაშინ min-width: 579px-ზე იმუშავებს და max-width: 578px-ზე - არა*/
    idle: false,
    animated: true,
    Toolbar: {
        display: {
          left: [],
          // middle: ["infobar"],
          right: [/*"fullscreen",*/ "close"],
        },
    },
    Thumbs: {
        // type: 'modern',
        type: '',
        // Carousel: {
        //   center: function () {
        //     return this.contentDim > this.viewportDim;
        //   },
        // },
    },
});

var swiper2 = new Swiper('.swiper2', {
    speed: 600,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    // transitionTimingFunction: 'linear',
    
    // autoHeight: true,
    spaceBetween: 20,
    // loop: true,
    simulateTouch: false,
    // parallax: true,
    // simulateTouch: false,
    // grabCursor: true,
    breakpoints: {
        320: {
            slidesPerView: 1.1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
            navigation: {
                nextEl: '.swiper-button-next-2',
                prevEl: '.swiper-button-prev-2'
            },
            
        }
    },
});
var swiper3 = new Swiper('.swiper3', {
    speed: 600,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    // transitionTimingFunction: 'linear',
    
    // autoHeight: true,
    spaceBetween: 20,
    // loop: true,
    simulateTouch: false,
    // parallax: true,
    // simulateTouch: false,
    // grabCursor: true,
    breakpoints: {
        320: {
            slidesPerView: 1.1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
            navigation: {
                nextEl: '.swiper-button-next-3',
                prevEl: '.swiper-button-prev-3'
            },
            
        }
    },
});





// $(".f-button, .fancybox__slide").click(function(){
//     $("body").removeClass("newSwiper-body");
// });








