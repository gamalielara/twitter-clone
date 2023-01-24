import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TweetsStateInterface } from "../../interface/interface";

export const fetchAllTweets = createAsyncThunk(
  "tweets/fetchAllTweets",
  async () => {
    const tweets = fetch(`http://10.20.145.52:1919/tweets?_page=5`).then(
      (data) => data.json()
    );
    return tweets;
  }
);

const initialState: TweetsStateInterface = {
  isLoading: false,
  tweets: [],
};

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
        state.tweets = [...state.tweets, ...action.payload];
      });
  },
});

export const { getTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
