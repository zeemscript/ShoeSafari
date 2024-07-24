"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

import shoeImage1 from "/public/images/shoe4.png";
import shoeImage2 from "/public/images/shoe3.png";
import shoeImage3 from "/public/images/shoe3.png";
import shoeImage4 from "/public/images/shoe4.png";
import shoeImage5 from "/public/images/shoe5.png";

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

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((prod) => prod.id === parseInt(id));
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="w-full max-w-screen-xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <Image src={product.img} alt={product.name} width={400} height={400} />
      <h2 className="text-2xl">${product.price}</h2>
      <button
        className="border border-red-800 rounded-full px-4 py-2 mt-4"
        onClick={() => addToCart(product)}
      >
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
