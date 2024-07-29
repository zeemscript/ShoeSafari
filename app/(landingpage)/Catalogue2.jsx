import Image from "next/image";
import shoeImage3 from "/public/images/shoe3.png";

const Catalogue = () => {
  return (
    <section className="px-4 md:px-10 bg-red-700 py-12 gap-10">
      <div className="flex flex-wrap justify-center md:justify-between items-center sm:mx-[100px] mx-none">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex  flex-col justify-center md:justify-start">
            <span className="text-2xl my-2"> Diverse Selection</span> We understand that every individual
            has unique tastes and preferences when it comes to shoes. That's why
            we offer a wide range of styles to cater to every occasion and
            personality. Our collection includes everything from trendy sneakers
            and stylish boots to elegant heels and comfortable flats. No matter
            what you're looking for, you'll find it at ShoeSafari. Our goal is
            to provide you with options that suit your style and meet your
            needs, ensuring that you always have the perfect pair of shoes for
            any event.
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 md:pr-8 pt-10 sm:pt-0">
          <Image
            src={shoeImage3}
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

export default Catalogue;
