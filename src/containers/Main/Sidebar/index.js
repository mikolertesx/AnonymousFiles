import React, { useContext, useEffect } from "react";
import { FileContext } from "../../../context/filesContext";
import SidebarItem from "./SidebarItem";
import "./Sidebar.css";

const Sidebar = () => {
  const [files, setFiles] = useContext(FileContext);
  console.log(files);
  useEffect(() => {
    console.log(files);
  })
  return (
    <div className="sidebar">
      {files.map((file) => {
        return <SidebarItem key={file._id} description={file.name} />;
      })}
    </div>
  );
};

export default Sidebar;
