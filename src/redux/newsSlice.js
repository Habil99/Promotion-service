import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Paginate, randomObject } from "../assets/utils";
import { NEWS } from "../base";

const initialState = {
  allNews: {
    data: [],
    status: "idle",
    page: 1,
    pageSize: 12,
    error: null,
    total: 0,
  },
  popularNews: {
    data: [],
    status: "idle",
    error: null,
  },
};

const config = {
  method: "GET",
  url: `${NEWS.BASE_URL}/everything`,
  params: {
    q: "technology",
    page: initialState.allNews.page,
    pageSize: initialState.allNews.pageSize,
  },
  headers: {
    "X-Api-Key": NEWS.API_KEY,
  },
};

export const getMostPopularNews = createAsyncThunk(
  "news/getMostPopularNews",
  async () => {
    const res = await axios.get(
      `${NEWS.MOST_POPULAR_URL}/shared/1.json?api-key=${NEWS.MOST_POPULAR_KEY}`
    );
    const data = res.data;

    return data;
  }
);

export const getNews = createAsyncThunk(
  "news/getNews",
  async (current, { dispatch }) => {
    current && dispatch(updatePage(current));
    const res = await axios.request(config);
    const data = res.data;

    return data;
  }
);

export const getTotalResults = createAsyncThunk(
  "news/getTotalResults",
  async () => {
    const res = await axios.request({
      method: "GET",
      url: `${NEWS.BASE_URL}/everything`,
      headers: {
        "X-Api-Key": NEWS.API_KEY,
      },
      params: {
        q: "technology",
      },
    });

    const data = res.data;

    return data.totalResults;
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    updatePage: (state, { payload }) => {
      state.allNews.page = payload;
      config.params.page = state.allNews.page;
    },
  },
  extraReducers: {
    [getNews.pending]: (state) => {
      state.allNews.status = "loading";
    },
    [getNews.rejected]: (state, { error }) => {
      state.allNews.status = "rejected";
      state.allNews.error = error.message;
      console.log(error.message);
    },
    [getNews.fulfilled]: (state, { payload }) => {
      state.allNews.status = "fulfilled";
      state.allNews.data = payload.articles;
    },
    [getMostPopularNews.fulfilled]: (state, { payload }) => {
      state.popularNews.status = "fulfilled";
      const data = randomObject(payload.results);
      state.popularNews.data.push(data);
    },
    [getTotalResults.fulfilled]: (state, { payload }) => {
      const total = 8 * state.allNews.pageSize;
      state.allNews.total = total;
    },
  },
});

export const { getSingleMostPopularNews, updatePage } = newsSlice.actions;

export default newsSlice.reducer;
