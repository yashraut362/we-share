import Image from "next/image";
import { useState, useContext } from "react";
import { FileContext } from "../context/FileContext";
import { EmailContext } from "../context/EmailContext";

const Finalscreen = ({ link }) => {
  const { changefile, changelink } = useContext(FileContext);
  const {
    name,
    email,
    success,
    addreceivername,
    addreceiveremail,
    setsuccess,
    submitdetailstoserver,
  } = useContext(EmailContext);
  const [copy, setcopy] = useState(false);
  const [active, setactive] = useState("Link");
  const [sendmail, setsendmail] = useState(false);

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <span className="truncate text-neutral-800 font-medium text-base pt-3">
        Your File Landed on moon !
      </span>

      {active === "Link" ? (
        <>
          <Image
            src="/assets/images/download.gif"
            alt="me"
            width="330"
            height="290"
          />
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
        <form
          className="pt-5"
          onSubmit={(e) => {
            submitdetailstoserver(name, email, link);
            e.preventDefault();
          }}
        >
          <h2 className="text-center py-1 pb-4 font-semibold text-lg">
            Add receiver's info
          </h2>
          <div className="flex flex-col space-y-5">
            <div className="flex items-center space-x-3 ">
              <span>Name</span>
              <input
                className="border-2 border-orange-500 p-1 rounded-lg placeholder-slate-400"
                type="text"
                value={name}
                onChange={(e) => {
                  addreceivername(e.target.value);
                }}
                maxLength="30"
                placeholder="John doe"
                required
              />
            </div>
            <div className="flex items-center space-x-3">
              <span>Email</span>
              <input
                className="border-2 border-orange-500 p-1 rounded-lg placeholder-slate-400"
                type="email"
                value={email}
                onChange={(e) => {
                  addreceiveremail(e.target.value);
                }}
                maxLength="30"
                placeholder="name@email.com"
                required
              />
            </div>

            {success ? (
              <>
                <span className="truncate text-orange-500 font-medium text-base pt-3">
                  {success}
                </span>
                <span className="truncate text-orange-500 font-medium text-base pt-3">
                  Click on home to reuse the service !
                </span>
              </>
            ) : (
              <div className="flex items-center justify-center pt-5">
                <input
                  type="submit"
                  value="Submit"
                  className="bg-orange-400 cursor-pointer rounded-full text-white font-semibold px-4 py-1.5"
                />
              </div>
            )}
          </div>
        </form>
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
      <span
        onClick={() => {
          changefile("");
          changelink("");
          setsuccess("");
        }}
        className="text-neutral-700 font-medium text-lg cursor-pointer py-2 flex items-center space-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        <span>Go back to Home</span>
      </span>
    </div>
  );
};

export default Finalscreen;
