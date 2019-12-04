import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./index.css";
import 'bulma'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";
import Portfolio from "./components/portfolio";
import Stock from "./components/stock";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Portfolio} />
      <Route path="/stock" exact component={Stock} />
      
      </Switch>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
