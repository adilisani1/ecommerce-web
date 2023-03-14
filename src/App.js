import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
//pages
import Home from "./pages/home/Home";
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import { Products } from './shared/products';

function App() {

  const getLocalStorage = () => {
    let newCartData = localStorage.getItem("cartData");

    if (!newCartData) {
      return []
    } else {
      return JSON.parse(newCartData)
    }
  }

  const [products, setProducts] = useState(Products)
  const [cartItems, setCartItems] = useState(getLocalStorage());

  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  }
  const onAddToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCartItems, { ...item, quantity: 1 }];
    });
  };

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <Router>
      <Navbar cartItems={cartItems} />
      <div>
        <Routes >
          <Route exact path="/" element={<Home products={products} onHandleClick={onAddToCart} />} />
          <Route exact path="/shop" element={<Shop products={products} onHandleClick={onAddToCart} />} />
          <Route exact path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onRemove={removeItemFromCart}
                setCartItems={setCartItems} />
            } />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}


export default App;


