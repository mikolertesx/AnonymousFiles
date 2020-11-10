import React, { useState, useContext } from "react";
import Constants from "../../../../shared/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

import { FileContext } from "../../../../context/filesContext";
import { ipcRenderer } from "electron";
import "./UploadItem.css";

const UploadItem = () => {
  const [files, setFiles] = useContext(FileContext);
  const [enabled, setEnabled] = useState(true);
  const [uploading, setUploading] = useState(false);
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
    setUploading(true);
    const message = await ipcRenderer.invoke(Constants.file.upload, {
      filePath: file,
    });
    if (message._id) {
      const newFiles = [...files, message];
      setFiles(newFiles);
    }
    setEnabled(true);
    setFile(null);
    setUploading(false);
  };

  return (
    <div className="upload-item">
      <div className="upload-buttons">
        <button
          disabled={!enabled}
          onClick={selectFileHandler}
          className="upload-item-option"
        >
          <FontAwesomeIcon icon={faUpload} />
        </button>
        {file && (
          <button
            className="upload-item-option"
            disabled={!enabled}
            onClick={uploadFileHandler}
          >
            <FontAwesomeIcon icon={faCloudUploadAlt} />
          </button>
        )}
      </div>
      {uploading && <p>Uploading file...</p>}
    </div>
  );
};

export default UploadItem;
