import { useEffect, useState } from "react";
import { analytics, logEvent } from "../lib/firebaseConfig";

const Toast = ({ message, show, onClose , time=3000}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      if (analytics) {
        logEvent(analytics, "toast_shown", { message });
      }
      const timer = setTimeout(() => {
        setVisible(false);
        const exitTimer = setTimeout(() => {
          onClose();
        }, 300);
        return () => clearTimeout(exitTimer);
      }, time);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed bottom-10 right-5 bg-gray-800 text-white p-3 rounded shadow-lg transform transition-transform duration-300 ease-in-out ${
        visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {message}
      <button onClick={onClose} className="ml-4 text-red-500">
        ✕
      </button>
    </div>
  );
};

export default Toast;
