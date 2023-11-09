// src/pages/Product/Product.jsx

import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  // Replace this with an API call to fetch product details based on productId
  const product = {
    id: productId,
    name: 'Product ' + productId,
    description: 'Description for product ' + productId,
    price: 100,
    // image: 'path-to-image', // Uncomment and replace with actual path
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      {/* Add an 'Add to Cart' button */}
      {/* Optionally display the product image */}
    </div>
  );
};

export default Product;
