
import './App.css'
import SingleProduct from './Componentes/SingleProduct/SingleProduct'
import ProductListing from './Componentes/ProductListing/ProductListing'
import Cart from './Componentes/Cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


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
