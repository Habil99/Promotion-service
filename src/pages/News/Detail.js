import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import uuid from "react-uuid";
import { compareTime, formatDate } from "../../assets/utils";
import { NEWS } from "../../base";
import BannerSkeleton from "../../components/News/BannerSkeleton";
import Image from "../../shared/Image";

const Detail = () => {
  const location = useLocation();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState('idle');
  const title = decodeURIComponent(String(location.pathname).split("/news/").join(""));;
  const date = decodeURIComponent(String(location.search).split("?date=").join(""));

  useEffect(() => {
    setLoading(true);
    const config = {
      params: {
        q: title,
        from: date,
        apiKey: NEWS.API_KEY
      }
    };

    axios.get(`${NEWS.BASE_URL}/everything`, config)
      .then(res => {
        const data = res.data;
        setNews(data)
        setLoading(false)
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="news-detail">
      {!loading ? (
        <div className="news-detail" key={uuid()}>
          <div className="news-banner">
            <div className="news-banner-inner">
              <div className="news-banner-img">
                <Image source={news?.articles[0]?.urlToImage} />
              </div>
              <div className="news-banner-content">
                <p className="news-banner-content-title">
                  {news?.articles[0]?.title}
                </p>
                <a
                  href={news.articles[0]?.url}
                  className="open-remote"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Open remote link
                </a>
              </div>
            </div>
            <div className="news-banner-inner flex-column align-items-start">
              <p className="news-banner-content-info">
                {news?.articles[0]?.content}
              </p>
              <div className="news-detail-bottom">
                <div className="byline">Author: {news?.articles[0]?.author}</div>
                <div className="source-date">
                  <p className="news-banner-content-date ms-auto me-4">
                    <small>Published date:</small>
                    {formatDate(news?.articles[0]?.publishedAt)}
                  </p>
                  <p className="news-banner-content-date">
                    <small>Updated:</small> {compareTime(Date.now())}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <BannerSkeleton />
      )}
    </div>
  );
};

export default Detail;
