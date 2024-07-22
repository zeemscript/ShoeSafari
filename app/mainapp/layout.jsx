"use client";
import "/styles/global.css";
import { useState, useEffect } from "react";
import Sidebar from "/components/Sidebar";

const Layout = ({ children }) => {
 
  return (
    <div className="flex">
      <Sidebar />
      {/* <Cart itemCount={itemCount} onClick={openModal} /> */}
      <main className="flex-grow px-5 sm:px-3">{children}</main>

      
    </div>
  );
};

export default Layout;
