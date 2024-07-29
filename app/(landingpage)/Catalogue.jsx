import Image from "next/image";
import shoeImage2 from "/public/images/shoe2.png";

const Catalogue = () => {
  return (
    <section className="px-4 md:px-10 bg-red-700 py-12">
      <div className="flex flex-wrap justify-center md:justify-between items-center sm:mx-[100px] mx-none">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 md:pr-8">
          <Image
            src={shoeImage2}
            alt="World best professional"
            width={400}
            height={350}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex flex-col justify-center md:justify-start">
            <span className="text-3xl my-2"> Our Values </span>
            Integrity is a cornerstone of our business. We believe in being
            honest and transparent with our customers, suppliers, and employees.
            Innovation drives us to constantly seek new ways to improve our
            products and services, embracing creativity and forward-thinking.
            Customer satisfaction is our priority, and we go the extra mile to
            ensure you are delighted with your purchase. We are proud to be part
            of a global community of shoe lovers and work to give back through
            various social and environmental initiatives.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
