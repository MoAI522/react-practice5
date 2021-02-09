import { createSlice } from "@reduxjs/toolkit";

import { Tweet } from "../../interfaces";
import { AppDispatch } from "../store";

interface State {
  tweets: Array<Tweet>;
  fetching: boolean;
  fetched: boolean;
  error?: Error;
}

const initialState: State = {
  tweets: [],
  fetching: false,
  fetched: false,
};

const slice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    fetchTweetsStart: (state) => {
      return { ...state, fetching: true };
    },
    fetchTweetsFulfilled: (state, action) => {
      return {
        ...state,
        fetching: false,
        fetched: true,
        tweets: action.payload,
      };
    },
    fetchTweetsRejected: (state, action) => {
      return { ...state, fetching: false, error: action.payload };
    },
  },
});

export default slice.reducer;
export const {
  fetchTweetsStart,
  fetchTweetsFulfilled,
  fetchTweetsRejected,
} = slice.actions;

export const fetchTweets = () => async (dispatch: AppDispatch) => {
  dispatch(fetchTweetsStart());
  await (() => new Promise((resolve) => setTimeout(() => resolve(0), 1000)))();
  const dummyresult: Array<Tweet> = [
    {
      id: 0,
      user: {
        id: "aaaa",
        name: "test",
        iconSrc: "./images/icon.jpg",
        bio: "",
      },
      date: new Date(2021, 2, 9, 12, 0, 0),
      text: "テキストテキスト",
      replies: [],
      retweets: [],
      favorites: [],
    },
    {
      id: 1,
      user: {
        id: "aaaa",
        name: "test",
        iconSrc: "./images/icon.jpg",
        bio: "",
      },
      date: new Date(2021, 2, 9, 12, 0, 0),
      text: "テキストテキストテキ",
      replies: [],
      retweets: [],
      favorites: [],
    },
  ];
  dispatch(fetchTweetsFulfilled(dummyresult));
};
