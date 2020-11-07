import React from "react";
import "./SidebarItem.css";

const SidebarItem = ({ selected, description }) => (
  <div className={`sidebar-item ${selected && "active"}`}>
    <p>{description || "New Item..."}</p>
  </div>
);

export default SidebarItem;
