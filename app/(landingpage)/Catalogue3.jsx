import Image from "next/image";
import shoeImage4 from "/public/images/shoe4.png";

const Catalogue3 = () => {
  return (
    <section className="px-4 md:px-10 bg-white py-12">
      <div className="flex flex-wrap justify-center md:justify-between items-center sm:mx-[100px] mx-none">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 md:pr-8">
          <Image
            src={shoeImage4}
            alt="World best professional"
            width={400}
            height={350}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex flex-col justify-center md:justify-start">
            <span className="text-2xl my-2"> Our Story</span>
            ShoeSafari was founded with a simple vision: to create a haven for
            shoe enthusiasts where they can find a diverse collection of
            footwear that meets their needs and exceeds their expectations.
            Since our inception, we have been committed to offering shoes that
            combine craftsmanship, innovation, and elegance.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalogue3;
