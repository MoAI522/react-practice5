import { createSlice } from "@reduxjs/toolkit";

import { User } from "../../interfaces";
import { AppDispatch } from "../store";

interface State {
  me: User;
  fetching: boolean;
  fetched: boolean;
  error?: Error;
}

const initialState: State = {
  me: {
    id: "",
    name: "",
    iconSrc: "",
    bio: "",
  },
  fetching: false,
  fetched: false,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserStart: (state) => {
      return { ...state, fetching: true };
    },
    fetchUserFulfilled: (state, action) => {
      return { ...state, fetching: false, fetched: true, user: action.payload };
    },
    fetchUserRejected: (state, action) => {
      return { ...state, fetching: false, error: action.payload };
    },
  },
});

export default slice.reducer;
export const {
  fetchUserStart,
  fetchUserFulfilled,
  fetchUserRejected,
} = slice.actions;

export const fetchUser = async (dispatch: AppDispatch) => {
  dispatch(fetchUserStart());
  await (() => new Promise((resolve) => setTimeout(() => resolve(0), 1000)))();
  const dummyresult = {
    id: "aaaa",
    name: "test",
    iconSrc: "./resources/images/icon.jpg",
    bio: "はろわ",
  };
  dispatch(fetchUserFulfilled(dummyresult));
};
