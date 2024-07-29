import Image from "next/image";
import shoeImage1 from "/public/images/shoe1.png";

const About = () => {
  return (
    <section className="px-4 md:px-10 bg-white py-12">
      <div className="flex flex-wrap justify-center md:justify-between items-center sm:mx-[100px] mx-none">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-light text-black pb-4">
            Why ShoeSafari
          </h2>
          <div className="flex flex-col gap-4 justify-center md:justify-start">
            Quality craftsmanship is at the core of everything we do. We partner
            with the finest manufacturers and artisans to bring you shoes that
            are made to last. Our rigorous quality control process ensures that
            every pair meets our high standards. We offer a diverse selection
            that caters to every taste and occasion, from trendy sneakers and
            stylish boots to elegant heels and comfortable flats.
            <div>
              Our customer-centric approach means that our customers are at the
              heart of everything we do. We are dedicated to providing an
              exceptional shopping experience, from easy navigation on our
              website to hassle-free returns and exchanges. Additionally, we are
              committed to sustainability and strive to minimize our
              environmental footprint by choosing eco-friendly materials and
              ethical manufacturing processes.
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={shoeImage1}
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

export default About;
