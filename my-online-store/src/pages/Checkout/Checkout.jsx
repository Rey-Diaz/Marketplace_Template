import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '../../stripe.js';
import { FaExchangeAlt } from 'react-icons/fa'; // Import the React Icons component

import CartSummaryCard from '../../Forms/Cart/CartSummaryCard.jsx';
import ShippingInfoCard from '../../Forms/Shipping/ShippingInfoCard.jsx';
import BillingInfoCard from '../../Forms/Billing/BillingInfoCard.jsx';
import styles from './Checkout.module.css'; // Import the CSS module

const Checkout = () => {
  const [showBillingInfo, setShowBillingInfo] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <CartSummaryCard cartItems={cartItems} total={total} />
        </div>
      </div>

      <Elements stripe={stripePromise}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>
                {showBillingInfo ? 'Billing Information' : 'Shipping Information'}
                <button
                  className={styles.switchButton}
                  onClick={() => setShowBillingInfo(!showBillingInfo)}
                >
                  <FaExchangeAlt /> {/* React Icon */}
                </button>
              </h2>
            </div>
            {showBillingInfo ? (
              <BillingInfoCard />
            ) : (
              <ShippingInfoCard />
            )}
          </div>
        </div>
      </Elements>
    </div>
  );
};

export default Checkout;
