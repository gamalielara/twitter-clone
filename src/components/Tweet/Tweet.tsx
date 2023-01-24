import React from "react";
import { SmallText } from "../../styledComponents/texts";
import ReplyIcon from "../../assets/ReplyIcon";
import { Color } from "../../constants/colors";
import RetweetIcon from "../../assets/RetweetIcon";
import LikeIcon from "../../assets/LikeIcon";
import ShareIcon from "../../assets/ShareIcon";
import { TweetInterface } from "../../interface/interface";
import "./styles.scss";
import { VerifiedIcon } from "../../assets/VerifiedIcon";
import { convertIntToString } from "../../helpers/convertIntToString";

interface TweetProps {
  tweet: TweetInterface;
}

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  const { tweet_body, likes_count, retweet_count, replies_count, user } = tweet;

  const { username, display_name, profile_picture, is_verified } = user;

  return (
    <div className="tweet-container">
      <article className="tweet">
        <img
          className="profile-image"
          alt={username}
          src={
            profile_picture ||
            "https://pbs.twimg.com/profile_images/1564101520043479043/eJpWqka2_400x400.jpg"
          }
        />
        <div className="tweet-body">
          <div className="profile-tweeter">
            <span className="profile-tweeter-display-name">{display_name}</span>
            {is_verified && <VerifiedIcon />}
            <span className="profile-tweeter-username">@{username}</span>
          </div>
          <p>{tweet_body}</p>
          <div className="action-box">
            <div>
              <button>
                <ReplyIcon color={Color.BLUE_PRIMARY} />
              </button>
              <SmallText>{convertIntToString(replies_count)}</SmallText>
            </div>

            <div>
              <button>
                <RetweetIcon color={Color.BLUE_PRIMARY} />
              </button>
              <SmallText>{convertIntToString(retweet_count)}</SmallText>
            </div>

            <div>
              <button>
                <LikeIcon color={Color.BLUE_PRIMARY} />
              </button>
              <SmallText>{convertIntToString(likes_count)}</SmallText>
            </div>

            <div>
              <button>
                <ShareIcon color={Color.BLUE_PRIMARY} />
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Tweet;
