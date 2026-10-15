"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { isProductAvailable } from "../lib/productAvailability";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const originalItems = Array.isArray(savedItems) ? savedItems : [];
    const storedCartItems = originalItems.filter(isProductAvailable);
    const storedTotalPrice =
      parseFloat(localStorage.getItem("totalPrice")) || 0;

    setCartItems(storedCartItems);
    setItemCount(storedCartItems.length);
    setTotalPrice(
      storedCartItems.length === originalItems.length
        ? storedTotalPrice
        : storedCartItems.reduce((total, item) => total + (Number(item.price) || 0), 0)
    );
    if (storedCartItems.length !== originalItems.length || !Array.isArray(savedItems)) {
      localStorage.setItem("cartItems", JSON.stringify(storedCartItems));
      localStorage.setItem("itemCount", storedCartItems.length.toString());
      localStorage.setItem(
        "totalPrice",
        storedCartItems.reduce((total, item) => total + (Number(item.price) || 0), 0).toString()
      );
    }
  }, []);

  const addToCart = (product) => {
    if (!isProductAvailable(product)) return false;
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
    return true;
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
