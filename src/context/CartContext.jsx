import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  
  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.orderid === item.orderid);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.orderid === item.orderid
            ? { ...cartItem, quantity: cartItem.quantity + 1, totalPrice: cartItem.totalPrice + 100 }
            : cartItem
        );
      } else {
        const currentDate = new Date().toLocaleDateString();
        return [...prevCart, { ...item, dateAdded: currentDate, quantity: 1, totalPrice: 100 }];
      }
    });
  };

  const removeFromCart = (orderid) => {
    setCartItems((prevCart) => {
      return prevCart
        .map((cartItem) =>
          cartItem.orderid === orderid
            ? { ...cartItem, quantity: cartItem.quantity - 1, totalPrice: cartItem.totalPrice - 100 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0); 
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
