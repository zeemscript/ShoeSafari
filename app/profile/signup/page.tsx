"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup, loginWithGoogle } from "../../../lib/auth";
import Toast from "../../../components/Toast";
import Image from "next/image";
import welcomeimg from "../../../public/images/welcomeshoesafari.png";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";
import sendMail from "../../../lib/sendmail";

const Signup = () => {
  const OTP = Math.floor(Math.random() * 1000000) + 1;
  const [toast, setToast] = useState({ show: false, message: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const router = useRouter();

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 5000);
  };

  const sendOtp = async (email, otp) => {
    sendMail({
      message: `Your OTP is ${otp}`,
      recipientEmail: email,
      subject: "CONFIRMATION Email OTP",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      showToast("Passwords do not match");
      return;
    }
    setIsSigningUp(true);
    try {
      const generatedOtp = Math.floor(Math.random() * 1000000) + 1;
      setGeneratedOtp(generatedOtp.toString());
      await sendOtp(email, generatedOtp);
      setIsOtpSent(true);
      showToast("OTP sent to your email");
    } catch (err) {
      console.error("Error sending OTP:", err);
      showToast("Failed to send OTP");
    } finally {
      setIsSigningUp(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (otp != generatedOtp) {
      showToast("Invalid OTP");
      return;
    }
    try {
      await signup(email, password);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      showToast("User created successfully");
      router.push("/shop");
    } catch (err) {
      console.error("Signup error:", err);
      showToast(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      showToast("User logged in with Google successfully");
      router.push("/shop");
    } catch (err) {
      console.error("Google login error:", err);
      showToast(err.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <section className="px-4 md:px-10 bg-white py-12 flex items-center justify-center">
      <div className="flex flex-wrap justify-center md:justify-between items-center w-full max-w-4xl">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 md:pr-8">
          <Image
            src={welcomeimg}
            alt="Shoe Image"
            width={400}
            height={350}
            className="shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {isOtpSent ? "Confirm OTP" : "Create account"}
            </h2>
            {isOtpSent ? (
              <form onSubmit={handleOtpSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="otp"
                    className="block text-sm font-medium text-gray-700"
                  >
                    OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter OTP"
                    aria-label="OTP"
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
                        Verifying OTP...
                      </>
                    ) : (
                      "Verify OTP"
                    )}
                  </button>
                </div>
              </form>
            ) : (
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
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center pt-6 text-gray-500"
                  >
                    {showPassword ? (
                      <FaRegEyeSlash size={20} />
                    ) : (
                      <FaRegEye size={20} />
                    )}
                  </button>
                </div>
                <div className="relative">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    autoComplete="none"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center pt-6 text-gray-500"
                  >
                    {showConfirmPassword ? (
                      <FaRegEyeSlash size={20} />
                    ) : (
                      <FaRegEye size={20} />
                    )}
                  </button>
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
            )}
            <span className="flex justify-center items-center py-2">Or</span>
            <div className="flex justify-center items-center">
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center bg-red-600 text-white 
                py-2 px-4 rounded-md shadow-sm hover:bg-red-700 focus:outline-none 
                focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <FcGoogle size={28} />
                <span className="flex-grow text-center">
                  Continue with Google
                </span>
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
