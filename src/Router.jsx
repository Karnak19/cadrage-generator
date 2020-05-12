import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Home from './views/Home.page';
import Layout from './layout';
import Generate from './views/Generate.page';

function Router() {
  const { isAuth } = useSelector((state) => state);
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <AuthRoute isAuth={isAuth} path="/generate" component={Generate} />
        </Switch>
      </Layout>
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
  component: PropTypes.func.isRequired,
};

export default Router;
