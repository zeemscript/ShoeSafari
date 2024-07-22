// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import shoeImage1 from "/public/images/shoe4.png";
// import shoeImage2 from "/public/images/shoe3.png";
// import shoeImage3 from "/public/images/shoe3.png";
// import shoeImage4 from "/public/images/shoe4.png";
// import shoeImage5 from "/public/images/shoe5.png";
// import { FaShoppingCart } from "react-icons/fa";
// import Modal from "../../../components/Modal";

// export default function Page() {
//   const [itemCount, setItemCount] = useState(0);
//   const [cartItems, setCartItems] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   // Load item count and cart items from localStorage on component mount
//   useEffect(() => {
//     const storedItemCount = localStorage.getItem("itemCount");
//     const storedCartItems = localStorage.getItem("cartItems");
//     if (storedItemCount) {
//       setItemCount(parseInt(storedItemCount, 10));
//     }
//     if (storedCartItems) {
//       setCartItems(JSON.parse(storedCartItems));
//     }
//   }, []);

//   // Handle adding items to the cart
//  const handleAdd = (item) => {
//    const newItemCount = itemCount + 1;
//    const updatedCartItems = [...cartItems, item];
//    console.log("Adding item to cart:", item);
//    localStorage.setItem("itemCount", newItemCount.toString()); // Convert number to string
//    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
//    setItemCount(newItemCount);
//    setCartItems(updatedCartItems);
//  };


//   // Open and close modal
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   const prods = [
//     { id: 1, name: "Produto 1", price: 10, img: shoeImage1 },
//     { id: 2, name: "Produto 2", price: 20, img: shoeImage2 },
//     { id: 3, name: "Produto 3", price: 30, img: shoeImage3 },
//     { id: 4, name: "Produto 4", price: 40, img: shoeImage4 },
//     { id: 5, name: "Produto 5", price: 50, img: shoeImage5 },
//     { id: 6, name: "Produto 6", price: 20, img: shoeImage3 },
//     { id: 7, name: "Produto 7", price: 20, img: shoeImage4 },
//     { id: 8, name: "Produto 8", price: 20, img: shoeImage5 },
//     { id: 9, name: "Produto 9", price: 20, img: shoeImage3 },
//     { id: 10, name: "Produto 10", price: 20, img: shoeImage4 },
//     { id: 11, name: "Produto 11", price: 60, img: shoeImage3 },
//     { id: 12, name: "Produto 12", price: 20, img: shoeImage4 },
//     { id: 13, name: "Produto 13", price: 20, img: shoeImage5 },
//     { id: 14, name: "Produto 14", price: 50, img: shoeImage3 },
//   ];

//   return (
//     <div className="w-full max-w-screen-xl mx-auto py-8">
//       {/* <button
//         className="fixed bottom-4 right-4 p-2 rounded-full bg-red-500 text-white shadow-md hover:bg-red-700 transition-all duration-300 relative"
//         onClick={openModal}
//       >
//         <FaShoppingCart size={24} />
//         {itemCount > 0 && (
//           <span className="absolute -top-2 right-0 flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-600 rounded-full">
//             {itemCount}
//           </span>
//         )}
//       </button>

//       <Modal show={showModal} onClose={closeModal}>
//         <h2 className="text-2xl mb-4">Cart Items</h2>
//         {cartItems.length > 0 ? (
//           <ul>
//             {cartItems.map((item, index) => (
//               <li key={index} className="mb-2">
//                 <div className="flex justify-between">
//                   <span>{item.name}</span>
//                   <span>${item.price}</span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Your cart is empty.</p>
//         )}
//         <button
//           onClick={closeModal}
//           className="bg-red-500 text-white px-4 py-2 rounded mt-4"
//         >
//           Close
//         </button>
//       </Modal> */}

//       <section className="h-[70vh] overflow-auto">
//         <span className="text-4xl sm:text-6xl py-4 flex justify-center items-center font-extrabold">
//           Welcome to Our Store Collections!
//         </span>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//           {prods.map((prod) => (
//             <div key={prod.id} className="p-4 border rounded-lg shadow">
//               <Image
//                 src={prod.img}
//                 alt={prod.name}
//                 width={200}
//                 height={200}
//                 className="mb-2"
//               />
//               <h1 className="text-xl font-bold">{prod.name}</h1>
//               <h2 className="text-lg">${prod.price}</h2>
//               <button
//                 className="border border-red-800 rounded-full px-2 py-2 mt-2"
//                 onClick={() => handleAdd(prod)}
//               >
//                 <FaShoppingCart />
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
// components/ShoesCollection.js

import Image from 'next/image';

import shoeImage1 from "/public/images/shoe4.png";
import shoeImage2 from "/public/images/shoe3.png";
import shoeImage3 from "/public/images/shoe3.png";
import shoeImage4 from "/public/images/shoe4.png";
import shoeImage5 from "/public/images/shoe5.png";
const shoes = [
  {
    id: 1,
    name: "Running Shoes",
    price: "$99.99",
    imageUrl: shoeImage1,
  },
  {
    id: 2,
    name: "Basketball Shoes",
    price: "$129.99",
    imageUrl: shoeImage1,
  },
  {
    id: 3,
    name: "Casual Sneakers",
    price: "$79.99",
    imageUrl: shoeImage1,
  },
  {
    id: 4,
    name: "Formal Shoes",
    price: "$149.99",
    imageUrl: shoeImage1,
  },
];

export default function ShoesCollection() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Shoes Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={shoe.imageUrl}
                alt={shoe.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{shoe.name}</h2>
              <p className="text-gray-600">{shoe.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
