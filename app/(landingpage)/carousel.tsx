import Image from "next/image";
import shoeImage1 from "/public/images/shoe1.png";
import shoeImage2 from "/public/images/shoe2.png";
import shoeImage3 from "/public/images/shoe3.png";
import shoeImage4 from "/public/images/shoe4.png";
import shoeImage5 from "/public/images/shoe5.png";

export default function Carousel() {
  return (
    <section className="bg-white">
      <span className="text-6xl font-semibold text-center flex items-center justify-center">CASUAL</span>

      <div className="grid grid-cols-4  gap-4 mx-40">
        <Image src={shoeImage2} alt="shoe" width={200} />
        <Image src={shoeImage3} alt="shoe" width={200} />
        <Image src={shoeImage4} alt="shoe" width={200} />
        <Image src={shoeImage5} alt="shoe" width={200} />
        <Image src={shoeImage3} alt="shoe" width={200} />
        <Image src={shoeImage4} alt="shoe" width={200} />
        <Image src={shoeImage2} alt="shoe" width={200} />
        <Image src={shoeImage5} alt="shoe" width={200} />
        <Image src={shoeImage2} alt="shoe" width={200} />
        <Image src={shoeImage3} alt="shoe" width={200} />
        <Image src={shoeImage4} alt="shoe" width={200} />
        <Image src={shoeImage5} alt="shoe" width={200} />
        <Image src={shoeImage2} alt="shoe" width={200} />
        <Image src={shoeImage3} alt="shoe" width={200} />
        <Image src={shoeImage4} alt="shoe" width={200} />
        <Image src={shoeImage5} alt="shoe" width={200} />
      </div>
    </section>
  );
}
