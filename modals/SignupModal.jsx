import React from "react";

const SignupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded shadow-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          className="mb-4 p-2 border w-full"
        />
        <input
          type="email"
          placeholder="Email"
          className="mb-4 p-2 border w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border w-full"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
          Sign Up
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SignupModal;
