import React, { useContext, useEffect } from "react";
import { FileContext } from "../../../context/filesContext";
import SidebarItem from "./SidebarItem";
import SidebarAddItem from "./SidebarAddItem";
import "./Sidebar.css";

const Sidebar = () => {
  const [files, setFiles] = useContext(FileContext);
  return (
    <div className="sidebar">
      <SidebarAddItem />
      {files.map((file) => {
        return (
          <SidebarItem key={file._id} id={file._id} description={file.name} />
        );
      })}
    </div>
  );
};

export default Sidebar;
