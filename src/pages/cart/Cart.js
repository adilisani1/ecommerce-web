import React, { useState } from 'react';
import './Cart.css';
import Form from './../../components/form/Form';
import { MyModal } from '../../utils/Modal';
import { Table } from '../../utils/Table';
import { Modal, ModalBody } from 'reactstrap';

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [order, setOrder] = useState([]);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        address: "",

    });

    const toggle = () => setIsCheckout(!isCheckout);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

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
    const createOrder = (event) => {
        event.preventDefault();
        const order = {
            name: userData.name,
            email: userData.email,
            address: userData.address,
            cartItems: props.cartItems,
            total: totalPrice,
        }
        setOrder(order);
        setIsOpen(true);
    };

    return (
        <>
            <section className="container">
                <div className="cart-data">
                    <div className="cart-items-box">
                        <Table
                            cartItems={props.cartItems}
                            onRemove={props.onRemove} />
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
                                <p className="txt">Shipping Cost</p><span className="price-txt">${shippingCost.toFixed(2)}</span>
                            </div>
                            <div className="sub-total border-top ">
                                <p className="sub-total-text">Subtotal</p>
                                <span className="total-price">${(totalPrice.toFixed(2))}</span>
                            </div>
                        </div>
                        <div className="checkout">
                            <button className="checkout-btn"
                                onClick={toggle}>
                                Proceed
                            </button>
                        </div>
                    </div>

                </div>

                {order && (
                    <div className="modal-checkout">
                        <div className="modal-inner">
                            <MyModal
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                order={order}
                                orderTotal={orderTotal}
                                shippingCost={shippingCost}
                                total={totalPrice}
                                setIsCheckout={setIsCheckout}

                            />
                        </div>
                    </div>
                )}

                {props.cartItems.length === 0 ? (
                    <div className="alert text-white d-flex align-items-center">Please add items to your cart</div>
                ) : (
                    isCheckout && (
                        <div className="cart form-container">
                            <Modal isOpen={isCheckout} toggle={toggle} size='lg'>
                                <span
                                    className="modal-close-icon"
                                    onClick={() => setIsCheckout(false)}
                                    aria-label="Close">
                                    ×
                                </span>
                                <ModalBody>
                                    <Form
                                        createOrder={createOrder}
                                        userData={userData}
                                        handleChange={handleChange}
                                    />
                                </ModalBody>
                            </Modal>
                        </div>
                    )
                )}
            </section>
        </>
    )
}

export default Cart