import React from "react";

const Widget = ({ data }) => {
  return (
    <>
      {/* eslint-disable-next-line array-callback-return */}
      {data.map((widget) => {
        if (widget !== "") {
          return (
            <div className="widget" key={widget}>
              {widget}
            </div>
          );
        }
      })}
    </>
  );
};

export default Widget;
