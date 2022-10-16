import React from "react";
import colors from "../utils/colors";

function PlayNumber(props) {
  return (
    <button
      style={{ backgroundColor: colors[props.status] }}
      className="number"
      onClick={() => props.onNumberClick(props.number, props.status)}
    >
      {props.number}
    </button>
  );
}

export default PlayNumber;
