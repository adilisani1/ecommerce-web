//Navbar-Fixed
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".header-wrap").addClass("active");
        } else {
            $(".header-wrap").removeClass("active");
        }
    });
});


// Swiper
var swiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        center: true
    },
    // autoplay: {
    //     delay: 5000,

    // },
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
    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
});


// Swiper
var swiper = new Swiper(".bottom-swiper", {
    slidesPerView: 3,
    SlidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },

    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 3,
        },

    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".header-wrap").addClass("active");
        } else {
            $(".header-wrap").removeClass("active");
        }
    });
});


$(function () {
    $(document).on('click', '.card', function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
});

