import React from "react";
import "./TextDisplay.component.css";

function TextDisplay(props) {
  return (
    <div className="text-display">
      {props.display}
    </div>
  );
}
export default TextDisplay;