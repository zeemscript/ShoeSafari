"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import shoeImage1 from "/public/images/shoe4.png";
import shoeImage2 from "/public/images/shoe3.png";
import shoeImage3 from "/public/images/shoe3.png";
import shoeImage4 from "/public/images/shoe4.png";
import shoeImage5 from "/public/images/shoe5.png";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../../components/Cart";
import Modal from "../../components/Modal";
import Toast from "../../components/Toast";

export default function Products() {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [toast, setToast] = useState({ show: false, message: "" });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 5000);
  };

  useEffect(() => {
    const storedItemCount = localStorage.getItem("itemCount");
    const storedCartItems = localStorage.getItem("cartItems");
    const storedTotalPrice = localStorage.getItem("totalPrice");
    if (storedItemCount) {
      setItemCount(parseInt(storedItemCount, 10));
    }
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
    if (storedTotalPrice) {
      setTotalPrice(parseFloat(storedTotalPrice));
    }
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleAddToCart = (item) => {
    const newItemCount = itemCount + 1;
    const updatedCartItems = [...cartItems, item];
    const newTotalPrice = totalPrice + item.price;

    showToast("Item added to cart");
    localStorage.setItem("itemCount", newItemCount.toString());
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    localStorage.setItem("totalPrice", newTotalPrice.toString());

    setItemCount(newItemCount);
    setCartItems(updatedCartItems);
    setTotalPrice(newTotalPrice);
  };

  const handleRemoveFromCart = (index) => {
    const removedItem = cartItems[index];
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    const newItemCount = updatedCartItems.length;
    const newTotalPrice = totalPrice - removedItem.price;

    showToast("Item removed from cart");
    localStorage.setItem("itemCount", newItemCount.toString());
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    localStorage.setItem("totalPrice", newTotalPrice.toString());

    setItemCount(newItemCount);
    setCartItems(updatedCartItems);
    setTotalPrice(newTotalPrice);
  };

  const prods = [
    { id: 1, name: "Air Max Fusion", price: 10, img: shoeImage1 },
    { id: 2, name: "UltraBoost Runner", price: 20, img: shoeImage2 },
    { id: 3, name: "Classic Chuck Taylor", price: 30, img: shoeImage3 },
    { id: 4, name: "Timberland Adventure", price: 40, img: shoeImage4 },
    { id: 5, name: "Nike React Infinity", price: 50, img: shoeImage5 },
    { id: 6, name: "Adidas Superstar", price: 20, img: shoeImage3 },
    { id: 7, name: "Vans Old Skool", price: 20, img: shoeImage4 },
    { id: 8, name: "Puma RS-X", price: 20, img: shoeImage5 },
    { id: 9, name: "New Balance 990", price: 20, img: shoeImage3 },
    { id: 10, name: "Saucony Kinvara", price: 20, img: shoeImage4 },
    { id: 11, name: "Brooks Ghost", price: 60, img: shoeImage3 },
    { id: 12, name: "Keds Champion", price: 20, img: shoeImage4 },
    { id: 13, name: "Converse One Star", price: 20, img: shoeImage5 },
    { id: 14, name: "Asics Gel-Kayano", price: 50, img: shoeImage3 },
  ];

  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto py-8">
        <Cart itemCount={itemCount} onClick={openModal} />
        <section className="h-[70vh] overflow-auto">
          <span className="text-4xl sm:text-6xl py-4 flex justify-center items-center font-extrabold">
            Welcome to Our Store!
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {prods.map((prod) => (
              <div key={prod.id} className="p-4 border rounded-lg shadow">
                <Image
                  src={prod.img}
                  alt={prod.name}
                  width={200}
                  height={200}
                  className="mb-2"
                />
                <h1 className="text-xl font-bold">{prod.name}</h1>
                <h2 className="text-lg">${prod.price}</h2>
                <button
                  className="border border-red-800 rounded-full px-2 py-2 mt-2"
                  onClick={() => handleAddToCart(prod)}
                >
                  <FaShoppingCart />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Toast
        message={toast.message}
        show={toast.show}
        onClose={() => setToast({ show: false, message: "" })}
      />
      <Modal show={showModal} onClose={closeModal}>
        <h2 className="text-2xl mb-4">Cart Items</h2>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-2">
                <div className="flex justify-between items-center">
                  <Image src={item.img} width={30} height={30} alt="image" />
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                  <button
                    onClick={() => handleRemoveFromCart(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded ml-4"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className="flex justify-between">
          <button
            onClick={closeModal}
            className="bg-red-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded mt-4"
          >
            Close
          </button>
          <div className="mt-4">
            {cartItems.length > 0 ? (
              <span className="text-xl">
                Total Price: ${totalPrice.toFixed(2)}
              </span>
            ) : (
              ""
            )}
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">
            <Link href="/checkout">Checkout</Link>
          </button>
        </div>
      </Modal>
    </>
  );
}
