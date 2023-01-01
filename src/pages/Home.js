import React from "react";
import RecipesList from "../components/RecipesList/RecipesList";
import SearchRecipeForm from "../components/SearchRecipeForm/SearchRecipeForm";

const Home = () => {
  return (
    <div>
      <h1>Cookbook</h1>
      <h1>To jest Home page</h1>
      <SearchRecipeForm />
      <RecipesList />
    </div>
  );
};

export default Home;
