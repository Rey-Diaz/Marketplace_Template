import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded state of the card
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle adding product to cart
  const handleAddToCart = (event) => {
    event.stopPropagation(); // Stop the event from bubbling up to the card
    dispatch(addToCart(product));
  };

  // Variants for animation with Framer Motion
  const cardVariants = {
    initial: {
      // Styles for the normal state
      scale: 1,
      width: "auto", // Default width
      height: "auto", // Default height
      position: "relative", // Default position
      top: "auto",
      left: "auto",
      transform: "translate(0, 0)",
      zIndex: 1,
      transition: { duration: 0.5 },
    },
    expanded: {
      // Styles for the expanded state
      scale: 1,
      width: "auto",
      height: "auto",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 100,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className={isExpanded ? styles.expandedCard : styles.card}
      onClick={toggleExpand}
      variants={cardVariants}
      initial="initial"
      animate={isExpanded ? "expanded" : "initial"}
    >
      {isExpanded ? (
        <div className={styles.expandedLayout}>
          <div className={styles.expandedImageContainer}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.expandedImage}
            />
          </div>
          <div className={styles.expandedDetails}>
            <h2>{product.name}</h2>
            <h4>Description:</h4>
            <p className={styles.description}>{`${product.description}`}</p>
            <p className={styles.price}>{`Price: $${product.price}`}</p>
            <button
              className={styles.addToCartButton}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button className={styles.viewDetailsButton}>
              <Link
                to={`/products/${product.id}`}
                className={styles.viewDetailsLink}
              >
                View More Details
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
          <h2>{product.name}</h2>
          <p>{`Price: $${product.price}`}</p>
        </>
      )}
    </motion.div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
