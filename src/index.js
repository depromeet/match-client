import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "pages/Main";
import Login from "pages/Login";
import StudyInfo from "pages/StudyInfo";
import CreateStudy from "pages/CreateStudy";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/studyInfo" exact component={StudyInfo} />
      <Route path="/create" exact component={CreateStudy} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
