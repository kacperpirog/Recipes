export const getRecipesFromLocalStorage = () =>
  localStorage.getItem("favRecipes")
    ? JSON.parse(localStorage.getItem("favRecipes"))
    : [];

export const getImgUrlFromLocalStorage = () =>
  localStorage.getItem("baseImgUrl") ? localStorage.getItem("baseImgUrl") : "";
