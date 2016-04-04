import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App } from './App';
import { MessageBrowser } from './components/MessageBrowser';
import { MessageRoute } from './components/MessageRoute';

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MessageBrowser} />
      <Route path=":id" component={MessageRoute} />
    </Route>
  </Router>
);
