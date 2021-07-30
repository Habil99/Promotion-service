import Banner from "../../components/News/Banner";
import Card from "../../components/News/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  getMostPopularNews,
  getNews,
  getTotalResults,
} from "../../redux/newsSlice";
import { useEffect } from "react";
import { encodeEndpoint, formatDate, truncateString } from "../../assets/utils";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import { newsSelector } from "../../redux/news.selector";
import BannerSkeleton from "../../components/News/BannerSkeleton";
import CardSkeleton from "../../components/News/CardSkeleton";
import Pagination from "../../shared/Pagination";

const News = () => {
  const news = useSelector(newsSelector.allNews);
  const status = useSelector(newsSelector.allNewsStatus);
  const popular = useSelector(newsSelector.popularNews);
  const total = useSelector(newsSelector.total);
  const pageSize = useSelector(newsSelector.pageSize);
  const popularStatus = useSelector(newsSelector.popularNewsStatus);
  const dispatch = useDispatch();
  const totalPage = parseFloat((total / pageSize).toFixed());

  useEffect(() => {
    if (status === "idle") {
      dispatch(getNews());
    } else if (status === "fulfilled") {
    }
  }, [dispatch, news, status]);

  useEffect(() => {
    if (popularStatus === "idle") {
      dispatch(getMostPopularNews());
      dispatch(getTotalResults());
    } else if (popularStatus === "fulfilled") {
      // console.log(popular)
    }
  }, [popular, dispatch, popularStatus]);

  return (
    <div>
      <h4 className="main-wrapper-title">Most popular</h4>
      {popularStatus === "fulfilled" ? (
        popular.map((news) => (
          <Link
            key={news.id}
            to={{
              pathname: `news/most-popular/${news.uri
                .split("nyt://article/")
                .join("")}`,
            }}
          >
            <Banner
              img={news.media[0] && news.media[0]["media-metadata"][2].url}
              title={news.title}
              info={truncateString(news.abstract, 120)}
              date={formatDate(news.published_date)}
            />
          </Link>
        ))
      ) : (
        <BannerSkeleton />
      )}
      <h4 className="main-wrapper-title">Last news</h4>
      <div className="news-cards">
        {status === "fulfilled" ? (
          <>
            {news?.map((news) => (
              <Link
                key={uuid()}
                to={{
                  pathname: `news/${encodeEndpoint(news?.title)}`,
                  search: `date=${encodeEndpoint(news?.publishedAt)}`,
                }}
              >
                <Card
                  img={news?.urlToImage}
                  info={truncateString(news?.description, 40)}
                  date={formatDate(news?.publishedAt)}
                />
              </Link>
            ))}
          </>
        ) : (
          Array(10)
            .fill(null)
            .map((_, i) => <CardSkeleton key={i} />)
        )}
      </div>
      {total ? <Pagination totalPage={totalPage} /> : <></>}
    </div>
  );
};

export default News;
