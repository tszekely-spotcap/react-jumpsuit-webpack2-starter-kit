import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createRoutes, RouterContext, match } from 'react-router';
import { Provider } from 'react-redux';

import appRouter from '../client/router';

// const AppRouter = require('../client/router');

const app = express();
const routes = createRoutes(appRouter());

app.get('*', (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    const content = renderToString(
      <Provider store={{}}>
        <RouterContext {...renderProps}/>
      </Provider>
    );
    // pass content to jade view (we'll see it in a while)

    console.log(error, redirectLocation, renderProps, content);

    res.send('aaa');
  })
});

app.listen(1337, () => {
  console.log('running');
});
