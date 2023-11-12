import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, onClick, onAddToCart }) => {
  return (
    <div className={styles.card} onClick={() => onClick(product)}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h2>{product.name}</h2>
      <p>{`Price: $${product.price}`}</p>
      <button
        className={styles.addToCartButton}
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart(product);
        }}
      >
        Add to Cart
      </button>
      {/* Other product details */}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired, // Pass the onAddToCart function as a prop
};

export default ProductCard;
