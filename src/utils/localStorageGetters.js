export const getRecipesFromLocalStorage = () =>
  localStorage.getItem("favRecipes")
    ? JSON.parse(localStorage.getItem("favRecipes"))
    : [];

export const getImgUrlFromLocalStorage = () =>
  localStorage.getItem("baseImgUrl") ? localStorage.getItem("baseImgUrl") : "";

// export const getImgUrlFromLocalStorage = () =>
//   localStorage.getItem("baseImgUrl") && localStorage.getItem("baseImgUrl");

// export const getRecipesFromLocalStorage = () => {
//   let localStorageFavReceipes;
//   if (localStorage.getItem("favRecipes")) {
//     localStorageFavReceipes = JSON.parse(localStorage.getItem("favRecipes"));
//   } else {
//     localStorageFavReceipes = [];
//   }

//   return localStorageFavReceipes;
// };
