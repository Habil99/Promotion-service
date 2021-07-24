import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { formatDate } from "../../assets/utils";
import { popularNews, popularNewsStatus } from "../../redux/news.selector";
import { getMostPopularNews } from "../../redux/newsSlice";
import Image from "../../shared/Image";
import Widget from "../../shared/Widget";
import { compareTime } from "../../assets/utils";

const PopularDetail = () => {
  const status = useSelector(popularNewsStatus);
  const news = useSelector(popularNews);
  const dispatch = useDispatch();

  useEffect(() => {
    if (news.length < 1) {
      if (status === "idle") {
        dispatch(getMostPopularNews());
      } else {
        console.log(news);
      }
    }
  }, [dispatch, news, status]);

  return (
    <div>
      {status === "fulfilled" &&
        news?.map((n) => (
          <div className="news-detail" key={uuid()}>
            <div className="news-banner">
              <div className="news-banner-inner">
                <div className="news-banner-img">
                  <Image source={n.media[0]["media-metadata"][2].url} />
                </div>
                <div className="news-banner-content">
                  <p className="news-banner-content-title">{n.title}</p>
                  <a
                    href={n.url}
                    className="open-remote"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Open remote link
                  </a>
                  <div className="widgets">
                    <Widget data={[n.section, n.subsection]} />
                  </div>
                </div>
              </div>
              <div className="news-banner-inner flex-column align-items-start">
                <p className="news-banner-content-info">{n.abstract}</p>
                <div className="news-detail-bottom">
                  <div className="byline">Byline: {n.byline}</div>
                  <div className="source-date">
                    <div className="source">
                      <small>Source:</small> {n.source}
                    </div>
                    <p className="news-banner-content-date ms-auto me-4">
                      <small>Published date:</small>{" "}
                      {formatDate(n.published_date)}
                    </p>
                    <p className="news-banner-content-date">
                      <small>Updated:</small> {compareTime(n.updated)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PopularDetail;
