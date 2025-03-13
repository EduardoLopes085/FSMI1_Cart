
import './App.css'
import SingleProduct from './Componentes/SingleProduct/SingleProduct'
import ProductListing from './Componentes/ProductListing/ProductListing'
import Cart from './Componentes/Cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // const productsArray = [
  //   { id: 1, title: "Tênis Esportivo", price: 100.0, quantity: 1, image:'https://placehold.co/400' },
  //   { id: 2, title: "Camiseta Esportiva", price: 50.0, quantity: 2, image: 'https://placehold.co/400' },
  // ]

  return (
    <>
      
      <Router>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    {/* <Cart></Cart> */}
    </>

    
  )
}

export default App
