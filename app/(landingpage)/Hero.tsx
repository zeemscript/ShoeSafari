"use client";

export default function Hero() {
  return (
    <section className="bg-custom-image bg-cover bg-center h-screen text-center">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-extrabold text-white">
          Welcome to ShoeSafari!
        </h1>
        <p className="text-4xl text-white mt-20 sm:mt-7">
          Discover Your Perfect Pair
        </p>
        <div className="flex gap-6  pt-32 sm:pt-4">
          <button className="bg-red-400 hover:bg-red-600  text-white rounded-md  px-4 py-2 ">
            Shop Now
          </button>
          <button className="border border-red-700 hover:bg-red-400 text-white rounded-md px-4 py-2  ">
            Explore Collections
          </button>
        </div>
      </div>
    </section>
  );
}
