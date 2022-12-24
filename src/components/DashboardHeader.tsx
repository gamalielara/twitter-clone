import DirectMessageIcon from "../assets/DirectMessageIcon";
import NotificationIcon from "../assets/NotificationIcon";
import {Color} from "../constants/colors";
import {Box, FlexBox, FluidBox, GradientLinearHeader, Header} from "../styledComponents/containers";
import {ProfileImage} from "../styledComponents/images";
import {Position} from "../styledComponents/positions";
import {LargeText, RegularText} from "../styledComponents/texts";

const DashboardHeader = () => {
  return (
    <Header
      position={Position.STICKY}
      height="150px"
      width="100%"
      bgColor={Color.DARK_GRAY}
      padding={[5, 10]}
      top="0"
      left="0"
    >
      <FlexBox
        className="profile-info"
        padding={[10, 20]}
        z={9}
        position={Position.ABSOLUTE}
        top="0"
        left="0"
        align="center"
        justify="space-between"
        width="100%"
        height="80%"
      >
        <FlexBox>
          <ProfileImage src="https://pbs.twimg.com/profile_images/1564101520043479043/eJpWqka2_400x400.jpg" />
          <FluidBox className="user-detail" margin={[0, 10]} height="0">
            <LargeText bold color={Color.WHITE}>Taylor Swift</LargeText>
            <RegularText color={Color.WHITE}>@taylorswift13</RegularText>
          </FluidBox>
        </FlexBox>

        <FlexBox>
          <Box width="25px" height="25px" margin={[0, 10]}>
            <NotificationIcon color={Color.LIGHT_GRAY} filled />
          </Box>
          <Box width="25px" height="25px" margin={[0, 10]}>
            <DirectMessageIcon color={Color.LIGHT_GRAY} filled />
          </Box>
        </FlexBox>
      </FlexBox>
      <GradientLinearHeader></GradientLinearHeader>
    </Header>
  );
};

export default DashboardHeader;
