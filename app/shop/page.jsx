"use client";
import { useCart } from "../../context/CartContext";
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
import { useState } from "react";

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

export default function Products() {
  const { itemCount, cartItems, addToCart, removeFromCart, totalPrice } =
    useCart();
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  const handleCheckout = (e) => {
    setIsCheckingOut(true);
    e.preventDefault();
    if (cartItems.length > 0) {
      window.location.href = "/checkout";
    } else {
      showToast("There is nothing in your cart");
    }
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

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
                <Link href={`/shop/${prod.id}`}>
                  <Image
                    src={prod.img}
                    alt={prod.name}
                    width={200}
                    height={200}
                    className="mb-2"
                  />
                  <h1 className="text-xl font-bold">{prod.name}</h1>
                  <h2 className="text-lg">${prod.price}</h2>
                </Link>
                <button
                  className="border border-red-800 rounded-full px-2 py-2 mt-2 hover:bg-red-700"
                  onClick={() => {
                    addToCart(prod);
                    showToast("Item added to cart");
                   
                  }}
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
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <div className="w-16 h-16 flex-shrink-0">
                  <Image
                    src={item.img}
                    width={64}
                    height={64}
                    alt={`${item.name} image`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="ml-4">{item.name}</span>
                <span className="ml-4">${item.price}</span>
                <button
                  className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-between items-center mt-4 mx-5 sm:mx-10">
          <div>
            {cartItems.length > 0 && <strong>Total:</strong>}
            {totalPrice ? (
              <span className="ml-2 font-bold ">${totalPrice.toFixed(2)}</span>
            ) : (
              ""
            )}
          </div>
          {cartItems.length > 0 && (
            <button
              onClick={handleCheckout}
              className="bg-red-500 text-white px-4 py-1 rounded mt-4"
            >
              {isCheckingOut ? "CheckingOut..." : "CheckOut"}
            </button>
          )}
        </div>
      </Modal>
    </>
  );
}
