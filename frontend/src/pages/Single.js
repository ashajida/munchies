import { Fragment, useContext, useEffect, useState } from "react";
import Recipes from "./Recipes";
import Post from "../components/Single";
import RecipesContext from "../providers/RecipesContext";

const Single = ({match: { params }}) => {
    const [recipe, setRecipe] = useState();
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
       setIsloading(true);
        fetch(`/api/recipes/${params.id}`)
        .then(res => res.json())
        .then(res => {
            setRecipe(res)
            setIsloading(false);
        });

    }, [])

    return(
        <Fragment>
            {recipe && <Post recipeObj={recipe}/>}
        </Fragment>
    );
}

export default Single;