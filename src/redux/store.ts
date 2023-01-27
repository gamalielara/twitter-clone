import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tweetsSlice from "./tweets/tweetsSlice";
import usersSlice from "./users/usersSlice";

const reducers = combineReducers({
  tweetsState: tweetsSlice,
  usersState: usersSlice,
});

export const store = configureStore({
  reducer: reducers,
});
