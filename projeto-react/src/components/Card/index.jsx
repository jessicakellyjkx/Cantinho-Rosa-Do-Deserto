// src/components/Card.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './styles.css'; // Add any necessary styling here

const Card = ({ imageUrl, name, price, productId }) => {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="product-card__info">
        <h2>{name}</h2>
        <p className="product-card__price">R$ {price.toFixed(2)}</p>
        {/* Link to the product details page using the productId */}
        <Link to={`/product/${productId}`} className="product-card__button">
          COMPRAR
        </Link>
      </div>
    </div>
  );
};

export default Card;
