"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toast, setToast] = useState({ show: false, message: "" });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.sendForm(
        "service_k4ccfbp",
        "template_gxfpa56",
        form.current,
        "pfpa-BHAVDMTtEYcc"
      );
      showToast("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      setError("Failed to send message.");
    }
    setIsLoading(false);
  };

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 5000);
  };

  return (
    <div className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 flex flex-col items-center py-12 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-red-700">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          We would love to hear from you! Please fill out the form below and we
          will get back to you as soon as possible.
        </p>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>

      {toast.show && (
        <div className="fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded shadow-lg transition-transform transform translate-y-0 ease-in-out duration-300">
          {toast.message}
          <button
            onClick={() => setToast({ show: false, message: "" })}
            className="ml-4 text-red-500"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
