import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaShoppingCart,
  FaRunning,
  FaList,
  FaUser,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white text-gray-700 flex-shrink-0  hidden sm:block">
      <nav className="divide-y divide-gray-200">
        <ul className="px-5 py-6 space-y-2">
          <li>
            <input
              type="text"
              className="w-full bg-gray-100 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500"
              placeholder="Search for your shoes"
            />
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              <FaHome className="mr-3" />
              Men
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              <FaInfoCircle className="mr-3" />
              Women
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              <FaPhone className="mr-3" />
              Kids
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              <FaShoppingCart className="mr-3" />
              Casual
            </Link>
          </li>
          <li>
            <Link
              href="/collections"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              <FaRunning className="mr-3" />
              Sport
            </Link>
          </li>
          <li>
            <Link
              href="/categories"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              <FaList className="mr-3" />
              Categories
            </Link>
          </li>
         
        </ul>
      </nav>
    </aside>
  );
}
