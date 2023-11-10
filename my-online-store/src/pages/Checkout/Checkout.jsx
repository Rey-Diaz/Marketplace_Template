// src/pages/Checkout/Checkout.jsx

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '../../stripe.js';

import PaymentForm from '../../components/PaymentForm.jsx';
import './Checkout.module.css'; // Import the CSS file for styling

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Shipping Info:', shippingInfo);
    // Process checkout information here
    // You will handle payment processing here
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Full Name:
            <input
              name="fullName"
              type="text"
              value={shippingInfo.fullName}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              name="address"
              type="text"
              value={shippingInfo.address}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            City:
            <input
              name="city"
              type="text"
              value={shippingInfo.city}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Zip Code:
            <input
              name="zipCode"
              type="text"
              value={shippingInfo.zipCode}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Country:
            <input
              name="country"
              type="text"
              value={shippingInfo.country}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit" className="checkout-button">
          Proceed to Payment
        </button>
      </form>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default Checkout;
