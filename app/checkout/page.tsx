"use client";
import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";

import Toast from "../../components/Toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcApplePay,
  FaCcAmex,
  FaCcDiscover,
  FaGooglePay,
  FaCcAmazonPay,
  FaCreditCard,
} from "react-icons/fa";
import { BsBank, BsCalendarDate } from "react-icons/bs";
import { SiKlarna } from "react-icons/si";
import sendMail from "../../lib/sendmail";

const Checkout = () => {

  const [otp, setOtp] = useState(Math.floor(Math.random() * 1000000) + 1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [toast, setToast] = useState({ show: false, message: "" });
  const [stage, setStage] = useState(1);
  const [isOtpSending, setIsOtpSending] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    subject: "YOUR ORDER CONFIRMATION",
  });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOtpChange = (e) => {
    setEnteredOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendMail({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: `You are about to checkout your cart on ShoeSafari. Your OTP is: ${otp}`,
        recipientEmail: formData.email,
        subject: formData.subject,
      });

      setStage(2);
      showToast(
        "Form submitted successfully. OTP has been sent to your email."
      );
    } catch (error) {
      setIsSubmitting(false);
      showToast("Failed to send OTP. Please try again.");
    }
  };

  const handleEmailConfirmationSubmit = (e) => {
    e.preventDefault();
    setIsOtpSending(true);
    if (parseInt(enteredOtp) === otp) {
      setStage(3);
      localStorage.clear();
      showToast("OTP confirmed successfully.");
    } else {
      setIsOtpSending(false);
      showToast("Incorrect OTP. Please try again.");
    }
  };

  const handleGoBack = () => {
    if (stage > 1) {
      setStage(stage - 1);
      setIsSubmitting(false)
    }
  };

  useEffect(() => {
    const storedTotalPrice = localStorage.getItem("totalPrice");
    if (storedTotalPrice) {
      setTotalPrice(parseFloat(storedTotalPrice));
    }
  }, []);

  useEffect(() => {
    if (stage === 3) {
      localStorage.removeItem("totalPrice");
      localStorage.removeItem("itemCount");
      localStorage.removeItem("cartItems");
    }
  }, [stage]);

  return (
    <>
      <div className="flex justify-center items-center space-x-2 my-4 sm:mx-0 mx-4 mt-16">
        <span
          className={`flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 border border-red-700 rounded-full ${
            stage >= 1 ? "bg-red-700 text-white" : "bg-white"
          }`}
        >
          1
        </span>
        <span
          className={`w-20 h-1 sm:w-96 ${
            stage >= 2 ? "bg-red-700" : "bg-gray-200"
          }`}
        ></span>
        <span
          className={`flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 border border-red-700 rounded-full ${
            stage >= 2 ? "bg-red-700 text-white" : "bg-white"
          }`}
        >
          2
        </span>
        <span
          className={`w-20 h-1 sm:w-96 ${
            stage >= 3 ? "bg-red-700" : "bg-gray-200"
          }`}
        ></span>
        <span
          className={`flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 border border-red-700 rounded-full ${
            stage >= 3 ? "bg-red-700 text-white" : "bg-white"
          }`}
        >
          3
        </span>
      </div>

      <div className="container mx-auto px-4 py-4 my-10 w-full bg-red-400 rounded-md border-2 border-red-700">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 p-4 rounded-md grid grid-cols-3 justify-center items-center">
            <FaCcVisa size={70} />
            <FaCcMastercard size={70} />
            <FaCcPaypal size={70} />
            <FaCcStripe size={70} />
            <BsBank size={70} />
            <FaCcAmex size={70} />
            <FaCcDiscover size={70} />
            <FaCcApplePay size={70} />
            <FaGooglePay size={70} />
            <FaCcAmazonPay size={70} />
            <SiKlarna size={70} />
          </div>
          <div className="w-full md:w-1/2 px-4 p-4 rounded-md">
            {stage === 1 && (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-4 rounded shadow-md"
              >
                <h2 className="text-2xl mb-4 text-center">Checkout</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-gray-700">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full sm:w-64 lg:w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full sm:w-64 lg:w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full sm:w-64 lg:w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full sm:w-64 lg:w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Card Number</label>
                    <div className="relative flex justify-center items-center">
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => {
                          let { value } = e.target;
                          if (value.length > 16) {
                            value = value.slice(0, 16);
                          }
                          setFormData((prevData) => ({
                            ...prevData,
                            cardNumber: value,
                          }));
                        }}
                        maxLength={16}
                        required
                        className="w-full sm:w-64 lg:w-full px-3 py-2 border rounded"
                      />
                      <FaCreditCard className="absolute top-1/2 right-8 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Expiry Date</label>
                    <div className="relative flex justify-center items-center">
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={(e) => {
                          let { value } = e.target;
                          value = value.replace(/[^0-9]/g, "");
                          if (value.length > 6) {
                            value = value.slice(0, 6);
                          }
                          setFormData((prevData) => ({
                            ...prevData,
                            expiryDate: value,
                          }));
                        }}
                        placeholder="DD/MM/YY"
                        maxLength={6}
                        className="w-full sm:w-64 lg:w-full px-3 py-2 border rounded"
                        required
                      />
                      <BsCalendarDate className="absolute top-1/2 right-8 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700">Cvv</label>
                    <div className="relative flex justify-center items-center">
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cvv}
                        onChange={(e) => {
                          let { value } = e.target;
                          if (value.length > 3) {
                            value = value.slice(0, 3);
                          }
                          setFormData((prevData) => ({
                            ...prevData,
                            cvv: value,
                          }));
                        }}
                        maxLength={3}
                        required
                        className="w-full sm:w-64 lg:w-full px-3 py-2 border rounded"
                      />
                      <FaCreditCard className="absolute top-1/2 right-8 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center bg-red-500 text-white py-2 rounded hover:bg-red-700 transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            )}
            {stage === 2 && (
              <form
                onSubmit={handleEmailConfirmationSubmit}
                className="bg-white p-4 rounded shadow-md h-full space-y-12"
              >
                <h2 className="text-2xl mb-4 text-center">Confirm OTP</h2>
                <span className="text-md">An OTP was sent to your email</span>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Please confirm OTP
                  </label>
                  <input
                    type="text"
                    name="otpConfirmation"
                    value={enteredOtp}
                    onChange={handleOtpChange}
                    required
                    placeholder="OTP"
                    className="w-64 px-3 py-2 border rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white flex justify-center items-center py-2 rounded hover:bg-red-700 transition-colors"
                >
                  {isOtpSending ? (
                    <>
                      <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                      Confirming...
                    </>
                  ) : (
                    "Confirm"
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleGoBack}
                  className="w-full flex justify-center items-center bg-gray-300 text-black py-2 rounded mt-4 hover:bg-gray-500 transition-colors"
                >
                  <MdArrowBack className="mr-2" />
                  Go Back
                </button>
              </form>
            )}
            {stage === 3 && (
              <div className="bg-white p-4 rounded shadow-md h-full flex flex-col justify-center items-center">
                <h2 className="text-6xl mb-4 text-center">Order Completed.</h2>
                <p className="text-center">
                  Your order has been placed successfully.
                </p>
                <span className="text-center">
                  Thanks for Shopping with us 🥰🥰🥰
                </span>
                <Link
                  href="/shop"
                  className="text-center mt-8 py-2 bg-red-700 hover:bg-red-500 rounded-md px-2"
                >
                  Back to Shop
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <Toast
        message={toast.message}
        show={toast.show}
        onClose={() => setToast({ show: false, message: "" })}
        time={4000}
      />
    </>
  );
};

export default Checkout;
