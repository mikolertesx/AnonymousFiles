import React, { useState, useContext } from "react";
import Constants from "../../../../shared/constants";
import { FileContext } from "../../../../context/filesContext";
import { ipcRenderer } from "electron";

const UploadItem = () => {
  const [files, setFiles] = useContext(FileContext);
  const [enabled, setEnabled] = useState(true);
  const [file, setFile] = useState(null);

  const selectFileHandler = async () => {
    setEnabled(false);
    const message = await ipcRenderer.invoke(Constants.file.choose, null);
    if (message !== null) {
      setFile(message[0]);
    }
    setEnabled(true);
  };

  const uploadFileHandler = async () => {
    setEnabled(false);
    const message = await ipcRenderer.invoke(Constants.file.upload, {
      filePath: file,
    });
    if (message._id) {
      const newFiles = [...files, message];
      setFiles(newFiles);
    }
    setEnabled(true);
    setFile(null);
  };

  return (
    <div>
      <button disabled={!enabled} onClick={selectFileHandler}>
        Select File
      </button>
      {file && (
        <button disabled={!enabled} onClick={uploadFileHandler}>
          Upload File
        </button>
      )}
    </div>
  );
};

export default UploadItem;
