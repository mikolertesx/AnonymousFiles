import React, { useState, useContext } from "react";
import Constants from "../../../../shared/constants";
import {FileContext} from "../../../../context/filesContext"
import { ipcRenderer } from "electron";

const UploadItem = () => {
  const [files, setFiles] = useContext(FileContext);
  const [file, setFile] = useState(null);

  const selectFileHandler = async () => {
    const message = await ipcRenderer.invoke(Constants.file.choose, null);
    console.log(message[0]);
    if (message !== null) {
      setFile(message[0]);
    }
  };

  const uploadFileHandler = async () => {
    const message = await ipcRenderer.invoke(Constants.file.upload, { filePath: file });
    if (message._id) {
      const newFiles = [...files, message];
      setFiles(newFiles)
    }
  };

  return (
    <div>
      <button onClick={selectFileHandler}>Select File</button>
      <button onClick={uploadFileHandler}>Upload File</button>
    </div>
  );
};

export default UploadItem;
