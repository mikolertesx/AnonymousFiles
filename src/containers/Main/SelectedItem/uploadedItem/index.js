import React, { useContext, useRef } from "react";
import "./UploadedItem.css";
import { FileContext } from "../../../../context/filesContext";

const UploadedItem = ({ id }) => {
  const [files] = useContext(FileContext);
  const selectedFile = files.find((file) => file._id === id);

  const copyPathHandler = () => {
    navigator.clipboard.writeText(selectedFile.url);
  };

  const deletePathHandler = () => {
    // TODO
  }

  return (
    <div className="uploaded-item">
      <p className="uploaded-item-name">{selectedFile.name}</p>
      <button onClick={copyPathHandler}>Copy path</button>
      <button onClick={deletePathHandler}>Delete path</button>
    </div>
  );
};

export default UploadedItem;
