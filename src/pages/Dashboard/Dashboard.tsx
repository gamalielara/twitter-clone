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
import { fetchAllUsers } from "../../redux/users/usersSlice";

const Dashboard: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const { isIntersecting, intersectionRef } = useIntersectionObserver();

  const {
    ids: tweetIds,
    entities,
    isLoading: isFetchingTweetsLoading,
  } = useSelector((state: AppInterface) => state.tweetsState);

  const { isLoading: isFetchingUserLoading } = useSelector(
    (state: AppInterface) => state.usersState
  );

  const dispatch = useDispatch<typeof store.dispatch>();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  useEffect(() => {
    dispatch(fetchAllTweets(page));
  }, [page]);

  useEffect(() => {
    if (isIntersecting) {
      setPage((state) => state + 1);
    }
  }, [isIntersecting]);

  console.log("HELLO");

  return (
    <>
      {(isFetchingTweetsLoading || isFetchingUserLoading) && (
        <LoadingTwitterIcon />
      )}
      <DashboardHeader />
      <div className="dashboard">
        <div className="dashboard-main-container">
          <div className="circle-home">
            <HomeIcon color={Color.LIGHT_GRAY} filled />
          </div>

          {tweetIds.map((tweetId, i) => {
            const tweet = entities[tweetId];
            if (i === tweetIds.length - 1) {
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
