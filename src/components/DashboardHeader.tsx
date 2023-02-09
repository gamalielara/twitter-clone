import { useSelector } from "react-redux";
import DirectMessageIcon from "../assets/DirectMessageIcon";
import NotificationIcon from "../assets/NotificationIcon";
import { Color } from "../constants/colors";
import { AppInterface } from "../interface/interface";
import {
  Box,
  FlexBox,
  FluidBox,
  GradientLinearHeader,
  Header,
} from "../styledComponents/containers";
import { ProfileImage } from "../styledComponents/images";
import { Position } from "../styledComponents/positions";
import { LargeText, RegularText } from "../styledComponents/texts";

const DashboardHeader = () => {
  const allUsers = useSelector(
    (state: AppInterface) => state.usersState.entities
  );
  const thisUserId = useSelector(
    (state: AppInterface) => state.usersState.thisUserId
  );

  const thisUser = allUsers[thisUserId];
  console.log(thisUser, thisUserId);

  if (!thisUser) return <></>;

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
          <ProfileImage
            src={
              thisUser.profile_picture ||
              "https://upload.wikimedia.org/wikipedia/id/4/47/Taylor_Swift_-_Red_%28Taylor%27s_Version%29.png"
            }
          />
          <FluidBox className="user-detail" margin={[0, 10]} height="0">
            <LargeText bold color={Color.WHITE}>
              {thisUser.display_name}
            </LargeText>
            <RegularText color={Color.WHITE}>@{thisUser.username}</RegularText>
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
