// pages/404.js
import Link from "next/link";
import Image from "next/image";
// import errorImage from "../public/images/error.png"; // Replace with your own image path

const Custom404 = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 ">
      <div className="flex flex-col items-center">
        {/* <Image
          src={errorImage}
          alt="404 Error"
          width={500}
          height={500}
          className="mb-8"
        /> */}
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <Link href="/"
          className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition">
            Go to Homepage
      
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
