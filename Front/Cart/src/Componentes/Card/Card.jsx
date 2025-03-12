import React from 'react';

import { Link } from 'react-router-dom';

const Card = ({ id, image, title, price }) => {
  return (
    <div className="single-product">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p>{price ? price.toFixed(2) : "Preço não disponível"}</p>
      <Link to={`/product/${id}`} className="details-button">Exibir Mais Detalhes</Link>
    </div>
  );
};

export default Card;