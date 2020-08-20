import React, { useState } from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
//import moment from "moment";
import styled from "styled-components";
import "react-dates/lib/css/_datepicker.css";
import * as S from "./styles";

// import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
// import aphroditeInterface from "react-with-styles-interface-aphrodite";
// import DefaultTheme from "react-dates/lib/theme/DefaultTheme";

// ThemedStyleSheet.registerInterface(aphroditeInterface);
// ThemedStyleSheet.registerTheme({
//   reactDates: {
//     ...DefaultTheme.reactDates,
//     color: {
//       //...DefaultTheme.reactDates.color,

//       color: "#f5200c",
//     },

//     highlighted: {
//       backgroundColor: "#82E0AA",
//       backgroundColor_active: "#58D68D",
//       backgroundColor_hover: "#58D68D",
//       color: "#186A3B",
//       color_active: "#186A3B",
//       color_hover: "#186A3B",
//     },
//   },
// });

const StyledDatePickerWrapper = styled.div`
  position: absolute;
  left: 140px;
  top: 588px;

  & .SingleDatePicker,
  .SingleDatePickerInput {
    .DateInput {
      width: 100px;
      height: 19px;
      display: flex;
      border-style: none;
      .DateInput_input {
        font-family: Noto Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #fbfcff;
        background: #1d212c;
        border-style: none;
      }
    }

    .SingleDatePickerInput__withBorder {
      overflow: hidden;
      border: 0;
      :hover,
      .DateInput_input__focused {
        border: none;
      }

      .CalendarDay__selected {
        background: blue;
        border: blueviolet;
      }
    }

    .SingleDatePicker_picker.SingleDatePicker_picker {
      top: 43px;
      left: 2px;
      /* top: 43px !important;
      left: 2px !important; */
    }
  }
`;

const DatePickerComponent = () => {
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [focus, setFocus] = useState(null);
  const [endFocus, setEndFocus] = useState(null);

  const { startDate, endDate } = dateRange;
  const handleOnStartDateChange = (startDate) => setDateRange({ startDate });

  const handleOnEndDateChange = (endDate) => setDateRange({ endDate });

  return (
    <>
      <S.StartTitle>Start</S.StartTitle>
      <StyledDatePickerWrapper>
        <SingleDatePicker
          placeholder="날짜 추가"
          numberOfMonths={2}
          date={startDate}
          onDateChange={handleOnStartDateChange}
          focused={focus}
          onFocusChange={(focus) => setFocus(focus)}
        />
      </StyledDatePickerWrapper>
      <S.EndTitle>End</S.EndTitle>
      <S.StyledDatePickerWrapper_SEC>
        <SingleDatePicker
          placeholder="날짜 추가"
          numberOfMonths={2}
          date={endDate}
          onDateChange={handleOnEndDateChange}
          focused={endFocus}
          onFocusChange={(endFocus) => setEndFocus(endFocus)}
        />
      </S.StyledDatePickerWrapper_SEC>
    </>
  );
};
export default DatePickerComponent;
