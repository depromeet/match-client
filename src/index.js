import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "pages/Main";
import Login from "pages/Login";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
