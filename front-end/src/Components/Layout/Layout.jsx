import Message from "../Message/Message";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
