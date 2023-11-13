
import PropTypes from 'prop-types';
import styles from './CartCard.module.css';
import { useSelector } from "react-redux";

const CartCard = ({ onRemove, onUpdateQuantity, totalPrice, onCheckout }) => {
    // Retrieve cart items from the Redux store
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div className={styles.cartCard}>
            <div className={styles.cardHeader}>
                <h1 className={styles.cartHeader}>Shopping Cart</h1>
            </div>
            <div className={styles.cardBody}>
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={item._id} className={styles.cartItem}>
                            <h2>{item.name}</h2>
                            <p>Quantity: 
                                <input 
                                    type="number" 
                                    value={item.quantity} 
                                    onChange={(e) => onUpdateQuantity(item._id, parseInt(e.target.value))} 
                                    min="1" 
                                    className={styles.quantityInput}
                                />
                            </p>
                            <p>Unit Price: ${item.price.toFixed(2)}</p>
                            <button onClick={() => onRemove(item._id)} className={styles.removeButton}>Remove</button>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
            <div className={styles.cardFooter}>
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                <button onClick={onCheckout} className={styles.checkoutButton}>Go to Checkout</button>
            </div>
        </div>
    );
};

CartCard.propTypes = {
    onRemove: PropTypes.func.isRequired,
    onUpdateQuantity: PropTypes.func.isRequired,
    totalPrice: PropTypes.number.isRequired,
    onCheckout: PropTypes.func.isRequired
};

export default CartCard;
