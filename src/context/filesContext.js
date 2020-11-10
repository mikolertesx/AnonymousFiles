import React, { createContext, useState, useEffect } from "react";
import { dbGet } from "../controllers/db";

export const FileContext = createContext(null);

export const FileContextProvider = ({ children }) => {
  const [files, setFiles] = useState([]);
  const updateItems = () => {
    dbGet().then((newFiles) => {
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
