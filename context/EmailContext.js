import React, { createContext } from "react";

export const EmailContext = createContext();

const EmailContextProvider = (props) => {
  return <EmailContext.Provider>{props.children}</EmailContext.Provider>;
};

export default EmailContextProvider;
