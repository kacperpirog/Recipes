import styled from "styled-components";
import { devices } from "../../globalStyles/GlobalStyles";

export const StyledDivListitem = styled.div`
  width: 20vw;
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding: 0.5rem;

  @media ${devices.mobileS} {
    width: 100vw;
    max-width: 860px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 0.5rem;
  }
  @media ${devices.mobileM} {
    width: 100vw;
    max-width: 860px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 0.5rem;
  }

  @media ${devices.tablet} {
    width: 100vw;
    max-width: 860px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 0.5rem;
  }
  @media ${devices.laptop} {
    max-width: 1024px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 0.5rem;
  }
  @media ${devices.desktop} {
    max-width: 1400px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 0.5rem;
  }

  img {
    max-width: 100%;
    height: auto;
    aspect-ratio: 3/2;
    object-fit: contain;
  }
  img:hover {
    opacity: 0.8;
  }
  div {
  }
`;
