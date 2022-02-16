import Navbar from "../navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen overflow-y-hidden bg-orange-100 ">
      <Navbar></Navbar>
      <div className="flex h-full">
        <div className="w-1/3">{children}</div>
        <div className="w-2/3  bg-[url('../public/assets/images/Team.png')]"></div>
      </div>
    </div>
  );
};

export default Layout;
