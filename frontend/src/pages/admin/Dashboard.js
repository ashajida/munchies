import { Fragment, useEffect, useState } from "react";
import AdminDashboard from '../../components/Admin/Dashboard';

const Dashboard = () => {

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('/api/recipes')
        .then(res => res.json())
        .then(res =>  setRecipes(res));
    },[]);

    return(
        <Fragment>
            <AdminDashboard recipesObj = {recipes} />
        </Fragment>
    );
}

export default Dashboard;