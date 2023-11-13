import axios from 'axios';

const ProductService = {
  getProducts: async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },
  // Add more methods as needed for CRUD operations
};

export default ProductService;
