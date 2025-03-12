import React from 'react';
// import './SingleProduct.css';

const Card = ({ image, title, price }) => {
  return (
    <div className="single-product">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p>{price ? price.toFixed(2) : "Preço não disponível"}</p>
    </div>
  );
};

export default Card;