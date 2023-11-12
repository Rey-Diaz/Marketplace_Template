import PropTypes from "prop-types";
import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import styles from "./ExpandedProductCard.module.css";
import { FaTimes } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa'; // For the shopping cart icon
import { MdInfo } from 'react-icons/md'; // For the info icon
// ... other imports ...


const ExpandedProductCard = ({ product, onClick, onAddToCart }) => {
  const cardRef = useRef();

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClick();
      }
    };

    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        onClick();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClick]);

  return (
    <div className={styles.expandedCard} ref={cardRef}>
      <button 
        className={styles.closeButton} // Use this for positioning and styling
        onClick={onClick}
      >
        <FaTimes /> {/* React icon for the close button */}
      </button>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.name} className={styles.expandedImage} />
        </div>
        <div className={styles.details}>
          <h2 className={styles.title}>{product.name}</h2>
          <p className={styles.price}>{`Price: $${product.price}`}</p>
          <p className={styles.description}>{product.description}</p>
          <button 
  className={styles.addToCartButton} 
  onClick={(e) => {
    e.stopPropagation(); 
    onAddToCart(product);
  }}
>
  <FaCartPlus /> Add to Cart {/* Icon with text */}
</button>
          <Link to={`/products/${product.id}`} className={styles.moreInfoLink}>
  <MdInfo /> More Info {/* Icon with text */}
</Link>
        </div>
      </div>
    </div>
  );
};

ExpandedProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ExpandedProductCard;
