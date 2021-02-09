import { combineReducers } from "redux";

import tweetsReducer from "./tweets";
import userReducer from "./user";

const rootReducer = combineReducers({
  tweet: tweetsReducer,
  user: userReducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
