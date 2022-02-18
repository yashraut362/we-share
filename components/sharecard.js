import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../utils/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import RounedProgressbar from "./widget/RounedProgressbar";
import Image from "next/image";
import Finalscreen from "./widget/Finalscreen";
import Navbar from "./navbar";

const Sharecard = () => {
  const [link, setlink] = useState("");
  const [file, setfile] = useState("");
  const [progress, setprogress] = useState("");
  const [showprogress, setshowprogress] = useState("false");
  const [active, setactive] = useState("Link");

  const upload = () => {
    const storageref = ref(storage, `/files/${Date.now()}${file.name}`);
    const uploadedfile = uploadBytesResumable(storageref, file);
    uploadedfile.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setshowprogress("true");
        setprogress(progressPercent.toString());
      },
      (err) => {
        console.log(err);
      },
      () => {
        setfile("");
        getDownloadURL(uploadedfile.snapshot.ref).then((url) => {
          const fileurlref = collection(db, "Files");
          addDoc(fileurlref, {
            url: url,
          })
            .then(() => {
              setlink(url);
              setshowprogress("false");
              setprogress(0);
            })
            .catch((err) => {
              console.log(err);
              setshowprogress("false");
            });
        });
      }
    );
    setshowprogress("false");
  };

  return (
    <div className="p-2 flex items-center justify-center md:justify-start  ">
      <div className="pt-0 md:pt-20 md:pl-20 2xl:pt-32">
        <div className="bg-white rounded-3xl shadow-2xl shadow-orange-600 h-80vh md:h-102 lg:h-105 2xl:h-110 w-80 2xl:w-102">
          <div className="p-4">
            {link === "" ? (
              <>
                <div className="flex flex-col items-center overflow-hidden">
                  <label>
                    <input
                      className="hidden"
                      type="file"
                      onChange={(e) => {
                        setfile(e.target.files[0]);
                      }}
                    />
                    <div className="flex items-center space-x-3 justify-between cursor-pointer">
                      <div className="bg-orange-500 hover:bg-orange-600 rounded-full px-5 py-3">
                        <span className="text-white font-semibold text-2xl">
                          +
                        </span>
                      </div>
                      <span className="text-neutral-800 font-normal text-xl">
                        Upload file here
                      </span>
                    </div>
                  </label>
                  {showprogress === "true" ? (
                    <RounedProgressbar progress={progress} />
                  ) : (
                    <>
                      {file ? (
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
                            <span className="text-orange-500 font-semibold text-base">
                              Upload
                            </span>
                          </button>
                          <p className="text-neutral-800 font-medium text-base text-center pt-2">
                            Want to change current file ?
                            <br />
                            <label>
                              <input
                                className="hidden"
                                type="file"
                                onChange={(e) => {
                                  setfile(e.target.files[0]);
                                  console.log(file);
                                }}
                              />
                              <span className="text-orange-300 cursor-pointer">
                                click here
                              </span>
                            </label>
                          </p>
                          <div className="py-5">
                            <Navbar />
                          </div>
                        </div>
                      ) : (
                        <>
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
                      )}
                    </>
                  )}

                  {/* <div className="flex flex-row items-center justify-between space-x-3 pt-10">
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
                  </div> */}
                  {/* <div className="flex items-center justify-between space-x-2">
                <input
                  type="text"
                  defaultValue={link}
                  className="w-10/12 bg-gray-100 bg-opacity-50 rounded border border-orange-500 focus:border-orange-600 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(link);
                  }}
                  className="w-2/12 p-2 bg-gray-100  cursor-pointer border rounded-lg border-orange-500"
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
              </div> */}
                </div>
              </>
            ) : (
              <Finalscreen link={link} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sharecard;
