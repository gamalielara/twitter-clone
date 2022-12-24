import React, {useEffect, useState} from "react";
import DashboardHeader from "../components/DashboardHeader";
import {Box, Circle, DashboardMainContainer} from "../styledComponents/containers";
import {Position} from "../styledComponents/positions";
import HomeIcon from "../assets/HomeIcon";
import {Color} from "../constants/colors";
import Tweet from "../components/Tweet";
import "./styles.scss"
import FloatingCreateNewTweetButton from "../components/FloatingCreateNewTweetButton/FloatingCreateNewTweetButton";
import {TweetInterface} from "../interface/interface";

const Dashboard: React.FC = () => {
    const [tweets, setTweets] = useState<TweetInterface[]|null>(null);
    // const tweets = new Array(100).fill(null)

    useEffect(() => {
        fetch("https://twitter.com/api/tweets").then(res => res.json()).then((data) => setTweets(data.data))
    }, [])



    return (tweets) && (
        <>
            <DashboardHeader/>
            <div className="dashboard">
                <DashboardMainContainer position={Position.RELATIVE} padding={[50, 0, 0]}>
                    <Circle bgColor={Color.BLUE_PRIMARY} position={Position.ABSOLUTE} width="60px" height="60px"
                            padding={[15]} top='-20px' left="50%" transform={["-50%", "0"]}>
                        <HomeIcon color={Color.LIGHT_GRAY} filled/>
                    </Circle>

                    {
                        tweets.map((tweet, i) => <Tweet key={i} tweet={tweet}/>)
                    }
                </DashboardMainContainer>
            </div>
            <FloatingCreateNewTweetButton/>
        </>
    );
};

export default Dashboard;
