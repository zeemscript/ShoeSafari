import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white text-gray-700 flex-shrink-0 shadow-lg h-[75vh] hidden sm:block ">
      <nav className="divide-y divide-gray-200">
        <ul className="pl-5">
          <input
            type="text"
            className="bg-red-600 rounded-lg border border-black px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 placeholder-red-100"
          placeholder="search for your shoes"
          />
          <li>
            <Link
              href="/"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              Kids
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              Casual
            </Link>
          </li>
          <li>
            <Link
              href="/collections"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              Sport
            </Link>
          </li>
          <li>
            <Link
              href="/categories"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="flex items-center p-4 hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
