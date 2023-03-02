import React, { useState } from 'react';
import './Cart.css';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
const Cart = (props) => {

    const orderTotal = props.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    let shippingCost;
    if (orderTotal > 1000) {
        shippingCost = 0
    } else if (orderTotal === 0) {
        shippingCost = 0
    } else {
        shippingCost = 10
    }
    const totalPrice = orderTotal + shippingCost;

    const [userData, setUserData] = useState({
        'name': "",
        "email": "",
        "address": "",
    })
    const { order } = props;
    const [isCheckout, setIsCheckout] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({ ...userData, [name]: value });
    }

    const createOrder = (e) => {
        e.preventDefault();

        const order = {
            name: userData.name,
            email: userData.email,
            address: userData.address,
            cartItems: props.cartItems,
            orderTotal: totalPrice
        }

        console.log(order)
        props.createOrder(order)

    }


    return (
        <>
            <section className="container">

                <div className="cart-data">


                    <div className="cart-items-box">

                        <table className="table table-borderless table-shopping-cart">
                            <thead className="text-muted">
                                <tr className="small text-uppercase">
                                    <th scope="col">Product</th>
                                    <th scope="col" width="120">Quantity</th>
                                    <th scope="col" width="120">Price</th>
                                    <th scope="col" className="text-right d-none d-md-block" width="200"></th>
                                </tr>
                            </thead>

                            <tbody>

                                {props.cartItems.map((item) => (
                                    <tr>
                                        <td className="align-baseline">
                                            <figure className="itemside align-items-center">
                                                <div className="aside"><img src={item.image} className="img-sm" />
                                                </div>
                                                <figcaption className="info"> <a href="#" className="cart-product-name"
                                                    data-abc="true">{item.name}</a>
                                                    <p className="product-cat text-muted">{item.category}</p>
                                                </figcaption>
                                            </figure>
                                        </td>

                                        <td className="align-baseline">
                                            <button className="quantity-btn">-</button>
                                            <span className="quantity-count">{item.quantity}</span>
                                            <button className="quantity-btn">+</button>
                                        </td>

                                        <td className="align-baseline">
                                            <div className="price-wrap">
                                                <p className="price">{item.price.toFixed(2)}</p>
                                            </div>
                                        </td>

                                        <td className="text-right align-baseline"> <button onClick={() => props.onRemove(item.id)} className="delete-product-btn"
                                        >
                                            x</button> </td>
                                    </tr>

                                ))}

                            </tbody>
                        </table>
                    </div>


                    <div className="cart-payment-box">
                        <div className="summary-title border-bottom ">
                            {props.cartItems.length === 0 ? <h3>Your Cart Is Empty </h3> : <h3>Cart Summary</h3>}
                        </div>
                        <div className="payment-data">
                            <div className="order-total d-flex justify-content-between ">
                                <p className="txt">Order total</p><span className="price-txt">${orderTotal.toFixed(2)}</span>
                            </div>
                            <div className="shipping d-flex justify-content-between">
                                <p className="txt">Shipping total</p><span className="price-txt">${shippingCost.toFixed(2)}</span>
                            </div>
                            {/* <div className="promo">
                                <a className="promocode" href="#enter">Enter a promocode</a>
                            </div> */}
                            <div className="sub-total border-top ">
                                <p className="sub-total-text">Subtotal</p>
                                <span className="total-price">${(totalPrice.toFixed(2))}</span>
                            </div>

                        </div>
                        <div className="checkout">
                            <button className="checkout-btn" onClick={() => setIsCheckout(true)}>Proceed</button>
                        </div>
                    </div>

                </div>

                {/*Modal*/}
                {/* {order &&
                    <div className="modal-checkout">
                        <div className="modal-inner">
                            <Modal isOpen={this.state.isOpen} toggle={!this.state.isOpen} >
                                <ModalHeader>
                                    Order: {order._id}
                                </ModalHeader>
                                <ModalBody>
                                    <div>
                                        Name: {order.name}
                                    </div>
                                    <div>
                                        Email: {order.email}
                                    </div>
                                    <div>
                                        Address: {order.address}
                                    </div>
                                </ModalBody>
                            </Modal>
                        </div>

                    </div>
                } */}




                {isCheckout && (
                    <div className="cart form-container">
                        <form onSubmit={createOrder}>
                            <input
                                className="form-control mb-4"
                                value={userData.name}
                                name="name"
                                onChange={handleChange}
                                required
                                type="text"
                                placeholder="Your Name" />
                            <input
                                className="form-control mb-4 "
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                                required
                                type="email"
                                placeholder="Your Email" />
                            <input
                                className="form-control mb-4"
                                name="address"
                                onChange={handleChange}
                                required
                                type="text"
                                value={userData.address}
                                placeholder="Your Address" />

                            <button className="btn btn-primary">Check out</button>
                        </form>
                    </div>
                )
                }

            </section>

        </>
    )
}

export default Cart