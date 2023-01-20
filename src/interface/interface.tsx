import { Color } from "../constants/colors";

export interface ISVG {
  color: Color;
  filled?: boolean;
}

export interface TweetInterface {
  _id: string;
  tweet_body: string;
  replies_count: number;
  retweet_count: number;
  likes_count: number;
  is_liked: boolean;
  is_retweeted: boolean;
  image_attached: string[];
  user: UserInterface | null;
}

export interface UserInterface {
  _id: string;
  username: string;
  display_name: string;
  followers_count: number;
  profile_picture: string;
  readonly is_verified: boolean;
}
