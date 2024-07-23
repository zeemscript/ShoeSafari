"use client";
import { useState } from "react";
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
} from "react-icons/fa";
import { BsBank, BsCalendarDate } from "react-icons/bs";
import { SiKlarna } from "react-icons/si";

const Checkout = () => {
  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStage(2);
    console.log("Form submitted", formData);
  };

  const handleEmailConfirmationSubmit = (e) => {
    e.preventDefault();
    setStage(3);
    console.log("Email confirmed");
  };

  return (
    <>
      {/* Form percentage checker */}
      <div className="flex justify-center items-center space-x-2 my-4 mx-4 sm:mx-0">
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

      {/* Form */}
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
                    <input
                      type="number"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                      className="w-full sm:w-64 lg:w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div className="mb-4 ">
                    <label className="block text-gray-700">Expiry Date</label>
                    <div className="relative flex justify-center items-center">
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        placeholder="DD/MM/YY"
                        className="w-full sm:w-64 lg:w-full px-3 py-2 border rounded"
                        required
                      />
                      <BsCalendarDate className="absolute top-1/2 right-8 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">CVV</label>
                    <input
                      type="number"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                      className="w-full sm:w-64 lg:w-full px-3 py-2 border rounded"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-700 transition-colors"
                >
                  Submit
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
                    Please confirm Otp
                  </label>
                  <input
                    type="number"
                    name="emailConfirmation"
                    // value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="otp"
                    className="w-64 px-3 py-2 border rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-700 transition-colors"
                >
                  Confirm
                </button>
              </form>
            )}
            {stage === 3 && (
              <div className="bg-white p-4 rounded shadow-md h-full flex flex-col justify-center items-center">
                <h2 className="text-2xl mb-4 text-center">Thank You!</h2>
                <p className="text-center">
                  Your order has been placed successfully.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
