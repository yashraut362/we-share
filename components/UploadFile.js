import React, { useContext } from "react";
import Image from "next/image";
import Navbar from "./navbar";
import { FileContext } from "../context/FileContext";

const UploadFile = () => {
  const { file, changefile, upload } = useContext(FileContext);
  return (
    <div className=" flex flex-col items-center justify-center">
      <span className="truncate text-neutral-800 font-medium text-base pt-3">
        Your File to the moon !
      </span>
      <Image
        className="pt-5"
        src="/assets/images/upload.gif"
        alt="me"
        width="150"
        height="150"
      />
      <span className="truncate text-neutral-800 font-medium text-base pt-2">
        {file.name}
      </span>
      <button
        className="bg-yellow-200 p-2 border-yellow-400  rounded-lg"
        onClick={upload}
      >
        <span className="text-orange-500 font-semibold text-base">Upload</span>
      </button>
      <p className="text-neutral-800 font-medium text-base text-center pt-2">
        Want to change current file ?
        <br />
        <label>
          <input
            className="hidden"
            type="file"
            onChange={(e) => {
              changefile(e.target.files[0]);
            }}
          />
          <span className="text-orange-300 cursor-pointer">click here</span>
        </label>
      </p>
      <div className="py-5">
        <Navbar />
      </div>
    </div>
  );
};

export default UploadFile;
