"use client";
import "/styles/global.css";
import { useState, useEffect } from "react";
import Cart from "../../components/Cart";
import Sidebar from "/components/Sidebar";
import Modal from "../../components/Modal";

const Layout = ({ children }) => {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedItemCount = localStorage.getItem("itemCount");
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedItemCount) {
      setItemCount(parseInt(storedItemCount, 10));
    }
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleAddToCart = (item) => {
    const newItemCount = itemCount + 1;
    const updatedCartItems = [...cartItems, item];
    localStorage.setItem("itemCount", newItemCount.toString());
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setItemCount(newItemCount);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="flex">
      <Sidebar />
      <Cart itemCount={itemCount} onClick={openModal} />
      <main className="flex-grow px-5 sm:px-3">{children}</main>

      <Modal show={showModal} onClose={closeModal}>
        <h2 className="text-2xl mb-4">Cart Items</h2>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-2">
                <div className="flex justify-between">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <button
          onClick={closeModal}
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Layout;
