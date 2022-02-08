import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../utils/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Sharecard = () => {
  const [link, setlink] = useState("");
  const [file, setfile] = useState("");
  const [progress, setprogress] = useState("");

  const upload = () => {
    const storageref = ref(storage, `/files/${Date.now()}${file.name}`);
    const uploadedfile = uploadBytesResumable(storageref, file);
    uploadedfile.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setprogress(progressPercent);
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
              console.log(url);
              console.log("file uploaded successfully");
              setlink(url);
              setprogress(0);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      }
    );
  };

  return (
    <div className="p-2 flex items-center justify-center md:justify-start  ">
      <div className="pt-0 md:pt-20 md:pl-20 2xl:pt-32">
        <div className="bg-white rounded-3xl shadow-2xl shadow-orange-600 h-80vh md:h-102 lg:h-105 2xl:h-110 w-80 2xl:w-102">
          <div className="flex flex-col items-center p-4">
            <label>
              <input
                class="hidden"
                type="file"
                onChange={(e) => {
                  setfile(e.target.files[0]);
                  upload();
                }}
              />
              <div className="flex items-center space-x-3 justify-between cursor-pointer">
                <div className="bg-orange-500 hover:bg-orange-600 rounded-full px-5 py-3">
                  <span className="text-white font-semibold text-2xl">+</span>
                </div>
                <span className="text-neutral-800 font-normal text-xl">
                  Upload file here
                </span>
              </div>
            </label>
            <span>{link}</span>
            <span>{progress}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sharecard;
