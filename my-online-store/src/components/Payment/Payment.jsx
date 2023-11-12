// Import necessary dependencies and actions
import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { clearCart } from '../../features/cart/cartSlice'; // Import the clearCart action
import styles from './Payment.module.css';

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
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.items);
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const dispatch = useDispatch(); // Initialize dispatch

  const handleInputChange = (event) => {
    setBillingDetails({ ...billingDetails, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
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
      navigate('/PaymentError');
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      try {
        const { data } = await axios.post('http://localhost:5000/create-payment-intent', {
          payment_method_id: paymentMethod.id,
          amount: totalAmount,
        });

        const { paymentIntent, confirmError } = await stripe.confirmCardPayment(data.clientSecret, {
          payment_method: paymentMethod.id,
        });

        if (confirmError) {
          console.log('[confirmError]', confirmError);
          navigate('/PaymentError');
        } else {
          console.log('[PaymentIntent]', paymentIntent);
          dispatch(clearCart()); // Dispatch the clearCart action to reset the cart
          navigate('/PaymentComplete');
        }
      } catch (err) {
        console.error('Error making the API call to the backend:', err);
        navigate('/PaymentError');
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
