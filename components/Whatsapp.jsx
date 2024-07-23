import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
const goWhatsapp = () => {
    alert("You clicked me")
}
const Whatsapp = () => {
  return (
    <div className="fixed top-[75vh] right-4">
      <button className="p-2 rounded-full bg-red-600 text-white shadow-md hover:bg-red-700  transition-all duration-300">
        <Link href="https://wa.me/2349065165097" target="_blank">
          <FaWhatsapp size={24} />
        </Link>
      </button>
    </div>
  );
};

export default Whatsapp;
