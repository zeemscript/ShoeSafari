import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaShoppingCart,
  FaShoePrints,
} from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white text-gray-700 flex-shrink-0 shadow-lg h-[75vh] hidden sm:block ">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-red-500">SHOESAFARI</h1>
      </div>
      <nav className="divide-y divide-gray-200">
        <ul>
          <li>
            <Link
              href="/"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              <FaHome className="mr-3" /> Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              <FaInfoCircle className="mr-3" /> About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              <FaPhone className="mr-3" /> Contact
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              <FaShoppingCart className="mr-3" /> Shop
            </Link>
          </li>
          <li>
            <Link
              href="/collections"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              <FaShoePrints className="mr-3" /> Collections
            </Link>
          </li>
          <li>
            <Link
              href="/categories"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              <GiRunningShoe className="mr-3" /> Categories
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              <IoMdContact className="mr-3" /> Profile
            </Link>
          </li>
        
        </ul>
      </nav>
    </aside>
  );
}
