import React, { Fragment } from "react";
import * as S from "./styles";

const AttendeeListComponent = ({ profileImg, username }) => {
  return (
    <S.Container>
      <S.ProfileImg src={profileImg} alt="img" />
      <S.Username>{username}</S.Username>
    </S.Container>
  );
};

export default AttendeeListComponent;
