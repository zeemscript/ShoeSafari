import Image from "next/image";
import shoeImage2 from "/public/images/shoe2.png";

const Catalogue4 = () => {
  return (
    <section className="px-4 md:px-10 bg-red-700 py-12">
      <div className="flex flex-wrap justify-center md:justify-between items-center sm:mx-[100px] mx-none">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex flex-col  justify-center md:justify-start">
            <span className="text-2xl my-2">Customer-Centric Approach </span>Our customers are at the
            heart of everything we do at ShoeSafari. We are dedicated to
            providing an exceptional shopping experience, both online and
            in-store. Our website is designed for easy navigation, allowing you
            to browse through our collections effortlessly. We also offer
            hassle-free returns and exchanges, so you can shop with confidence.
            Our customer service team is always ready to assist you with any
            queries or concerns, ensuring that your experience with ShoeSafari
            is nothing short of excellent.
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 md:pr-8 pt-10 sm:pt-0">
          <Image
            src={shoeImage2}
            alt="World best professional"
            width={400}
            height={350}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Catalogue4;
