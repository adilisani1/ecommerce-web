import React from 'react';
import { FormField } from './FormField';

const Form = ({ createOrder, handleChange, userData }) => {
    return (
        <form onSubmit={createOrder}>
            <FormField
                label="Your Name"
                name="name"
                type="text"
                value={userData.name}
                onChange={handleChange}
                required={true}
                placeholder="Your Name" />
            <FormField
                label="Your Email"
                name="email"
                type="email"
                value={userData.email}
                onChange={handleChange}
                required={true}
                placeholder="Your Email" />
            <FormField
                label="Your Address"
                name="address"
                type="text"
                value={userData.address}
                onChange={handleChange}
                required={true}
                placeholder="Your Address" />
            <button className="btn btn-primary">Continue to Payment</button>
        </form>
    )
}

export default Form;

