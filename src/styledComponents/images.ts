import styled from "styled-components";

interface IImage {
  width?: number;
  height?: number;
  borderRadius?: boolean;
}

export const Image = styled.img<IImage>`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "100%")};
  border-radius: ${(props) => props.borderRadius && "100%"};
`;

export const ProfileImage = styled(Image)`
  width: 50px;
  height: 50px;
  aspect-ratio: 1;
  border-radius: 100%;
  background-color: #1DA1F2;
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;
