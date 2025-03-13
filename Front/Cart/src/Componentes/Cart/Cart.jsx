import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Recupera os dados do produto
  
  if (!product) {
    return <p>O carrinho está vazio!</p>; // Renderiza uma mensagem se nenhum produto foi passado
  }

  const { image, title, price } = product;
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (delta) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta)); // Evita valores menores que 1
  };

  const totalPrice = price * quantity;

  return (
    <div className="cart-container">
      <div className="cart-item">
        <img src={image} alt={title} className="cart-item-image" />
        <div className="cart-item-details">
          <h2 className="cart-item-title">{title}</h2>
          <p className="cart-item-price">Preço unitário: R$ {price.toFixed(2)}</p>
          <div className="cart-item-quantity">
            <button className="quantity-button" onClick={() => updateQuantity(-1)}>
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button className="quantity-button" onClick={() => updateQuantity(1)}>
              +
            </button>
          </div>
          <p className="cart-item-total">Total: R$ {totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <button className="checkout-button">Finalizar Compra</button>
    </div>
  );
};

export default Cart;

