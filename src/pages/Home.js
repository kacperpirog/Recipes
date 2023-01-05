import React from "react";
import RecipesList from "../components/RecipesList";
import SearchRecipeForm from "../components/SearchRecipeForm";

const Home = () => {
  return (
    <div>
      <SearchRecipeForm />
      <RecipesList />
    </div>
  );
};

export default Home;
