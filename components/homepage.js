import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../utils/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

function Homepage() {
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
    <div>
      <input
        type="file"
        onChange={(e) => {
          setfile(e.target.files[0]);
        }}
      />
      <button
        className="bg-yellow-200 p-2 border-yellow-400  rounded-lg"
        onClick={upload}
      >
        <span className="text-orange-500 font-semibold text-base">Upload</span>
      </button>
      <span>{link}</span>
      <span>{progress}</span>
    </div>
  );
}

export default Homepage;
