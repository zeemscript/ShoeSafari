"use client";
import Image from "next/image";
import shoeImage1 from "/public/images/shoe4.png";
import shoeImage2 from "/public/images/shoe3.png";
import shoeImage3 from "/public/images/shoe3.png";
import shoeImage4 from "/public/images/shoe4.png";
import shoeImage5 from "/public/images/shoe5.png";
import { FaShoppingCart } from "react-icons/fa";

export default function Products() {

  const prods = [
    {
      id: 1,
      name: "Produto 1",
      price: 10,
      img: shoeImage1,
    },
    {
      id: 2,
      name: "Produto 2",
      price: 20,
      img: shoeImage2,
    },
    {
      id: 3,
      name: "Produto 3",
      price: 30,
      img: shoeImage3,
    },
    {
      id: 4,
      name: "Produto 4",
      price: 40,
      img: shoeImage4,
    },
    {
      id: 5,
      name: "Produto 5",
      price: 50,
      img: shoeImage5,
    },
    {
      id: 6,
      name: "Produto 6",
      price: 20,
      img: shoeImage3,
    },
    {
      id: 7,
      name: "Produto 7",
      price: 20,
      img: shoeImage4,
    },
    {
      id: 8,
      name: "Produto 8",
      price: 20,
      img: shoeImage5,
    },
    {
      id: 9,
      name: "Produto 9",
      price: 20,
      img: shoeImage3,
    },
    {
      id: 10,
      name: "Produto 10",
      price: 20,
      img: shoeImage4,
    },
    {
      id: 11,
      name: "Produto 11",
      price: 60,
      img: shoeImage3,
    },
    {
      id: 12,
      name: "Produto 12",
      price: 20,
      img: shoeImage4,
    },
    {
      id: 13,
      name: "Produto 13",
      price: 20,
      img: shoeImage5,
    },
    {
      id: 14,
      name: "Produto 14",
      price: 50,
      img: shoeImage3,
    },
  ];

  return (
    <>
      <section className="grid grid-cols-5 gap-4 overflow-auto">
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
            >
              <FaShoppingCart />
            </button>
          </div>
        ))}
      </section>
    </>
  );
}
