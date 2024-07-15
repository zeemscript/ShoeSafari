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
      </div>
    </section>
  );
};

export default Catalogue;
