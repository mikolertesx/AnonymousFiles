import React, { createContext, useState } from "react";

export const SelectedContext = createContext(null);

export const SelectedContextProvider = ({ children }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <SelectedContext.Provider value={[selectedFile, setSelectedFile]}>
      {children}
    </SelectedContext.Provider>
  );
};

export default SelectedContextProvider;
