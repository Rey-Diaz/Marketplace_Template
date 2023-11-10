// src/components/BillingForm.jsx
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '../../stripe.js';
import PaymentForm from './PaymentForm.jsx';

const BillingForm = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default BillingForm;
