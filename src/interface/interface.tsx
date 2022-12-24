import {Color} from "../constants/colors";

export interface ISVG {
    color: Color;
    filled?: boolean;
}


export interface TweetInterface{
    username: string;
    display_name: string;
    timestamp: number|string|Date;
    tweet_body: string;
    is_verified: boolean;
    replies_count: number;
    retweet_count: number;
    likes_count: number;
    is_liked: boolean;
    is_retweeted: boolean;
    profile_picture?: string;
    image_attached?:string[];

}