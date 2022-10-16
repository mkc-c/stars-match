import React from "react";
import utils from "../utils/utils";

function StarsDisplay(props) {
  return (
    <>
      {utils.range(1, props.stars).map((starId) => (
        <div key={starId} className="star"></div>
      ))}
    </>
  );
}

export default StarsDisplay;
