// src/pages/ProductList/ProductList.jsx

import ProductCard from '../../components/ProductCard/ProductCard';

const ProductList = () => {
  const products = [
    // Example product data
    { id: 1, name: 'Product 1', description: 'Description for product 1', price: 100, image: '/path-to-product-1-image.jpg' },
    { id: 2, name: 'Product 2', description: 'Description for product 1', price: 100, image: '/path-to-product-1-image.jpg' },
    { id: 3, name: 'Product 3', description: 'Description for product 1', price: 100, image: '/path-to-product-1-image.jpg' },
    { id: 4, name: 'Product 4', description: 'Description for product 1', price: 100, image: '/path-to-product-1-image.jpg' },
    { id: 5, name: 'Product 5', description: 'Description for product 1', price: 100, image: '/path-to-product-1-image.jpg' },
    { id: 6, name: 'Product 6', description: 'Description for product 1', price: 100, image: '/path-to-product-1-image.jpg' },
    // ... more products
  ];

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
