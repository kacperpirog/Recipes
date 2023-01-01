import React from "react";

const DeleteFavoriteList = ({ id, deleteRecipes }) => {
  return (
    <>
      <button onClick={() => deleteRecipes(id)}>Delete</button>
    </>
  );
};

export default DeleteFavoriteList;
