import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  padding: 10px 30px;
  border: 2px solid;
  border-radius: 20px;
  letter-spacing: 1px;
  color: #666;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
  width: ${({ width }) => (width ? width : "150px")};
  width: ${({ height }) => (height ? height : "150px")};

  &:hover {
    transform: scale(0.99);
    transition-duration: 0.9s;
    padding: 10px 30px;
    border-radius: 20px;
    letter-spacing: 1px;
    color: #fff;
    background: #000;
    border-color: #fff;
  }

  ${({ footerBtn }) =>
    footerBtn &&
    css`
      padding: 20px 50px;
      border-radius: 30px;
    `}
`;
