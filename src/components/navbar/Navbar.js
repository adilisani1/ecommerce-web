import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <>
            {/*  < !--SideBar--> */}
            <section className="sidebar">
                <div className="menu-area">
                    <div className="side-menu-icon">
                        <img className="menu-image" src="./images/logo/menu-icon.svg" alt="" />
                    </div>
                    <ul className="social-icons">
                        <li><span className="fab fa-facebook-f icon text-white"></span></li>
                        <li><span className="fab fa-twitter icon text-white"></span></li>
                        <li><span className="fab fa-instagram icon text-white"></span></li>
                    </ul>
                </div>
            </section>


            {/* <!--Side Menu Modal-- > */}
            <div className="side-menu-items">
                <div className="close">
                    <ion-icon name="close-outline" className="close-icon"></ion-icon>
                </div>

                <ul className="nav-side-menu">
                    <li className="">
                        <Link className="" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="">
                        <Link className="" to="/shop">Shop</Link>
                    </li>
                    <li className="">
                        <a className="" href="#">Deals</a>
                    </li>
                    <li className="">
                        <a className="" href="#">Contact Us</a>
                    </li>
                </ul>

                <div className="side-menu-social">
                    <span className="fab fa-facebook-f"></span>
                    <span className="fab fa-twitter "></span>
                    <span className="fab fa-instagram  "></span>
                </div>

            </div>


            {/* <!--Header--> */}
            <header className="header-wrap">
                <div className="header-inner ">
                    <div className="logo-area">
                        <Link className="navbar-brand text-muted" to="/">
                            <img className="logo-image" src="./images/logo/ecommerce-web-logo.png" alt="" />
                        </Link>
                    </div>

                    <nav className="navigation-container ">
                        <ul className="nav-menu">
                            <li className="mobile-search">
                                <input type="text" className="form-control" placeholder="Search Product......." />
                                <ion-icon className="search-mobile-icon text-white" name="search-outline">
                                </ion-icon>
                            </li>
                            <li className="">
                                <Link className="" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="">
                                <Link className="" to="/shop">Shop</Link>
                            </li>
                            <li className="">
                                <a className="" href="#">Deals</a>
                            </li>
                            <li className="">
                                <a className="" href="#">Contact Us</a>
                            </li>

                            <li className="position-relative">
                                <Link className="" to="/cart">
                                    <ion-icon name="bag-outline"></ion-icon>
                                    <span className="cart-count-badge"> {props.cartItems.length} </span>
                                </Link>
                            </li>

                            <li className="">
                                <a className="" href="#"><span className="far fa-heart"></span>
                                </a>
                            </li>
                        </ul>

                    </nav>

                    <div className="mobile-nav-items">
                        <ion-icon name="menu-outline" className="menu-icon text-white"></ion-icon>
                        <ion-icon name="close-outline" className="close-icon text-white"></ion-icon>
                    </div>

                    <div className="side-search-area">
                        <div className="search">
                            <ion-icon className="search-icon" data-bs-toggle="modal" data-bs-target="#search-box"
                                name="search-outline">
                            </ion-icon>
                        </div>
                    </div>
                </div>
            </header>

            {/* <!--Search Modal-- > */}
            <div className="modal fade modal-dark-wrapper" id="search-box" aria-hidden="true" aria-labelledby="search-box"
                tabIndex="-1">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content modal-dark">
                        <a className="logo-header" href="#"> <img src="./images/logo/ecommerce-web-logo.png" /> </a>
                        <a href="#" className="close-icon" data-bs-dismiss="modal" aria-label="Close">
                            &times;
                        </a>
                        <div className="modal-search">
                            <div className="modal-search-inner">
                                <input className="search-input form-control" placeholder="Search Product......." type="text" />
                                <ion-icon className="search-icon text-white" name="search-outline">
                                </ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Navbar;




