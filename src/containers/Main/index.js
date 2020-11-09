import React from "react";
import { FileContextProvider } from "../../context/filesContext";
import { SelectedContextProvider } from "../../context/selectedContext";
import Sidebar from "./Sidebar";
import SelectedItem from "./SelectedItem";
import "./Main.css";

const Main = () => {
  return (
    <FileContextProvider>
      <SelectedContextProvider>
        <div className="main">
          <Sidebar />
          <SelectedItem />
        </div>
      </SelectedContextProvider>
    </FileContextProvider>
  );
};

export default Main;
