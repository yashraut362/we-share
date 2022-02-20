import React, { createContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../utils/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const FileContext = createContext();

const FileContextProvider = (props) => {
  const [showprogress, setshowprogress] = useState("false");
  const [file, setfile] = useState("");
  const [progress, setprogress] = useState(100);
  const [link, setlink] = useState("");

  const changefile = (file) => {
    setfile(file);
  };
  const changelink = (link) => {
    setlink(link);
  };

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
    <FileContext.Provider
      value={{
        file,
        changefile,
        progress,
        upload,
        showprogress,
        link,
        changelink,
      }}
    >
      {props.children}
    </FileContext.Provider>
  );
};

export default FileContextProvider;
