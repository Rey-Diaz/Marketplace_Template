
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity} from '../../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import CartCard from '../../components/CartCard/CartCard'; // Import CartCard component
import styles from './Cart.module.css'; // Import or define the CSS module for Cart

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (id) => dispatch(removeFromCart({ id }));
  const handleUpdateQuantity = (id, quantity) => dispatch(updateQuantity({ id, quantity }));
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    
      navigate('/checkout');
  };

  return (
      <div className={styles.cartContainer}>
          <CartCard 
              cartItems={cartItems}
              onRemove={handleRemoveFromCart}
              onUpdateQuantity={handleUpdateQuantity}
              totalPrice={totalPrice}
              onCheckout={handleCheckout}
          />
      </div>
  );
};

export default Cart;
