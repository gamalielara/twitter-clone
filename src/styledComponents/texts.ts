import styled, { css } from "styled-components";
import { Color } from "../constants/colors";
import { getMargin } from "../helpers/getPaddingAndMargin";

interface IText {
  color?: Color;
  margin?: number[];
  bold?: boolean;
}

export const RegularText = styled.p<IText>`
  font-size: 1rem;
  ${(props) => (props.margin ? getMargin(props.margin) : "0")};
  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `};
  color: ${(props) => props.color || "white"};
`;

export const LargeText = styled(RegularText)`
  font-size: 1.25rem;
`;

export const ExtraLargeText = styled(RegularText)`
  font-size: 1.5rem;
`;
