import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";
import { StyledNav } from "./StyledNavBar";

const NavBar = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.favRecipes}>Favorites Recipes</Link>
        </li>
        <li>
          <Link to={routes.about}>About</Link>
        </li>
        <li>
          <Link to={routes.recipeName}>RecipeName</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default NavBar;
