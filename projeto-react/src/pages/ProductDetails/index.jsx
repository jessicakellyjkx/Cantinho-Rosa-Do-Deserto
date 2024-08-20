import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api';
import rosa from '../../assets/rosa.jpg'
import './styles.css'

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };
    fetchData();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container product-page">
      <div className="product-section">
        <div className="product-image">
          <img src={rosa} alt={product.name} className="main-image" />
        </div>
        <div className="product-details">
          <div className="product-header">
            <span className="offer-label">OFERTA!</span>
            <h1>{product.name}</h1>
          </div>
          <div className="price-section">
            <div className="price">
              <p>R${product.price}</p>
              <p>Em até 3x de R${(product.price / 3).toFixed(2)} s/ juros ou R${(product.price * 0.95).toFixed(2)} à vista no PIX</p>
            </div>
            <div className="purchase-section">
              <label htmlFor="quantity">Quantidade</label>
              <input type="number" id="quantity" onChange={() => {}} name="quantity" value="1" />
              <a className="buy-button">Comprar</a>
            </div>
            <div className="help-section">
              <a href="#">Precisa de ajuda para comprar?</a>
            </div>
            <div className="shipping-section">
              <input type="text" id="cep" name="cep" placeholder="Insira o seu CEP" />
              <a className="calculate-button">Calcular</a>
              <a href="#" className="no-cep">Não sei meu CEP</a>
            </div>
            <div className="payment-methods">
              <div className="payment-methods">
                <i className="bi bi-credit-card-fill" alt="Visa"></i>  {/* Visa */}
                <i className="bi bi-credit-card-2-back-fill" alt="Mastercard"></i>  {/* Mastercard */}
                <i className="bi bi-bank" alt="Cielo"></i>  {/* Cielo */}
                <i className="bi bi-receipt-cutoff" alt="Boleto"></i>  {/* Boleto */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-section">
        <h2>Descrição</h2>
        <ul>
          <li>{product.description}</li>
          <li>01 Manual de cultivo (Enviado por e-mail após a compra).</li>
          <li>01 Brinde sendo um pacote de amostra de adubo para crescimento e floração.</li>
          <li>A muda lote especial.</li>
          <li>Muda com garantia 100% da cor.</li>
        </ul>
        <p>Todas as mudas são muito bem preparadas antes do envio...</p>
      </div>
    </div>
  );
};

export default ProductDetails;
