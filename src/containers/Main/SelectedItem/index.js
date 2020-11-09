import React, { useContext } from "react";
import "./SelectedItem.css";
import { SelectedContext } from "../../../context/selectedContext";
import UploadItem from "./uploadItem";
import UploadedItem from "./uploadedItem";

const SelectedItem = () => {
  const [selected, ] = useContext(SelectedContext);

  return (
    <div className="selectedItem">
      {selected === null || selected === undefined ? (
        <UploadItem />
      ) : (
        <UploadedItem id={selected} />
        )}
    </div>
  );
};

export default SelectedItem;
