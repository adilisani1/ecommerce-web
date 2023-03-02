import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>

            {/* <!--Footer Area--> */}
            <footer className="footer-wrapper">
                <div className="container footer-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 ">
                            <h3 className="footer-heading"> Contact Us</h3>
                            <p className="footer-text">
                                <ion-icon name="call-outline"></ion-icon> (+92399) 240 020 304
                            </p>
                            <p className="footer-text">
                                <ion-icon name="mail-outline"></ion-icon> ecommercestore@shop.com
                            </p>
                            <p className="footer-text">
                                <ion-icon name="location-outline"></ion-icon> Our Location
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <h3 className="footer-heading">Policies & Info</h3>
                            <p className="footer-text">Terms Conditions</p>
                            <p className="footer-text">Policy for Buyers</p>
                            <p className="footer-text">Shipping & Refund</p>

                        </div>
                        <div className="col-lg-3">
                            <h3 className="footer-heading">Quick Links</h3>

                            <p className="footer-text">Accessories</p>
                            <p className="footer-text">Seller Login</p>
                            <p className="footer-text">Panel Seller FAQs</p>
                            <p className="footer-text">Seller Control</p>
                        </div>

                        <div className="col-lg-3">
                            <h3 className="footer-heading">Subscribe Now</h3>
                            <p className="footer-text">Contrary to popular belief of lorem ipsm latin</p>
                            <div className="send-form">
                                <input className="form-control" type="text" placeholder="Your Email Address" />
                                <i className="far fa-paper-plane text-white"></i>
                            </div>
                            <div className="footer-social-icons">
                                <i className="fab fa-facebook-f text-white footer-icons"></i>
                                <i className="fab fa-twitter text-white footer-icons"></i>
                                <i className="fab fa-google text-white footer-icons"></i>
                                <i className="fas fa-wifi text-white footer-icons"></i>

                            </div>
                        </div>

                    </div>
                </div>

                {/* <!---Footer Bottom --> */}
                <div className="footer-bottom">
                    <div className="row justify-content-center  text-center">
                        <div className="col-md-5">
                            <p className="copyright-text">Copyright &copy; 2020 ecommercestore.com</p>
                        </div>
                        <div className="col-md-6 offset-md-1 payment-card-container">
                            <img className="payment-card" src="./images/main-section/skrill.svg" alt="" />
                            <img className="payment-card" src="./images/main-section/wallet.svg" alt="" />
                            <img className="payment-card" src="./images/main-section/master-card.svg" alt="" />
                            <img className="payment-card" src="./images/main-section/paypal.svg" alt="" />
                            <img className="payment-card" src="./images/main-section/payoneer.svg" alt="" />
                        </div>
                    </div>
                </div>

            </footer >

        </div >
    )
}

export default Footer