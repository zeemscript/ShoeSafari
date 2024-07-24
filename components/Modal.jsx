import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-2xl p-6 relative mx-2 max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-4 text-gray-500 hover:text-gray-700"
        >
          <ImCancelCircle size={25}
            className="text-red-700"
          />
        </button>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
