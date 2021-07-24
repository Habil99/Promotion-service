import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import uuid from "react-uuid";
import { compareTime, formatDate } from "../../assets/utils";
import { NEWS } from "../../base";
import BannerSkeleton from "../../components/News/BannerSkeleton";
// import { singleNews, singleNewsStatus } from "../../redux/news.selector";
import Image from "../../shared/Image";

const Detail = () => {
  // const [news] = useSelector(singleNews);
  // const status = useSelector(singleNewsStatus);
  const [news, setNews] = useState([]);
  const [status, setStatus] = useState('idle');
  const { newsId } = useParams();
  const location = useLocation();
  const date = new URLSearchParams(location.search).get("date");
  const title = decodeURIComponent(newsId);

  const getSingleNews = useCallback(async () => {
    const res = await axios.get(`${NEWS.BASE_URL}/everything?q=${title}&from=${date}&apiKey=${NEWS.API_KEY}`);
    const data = res.data;

    setStatus('fulfilled');
    setNews(val => val.push(data))
    console.log('worked')

    console.log(news[0].articles, data);
    return data;
  }, [date, title, news])

  useEffect(() => {
    setStatus('loading');
    getSingleNews();
  }, []);


  return (
    <div className="news-detail">
      {status === "fulfilled" ? (
        <div className="news-detail" key={uuid()}>
          <div className="news-banner">
            <div className="news-banner-inner">
              <div className="news-banner-img">
                <Image source={news[0].articles[0].urlToImage} />
              </div>
              <div className="news-banner-content">
                <p className="news-banner-content-title">
                  {news[0].articles[0].title}
                </p>
                <a
                  href={news.articles[0].url}
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
                {news[0].articles[0].content}
              </p>
              <div className="news-detail-bottom">
                <div className="byline">Author: {news[0].articles[0].author}</div>
                <div className="source-date">
                  <p className="news-banner-content-date ms-auto me-4">
                    <small>Published date:</small>
                    {formatDate(news[0].articles[0].publishedAt)}
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
