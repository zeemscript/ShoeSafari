"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "/public/images/shoelogoo.png";
import { useAuth } from "../lib/AuthContext";
import { logout } from "../lib/auth";
import Toast from "../components/Toast";
import { useRouter } from "next/navigation";
import { TfiAngleRight } from "react-icons/tfi";function Navbar() {
  const router = useRouter();
  const [toast, setToast] = useState({ show: false, message: "" });
  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  const [showNav, setShowNav] = useState(false);
  const { user } = useAuth();

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const closeNavOnClick = () => {
    setShowNav(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.clear();
      router.push("/");
      showToast("Logged out successfully");
    } catch (error) {
      showToast(error.message);
    }
  };

  const handleProtectedLinkClick = (e, path) => {
    if (!user) {
      e.preventDefault();
      closeNavOnClick()
      showToast("Kindly login first");
      router.push("/profile/login");
    } else {
       e.preventDefault();
      closeNavOnClick()
      router.push(path);
    }
  };

  return (
    <>
      <nav className="bg-white h-fit">
        <div className="px-3 sm:px-6 py-2 hidden md:flex justify-between items-center">
          <Image src={logo} alt="shoesafari logo" className="w-20" />
          <div className="hidden md:flex md:gap-6">
            <Link
              href="/"
              className="text-md font-light hover:font-normal text-black hover:text-red-500 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href={user ? "/mainapp" : "#"}
              className="text-md font-light hover:font-normal text-black hover:text-red-500 transition-colors duration-200"
              onClick={(e) => handleProtectedLinkClick(e, "/mainapp")}
            >
              Shop
            </Link>
            <Link
              href={user ? "/mainapp/shop" : "#"}
              className="text-md font-light hover:font-normal text-black hover:text-red-500 transition-colors duration-200"
              onClick={(e) => handleProtectedLinkClick(e, "/mainapp/shop")}
            >
              Collections
            </Link>
            <Link
              href="/fjnjhbshb"
              className="text-md font-light hover:font-normal text-black hover:text-red-500 transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="text-md font-light hover:font-normal text-black hover:text-red-500 transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="text-md font-light hover:font-normal text-black hover:text-red-500 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            {user ? (
              <>
                <div className="flex items-center gap-2">
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt={user.displayName}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                  )}
                  <span className="text-md font-light text-black">
                    {user.displayName}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="font-normal bg-red-700 hover:bg-red-500 rounded-md px-4 py-2 text-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/profile/login">
                  <button className="font-normal bg-red-700 hover:bg-red-500 rounded-md px-4 py-2 text-md">
                    Login
                  </button>
                </Link>
                <Link href="/profile/signup">
                  <button className="font-normal border border-red-500 hover:bg-red-700 transition ease-out delay-75 rounded-md px-4 py-2 text-md">
                    SignUp
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
        {/* mobile menu */}
        <div className="flex md:hidden justify-between items-center px-3 sm:px-6">
          <Image src={logo} alt="shoesafari logo" className="w-20" />
          {showNav ? (
            <AiOutlineClose className="w-10 h-9 pr-2" onClick={toggleNav} />
          ) : (
            <AiOutlineMenu className="w-10 h-9 pr-2" onClick={toggleNav} />
          )}
        </div>
        {showNav && (
          <div className="fixed inset-y-0 right-0 w-1/2 h-screen bg-white flex flex-col items-center py-6 z-50 shadow-lg">
            <button className="self-end mr-4 mb-4" onClick={toggleNav}>
              <AiOutlineClose className="w-8 h-10" />
            </button>
            <div className="w-full divide-y-2 divide-dashed divide-red-700">
              <Link
                href="/"
                className="text-md  font-light hover:font-normal flex justify-between items-center text-black hover:text-red-500 transition-colors duration-200 py-2 w-full pr-4"
                onClick={closeNavOnClick}
              >
                
                <span className="pl-2">Home</span>
                <TfiAngleRight size={20}/>
              </Link>
              <Link
                href={user ? "/mainapp" : "#"}
                className="text-md font-light hover:font-normal flex justify-between items-center text-black hover:text-red-500 transition-colors duration-200 py-2 w-full pr-4"
                onClick={(e) => handleProtectedLinkClick(e, "/mainapp")}
              >
                <span className="pl-2">Shop</span>
                <TfiAngleRight size={20} />
              </Link>
              <Link
                href={user ? "/mainapp/shop" : "#"}
                className="text-md font-light hover:font-normal flex justify-between items-center text-black hover:text-red-500 transition-colors duration-200 py-2 w-full pr-4"
                onClick={(e) => handleProtectedLinkClick(e, "/mainapp/shop")}
              >
                <span className="pl-2">Collections</span>
                <TfiAngleRight size={20} className="font-thin" />
              </Link>
              <Link
                href="/ejejhbhj"
                className="text-md font-light hover:font-normal flex justify-between items-center text-black hover:text-red-500 transition-colors duration-200 py-2 w-full pr-4"
                onClick={closeNavOnClick}
              >
                <span className="pl-2">About Us</span>
                <TfiAngleRight size={20} />
              </Link>
              <Link
                href="/blog"
                className="text-md font-light hover:font-normal flex justify-between items-center text-black hover:text-red-500 transition-colors duration-200 py-2 w-full pr-4"
                onClick={closeNavOnClick}
              >
                <span className="pl-2">Blog</span>
                <TfiAngleRight size={20} />
              </Link>
              <Link
                href="/"
                className="text-md font-light hover:font-normal flex justify-between items-center text-black hover:text-red-500 transition-colors duration-200 py-2 w-full pr-4"
                onClick={closeNavOnClick}
              >
                <span className="pl-2">Contact Us</span>
                <TfiAngleRight size={20} />
              </Link>
            </div>
            <div className="flex flex-col gap-4 text-center mt-8">
              {user ? (
                <>
                  <div className="flex items-center gap-2 mx-2">
                    {user.photoURL ? (
                      <Image
                        src={user.photoURL}
                        alt={user.displayName}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-200" />
                    )}
                    <span className="text-sm font-light text-black">
                      {user.displayName}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      closeNavOnClick();
                    }}
                    className="font-normal bg-red-700 hover:bg-red-500 rounded-md px-4 py-2 text-md"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/profile/login" onClick={closeNavOnClick}>
                    <button className="font-normal bg-red-700 hover:bg-red-500 rounded-md px-4 py-2 text-md">
                      Login
                    </button>
                  </Link>
                  <Link href="/profile/signup" onClick={closeNavOnClick}>
                    <button className="font-normal border border-red-500 hover:bg-red-700 transition ease-out delay-75 rounded-md px-4 py-2 text-md">
                      SignUp
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}

        <Toast
          message={toast.message}
          show={toast.show}
          onClose={() => setToast({ show: false, message: "" })}
        />
      </nav>
    </>
  );
}

export default Navbar;
