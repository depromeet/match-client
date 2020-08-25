import React, { Fragment } from "react";
import * as S from "./styles";

const AttendeeListComponent = ({ profileImg, username }) => {
  return (
    <S.Container>
      <S.ProfileImg>{profileImg}</S.ProfileImg>
      <S.Username>{username}</S.Username>
    </S.Container>
  );
};

export default AttendeeListComponent;
