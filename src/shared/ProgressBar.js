import React, { useState } from "react";

const ProgressBar = (props) => {
    const [points] = useState({ start: props.points.start, end: props.points.end });

  const progress = () => {
    return (points.start / points.end) * 100 + "%";
  };

  return (
    <div className="progressbar-wrapper">
      <div className="progressbar-points">
        <p className="start-point">{points.start}</p>
        <p className="end-point">{points.end}</p>
      </div>
      <div className="progressbar">
        <div className="progressbar-inner" style={{ width: progress() }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
