import React, { useState } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import styled from "styled-components";
import "react-dates/lib/css/_datepicker.css";
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
  color {
    color: "#f5200c";
  }
  & .SingleDatePicker,
  .SingleDatePickerInput {
    .DateInput {
      width: 100%;
      height: 40px;
      display: flex;

      .DateInput_input {
        font-size: 1rem;
        border-bottom: 0;
        padding: 12px 16px 14px;
      }
    }

    /* .SingleDatePickerInput__withBorder {
      border-radius: 4px;
      overflow: hidden;

      :hover,
      .DateInput_input__focused {
        border: 1px solid red;
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
    // } */
  }
`;

const DatePickerComponent = () => {
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [focus, setFocus] = useState(null);

  const { startDate, endDate } = dateRange;

  const handleOnDateChange = (startDate, endDate) =>
    setDateRange({ startDate, endDate });

  return (
    <StyledDatePickerWrapper>
      <DateRangePicker
        numberOfMonths={1}
        startdate={startDate}
        startDateId="start_date_id"
        enddate={endDate}
        endDateId="end_date_id"
        onDateChange={handleOnDateChange}
        focused={focus}
        onFocusChange={(focus) => setFocus(focus)}
      />
    </StyledDatePickerWrapper>
  );
};
export default DatePickerComponent;
