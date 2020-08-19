import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 60%;
`;

export const Title = styled.div`
  position: sticky;
  margin: 20px 20px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-transform: uppercase;

  color: #fbfcff;
`;
export const StudyTitle = styled.input`
  position: absolute;
  left: 10px;
  top: 11.89%;
  background: #373c4a;
  //border-style: none;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-transform: capitalize;

  /* text_white */

  color: #fbfcff;
`;
export const StudyContent = styled.textarea`
  position: absolute;
  width: 320px;
  height: 274px;
  left: 10px;
  top: 175px;
  background: #373c4a;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
`;
export const Calendar = styled.div``;
export const StartTime = styled.div``;
export const EndTime = styled.div``;
export const MaxParticipants = styled.input``;
export const Tag = styled.input``;
export const CreateBtn = styled.button`
  position: absolute;
  width: 260px;
  height: 60px;
  left: 30px;
  top: 980px;
  /* match_blue */

  background: #40fff4;
  border-radius: 2px;
  border-style: none;
  color: black;
`;
export const CalendarIcon = styled.div``;

export const HR = styled.hr`
  position: absolute;
  top: 160px;
  left: 10px;
  width: 330px;
  border: 1px dashed #596072;
`;
