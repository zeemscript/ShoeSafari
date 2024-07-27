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
          <div className="flex justify-center md:justify-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            explicabo inventore cumque voluptatem laudantium magnam error,
            tempore labore eum reiciendis architecto perspiciatis commodi! Animi
            hic ipsum illum omnis atque praesentium. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Optio similique vitae cupiditate
            voluptatem a neque animi vel voluptatibus quidem velit libero
            laboriosam, soluta, asperiores aliquam. Praesentium eaque
            voluptatibus ad perferendis!
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
