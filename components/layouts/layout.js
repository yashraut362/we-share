import Navbar from "../navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen overflow-y-hidden bg-slate-100">
      <Navbar></Navbar>
      <div className="flex h-full">
        <div className="w-3/12">{children}</div>
        <div className="w-9/12 bg-[url('../public/assets/images/bg/Flow.png')]"></div>
      </div>
    </div>
  );
};

export default Layout;
