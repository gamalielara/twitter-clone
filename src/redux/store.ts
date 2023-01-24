import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tweetsSlice from "./tweets/tweetsSlice";

const reducers = combineReducers({
  tweetsState: tweetsSlice,
});

export const store = configureStore({
  reducer: reducers,
});
