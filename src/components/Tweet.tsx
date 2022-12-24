import React from "react";
import {Box, FlexBox, TweetContainer} from "../styledComponents/containers";
import {ProfileImage} from "../styledComponents/images";
import {RegularText, SmallText, SomewhatRegularText} from "../styledComponents/texts";
import ReplyIcon from "../assets/ReplyIcon";
import {Color} from "../constants/colors"
import {ActionButton} from "../styledComponents/buttons";
import RetweetIcon from "../assets/RetweetIcon";
import LikeIcon from "../assets/LikeIcon";
import ShareIcon from "../assets/ShareIcon";
import {TweetInterface} from "../interface/interface";

interface TweetProps{
    tweet: TweetInterface;
}

const Tweet: React.FC<TweetProps> = ({tweet }) => {
    const {display_name, username,tweet_body,likes_count, retweet_count, replies_count, profile_picture} = tweet;

    return (
        <TweetContainer className="tweet-container" padding={[0, 0, 10]} margin={[10, 5]}>
            <FlexBox gap="10px" padding={[0, 10]}>
                <ProfileImage src={profile_picture || "https://pbs.twimg.com/profile_images/1564101520043479043/eJpWqka2_400x400.jpg"}/>
                <Box>
                    <RegularText bold inlineBlock margin={[0, 5, 0, 0]}>{display_name}</RegularText>
                    <SomewhatRegularText inlineBlock margin={[0, 0, 5, 0]}>@{username}</SomewhatRegularText>
                    <SomewhatRegularText>{tweet_body}</SomewhatRegularText>
                    <FlexBox className="action-box" margin={[10, 0, 0]} gap="30px">
                        <FlexBox align="center">
                            <ActionButton width={"20px"} height={"20px"} padding={[2]}>
                                <ReplyIcon color={Color.BLUE_PRIMARY}/>
                            </ActionButton>
                            <SmallText>{replies_count}</SmallText>
                        </FlexBox>

                        <FlexBox align="center">
                            <ActionButton width={"20px"} height={"20px"} padding={[2]}>
                                <RetweetIcon color={Color.BLUE_PRIMARY}/>
                            </ActionButton>
                            <SmallText>{retweet_count}</SmallText>
                        </FlexBox>

                        <FlexBox align="center">
                            <ActionButton width={"20px"} height={"20px"} padding={[2]}>
                                <LikeIcon color={Color.BLUE_PRIMARY}/>
                            </ActionButton>
                            <SmallText>{likes_count}</SmallText>
                        </FlexBox>

                        <FlexBox align="center">
                            <ActionButton width={"20px"} height={"20px"} padding={[2]}>
                                <ShareIcon color={Color.BLUE_PRIMARY}/>
                            </ActionButton>
                        </FlexBox>
                    </FlexBox>
                </Box>
            </FlexBox>
        </TweetContainer>
    )
}

export default Tweet