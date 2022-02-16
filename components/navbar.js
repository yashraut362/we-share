import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-2">
      {/* <Image
        src="/assets/images/newlogo.png"
        alt="me"
        width="140"
        height="50"
      /> */}
      <div className="flex flex-row text-xl font-semibold ">
        <span className="bg-orange-600 py-2 px-2  text-white rounded-l-lg">
          We
        </span>
        <span className="bg-white py-2 px-2 text-orange-600 rounded-r-lg">
          Share
        </span>
      </div>
    </div>
  );
};

export default Navbar;
