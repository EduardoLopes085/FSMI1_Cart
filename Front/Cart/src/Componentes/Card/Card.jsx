import React from 'react';
import "./Card.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, image, title, price}) => {

    const navigate = useNavigate();

    const handleDetailsClick = () => {
     navigate(`/product/${id}`, { state: { image, title, price } }); // Passa os dados via state
  };
  return (
    <div className="single-product">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className='product-price' >{price ? price.toFixed(2) : "Preço não disponível"}</p>
      {/* <Link to={`/product/${id}`} className="details-button" onClick={onDetailsClick}>Exibir Mais Detalhes</Link> */}
      <button className="details-button" onClick={handleDetailsClick}>
        Exibir Mais Detalhes
      </button>
    </div>
  );
};

export default Card;