"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login, loginWithGoogle } from "../../../lib/auth";
import Toast from "../../../components/Toast";
import Image from "next/image";
import shoe1 from "../../../public/images/welcomeshoesafari.png";
import googleimg from "../../../public/images/google.png";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Login = () => {
  const [toast, setToast] = useState({ show: false, message: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const router = useRouter();

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    try {
      await login(email, password);
      setEmail("");
      setPassword("");
      showToast("Logged in successfully");
      router.push("/mainapp");
    } catch (err) {
      console.error("Login error:", err);
      showToast(err.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      showToast("User logged in with Google successfully");
      router.push("/mainapp");
    } catch (err) {
      console.error("Google login error:", err);
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
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex items-center justify-center"
                  disabled={isLoggingIn}
                >
                  {isLoggingIn ? (
                    <>
                      <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                      Logging in...
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
            <span className="flex justify-center items-center py-2">Or</span>
            <div className=" flex justify-center items-center">
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center
                 bg-red-600 text-white py-2 px-4 rounded-md shadow-sm
                  hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                   focus:ring-red-500"
              >
                <Image
                  src={googleimg}
                  alt="Google logo"
                  width={24}
                  height={24}
                  className="pr-2"
                />
                Continue with Google
              </button>
            </div>
            <div className="mt-4 text-center text-gray-700">
              Dont have an account ?<br />
              <Link
                href="/modals/signup"
                className="font-serif hover:text-red-700 hover:underline"
              >
                Create an account
              </Link>
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
