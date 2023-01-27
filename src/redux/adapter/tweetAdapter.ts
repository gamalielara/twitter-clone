import { createEntityAdapter } from "@reduxjs/toolkit";
import { TweetInterface } from "../../interface/interface";

export const tweetAdapter = createEntityAdapter<TweetInterface>({
  selectId: (book) => book._id,
});
