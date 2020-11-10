import React, { useContext, useState } from "react";
import Controllers from "../../../../controllers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faTrash, faFile } from "@fortawesome/free-solid-svg-icons";
import { FileContext } from "../../../../context/filesContext";
import { SelectedContext } from "../../../../context/selectedContext";
import "./UploadedItem.css";

const UploadedItem = ({ id }) => {
  const [files, setFiles, refreshFiles] = useContext(FileContext);
  const [, setFileIndex] = useContext(SelectedContext);
  const [editMode, setEditMode] = useState(false);

  let selectedFile = files.find((file) => file._id === id);

  const copyPathHandler = () => {
    navigator.clipboard.writeText(selectedFile.url);
  };

  const deletePathHandler = async () => {
    await Controllers.db.dbDelete(id);
    setFileIndex(null);
    refreshFiles();
  };

  const updateHandler = async (name) => {
    await Controllers.db.dbUpdate({ ...selectedFile, name: name });
  };

  const onEnterHandler = async (event) => {
    if (event.key === "Enter") {
      onBlurHandler(event);
    }
  };

  const onBlurHandler = async (event) => {
    saveElementName(event.target.value);
    updateHandler(event.target.value);
    setEditMode(false);
  };

  const saveElementName = (name) => {
    const newFiles = [...files];
    const elementIndex = newFiles.findIndex((file) => file._id === id);
    if (elementIndex === null) {
      return;
    }

    newFiles[elementIndex] = { ...selectedFile, name: name };
    setFiles(newFiles);
  };

  return (
    <div className="uploaded-item">
      <div
        className="uploaded-item-thumbnail"
        onClick={() => Controllers.file.fileUpload(selectedFile.url)}
      >
        <FontAwesomeIcon icon={faFile} />
      </div>
      {editMode ? (
        <input
          className="uploaded-item-name"
          defaultValue={selectedFile.name}
          onKeyDown={onEnterHandler}
          onBlur={onBlurHandler}
          ref={(input) => {
            if (input) {
              input.focus();
              input.select();
            }
          }}
        />
      ) : (
        <p className="uploaded-item-name" onClick={() => setEditMode(true)}>
          {selectedFile.name}
        </p>
      )}
      <div className="uploaded-item-options">
        <button onClick={copyPathHandler} id="copy-button">
          <FontAwesomeIcon icon={faCopy} />
        </button>
        <button onClick={deletePathHandler} id="delete-button">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default UploadedItem;
