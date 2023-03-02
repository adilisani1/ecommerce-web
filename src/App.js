import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

//pages
import Home from "./pages/home/Home";
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import { Products } from './shared/products';


function App() {
  const [products, setProducts] = useState(Products)
  const [cartItems, setCartItems] = useState([]);

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

  const Layout = ({ children }) => {
    return (
      <div className="app">
        <Navbar cartItems={cartItems} />
        {children}
        <Footer />
      </div>
    )
  }
  const createOrder = (order) => {
    alert("Your order has been placed successfully ", order.name)
  }
  return (
    <Router>
      <div>
        <Routes >
          <Route exact path="/" element={<Layout><Home products={products} onHandleClick={onAddToCart} /></Layout>} />
          <Route exact path="/shop" element={<Layout><Shop products={products} onHandleClick={onAddToCart} /></Layout>} />
          <Route exact path="/cart" element={<Layout><Cart cartItems={cartItems} onRemove={removeItemFromCart} createOrder={createOrder} /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
