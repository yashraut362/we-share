import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-2">
      <Image
        src="/assets/images/newlogo.png"
        alt="me"
        width="140"
        height="50"
      />
      <span className="text-lg cursor-pointer hover:scale-x-110 font-semibold rounded-lg px-2 py-1 bg-gray-400 text-white hover:bg-slate-800 hover:text-white ">
        Explore
      </span>
    </div>
  );
};

export default Navbar;
