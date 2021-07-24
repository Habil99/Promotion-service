import React from "react";

const CardSkeleton = () => {
  return (
    <div className="news-card skeleton">
      <div className="news-card-img"></div>
      <div className="news-card-info"></div>
      <div className="news-card-date"></div>
    </div>
  );
};

export default CardSkeleton;
