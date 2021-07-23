import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { randomObject } from "../assets/utils";
import { NEWS } from "../base";

const initialState = {
    allNews: {
        data: [],
        status: "idle",
    },
    popularNews: {
        data: [],
        status: "idle",
    },
};

const config = {
    method: 'GET',
    url: `${NEWS.BASE_URL}/everything`,
    params: {
        q: 'technology',
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

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: {
        [getNews.fulfilled]: (state, { payload }) => {
            state.allNews.status = 'fulfilled';
            state.allNews.data.push(payload.articles);
        },
        [getMostPopularNews.fulfilled]: (state, { payload }) => {
            state.popularNews.status = 'fulfilled';
            const data = randomObject(payload.results);
            state.popularNews.data.push(data);
        }
    }
});

export const { getSingleMostPopularNews } = newsSlice.actions;

export default newsSlice.reducer;
