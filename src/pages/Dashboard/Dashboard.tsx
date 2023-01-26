import React, { useEffect, useState } from "react";
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
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Dashboard: React.FC = () => {
  const { tweets, isLoading } = useSelector(
    (state: AppInterface) => state.tweetsState
  );
  const [page, setPage] = useState<number>(1);
  const { isIntersecting, intersectionRef } = useIntersectionObserver();

  const dispatch = useDispatch<typeof store.dispatch>();

  useEffect(() => {
    dispatch(fetchAllTweets(page));
  }, [page]);

  useEffect(() => {
    if (isIntersecting) {
      setPage((state) => state + 1);
    }
  }, [isIntersecting]);

  return (
    <>
      {isLoading && <LoadingTwitterIcon />}
      <DashboardHeader />
      <div className="dashboard">
        <div className="dashboard-main-container">
          <div className="circle-home">
            <HomeIcon color={Color.LIGHT_GRAY} filled />
          </div>

          {tweets.map((tweet, i) => {
            if (i === tweets.length - 1) {
              return (
                <div key={tweet._id} ref={intersectionRef}>
                  <Tweet tweet={tweet} />
                </div>
              );
            } else {
              return <Tweet key={tweet._id} tweet={tweet} />;
            }
          })}
        </div>
      </div>
      <FloatingCreateNewTweetButton />
    </>
  );
};

export default Dashboard;
