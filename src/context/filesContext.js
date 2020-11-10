import React, { createContext, useState, useEffect } from "react";
import Constants from "../shared/constants";
import { ipcRenderer } from "electron";

export const FileContext = createContext(null);

export const FileContextProvider = ({ children }) => {
  const [files, setFiles] = useState([]);
  const updateItems = () => {
    ipcRenderer.invoke(Constants.db.get).then((newFiles) => {
      setFiles(newFiles);
    });
  }

  useEffect(() => {
    console.log("Updating files");
    updateItems();
  }, [setFiles]);

  return (
    <FileContext.Provider value={[files, setFiles, updateItems]}>
      {children}
    </FileContext.Provider>
  );
};

export default FileContextProvider;
