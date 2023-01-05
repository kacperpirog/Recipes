import { useEffect, useState } from "react";
import axios from "axios";
import Router from "./routing/Router";
import AppContext from "./context/context";
import {
  getImgUrlFromLocalStorage,
  getRecipesFromLocalStorage,
} from "./utils/localStorageGetters";
import GlobalStyles from "./globalStyles/GlobalStyles";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [favRecipes, setFavRecipes] = useState([]);
  const [baseImgUrl, setBaseImgUrl] = useState("");
  const [offset, setOffset] = useState(0);
  const [recipeToSearch, setRecipeToSearch] = useState("");
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const localStorageFavRecipes = getRecipesFromLocalStorage();
    setFavRecipes(localStorageFavRecipes);
    const localStorageBaseImgUrl = getImgUrlFromLocalStorage();
    setBaseImgUrl(localStorageBaseImgUrl);
  }, []);

  useEffect(() => {
    get10MoreRecipes();
    localStorage.setItem("favRecipes", JSON.stringify(favRecipes));
    // eslint-disable-next-line
  }, [offset, favRecipes]);

  const searchRecipe = (e) => {
    e.preventDefault();

    const recipeName = e.target.recipeName.value;
    const recipeNumber = e.target.recipeNumber.value;

    console.log(typeof number);
    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${recipeName}&number=${recipeNumber}`
      )
      .then((res) => {
        console.log(res, "RES");
        console.log(typeof res.data.baseUri);
        localStorage.setItem("baseImgUrl", res.data.baseUri);

        const recipes = res.data.results;
        const baseImgUrl = res.data.baseUri;
        const offset = parseInt(recipeNumber);
        const recipeToSearch = recipeName;
        const totalResults = res.data.totalResults;

        setRecipes(recipes);
        setBaseImgUrl(baseImgUrl);
        setOffset(offset);
        setRecipeToSearch(recipeToSearch);
        setTotalResults(totalResults);

        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const get10MoreRecipes = () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${setRecipeToSearch}&number=10&offset=${offset}`
      )
      .then((res) => {
        console.log(res, "RES");
        const recipes = [...setRecipes, ...res.data.results];
        setRecipes(recipes);
        setOffset(offset);

        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const increaseOffset = () => {
    setOffset(offset + 10);
  };

  const deleteRecipes = (deleteId) => {
    const filteredRecipes = favRecipes.filter(
      (recipe) => recipe.id !== deleteId
    );

    setFavRecipes([...filteredRecipes]);
  };

  const addToFav = (recipeId) => {
    const selectedRecipe = recipes.find((recipe) => recipe.id === recipeId);

    setFavRecipes([...favRecipes, selectedRecipe]);

    console.log(selectedRecipe);
  };

  return (
    <AppContext.Provider
      value={{
        recipes,
        baseImgUrl,
        favRecipes,
        offset,
        totalResults,
        recipeToSearch,
        addToFav: addToFav,
        deleteRecipes: deleteRecipes,
        searchRecipe: searchRecipe,
        increaseOffset: increaseOffset,
      }}
    >
      <Router />
      <GlobalStyles />
    </AppContext.Provider>
  );
};

export default App;
