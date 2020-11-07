import React from "react";
import "./SelectedItem.css";

const SelectedItem = ({ itemIndex }) => {
  console.log('Index: ', itemIndex);

  return (
    <div className="selectedItem">
      {itemIndex === null || itemIndex === undefined ? (
        <div>
          <p>Click an item on the sidebar to see it's contents.</p>
        </div>
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
