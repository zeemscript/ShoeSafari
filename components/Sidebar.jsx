import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex h-[72vh] divide-y-8">
      <aside className="w-64 bg-white  text-red-500 flex-shrink-0">
        <div className="p-4">
          <h1 className="text-2xl font-bold">SHOESAFARI</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/" className="block p-4 hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block p-4 hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block p-4 hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
