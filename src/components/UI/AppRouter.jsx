import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import About from '../../Pages/About';
import PostidPage from '../../Pages/PostidPage';
import Posts from '../../Pages/Posts';
import { AuthContext } from '../Context';
import { privateRoutes, publicRoutes } from '../Router/Route';
import Loader from './Loader/Loader';
const AppRouter = () => {
  

const {isAuth, isLoading} = useContext(AuthContext)
    
if (isLoading) {
    return <Loader/>
}

return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path} />
                      
                )}
                <Redirect to='/posts' />
            </Switch>


            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact} 
                        key={route.path}/>
                )}
                <Redirect to='/login' />
            </Switch>

    )
}

export default AppRouter