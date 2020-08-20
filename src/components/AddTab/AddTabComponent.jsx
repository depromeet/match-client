import React from "react";
import * as S from "./styles";
import { Route } from "react-router-dom";
import { StudyInfoBox } from "components/StudyInfoBox";

const AddTabComponent = ({ match }) => {
  return (
    <S.Container>
      <Route
        path={"/add"}
        render={() => (
          <>
            <StudyInfoBox />
          </>
        )}
      />
    </S.Container>
  );
};

export default AddTabComponent;
