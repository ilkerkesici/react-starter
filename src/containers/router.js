import React from 'react';
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { Dashboard } from '../pages/private';
import { Login, Landing } from '../pages/public';
import { Navbar } from '../components';
import SessionHelper from '../helpers/SessionHelper';

const auth = [
  {
    path: "/login",
    component: Login,
  },
]

const privateRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
  }
];


/**
 * We write the private routes here
 * Id user is not logged in the system, the user cannot see this routes
 * @param {*} param0 params of the component
 */
const PrivateRoute = ({ children, ...rest }) => {
  const isLoggedIn = SessionHelper.getIsLoggedIn();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
      }
    />
  );
}

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing}>

          </Route>
          {
            auth.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            )
            )
          }
          <PrivateRoute path="/">
            {privateRoutes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                <Navbar component={<route.component />} />
              </Route>
            ))}
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;