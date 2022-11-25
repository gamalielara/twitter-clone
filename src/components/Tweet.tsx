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

const Tweet: React.FC = () => {
    return (
        <TweetContainer className="tweet-container" padding={[0, 0, 10]} margin={[10, 5]}>
            <FlexBox gap="10px" padding={[0, 10]}>
                <ProfileImage src="https://pbs.twimg.com/profile_images/1564101520043479043/eJpWqka2_400x400.jpg"/>
                <Box>
                    <RegularText bold inlineBlock margin={[0, 5, 0, 0]}>Username</RegularText>
                    <SomewhatRegularText inlineBlock margin={[0, 0, 5, 0]}>@username</SomewhatRegularText>
                    <SomewhatRegularText>Lorem Ipsum Dolor sit amet .......</SomewhatRegularText>
                    <FlexBox className="action-box" margin={[10, 0, 0]} gap="30px">
                        <FlexBox align="center">
                            <ActionButton width={"20px"} height={"20px"} padding={[2]}>
                                <ReplyIcon color={Color.BLUE_PRIMARY}/>
                            </ActionButton>
                            <SmallText>2,019</SmallText>
                        </FlexBox>

                        <FlexBox align="center">
                            <ActionButton width={"20px"} height={"20px"} padding={[2]}>
                                <RetweetIcon color={Color.BLUE_PRIMARY}/>
                            </ActionButton>
                            <SmallText>12,009</SmallText>
                        </FlexBox>

                        <FlexBox align="center">
                            <ActionButton width={"20px"} height={"20px"} padding={[2]}>
                                <LikeIcon color={Color.BLUE_PRIMARY}/>
                            </ActionButton>
                            <SmallText>2,902</SmallText>
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