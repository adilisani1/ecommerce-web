import React, { useState } from 'react';
import './Home.css';
import MySwiperComponent from '../../components/Swiper/Swiper';

const Home = (props) => {

    const [activeCardId, setActiveCardId] = useState(11);

    const handleCardClick = (id) => {
        setActiveCardId(id);
    };


    return (
        <>
            <section className="hero-section">
                <MySwiperComponent featuredProduct={props.onHandleClick} products={props.products} />
            </section>


            <div className="flash-sale-heading">
                <h2>Flash Sale</h2>
            </div>

            {/* <!--MAIN SECTION--> */}
            <section className="main-section">
                <div className="container1">
                    {props.products.map((item) => {
                        if (item.flashSale) {
                            return (
                                <div
                                    className={`card ${activeCardId === item.id ? "active" : ""
                                        }`}
                                    key={item.id}
                                    onClick={() => handleCardClick(item.id)}
                                >
                                    <div className="img8x">
                                        <img src={item.image} alt="" />
                                        <h2>{item.name}</h2>
                                    </div>
                                    <div className="content">
                                        <div className="size">
                                            <h3>Size :</h3>
                                            <span>7</span>
                                            <span>8</span>
                                            <span>9</span>
                                            <span>10</span>
                                        </div>
                                        <div className="color">
                                            <h3>Color :</h3>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <button onClick={() => props.onHandleClick(item)}>
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </section>


            <div className="big-card-bg">
                <div className="container">
                    <div className="big-card wa">
                        <div className="row mb-3 align-items-center  ">

                            <div className="col-md-4 led-tv-img">
                                <img src="./images/main-section/led-tv2.png" className="" alt="..." />
                            </div>

                            <div className="col-md-8 big-card-text">
                                <div className="card-body">
                                    <p className="entertainment-text ">Entertainment</p>
                                    <h5 className="big-card-title ">4k LED TV</h5>
                                    <p className="long-text text-white">This is a wider card with supporting text below as a
                                        natural
                                        lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="update-time-text mb-5 text-white"><small className="">Last updated 3 mins
                                        ago</small>
                                    </p>
                                    <div className="big-card-button-area">
                                        {/* <!-- <span className="fa fa-shopping-cart shopping-cart " aria-hidden="true"></span> -->
                                        <!-- <a className="big-card-add-cart " href="#" type="button">Add To Cart</a> --> */}
                                        <div className="button-className">
                                            <ion-icon name="bag-outline" className="cart-bag"></ion-icon>
                                            <button className="hero-button" >
                                                {/* <!-- <ion-icon name="bag-outline" className="cart-bag"></ion-icon>--> */}
                                                <span> Add to Cart</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flash-sale-heading">
                <h2>Trending Products</h2>
            </div>


            <section className="main-section">
                <div className="container2">

                    {props.products.map((product) => {
                        if (product.featured) {
                            return (
                                <div className="card-products">

                                    <div className="product-header">
                                        <div>
                                            <h2 className="product-title">{product.name}</h2>
                                            <p className="product-cat">{product.category}</p>
                                        </div>
                                        <span className="far fa-heart text-white"></span>
                                    </div>

                                    <div className="products-img">
                                        <img src={product.image} alt="" />
                                    </div>

                                    <div className="product-price-section">
                                        <div className="color-option">
                                            <span className="color">Colour:</span>
                                            <div className="circles">
                                                <span className="circle blue active" id="blue"></span>
                                                <span className="circle pink " id="pink"></span>
                                                <span className="circle yellow " id="yellow"></span>
                                            </div>
                                        </div>
                                        <div className="price">
                                            <span className="price_num">${product.oldPrice.toFixed(2)}</span>
                                            <span className="price_letter">${product.price.toFixed(2)}</span>
                                        </div>

                                    </div>
                                    <div className="button">
                                        <div className="button-layer"></div>
                                        <button onClick={() => props.onHandleClick(product)}>Add To Cart</button>
                                    </div>

                                </div>

                            )
                        }
                    })}

                </div>
            </section>




        </>
    )
}

export default Home