import './App.css';
import NavBar from './components/Header/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './pages/Home';
import Footer from './components/Footer';
import Recipes from './pages/Recipes';
import Single from './pages/Single';
import AddRecipe from './pages/admin/AddRecipe';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/admin/Dashboard';
import EditRecipe from './pages/EditRecipe';
import ProtectedRoute from './Routes/ProtectedRoute';
import { useState, useEffect } from 'react';
import AuthContext from './providers/AuthContext';
import RecipesContext from './providers/RecipesContext';
import CategoriesContext from './providers/CategoriesContext';
import AddCategory from './pages/admin/AddCategory';

function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {

      const cachedRecipes = localStorage.getItem('recipes') && localStorage.getItem('recipes');
      const cachedCategories = localStorage.getItem('categories') && localStorage.getItem('categories');
      const cachedisAuth = localStorage.getItem('isAuth') && localStorage.getItem('isAuth');

      if(cachedisAuth !== null) {
        setIsAuth(cachedisAuth);
      }

      if(cachedRecipes !== null) {
        setRecipes(JSON.parse(cachedRecipes));
       
      } else {
        fetch('/api/recipes')
        .then(res => res.json())
        .then(res => {
            setRecipes(res);
            localStorage.setItem('recipes', JSON.stringify(res));
        });
      }
     
      if(cachedCategories !== null) {
        setCategories(JSON.parse(cachedCategories));
      } else {
        fetch('/api/categories')
        .then((res) => res.json())
        .then(res => {
            setCategories(res);
            localStorage.setItem('categories', JSON.stringify(res));
        });
      }

      fetch('/api/refresh', {
        method: 'post',
      })
        .then((res) => res.json())
        .then(res => {
            console.log(res);
        });
     
    }, []);

   

  return (

    <Router>
       <GlobalStyle />
       <CategoriesContext.Provider value={{categories, setCategories}}>
       <RecipesContext.Provider value={{recipes, setRecipes}}>
       <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <div className="App">
        <NavBar />
       <Switch>
          <Route exact path="/" component={Home} />
          <Route  exact path="/recipes" component={Recipes} />
          <ProtectedRoute  exact path="/recipes/add" component={AddRecipe}  />
          <Route  exact path="/recipes/:id" component={Single} />
          <ProtectedRoute exact path="/recipes/:id/edit" component={EditRecipe} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/category/add" component={AddCategory} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
      </div>
      </AuthContext.Provider>
      </RecipesContext.Provider>
      </CategoriesContext.Provider>
    </Router>
  );
}

export default App;
