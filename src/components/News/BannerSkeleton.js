const BannerSkeleton = () => {
  return (
    <div className="news-banner skeleton">
      <div className="news-banner-inner">
        <div className="news-banner-img">
        </div>
        <div className="news-banner-content">
          <div className="news-banner-content-title"></div>
          <div className="news-banner-content-title news-banner-content-title-2"></div>
          <div className="news-banner-content-info"></div>
          <div className="news-banner-content-date"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerSkeleton;
