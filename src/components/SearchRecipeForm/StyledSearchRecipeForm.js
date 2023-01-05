import styled from "styled-components";

export const StyledSearchRecipeFormDiv = styled.div`
  display: flex;
  height: 40vh;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
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
export const StyledSearchRecipeTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    display: block;
    font-size: 3em;
    margin-top: 1em;

    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
  h2 {
    display: block;
    font-size: 2em;
    margin-top: 1em;
    margin-bottom: -2em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
`;
