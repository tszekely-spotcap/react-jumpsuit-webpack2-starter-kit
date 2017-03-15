import React from 'react';
// import { Render, Router, Route, Redirect, IndexRoute } from 'jumpsuit';
import Render from 'jumpsuit/lib/render';
import Router from 'jumpsuit/lib/router';
import Route from 'react-router/lib/Route';
import Redirect from 'react-router/lib/Redirect';
import IndexRoute from 'react-router/lib/IndexRoute';

import AppState from 'states/AppState';

import App from 'components/App';
import Home from 'components/Home';

import './index.less';
const globalState = {
  app: AppState
};

Render(
  globalState,
  <Router>
    <Route
      component={App}
      path="/">

      <IndexRoute
        component={Home} />

      <Redirect from="*" to="/" />
    </Route>
  </Router>,
  'root'
);
