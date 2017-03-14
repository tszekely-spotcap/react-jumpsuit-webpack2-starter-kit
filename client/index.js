import React from 'react';
import { Render, Router, Route, Redirect, IndexRoute } from 'jumpsuit';

import AppState from 'states/AppState';

import App from 'components/App';
import Home from 'components/Home';

import 'index.html';

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
