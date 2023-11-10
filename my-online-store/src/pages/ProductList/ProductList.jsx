// src/pages/ProductList/ProductList.jsx

import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductList.module.css'; // Import the CSS file

const ProductList = () => {
  const products = [
    // Example product data
    { id: 1, name: 'Product 1', description: 'Description for product 1', price: 100, image: '/path-to-product-1-image.jpg' },
    { id: 2, name: 'Product 2', description: 'Description for product 2', price: 150, image: '/path-to-product-2-image.jpg' },
    { id: 3, name: 'Product 3', description: 'Description for product 3', price: 75, image: '/path-to-product-3-image.jpg' },
    { id: 4, name: 'Product 4', description: 'Description for product 4', price: 120, image: '/path-to-product-4-image.jpg' },
    { id: 5, name: 'Product 5', description: 'Description for product 5', price: 90, image: '/path-to-product-5-image.jpg' },
    { id: 6, name: 'Product 6', description: 'Description for product 6', price: 200, image: '/path-to-product-6-image.jpg' },
    // ... more products
  ];

  return (
    <div>
      <h1>Products</h1>
      <div className="product-grid"> {/* Apply the CSS class to the container */}
        {products.map((product) => (
          <div key={product.id} className="product-card"> {/* Apply the CSS class to each card */}
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
