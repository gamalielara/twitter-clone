import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tweetAdapter } from "../adapter/tweetAdapter";

export const fetchAllTweets = createAsyncThunk(
  "tweets/fetchAllTweets",
  async (page: number = 1, thunkAPI) => {
    const tweets = fetch(
      `${process.env.REACT_APP_BASE_URL}/tweets?_page=${page}`
    ).then((data) => data.json());
    return tweets;
  }
);

const initialState = tweetAdapter.getInitialState({
  isLoading: false,
  isError: false,
});

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    getTweets: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTweets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        tweetAdapter.addMany(state, action.payload);
      })
      .addCase(fetchAllTweets.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { getTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
