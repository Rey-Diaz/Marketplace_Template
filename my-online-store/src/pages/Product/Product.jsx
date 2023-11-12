import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import styles from "./Product.module.css"; // Import the CSS module

const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  // Simulated product data
  const product = {
    id: productId,
    name: "Product " + productId,
    description: "Description for product " + productId,
    price: 100,
    image: "https://via.placeholder.com/150", // Uncomment and replace with actual path
  };

  const handleAddToCart = () => {
    // Dispatch an action to add the product to the cart
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.productContainer}>
      <div className={styles.product}>
        {/* Display the product image on the left */}
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImage}
        />

        {/* Display product details on the right */}
        <div className={styles.productDetails}>
          <h1 className={styles.productName}>{product.name}</h1>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
          <button className={styles.addToCartButton} onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Comments Section */}
      <div className={styles.commentsSection}>
        <h2>Customer Comments</h2>
        <div className={styles.comment}>
          <div className={styles.commentAuthor}>John Doe</div>
          <div className={styles.commentText}>
            This product is amazing! I highly recommend it.
          </div>
          <div className={styles.commentDate}>Posted on 2023-11-11</div>
        </div>
        {/* Add more comments as needed */}
      </div>
    </div>
  );
};

export default Product;
