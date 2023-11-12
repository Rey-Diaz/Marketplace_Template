import { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard'; // Update the path as needed
import ExpandedProductCard from '../../components/ExpandedProductCard/ExpandedProductCard'; // Update the path as needed
import { AnimatePresence, motion } from 'framer-motion';
import styles from './ProductList.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice'; // Update the path to your cartSlice

const ProductList = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setExpandedProduct(null); // Close the expanded view on adding to cart (optional)
  };

  // Generate 25 sample products
  const products = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    description: `Description for product ${index + 1}`,
    price: (index + 1) * 10,
    image: `https://via.placeholder.com/150`
  }));

  return (
    <div className={styles.productList}>
      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
          onClick={() => setExpandedProduct(product)}
          onAddToCart={() => handleAddToCart(product)} // Pass handleAddToCart to ProductCard
        />
      ))}

      <AnimatePresence>
        {expandedProduct && (
          <motion.div 
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedProduct(null)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <ExpandedProductCard 
                product={expandedProduct}
                onAddToCart={() => handleAddToCart(expandedProduct)}
                onClick={() => setExpandedProduct(null)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductList;
