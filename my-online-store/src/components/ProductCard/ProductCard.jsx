import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAddToCart = (event) => {
    event.stopPropagation(); // Prevent the card expansion when adding to cart
    dispatch(addToCart(product));
  };

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const cardVariants = {
    initial: {
      scale: 1,
      position: 'relative', // Reset position to relative
    },
    expanded: {
      scale: 1.5,
      position: 'fixed', // Set position to fixed when expanded
      top: '50%', // Center vertically
      left: '50%', // Center horizontally
      transform: 'translate(-50%, -50%)', // Center the card
      zIndex: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <motion.div className={styles.card}
      onClick={handleCardClick}
      variants={cardVariants}
      initial="initial"
      animate={isExpanded ? "expanded" : "initial"}
      layout>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          {/* Front content */}
          <img className={styles.cardImage} src={product.image} alt={product.name} />
          <h3 className={styles.cardTitle}>{product.name}</h3>
          <p className={styles.cardPrice}>${product.price}</p>
        </div>

        <div className={styles.cardBack}>
          {/* Back content */}
          <h3 className={styles.cardTitle}>{product.name}</h3>
          <p className={styles.description}>{product.description}</p>
          <Link to={`/products/${product.id}`}>View Details</Link>
          <button aria-label={`Add ${product.name} to cart`} onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </motion.div>
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
