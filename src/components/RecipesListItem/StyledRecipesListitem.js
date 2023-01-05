import styled from "styled-components";
import { devices } from "../../globalStyles/GlobalStyles";

export const StyledDivListitem = styled.div`
  width: 19vw;
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding: 0.5rem;
  .styled__div__h3 {
    font-size: 1rem;
  }

  img {
    width: 15vw;
    height: auto;
    aspect-ratio: 3/2;
    object-fit: contain;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  img:hover {
    opacity: 0.8;
  }
  div {
    margin-bottom: 1rem;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  /* 
  @media ${devices.mobileS} {
    width: 20vw;
    max-width: 860px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
    max-width: 90%;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 0.5rem;
    img {
      max-width: 100%;
      height: auto;
      aspect-ratio: 3/2;
      object-fit: contain;
    }
  }
  @media ${devices.laptopL} {
    max-width: 900px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 0.5rem;
    img {
      max-width: 100%;
      height: auto;
      aspect-ratio: 3/2;
      object-fit: contain;
    }
  }
  @media ${devices.desktop} {
    width:  2048px
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 0.5rem;
    img {
      max-width: 100%;
      height: auto;
      aspect-ratio: 3/2;
      object-fit: contain;
    }
  } */
`;
