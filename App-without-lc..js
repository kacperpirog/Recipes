import { Component } from "react";
import axios from "axios";
import Router from "./routing/Router";
import AppContext from "./context/context";

class App extends Component {
  state = {
    recipes: [],
    favRecipes: [],
    baseImgUrl: "",
    offset: 0,
    recipeToSearch: "",
    totalResults: 0,
  };

  componentDidUpdate(prevProps, prevState) {}

  searchRecipe = (e) => {
    e.preventDefault();

    const recipeName = e.target.recipeName.value;
    const recipeNumber = e.target.recipeNumber.value;

    // const number = e.target.numberInput.value;

    console.log(typeof number);
    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=ddcd73413cd8481681d6dd72083a6113&query=${recipeName}&number=${recipeNumber}`
      )
      .then((res) => {
        console.log(res, "RES");
        this.setState({
          recipes: res.data.results,
          baseImgUrl: res.data.baseUri,
          offset: parseInt(recipeNumber),
          recipeToSearch: recipeName,
          totalResults: res.data.totalResults,
        });
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));

    // Metody HTTP:
    // 1.GET -> umożliwia pobieranie danych z API lub z bazy danych
    // 2.POST -> umożliwlia dodawanie danych do API lub bazy danych
    // 3.PUT -> umożliwia edytowanie danych z API lub bazy danych
    // 4.DELETE -> umożliwia usuwanie danych z API lub z bazy
  };

  get10MoreRecipes = () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=ddcd73413cd8481681d6dd72083a6113&query=${this.state.recipeToSearch}&number=10&offset=${this.state.offset}`
      )
      .then((res) => {
        console.log(res, "RES");
        this.setState({
          recipes: [...this.state.recipes, ...res.data.results],
          offset: this.state.offset + 10,
        });
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  deleteRecipes = (deleteId) => {
    const filteredRecipes = this.state.favRecipes.filter(
      (recipe) => recipe.id !== deleteId
    );

    this.setState({
      favRecipes: [...filteredRecipes],
    });
  };

  addToFav = (recipeId) => {
    const selectedRecipe = this.state.recipes.find(
      (recipe) => recipe.id === recipeId
    );

    this.setState({
      favRecipes: [...this.state.favRecipes, selectedRecipe],
    });

    console.log(selectedRecipe);
  };

  // selectedRecipe = (addToFavId) => {
  //   const mappedRecipes = this.state.recipes.map((recipe) => {
  //     if (recipe.id === addToFavId) {
  //       return {
  //         ...recipe,
  //         selectedRecipe: !recipe.selectedRecipe,
  //       };
  //     } else {
  //       return recipe;
  //     }
  //   });

  //   this.setState({
  //     favRecipes: [...this.state.favRecipes, mappedRecipes],
  //   });
  // };

  render() {
    const { recipes, baseImgUrl, favRecipes, offset, totalResults } =
      this.state;

    return (
      <AppContext.Provider
        value={{
          recipes,
          baseImgUrl,
          favRecipes,
          offset,
          totalResults,
          addToFav: this.addToFav,
          deleteRecipes: this.deleteRecipes,
          searchRecipe: this.searchRecipe,
          get10MoreRecipes: this.get10MoreRecipes,
        }}
      >
        <Router />
      </AppContext.Provider>
    );
  }
}

export default App;
