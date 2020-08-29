import React from "react";
import * as S from "./styles";
import { Route } from "react-router-dom";
import { StudyList } from "components/StudyList";
import { CategoryList } from "components/CategoryList";
import { StudyInfoBox } from "components/StudyInfoBox";

const MainTabComponent = ({ match }) => {
  console.log(match);
  return (
    <S.Container>
      <Route
        path={"/"}
        render={() => (
          <>
            <StudyList />
            <CategoryList />
            <S.FontBlur />
          </>
        )}
      />
      <Route path={"/add"} component={StudyInfoBox} />
      {/* <Route path={"/study"} component={CategoryList} /> */}
      {/* <Route path={match.path} exact component={StudyList} /> */}
    </S.Container>
  );
};

export default MainTabComponent;
