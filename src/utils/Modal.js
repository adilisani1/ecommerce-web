import { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import './Modal.css';

export const MyModal = ({ isOpen, setIsOpen, order, orderTotal, shippingCost, total, setIsCheckout, setCartItems }) => {
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [cardHolder, setCardHolder] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!cardNumber || !expiryDate || !cvv || !cardHolder) {
            return alert('Please enter all your card details');
        }

        if (!/^[0-9]{16}$/.test(cardNumber)) {
            return alert('Please enter a valid 16-digit card number');
        }

        if (!/^[0-9]{2}\/[0-9]{2}$/.test(expiryDate)) {
            return alert('Please enter a valid expiry date (format: YY/MM)');
        }

        if (!/^[0-9]{3}$/.test(cvv)) {
            return alert('Please enter a valid 3-digit CVV code');
        }

        alert('Your Order Has Been Placed');
        setCardNumber("");
        setExpiryDate("");
        setCvv("");
        setCardHolder("");

        setIsOpen(false);
        setIsCheckout(false);
        setCartItems([]);
    };

    return (
        <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} size='lg'>
            <span
                className="modal-close-icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close">
                ×
            </span>
            <ModalBody >
                <div className="main-modal">
                    <div className="modal-area">
                        <div className="modal-left-side">
                            <div className="order-summary-head">
                                <h1 className='text-white text-left '>Order Summary</h1>
                                {order?.cartItems?.map((item) => {
                                    return (
                                        <div className="border-b mb-5">
                                            <div className="order-summary-products">
                                                <img src={item.image} alt={item.name} />
                                                <div className="product-details">
                                                    <p className="product-title text-white mb-0 pb-0">{item.name}</p>
                                                    <span className="product-cat text-white">{item.category}</span>
                                                </div>
                                            </div>
                                            <div className='product-price'>
                                                <span className="text-white">${item.price.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className="subtotal-order-summary">
                                    <div className="order-total d-flex justify-content-between ">
                                        <p className="text-white">Order total</p><span className="order-t">${orderTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="shipping d-flex justify-content-between">
                                        <p className="text-white">Shipping Cost</p><span className="shipping-cost">${shippingCost.toFixed(2)}</span>
                                    </div>
                                    <div className="shipping d-flex justify-content-between">
                                        <p className="text-white">Subtotal</p><span className="subtotal-t">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-right-side">
                            <div><img src="/images/credit-card.png" alt="" /></div>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Card Number*</label>
                                            <input
                                                type="text"
                                                placeholder="0000 0000 0000 0000"
                                                className="form-control"
                                                name="number"
                                                id="number"
                                                value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Cardholder name*</label>
                                            <input type="text" placeholder="Cardholder name" className="form-control" name="name" id="name" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Expiry date* </label>
                                            <input type="text" placeholder="YY/MM" className="form-control" name="time" id="time" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>CVV*</label>
                                            <input type="text" placeholder="000" className="form-control" name="time" id="time" value={cvv} onChange={(e) => setCvv(e.target.value)} required />

                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="confirm-payment-btn">Confirm Payment</button>
                            </form>
                        </div>
                    </div>

                </div>
            </ModalBody>
        </Modal >
    );
}

