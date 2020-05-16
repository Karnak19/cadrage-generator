import React, { lazy, Suspense } from 'react';
import { bool, func, object, oneOfType } from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';

import Layout from './layout';

const Home = lazy(() => import('./views/Home.page'));
const Generate = lazy(() => import('./views/Generate.page'));

function Router() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <AuthRoute isAuth={isAuth} path="/generate" component={Generate} />
          </Switch>
        </Suspense>
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
  isAuth: bool.isRequired,
  component: oneOfType([func, object]).isRequired, // React lazy create an object instead of a function
};

export default Router;
