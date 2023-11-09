// src/components/ProductCard/ProductCard.jsx

import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import PropTypes from 'prop-types'; // Make sure to import PropTypes
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';



const ProductCard = ({ product }) => {
  
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={product.image} alt={product.name} />
      <Link to={`/products/${product.id}`}>View Details</Link>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {/* ... rest of the component */}
    </div>
  );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string, // if image is optional, don't add isRequired
    }).isRequired,
  };

  export default ProductCard;
  