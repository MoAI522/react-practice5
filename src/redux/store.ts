import { configureStore } from "@reduxjs/toolkit";

import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./slices";

const middlewares = [thunk, createLogger()];

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});
export default store;
export type AppDispatch = typeof store.dispatch;
