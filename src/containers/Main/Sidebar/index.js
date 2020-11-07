import React from 'react';
import SidebarItem from "./SidebarItem";
import './Sidebar.css';

const Sidebar = () => {
  return <div className="sidebar">
    <SidebarItem description={"An item of Anonymous files #1"} selected={true}/>
    <SidebarItem description={"An item of Anonymous files #2"}/>
    <SidebarItem description={"An item of Anonymous files #3"}/>
    <SidebarItem description={"An item of Anonymous files #4"}/>
    <SidebarItem description={"An item of Anonymous files #5"}/>
    <SidebarItem description={"An item of Anonymous files #6"}/>
  </div>
}

export default Sidebar;