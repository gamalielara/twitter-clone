import React, { useEffect, useState } from "react";
import SplashScreen from "../pages/SplashScreen";

// eslint-disable-next-line import/no-anonymous-default-export
export default (Component: React.FC): React.FC =>
  (props) => {
    const [showComponent, setShowComponent] = useState<boolean>(false);

    useEffect(() => {
      setTimeout(() => setShowComponent(true), 1200);
    });

    if (showComponent) return <Component {...props} />;

    return <SplashScreen />;
  };
