// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getProducts } from './api';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import ProductDetails from './pages/ProductDetails'; // New ProductDetails page
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import rosa from './assets/rosa.jpg';

const ProductList = () => {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchProducts = async () => {
         try {
            const data = await getProducts();
            setProducts(data);
         } catch (error) {
            setError(error.message);
         } finally {
            setLoading(false);
         }
      };

      fetchProducts();
   }, []);

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error: {error}</p>;

   return (
      <div className="product-list">
         {products.map((product) => (
            <Card
               key={product._id}
               imageUrl={rosa}
               name={product.name}
               price={product.price}
               productId={product._id} 
            />
         ))}
      </div>
   );
};

const App = () => {
   return (
      <React.StrictMode>
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} /> {}
        </Routes>
      </React.StrictMode>
   );
};

export default App;
