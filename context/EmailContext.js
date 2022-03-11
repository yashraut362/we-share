import React, { createContext, useState } from "react";
import axios from "axios";
export const EmailContext = createContext();

const EmailContextProvider = (props) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [success, setsuccess] = useState("");
  // const [redirect, setredirect] = useState("");
  const addreceivername = (rname) => {
    setname(rname);
  };
  const addreceiveremail = (remail) => {
    setemail(remail);
  };
  const submitdetailstoserver = (name, email, link) => {
    setsuccess("Sending...");
    axios
      .post("https://weshare-backend.herokuapp.com/sendmail", {
        name: name,
        email: email,
        link: link,
      })
      .then((response) => {
        setemail("");
        setname("");
        setname("");
        setsuccess(response.data);
      })
      .catch((error) => {
        setsuccess("oops something went wrong...");
      });
  };
  return (
    <EmailContext.Provider
      value={{
        name,
        email,
        addreceivername,
        addreceiveremail,
        submitdetailstoserver,
        success,
        setsuccess,
      }}
    >
      {props.children}
    </EmailContext.Provider>
  );
};

export default EmailContextProvider;
