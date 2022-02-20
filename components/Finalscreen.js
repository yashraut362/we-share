import Image from "next/image";
import { useState } from "react";
import Navbar from "./navbar";

const Finalscreen = ({ link }) => {
  const [copy, setcopy] = useState(false);
  const [active, setactive] = useState("Link");
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <span className="truncate text-neutral-800 font-medium text-base pt-3">
        Your File Landed on moon !
      </span>
      <Image
        src="/assets/images/download.gif"
        alt="me"
        width="330"
        height="290"
      />
      {active === "Link" ? (
        <>
          <div className="flex items-center max-w-md mx-auto bg-orange-100 rounded-lg ">
            <div className="w-full">
              <input
                disabled
                type="text"
                value={link}
                className="w-full px-4 py-1 bg-orange-100  text-gray-800 rounded-full focus:outline-none"
                placeholder="search"
              />
            </div>
            <div>
              <button
                onClick={() => {
                  setcopy(true);
                  navigator.clipboard.writeText(link);
                }}
                className="flex items-center bg-orange-500 justify-center w-12 h-12 text-white rounded-r-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
              </button>
            </div>
          </div>
          {copy ? (
            <span className="truncate text-orange-500 font-medium text-base pt-3">
              Copied successfully to clipboard !
            </span>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
      <div className="flex flex-row items-center justify-between space-x-3 pt-10">
        <span className="text-neutral-800 font-medium text-base">
          Get link using :
        </span>
        <div
          onClick={() => {
            setactive("Email");
          }}
          className={
            active === "Email"
              ? "bg-orange-400 hover:bg-orange-500 rounded-lg px-2 py-1 text-sm font-semibold text-white cursor-pointer"
              : "px-2 py-1 text-orange-400 cursor-pointer"
          }
        >
          Email
        </div>
        <div
          onClick={() => {
            setactive("Link");
          }}
          className={
            active === "Link"
              ? "bg-orange-400 hover:bg-orange-500 rounded-lg px-2 py-1 text-sm font-semibold text-white cursor-pointer"
              : "px-2 py-1 text-orange-400 cursor-pointer"
          }
        >
          <span>Link</span>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Finalscreen;
