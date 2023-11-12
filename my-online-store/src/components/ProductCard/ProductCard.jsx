
import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(product)}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h2>{product.name}</h2>
      <p>{`Price: $${product.price}`}</p>
      {/* Other product details */}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
