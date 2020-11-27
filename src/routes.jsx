import React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Layout from './layout/Layout';
import Me from './pages/Me';
import Build from './pages/Build';

const history = createBrowserHistory();
const routes = (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route exact path="/" component={Me} />
        <Route exact path="/build" component={Build} />
        <Route path="*" component={Me} />
      </Switch>
    </Layout>
  </Router>
);

export default routes;
