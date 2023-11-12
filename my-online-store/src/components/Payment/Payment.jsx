// src/components/PaymentForm.jsx

import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import styles from './Payment.module.css'; // Import the CSS module for styling
import axios from 'axios'; // axios to make calls to the backend

const Payment = () => {
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const stripe = useStripe();
  const elements = useElements();

  const handleInputChange = (event) => {
    setBillingDetails({ ...billingDetails, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe.js has not loaded yet.
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: billingDetails.name,
        address: {
          line1: billingDetails.address,
          city: billingDetails.city,
          postal_code: billingDetails.postalCode,
          country: billingDetails.country,
        },
      },
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Here you would send the paymentMethod.id to your backend to create a charge...
      try {
        // Send the paymentMethod.id to the backend
        const { data } = await axios.post('http://localhost:5000/create-payment-intent', {
          payment_method_id: paymentMethod.id,
          // Add any other required information here
          //paymentAmount = 
        });
  
        // Confirm the payment on the frontend
        const { paymentIntent, confirmError } = await stripe.confirmCardPayment(data.clientSecret, {
          payment_method: paymentMethod.id,
        });
  
        if (confirmError) {
          console.log('[confirmError]', confirmError);
          // Optionally, handle errors here (e.g., showing an error message to the user)
        } else {
          console.log('[PaymentIntent]', paymentIntent);
          // Here, you might want to navigate the user to a success page or show a success message
        }
      } catch (err) {
        console.error("Error making the API call to the backend:", err);
        // Optionally, handle errors here (e.g., showing an error message to the user)
      }
    }
  };

  return (
    <div className={styles.paymentCard}>
      
      <form onSubmit={handleSubmit} className={styles.paymentFormContainer}>
        {/* Billing Information Fields */}
        <div className={styles.paymentFormField}>
          <label className={styles.paymentLabel}>Cardholders Name</label>
          <input
            type="text"
            name="name"
            value={billingDetails.name}
            onChange={handleInputChange}
            className={styles.paymentInput}
            required
          />
        </div>
        <div className={styles.paymentFormField}>
          <label className={styles.paymentLabel}>Billing Address</label>
          <input
            type="text"
            name="address"
            value={billingDetails.address}
            onChange={handleInputChange}
            className={styles.paymentInput}
            required
          />
        </div>
        <div className={styles.paymentFormField}>
          <label className={styles.paymentLabel}>City</label>
          <input
            type="text"
            name="city"
            value={billingDetails.city}
            onChange={handleInputChange}
            className={styles.paymentInput}
            required
          />
        </div>
        <div className={styles.paymentFormField}>
          <label className={styles.paymentLabel}>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={billingDetails.postalCode}
            onChange={handleInputChange}
            className={styles.paymentInput}
            required
          />
        </div>
        <div className={styles.paymentFormField}>
          <label className={styles.paymentLabel}>Country</label>
          <input
            type="text"
            name="country"
            value={billingDetails.country}
            onChange={handleInputChange}
            className={styles.paymentInput}
            required
          />
        </div>

        {/* Card Details Element */}
        <CardElement className={styles.paymentInput} />

        <button type="submit" className={styles.paymentButton} disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default Payment;
