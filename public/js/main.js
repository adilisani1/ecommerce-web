// Swiper
var swiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },

    },

    pagination: {
        el: '.hero-slider-pagination',
        clickable: true,
    }

});

// Swiper
var swiper = new Swiper(".bottom-swiper", {
    slidesPerView: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    centerSlides: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 3000,
    },

    breakpoints: {

        1400: {
            slidesPerView: 3,
            spaceBetween: 2,
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },


        667: {
            slidesPerView: 1,
            spaceBetween: 20,
        },


        280: {
            slidesPerView: 1,
            spaceBetween: 1,
        },

    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



$(function () {
    $(document).on('click', '.card', function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
});

const mobileNavbar = document.querySelector('.mobile-nav-items');
const nav = document.querySelector('.header-wrap');

const toggleNavbar = () => {
    nav.classList.toggle('show')
}

mobileNavbar.addEventListener('click', () => {
    toggleNavbar();
});

import React, { useState } from 'react';

function Navbar() {
    const [showNav, setShowNav] = useState(false);

    const toggleNavbar = () => {
        setShowNav(prevState => !prevState);
    };

    return (
        <div>
            <button className="mobile-nav-items" onClick={toggleNavbar}>Toggle Navbar</button>
            <div className={`header-wrap ${showNav ? "show" : ""}`}>
                {/* Navbar contents go here */}
            </div>
        </div>
    );
}




