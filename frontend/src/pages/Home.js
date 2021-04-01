import { Fragment, useContext, useEffect } from "react";
import Hero from '../components/Home/Hero';
import Categories from "../components/Home/Categories";
import FeaturedRecipies from "../components/Home/FeaturedRecipes";
import LatestPosts from "../components/Home/LatestPosts";
import Banner from "../components/Home/Banner";
import RecipesContext from "../providers/RecipesContext";
import CategoriesContext from "../providers/CategoriesContext";

const Home = () => {
    const { categories, setCategories } = useContext(CategoriesContext);

    return(
        <Fragment>
            <Hero />
            <Categories categoriesObj={categories}/>
            <LatestPosts />
            <Banner />
        </Fragment>
    );
}

export default Home;