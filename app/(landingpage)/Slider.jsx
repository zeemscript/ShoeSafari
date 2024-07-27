import shoeImage1 from "/public/images/shoe4.png";
import shoeImage2 from "/public/images/shoe3.png";
import shoeImage3 from "/public/images/shoe3.png";
import shoeImage4 from "/public/images/shoe4.png";
import shoeImage5 from "/public/images/shoe5.png";
import shoeImage6 from "/public/images/shoe1.png";
import shoeImage7 from "/public/images/shoe2.png";
import shoeImage8 from "/public/images/shoe3.png";
import shoeImage9 from "/public/images/shoe4.png";
import Image from "next/image";
const Slider = () => {
  return (
    <section className="flex max-w-screen-2xl overflow-x-auto">
      <Image src={shoeImage1} alt="shoeimag" width={190} height={20} />
      <Image src={shoeImage3} alt="shoeimag" width={190} height={20} />
      <Image src={shoeImage3} alt="shoeimag" width={190} height={20} />
      <Image src={shoeImage4} alt="shoeimag" width={190} height={20} />
      <Image src={shoeImage5} alt="shoeimag" width={190} height={20} />
      <Image src={shoeImage8} alt="shoeimag" width={190} height={20} />
      <Image src={shoeImage4} alt="shoeimag" width={190} height={20} />
      <Image src={shoeImage1} alt="shoeimag" width={190} height={20} />
      <Image src={shoeImage3} alt="shoeimag" width={190} height={20} />
      <Image src={shoeImage3} alt="shoeimag" width={190} height={20} />
    </section>
  );
};

export default Slider;
