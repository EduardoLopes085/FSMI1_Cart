import React, { useState } from 'react';
import './Cart.css';
import imagem from '../../assets/tenis.png'; //

const Cart = ({ title = "Tênis Esportivo", price = 100.0 }) => {

  const [quantity, setQuantity] = useState(1);

  // Função para atualizar a quantidade
  const updateQuantity = (delta) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta)); // Garante que a quantidade mínima seja 1
  };

  const totalPrice = price * quantity;
  return (
    <div className="cart-container">
    <div className="cart-item">
      <img src={imagem} alt={title} className="cart-item-image" />
      <div className="cart-item-details">
        <h2 className="cart-item-title">{title}</h2>
        <p className="cart-item-price">Preço unitário: R$ {price.toFixed(2)}</p>
        <div className="cart-item-quantity">
          <button
            className="quantity-button"
            onClick={() => updateQuantity(-1)}
          >
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button
            className="quantity-button"
            onClick={() => updateQuantity(1)}
          >
            +
          </button>
        </div>
        <p className="cart-item-total">Total: R$ {totalPrice.toFixed(2)}</p>
      </div>
    </div>
    <button className="checkout-button">Finalizar Compra</button>
  </div>
);
  ;
};

export default Cart;