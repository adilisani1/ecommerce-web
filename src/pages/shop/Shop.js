import React from 'react'
import './Shop.css';

const Shop = (props) => {

    return (
        <>
            {/* <!--Shopping Banner--> */}
            <section className="shopping-banner-wrapper">
                <div className="shopping-banner ">
                    <div className="shopping-container">
                        <div className="row mb-3 align-items-center">
                            <div className="shopping-content">

                                <span>Shop</span>
                                <h2 className="shop-title">NoW</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flash-sale-heading">
                <h2>Products</h2>
            </div>

            <section className="main-section">
                <div className="container2">

                    {props.products.map((product) => {
                        if (product.featured || product.featured === false) {
                            return (
                                <div className="card-products" key={product.id}>

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

export default Shop