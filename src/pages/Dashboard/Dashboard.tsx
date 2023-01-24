import React, { useEffect } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import HomeIcon from "../../assets/HomeIcon";
import { Color } from "../../constants/colors";
import Tweet from "../../components/Tweet/Tweet";
import "./styles.scss";
import FloatingCreateNewTweetButton from "../../components/FloatingCreateNewTweetButton/FloatingCreateNewTweetButton";
import { AppInterface } from "../../interface/interface";
import LoadingTwitterIcon from "../../assets/LoadingTwitterIcon";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTweets } from "../../redux/tweets/tweetsSlice";
import { store } from "../../redux/store";

const Dashboard: React.FC = () => {
  const { tweets, isLoading } = useSelector(
    (state: AppInterface) => state.tweetsState
  );
  const dispatch = useDispatch<typeof store.dispatch>();

  useEffect(() => {
    dispatch(fetchAllTweets());
  }, []);

  console.log(tweets);

  return (
    <>
      {isLoading && <LoadingTwitterIcon />}
      <DashboardHeader />
      <div className="dashboard">
        <div className="dashboard-main-container">
          <div className="circle-home">
            <HomeIcon color={Color.LIGHT_GRAY} filled />
          </div>

          {tweets.map((tweet, i) => (
            <Tweet key={tweet._id} tweet={tweet} />
          ))}
        </div>
      </div>
      <FloatingCreateNewTweetButton />
    </>
  );
};

export default Dashboard;
