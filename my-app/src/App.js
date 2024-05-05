import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Products from './Components/Products'
import { CartProvider } from './context/CartContext';

import { useState } from 'react'

const App = () => {
  const [cart, setcart] = useState([])
   
  return (
    <div>
      <CartProvider>
      <Navbar></Navbar>
      <Products   addtocart= {setcart}></Products>
      </CartProvider>
    </div>
  )
}

export default App
