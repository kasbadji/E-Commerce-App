import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetailProduct from './pages/DetailProduct';
import NavBar from './components/NavBar';
import Cart from './pages/Cart';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Welcome from './components/Welcome';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (cartItems !== null) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (product) => {
    const uniqueItem = { ...product, cartItemId: crypto.randomUUID() };
    setCartItems(prev => [...prev, uniqueItem]);
  };

  const removeCart = (cartItemId) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  
  return (
    <Router>
      <NavBar onSearch={setSearchQuery} /> 
      <Routes>
        <Route path="/" element={
          <>
            <Welcome />
            <Home addToCart={addToCart} searchQuery={searchQuery} />
            <Footer />
          </>
        } />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeCart={removeCart} />} />
      </Routes>
    </Router>
  );
}

export default App;