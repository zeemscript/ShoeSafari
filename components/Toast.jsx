import { useEffect } from "react";

const Toast = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5  bg-gray-800 text-white p-3 rounded shadow-lg transition transform ease-in-out duration-300">
      {message}
      <button onClick={onClose} className="ml-4 text-red-500">
        ✕
      </button>
    </div>
  );
};

export default Toast;
