import Image from "next/image";
import team from "../../public/images/ourteam.png";

export default function AboutUs() {
  return (
    <section id="aboutus" className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-red-700 text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          At ShoeSafari, we are committed to delivering exceptional products and
          services that exceed our customers' expectations. Founded on the
          principles of quality and innovation, our team of dedicated
          professionals strives to create unique and memorable experiences for
          every client. Our passion for excellence drives us to continuously
          improve and adapt in a constantly evolving market.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center max-w-5xl mx-auto gap-8">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src={team}
            alt="Our Team"
            width={600} 
            height={400} 
            layout="intrinsic" 
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-base md:text-lg leading-relaxed">
            We believe in creating lasting relationships through our commitment
            to quality, integrity, and customer satisfaction. Our mission is to
            deliver products that not only meet but exceed industry standards,
            ensuring our clients receive the best possible value. We are driven
            by a passion for innovation and a dedication to crafting solutions
            that make a real difference.
          </p>
        </div>
      </div>
    </section>
  );
}
