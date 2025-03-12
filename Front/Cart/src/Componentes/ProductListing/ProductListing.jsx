import React from 'react';
// import SingleProduct from '../SingleProduct/SingleProduct';
// import './ProductListing.css'; // Importa o CSS específico desse componente
import image from "../../assets/tenis.png"
import Card from "../Card/Card"

const products = [
  { id: 1, name: 'Produto 1', price: 100, image: image },
  { id: 2, name: 'Produto 2', price: 120, image: image },
  { id: 3, name: 'Produto 3', price: 150, image: image },
  { id: 4, name: 'Produto 4', price: 200, image: image},
  { id: 5, name: 'Produto 5', price: 80, image: image },
  { id: 6, name: 'Produto 6', price: 90, image: image },
  { id: 7, name: 'Produto 7', price: 110, image: image },
  { id: 8, name: 'Produto 8', price: 130, image: image },
  { id: 9, name: 'Produto 9', price: 140, image: image}
];

const ProductListing = () => {
  return (
    <div className="product-listing">
      <h2>Lista de Produtos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Card 
            key={product.id} 
            image={product.image} 
            title={product.name} 
            price={product.price} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
