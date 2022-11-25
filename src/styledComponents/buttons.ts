import styled, {css} from "styled-components";
import {Position} from "./positions";
import {getMargin, getPadding} from "../helpers/getPaddingAndMargin";

interface ButtonInterface {
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

export const buttonStyle = css<ButtonInterface>`
  border: none;
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


export const ActionButton = styled.button`
  ${buttonStyle}
`