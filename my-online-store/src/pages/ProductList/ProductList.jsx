// src/pages/ProductList/ProductList.jsx

import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './ProductList.module.css';

const ProductList = () => {
  // Products array with placeholder image URLs
  const products = [
    { id: 1, name: 'Product 1', description: 'Description for product 1', price: 100, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', description: 'Description for product 2', price: 150, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', description: 'Description for product 3', price: 75, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', description: 'Description for product 4', price: 120, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', description: 'Description for product 5', price: 90, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 6', description: 'Description for product 6', price: 200, image: 'https://via.placeholder.com/150' },
    // ... more products
  ];

  return (
    <div>
      <h1>Products</h1>
      <div className={styles.productgrid}> {/* Apply the CSS class to the container */}
        {products.map((product) => (
          <div key={product.id} className={styles.ProductCard}> {/* Apply the CSS class to each card */}
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
