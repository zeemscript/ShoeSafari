// "use client";
// import { useState, useEffect } from "react";
// import shoeImage1 from "/public/images/shoe4.png";
// import shoeImage2 from "/public/images/shoe3.png";
// import shoeImage3 from "/public/images/shoe3.png";
// import shoeImage4 from "/public/images/shoe4.png";
// import shoeImage5 from "/public/images/shoe5.png";

// async function addData(newData) {
//   const res = await fetch("/api/addToDb", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newData),
//   });
//   if (!res.ok) {
//     throw new Error("Failed to add data");
//   }
//   return res.json();
// }


// async function fetchdata() {
//   const res = await fetch("/api/getFromDb");

// }

// // const prods = [
// //   { name: "Air Max Fusion", price: 10, img: shoeImage1 },
// //   { name: "UltraBoost Runner", price: 20, img: shoeImage2 },
// //   { name: "Classic Chuck Taylor", price: 30, img: shoeImage3 },
// //   { name: "Timberland Adventure", price: 40, img: shoeImage4 },
// //   { name: "Nike React Infinity", price: 50, img: shoeImage5 },
// //   { name: "Adidas Superstar", price: 20, img: shoeImage3 },
// //   { name: "Vans Old Skool", price: 20, img: shoeImage4 },
// //   { name: "Puma RS-X", price: 20, img: shoeImage5 },
// //   { name: "New Balance 990", price: 20, img: shoeImage3 },
// //   { name: "Saucony Kinvara", price: 20, img: shoeImage4 },
// //   { name: "Brooks Ghost", price: 60, img: shoeImage3 },
// //   { name: "Keds Champion", price: 20, img: shoeImage4 },
// //   { name: "Converse One Star", price: 20, img: shoeImage5 },
// //   { name: "Asics Gel-Kayano", price: 50, img: shoeImage3 },
// // ];

// export default function HomePage() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   const handleAdd = async () => {
//     try {
//       await addData(prods);
//       alert("Data added successfully");
//     } catch (error) {
//       setError(error);
//     }
//   };

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="mt-20 container mx-auto">
//       <h1 className="text-black text-3xl">Data from MongoDB</h1>
//       <button onClick={handleAdd} className="text-black text-sm border border-red-700 px-4 py-2 hover:bg-red-500 rounded-md">
//         Add Item
//       </button>
//     </div>
//   );
// }
"use client"
import { useState } from "react";
import { useAuth } from "../../lib/AuthContext";
const { user } = useAuth();
  

