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
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
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


const mobileNavbar = document.querySelector('.mobile-nav-items');
const nav = document.querySelector('.header-wrap');

const toggleNavbar = () => {
    nav.classList.toggle('show')
    // console.log('TOGGLE')
}

mobileNavbar.addEventListener('click', () => {
    toggleNavbar();
});




const sideMenuIcon = document.querySelector('.menu-image');
const sidebar = document.querySelector('.side-menu-items');
const sideMenuClose = document.querySelector('.close-icon');

sideMenuIcon.addEventListener('click', () => {
    toggleSidebar()
});

sideMenuClose.addEventListener('click', () => {
    toggleSidebar()
});

const toggleSidebar = () => {
    sidebar.classList.toggle('active');

};



