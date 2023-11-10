// src/components/ProductCard/ProductCard.jsx

import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa'; // Import the FontAwesome icon

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onClick={handleCardClick}>
      <div className={`${styles['card-inner']}`}>
        {/* Icon to flip the card */}
        <FaInfoCircle className={styles['card-icon']} onClick={handleCardClick} />

        <div className={`${styles['card-face']} ${styles['card-front']}`}>
          <img className={styles.cardImage} src={product.image} alt={product.name} />
          <Link to={`/products/${product.id}`}>View Details</Link>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>

        <div className={`${styles['card-face']} ${styles['card-back']}`}>
          <p className={styles['description']}>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
