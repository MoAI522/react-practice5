import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Layout from "./Layout";
import Home from "./components/organisms/Home";

import store from "./redux/store";

const app = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
      </Layout>
    </Router>
  </Provider>,
  app
);
