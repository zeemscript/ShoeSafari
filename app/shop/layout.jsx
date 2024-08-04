"use client";
import "/styles/global.css";
import Sidebar from "/components/Sidebar";
import { CartProvider } from "../../context/CartContext";
const Layout = ({ children }) => {
  
  return (
    <div className="flex">
      <Sidebar />
      <CartProvider>
        <main className="flex-grow px-5 sm:px-3">{children}</main>
      </CartProvider>
    </div>
  );
};

export default Layout;
