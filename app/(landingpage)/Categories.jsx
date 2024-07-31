import Image from "next/image";

import shoeImage1 from "/public/images/shoe4.png";
import shoeImage2 from "/public/images/shoe2.png";
import shoeImage3 from "/public/images/shoe3.png";
import shoeImage4 from "/public/images/shoe4.png";
import shoeImage5 from "/public/images/shoe5.png";
const shoes = [
  {
    id: 1,
    name: "Men Shoes",
    price: 99.99,
    imageUrl: shoeImage4,
  },
  {
    id: 2,
    name: "Kids Shoes",
    price: 129.99,
    imageUrl: shoeImage2,
  },
  {
    id: 3,
    name: "Casual Sneakers",
    price: 79.99,
    imageUrl: shoeImage1,
  },
  {
    id: 4,
    name: "Women Shoes",
    price: 149.99,
    imageUrl: shoeImage5,
  },
  {
    id: 4,
    name: "Formal Shoes",
    price: 149.99,
    imageUrl: shoeImage1,
  },
];

export default function ShoesCollection() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-center">Shoes Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shoes.map((shoe) => (
          <div
            key={shoe.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
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
              <p className="text-gray-700">Starting from {`$${shoe.price}`} <span className="line-through text-gray-500 decoration-gray-50">{`$${shoe.price + 30}`}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
