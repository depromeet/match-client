import React, { useState } from "react";
import "react-dates/initialize";
import {
  DateRangePicker,
  DayPickerRangeController,
  SingleDatePicker,
} from "react-dates";
import moment from "moment";
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
  left: 142px;
  top: 579px;
  z-index: 32;
  & #end {
    position: relative;
    left: 1px;
    width: 75px;
  }

  & .DateRangePicker,
  .DateRangePickerInput {
    border-style: none;
    background: #1d212c;

    .DateInput {
      /* width: 100px;
      height: 19px;
      display: flex; */
      border-style: none;
      background: #1d212c;

      .DateInput_input {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #fbfcff;
        background: #1d212c;
        border-style: none;
      }
    }

    .DateRangePickerInput__withBorder {
      border: 0;
      :hover,
      .DateInput_input__focused {
        border: none;
      }

      .CalendarDay__selected {
        background: #40fff4;
        border: #40fff4;
      }
    }

    /* .DateRangePicker_picker.DateRangePicker_picker {
      top: 43px;
      left: 2px;
      /* top: 43px !important;
      left: 2px !important;
    } */
  }
`;

const DatePickerComponent = () => {
  // const [dateRange, setDateRange] = useState({
  //   startDate: null,
  //   endDate: null,
  // });
  //const [endFocus, setEndFocus] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focus, setFocus] = useState(startDate);

  // const { startDate, endDate } = dateRange;
  // const handleOnStartDateChange = (startDate) => setDateRange({ startDate });

  // const handleOnEndDateChange = (endDate) => setDateRange({ endDate });
  // const handleOnDateChange = (startDate, endDate) =>
  //   setDateRange({ startDate, endDate });
  const isOutsideRange = (date) =>
    !date.isBetween(moment().subtract(180, "d"), moment(), "d");

  const converToMomentIfNeeded = (date) =>
    typeof date === "string" ? moment(date, "L", true) : date;

  const updateStartDate = (start) => {
    const newStartDate = converToMomentIfNeeded(start);

    if (!newStartDate) {
      return;
    }

    const validStartDateFormat =
      newStartDate.isValid() && !isOutsideRange(newStartDate);
    const isAfterCurrentEnd = endDate && newStartDate.isAfter(endDate, "d");

    if (validStartDateFormat) {
      if (isAfterCurrentEnd) {
        setEndDate(null);
      }

      setFocus("endDate");
      setStartDate(newStartDate);
    }
  };

  const updateStartEnd = (end) => {
    const newEndDate = converToMomentIfNeeded(end);

    if (!newEndDate) {
      return;
    } else if (end === null && endDate) {
      setEndDate(null);
      return;
    }

    const validEndDateFormat =
      newEndDate.isValid() && !isOutsideRange(newEndDate);
    const isBeforeCurrentStart =
      startDate && newEndDate.isBefore(startDate, "d");

    if (validEndDateFormat && !isBeforeCurrentStart) {
      setEndDate(newEndDate);
    }
  };

  const handleOnDateChange = (newDates) => {
    updateStartDate(newDates.startDate);
    updateStartEnd(newDates.endDate);
  };
  return (
    <>
      <S.StartTitle>Start</S.StartTitle>

      <StyledDatePickerWrapper>
        <DateRangePicker
          startDatePlaceholderText="날짜 추가"
          endDatePlaceholderText="날짜 추가"
          startDate={startDate} // momentPropTypes.momentObj or null,
          startDateId="start" // PropTypes.string.isRequired,
          endDate={endDate} // momentPropTypes.momentObj or null,
          endDateId="end" // PropTypes.string.isRequired,
          onDatesChange={handleOnDateChange}
          isOutsideRange={isOutsideRange}
          numberOfMonths={2}
          initialVisibleMonth={() => {
            const teste = moment().subtract(1, "months");
            console.log(teste);
            return teste;
          }}
          focusedInput={focus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focus) => setFocus(focus)} // PropTypes.func.isRequired,
        />

        {/* <SingleDatePicker
          placeholder="날짜 추가"
          numberOfMonths={2}
          date={startDate}
          onDateChange={handleOnStartDateChange}
          focused={focus}
          onFocusChange={(focus) => setFocus(focus)}
        /> */}
      </StyledDatePickerWrapper>
      <S.EndTitle>End</S.EndTitle>
      {/* <S.StyledDatePickerWrapper_SEC>
         <SingleDatePicker
          placeholder="날짜 추가"
          numberOfMonths={2}
          date={endDate}
          onDateChange={handleOnEndDateChange}
          focused={endFocus}
          onFocusChange={(endFocus) => setEndFocus(endFocus)}
        /> 
      </S.StyledDatePickerWrapper_SEC> */}
    </>
  );
};
export default DatePickerComponent;
