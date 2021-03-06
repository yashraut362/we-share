import React, { useContext, useState } from "react";
import Finalscreen from "./Finalscreen.js";
import { FileContext } from "../context/FileContext.js";
import Fileselector from "./Fileselector.js";
import UploadFile from "./UploadFile.js";
import Progress from "./Progress.js";

const Sharecard = () => {
  const { file, progress, showprogress, link } = useContext(FileContext);
  const [active, setactive] = useState("Link");
  return (
    <div className="p-2 flex items-center justify-center md:justify-start  ">
      <div className="pt-0 md:pt-10 md:pl-20 2xl:pt-32">
        <div className="bg-white rounded-3xl shadow-2xl shadow-orange-600 h-80vh md:h-105 lg:h-105 2xl:h-110 w-80 2xl:w-102">
          <div className="p-4">
            <div className="flex flex-col items-center overflow-hidden">
              {file ? (
                <>
                  {showprogress === "true" ? (
                    <Progress />
                  ) : (
                    <>{link ? <Finalscreen link={link} /> : <UploadFile />}</>
                  )}
                </>
              ) : (
                <Fileselector />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sharecard;
