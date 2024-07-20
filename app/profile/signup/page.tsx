"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup, loginWithGoogle } from "../../../lib/auth";
import Toast from "../../../components/Toast";
import Image from "next/image";
import shoe1 from "../../../public/images/welcomeshoesafari.png";
import googleimg from "../../../public/images/google.png"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";

const Signup = () => {
  const [toast, setToast] = useState({ show: false, message: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const router = useRouter();

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSigningUp(true);
    try {
      await signup(email, password);
      setEmail("");
      setPassword("");
      showToast("User created successfully");
      router.push("/mainapp");
    } catch (err) {
      console.error("Signup error:", err); // Add this line for debugging
      showToast(err.message);
    } finally {
      setIsSigningUp(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      showToast("User logged in with Google successfully");
      router.push("/mainapp");
    } catch (err) {
      console.error("Google login error:", err); // Add this line for debugging
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Create account
            </h2>
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
                  disabled={isSigningUp}
                >
                  {isSigningUp ? (
                    <>
                      <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                      Signing up...
                    </>
                  ) : (
                    "Signup"
                  )}
                </button>
              </div>
            </form>
            <span className="flex justify-center items-center py-2">Or</span>
            <div className="flex justify-center items-center">
              <button
                onClick={handleGoogleLogin}
                className="w-full bg-red-600 flex justify-center items-center text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <Image
                  alt="Google logo"
                  src={googleimg}
                  width={24}
                  height={24}
                  className="pr-2"
                />
                Continue with Google
              </button>
            </div>
            <div className="mt-4 text-center text-gray-700">
              Already have an account ?<br />
              <Link
                href="/profile/login"
                className="font-serif hover:text-red-700 hover:underline"
              >
                Login to your account
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

export default Signup;
