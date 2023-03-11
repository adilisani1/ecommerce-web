import { FormField } from './FormField';
import './Form.css';
const Form = ({ createOrder, handleChange, userData }) => {

    return (
        <form onSubmit={createOrder} >
            <div className="row">
                <div className="col-12 ">
                    <h1 className="formHeading">Delivering Address</h1>
                </div>
                <div class="col-md-12">
                    <FormField
                        label="Your Name"
                        name="name"
                        type="text"
                        value={userData.name}
                        onChange={handleChange}
                        required={true}
                        placeholder="Your Name" />
                </div>
                <div class="col-md-12">
                    <FormField
                        label="Your Email"
                        name="email"
                        type="email"
                        value={userData.email}
                        onChange={handleChange}
                        required={true}
                        placeholder="Your Email" />
                </div>
            </div>
            <div className="row">
                <div class="col-md-12">
                    <FormField
                        label="Your Address"
                        name="address"
                        type="text"
                        value={userData.address}
                        onChange={handleChange}
                        required={true}
                        placeholder="Your Address" />
                </div>

            </div>
            <button className="continue-to-payment">Continue to Payment</button>
        </form>

    )
}

export default Form;



