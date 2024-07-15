"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "/public/images/shoelogoo.png";

function Navbar() {
  const [showNav, setShownav] = useState(false);

  const toggleNav = () => {
    setShownav(!showNav);
  };

  const closeNavOnClick = () => {
    setShownav(false);
  };

  return (
    <>
      <nav className="bg-white h-fit">
        {/* Medium and large screen navbar content */}
        <div className="px-3 sm:px-6 py-2 hidden md:flex justify-between items-center">
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
        <input type="text" placeholder={<AiOutlineSearch/>} />
          </div>
          <div className="flex gap-4 text-center">
            <button className="font-normal bg-red-700 hover:bg-red-500 rounded-md px-4 py-2 text-md">
              Login
            </button>
            <button className="font-normal border border-red-500 hover:bg-red-700 transition ease-out delay-75 rounded-md px-4 py-2 text-md">
              SignUp
            </button>
          </div>
        </div>
        {/* Mobile screen navbar content */}
        <div className="flex md:hidden justify-between items-center px-3 sm:px-6 py-2">
          <Image src={logo} alt="shoesafari logo" className="w-20" />
          {showNav ? (
            <AiOutlineClose className="w-10 h-9 pr-2" onClick={toggleNav} />
          ) : (
            <AiOutlineMenu className="w-10 h-9 pr-2" onClick={toggleNav} />
          )}
        </div>
        {/* Conditional rendering for the mobile menu */}
        {showNav && (
          <div className="fixed inset-y-0 right-0 w-1/2 h-screen bg-white flex flex-col items-center py-8 z-50 shadow-lg">
            <button className="self-end mr-4 mb-4" onClick={toggleNav}>
              <AiOutlineClose className="w-8 h-10" />
            </button>
            <div className="w-full divide-y-2 divide-dashed divide-red-700">
              <Link
                href="/"
                className="text-md font-light hover:font-normal py-2 block w-full text-center"
                onClick={closeNavOnClick}
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-md font-light hover:font-normal py-2 block w-full text-center"
                onClick={closeNavOnClick}
              >
                Shop
              </Link>
              <Link
                href="/"
                className="text-md font-light hover:font-normal py-2 block w-full text-center"
                onClick={closeNavOnClick}
              >
                Collections
              </Link>
              <Link
                href="/"
                className="text-md font-light hover:font-normal py-2 block w-full text-center"
                onClick={closeNavOnClick}
              >
                About Us
              </Link>
              <Link
                href="/"
                className="text-md font-light hover:font-normal py-2 block w-full text-center"
                onClick={closeNavOnClick}
              >
                Blog
              </Link>
              <Link
                href="/"
                className="text-md font-light hover:font-normal py-2 block w-full text-center"
                onClick={closeNavOnClick}
              >
                Contact Us
              </Link>
            </div>
            <div className="flex flex-row gap-4 text-center mt-8 mx-4">
              <button className="font-normal bg-red-700 hover:text-white rounded-md px-4 py-2 text-md">
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
