import React from "react";
import * as S from "./styles";
//import { ReactComponent as CalendarIcon } from "img/ic_date.svg";
import { CleanLink } from "components/CleanLink";
import { useSelected } from "hooks/useSelected";
import { useForm } from "react-hook-form";
import { createGlobalStyle } from "../../styles/globalStyle";
import { DatePicker } from "components/DatePicker";

const StudyInfoBoxComponent = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <S.Container>
      <createGlobalStyle />
      <S.Title>CREATE</S.Title>
      <S.Box />
      <S.StudyTitle>스터디 내용</S.StudyTitle>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.TitleInput name="stuff" ref={register} />
        <S.HR />
        <S.ContentInput />
        <S.CreateBtn type="submit">스터디 열기</S.CreateBtn>
      </S.Form>
      <S.CalBox />
      <S.CalendarIcon />
      <DatePicker />

      <S.StartTime />
      <S.EndTime />
    </S.Container>
  );
};

export default StudyInfoBoxComponent;
