import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
       
      </Switch>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
