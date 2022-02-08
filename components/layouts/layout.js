import Navbar from "../navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen overflow-y-hidden bg-white">
      <Navbar></Navbar>
      <div className="flex h-full">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
