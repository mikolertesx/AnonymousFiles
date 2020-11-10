import { ipcRenderer } from "electron";
import React, { useContext } from "react";
import { FileContext } from "../../../../context/filesContext";
import { SelectedContext } from "../../../../context/selectedContext";
import Constants from "../../../../shared/constants";
import "./UploadedItem.css";

const UploadedItem = ({ id }) => {
  const [files, , refreshFiles] = useContext(FileContext);
  const [, setSelectedFile] = useContext(SelectedContext);
  const selectedFile = files.find((file) => file._id === id);

  const copyPathHandler = () => {
    navigator.clipboard.writeText(selectedFile.url);
  };

  const deletePathHandler = async () => {
    await ipcRenderer.invoke(Constants.db.delete, id);
    setSelectedFile(null);
    refreshFiles();
  };

  return (
    <div className="uploaded-item">
      <p className="uploaded-item-name">{selectedFile.name}</p>
      <button onClick={copyPathHandler}>Copy path</button>
      <button onClick={deletePathHandler}>Delete path</button>
    </div>
  );
};

export default UploadedItem;
