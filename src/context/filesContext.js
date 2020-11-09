import React, { createContext, useState, useEffect } from "react";
import Constants from "../shared/constants";
import { ipcRenderer } from "electron";

export const FileContext = createContext(null);

export const FileContextProvider = ({ children }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    console.log("Updating files");
    ipcRenderer.invoke(Constants.db.get).then((newFiles) => {
      setFiles(newFiles);
    });
  }, [setFiles]);

  return (
    <FileContext.Provider value={[files, setFiles]}>
      {children}
    </FileContext.Provider>
  );
};

export default FileContextProvider;
