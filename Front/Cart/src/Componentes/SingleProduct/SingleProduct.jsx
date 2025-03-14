
import React from 'react';
import './SingleProduct.css';
import { useLocation, useNavigate } from 'react-router-dom';

const SingleProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, title, price } = location.state || {}; // Recupera os dados passados via navigate

  if (!image || !title || !price) {
    return <p>Produto não encontrado!</p>; // Mensagem caso os dados estejam ausentes
  }

  const sizes = [39, 40, 41, 42, 43];

  return (
    <div>
      <div className="single-product-container">
        <div className="single-product-details">
          <h2 className="product-title">{title}</h2>
          <p className="product-price">
            {price ? `R$ ${price.toFixed(2)}` : 'Preço não disponível'}
          </p>
          <div className="size-selection">
            <p>Escolha o tamanho:</p>
            <div className="size-buttons">
              {sizes.map((size) => (
                <button key={size} className="size-button">
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button className="buy-button" onClick={() => navigate('/cart', { state: {product: { image, title, price }} })}>
            Comprar
          </button>
        </div>
        <div className="single-product-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

