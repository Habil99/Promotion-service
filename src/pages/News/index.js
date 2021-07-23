import Banner from "../../components/News/Banner";
import Card from "../../components/News/Card";
import { useDispatch, useSelector } from "react-redux";
import { getMostPopularNews, getNews } from "../../redux/newsSlice";
import { useEffect } from "react";
import { formatDate, removeSpaceFromEndpoint, truncateString } from "../../assets/utils";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import { allNews, allNewsStatus, popularNews, popularNewsStatus } from "../../redux/news.selector";

const News = () => {
    const news = useSelector(allNews);
    const status = useSelector(allNewsStatus);
    const popular = useSelector(popularNews);
    const popularStatus = useSelector(popularNewsStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === "idle") {
            dispatch(getNews());
        } else if (status === "fulfilled") {
        }
    }, [dispatch, news, status]);

    useEffect(() => {
        if (popularStatus === "idle") {
            dispatch(getMostPopularNews());
        } else if (popularStatus === "fulfilled") {
            // console.log(popular)
        }
    }, [popular, dispatch, popularStatus]);

    return (
        <div>
            <h4 className="main-wrapper-title">Most popular</h4>
            {popularStatus === "fulfilled" &&
                popular.map((news) => (
                    <Link key={news.id} to={{
                        pathname: `news/most-popular/${news.uri.split('nyt://article/').join('')}`
                    }}>
                        <Banner
                            img={news.media[0]["media-metadata"][2].url}
                            title={news.title}
                            info={truncateString(news.abstract, 120)}
                            date={formatDate(news.published_date)}
                        />
                    </Link>
                ))}
            <h4 className="main-wrapper-title">Last news</h4>
            <div className="news-cards">
                {status === "fulfilled" &&
                    news[0]?.map((news) => (
                        <Link
                            key={uuid()}
                            to={{
                                pathname: `news/${removeSpaceFromEndpoint(news.title)}`
                            }}
                        >
                            <Card

                                img={news.urlToImage}
                                info={truncateString(news.description, 40)}
                                date={formatDate(news.publishedAt)}
                            />
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default News;
