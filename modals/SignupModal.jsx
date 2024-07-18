"use client";
import { AiOutlineClose } from "react-icons/ai";

export default function SignupModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup form submitted");
  };

  return (
    <>
      {/* Mobile Version */}
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 md:hidden">
        <div className="bg-white rounded-lg shadow-lg w-11/12">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Sign Up</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 w-8 h-8 flex items-center justify-center"
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between py-4">
                <button
                  type="submit"
                  className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Medium and Large Screen Version */}
      <div className="fixed inset-0 hidden md:flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg shadow-lg w-1/3">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Sign Up</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 w-10 h-10"
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between py-4">
                <button
                  type="submit"
                  className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
