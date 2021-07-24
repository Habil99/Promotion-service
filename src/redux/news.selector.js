const allNews = (state) => state.news.allNews.data;
const allNewsStatus = (state) => state.news.allNews.status;
const popularNews = (state) => state.news.popularNews.data;
const popularNewsStatus = (state) => state.news.popularNews.status;
const singleNews = (state) => state.news.singleNews.data;
const singleNewsStatus = (state) => state.news.singleNews.status;

export {
  allNews,
  allNewsStatus,
  popularNews,
  popularNewsStatus,
  singleNews,
  singleNewsStatus,
};
