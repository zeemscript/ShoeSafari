import Image from "next/image";
import shoeImage1 from "/public/images/shoe1.png";
import shoeImage2 from "/public/images/shoe2.png";
import shoeImage3 from "/public/images/shoe3.png";
import shoeImage4 from "/public/images/shoe4.png";
import shoeImage5 from "/public/images/shoe5.png";

export default function Home() {
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
  ];

  return (
    <>
      <section className="grid grid-cols-5">
        {prods.map((prod) => (
          <div
            key={prod.id}
            className=""
          >
            <Image
              src={prod.img}
              alt={prod.name}
              width={200}
              height={200}
              className="mb-2"
            />
            <h1 className="text-xl font-bold">{prod.name}</h1>
            <h2 className="text-lg">${prod.price}</h2>
          </div>
        ))}
      </section>
    </>
  );
}
