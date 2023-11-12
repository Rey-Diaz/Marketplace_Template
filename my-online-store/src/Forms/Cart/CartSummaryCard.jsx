// CartSummaryCard.jsx

import PropTypes from 'prop-types';
import styles from './CartSummaryCard.module.css';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon

const CartSummaryCard = ({ cartItems, total }) => {
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className={styles.card}>
        <div className={styles.header}>
          <span>Cart</span>
          <FaShoppingCart className={styles.cartIcon} />
        </div>
        <div className={`${styles.body} ${styles.emptyCart}`}>Your cart is empty.</div>
        <div className={styles.footer}>
          <span className={styles.totalLabel}>Total:</span>
          <span className={styles.totalAmount}>${total.toFixed(2)}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <FaShoppingCart className={styles.cartIcon} />
        <span>Cart</span>
      </div>
      <div className={styles.middle}>
        <ul className={styles.itemList}>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footer}>
        <span className={styles.totalLabel}>Total:</span>
        <span className={styles.totalAmount}>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

CartSummaryCard.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
};

export default CartSummaryCard;
