import React, { useContext } from "react";
import { FileContext } from "../../../../context/filesContext";

const UploadedItem = ({id}) => {
  const [files,] = useContext(FileContext);
  const selectedFile = files.find((file) => file._id === id);

  return <div>
    <p>{selectedFile.path}</p>
    <p>{selectedFile.url}</p>
    <p>{selectedFile.name}</p>
    <p>{selectedFile._id}</p>
  </div>;
};

export default UploadedItem;
