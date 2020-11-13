import React, { useState, useContext } from "react";
import FileController from "../../../../controllers/file";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FileContext } from "../../../../context/filesContext";
import DragHandlerDiv from "../../../../hoc/dragHandlerDiv";
import "./UploadItem.css";

const UploadItem = () => {
  const [files, setFiles] = useContext(FileContext);
  const [enabled, setEnabled] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);

  // Support drag and drop and clean the effects.

  const selectFileHandler = async () => {
    setEnabled(false);
    const message = await FileController.fileChoose();
    if (message !== null) {
      setFile(message[0]);
    }
    setEnabled(true);
  };

  const onDragFileHandler = (e) => {
    const draggedFile = e.dataTransfer.files[0].path;
    const isFile = draggedFile.split(".").length > 1;
    if (!isFile) {
      return;
    }
    setFile(draggedFile);
    setEnabled(true);
  };

  const uploadFileHandler = async () => {
    setEnabled(false);
    setUploading(true);
    const message = await FileController.fileUpload(file);
    if (message._id) {
      const newFiles = [...files, message];
      setFiles(newFiles);
    }
    setEnabled(true);
    setFile(null);
    setUploading(false);
  };

  let fileName = "";

  if (file) {
    const splitFile = file ? file.split("\\") : null;
    fileName = splitFile ? splitFile[splitFile.length - 1] : null;
  }

  return (
    <DragHandlerDiv className="upload-item" dragHandler={onDragFileHandler}>
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
      {!uploading && file && <p>File: {fileName}</p>}
      {uploading && <p>Uploading file...</p>}
    </DragHandlerDiv>
  );
};

export default UploadItem;
