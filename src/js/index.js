import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


(function () {
    'use strict';
    var mySwiper = new Swiper('.swiper_header:not(#swiper1)', {
        // parameters
        loop: true,
        parallax: true,
        speed: 1000,
        centeredSlides: true,

        // slides per view shows part of the prev and next
        // slidesPerView: 1.49,
        // spaceBetween: 1,
        // add more space between to add more space between slide
        navigation: {
            prevEl: '.slider .prev-btn',
            nextEl: '.slider .next-btn',
        },

        keyboard: {
            enabled: true,
        },

        // If we need pagination
        pagination: {
            el: '.slider__controller-counter',
            type: 'fraction',
            // dynamicBullets: true,
        },

    
    });
})();

(function () {
    'use strict';
    const mySwiper = new Swiper('#swiper1', {
        loop: true,
        autoplay: 4000,
        slidesPerView: '1.78',
        // centeredSlides: true,
        // spaceBetween: 5,

        // a11y: true,
        keyboardControl: true,
        grabCursor: true,

        // pagination
        pagination:{
            prevEl:".btn-previous-services",
            nextEl:'.btn-next-services'
        },
        paginationClickable: true,

        // navigation arrows
        nextButton: '#js-prev1',
        prevButton: '#js-next1'
    });

})(); 





