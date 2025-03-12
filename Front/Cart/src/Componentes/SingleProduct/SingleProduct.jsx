import React from 'react';
import './SingleProduct.css';
import { useNavigate } from 'react-router-dom'; 
import imagem from "../../assets/tenis.png"

const SingleProduct = ({ image, title, price }) => {
  const sizes = [39, 40, 41, 42, 43];
  const navigate = useNavigate();
  return (
    <div>
      <div className="single-product-container">
      <div className="single-product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">
          {price ? `R$ ${price.toFixed(2)}` : "Preço não disponível"}
        </p>
        <div className="size-selection">
          <p>Escolha o tamanho:</p>
          <div className="size-buttons">
            {sizes.map((size) => (
              <button key={size} className="size-button" >
                {size}
              </button>
            ))}
          </div>
        </div>
        <button className="buy-button" onClick={() => navigate('/cart')}>Comprar</button>
      </div>
      <div className="single-product-image">
        <img src={imagem} alt={title} />
      </div>
    </div>
    </div>
  );
};

export default SingleProduct;