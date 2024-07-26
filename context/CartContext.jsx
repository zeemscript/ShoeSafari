"use client"
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const storedItemCount = parseInt(localStorage.getItem("itemCount")) || 0;
    const storedTotalPrice =
      parseFloat(localStorage.getItem("totalPrice")) || 0;

    setCartItems(storedCartItems);
    setItemCount(storedItemCount);
    setTotalPrice(storedTotalPrice);
  }, []);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems, product];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
    setItemCount((prevItemCount) => {
      const newItemCount = prevItemCount + 1;
      localStorage.setItem("itemCount", newItemCount.toString());
      return newItemCount;
    });
    setTotalPrice((prevTotalPrice) => {
      const newTotalPrice = prevTotalPrice + product.price;
      localStorage.setItem("totalPrice", newTotalPrice.toString());
      return newTotalPrice;
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prevCartItems) => {
      const index = prevCartItems.findIndex((item) => item.id === product.id);
      if (index === -1) return prevCartItems; // If item not found, return previous cart items

      const updatedCartItems = [...prevCartItems];
      updatedCartItems.splice(index, 1); // Remove the item from the array
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });

    setItemCount((prevItemCount) => {
      const newItemCount = prevItemCount - 1;
      localStorage.setItem("itemCount", newItemCount.toString());
      return newItemCount;
    });

    setTotalPrice((prevTotalPrice) => {
      const removedItem = cartItems.find((item) => item.id === product.id);
      if (!removedItem) return prevTotalPrice; // If item not found, return previous total price
      const newTotalPrice = prevTotalPrice - removedItem.price;
      localStorage.setItem("totalPrice", newTotalPrice.toString());
      return newTotalPrice;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setItemCount(0);
    setTotalPrice(0);
    localStorage.removeItem("cartItems");
    localStorage.removeItem("itemCount");
    localStorage.removeItem("totalPrice");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        itemCount,
        totalPrice,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
