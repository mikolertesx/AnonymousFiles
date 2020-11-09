import React, { useState } from "react";
import { ipcRenderer } from "electron";

const UploadItem = () => {
  const [file, setFile] = useState(null);

  const selectFileHandler = async () => {
    const message = await ipcRenderer.invoke("upload-file", null);
    console.log(message[0]);
    if (message !== null) {
      setFile(message[0]);
    }
  };

  const uploadFileHandler = async () => {
    const message = await ipcRenderer.invoke("send-file", { filePath: file });
    console.log(message);
  };

  return (
    <div>
      <button onClick={selectFileHandler}>Send file</button>
      <button onClick={uploadFileHandler}>Upload file</button>
    </div>
  );
};

export default UploadItem;
