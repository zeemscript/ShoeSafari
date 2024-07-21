import { useState } from "react";

function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 bg-gradient-to-t from-indigo-500">
      <div className="bg-white rounded-lg shadow-lg w-1/2 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
