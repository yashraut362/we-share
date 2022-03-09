import React, { createContext, useState } from "react";

export const EmailContext = createContext();

const EmailContextProvider = (props) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const addreceivername = (rname) => {
    setname(rname);
  };
  const addreceiveremail = (remail) => {
    setemail(remail);
  };
  return (
    <EmailContext.Provider
      value={{
        name,
        email,
        addreceivername,
        addreceiveremail,
      }}
    >
      {props.children}
    </EmailContext.Provider>
  );
};

export default EmailContextProvider;
