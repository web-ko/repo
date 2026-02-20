// $(document).ready(function(){
//     baguetteBox.run(".gallery", {
//         noScrollbars: false,
//         buttons: true
//     });
// });

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


// $('a[href*="#trigger-icon"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//         if (target.length) {
//             $('html, body').animate({
//                 scrollTop: target.offset().top
//             }, 500);
//             return false;
//         }
//     }
// });


$(window).scroll(function(){
    $(".trigger-icon").toggleClass("scrolled", $(this).scrollTop() > 3500);
});

// end of trigger-icon

$(window).scroll(function(){
    $(".home-page-css .index-container").toggleClass("scrolled-nav", $(this).scrollTop() > 200);
});


Fancybox.bind("[data-fancybox]",{
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


// Without text changes
document.addEventListener("DOMContentLoaded", function () {
    const swiperContainer = document.querySelector(".swiper-wrapper");
    const slides = Array.from(swiperContainer.children);

    // Shuffle function (Fisher-Yates algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle slides
    shuffleArray(slides);

    // Clear existing slides and re-insert shuffled ones
    swiperContainer.innerHTML = "";
    slides.forEach(slide => swiperContainer.appendChild(slide));

    // Initialize Swiper
    // var swiper = new Swiper('.swiper', {
    //     speed: 1200,
    //     autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: false, // <- THIS KEEPS AUTOPLAY AFTER INTERACTION
    //     },
    //     transitionTimingFunction: 'cubic-bezier(x1, y1, x2, y2)',
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev'
    //     },
    //     loop: true,
    //     parallax: true,
    //     simulateTouch: true,
    //     grabCursor: true,
    // });

    var swiper = new Swiper('.swiper', {
        speed: 1200,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        transitionTimingFunction: 'cubic-bezier(x1, y1, x2, y2)',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop: true,
        parallax: true,
        simulateTouch: true,
        grabCursor: true,
        on: {
            setTransition(swiper, duration) {
                const wrapperEl = swiper.wrapperEl;
                wrapperEl.style.transitionTimingFunction = 'cubic-bezier(0.25, 0.1, 0.25, 0.88)';
            }
        }
    });


    // Add custom click handler for the entire pagination container
    const paginationContainer = document.querySelector('.swiper-pagination');
    paginationContainer.addEventListener('click', (event) => {
        const bullets = Array.from(paginationContainer.querySelectorAll('.swiper-pagination-bullet'));
        const rect = paginationContainer.getBoundingClientRect();
        const offsetX = event.clientX - rect.left; // Mouse position relative to the container

        // Calculate which bullet was clicked based on the mouse position
        const bulletWidth = rect.width / bullets.length;
        const clickedBulletIndex = Math.floor(offsetX / bulletWidth);

        // Change the slide to the corresponding bullet index
        if (clickedBulletIndex >= 0 && clickedBulletIndex < bullets.length) {
            if (swiper.params.loop) {
                swiper.slideToLoop(clickedBulletIndex);
            } else {
                swiper.slideTo(clickedBulletIndex);
            }
        }
    });

    // Update the pagination bullets to reflect the correct active slide
    swiper.on('slideChange', () => {
        const bullets = Array.from(paginationContainer.querySelectorAll('.swiper-pagination-bullet'));
        const realIndex = swiper.realIndex;

        bullets.forEach((bullet, index) => {
            if (index === realIndex) {
                bullet.classList.add('swiper-pagination-bullet-active');
                bullet.setAttribute('aria-current', 'true');
            } else {
                bullet.classList.remove('swiper-pagination-bullet-active');
                bullet.removeAttribute('aria-current');
            }
        });
    });
});
// End of Without text changes
// End of With change photos and texts when loading
// End of Swiper



var swiper1 = new Swiper('.swiper1', {
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
                nextEl: '.swiper-button-next-1',
                prevEl: '.swiper-button-prev-1'
            },
            
        }
    },
});





const mediaQuery = window.matchMedia('(max-width: 991px)')
if (mediaQuery.matches) {

    let scrollPosition;
    $(".read-more-click").click(function(){
        scrollPosition = $(window).scrollTop();
        $(".read-more").toggle();
        $(".read-more").get(0).offsetHeight; // Force layout update
        $(".read-more-click").toggleClass("hidden");
        $(".read-less-click").toggleClass("show");
    });
    $(".read-less-click").click(function(){
        $(".read-more").hide();
        $(".read-more").get(0).offsetHeight; // Force layout update
        $(".read-more-click").removeClass("hidden");
        $(".read-less-click").removeClass("show");
        $(window).scrollTop(scrollPosition); // Restore the scroll position
    });
}



// $(".f-button, .fancybox__slide").click(function(){
//     $("body").removeClass("newSwiper-body");
// });








