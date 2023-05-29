import React, { useRef } from "react";

const SectionsContext = React.createContext();

export const SectionsContextProvider = (props) => {
  return (
    <SectionsContext.Provider
      value={{
        heroRef: useRef(),
        aboutRef: useRef(),
        skillsRef: useRef(),
        contactRef: useRef(),
      }}
    >
      {props.children}
    </SectionsContext.Provider>
  );
};

export default SectionsContext;
