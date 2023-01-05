import React, { useContext } from "react";
import RecipesListItem from "../RecipesListItem";
import AppContext from "../../context/context";
import { StyledDivRecipesList, StyledUl } from "./StyledulListItem";

const RecipesList = () => {
  const { recipes, offset, totalResults, increaseOffset } =
    useContext(AppContext);

  return (
    <StyledDivRecipesList>
      <StyledUl>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <RecipesListItem {...recipe} />
          </li>
        ))}
      </StyledUl>
      {offset < totalResults ? (
        <button onClick={increaseOffset}>get 10 more</button>
      ) : null}
    </StyledDivRecipesList>
  );
};

export default RecipesList;
