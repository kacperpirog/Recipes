import React from "react";
import Button from "../atoms/Button";

const DeleteFavoriteList = ({ id, deleteRecipes }) => {
  return (
    <>
      <Button onClick={() => deleteRecipes(id)}>Delete</Button>
    </>
  );
};

export default DeleteFavoriteList;
