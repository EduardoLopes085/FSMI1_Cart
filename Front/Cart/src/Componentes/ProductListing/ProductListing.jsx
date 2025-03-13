import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
// import './ProductListing.css'; // Importa o CSS específico desse componente
import image from "../../assets/tenis.png"
import img2 from "../../assets/tenis2.png"
import img3 from "../../assets/tenis3.png"
import img4 from "../../assets/tenis4.png"
import img5 from "../../assets/tenis5.png"
import { useState } from 'react';
import Card from "../Card/Card"
import "./ProductListing.css"

const products = [
  { id: 1, name: 'Produto 1', price: 100, image: image },
  { id: 2, name: 'Produto 2', price: 120, image: img2 },
  { id: 3, name: 'Produto 3', price: 150, image: img3 },
  { id: 4, name: 'Produto 4', price: 200, image: img4},
  { id: 5, name: 'Produto 5', price: 80, image: img5 },
  { id: 6, name: 'Produto 6', price: 90, image: image },
  { id: 7, name: 'Produto 7', price: 110, image: image },
  { id: 8, name: 'Produto 8', price: 130, image: image },
  { id: 9, name: 'Produto 9', price: 140, image: image}
];

const ProductListing = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

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
            onDetailsClick={() => setSelectedProduct(product)} 
          />
        ))}
      </div>
      {/* {selectedProduct && <SingleProduct product={selectedProduct} />} */}
    </div>
  );
};

export default ProductListing;
