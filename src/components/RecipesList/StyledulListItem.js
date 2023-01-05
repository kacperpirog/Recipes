import styled from "styled-components";
import { devices } from "../../globalStyles/GlobalStyles";

export const StyledDivRecipesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* @media ${devices.mobileS} {
    max-width: 860px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 0.5rem;

    flex-direction: column;
  }
  @media ${devices.mobileM} {
    max-width: 860px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 0.5rem;
  }

  @media ${devices.tablet} {
    max-width: 860px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 0.5rem;
  }
  @media ${devices.laptop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 0.5rem;
  }
  @media ${devices.desktop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 0.5rem;
  } */
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
