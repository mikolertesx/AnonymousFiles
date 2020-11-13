import React, { useEffect, useRef } from "react";

const DragHandlerDiv = ({ children, dragHandler, ...props }) => {
  const divRef = useRef();

  useEffect(() => {
    const currentDiv = divRef.current;
    if (!currentDiv) {
      console.log("Button is not set.");
      return;
    }

    currentDiv.ondragover = () => {
      return false;
    };

    currentDiv.ondragleave = () => {
      return false;
    };

    currentDiv.ondragend = () => {
      return false;
    };

    currentDiv.ondrop = (e) => {
      e.preventDefault();
      dragHandler(e);
    };

    return () => {
      currentDiv.ondragover = null;
      currentDiv.ondragleave = null;
      currentDiv.ondragend = null;
      currentDiv.ondrop = null;
    };
  });

  return (
    <div ref={divRef} {...props}>
      {children}
    </div>
  );
};

export default DragHandlerDiv;
