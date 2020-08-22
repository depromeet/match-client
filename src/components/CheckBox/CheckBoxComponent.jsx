import React from "react";
import * as S from "./styles";
import { ReactComponent as CheckIcon } from "../../assets/images/check.svg";

const CheckBoxComponent = ({ checked, setChecked }) => {
  return (
    <S.Container>
      <S.CheckBox
        type={"checkbox"}
        checked={checked}
        onChange={() => setChecked(!checked)}
        id="cb"
      />
      <S.Label htmlFor="cb" checked={checked}>
        <CheckIcon />
      </S.Label>
      <S.Title>지도를 움직이며 검색하기</S.Title>
    </S.Container>
  );
};

export default CheckBoxComponent;
