import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold">SHOESAFARI</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/" className="block p-4 hover:bg-gray-700">Home
            </Link>
          </li>
          <li>
            <Link href="/about"
             className="block p-4 hover:bg-gray-700">About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block p-4 hover:bg-gray-700">Contact
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
