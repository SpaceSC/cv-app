import React from "react";
import "./ResetButton.component.css";

function ResetButton(props) {
  return (
    <button className="reset-btn" type="button" onClick={props.reset}>
      Reset
    </button>
  );
}
export default ResetButton;