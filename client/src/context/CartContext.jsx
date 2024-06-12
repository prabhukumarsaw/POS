import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Load cart data from localStorage or initialize an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.menuItemId === item.menuItemId);
    
    if (itemIndex > -1) {
      // Item already exists, increase the quantity
      const updatedCart = cart.map((cartItem, index) => {
        if (index === itemIndex) {
          const newQuantity = cartItem.quantity + 1;
          return { ...cartItem, quantity: newQuantity, total: newQuantity * cartItem.price };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      // Item does not exist, add it to the cart with quantity 1
      setCart([...cart, { ...item, quantity: 1, total: item.price }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.menuItemId !== itemId);
    setCart(updatedCart);
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.menuItemId === itemId) {
        const newQuantity = item.quantity + 1;
        return { ...item, quantity: newQuantity, total: newQuantity * item.price };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.menuItemId === itemId && item.quantity > 1) {
        const newQuantity = item.quantity - 1;
        return { ...item, quantity: newQuantity, total: newQuantity * item.price };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
