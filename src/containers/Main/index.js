import React from "react";
import FileContext from "../../context/filesContext";
import Sidebar from "./Sidebar";
import SelectedItem from "./SelectedItem";
import "./Main.css";

const Main = () => {
  return (
    <FileContext>
      <div className="main">
        <Sidebar />
        <SelectedItem />
      </div>
    </FileContext>
  );
};

export default Main;
