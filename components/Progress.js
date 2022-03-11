import React, { useContext } from "react";
import Navbar from "./Navbar.js";
import { FileContext } from "../context/FileContext.js";
import RounedProgressbar from "./widget/RounedProgressbar.js";

const Progress = () => {
  const { progress } = useContext(FileContext);
  return (
    <div className=" flex flex-col items-center justify-center space-y-7">
      <span className="text-neutral-700 font-medium text-lg">
        Launching Spacecraft ...
      </span>
      <RounedProgressbar progress={progress} />
      <div className="pt-4">
        <Navbar />
      </div>
    </div>
  );
};

export default Progress;
