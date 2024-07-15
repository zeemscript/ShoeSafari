"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import shoeImage1 from "/public/images/shoe1.png";
import shoeImage2 from "/public/images/shoe2.png";
import shoeImage3 from "/public/images/shoe3.png";
import shoeImage4 from "/public/images/shoe4.png";
import shoeImage5 from "/public/images/shoe5.png";

interface CarouselProps {}

const images = [
  { src: shoeImage1, category: "Sneakers" },
  { src: shoeImage2, category: "Kids Sneakers" },
  { src: shoeImage3, category: "Sandals" },
  { src: shoeImage4, category: "Clogs" },
  { src: shoeImage5, category: "Sneakers" },
];

const Carousel: FC<CarouselProps> = () => {
  return (
    <section className="bg-white py-8">
      <h2 className="text-4xl font-semibold text-center mb-8">Categories</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 sm:px-6 lg:px-8">
          {images.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.src}
                alt={`shoe ${index + 1}`}
                width={150}
                height={150}
                className="object-contain mb-2"
              />
              <Link
                href={`/products/${item.category
                  .toLowerCase()
                  .replace(" ", "-")}`}
                className="text-red-500 font-normal hover:underline">
                {item.category}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
