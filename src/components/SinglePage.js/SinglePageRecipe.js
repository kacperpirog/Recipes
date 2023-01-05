import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import AppContext from "../../context/context";
import Button from "../atoms/Button";
import { StyledSinglePageRecipeDiv } from "./StyledSinglePageRecipe";

const SinglePageRecipe = () => {
  const { baseImgUrl, addToFav } = useContext(AppContext);

  const location = useLocation();
  const { title, image, id, servings, readyInMinutes } = location.state;
  console.log(location);

  return (
    <StyledSinglePageRecipeDiv>
      <h1>{title}</h1>
      <img src={`${baseImgUrl}${image}`} alt={title} />
      <h3>Time: {readyInMinutes} min</h3>
      <h4>Servings: {servings}</h4>

      <Button onClick={() => addToFav(id)}>add to fav</Button>
    </StyledSinglePageRecipeDiv>
  );
};
export default SinglePageRecipe;
