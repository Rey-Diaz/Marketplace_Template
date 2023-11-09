// src/pages/Cart/Cart.jsx

import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../../features/cart/cartSlice";
import { useNavigate } from 'react-router-dom';





const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const navigate = useNavigate();

  // Render cart items and provide buttons or inputs to remove items or update quantity
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>
              Quantity:
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleUpdateQuantity(item.id, parseInt(e.target.value))
                }
                min="1"
              />
            </p>
            <p>Unit Price: ${item.price.toFixed(2)}</p>
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>
          Your cart is empty.
        </p>
      )}
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      <button onClick={() => navigate('/checkout')}>Go to Checkout</button>
      <button onClick={handleClearCart}>Clear Cart</button>
      
    </div>
  );
};

export default Cart;
