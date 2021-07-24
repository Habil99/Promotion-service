import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { randomObject } from "../assets/utils";
import { NEWS } from "../base";

const initialState = {
    allNews: {
        data: [],
        status: "idle",
        page: 1,
        error: null
    },
    popularNews: {
        data: [],
        status: "idle",
        error: null
    },
    singleNews: {
        data: [],
        status: 'idle',
        error: null
    }
};

const config = {
    method: 'GET',
    url: `${NEWS.BASE_URL}/everything`,
    params: {
        q: 'technology',
        page: initialState.allNews.page,
        pageSize: 12
    },
    headers: {
        'X-Api-Key': NEWS.API_KEY
    }
}

export const getMostPopularNews = createAsyncThunk('news/getMostPopularNews', async () => {
    const res = await axios.get(`${NEWS.MOST_POPULAR_URL}/shared/1.json?api-key=${NEWS.MOST_POPULAR_KEY}`);
    const data = res.data;

    return data;
});

export const getNews = createAsyncThunk("news/getNews", async () => {
    const res = await axios.request(config);
    const data = res.data;
    return data;
});

export const getSingleNews = createAsyncThunk("news/getSingleNews", async (title, date) => {
    const res = await axios.get(`${NEWS.BASE_URL}/everything?q=${title}&from=${date}&apiKey=${NEWS.API_KEY}`);
    const data = res.data;

    return data;
})

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: {
        [getNews.pending]: (state) => {
            state.allNews.status = 'loading';
        },
        [getNews.rejected]: (state, { payload }) => {
            state.allNews.status = 'rejected';
            state.allNews.error = payload;
        },
        [getNews.fulfilled]: (state, { payload }) => {
            state.allNews.status = 'fulfilled';
            state.allNews.data.push(payload.articles);
        },
        [getMostPopularNews.fulfilled]: (state, { payload }) => {
            state.popularNews.status = 'fulfilled';
            const data = randomObject(payload.results);
            state.popularNews.data.push(data);
        },
        [getSingleNews.pending]: state => {
            state.singleNews.status = 'loading';
        },
        [getSingleNews.fulfilled]: (state, { payload }) => {
            state.singleNews.status = 'fulfilled';
            state.singleNews.data.push(payload);

            // state.singleNews.status = 'idle';
        },
        [getSingleNews.rejected]: (state, { payload }) => {
            state.singleNews.error = payload;

            throw new Error(payload);
        }
    }
});

export const { getSingleMostPopularNews } = newsSlice.actions;

export default newsSlice.reducer;
