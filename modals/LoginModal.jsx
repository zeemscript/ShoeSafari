import React from "react";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-red-600 bg-opacity-75  flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl mb-4">Login</h2>
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
          Login
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
