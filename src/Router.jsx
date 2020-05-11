import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Home from './views/Home.page';

function Router() {
  const { isAuth } = useSelector((state) => state);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <AuthRoute
          exact
          isAuth={isAuth}
          path="/should-be-auth"
          component={Home}
        />
      </Switch>
    </BrowserRouter>
  );
}

function AuthRoute({ isAuth, component: Component, ...rest }) {
  return isAuth ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/" />
  );
}

AuthRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.node.isRequired,
};

export default Router;
