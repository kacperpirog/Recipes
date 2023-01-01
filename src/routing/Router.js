import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/navigation/NavBar";
import About from "../pages/About";
import FavRecipes from "../pages/FavRecipes";
import Home from "../pages/Home";
import SingleRecipe from "../pages/SingleRecipe";
import { routes } from "../utils/routes";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.favRecipes} element={<FavRecipes />} />
        <Route path={routes.recipeName} element={<SingleRecipe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
