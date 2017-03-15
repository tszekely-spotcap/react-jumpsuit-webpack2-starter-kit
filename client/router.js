import React from 'react';

import Router from 'jumpsuit/lib/router';
import Route from 'react-router/lib/Route';
import Redirect from 'react-router/lib/Redirect';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from './components/App';
import Home from './components/Home';

const AppRouter = () => (
  <Router>
    <Route
      component={App}
      path="/">

      <IndexRoute
        component={Home} />

      <Redirect from="*" to="/" />
    </Route>
  </Router>
);

export default AppRouter;
