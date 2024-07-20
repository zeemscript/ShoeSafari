"use client";

import { useState } from "react";
import { login, loginWithGoogle } from "../../../lib/auth";
import { getFirebaseErrorMessage } from "../../../lib/errorMessages";
import Toast from "../../../components/Toast";
import Image from "next/image";
import shoe1 from "../../../public/images/welcomeshoesafari.png";

const Login = () => {
  const [toast, setToast] = useState({ show: false, message: "" });
  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 5000);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
       setEmail("");
       setPassword("");
      showToast("Logged in successfully");
    } catch (err) {
      showToast(getFirebaseErrorMessage(err.code));
    }
  };
    const handleGoogleLogin = async () => {
      try {
        await loginWithGoogle();
        alert("User logged in with Google successfully");
      } catch (err) {
      showToast(err.message);
      }
    };

  return (
    <section className="px-4 md:px-10 bg-white py-12 flex items-center justify-center">
      <div className="flex flex-wrap justify-center md:justify-between items-center w-full max-w-4xl">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 md:pr-8">
          <Image
            src={shoe1}
            alt="Shoe Image"
            width={400}
            height={350}
            className="shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter your email"
                  aria-label="Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-6">
              <button
                onClick={handleGoogleLogin}
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toast
        message={toast.message}
        show={toast.show}
        onClose={() => setToast({ show: false, message: "" })}
      />
    </section>
  );
};

export default Login;
