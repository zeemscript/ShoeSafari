import { FaShoppingCart } from "react-icons/fa";

const Cart = ({ itemCount, onClick }) => {
  return (
    <div className="fixed bottom-4 left-4">
      <button
        className="relative p-2 rounded-full bg-red-500 text-white shadow-md hover:bg-red-700 transition-all duration-300"
        onClick={onClick}
      >
        <FaShoppingCart size={24} className="relative z-10" />
        {itemCount > 0 && (
          <span className="absolute -top-2 animate-bounce right-0 flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-600 rounded-full">
            {itemCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default Cart;
