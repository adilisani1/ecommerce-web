import React, { useState, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import './Swiper.css';

function MySwiperComponent(props) {

    useEffect(() => {
        var homeSwiper = new Swiper(".home-swiper", {
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


        var bottomSwiper = new Swiper(".bottom-swiper", {
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


    }, []);

    return (
        <div>
            <div className="swiper home-swiper " >
                <div className="swiper-wrapper">
                    {props.products.map((item) => {
                        if (item.trending) {
                            return (
                                <div className="swiper-slide" key={item.id}>
                                    <div className="container swiper-container">
                                        <div className="row gy-2">
                                            <div className="col-lg-6 d-flex flex-column justify-content-center  order-md-2 order-2 order-lg-1 ">
                                                <div className="hero-text-section">
                                                    <h1 className="hero-title">NEW</h1>
                                                    <span className="hero-title-2">COLLECTION</span>
                                                    <p className="hero-text">Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry.</p>
                                                </div>
                                                <div className="cart-button-items">
                                                    <div>
                                                        <p className="real-price">${item.oldPrice.toFixed(2)}</p>
                                                        <span className="cut-off-price">${item.price.toFixed(2)}</span>
                                                    </div>
                                                    <div className="button-class">
                                                        <ion-icon name="bag-outline" class="cart-bag"></ion-icon>

                                                        <button className="hero-button" onClick={() => props.featuredProduct(item)}>
                                                            <span> Add to
                                                                Cart</span>
                                                        </button>
                                                    </div>
                                                </div>



                                            </div>
                                            <div className="col-lg-5 offset-lg-1 order-1 order-lg-2 order-md-1 shoe-img">
                                                <img className="img-fluid" src={item.image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}

                    <div className="hero-slider-pagination">
                        <span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1">
                        </span>
                    </div>
                </div>
            </div>

            {/* <!---BOTTOM SLIDER --> */}
            <section className="bottom-slider">
                <div className="container">
                    <div className="swiper bottom-swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="cards-bottom">
                                    <div className="bottom-products-item">
                                        <img src="images/hero-section/addidas-shoes.png " className="bottom-products-img me-5"
                                            alt="" />
                                    </div>
                                    <div className="bottom-products-content">
                                        <h5 className="bottom-card-title ">Nike Air Premium</h5>
                                        <div className="bottom-card-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        <div className="bottom-card-footer">
                                            <p className="bottom-card-text mb-0 ">$199</p>
                                            <ion-icon name="bag-outline" class='bottom-bag'></ion-icon>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="cards-bottom">
                                    <div className="bottom-products-item">
                                        <img src="images/hero-section/nike-adapt-bb-smart.png " className="bottom-products-img me-5"
                                            alt="" />
                                    </div>
                                    <div className="bottom-products-content">
                                        <h5 className="bottom-card-title ">Nike Air Premium</h5>
                                        <div className="bottom-card-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        <div className="bottom-card-footer">
                                            <p className="bottom-card-text mb-0 ">$199</p>
                                            <ion-icon name="bag-outline" class='bottom-bag'></ion-icon>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="cards-bottom">
                                    <div className="bottom-products-item">
                                        <img src="/images/hero-section/high.png" className="bottom-products-img me-5" alt="" />
                                    </div>
                                    <div className="bottom-products-content">
                                        <h5 className="bottom-card-title ">Nike Air Premium</h5>
                                        <div className="bottom-card-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        <div className="bottom-card-footer">
                                            <p className="bottom-card-text mb-0 ">$199</p>
                                            <ion-icon name="bag-outline" class='bottom-bag'></ion-icon>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="cards-bottom">
                                    <div className="bottom-products-item">
                                        <img src="/images/hero-section/product12.png" className="bottom-products-img me-5" alt="" />
                                    </div>
                                    <div className="bottom-products-content">
                                        <h5 className="bottom-card-title ">Nike Air Premium</h5>
                                        <div className="bottom-card-rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        <div className="bottom-card-footer">
                                            <p className="bottom-card-text mb-0 ">$199</p>
                                            <ion-icon name="bag-outline" class='bottom-bag'></ion-icon>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MySwiperComponent;


