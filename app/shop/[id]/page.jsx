"use client"
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../../context/CartContext";
import shoeImage1 from "/public/images/shoe4.png";
import shoeImage2 from "/public/images/shoe3.png";
import shoeImage3 from "/public/images/shoe3.png";
import shoeImage4 from "/public/images/shoe4.png";
import shoeImage5 from "/public/images/shoe5.png";
import Modal from "../../../components/Modal";
import Toast from "../../../components/Toast";
import Cart from "../../../components/Cart";
import { useState, useEffect } from "react";


const products = [
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

const ProductPage = ({ params }) => {
   const [showModal, setShowModal] = useState(false);
   const [toast, setToast] = useState({ show: false, message: "" });

   const showToast = (message) => {
     setToast({ show: true, message });
     setTimeout(() => setToast({ show: false, message: "" }), 3000);
   };
  
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      window.location.href = "/checkout";
    } else {
      showToast("There is nothing in your cart");
    }
  };
  const { itemCount, cartItems, addToCart, removeFromCart, totalPrice } =
    useCart();  const product = products.find((prod) => prod.id === parseInt(params.id));

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  if (!product) return (
    <div className="flex flex-col items-center justify-center my-32">
      <h1 className="text-2xl font-bold text-red-700">Product not found</h1>
    </div>
    );

  return (
    <>
      <div className="container after:w-full max-w-screen-xl mx-auto py-8">
        <Cart itemCount={itemCount} onClick={openModal} />;
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <Image src={product.img} alt={product.name} width={400} height={400} />
        <div className="flex space-x-4 items-center my-4">
          <h2 className="text-4xl">${product.price}</h2>
          <button
            className=" flex border border-red-800 rounded-md px-4 py-2 justify-between items-center hover:bg-red-700"
            onClick={() => {
              addToCart(product);
              showToast("Item added to cart");
            }}
          >
            <FaShoppingCart /> <span className="px-2">Add to Cart</span>
          </button>
        </div>
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
              Checkout
            </button>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ProductPage;

