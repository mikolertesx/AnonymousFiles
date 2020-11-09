import React, { useContext } from "react";
import { SelectedContext } from "../../../../context/selectedContext";
import "./SidebarAddItem.css";

const SidebarAddItem = () => {
  const [selectedFile, setSelectedFile] = useContext(SelectedContext);

  const onSelectHandler = () => {
    setSelectedFile(null);
  };

  return (
    <div
      onClick={onSelectHandler}
      className={`sidebar-item--add ${
        selectedFile === null && "active"
      }`}
    >
      <p>+</p>
    </div>
  );
};

export default SidebarAddItem;
