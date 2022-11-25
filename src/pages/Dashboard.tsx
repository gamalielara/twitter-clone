import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import {Box, Circle, DashboardMainContainer} from "../styledComponents/containers";
import {Position} from "../styledComponents/positions";
import HomeIcon from "../assets/HomeIcon";
import {Color} from "../constants/colors";
import Tweet from "../components/Tweet";

const Dashboard: React.FC = () => {
    const tweets = new Array(100).fill(null)
    return (
        <Box className="header-page">
            <DashboardHeader/>
            <Box position={Position.RELATIVE}  minHeight={"100vh"} margin={[150, 0, 0]}>
                <DashboardMainContainer position={Position.RELATIVE} padding={[50, 0, 0]}>
                    <Circle bgColor={Color.BLUE_PRIMARY} position={Position.ABSOLUTE} width="60px" height="60px"
                            padding={[15]} top='-20px' left="50%" transform={["-50%", "0"]}>
                        <HomeIcon color={Color.LIGHT_GRAY} filled/>
                    </Circle>

                    {
                        tweets.map((tweet) => <Tweet/>)
                    }
                </DashboardMainContainer>
            </Box>
        </Box>
    );
};

export default Dashboard;
