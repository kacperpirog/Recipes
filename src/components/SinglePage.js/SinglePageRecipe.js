import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import AppContext from "../../context/context";
import "./SinglePageRecipe.css";
const SinglePageRecipe = () => {
  const { baseImgUrl, addToFav } = useContext(AppContext);

  const location = useLocation();
  const { title, image, id, servings, readyInMinutes } = location.state;
  console.log(location);

  return (
    <div className="div__wrapper">
      <h1>{title}</h1>
      <img src={`${baseImgUrl}${image}`} alt={title} />
      <h3>Time: {readyInMinutes} min</h3>
      <h4>Servings: {servings}</h4>
      <p>{id}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sunt
        itaque at explicabo perspiciatis odit minus voluptatibus, culpa aperiam
        rem enim cum, amet recusandae voluptatum quo!
      </p>
      <button className="fav__Btn" onClick={() => addToFav(id)}>
        add to fav
      </button>
    </div>
  );
};
export default SinglePageRecipe;
