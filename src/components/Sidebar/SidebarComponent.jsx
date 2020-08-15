import React from "react";
import * as S from "./styles";

const SidebarComponent = () => {
  return (
    <S.Container>
      <S.Menu />
      <S.HomeBtn />
      <S.PlusBtn />
      <S.CalBtn />
      <S.MsgBtn />
      <S.CommentBtn />
      <S.SetBtn />
    </S.Container>
  );
};

export default SidebarComponent;
