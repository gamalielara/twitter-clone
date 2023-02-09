import { Color } from "../constants/colors";

export interface ISVG {
  color: Color;
  filled?: boolean;
  isRetweeted?: boolean;
}

export interface TweetsStateInterface {
  isLoading: boolean;
  isError: boolean;
  entities: Record<string, TweetInterface>;
  ids: string[];
}

export interface UserStateInterface {
  isLoading: boolean;
  isError: boolean;
  thisUser: UserInterface;
  entities: Record<string, UserInterface>;
  ids: string[];
}

export interface AppInterface {
  tweetsState: TweetsStateInterface;
  usersState: UserStateInterface;
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
  user: string;
}

export interface UserInterface {
  _id: string;
  username: string;
  display_name: string;
  followers_count: number;
  profile_picture: string;
  readonly is_verified: boolean;
}
