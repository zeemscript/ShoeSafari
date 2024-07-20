
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className=" bg-error-image bg-center bg-cover flex flex-col justify-center items-center bg-gray-100 h-[80vh]">
      <div className="flex flex-col items-center">
        <Link
          href="/"
          className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition mt-80"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
