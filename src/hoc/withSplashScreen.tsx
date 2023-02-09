import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppInterface } from "../interface/interface";
import SplashScreen from "../pages/SplashScreen";
import { store } from "../redux/store";
import { fetchAllTweets } from "../redux/tweets/tweetsSlice";
import { fetchAllUsers, fetchThisUser } from "../redux/users/usersSlice";

// eslint-disable-next-line import/no-anonymous-default-export
export default (Component: React.FC): React.FC =>
  (props) => {
    const [showComponent, setShowComponent] = useState<boolean>(false);

    const { ids: userIds } = useSelector(
      (state: AppInterface) => state.usersState
    );

    const { ids: tweetIds } = useSelector(
      (state: AppInterface) => state.tweetsState
    );

    const dispatch = useDispatch<typeof store.dispatch>();

    useEffect(() => {
      dispatch(fetchAllUsers());
      dispatch(fetchAllTweets(1));
    }, []);

    useEffect(() => {
      if (userIds.length && tweetIds.length) {
        setTimeout(() => setShowComponent(true), 1200);
      }
    }, [userIds, tweetIds]);

    if (showComponent) return <Component {...props} />;

    return <SplashScreen animate={!!userIds.length && !!tweetIds.length} />;
  };
