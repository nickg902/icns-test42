import React from "react";
import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Layout from "./Layout";
import Main from "./pages/Main";

const history = createBrowserHistory();
const routes = (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="*" component={Main} />
      </Switch>
    </Layout>
  </Router>
);

export default routes;
