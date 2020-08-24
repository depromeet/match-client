import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import Font from "./FontStyle";
import { DatePicker } from "components/DatePicker";
import Select from "react-select";
import { TagBox } from "components/TagBox";

const StudyInfoBoxComponent = (props) => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => console.log(data);
  const calOptions = " ";

  const personOptions = [
    { value: "5", label: "최대 5명" },
    { value: "10", label: "최대 10명" },
    { value: "15", label: "최대 15명" },
  ];
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

  const [values, setReactSelect] = useState({
    selectedOption: [],
  });
  const [endValues, setReactEndSelect] = useState({
    selectedOption: [],
  });
  const [personValues, setReactPersonSelect] = useState({
    selectedOption: [],
  });

  const [calValues, setReactCalSelect] = useState({
    selectedOption: "",
  });

  const handleMultiChange = (selectedOption) => {
    setValue("selectStartTime", selectedOption);
    setReactSelect({ selectedOption });
  };
  const handleMultiEndChange = (selectedOption) => {
    setValue("selectEndTime", selectedOption);
    setReactEndSelect({ selectedOption });
  };
  const handlePersonChange = (selectedOption) => {
    setValue("selectPerson", selectedOption);
    setReactPersonSelect({ selectedOption });
  };
  const handleCalChange = (selectedOption) => {
    setValue("selectCalendar", selectedOption);
    setReactCalSelect({ selectedOption });
  };

  useEffect(() => {
    register({ name: "selectStartTime" });
    register({ name: "selectEndTime" });
    register({ name: "selectPerson" });
    register({ name: "selectCalendar" });
  }, [register]);

  /*time-select style*/
  const customStyles = {
    singleValue: () => ({
      color: "#FBFCFF",
      fontFamily: "Noto Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
    }),
    indicatorsContainer: () => ({
      borderStyle: "none",
    }),
    control: (base, state) => ({
      ...base,
      background: "#1D212C",
      borderStyle: "none",
      width: 110,
      fontSize: "14px",
      color: "#FBFCFF",
      //color: state.isSelected ? "#FBFCFF" : "#5B5E67",
    }),
    // input: () => ({
    //   background: "#1E222E",
    //   width: 70,
    //   borderStyle: 0,
    // }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: 0,
      backgroundColor: "#1E222E",
      color: state.isSelected ? "#2E8C8E" : "#C4C5CB",
    }),
  };

  /*participants-select style*/
  const customStyles_person = {
    singleValue: () => ({
      color: "#FBFCFF",
      fontFamily: "Noto Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
    }),
    indicatorsContainer: () => ({
      borderStyle: "none",
    }),
    control: (base, state) => ({
      ...base,
      background: "#1D212C",
      borderStyle: "none",
      width: 120,
      fontSize: "14px",
      color: "#FBFCFF",
    }),

    option: (provided, state) => ({
      ...provided,
      borderBottom: 0,
      backgroundColor: "#1E222E",
      color: state.isSelected ? "#2E8C8E" : "#C4C5CB",
    }),
  };

  return (
    <S.Container>
      <Font />

      <S.Title>CREATE</S.Title>
      <S.ContentsBox />

      <S.StudyTitle>스터디 내용</S.StudyTitle>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.TitleInput name="title" ref={register} />
        <S.HR />
        <S.ContentInput name="content" ref={register} />
        <DatePicker
          name="calendar"
          startDate={props.startDate}
          value={calValues.selectCalendar}
          onChange={handleCalChange}
          option={calOptions}
        />

        <S.StartTitle>Start</S.StartTitle>
        <S.SelDiv>
          <Select
            className="reactSelect"
            name="start-time"
            placeholder="시간 추가"
            value={values.selectStartTime}
            options={options}
            onChange={handleMultiChange}
            styles={customStyles}
          />
        </S.SelDiv>
        <S.EndTitle>End</S.EndTitle>

        <S.SelDiv_Sec>
          <Select
            className="reactSelectEndTime"
            name="end-time"
            placeholder="시간 추가"
            value={endValues.selectEndTime}
            options={options}
            onChange={handleMultiEndChange}
            styles={customStyles}
          />
        </S.SelDiv_Sec>

        <S.Online>온라인</S.Online>
        <S.Offline>오프라인</S.Offline>

        <S.SelPersonDiv>
          <Select
            className="reactSelectPerson"
            name="person"
            placeholder="인원 추가"
            value={personValues.selectPerson}
            options={personOptions}
            onChange={handlePersonChange}
            styles={customStyles_person}
          />
        </S.SelPersonDiv>

        <TagBox />
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
