import styled, {css} from "styled-components";
import {Color} from "../constants/colors";
import {getMargin, getPadding} from "../helpers/getPaddingAndMargin";
import {Position} from "./positions";

interface IBox {
    width?: string;
    height?: string;
    minHeight?: string;
    minWidth?: string;
    bgColor?: string;
    padding?: number[];
    margin?: number[];
    z?: number;
    position?: Position;
    top?: string;
    left?: string;
    transform?: string[];
}

interface IFlexBox extends IBox {
    column?: boolean;
    justify?: string;
    align?: string;
    gap?: string;
}

interface ISGVWrapper {
    color?: Color;
}

export const MainContainer = styled.main`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  overflow: scroll;
`;

export const divStyles = css<IBox>`
  width: ${(props) => props.width && `${props.width}`};
  height: ${(props) => props.height && `${props.height}`};
  min-height: ${(props) => props.minHeight && `${props.minHeight}`};
  min-width: ${(props) => props.minWidth && `${props.minWidth}`};
  box-sizing: border-box;
  background-color: ${(props) =>
          props.bgColor ? `${props.bgColor}` : "transparent"};
  ${(props) => props.padding && getPadding(props.padding)}
  ${(props) => props.margin && getMargin(props.margin)}
  ${(props) =>
          props.position &&
          css`
            position: ${props.position};
          `}
  ${(props) =>
          props.z &&
          css`
            z-index: ${props.z};
          `}
  ${(props) =>
          props.top &&
          css`
            top: ${props.top};
          `}
  ${(props) =>
          props.left &&
          css`
            left: ${props.left};
          `}

  ${props => props.transform && css`transform: translate(${props.transform[0]}, ${props.transform[1]})`}
`

export const Box = styled.div`${divStyles}`

export const FluidBox = styled(Box)`
  width: fit-content;
  height: fit-content;
`;

export const Header = styled.header`${divStyles}`

export const FlexBox = styled(Box)<IFlexBox>`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  ${(props) =>
          props.justify &&
          css`
            justify-content: ${props.justify};
          `}
  ${(props) =>
          props.align &&
          css`
            align-items: ${props.align};
          `}
  ${props => props.gap && css`gap: ${props.gap}`}
`;

export const SVGWrapper = styled.div<ISGVWrapper>`
  filter: ${(props) => {
    switch (props.color) {
      case Color.BLACK:
        return "invert(0%) sepia(0%) saturate(6439%) hue-rotate(100deg) brightness(91%) contrast(104%);";
      case Color.BLUE_PRIMARY:
        return "invert(46%) sepia(91%) saturate(1948%) hue-rotate(180deg) brightness(105%) contrast(90%);";
      default:
        return "invert(100%) sepia(0%) saturate(5%) hue-rotate(164deg) brightness(103%) contrast(103%);";
    }
  }};
`;

export const DashboardMainContainer = styled.div`
  ${divStyles};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: absolute;
  top: -25px;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background-color: white;
  box-shadow: 5px 5px 10px 5px rgb(0 0 0 / 70%);
  -webkit-box-shadow: 5px 5px 10px 5px rgb(0 0 0 / 70%);
  -moz-box-shadow: 5px 5px 10px 5px rgb(0 0 0 / 70%);
`

export const Circle = styled(Box)`
  border-radius: 100%;
`

export const TweetContainer = styled(Box)`
  border-bottom: 1px solid #AAB8C2;
`

export const GradientLinearHeader = styled(Box)`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to top, white, #657786);
  height: 1rem;
`


