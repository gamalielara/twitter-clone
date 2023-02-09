import { createEntityAdapter } from "@reduxjs/toolkit";
import { TweetInterface } from "../../interface/interface";

export const tweetAdapter = createEntityAdapter<TweetInterface>({
  selectId: (tweet) => tweet._id,
});
