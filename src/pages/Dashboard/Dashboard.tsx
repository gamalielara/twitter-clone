import React, {useEffect, useState} from "react";
import DashboardHeader from "../../components/DashboardHeader";
import {Box, Circle, DashboardMainContainer} from "../../styledComponents/containers";
import {Position} from "../../styledComponents/positions";
import HomeIcon from "../../assets/HomeIcon";
import {Color} from "../../constants/colors";
import Tweet from "../../components/Tweet/Tweet";
import "./styles.scss"
import FloatingCreateNewTweetButton from "../../components/FloatingCreateNewTweetButton/FloatingCreateNewTweetButton";
import {TweetInterface} from "../../interface/interface";

const Dashboard: React.FC = () => {
    const [tweets, setTweets] = useState<TweetInterface[]|null>(null);

    useEffect(() => {
        fetch("https://twitter.com/api/tweets").then(res => res.json()).then((data) => setTweets(data.data))
    }, [])

    return (tweets) && (
        <>
            <DashboardHeader/>
            <div className="dashboard">
                <div className="dashboard-main-container">
                    <div className="circle-home">
                        <HomeIcon color={Color.LIGHT_GRAY} filled/>
                    </div>

                    {
                        tweets.map((tweet, i) => <Tweet key={i} tweet={tweet}/>)
                    }
                </div>
            </div>
            <FloatingCreateNewTweetButton/>
        </>
    );
};

export default Dashboard;
