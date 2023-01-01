import React, { useContext } from "react";
import AppContext from "../../context/context";
import Button from "../atoms/Button";
import { StyledSearchRecipeFormDiv } from "./StyledSearchRecipeForm";

const SearchRecipeForm = () => {
  const { searchRecipe } = useContext(AppContext);

  return (
    <StyledSearchRecipeFormDiv>
      <form onSubmit={searchRecipe}>
        <input
          type="search"
          placeholder="Type recipe name..."
          name="recipeName"
        />
        {/* <input type="number" name="numberInput" /> */}
        <label htmlFor="recipeNumber">Choose number of recipes:</label>
        <select name="recipeNumber" id="recipeNumber">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>

        <Button type="submit">search</Button>
      </form>
    </StyledSearchRecipeFormDiv>
  );
};

export default SearchRecipeForm;
