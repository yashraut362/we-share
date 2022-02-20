import Image from "next/image";
import React, { useContext } from "react";
import Navbar from "./navbar";
import { FileContext } from "../context/FileContext";

const Fileselector = () => {
  const { changefile } = useContext(FileContext);
  return (
    <>
      <label>
        <input
          className="hidden"
          type="file"
          onChange={(e) => {
            changefile(e.target.files[0]);
          }}
        />
        <div className="flex items-center space-x-3 justify-between cursor-pointer">
          <div className="bg-orange-500 hover:bg-orange-600 rounded-full px-5 py-3">
            <span className="text-white font-semibold text-2xl">+</span>
          </div>
          <span className="text-neutral-700 font-medium text-xl">
            Upload File Here
          </span>
        </div>
      </label>
      <div className="py-6">
        <Image
          src="/assets/images/share.gif"
          alt="me"
          width="330"
          height="330"
        />
      </div>
      <Navbar />
    </>
  );
};

export default Fileselector;
