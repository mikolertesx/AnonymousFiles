import React, { useContext } from "react";
import { SelectedContext } from "../../../../context/selectedContext";
import "./SidebarItem.css";

const SidebarItem = ({ id, description }) => {
  const [selectedFile, setSelectedFile] = useContext(SelectedContext);

  const onSelectHandler = () => {
    setSelectedFile(id);
  };

  return (
    <div
      onClick={onSelectHandler}
      className={`sidebar-item ${
        selectedFile && selectedFile === id && "active"
      }`}
    >
      <p>{description || "New Item..."}</p>
    </div>
  );
};

export default SidebarItem;
