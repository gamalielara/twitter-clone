import React from "react";
import "./styles.scss"
import TweetIcon from "../../assets/TweetIcon";
import {Color} from "../../constants/colors";

const FloatingCreateNewTweetButton:React.FC = () => {
    return (
        <button className="create-tweet-button">
            <TweetIcon color={Color.WHITE}/>
        </button>
    )
}

export default FloatingCreateNewTweetButton;