import React from "react";
import * as S from "./styles";
import { Map } from "../../components/Map";
import { Sidebar } from "../../components/Sidebar";
import { MainTab } from "components/MainTab";
import { Route } from "react-router-dom";

const Main = ({ match }) => {
  return (
    <S.Container>
      <Sidebar />
      <Route path={match.path} exact component={MainTab} />
      <Map />
      <S.Logo />
    </S.Container>
  );
};

export default Main;
