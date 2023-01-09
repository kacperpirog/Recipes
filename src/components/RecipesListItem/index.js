import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/context";
import Button from "../atoms/Button";
import { StyledDivListitem } from "./StyledRecipesListitem";

const RecipesListItem = ({ title, image, id, servings, readyInMinutes }) => {
  const { baseImgUrl, addToFav, favRecipes } = useContext(AppContext);

  let isInFav;
  favRecipes.forEach((element) => {
    if (element.id === id) {
      isInFav = true;
    }
  });

  return (
    <StyledDivListitem>
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
        <div>
          <img src={`${baseImgUrl}${image}`} alt={title} id={id} />
        </div>
      </Link>
      <div>
        <h3 className="styled__div__h3">{title}</h3>
      </div>
      <div>
        <Button onClick={() => addToFav(id)}>
          {isInFav ? "in to fav" : "add to fav"}
        </Button>
      </div>
    </StyledDivListitem>
  );
};

export default RecipesListItem;
