import React from "react";
import "./SelectedItem.css";
import UploadItem from "./uploadItem";

const SelectedItem = ({ itemIndex }) => {
  console.log('Index: ', itemIndex);

  return (
    <div className="selectedItem">
      {itemIndex === null || itemIndex === undefined ? (
        <UploadItem />
      ) : (
          <div>
            <p>Nothing to see.</p>
            <p>{itemIndex}</p>
          </div>
        )}
    </div>
  );
};

export default SelectedItem;
