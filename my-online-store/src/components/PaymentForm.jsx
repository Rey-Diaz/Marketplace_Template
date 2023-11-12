// src/components/PaymentForm.jsx

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CartSection from '../Forms/Cart/CartSection';
import BillingForm from '../Forms/Billing/BillingForm';
import ShippingForm from '../Forms//Shipping/ShippingForm';


const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Here you would send the paymentMethod.id to your backend to create a charge...
    }
  };

  return (
    <div className="payment-container">
      <BillingForm />
      <ShippingForm />
      <CartSection />
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;

