import React from 'react';
// import { Render, Router, Route, Redirect, IndexRoute } from 'jumpsuit';
import Render from 'jumpsuit/lib/render';

import AppState from 'states/AppState';
import AppRouter from './router';

// import './index.less';

const globalState = {
  app: AppState
};

Render(
  globalState,
  <AppRouter />,
  'root'
);
