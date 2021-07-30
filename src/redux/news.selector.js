export const newsSelector = {
  allNews: (state) => state.news.allNews.data,
  allNewsStatus: (state) => state.news.allNews.status,
  popularNews: (state) => state.news.popularNews.data,
  popularNewsStatus: (state) => state.news.popularNews.status,
  singleNews: (state) => state.news.singleNews.data,
  singleNewsStatus: (state) => state.news.singleNews.status,
  page: (state) => state.news.allNews.page,
  pageSize: (state) => state.news.allNews.pageSize,
  total: (state) => state.news.allNews.total,
};
