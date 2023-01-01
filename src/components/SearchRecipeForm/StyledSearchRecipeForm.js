import styled from "styled-components";

export const StyledSearchRecipeFormDiv = styled.div`
  display: flex;
  width: 90vw;
  height: 40vh;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 12rem;
    height: 2rem;
    border-color: black;
    text-align: center;
    text-transform: capitalize;
    font-size: 1rem;
    margin: 1rem;
  }
  select,
  label {
    font-size: 2rem;
    margin: 0.5rem;
  }
`;
