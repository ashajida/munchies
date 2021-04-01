import { Fragment, useEffect, useState, useContext } from "react";
import Posts from "../components/Posts";
import RecipesContext from "../providers/RecipesContext";

const Recipes = () => {

    const { recipes } = useContext(RecipesContext);

    // useEffect(() => {
    //     fetch('/api/recipes')
    //     .then(response => response.json())
    //     .then(response => console.log(response));
    // }, []);


    return(
        <Fragment>
            <Posts recipes={recipes}/>
        </Fragment>
    );
}

export default Recipes;