import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import './Modal.css';

export const MyModal = ({ isOpen, setIsOpen, order }) => {

    return (
        //         <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} size='lg'>
        //             <ModalBody >
        //                 <div className='rowClass'>
        //                     <div className='left-side border-end'>
        //                         <h1 className='text-white'>Order Summary</h1>
        //                         <h3 className='text-white'>Items</h3>
        //                         {order?.cartItems?.map((item) => {
        //                             return (
        //                                 <div className="">

        //                                     <table className="table table-borderless table-shopping-cart">
        //                                         <thead className="text-muted">
        //                                             <tr className="small text-uppercase">
        //                                                 <th scope="col">Product</th>
        //                                                 <th scope="col" width="120">Quantity</th>
        //                                                 <th scope="col" width="120">Price</th>
        //                                             </tr>
        //                                         </thead>
        //                                         <tbody>

        //                                             <tr className='' key={item.id}>
        //                                                 <td className="align-baseline">
        //                                                     <figure className="itemside align-items-center">
        //                                                         <div className="aside"><img src={item.image} className="img-sm" alt={item.image} />
        //                                                         </div>
        //                                                     </figure>
        //                                                 </td>

        //                                                 <td className="align-baseline">
        //                                                     <button className="quantity-btn">-</button>
        //                                                     <span className="quantity-count">{item.quantity}</span>
        //                                                     <button className="quantity-btn">+</button>
        //                                                 </td>

        //                                                 <td className="align-baseline">
        //                                                     <div className="price-wrap">
        //                                                         <p className="price">{item.price.toFixed(2)}</p>
        //                                                     </div>
        //                                                 </td>

        //                                                 <td className="text-right align-baseline">
        //                                                     <button

        //                                                         className="delete-product-btn"
        //                                                     >
        //                                                         x</button>
        //                                                 </td>
        //                                             </tr>


        //                                         </tbody>
        //                                     </table>
        //                                 </div>
        //                             )
        //                         })}
        //                     </div>
        //                     <div className="right-side">
        //                         <img className="credit-card" src='./images/credit-transparent.png' alt="" />
        //                         <div>Add a card <span>+</span></div>
        //                         <div>
        //                             <button className='btn btn-primary'>Process Payment
        //                             </button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </ModalBody>
        //             <ModalFooter>
        //                 <div className='subtotal-order-summary '>
        //                     <div className='subtotal-inner '>
        //                         <div className='subtotalt '>Subtotal:</div>
        //                         <span className='order-t'>{`$${order.total}`}</span>
        //                     </div>
        //                 </div>
        //             </ModalFooter>
        //         </Modal>

        //         <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} size='lg'>
        //             <ModalBody >


        //                 <div className='row'>
        //                     <div className='col-md-5 border-end'>
        //                         <h1 className='text-white'>Order Summary</h1>
        //                         <h3 className='text-white'>Items</h3>
        //                         {order?.cartItems?.map((item) => {
        //                             return (
        //                                 <div className="">

        //                                     <table className="table table-borderless table-shopping-cart">
        //                                         <thead className="text-muted">
        //                                             <tr className="small text-uppercase">
        //                                                 <th scope="col">Product</th>
        //                                                 <th scope="col" width="120">Quantity</th>
        //                                                 <th scope="col" width="120">Price</th>
        //                                             </tr>
        //                                         </thead>
        //                                         <tbody>

        //                                             <tr className='' key={item.id}>
        //                                                 <td className="align-baseline">
        //                                                     <figure className="itemside align-items-center">
        //                                                         <div className="aside"><img src={item.image} className="img-sm" alt={item.image} />
        //                                                         </div>
        //                                                     </figure>
        //                                                 </td>

        //                                                 <td className="align-baseline">
        //                                                     <button className="quantity-btn">-</button>
        //                                                     <span className="quantity-count">{item.quantity}</span>
        //                                                     <button className="quantity-btn">+</button>
        //                                                 </td>

        //                                                 <td className="align-baseline">
        //                                                     <div className="price-wrap">
        //                                                         <p className="price">{item.price.toFixed(2)}</p>
        //                                                     </div>
        //                                                 </td>

        //                                                 <td className="text-right align-baseline">
        //                                                     <button

        //                                                         className="delete-product-btn"
        //                                                     >
        //                                                         x</button>
        //                                                 </td>
        //                                             </tr>


        //                                         </tbody>
        //                                     </table>
        //                                 </div>
        //                             )
        //                         })}
        //                     </div>
        //                     <div className="col-md-7 d-flex align-items-center justify-content-center flex-column c-card">
        //                         <img className="credit-card" src='./images/credit-transparent.png' alt="" />

        //                         <div className="add-a-card-text ">Add a card <span className="add-card-plus">+</span></div>
        //                         {/* <div>
        //                             <button className='process-payment-btn btn btn-primary'>Process Payment</button>
        //                         </div> */}
        //                     </div>
        //                 </div>
        //             </ModalBody>
        //             <ModalFooter>
        //                 <div className='subtotal-order-summary '>
        //                     <div className='subtotal-inner '>
        //                         <div className='subtotalt '>Subtotal:</div>
        //                         <span className='order-t'>{`$${order.total}`}</span>
        //                         <div>
        //                             <button className='process-payment-btn btn btn-primary '>Process Payment</button>
        //                         </div>
        //                     </div>

        //                 </div>
        //             </ModalFooter>
        //         </Modal>
        //     );
        // }


        // import React from 'react';

        // export const MyModal = ({ isOpen, setIsOpen, order }) => {
        //     return (

        //         <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} size='lg'>
        //             <ModalBody>

        //                 <div >
        //                     <h2 >Order Summary</h2>
        //                     <table>
        //                         <thead>
        //                             <tr>
        //                                 <th>Item</th>
        //                                 <th>Quantity</th>
        //                                 <th>Price</th>
        //                             </tr>
        //                         </thead>
        //                         <tbody>
        //                             {order?.cartItems?.map((item) => (
        //                                 <tr key={item.id}>
        //                                     <td>{item.name}</td>
        //                                     <td>{item.quantity}</td>
        //                                     <td>{item.price.toFixed(2)}</td>
        //                                 </tr>
        //                             ))}
        //                         </tbody>
        //                     </table>
        //                     <div className='order-summary'>
        //                         <div>
        //                             <span>Subtotal: </span>
        //                             <span>${order.subtotal.toFixed(2)}</span>
        //                         </div>
        //                         <div>
        //                             <span>Tax: </span>
        //                             <span>${order.price.toFixed(2)}</span>
        //                         </div>
        //                         <div>
        //                             <span>Total: </span>
        //                             <span>${order.total.toFixed(2)}</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </ModalBody >
        //         </Modal>

        //     );
        // };

        <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} size='lg'>
            <ModalBody >
                <div className="main-modal">
                    <div className="order-summary-head">
                        <h1 className='text-white text-center '>Payment Method</h1>
                    </div>
                    <div className="payment-gateway">
                        <div className="card-select">
                            <input className="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input" />
                            <img className="" src="/images/main-section/master-card-icon.svg" />
                        </div>
                        <div className="card-select">
                            <input className="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input" />
                            <img className="" src="/images/main-section/master-card-icon.svg" />
                        </div>
                        <div className="card-select">
                            <input className="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input" />
                            <img className="" src="/images/main-section/master-card-icon.svg" />
                        </div>
                    </div>
                </div>

                {/* <div className='row'>
                    <div className='col-md-5 border-end'>
                        <h1 className='text-white'>Order Summary</h1>
                        <h3 className='text-white'>Items</h3>
                        {order?.cartItems?.map((item) => {
                            return (
                                <div className="">

                                    <table className="table table-borderless table-shopping-cart">
                                        <thead className="text-muted">
                                            <tr className="small text-uppercase">
                                                <th scope="col">Product</th>
                                                <th scope="col" width="120">Quantity</th>
                                                <th scope="col" width="120">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr className='' key={item.id}>
                                                <td className="align-baseline">
                                                    <figure className="itemside align-items-center">
                                                        <div className="aside"><img src={item.image} className="img-sm" alt={item.image} />
                                                        </div>
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

                                                <td className="text-right align-baseline">
                                                    <button

                                                        className="delete-product-btn"
                                                    >
                                                        x</button>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-md-7 d-flex align-items-center justify-content-center flex-column c-card">
                        <img className="credit-card" src='./images/credit-transparent.png' alt="" />

                        <div className="add-a-card-text ">Add a card <span className="add-card-plus">+</span></div>
                        <div>
                            <button className='process-payment-btn btn btn-primary'>Process Payment</button>
                        </div>
                    </div>
                </div> 
           </ModalBody>
            {/* <ModalFooter> */}
                {/* <div className='subtotal-order-summary '>
                    <div className='subtotal-inner '>
                        <div className='subtotalt '>Subtotal:</div>
                        <span className='order-t'>{`$${order.total}`}</span>
                        <div>
                            <button className='process-payment-btn btn btn-primary '>Process Payment</button>
                        </div>
                    </div>

                </div> */}
                {/* </ModalFooter> */}
            </ModalBody >
        </Modal>
    );
}

