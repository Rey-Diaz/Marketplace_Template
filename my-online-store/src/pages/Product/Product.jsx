// src/pages/Product/Product.jsx

import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';

const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  // Simulated product data
  const product = {
    id: productId,
    name: 'Product ' + productId,
    description: 'Description for product ' + productId,
    price: 100,
    // image: 'path-to-image', // Uncomment and replace with actual path
  };

  const handleAddToCart = () => {
    // Dispatch an action to add the product to the cart
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      {/* Add an 'Add to Cart' button */}
      <button onClick={handleAddToCart}>Add to Cart</button>
      {/* Optionally display the product image */}
      {/* <img src={product.image} alt={product.name} /> */}
    </div>
  );
};

export default Product;
