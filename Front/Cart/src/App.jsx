import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SingleProduct from './Componentes/SingleProduct/SingleProduct'
import ProductListing from './Componentes/ProductListing/ProductListing'
import Cart from './Componentes/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <ProductListing />
      <SingleProduct />
      <Cart />
    </>

    
  )
}

export default App
