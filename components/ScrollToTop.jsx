"use client"
import { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full bg-red-600 text-white shadow-md hover:bg-red-700  transition-all duration-300"
        >
          <FaAngleDoubleUp  size={24} className="hover:animate-bounce"/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
