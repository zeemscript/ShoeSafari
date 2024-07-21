"use client"
import "/styles/global.css";
import Sidebar from "/components/Sidebar"; 

const Layout = ({ children }) => {
  return (
  
      <div className="flex">
        <Sidebar />
        <main className="flex-grow px-5 sm:px-3">{children}</main>
      </div>

  );
};

export default Layout;
