import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import Products from './Components/Products';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login.js/Login';
// import Cart from './Components/Cart'; // Assuming you have a Cart component
import Footer from './Components/Footer';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <Router>
      <div>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </CartProvider>
      </div>
    </Router>
  );
};

export default App;
