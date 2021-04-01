import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Fragment, useState, useEffect, useContext } from 'react';
import AuthContext from '../providers/AuthContext';

const ProtectedRoute = (props) => {

    const { component: Component,  ...rest } = props;

    const { isAuth } = useContext(AuthContext);

    const cachedIsAuth = localStorage.getItem('isAuth');

    

    const getStatus = () => {
        let status;
        if(isAuth) {
            return status = isAuth;
        } 

        if(cachedIsAuth !== null) {
           return status = true;
        }

        return isAuth;
    }

    console.log(getStatus());

     
    return(
        <Fragment>
            { 
                <Route {...rest} render={(props) => {
                    return(getStatus()
                        ? <Component {...props} />
                        : <Redirect to="/login" />)
                }} />
            }
        </Fragment>
    );
}

export default ProtectedRoute;