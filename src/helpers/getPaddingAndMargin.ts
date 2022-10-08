import { css } from "styled-components";

export const getPadding = (padding: number[]) => {
  switch (padding.length) {
    case 1:
      return css`
        padding: ${padding[0]}px;
      `;
    case 2:
      return css`
        padding: ${padding[0]}px ${padding[1]}px;
      `;
    default:
      const cssPadding = padding.map((p) => `${p}px`).join(" ");
      return css`
        padding: ${cssPadding};
      `;
  }
};

export const getMargin = (margin: number[]) => {
  switch (margin.length) {
    case 1:
      return css`
        margin: ${margin[0]}px;
      `;
    case 2:
      return css`
        margin: ${margin[0]}px ${margin[1]}px;
      `;
    default:
      const cssMargin = margin.map((p) => `${p}px`).join(" ");
      return css`
        margin: ${cssMargin};
      `;
  }
};
