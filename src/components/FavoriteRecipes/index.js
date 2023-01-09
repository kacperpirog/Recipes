import React, { useContext } from "react";
import AppContext from "../../context/context";
import { Link } from "react-router-dom";
import { StyledFavoriteRecipesDiv } from "./StyledFavoriteRecipes";
import Button from "../atoms/Button";
import { StyledSearchRecipeTitleDiv } from "../SearchRecipeForm/StyledSearchRecipeForm";

const FavoriteRecipes = () => {
  const context = useContext(AppContext);
  return (
    <>
      <StyledSearchRecipeTitleDiv>
        <h1>My favorites Recipes</h1>
      </StyledSearchRecipeTitleDiv>

      <StyledFavoriteRecipesDiv>
        <ul>
          {context.favRecipes.map((addFavRecipes) => {
            const { id, title, image, servings, readyInMinutes } =
              addFavRecipes;
            return (
              <>
                <li key={id}>
                  <div>
                    <Link
                      to={{
                        pathname: `/recipe/${title.replace(/\s/g, "-")}`,
                      }}
                      state={{
                        title,
                        image,
                        id,
                        servings,
                        readyInMinutes,
                      }}
                    >
                      <img src={`${context.baseImgUrl}${image}`} alt={title} />
                    </Link>
                    <h3>{title}</h3>
                    <Button onClick={() => context.deleteRecipes(id)}>
                      Delete
                    </Button>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </StyledFavoriteRecipesDiv>
    </>
  );
};

export default FavoriteRecipes;
