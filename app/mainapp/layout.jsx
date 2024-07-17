// components/Layout.js or components/Layout.tsx
import "/styles/global.css"; // Adjust this path if necessary
import Sidebar from "/components/Sidebar"; // Adjust this path according to your project structure

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
