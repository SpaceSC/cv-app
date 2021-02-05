import React from "react";
import "./TextArea.component.css";

function TextArea(props) {
  return (
    <textarea id="text-area" name="text-area" value={props.display} onChange={props.changeText}></textarea>
  );
}
export default TextArea;