import styled, { css } from "styled-components";
import { Color } from "../constants/colors";
import { getMargin, getPadding } from "../helpers/getPaddingAndMargin";
import { Position } from "./positions";

interface IBox {
  width?: string;
  height?: string;
  bgColor?: string;
  padding?: number[];
  margin?: number[];
  z?: number;
  position?: Position;
  top?: string;
  left?: string;
}

interface IFlexBox extends IBox {
  column?: boolean;
  justify?: string;
  align?: string;
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

export const Box = styled.div<IBox>`
  width: ${(props) => props.width && `${props.width}`};
  height: ${(props) => props.height && `${props.height}`};
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
`;

export const FluidBox = styled(Box)`
  width: fit-content;
  height: fit-content;
`;

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
