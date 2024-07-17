import Image from "next/image";
import shoeImage3 from "/public/images/shoe3.png";

const Catalogue = () => {
  return (
    <section className="px-4 md:px-10 bg-red-700 py-12 gap-10">
      <div className="flex flex-wrap justify-center md:justify-between items-center sm:mx-[100px] mx-none">
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
