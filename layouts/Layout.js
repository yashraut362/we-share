import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full overflow-y-hidden">
      <Navbar></Navbar>
      <div className="flex h-full items-center justify-center md:justify-start">
        <div className="w-1/3">{children}</div>
        <div className="w-2/3  bg-team"></div>
      </div>
    </div>
  );
};

export default Layout;
