import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const generateShortUUID = (length = 5) => {
  return Math.random().toString(36).substring(2, 2 + length);
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [orderId, setOrderId] = useState(generateShortUUID()); // Generate initial short ID
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.menuItemId === item.menuItemId);

    if (itemIndex > -1) {
      const updatedCart = cart.map((cartItem, index) => {
        if (index === itemIndex) {
          const newQuantity = cartItem.quantity + 1;
          return { ...cartItem, quantity: newQuantity, total: newQuantity * cartItem.price };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
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

  const clearCart = () => {
    setCart([]);
    setOrderId(generateShortUUID()); // Generate a new short ID for the next order
  };

  const calculateTotals = () => {
    const subTotal = cart.reduce((acc, item) => acc + item.total, 0);
    const discountAmount = (subTotal * discount) / 100;
    const total = subTotal - discountAmount + (subTotal * 0.0); // Assuming 10% tax

    return {
      subTotal,
      discountAmount,
      tax: subTotal * 0.1,
      total
    };
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        discount,
        setDiscount,
        calculateTotals,
        orderId
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
