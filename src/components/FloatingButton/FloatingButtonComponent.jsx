import React from "react";
import * as S from "./styles";

const FloatingButtonComponent = ({ text, onClickHandler }) => {
  return <S.Container onClick={onClickHandler}>{text}</S.Container>;
};

export default FloatingButtonComponent;
