"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import logo from "/public/images/shoelogoo.png";

function Navbar() {
  const [showNav, setShownav] = useState(false);

  const toggleNav = (event: React.MouseEvent<SVGElement, MouseEvent>): void => {
    setShownav(!showNav);
  };

  return (
    <>
      <nav className="bg-white h-fit">
        {/* Medium and large screen navbar content */}
        <div className="px-3 sm:px-6 py-2 hidden sm:flex justify-between items-center">
          <Image src={logo} alt="shoesafari logo" className="w-20" />
          <div className="hidden md:flex md:gap-6">
            <Link href="/" className="text-md font-light hover:font-normal">
              Home
            </Link>
            <Link href="/" className="text-md font-light hover:font-normal">
              Shop
            </Link>
            <Link href="/" className="text-md font-light hover:font-normal">
              Collections
            </Link>
            <Link href="/" className="text-md font-light hover:font-normal">
              About Us
            </Link>
            <Link href="/" className="text-md font-light hover:font-normal">
              Blog
            </Link>
            <Link href="/" className="text-md font-light hover:font-normal">
              Contact Us
            </Link>
          </div>
          <div className="flex gap-4 text-center">
            <button className="font-semibold bg-red-700 hover:bg-red-500 rounded-md px-4 py-2 text-md">
              Login
            </button>
            <button className="font-semibold border border-red-500 hover:bg-red-700 transition ease-out delay-75 rounded-md px-4 py-2 text-md">
              SignUp
            </button>
          </div>
        </div>
        {/* Mobile screen navbar content */}
        <div className="flex sm:hidden justify-between items-center px-3 sm:px-6">
          <Image src={logo} alt="shoesafari logo" className="w-20" />
          {showNav ? (
            <AiOutlineClose className="w-10 h-9 pr-2" onClick={toggleNav} />
          ) : (
            <AiOutlineMenu className="w-10 h-9 pr-2" onClick={toggleNav} />
          )}
        </div>
        {/* Conditional rendering for the mobile menu */}
        {showNav && (
          <div className="sm:hidden flex flex-col items-center bg-white py-2">
            <Link
              href="/"
              className="text-xl font-thin hover:font-normal py-1"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-xl font-thin hover:font-normal py-1"
            >
              Shop
            </Link>
            <Link
              href="/"
              className="text-xl font-thin hover:font-normal py-1"
            >
              Collections
            </Link>
            <Link
              href="/"
              className="text-xl font-thin hover:font-normal py-1"
            >
              About Us
            </Link>
            <Link
              href="/"
              className="text-xl font-thin hover:font-normal py-1"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="text-xl font-thin hover:font-normal py-1"
            >
              Contact Us
            </Link>
            <div className="flex gap-4 text-center mt-2">
              <button className="font-normL bg-red-700 hover:text-white rounded-md px-4 py-2 text-md">
                Login
              </button>
              <button className="font-normal border border-red-500 hover:bg-red-700 transition ease-out delay-75 rounded-md px-4 py-2 text-md">
                SignUp
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
