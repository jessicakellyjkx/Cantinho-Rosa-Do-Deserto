import axios from 'axios';

const API_URL = 'http://localhost:5001';

export const getProducts = async () => {
   try {
      const response = await axios.get(`${API_URL}/products`);
      return response.data;
   } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
   }
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};
