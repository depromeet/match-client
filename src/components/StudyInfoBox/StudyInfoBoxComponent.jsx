import React from "react";
import * as S from "./styles";
//import { ReactComponent as CalendarIcon } from "img/ic_date.svg";
import { CleanLink } from "components/CleanLink";
import { useSelected } from "hooks/useSelected";

const StudyInfoBoxComponent = () => {
  return (
    <CleanLink to={`/add`}>
      <S.Container>
        <S.Title>CREATE</S.Title>
        {/*<S.StudyTitle />
        <S.HR />
        <S.StudyContent />
        <S.CalendarIcon />
        <S.Calendar />

        <S.StartTime />
        <S.EndTime />
        <S.MaxParticipants />
        <S.Tag />
        <S.CreateBtn>스터디 열기</S.CreateBtn>*/}
      </S.Container>
    </CleanLink>
  );
};

export default StudyInfoBoxComponent;
