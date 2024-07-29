import Image from "next/image";
import shoeImage5 from "/public/images/shoe5.png";

const Catalogue5 = () => {
  return (
    <section className="px-4 md:px-10 bg-red-700 py-12">
      <div className="flex flex-wrap justify-center md:justify-between items-center sm:mx-[100px] mx-none">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 md:pr-8">
          <Image
            src={shoeImage5}
            alt="World best professional"
            width={400}
            height={350}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex flex-col justify-center md:justify-start">
            <span className="text-2xl my-2"> Commitment to Sustainability </span>At ShoeSafari, we are
            committed to sustainability and ethical practices. We strive to
            minimize our environmental footprint by choosing eco-friendly
            materials and sustainable manufacturing processes. We believe in
            creating shoes that are not only good for your feet but also good
            for the planet. Our efforts include using recycled materials,
            reducing waste, and supporting fair labor practices. We are
            constantly exploring new ways to enhance our sustainability efforts
            and contribute to a greener future.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalogue5;
