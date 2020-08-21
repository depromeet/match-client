import styled from "styled-components";

export const StartTitle = styled.div`
  position: absolute;
  left: 100px;
  top: 588px;
  color: #fbfcff;
  font-weight: 600;
  font-size: 16px;
`;
export const EndTitle = styled.div`
  position: absolute;
  left: 260px;
  top: 588px;
  color: #fbfcff;
  font-weight: 600;
  font-size: 16px;
`;
export const StyledDatePickerWrapper_SEC = styled.div`
  position: absolute;
  left: 300px;
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
        border-style: none;
        background: #1d212c;
      }

      .SingleDatePicker_picker.SingleDatePicker_picker {
        top: 43px;
        left: 2px;
        /* top: 43px !important;
      left: 2px !important; */
      }
    }
  }
`;
