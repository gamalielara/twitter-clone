import React from "react";
import { SmallText } from "../../styledComponents/texts";
import ReplyIcon from "../../assets/ReplyIcon";
import { Color } from "../../constants/colors";
import RetweetIcon from "../../assets/RetweetIcon";
import LikeIcon from "../../assets/LikeIcon";
import ShareIcon from "../../assets/ShareIcon";
import { AppInterface, TweetInterface } from "../../interface/interface";
import { VerifiedIcon } from "../../assets/VerifiedIcon";
import { convertIntToString } from "../../helpers/convertIntToString";
import ImagePreview from "../ImagePreview/ImagePreview";
import "./styles.scss";
import { useSelector } from "react-redux";

interface TweetProps {
  tweet: TweetInterface;
}

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  const { entities: userEntities } = useSelector(
    (state: AppInterface) => state.usersState
  );
  const {
    tweet_body,
    likes_count,
    retweet_count,
    replies_count,
    user,
    image_attached,
    is_liked,
    is_retweeted,
  } = tweet;

  console.log(user);

  if (userEntities[user]) {
    const { username, display_name, profile_picture, is_verified } =
      userEntities[user];

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
              <span className="profile-tweeter-display-name">
                {display_name}
              </span>
              {is_verified && <VerifiedIcon />}
              <span className="profile-tweeter-username">@{username}</span>
            </div>
            <p>{tweet_body}</p>
            <ImagePreview images={image_attached} />
            <div className="action-box">
              <div>
                <button>
                  <ReplyIcon color={Color.BLUE_PRIMARY} />
                </button>
                <SmallText>{convertIntToString(replies_count)}</SmallText>
              </div>

              <div>
                <button>
                  <RetweetIcon
                    color={Color.BLUE_PRIMARY}
                    isRetweeted={is_retweeted}
                  />
                </button>
                <SmallText>{convertIntToString(retweet_count)}</SmallText>
              </div>

              <div>
                <button>
                  <LikeIcon color={Color.BLUE_PRIMARY} filled={is_liked} />
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
  } else {
    return <>NO USER</>;
  }
};

export default Tweet;
