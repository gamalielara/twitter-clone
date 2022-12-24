import React from "react";
import {Box, FlexBox, TweetContainer} from "../../styledComponents/containers";
import {ProfileImage} from "../../styledComponents/images";
import {RegularText, SmallText, SomewhatRegularText} from "../../styledComponents/texts";
import ReplyIcon from "../../assets/ReplyIcon";
import {Color} from "../../constants/colors"
import {ActionButton} from "../../styledComponents/buttons";
import RetweetIcon from "../../assets/RetweetIcon";
import LikeIcon from "../../assets/LikeIcon";
import ShareIcon from "../../assets/ShareIcon";
import {TweetInterface} from "../../interface/interface";
import "./styles.scss"

interface TweetProps{
    tweet: TweetInterface;
}

const Tweet: React.FC<TweetProps> = ({tweet }) => {
    const {display_name, username,tweet_body,likes_count, retweet_count, replies_count, profile_picture} = tweet;

    return (
        <div className="tweet-container">
            <article className="tweet">
                <img className="profile-image" src={profile_picture || "https://pbs.twimg.com/profile_images/1564101520043479043/eJpWqka2_400x400.jpg"}/>
                <div className="tweet-body">
                    <span>{display_name}</span>
                    <span>@{username}</span>
                    <p>{tweet_body}</p>
                    <div className="action-box">
                        <div>
                            <button>
                                <ReplyIcon color={Color.BLUE_PRIMARY}/>
                            </button>
                            <SmallText>{replies_count}</SmallText>
                        </div>

                        <div>
                            <button>
                                <RetweetIcon color={Color.BLUE_PRIMARY}/>
                            </button>
                            <SmallText>{retweet_count}</SmallText>
                        </div>

                        <div>
                            <button>
                                <LikeIcon color={Color.BLUE_PRIMARY}/>
                            </button>
                            <SmallText>{likes_count}</SmallText>
                        </div>

                        <div>
                            <button>
                                <ShareIcon color={Color.BLUE_PRIMARY}/>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Tweet