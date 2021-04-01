import { Fragment, useContext, useEffect, useState } from "react";
import Post from "../components/Admin/EditRecipe";
import Edit from "../components/Admin/EditRecipe";
import RecipesContext from "../providers/RecipesContext";
import CategoriesContext from "../providers/CategoriesContext";

const EditRecipe = ({match: { params }}) => {

  

    return(
        <Fragment>
           <Edit id={params.id}/>
        </Fragment>
    );
}

export default EditRecipe;