import React, { useState } from "react";
import * as S from "./styles";
import { useSelected } from "hooks/useSelected";
import { useForm } from "react-hook-form";
import { createGlobalStyle } from "../../styles/globalStyle";
import { DatePicker } from "components/DatePicker";
import Select from "react-select";

const StudyInfoBoxComponent = () => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => console.log(data);
  const options = [
    { value: "00:00", label: "00:00" },
    { value: "01:00", label: "01:00" },
    { value: "02:00", label: "02:00" },
    { value: "03:00", label: "03:00" },
    { value: "04:00", label: "04:00" },
    { value: "05:00", label: "05:00" },
    { value: "06:00", label: "06:00" },
    { value: "07:00", label: "07:00" },
    { value: "08:00", label: "08:00" },
    { value: "09:00", label: "09:00" },
    { value: "10:00", label: "10:00" },
    { value: "11:00", label: "11:00" },
    { value: "12:00", label: "12:00" },
    { value: "13:00", label: "13:00" },
    { value: "14:00", label: "14:00" },
    { value: "15:00", label: "15:00" },
    { value: "16:00", label: "16:00" },
    { value: "17:00", label: "17:00" },
    { value: "18:00", label: "18:00" },
    { value: "19:00", label: "19:00" },
    { value: "20:00", label: "20:00" },
    { value: "21:00", label: "21:00" },
    { value: "22:00", label: "22:00" },
    { value: "23:00", label: "23:00" },
  ];

  const handleMultiChange = (selectedOption) => {
    setValue("reactSelect", selectedOption);
    setReactSelect({ selectedOption });
  };
  const [values, setReactSelect] = useState({
    selectedOption: [],
  });

  return (
    <S.Container>
      <createGlobalStyle />
      <S.Title>CREATE</S.Title>
      <S.ContentsBox />

      <S.StudyTitle>스터디 내용</S.StudyTitle>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.TitleInput name="stuff" ref={register} />
        <S.HR />
        <S.ContentInput />
        <DatePicker />
        <Select
          className="reactSelect"
          name="filters"
          placeholder="Filters"
          value={values.selectedOption}
          options={options}
          onChange={handleMultiChange}
        />

        <S.CreateBtn type="submit">스터디 열기</S.CreateBtn>
        <S.SaveBtn>임시저장</S.SaveBtn>
      </S.Form>

      <S.FlexBox>
        <S.CalBox />
        <S.TimeBox />
        <S.PinBox />
        <S.MaxPeopleBox />
        <S.TagBox />
      </S.FlexBox>

      <S.FlexIcon>
        <S.CalendarIcon />
        <S.TimeIcon />
        <S.PinIcon />
        <S.MaxPeopleIcon />
        <S.TagIcon />
      </S.FlexIcon>

      <S.StartTime />
      <S.EndTime />
    </S.Container>
  );
};

export default StudyInfoBoxComponent;
