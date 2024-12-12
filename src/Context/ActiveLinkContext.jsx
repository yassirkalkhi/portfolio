import React, { useState, useContext, createContext } from "react";

const ActiveLinkContext = createContext(null);

const LinkWrapper = ({ children }) => {
  const [wichLink, setWhichLink] = useState("home");  
  const setLink = (value) => {
    setWhichLink(value);
  };
  return (
    <ActiveLinkContext.Provider value={{ wichLink, setLink }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};
const useActiveLink = () => {
   return   useContext(ActiveLinkContext);
};



export {LinkWrapper,useActiveLink}